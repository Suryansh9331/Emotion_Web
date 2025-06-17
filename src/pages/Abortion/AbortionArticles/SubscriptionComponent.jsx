
import { useState } from "react"

export default function SubscriptionForm() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log("Email submitted:", email)
    // Reset form
    setEmail("")
  }

  return (
    <div className="min-h-auto w-full bg-teal-600 flex items-center justify-center p-8">
      <div className="bg-white rounded-lg overflow-hidden max-w-5xl w-full flex flex-col md:flex-row shadow-xl">
        {/* Image Section */}
        <div className="w-full md:w-1/2 relative">
          <img
            src="/mobi-frisky-fridays-header-medium-f5cc661a2fad87bbab0b7cd22f45faf00d196d8d9abd2d101b5ed9f1c1bcc8bb.webp"
            alt="Lifestyle image"
            width={600}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Subscribe to Frisky Fridays</h1>
          <p className="text-gray-600 mb-8 text-lg">Get expert-backed sex tips and weekend insights delivered weekly to your inbox.</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-teal-600">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-4 rounded-md transition duration-200"
            >
              Sign up now
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
