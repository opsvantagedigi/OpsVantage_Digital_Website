import MagneticButton from "@/components/ui/magnetic-button";
import StoryBlock from "@/components/ui/story-block";
import { PenTool, Users, Lightbulb } from "lucide-react";

const StrategyPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-24">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-orbitron font-bold tracking-tighter mb-4">
            Strategy & Narrative
          </h1>
          <p className="text-xl md:text-2xl font-inter text-gray-300 max-w-3xl mx-auto">
            Beyond code, we build legacies. We partner with you to define your vision and craft the story that will captivate your audience.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-20">
          <StoryBlock 
            quote="The most powerful person in the world is the storyteller. The storyteller sets the vision, values, and agenda of an entire generation that is to come."
            author="Steve Jobs"
            role="Co-Founder, Apple"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20 items-start">
          <div className="bg-gray-800/50 p-8 rounded-lg">
            <div className="flex items-center mb-4">
              <Lightbulb className="h-10 w-10 text-yellow-400 mr-4" />
              <h3 className="text-3xl font-orbitron">Strategy Sessions</h3>
            </div>
            <p className="font-inter text-gray-400 mb-4">
              Our one-on-one strategy sessions are designed to bring clarity and focus to your vision. We dive deep into your business goals, challenges, and opportunities to co-create a technical and narrative roadmap for success.
            </p>
            <ul className="list-disc list-inside font-inter text-gray-300 space-y-2">
              <li>Clarify Your "Why"</li>
              <li>Identify Core Business Objectives</li>
              <li>Map Your Customer's Journey</li>
              <li>Define Your Digital Ecosystem</li>
            </ul>
          </div>
          <div className="bg-gray-800/50 p-8 rounded-lg">
            <div className="flex items-center mb-4">
              <PenTool className="h-10 w-10 text-blue-400 mr-4" />
              <h3 className="text-3xl font-orbitron">Brand Narrative Crafting</h3>
            </div>
            <p className="font-inter text-gray-400 mb-4">
              A great product is not enough. You need a story. We help you find and articulate your unique narrative—the story that connects with your audience on an emotional level and transforms customers into advocates.
            </p>
            <ul className="list-disc list-inside font-inter text-gray-300 space-y-2">
              <li>Develop Your Core Message</li>
              <li>Define Your Brand Voice & Tone</li>
              <li>Create Your "Cinematic" Story Arc</li>
              <li>Build a Content & Marketing Strategy</li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-4xl font-orbitron mb-4">Ready to tell your story?</h2>
          <MagneticButton size="lg" variant="secondary">
            Define Your Narrative
          </MagneticButton>
        </div>
      </div>
    </div>
  );
};

export default StrategyPage;
