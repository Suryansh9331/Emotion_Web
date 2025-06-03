import SubscriptionForm from "../FriskyComponent"
import ArticlesSection from "./ArticleSection"
import STIArticlesLayoutTwo from "./ArticleSectionTwo"
import FourthComponent from "./fourthComponent"

const ShwHome = () => {
  return (
    <div>
      <FourthComponent/>
      <ArticlesSection/>
         <div className="relative rounded-lg overflow-hidden min-h-[400px] md:min-h-[500px] flex flex-col justify-center items-center p-8">
           {/* Background image with brightness filter */}
           <img
             src="/SHW/faq_question_marks-12cc02f534646e9c41b2b62dd380b297bab076af0f938789e53822a88e551b81.svg"
             alt=""
             className="absolute inset-0 w-full h-full object-cover filter brightness-50"
           />

           {/* Optional extra overlay for stronger darkening */}
           <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-30" />

           {/* Content */}
           <div className="relative z-10 text-center text-white max-w-4xl mx-auto md:ml-32 md:mt-48">
             <p className="text-sm md:text-base font-semibold tracking-wider uppercase mb-6 opacity-90">
               FAQS - SEXUALLY TRANSMITTED INFECTIONS (STDS, STIS)
             </p>
             <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
               Is oral sex safer than vaginal sex?
             </h2>
           </div>
         </div>
         <STIArticlesLayoutTwo/>
           <div className="grid lg:grid-cols-2 gap-12 items-center lg:ml-6 md:ml-12">
            {/* Images Grid */}
             <img src="/action_promo_explorer_small-d788ee8243acf9c93c0e5c49313cb2ff6217219620acc6ce898193dd23211ac5.webp" alt=""/>

            {/* Text Content */}
            <div className="text-center lg:text-left lg:ml-36">
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
                Check out your birth<br />control options.
              </h3>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Find a method that fits your body and your life with<br />
                our interactive method explorer.
              </p>
              <button className="bg-teal-600 text-white px-8 py-3 rounded hover:bg-teal-700 transition-colors font-medium mb-20">
                explore birth control options
              </button>
            </div>
          </div>
         <SubscriptionForm/>
    </div>
  )
}
export default ShwHome