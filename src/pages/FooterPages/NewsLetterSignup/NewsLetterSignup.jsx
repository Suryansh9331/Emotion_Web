import React, { useState } from 'react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [isInvalid, setIsInvalid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setIsInvalid(true);
    } else {
      setIsInvalid(false);
      // Handle form submission
      console.log('Email submitted:', email);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (isInvalid) {
      setIsInvalid(false);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/desktop-get-frisky-bg@2x-0eab2e72b1500cd34da8f1aded46d5d386938d4ecefe8f042abb87b47a1d002d.jpg')",
        }}
      >
        {/* Overlay for better text readability on mobile */}
        <div className="absolute inset-0 bg-black/20 md:bg-transparent"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex flex-col md:flex-row">
        {/* Left Side - Main Heading */}
        <div className="flex-1 flex items-center justify-center md:justify-start p-6 md:p-12 lg:p-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
            Get frisky with us.
          </h1>
        </div>

        {/* Right Side - Signup Form */}
        <div className="flex-1 flex items-center justify-center md:justify-end p-6 md:p-12 lg:p-16">
          <div className="w-full max-w-md md:max-w-lg lg:max-w-xl">
            {/* Pink Description Box */}
            <div className="bg-pink-600 p-6 md:p-8 mb-0 rounded-t-lg md:rounded-t-none md:rounded-l-lg">
              <p className="text-white text-lg md:text-xl italic leading-relaxed">
                Sign up for Frisky Fridays to get sex tips (and more) delivered to your inbox every week.
              </p>
            </div>

            {/* White Signup Form */}
            <div className="bg-white p-6 md:p-8 rounded-b-lg md:rounded-b-none md:rounded-r-lg shadow-lg">
              <div className="space-y-4">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">SIGN UP</h2>
                  <p className="text-gray-600 text-sm md:text-base">
                    Just give us your email to receive Frisky Fridays and it'll be our flirty little secret.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
                      Email Address
                    </label>
                    {isInvalid && (
                      <p className="text-pink-600 text-sm mb-2">Email is invalid.</p>
                    )}
                    <input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={handleEmailChange}
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 transition-colors duration-200 ${
                        isInvalid
                          ? 'border-pink-600 focus:border-pink-600 focus:ring-pink-600'
                          : 'border-gray-300 focus:border-teal-600 focus:ring-teal-600'
                      }`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-6 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2"
                  >
                    submit »
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}