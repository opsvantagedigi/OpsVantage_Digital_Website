import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/route';
import dbConnect from '@/lib/db';
import User from '@/models/User';

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { priceId } = await request.json();
  const host = request.headers.get('host');
  const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';

  try {
    await dbConnect();
    const user = await User.findOne({ email: session.user.email });

    if (!user) {
        return NextResponse.json({ error: 'User not found.' }, { status: 404 });
    }

    const checkoutSession = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'subscription',
      customer_email: user.email,
      success_url: `${protocol}://${host}/portal/dashboard?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${protocol}://${host}/productized-systems`,
      metadata: {
        userId: user._id.toString(),
      }
    });

    return NextResponse.json({ sessionId: checkoutSession.id });
  } catch (error) {
    console.error('Error creating Stripe session:', error);
    return NextResponse.json({ error: 'Error creating checkout session' }, { status: 500 });
  }
}
