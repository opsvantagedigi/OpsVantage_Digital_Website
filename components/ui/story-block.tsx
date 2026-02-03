import React from "react";

interface StoryBlockProps {
  quote: string;
  author: string;
  role: string;
}

const StoryBlock: React.FC<StoryBlockProps> = ({ quote, author, role }) => {
  return (
    <div className="bg-transparent border-l-4 border-blue-500 pl-6 py-4">
      <blockquote className="text-2xl font-inter italic text-gray-200">
        “{quote}”
      </blockquote>
      <cite className="block mt-4 text-right font-inter not-italic">
        <span className="font-bold text-white">{author}</span>
        <br />
        <span className="text-gray-400">{role}</span>
      </cite>
    </div>
  );
};

export default StoryBlock;
