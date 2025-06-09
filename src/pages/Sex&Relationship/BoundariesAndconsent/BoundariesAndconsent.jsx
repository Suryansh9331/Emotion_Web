import SubscriptionForm from "../../../components/FriskyComponent";
import BACArticlesLayout from "./ArticleSection";
import BACArticlesLayoutTwo from "./ArticleSectionTwo";
import FourthComponent from "./fourthComponent";

const BoundariesAndconsent = () => {
  return (
    <div>
      <FourthComponent />
      <BACArticlesLayout />
      <div className="relative rounded-lg overflow-hidden min-h-[400px] md:min-h-[600px] flex flex-col justify-center items-center p-8">
        {/* Background image with brightness filter */}
        <img
          src="https://www.bedsider.org/assets/mobile/welcome/mobi-frisky-fridays-header-02f09eeeef1fb49fd2f2f3f33860e673b2d99ed93b89ef5453c089443f69442b.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover filter brightness-70"
        />

        {/* Optional extra overlay for stronger darkening */}
        <div className="absolute inset-0 bg-gradient-to-b  to-transparent " />

        {/* Content */}
        <div className="relative z-10 text-left text-white max-w-full mx-auto md:ml-32 md:mt-48">
          <p className="text-sm md:text-base font-semibold tracking-wider uppercase mb-6 opacity-90">
           Boundaries & consent{" "}
          </p>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
            How to tell if you’re in an abusive relationship{" "}
          </h2>
        </div>
      </div>
      <BACArticlesLayoutTwo />
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
export default BoundariesAndconsent;
// This code defines a React component for a Relationship page, which includes various sections such as articles, images, and a subscription form. It uses Tailwind CSS for styling and layout. The component is structured to provide a visually appealing and informative user experience related to relationships and health care topics.