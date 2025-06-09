// src/components/ArticleNewsTwo.jsx
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { DAHarticleContentsTwo } from './data/articles';
import SubscriptionForm from "../../../components/FriskyComponent";

// const DAHArticleNewsTwo = () => {
//   const { slug } = useParams();
//   const [article, setArticle] = useState(null);

//   useEffect(() => {
//     const load = async () => {
//       const data = DAHarticleContentsTwo[slug];
//       setArticle(data || null);
//     };
//     load();
//   }, [slug]);

//   if (!article) {
//     return <div className="p-8 text-center">Loading…</div>;
//   }

//   return (
//     <>
//       <div className="max-w-3xl mx-auto p-6">
//         <Link to="/DAHarticles-two" className="text-blue-500 hover:underline">
//           &larr; Back to Section Two
//         </Link>
//         <h1 className="text-3xl font-bold mt-4">{article.title}</h1>
//         <div className="text-gray-500 text-sm mb-6">
//           {article.date} &nbsp; Updated: {article.updated}
//         </div>
//         <div
//           className="prose mb-8"
//           dangerouslySetInnerHTML={{ __html: article.content }}
//         />
//       </div>
//       <SubscriptionForm />
//     </>
//   );
// };

// export default DAHArticleNewsTwo;




const DAHArticleNewsTwo = () => {
  const { slug } = useParams();
  const [PFarticle, setPFArticle] = useState(null);


   
const [selectedFeedback, setSelectedFeedback] = useState(null);
const handleFeedbackClick = (type) => {
  setSelectedFeedback(type === selectedFeedback ? null : type);
};

  // ✅ Place the new useEffect here
  useEffect(() => {
    const load = async () => {
      const cleanSlug = slug?.trim();
      if (!cleanSlug || !DAHarticleContentsTwo[cleanSlug]) {
        setPFArticle(null);
        return;
      }
      setPFArticle(DAHarticleContentsTwo[cleanSlug]);
    };
    load();
  }, [slug]);

  if (!PFarticle) return <div className="p-8 text-center">Loading or not found…</div>;

  const handleShare = (platform) => {
    const url = window.location.href;
    const text = PFarticle.title;
    
    if (platform === 'twitter') {
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
    } else if (platform === 'facebook') {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
    }
  };

  return (
    <>
     <div className="max-w-4xl mx-auto bg-white">
        {/* Back Navigation */}
        <div className="px-6 pt-6 pb-2">
          <Link to="/sex-relationships/DatingAndHookup/articles-two" className="text-[#058e8d] hover:underline text-sm font-medium">
            Sex & relationships &gt; DatingAndHookup &gt; &gt;
          </Link>
        </div>

           {/* Article Title */}
<div className="px-6 py-2">
  <h1
    className="text-3xl md:text-5xl font-bold text-[#404040] leading-tight mb-3"
    style={{ fontFamily: "'Roboto Slab', serif" }}
  >
    {PFarticle.title}
  </h1>
</div>

             
                {/* Subtitle */}
        {PFarticle.subtitle && (
          <div className="px-6 py-1">
            <p className="text-xl text-gray-600 italic font-medium">
              {PFarticle.subtitle}
            </p>
          </div>
        )}

        {/* Author and Date Info */}
        <div className="px-6 py-3">
          <div className="text-sm text-gray-500">
            <span className="font-medium"> {PFarticle.author}</span>
            <span className="mx-2">|</span>
            <span>{PFarticle.date}</span>
            <span className="mx-2">|</span>
            <span>{PFarticle.updated}</span>
          </div>
        </div>

        {/* Featured Image */}
        {PFarticle.image && (
          <div className="px-6 py-4">
            <img
              srS={PFarticle.image}
              alt={PFarticle.title}
              className="w-full h-64 md:h-96 object-cover rounded-none"
            />
          </div>
        )}

        {/* Social Share Icons - Only show if enabled for specific slug */}
        {PFarticle.showSocialIcons && (
          <div className="px-6 py-4">
            <div className="flex items-center space-x-2">
              {/* Twitter Icon - Exact match from image */}
              <button
                onClick={() => handleShare('twitter')}
                className="w-14 h-14 flex items-center justify-center cursor-pointer"
                aria-label="Share on Twitter"
              >
                <svg className="w-12 h-12" viewBox="0 0 26 26" fill="#028388">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                </svg>
              </button>

              {/* Facebook Icon - Exact match from image */}
              <button
                onClick={() => handleShare('facebook')}
                className="w-14 h-14 flex items-center justify-center cursor-pointer"
                aria-label="Share on Facebook"
              >
                <svg className="w-10 h-10" viewBox="0 0 24 24" fill="#028388">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </button>
            </div>
          </div>
        )}

        {/* Decorative Wave Line - Matching reference exactly */}
        <div className="px-6 py-2">
          <svg viewBox="0 0 100 4" className="w-20 h-1" preserveAspectRatio="none">
            <path d="M0,2 Q25,0 50,2 T100,2" stroke="#028388" strokeWidth="2" fill="none"/>
          </svg>
        </div>

        {/* Article Content */}
        <div className="px-6 py-6">
          <div
            className="prose prose-lg max-w-none prose-p:text-gray-800 prose-p:leading-relaxed prose-p:mb-4 prose-headings:text-gray-900 prose-a:text-blue-600 prose-a:hover:text-blue-800 prose-strong:text-gray-900"
            dangerouslySetInnerHTML={{
              __html: PFarticle.content || "<p>No content available.</p>",
            }}
  />
</div>           {/* Feedback Section - Add this where you want it */}
<div className="px-4 sm:px-6 py-8">
  <div className="border-t border-gray-200 pt-8">
    <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6 text-center">
      How do you feel about this article?
    </h3>
    
    {/* Feedback Buttons */}
    <div className="flex justify-center items-center space-x-8 sm:space-x-12 md:space-x-16 mb-8">
      {/* Love Button */}
      <button
        onClick={() => handleFeedbackClick('love')}
        className={`flex flex-col items-center space-y-2 p-3 rounded-lg transition-all duration-200 hover:bg-gray-50 ${
          selectedFeedback === 'love' ? 'transform scale-110' : ''
        }`}
        aria-label="Love this article"
      >
        <div className={`w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center transition-colors duration-200 ${
          selectedFeedback === 'love' ? 'text-blue-500' : 'text-teal-500'
        }`}>
          <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-10 sm:h-10" fill="currentColor">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </div>
        <span className={`text-sm sm:text-base font-medium transition-colors duration-200 ${
          selectedFeedback === 'love' ? 'text-blue-500' : 'text-gray-700'
        }`}>
          Love
        </span>
      </button>

      {/* Like Button */}
      <button
        onClick={() => handleFeedbackClick('like')}
        className={`flex flex-col items-center space-y-2 p-3 rounded-lg transition-all duration-200 hover:bg-gray-50 ${
          selectedFeedback === 'like' ? 'transform scale-110' : ''
        }`}
        aria-label="Like this article"
      >
        <div className={`w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center transition-colors duration-200 ${
          selectedFeedback === 'like' ? 'text-blue-500' : 'text-teal-500'
        }`}>
          <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-10 sm:h-10" fill="currentColor">
            <path d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558-.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.927.729-1.515.729H9.494z"/>
          </svg>
        </div>
        <span className={`text-sm sm:text-base font-medium transition-colors duration-200 ${
          selectedFeedback === 'like' ? 'text-blue-500' : 'text-gray-700'
        }`}>
          Like
        </span>
      </button>

      {/* Dislike Button */}
      <button
        onClick={() => handleFeedbackClick('dislike')}
        className={`flex flex-col items-center space-y-2 p-3 rounded-lg transition-all duration-200 hover:bg-gray-50 ${
          selectedFeedback === 'dislike' ? 'transform scale-110' : ''
        }`}
        aria-label="Dislike this article"
      >
        <div className={`w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center transition-colors duration-200 ${
          selectedFeedback === 'dislike' ? 'text-blue-500' : 'text-teal-500'
        }`}>
          <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-10 sm:h-10" fill="currentColor">
            <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/>
          </svg>
        </div>
        <span className={`text-sm sm:text-base font-medium transition-colors duration-200 ${
          selectedFeedback === 'dislike' ? 'text-blue-500' : 'text-gray-700'
        }`}>
          Dislike
        </span>
      </button>
    </div>

    {/* Visual Feedback Message */}
    {selectedFeedback && (
      <div className="text-center mb-6">
        <p className="text-sm text-gray-600 bg-gray-50 rounded-full px-4 py-2 inline-block">
          Thank you for your feedback!
        </p>
      </div>
    )}

    {/* Comments Section */}
    <div className="border border-gray-200 rounded-lg p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-2 sm:space-y-0">
        <span className="text-gray-600 text-sm sm:text-base">
          0 comments
        </span>
        <button className="text-blue-600 hover:text-blue-800 text-sm sm:text-base font-medium transition-colors duration-200 self-start sm:self-auto">
          Show comments
        </button>
      </div>
    </div>
  </div>
</div>
      </div>
      
      <SubscriptionForm />
    </>
  );
};

export default DAHArticleNewsTwo;