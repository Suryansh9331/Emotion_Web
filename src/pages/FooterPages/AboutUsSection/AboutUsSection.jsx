export default function AboutUsSection() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="space-y-6">
        {/* Header */}
        <div className="border-b border-gray-300 pb-2">
          <h1 className="text-xl sm:text-2xl font-normal text-gray-800 tracking-wide">
            ABOUT US /
          </h1>
        </div>

        {/* Main Content */}
        <div className="space-y-6 text-gray-700 leading-relaxed">
          {/* Opening paragraph */}
          <p className="text-sm sm:text-base">
            Babies are great... when you're ready for them. We think in the meantime you have the right to a healthy, 
            happy sex life without worrying about unplanned pregnancy. You can make that happen by taking an 
            active role in your reproductive health. We can help with that.
          </p>

          {/* Second paragraph with link */}
          <p className="text-sm sm:text-base">
            Bedsider.org (Bedsider) is an online birth control support network for women 18-29 operated by{' '}
            <a 
              href="#" 
              className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200"
            >
              Power to Decide
            </a>
            . Power to Decide works to ensure that every young person has the power to decide if, when, 
            and under what circumstances to get pregnant—increasing their opportunity to pursue the future they 
            want.
          </p>

          {/* Third paragraph */}
          <p className="text-sm sm:text-base">
            Right now, seven in 10 pregnancies among unmarried women 18-29 are described by women themselves 
            as unplanned. That sounds like a lot to us. We hope that Bedsider will be a useful tool for women to learn 
            about their birth control options, better manage their birth control, and in the process avoid getting 
            pregnant until they're ready.
          </p>

          {/* Contact section */}
          <div className="space-y-2">
            <p className="text-sm sm:text-base">
              If you have any questions or concerns about Bedsider, you may contact us at:
            </p>
            
            <div className="pl-4 space-y-1">
              <p className="text-sm sm:text-base">
                <a 
                  href="mailto:info@bedsider.org" 
                  className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200"
                >
                  info@bedsider.org
                </a>
              </p>
              
              <p className="text-sm sm:text-base">Or by mail at:</p>
              
              <div className="pl-4 space-y-1 text-sm sm:text-base">
                <p>Power to Decide</p>
                <p>1015 15th Street NW</p>
                <p>Suite 1225</p>
                <p>Washington, DC 20005</p>
                <p>(tel) 202-478-8500</p>
                <p>(fax) 202-478-8588</p>
              </div>
            </div>
          </div>

          {/* Medical Content section */}
          <div className="space-y-4">
            <h2 className="text-base sm:text-lg font-medium text-gray-800">
              Medical Content
            </h2>
            
            <p className="text-sm sm:text-base">
              This site has been developed with the assistance of many experts and many young adults as well, who are 
              Bedsider's main audience, and we thank them all for their guidance and insights. We are especially 
              grateful for the advice provided by Power to Decide's Health Care Advisory Committee. Even so, 
              responsibility for the content of Bedsider, including all medical information, rests solely with Power to 
              Decide itself.
            </p>
          </div>

          {/* Nonprofit section */}
          <div className="space-y-4">
            <h2 className="text-base sm:text-lg font-medium text-gray-800">
              Bedsider.org is a nonprofit
            </h2>
            
            <p className="text-sm sm:text-base">
              Bedsider.org is operated by Power to Decide, a nonprofit, tax-exempt charitable organization (tax 
              identification number 52-1974611) under Section 501(c)(3) of the Internal Revenue Code. Donations are 
              tax-deductible as allowed by law.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}