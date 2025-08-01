import SubscriptionForm from "../../../components/FriskyComponent";
import RSArticlesLayout from "./ArticleSection";
import RSArticlesLayoutTwo from "./ArticleSectionTwo";
import FourthComponent from "./fourthComponent";
import { Link } from "react-router-dom";
import RelatedArticleComponent from "../../../components/RelatedArticleComponent/RelatedArticleComponent"
const Relationship = () => {
  return (
    <div>
      <FourthComponent />
      <RSArticlesLayout />
      <div className="relative rounded-lg overflow-hidden min-h-[400px] md:min-h-[600px] flex flex-col justify-center items-center p-8">
        {/* Background image with brightness filter */}
        <img
          src="/Sex&Relationship/Relationship/Banner2.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover filter brightness-70"
        />

        {/* Optional extra overlay for stronger darkening */}
        <div className="absolute inset-0 bg-gradient-to-b  to-transparent " />

        {/* Content */}
        <div className="relative z-10 text-left text-white max-w-full mx-auto md:ml-32 md:mt-48">
          <p className="text-sm md:text-base font-semibold tracking-wider uppercase mb-6 opacity-90">
            Relationships{" "}
          </p>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
            What to do when you've been Friend Zoned{" "}
          </h2>
        </div>
      </div>
      <RSArticlesLayoutTwo />
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
export default Relationship;
// This code defines a React component for a Relationship page, which includes various sections such as articles, images, and a subscription form. It uses Tailwind CSS for styling and layout. The component is structured to provide a visually appealing and informative user experience related to relationships and health care topics.