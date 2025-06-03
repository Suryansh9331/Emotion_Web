import React from "react";

const RouteNavbar = ({ currentRoute }) => {
  // Route configuration - customize these based on your app's routes
  const routeConfig = {
    "/": "Home • Dashboard",
    "/birth-control": "Birth control • Diaphragm",
    "/products": "Products • Catalog",
    "/about": "About • Company",
    "/contact": "Contact • Get in Touch",
    "/profile": "Profile • Account Settings",
    "/orders": "Orders • Purchase History",
    "/settings": "Settings • Preferences",
    "/help": "Help • Support Center",
    "/blog": "Blog • Latest Articles",
  };

  // Get the text content for the current route
  const getCurrentText = () => {
    return routeConfig[currentRoute] || "Page • Content";
  };

  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-8">
      <div className="flex items-center ">
        <h1 className="text-lg font-normal text-gray-900">
          {getCurrentText()}
        </h1>
      </div>
    </nav>
  );
};

export default RouteNavbar;
