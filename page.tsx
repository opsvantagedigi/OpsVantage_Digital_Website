// --- Governance Note ---
// This is a static page for the Refund Policy. It's crucial for managing
// client expectations regarding service-based engagements. The content is
// AI-generated for a digital services business and should be reviewed.

export default function RefundPolicyPage() {
  return (
    <div className="container py-24 sm:py-32">
      <div className="max-w-3xl mx-auto prose prose-invert prose-lg">
        <h1 className="font-orbitron">Refund Policy</h1>
        <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
        <p>
          At OpsVantage Digital, we are committed to providing our clients with exceptional service and tangible results. Our policies are designed to be fair and transparent.
        </p>
        <h2>Digital Services</h2>
        <p>
          Due to the nature of our services (including but not limited to web engineering, SaaS development, SEO, and digital stewardship), which involve significant allocation of time, resources, and intellectual property, we do not offer refunds for services that have already been rendered or are in progress.
        </p>
        <p>
          Payments for custom development projects are made in increments as outlined in your specific project proposal or contract. Once a payment for a certain milestone is made, it is non-refundable as it corresponds to work already completed or resources allocated.
        </p>
        <h2>Client Satisfaction</h2>
        <p>
          If you are unsatisfied with our services, we urge you to contact us immediately. We are committed to working with you to address your concerns and find a mutually agreeable solution, which may include credit for future services or other remedies as we deem appropriate on a case-by-case basis.
        </p>
      </div>
    </div>
  );
}