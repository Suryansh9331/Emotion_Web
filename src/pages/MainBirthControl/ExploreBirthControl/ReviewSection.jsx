import React from 'react';
import { Link } from 'react-router-dom';

const BirthControlReviews = () => {
  const articles = [
    {
      id: 1,
      category: "CONDOM",
      title: "Why use condoms?",
      image: "/10-reasons-you-should-be-using-condoms.png",
      url: "/birth-control/reviews"
    },
    {
      id: 2,
      category: "SEXUALLY TRANSMITTED INFECTIONS (STDS, STIS)",
      title: "How do you protect against STIs?",
      image: "/OIP.webp",
      url: "/birth-control/reviews"
    },
    {
      id: 3,
      category: "IUD",
      title: "Ellie, 27, IUD",
      image: "/download.webp",
      url: "/birth-control/reviews"
    }
  ];

  return (
    <div className="max-w-full  mx-auto lg:px-24 px-6 py-12 bg-white font-sans">
      {/* Main Heading with wavy underline */}
      <div className="mb-16">
        <h1 className="text-5xl font-normal text-[#028388] mb-3 tracking-tight">
          Birth control reviews
        </h1>
        {/* Wavy underline SVG */}
        <svg width="280" height="12" viewBox="0 0 280 12" className="text-teal-400">
          <path
            d="M2 6 Q 70 2, 140 6 T 278 6"
            stroke="currentColor"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Left Section - Video and Content (7 columns) */}
        <div className="lg:col-span-7 space-y-8">
          {/* YouTube Video */}
          <div className="relative">
            <div className="aspect-video w-full bg-black  overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/5rj7ZAPtf4g?si=tVABrNAdUZMFV2Q3"
                title="Does it hurt to get an IUD?"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

          {/* Content below video */}
          <div className="space-y-6">
            {/* Category */}
            <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
              IUD
            </div>

            {/* Main Title */}
            <h2 className="text-3xl font-normal text-[#404041] leading-tight">
              Does it hurt to get an IUD?
            </h2>

            {/* Quote */}
            <div className="pt-2">
              <p className="text-lg text-[#404041] italic leading-relaxed font-light">
                "You know, you kinda have to bear through it until your uterus is like,<br />
                'okay, we're friends, we're gonna work together.'"
              </p>
            </div>
          </div>
        </div>

        {/* Right Section - Articles (5 columns) */}
        <div className="lg:col-span-5">
          <div className="space-y-10">
            {/* Articles List */}
            {articles.map((article, index) => (
              <article key={article.id} className="group cursor-pointer">
                <a href={article.url} className="block">
                  <div className="flex gap-5 items-start">
                    {/* Article Image */}
                    <div className="flex-shrink-0 w-28 h-20 bg-gray-100  overflow-hidden shadow-sm">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Article Content */}
                    <div className="flex-1 pt-1">
                      {/* Category */}
                      <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 leading-tight">
                        {article.category}
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-xl font-normal text-gray-800 leading-snug group-hover:text-[#028388] transition-colors duration-200">
                        {article.title}
                      </h3>
                    </div>
                  </div>
                </a>
              </article>
            ))}

            {/* Watch All Reviews Button */}
           <div className="pt-6">
  <Link
    to="/birth-control/reviews"
    className="block w-full text-center bg-[#028388] hover:bg-teal-700 text-white font-medium py-4 px-8 rounded-lg transition-all duration-200 text-base shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
  >
    watch all reviews
  </Link>
</div>

          </div>
        </div>
      </div>

      {/* Mobile responsive adjustments */}
      <style jsx>{`
        @media (max-width: 1024px) {
          .grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }
        
        @media (max-width: 768px) {
          h1 {
            font-size: 2.5rem;
          }
          
          h2 {
            font-size: 1.75rem;
          }
          
          .article-image {
            width: 5rem;
            height: 3.5rem;
          }
          
          .article-title {
            font-size: 1.125rem;
          }
        }
      `}</style>
    </div>
  );
};

export default BirthControlReviews;