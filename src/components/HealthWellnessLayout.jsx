import {Link} from 'react-router-dom';
export default function HealthWellnessLayout() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Sexual health & wellness section */}
      <section className="mb-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-teal-600 mb-2">Sexual health & wellness</h2>
          <div className="w-full h-1">
            <svg viewBox="0 0 450 6" className="w-full h-6 text-teal-500">
              <path d="M0,3 C150,6 150,0 300,3 C450,6 450,0 600,3" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Article 1 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden flex">
            <div className="w-1/3 relative">
              <img
                src="/nathana-reboucas-O5v8heKY4cI-unsplash.jpg"
                alt="Person typing on laptop"
                width={200}
                height={200}
                className="object-cover h-full w-full"
              />
            </div>
            <div className="w-2/3 p-4">
              <div className="uppercase text-sm font-semibold text-gray-500 mb-1">Sexual Health & Wellness</div>
              <h3 className="text-lg font-bold mb-2">You asked. We answered.</h3>
            </div>
          </div>

          {/* Article 2 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden flex">
            <div className="w-1/3 relative">
              <img
                src="/GettyImages-1489462526.jpg"
                alt="Healthcare consultation"
                width={200}
                height={200}
                className="object-cover h-full w-full"
              />
            </div>
            <div className="w-2/3 p-4">
              <div className="uppercase text-sm font-semibold text-gray-500 mb-1">Health Care</div>
              <h3 className="text-lg font-bold mb-2">6 ways to advocate for yourself when seeking health care</h3>
            </div>
          </div>

          {/* Article 3 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden flex">
            <div className="w-1/3 relative">
              <img
                src="/8 ways you can support your pregnant BFF.jpg"
                alt="Pregnant woman with friend"
                width={200}
                height={200}
                className="object-cover h-full w-full"
              />
            </div>
            <div className="w-2/3 p-4">
              <div className="uppercase text-sm font-semibold text-gray-500 mb-1">Pregnancy & Fertility</div>
              <h3 className="text-lg font-bold mb-2">8 ways you can support your pregnant BFF</h3>
            </div>
          </div>

          {/* Article 4 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden flex">
            <div className="w-1/3 relative">
              <img
                src="/TTC support.jpg"
                alt="Couple holding hands"
                width={200}
                height={200}
                className="object-cover h-full w-full"
              />
            </div>
            <div className="w-2/3 p-4">
              <div className="uppercase text-sm font-semibold text-gray-500 mb-1">Pregnancy & Fertility</div>
              <h3 className="text-lg font-bold mb-2">
                How can I help? A doula's tips for when someone you love is trying to get pregnant
              </h3>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <Link
            to="#"
            className="inline-block bg-teal-600 text-white px-6 py-2 rounded-md hover:bg-teal-700 transition-colors"
          >
            view all sexual health & wellness
          </Link>
        </div>
      </section>

      {/* Lifestyle & inspiration section */}
      <section className="mb-16 bg-gray-50 py-8 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-teal-600 mb-2">Lifestyle & inspiration</h2>
            <div className="w-full h-1">
              <svg viewBox="0 0 450 6" className="w-full h-6 text-teal-500">
                <path
                  d="M0,3 C150,6 150,0 300,3 C450,6 450,0 600,3"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Article 1 */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden flex">
              <div className="w-1/3 relative">
                <img
                  src="/Taurus1280x672.jpg"
                  alt="Horoscope illustration"
                  width={200}
                  height={200}
                  className="object-cover h-full w-full"
                />
              </div>
              <div className="w-2/3 p-4">
                <div className="uppercase text-sm font-semibold text-gray-500 mb-1">Horoscopes</div>
                <h3 className="text-lg font-bold mb-2">May 2025 horoscopes: Get ready for some springtime fun</h3>
              </div>
            </div>

            {/* Article 2 */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden flex">
              <div className="w-1/3 relative">
                <img
                  src="/GettyImages-671712039.jpg"
                  alt="Music festival crowd"
                  width={200}
                  height={200}
                  className="object-cover h-full w-full"
                />
              </div>
              <div className="w-2/3 p-4">
                <div className="uppercase text-sm font-semibold text-gray-500 mb-1">Inspiration</div>
                <h3 className="text-lg font-bold mb-2">10 songs for your music festival playlist</h3>
              </div>
            </div>

            {/* Article 3 */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden flex">
              <div className="w-1/3 relative">
                <img
                  src="/Woman with sunflower 2.jpg"
                  alt="Person with sunflowers"
                  width={200}
                  height={200}
                  className="object-cover h-full w-full"
                />
              </div>
              <div className="w-2/3 p-4">
                <div className="uppercase text-sm font-semibold text-gray-500 mb-1">Inspiration</div>
                <h3 className="text-lg font-bold mb-2">Ready to kick off your spring?</h3>
              </div>
            </div>

            {/* Article 4 */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden flex">
              <div className="w-1/3 relative">
                <img
                  src="/Aries1280-672.jpg"
                  alt="Horoscope illustration"
                  width={200}
                  height={200}
                  className="object-cover h-full w-full"
                />
              </div>
              <div className="w-2/3 p-4">
                <div className="uppercase text-sm font-semibold text-gray-500 mb-1">Horoscopes</div>
                <h3 className="text-lg font-bold mb-2">April 2025 horoscopes: Warm days, hot nights</h3>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <Link
              href="#"
              className="inline-block bg-teal-600 text-white px-6 py-2 rounded-md hover:bg-teal-700 transition-colors"
            >
              view all lifestyle & inspiration
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
