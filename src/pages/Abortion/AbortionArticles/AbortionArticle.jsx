
// import AbortionArticlesLayout from './ArticleLayout';
// const AbortionArticles  = () => {
//   return (
//     <div className="w-full min-h-screen">
     
//      <AbortionArticlesLayout/>
        
     
//     </div>
//   )
// }
// export default AbortionArticles ;

import AbortionArticlesLayout from './ArticleLayout';

const AbortionArticles = () => {
  return (
    <div className="w-full min-h-screen">
      {/* Main heading with wavy underline */}
      <div className="text-center py-8 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-2 relative inline-block" style={{ color: '#028388' }}>
          Abortion
          {/* Wavy underline SVG */}
          <svg 
            className="absolute left-1/2 transform -translate-x-1/2 mt-1" 
            width="160" 
            height="12" 
            viewBox="0 0 160 12" 
            fill="none"
          >
            <path 
              d="M2 6C8 2 16 10 24 6C32 2 40 10 48 6C56 2 64 10 72 6C80 2 88 10 96 6C104 2 112 10 120 6C128 2 136 10 144 6C148 4 152 8 158 6" 
              stroke="#028388" 
              strokeWidth="2" 
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </h1>
      </div>
      
      <AbortionArticlesLayout/>
    </div>
  )
}

export default AbortionArticles; 