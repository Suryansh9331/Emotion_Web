
import React from 'react';

// Route configurations - Add your routes here
const routeConfigs = {
  '/birth-control': {
    imageUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Is the birth control ring right for you?",
    description: "We can help you find an in person provider or online birth control delivery service.",
    buttonText: "find health care",
    buttonLink: "/find-providers"
  },
  '/mental-health': {
    imageUrl: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Need support for your mental health?",
    description: "Connect with licensed therapists and counselors who can provide the care you deserve.",
    buttonText: "find a therapist",
    buttonLink: "/therapists"
  },
  '/general-care': {
    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Looking for quality healthcare?",
    description: "Find trusted healthcare providers in your area or access convenient telehealth services.",
    buttonText: "explore options",
    buttonLink: "/healthcare-options"
  },
  '/women-health': {
    imageUrl: "https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Women's health services tailored for you",
    description: "Comprehensive women's healthcare including gynecology, reproductive health, and wellness services.",
    buttonText: "book appointment",
    buttonLink: "/book-appointment"
  },
  // Add more routes as needed
  'default': {
    imageUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Is the birth control ring right for you?",
    description: "We can help you find an in person provider or online birth control delivery service.",
    buttonText: "find health care",
    buttonLink: "/find-providers"
  }
};

const HealthcareHero = ({ 
  backgroundColor = "rgb(12,166,152)",
  buttonColor = "rgb(2,131,136)"
}) => {
  // Get current route from URL
  const getCurrentRoute = () => {
    if (typeof window !== 'undefined') {
      return window.location.pathname;
    }
    return '/';
  };

  const currentRoute = getCurrentRoute();
  const config = routeConfigs[currentRoute] || routeConfigs['default'];
  
  const { imageUrl, title, description, buttonText, buttonLink } = config;
  return (
    <div 
      className="w-full min-h-[400px] flex items-center justify-center p-4 md:p-8"
      style={{ backgroundColor }}
    >
      <div className="max-w-7xl w-full bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 h-full md:h-80 lg:h-full">
            <img
              src={imageUrl}
              alt="Healthcare professional"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Content Section */}
          <div className="w-full lg:w-1/2 p-6 md:p-8 lg:p-12 flex flex-col justify-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 mb-4 md:mb-6 leading-tight">
              {title}
            </h1>
            
            <p className="text-base md:text-lg lg:text-xl text-gray-600 mb-6 md:mb-8 leading-relaxed">
              {description}
            </p>
            
            <a
              href={buttonLink}
              className="inline-block px-6 md:px-8 py-3 md:py-4 text-white font-medium text-sm md:text-base rounded-md hover:opacity-90 transition-opacity duration-200 self-start"
              style={{ backgroundColor: buttonColor }}
            >
              {buttonText}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HealthcareHero;