import ArticleCard from "@/components/ui/article-card";

const articles = [
  {
    title: "The OpsVantage Way: Our Development Philosophy",
    description: "An inside look at our commitment to Stewardship, Clarity, and Legacy-Aligned code.",
    href: "/knowledge/philosophy",
  },
  {
    title: "Governance Guide: Maintaining Your Digital Asset",
    description: "Best practices for managing your website, from content updates to security protocols.",
    href: "/knowledge/governance",
  },
  {
    title: "Understanding Your AI: A Guide for Non-Technical Founders",
    description: "Demystifying artificial intelligence and how it creates value for your business.",
    href: "/knowledge/ai-guide",
  },
  {
    title: "The Value of a Technical Partner",
    description: "Why having a dedicated stewardship partner is critical for long-term success.",
    href: "/knowledge/technical-partner",
  },
];

const KnowledgePage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-24">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-orbitron font-bold tracking-tighter mb-4">
            Knowledge Base
          </h1>
          <p className="text-xl md:text-2xl font-inter text-gray-300 max-w-3xl mx-auto">
            Clarity over Cleverness. A curated library of guides and articles to empower you on your digital journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {articles.map((article) => (
            <ArticleCard key={article.title} {...article} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default KnowledgePage;
