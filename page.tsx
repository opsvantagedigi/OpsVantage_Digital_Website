import Script from 'next/script';

// --- Governance Note ---
// This page integrates a third-party scheduling tool (Calendly) for booking
// strategy sessions. It uses the native Next.js <Script> component for optimal
// performance. The copy is written to be low-pressure and value-oriented,
// aligning with the "Emotional Awareness" pillar.

export default function BookingPage() {
  return (
    <div className="container py-24 sm:py-32">
      <div className="mb-16 max-w-3xl mx-auto text-center">
        <h1 className="font-orbitron text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Book a Strategy Session
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          A complimentary 30-minute session to discuss your goals, challenges, and how OpsVantage Digital can help you build a scalable revenue engine. No pressure, just a productive conversation.
        </p>
      </div>

      {/* --- Calendly Embed --- */}
      {/* Governance: Replace the 'data-url' with your actual Calendly link. */}
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/opsvantagedigi/30min"
        style={{ minWidth: '320px', height: '700px' }}
      />
      <Script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async />
    </div>
  );
}