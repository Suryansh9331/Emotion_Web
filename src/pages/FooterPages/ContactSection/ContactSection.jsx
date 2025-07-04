import React from 'react';
import { ExternalLink } from 'lucide-react';

export default function ContactSection() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="bg-white">
        {/* Header */}
        <div className="border-b border-gray-200 pb-4 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 tracking-wide">
            CONTACT US /
          </h2>
        </div>

        {/* Content */}
        <div className="space-y-4 text-gray-700 leading-relaxed">
          {/* First paragraph */}
          <p className="text-sm sm:text-base">
            We'd love to hear from you! Is there a birth control question you want to see answered on our site? Send 
            comments, feedback, requests, and suggestions to{' '}
            <a 
              href="mailto:info@bedsiderr.com" 
              className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200"
            >
            info@bedsiderr.com
            </a>.
          </p>

          {/* Second paragraph */}
          <p className="text-sm sm:text-base">
            For website support and questions about Bedsiderr mobile, please email{' '}
            <a 
              href="mailto:info@bedsiderr.com" 
              className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200"
            >
        info@bedsiderr.com
            </a>.
          </p>

          {/* SMS opt-out paragraph */}
          <p className="text-sm sm:text-base">
            To opt-out of our SMS service, text "STOP" to (254) 414-2411. To get help, email us at{' '}
            <a 
              href="mailto:info@bedsiderr.com" 
              className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200"
            >
        info@bedsiderr.com
            </a>. Message frequency ranges from daily to one message per month or less.
          </p>

          {/* Medical questions paragraph */}
          <p className="text-sm sm:text-base">
            For medical questions, our{' '}
            <a 
              href="#" 
              className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200"
            >
              Questions
            </a>{' '}
            section has lots of good information, but it's always best to consult 
            a health care provider. If you need to find one,{' '}
            <a 
              href="#" 
              className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200"
            >
              we've got a list
            </a>{' '}
            of health centers near you.
          </p>

          {/* Email delivery paragraph */}
          <p className="text-sm sm:text-base">
            We'll always send an auto-reply email when you contact us. If you don't get one, it's possible your ISP or 
            email software is blocking mesinfo@bedsiderr.com. Check your spam filter, contact your ISP, or read 
            the help section of your software to figure out how to change your email filter settings.
          </p>

          {/* Social media paragraph */}
          <p className="text-sm sm:text-base">
            Like us on{' '}
            <a 
              href="#" 
              className="text-blue-600 hover:text-blue-800 underline inline-flex items-center gap-1 transition-colors duration-200"
            >
              Facebook
              <ExternalLink className="w-3 h-3" />
            </a>{' '}
            and follow us on{' '}
            <a 
              href="#" 
              className="text-blue-600 hover:text-blue-800 underline inline-flex items-center gap-1 transition-colors duration-200"
            >
              Twitter
              <ExternalLink className="w-3 h-3" />
            </a>{' '}
            and{' '}
            <a 
              href="#" 
              className="text-blue-600 hover:text-blue-800 underline inline-flex items-center gap-1 transition-colors duration-200"
            >
              Tumblr
              <ExternalLink className="w-3 h-3" />
            </a>{' '}
            too.
          </p>
        </div>
      </div>
    </div>
  );
}