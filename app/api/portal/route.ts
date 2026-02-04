import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { stripe } from '@/lib/stripe';
import dbConnect from '@/lib/db';
import User from '@/models/User';

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
  }

  await dbConnect();
  const user = await User.findOne({ email: session.user.email });

  if (!user || !user.stripeCustomerId) {
    return NextResponse.json({ error: 'User or customer ID not found' }, { status: 404 });
  }

  try {
    const portalSession = await stripe.billingPortal.sessions.create({
      customer: user.stripeCustomerId,
      return_url: `${process.env.NEXT_PUBLIC_URL}/client-portal`,
    });

    return NextResponse.json({ url: portalSession.url });
  } catch (error) {
    console.error('Stripe portal session creation error:', error);
    return NextResponse.json({ error: 'Failed to create portal session' }, { status: 500 });
  }
}
