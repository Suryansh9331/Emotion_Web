import SubscriptionForm from "../../components/FriskyComponent";
import PVArticlesLayout from "./ArticleSection";
import PVArticleLayoutTwo from "./ArticleSectionTwo";
import FourthComponent from "./fourthComponent";
import { Link } from "react-router-dom";
import RelatedArticleComponent from "../../components/RelatedArticleComponent/RelatedArticleComponent"

const PeriodsAndVagina = () => {
  return (
    <div>
      <FourthComponent />
      <PVArticlesLayout />
      <div className="relative rounded-lg overflow-hidden min-h-[400px] md:min-h-[600px] flex flex-col justify-center items-center p-8">
        {/* Background image with brightness filter */}
        <img
          src="https://www.Bedsiderr.org/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZ1kvIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--2e2ec34af76ee9ac485c280864670dc8b542265c/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBPZ2wzWldKd09oTnlaWE5wZW1WZmRHOWZabWxzYkZzSGFRTDRBbWtDa0FFPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--a3ab3c05229ad5f0864920d0b6b36ed3f914792c/MicrosoftTeams-image%20(1).png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover filter brightness-50"
        />

        {/* Optional extra overlay for stronger darkening */}
        <div className="absolute inset-0 bg-gradient-to-b  to-transparent opacity-30" />

        {/* Content */}
        <div className="relative z-10 text-left text-white max-w-full mx-auto md:ml-22 md:mt-48">
          <p className="text-sm md:text-base font-semibold tracking-wider uppercase mb-6 opacity-90">
             Periods & vaginal health{" "}
          </p>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Here’s why we loved Dr. Jennifer Lincoln’s new book, Let’s Talk
            About Down There{" "}
          </h2>
        </div>
      </div>
      <PVArticleLayoutTwo />
       <RelatedArticleComponent/>

      <div className="min-h-auto bg-white ">
     
      <main className=" py-12 bg-[#e5e5e5]">
        <div className="max-w-7xl mx-auto">
         

          {/* Birth Control Section */}
          <div className="grid lg:grid-cols-2 gap-8 items-center lg:ml-6 md:ml-12 bg-white p-6  rounded-lg">
            {/* Images Grid */}
            <img
              src="/action_promo_explorer_small-d788ee8243acf9c93c0e5c49313cb2ff6217219620acc6ce898193dd23211ac5.webp"
              alt=""
            />

            {/* Text Content */}
            <div className="text-center lg:text-left lg:ml-26 px-8">
              <h3 className="text-5xl sm:text-4xl font-bold text-[#404040] mb-2">
                Not sure what birth<br></br> control is right for <br></br> you?
              </h3>
              <p className="text-gray-600 text-xl mb-8 leading-relaxed">
                <br />
                Find a method that fits your body <br></br> and your life with
                our interactive method <br></br> explorer.
              </p>
              <Link
                to="/birth-control-option"
                className="block bg-[#058e8d] w-full text-white px-8 py-3 rounded hover:bg-teal-700 transition-colors font-medium text-center"
              >
                view birth control options
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
      <SubscriptionForm />
    </div>
  );
};
export default PeriodsAndVagina;
