import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { buffer } from 'micro';
import dbConnect from '@/lib/db';
import User from '@/models/User';
import { stripe } from '@/lib/stripe';

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(req: NextRequest) {
  const buf = await buffer(req.body as any);
  const sig = req.headers.get('stripe-signature')!;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(buf, sig, webhookSecret);
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : 'Unknown error';
    console.log(`❌ Error message: ${errorMessage}`);
    return NextResponse.json({ error: `Webhook Error: ${errorMessage}` }, { status: 400 });
  }

  await dbConnect();

  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object as Stripe.Checkout.Session;
      
      if (!session.customer || !session.subscription) {
        return NextResponse.json({ error: 'Missing customer or subscription in session.' }, { status: 400 });
      }

      await User.findOneAndUpdate(
        { email: session.customer_details?.email },
        {
          stripeCustomerId: session.customer as string,
          stripeSubscriptionId: session.subscription as string,
          stripeSubscriptionStatus: 'active',
        },
        { upsert: true, new: true }
      );
      break;
    }
    case 'customer.subscription.updated': {
        const subscription = event.data.object as Stripe.Subscription;
        await User.findOneAndUpdate(
          { stripeSubscriptionId: subscription.id },
          {
            stripeSubscriptionStatus: subscription.status,
            stripePriceId: subscription.items.data[0].price.id,
          }
        );
        break;
      }
    case 'customer.subscription.deleted': {
      const subscription = event.data.object as Stripe.Subscription;
      await User.findOneAndUpdate(
        { stripeSubscriptionId: subscription.id },
        {
          stripeSubscriptionStatus: 'canceled',
        }
      );
      break;
    }
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  return NextResponse.json({ received: true });
}
