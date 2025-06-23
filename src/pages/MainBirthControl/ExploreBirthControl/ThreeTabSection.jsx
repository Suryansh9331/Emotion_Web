import React from 'react';
import { ChevronRight } from 'lucide-react';

const ThreeTabSection = () => {
  const cards = [
    {
      title: "Explore birth control options",
      subtitle: "Find a method that's right for you.",
      color: "#02767a",
      url: "#"
    },
    {
      title: "Compare birth control",
      subtitle: "Compare methods side-by-side.",
      color: "#c9005b",
      url: "#"
    },
    {
      title: "How to get birth control",
      subtitle: "Get birth control in person or online.",
      color: "#8d2e8d",
      url: "/birth-control/how-to-get-birth-control"
    }
  ];

  const handleCardClick = (url) => {
    // You can replace this with actual navigation logic
    window.location.href = url;
  };

  return (
    <div className="w-full max-w-full mx-auto lg:p-24 p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative overflow-hidden cursor-pointer transform transition-transform duration-200  shadow-lg"
            style={{ backgroundColor: card.color }}
            onClick={() => handleCardClick(card.url)}
          >
            <div className="p-4 text-white h-full flex flex-col justify-between min-h-[100px]">
              <div>
                <h2 className="text-4xl font-bold mb-4 leading-tight">
                  {card.title}
                </h2>
                <p className="text-lg opacity-90 leading-relaxed">
                  {card.subtitle}
                </p>
              </div>
              
              <div className="flex justify-end mt-6">
                <ChevronRight 
                  size={32} 
                  className="text-white opacity-80 transition-opacity duration-200 hover:opacity-100" 
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThreeTabSection;

