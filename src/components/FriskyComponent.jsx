// // import { useState } from 'react';

// // export default function FriskyFridaysSignup() {
// //   const [email, setEmail] = useState('');
// //   const [isSubmitting, setIsSubmitting] = useState(false);
// //   const [isSubmitted, setIsSubmitted] = useState(false);

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     if (!email) return;
    
// //     setIsSubmitting(true);
// //     // Simulate API call
// //     await new Promise(resolve => setTimeout(resolve, 1000));
// //     setIsSubmitted(true);
// //     setIsSubmitting(false);
// //   };

// //   if (isSubmitted) {
// //     return (
// //       <div className="min-h-screen bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center p-4">
// //         <div className="bg-white rounded-2xl shadow-2xl p-8 text-center max-w-md w-full">
// //           <div className="text-6xl mb-4">🎉</div>
// //           <h2 className="text-2xl font-bold text-gray-800 mb-2">Welcome aboard!</h2>
// //           <p className="text-gray-600">You've successfully subscribed to Frisky Fridays. Get ready for some exciting weekends!</p>
// //         </div>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center p-4">
// //       <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-4xl w-full">
// //         <div className="flex flex-col lg:flex-row">
// //           {/* Image Section */}
// //           <div className="lg:w-1/2 relative">
// //             <div className="h-64 lg:h-full bg-gradient-to-br from-orange-200 to-pink-200 relative overflow-hidden">
// //               {/* Abstract background pattern */}
// //               <div className="absolute inset-0 opacity-20">
// //                 <div className="absolute top-10 left-10 w-20 h-20 bg-orange-300 rounded-full blur-xl"></div>
// //                 <div className="absolute bottom-20 right-10 w-32 h-32 bg-pink-300 rounded-full blur-xl"></div>
// //                 <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-yellow-300 rounded-full blur-lg"></div>
// //               </div>
              
// //               {/* Stylized figure silhouette */}
// //               <div className="absolute inset-0 flex items-center justify-center">
// //                 <img src="/mobi-frisky-fridays-header-medium-f5cc661a2fad87bbab0b7cd22f45faf00d196d8d9abd2d101b5ed9f1c1bcc8bb.webp" alt=""
// //                 />
// //                 </div>
              
// //               {/* Floating hearts */}
// //               <div className="absolute top-4 right-4 text-2xl animate-bounce">💕</div>
// //               <div className="absolute bottom-8 left-6 text-lg animate-bounce delay-300">❤️</div>
// //             </div>
// //           </div>

// //           {/* Content Section */}
// //           <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
// //             <div className="max-w-md mx-auto w-full">
// //               <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 leading-tight">
// //                 Subscribe to Frisky Fridays
// //               </h1>
              
// //               <p className="text-gray-600 text-lg mb-8 leading-relaxed">
// //                 Heat up your weekends with our best sex tips and so much more.
// //               </p>
              
// //               <div className="space-y-6">
// //                 <div>
// //                   <label htmlFor="email" className="block text-sm font-semibold text-teal-700 mb-2">
// //                     Email Address
// //                   </label>
// //                   <input
// //                     type="email"
// //                     id="email"
// //                     value={email}
// //                     onChange={(e) => setEmail(e.target.value)}
// //                     placeholder="your@email.com"
// //                     className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-teal-500 focus:outline-none transition-colors text-gray-700 placeholder-gray-400"
// //                   />
// //                 </div>
                
// //                 <button
// //                   onClick={handleSubmit}
// //                   disabled={isSubmitting || !email}
// //                   className="w-full bg-teal-600 hover:bg-teal-700 disabled:bg-teal-300 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg"
// //                 >
// //                   {isSubmitting ? (
// //                     <div className="flex items-center justify-center">
// //                       <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
// //                       Signing up...
// //                     </div>
// //                   ) : (
// //                     'Sign up now'
// //                   )}
// //                 </button>
// //               </div>
              
// //               <div className="mt-6 text-center">
// //                 <p className="text-xs text-gray-500">
// //                   By subscribing, you agree to receive our weekly newsletter. 
// //                   <br />
// //                   You can unsubscribe at any time.
// //                 </p>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }



// import { useState } from "react"

// export default function SubscriptionForm() {
//   const [email, setEmail] = useState("")

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     // Handle form submission logic here
//     console.log("Email submitted:", email)
//     // Reset form
//     setEmail("")
//   }

//   return (
//     <div className="min-h-auto w-full bg-teal-600 flex items-center justify-center p-8">
//       <div className="bg-white rounded-lg overflow-hidden max-w-5xl w-full flex flex-col md:flex-row shadow-xl">
//         {/* Image Section */}
//         <div className="w-full md:w-1/2 relative">
//           <img
//             src="/mobi-frisky-fridays-header-medium-f5cc661a2fad87bbab0b7cd22f45faf00d196d8d9abd2d101b5ed9f1c1bcc8bb.webp"
//             alt="Lifestyle image"
//             width={600}
//             height={600}
//             className="w-full h-full object-cover"
//           />
//         </div>

//         {/* Form Section */}
//         <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
//           <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Subscribe to Frisky Fridays</h1>
//           <p className="text-gray-600 mb-8 text-lg">Get expert-backed sex tips and weekend insights delivered weekly to your inbox.</p>

//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div className="space-y-2">
//               <label htmlFor="email" className="block text-sm font-medium text-teal-600">
//                 Email Address
//               </label>
//               <input
//                 id="email"
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="your@email.com"
//                 className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
//                 required
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-4 rounded-md transition duration-200"
//             >
//               Sign up now
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   )
// }


















import { useState } from "react"
import { CheckCircle, XCircle } from "lucide-react"

export default function SubscriptionForm() {
  const [email, setEmail] = useState("")
  const [toasts, setToasts] = useState([])

  // Toast notification system
  const showToast = (message, type = 'success') => {
    const id = Date.now()
    setToasts(prev => [...prev, { id, message, type }])
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id))
    }, 4000)
  }

  const removeToast = (id) => {
    setToasts(prev => prev.filter(t => t.id !== id))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const trimmed = email.trim()
    if (!trimmed) {
      showToast("Please enter your email address", "error")
      return
    }

    try {
      // 1. Check for duplicates
      const checkRes = await fetch(
        `https://sheetdb.io/api/v1/wjcbiptemnbqh/search?email=${encodeURIComponent(trimmed)}`
      )
      if (!checkRes.ok) {
        console.error("SheetDB lookup error:", checkRes.status, await checkRes.text())
        showToast("Couldn’t validate email. Please try again.", "error")
        return
      }
      const existing = await checkRes.json()
      if (Array.isArray(existing) && existing.length > 0) {
        showToast("This email is already subscribed.", "error")
        return
      }

      // 2. If not found, submit it
      const postRes = await fetch("https://sheetdb.io/api/v1/wjcbiptemnbqh", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: [{ email: trimmed }] })
      })

      if (postRes.ok) {
        showToast("Successfully subscribed! Welcome to Frisky Fridays!", "success")
        setEmail("")
      } else {
        console.error("SheetDB post error:", postRes.status, await postRes.text())
        showToast("Subscription failed. Please try again later.", "error")
      }
    } catch (err) {
      console.error("Network error:", err)
      showToast("Network error. Please check your connection.", "error")
    }
  }

  return (
    <div className="min-h-screen w-full bg-teal-600 flex items-center justify-center p-4">
      {/* Toast Container */}
      <div className="fixed top-4 right-4 z-50 space-y-2">
        {toasts.map(t => (
          <div
            key={t.id}
            className={`flex items-center gap-3 px-6 py-4 rounded-lg shadow-lg transition-all duration-300 ${
              t.type === 'success'
                ? 'bg-green-500 text-white'
                : 'bg-red-500 text-white'
            }`}
          >
            {t.type === 'success' ? (
              <CheckCircle className="w-5 h-5 flex-shrink-0" />
            ) : (
              <XCircle className="w-5 h-5 flex-shrink-0" />
            )}
            <span className="font-medium">{t.message}</span>
            <button onClick={() => removeToast(t.id)} className="ml-2 text-white/80 hover:text-white">
              ×
            </button>
          </div>
        ))}
      </div>

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
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Subscribe to Frisky Fridays
          </h1>
          <p className="text-gray-600 mb-8 text-lg">
            Get expert-backed sex tips and weekend insights delivered weekly to your inbox.
          </p>

          <div className="space-y-4">
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
                onKeyDown={(e) => e.key === 'Enter' && handleSubmit(e)}
              />
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-4 rounded-md transition duration-200"
            >
              Sign up now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}