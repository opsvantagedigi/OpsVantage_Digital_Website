import RoadmapItem from "@/components/ui/roadmap-item";

const roadmapFeatures = [
  {
    status: "Completed",
    title: "Phase 1: Foundation & Design System",
    description: "Established the cinematic 'Legacy' look and feel, and built the core atomic components.",
  },
  {
    status: "Completed",
    title: "Phase 2: Core Offering Pages",
    description: "Built the high-conversion landing pages for Premium Web, Automation, and AI Integration.",
  },
  {
    status: "Completed",
    title: "Phase 3: Infrastructure & Stewardship Suite",
    description: "Highlighted our 'Peace of Mind' services, including infrastructure management and strategy.",
  },
  {
    status: "Completed",
    title: "Phase 4: The Platform Differentiator",
    description: "Created the UI shell for the OpsVantage Client Portal, including login and dashboard mockups.",
  },
  {
    status: "In Progress",
    title: "Phase 5: Future-Proofing & Monetization",
    description: "Building out productized systems, knowledge base, and this public roadmap.",
  },
  {
    status: "Planned",
    title: "Client Portal Backend Integration",
    description: "Connect the client portal to live data sources for real-time monitoring and management.",
  },
  {
    status: "Planned",
    title: "Self-Service AI Builder",
    description: "A tool for clients to create and deploy their own simple AI agents for specific tasks.",
  },
  {
    status: "Planned",
    title: "Automated Compliance & Governance Tools",
    description: "Tools to help clients navigate complex regulatory landscapes with confidence.",
  },
];

const RoadmapPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-24">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-orbitron font-bold tracking-tighter mb-4">
            Our Roadmap
          </h1>
          <p className="text-xl md:text-2xl font-inter text-gray-300 max-w-3xl mx-auto">
            Building for the 10-year horizon. A transparent look at where we are and where we're going.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {roadmapFeatures.map((feature, index) => (
            <RoadmapItem
              key={feature.title}
              {...feature}
              isLast={index === roadmapFeatures.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoadmapPage;
