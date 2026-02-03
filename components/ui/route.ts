import { NextResponse } from 'next/server';

// --- Governance Note ---
// This is a Next.js API Route for handling contact form submissions.
// For this implementation, it simulates a successful submission. In a production
// environment, this is where you would integrate an email service like Resend,
// SendGrid, or AWS SES to send the form data to the business.

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, message } = body;

    // --- Production TODO ---
    // 1. Add server-side validation (e.g., using Zod).
    // 2. Implement email sending logic here.
    console.log('New Contact Form Submission:', { name, email, company, message });

    return NextResponse.json({ message: 'Inquiry received. We will be in touch shortly.' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'An error occurred. Please try again.' }, { status: 500 });
  }
}