import { useState } from "react"
import { MapPin, ExternalLink, Building, AlertCircle } from "lucide-react"

export default function HealthCenterFinder() {
  const [location, setLocation] = useState("")
  const [implantAvailable, setImplantAvailable] = useState(false)
  const [iudAvailable, setIudAvailable] = useState(false)
  const [hasSearched, setHasSearched] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    // Store the search query and set hasSearched to true
    setSearchQuery(location)
    setHasSearched(true)
    // In a real app, you would make an API call here
    console.log({ location, implantAvailable, iudAvailable })
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Teal header section */}
      <div className="bg-teal-500 py-8 md:py-16 px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6 md:p-10">
            <h1 className="text-3xl md:text-4xl font-medium text-center text-gray-700 mb-8">Find a health center</h1>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col md:flex-row gap-2">
                <div className="relative flex-grow">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MapPin className="h-5 w-5 text-teal-500" />
                  </div>
                  <label htmlFor="location" className="text-sm text-teal-600 block mb-1 ml-1">
                    location
                  </label>
                  <input
                    type="text"
                    id="location"
                    className="pl-10 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="Enter address, zip, or city"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className="bg-teal-200 hover:bg-teal-300 text-teal-800 px-6 py-3 rounded-md transition-colors duration-200 md:self-end"
                >
                  find a health center
                </button>
              </div>

              <div className="space-y-3">
                <div className="flex items-center">
                  <input
                    id="implant"
                    type="checkbox"
                    className="h-5 w-5 border-gray-300 rounded"
                    checked={implantAvailable}
                    onChange={() => setImplantAvailable(!implantAvailable)}
                  />
                  <label htmlFor="implant" className="ml-2 text-gray-700">
                    Implant available
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="iud"
                    type="checkbox"
                    className="h-5 w-5 border-gray-300 rounded"
                    checked={iudAvailable}
                    onChange={() => setIudAvailable(!iudAvailable)}
                  />
                  <label htmlFor="iud" className="ml-2 text-gray-700">
                    IUD available
                  </label>
                </div>
              </div>
            </form>

            {/* No Results Message - Shows after search */}
            {hasSearched && (
              <div className="mt-8 p-4 border border-amber-200 bg-amber-50 rounded-lg animate-fade-in">
                <div className="flex items-start">
                  <AlertCircle className="h-6 w-6 text-amber-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-800">We can&apos;t find &quot;{searchQuery}&quot;</p>
                    <p className="text-gray-600 mt-1">
                      Try entering an address, provider name, ZIP code, or city and state.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Light gray section */}
      <div className="bg-gray-100 py-12 px-4 flex-grow">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-4">
            <Building className="h-10 w-10 text-gray-600" />
          </div>
          <h2 className="text-2xl md:text-3xl font-medium text-gray-700 mb-6">
            Are we missing a health center? Let us know.
          </h2>
          <div className="flex justify-center">
            <button className="border-2 border-teal-500 text-teal-500 hover:bg-teal-50 px-6 py-3 rounded-md transition-colors duration-200 flex items-center">
              Add a health center
              <ExternalLink className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Disclaimer section */}
      <div className="bg-white py-8 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-600 text-sm md:text-base">
            Bedsiderr lists these resources for your convenience, but we don&apos;t get to visit each provider or health
            center, so we can&apos;t make any endorsements or recommendations. Please use your best judgment when making
            any health care decision. In order to be included in the Bedsiderr clinic finder, the office or clinic must
            counsel on or refer out for the full range of birth control methods and prescribe at least one hormonal
            method. The clinic may also be included if it provides abortion services.
          </p>
        </div>
      </div>
    </div>
  )
}