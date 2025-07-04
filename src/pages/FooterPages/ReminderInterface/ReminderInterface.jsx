import React from "react";
import { Link } from "react-router-dom";

export default function ReminderInterface() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Full-screen hero section */}
      <div className="relative w-screen h-screen overflow-hidden">
        {/* Background image via Tailwind utility */}
        <div
          className="absolute inset-0 bg-[url('/bike-7e05ef0e7c2cd281e11a5e6e65f54454ab7d0c9ca6ee640bc4e1545e3d7ada82.jpg')] bg-cover bg-center"
        />

        {/* Content overlay */}
        <div className="relative z-10 flex flex-col container mx-auto px-4 py-8 md:py-16">
          {/* Header */}
          <div className="mb-4 md:mb-8">
            <h2 className="text-white text-xl md:text-2xl font-light tracking-wide">
              REMINDERS /
            </h2>
          </div>

          {/* Main heading */}
          <div className="mb-8 md:mb-16 lg:mb-24 max-w-3xl">
            <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-light italic leading-tight">
              You've got enough to remember already.
            </h1>
          </div>

          {/* Two-column info boxes */}
          <div className="mt-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Left info box */}
            <div className="bg-teal-700 bg-opacity-90 p-6 md:p-8 text-white">
              <p className="text-lg md:text-xl font-light italic leading-relaxed">
                Set up a reminder and leave the rest to us. We'll nudge you when it's time to visit your provider.
              </p>
            </div>

            {/* Right info box */}
            <div className="bg-gray-100 bg-opacity-90 p-6 md:p-8">
              <h3 className="text-gray-700 text-lg md:text-xl mb-4">
                appointment reminders /
              </h3>
              <p className="text-gray-700 mb-6">
                Create a new reminder below or log in to see your upcoming appointments.
              </p>
              <div className="text-right">
                <Link
                  to="/"
                  className="text-teal-700 hover:text-teal-800 transition-colors"
                >
                  set a reminder »
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white py-4 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <p className="text-sm text-gray-700">
            To opt-out of our SMS service, text "STOP" to (254) 414-2411. To get help, email us at support@Bedsiderr.org.
            <span className="block mt-1 md:inline md:mt-0">
              Supported Carriers: AT&T, Boost, Carolina West (ACG), Cincinnati Bell, Cellular South, Cellcom,
              Cricket/Leap, GetLisa/ClearSky, MetroPCS, Nextel, nTelos, Sprint, T-Mobile, U.S. Cellular, Verizon
              Wireless, Virgin Mobile.
            </span>
          </p>
        </div>
      </footer>
    </div>
  );
}