import SubscriptionForm from "../../components/FriskyComponent";
import PVArticlesLayout from "./ArticleSection";
import PVArticleLayoutTwo from "./ArticleSectionTwo";
import FourthComponent from "./fourthComponent";

const PeriodsAndVagina = () => {
  return (
    <div>
      <FourthComponent />
      <PVArticlesLayout />
      <div className="relative rounded-lg overflow-hidden min-h-[400px] md:min-h-[600px] flex flex-col justify-center items-center p-8">
        {/* Background image with brightness filter */}
        <img
          src="https://www.bedsider.org/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZ1kvIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--2e2ec34af76ee9ac485c280864670dc8b542265c/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBPZ2wzWldKd09oTnlaWE5wZW1WZmRHOWZabWxzYkZzSGFRTDRBbWtDa0FFPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--a3ab3c05229ad5f0864920d0b6b36ed3f914792c/MicrosoftTeams-image%20(1).png"
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
      <div className="grid lg:grid-cols-2 gap-12 items-center lg:ml-6 md:ml-12">
        {/* Images Grid */}
        <img
          src="/action_promo_explorer_small-d788ee8243acf9c93c0e5c49313cb2ff6217219620acc6ce898193dd23211ac5.webp"
          alt=""
        />

        {/* Text Content */}
        <div className="text-center lg:text-left lg:ml-36">
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
            Not sure what birth control is right for you?
            <br />
            control options.
          </h3>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Find a method that fits your body and your life with our interactive
            method explorer.
            <br />
            Not sure what birth control is right for you?{" "}
          </p>
          <button className="bg-teal-600 text-white px-8 py-3 rounded hover:bg-teal-700 transition-colors font-medium mb-20">
            view birth control options{" "}
          </button>
        </div>
      </div>
      <SubscriptionForm />
    </div>
  );
};
export default PeriodsAndVagina;
