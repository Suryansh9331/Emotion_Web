// // RelatedArticlesData.js - Data configuration component
// export const GetRelatedArticlesData = (route) => {
//   const routeConfigs = {
//     '/birth-control': {
//       mainTitle: 'Birth control',
//       subtitle: 'Comprehensive guides and latest information on contraceptive options',
//       accentColor: '#028388',
//       buttonText: 'view all birth control articles',
//       buttonLink: '/birth-control/articles',
//       articles: [
//         {
//           id: 1,
//           image: '/reproductive-health-supplies-coalition-bymICwLq-E4-unsplash.jpg',
//
// category: 'Related Articles',
//           title: '20 ways over-the-counter pills are changing access and control',
// subtitle:"",
//           link: '/birth-control/otc-pills-access'
//         },
//         {
//           id: 2,
//           image: '/reproductive-health-supplies-coalition-cHrcHdg2H9E-unsplash (1).jpg',
//
// category: 'IUD',
//           title: 'How public voices are shaping awareness about IUD benefits.',
// subtitle:"",
//           link: '/birth-control/iud-awareness'
//         },
//         {
//           id: 3,
//           image: '/230912_PTD_CapitolHill-04c.jpg',
//
// category: 'BIRTH CONTROL',
//           title: 'Why this year calls for more gratitude toward birth control options.',
// subtitle:"",
//           link: '/birth-control/gratitude-options'
//         },
//         {
//           id: 4,
//           image: '/Screenshot 2024-03-04 at 8.04.06 AM (1).png',
//
// category: 'BIRTH CONTROL PILL',
//           title: 'A complete guide to Opill, the latest non-prescription birth control pill available.',
// subtitle:"",
//           link: '/birth-control/opill-guide'
//         }
//       ]
//     },
//     '/mental-health': {
//       mainTitle: 'Mental Health',
//       subtitle: 'Expert advice and resources for mental wellness and emotional support',
//       accentColor: '#028388',
//       buttonText: 'view all mental health articles',
//       buttonLink: '/mental-health/articles',
//       articles: [
//         {
//           id: 1,
//           image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop',
//
// category: 'THERAPY',
//           title: 'Understanding the benefits of cognitive behavioral therapy for anxiety',
// subtitle:"",
//           link: '/mental-health/cbt-anxiety'
//         },
//         {
//           id: 2,
//           image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
//
// category: 'MINDFULNESS',
//           title: 'How meditation can transform your daily stress management routine',
// subtitle:"",
//           link: '/mental-health/meditation-stress'
//         },
//         {
//           id: 3,
//           image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
//
// category: 'DEPRESSION',
//           title: 'Recognizing the signs: When to seek professional help for depression',
// subtitle:"",
//           link: '/mental-health/depression-signs'
//         },
//         {
//           id: 4,
//           image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
//
// category: 'WELLNESS',
//           title: 'Building resilience: Daily practices for better mental health',
// subtitle:"",
//           link: '/mental-health/resilience-practices'
//         }
//       ]
//     },
//     '/nutrition': {
//       mainTitle: 'Nutrition & Diet',
//       subtitle: 'Science-based nutrition advice for healthy living and optimal wellness',
//       accentColor: '#028388',
//       buttonText: 'view all nutrition articles',
//       buttonLink: '/nutrition/articles',
//       articles: [
//         {
//           id: 1,
//           image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop',
//
// category: 'HEALTHY EATING',
//           title: 'Plant-based nutrition: Essential nutrients you need to know about',
// subtitle:"",
//           link: '/nutrition/plant-based-nutrients'
//         },
//         {
//           id: 2,
//           image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=300&fit=crop',
//
// category: 'WEIGHT MANAGEMENT',
//           title: 'Sustainable approaches to healthy weight loss without extreme dieting',
// subtitle:"",
//           link: '/nutrition/sustainable-weight-loss'
//         },
//         {
//           id: 3,
//           image: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=400&h=300&fit=crop',
//
// category: 'SUPPLEMENTS',
//           title: 'Do you really need vitamins? A science-based guide to supplementation',
// subtitle:"",
//           link: '/nutrition/vitamin-guide'
//         },
//         {
//           id: 4,
//           image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=400&h=300&fit=crop',
//
// category: 'MEAL PLANNING',
//           title: 'Weekly meal prep strategies for busy professionals and families',
// subtitle:"",
//           link: '/nutrition/meal-prep-strategies'
//         }
//       ]
//     },
//     '/fitness': {
//       mainTitle: 'Fitness & Exercise',
//       subtitle: 'Professional workout guides and fitness tips for all levels',
//       accentColor: '#028388',
//       buttonText: 'view all fitness articles',
//       buttonLink: '/fitness/articles',
//       articles: [
//         {
//           id: 1,
//           image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
//
// category: 'STRENGTH TRAINING',
//           title: 'Building muscle at home: Effective bodyweight exercises for beginners',
// subtitle:"",
//           link: '/fitness/bodyweight-exercises'
//         },
//         {
//           id: 2,
//           image: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=400&h=300&fit=crop',
//
// category: 'CARDIO',
//           title: 'HIIT vs steady-state cardio: Which approach is right for your goals',
// subtitle:"",
//           link: '/fitness/hiit-vs-cardio'
//         },
//         {
//           id: 3,
//           image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop',
//
// category: 'RECOVERY',
//           title: 'The importance of rest days: How recovery improves performance',
// subtitle:"",
//           link: '/fitness/recovery-importance'
//         },
//         {
//           id: 4,
//           image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400&h=300&fit=crop',
//
// category: 'MOTIVATION',
//           title: 'Creating lasting fitness habits: Psychology-backed strategies that work',
// subtitle:"",
//           link: '/fitness/lasting-habits'
//         }
//       ]
//     },
//     '/women-health': {
//       mainTitle: 'Women\'s Health',
//       subtitle: 'Comprehensive health information specifically for women\'s wellness needs',
//       accentColor: '#028388',
//       buttonText: 'view all women\'s health articles',
//       buttonLink: '/women-health/articles',
//       articles: [
//         {
//           id: 1,
//           image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
//
// category: 'REPRODUCTIVE HEALTH',
//           title: 'Understanding your menstrual cycle: What\'s normal and what\'s not',
// subtitle:"",
//           link: '/women-health/menstrual-cycle'
//         },
//         {
//           id: 2,
//           image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
//
// category: 'PREGNANCY',
//           title: 'Essential prenatal care: A comprehensive guide for expecting mothers',
// subtitle:"",
//           link: '/women-health/prenatal-care'
//         },
//         {
//           id: 3,
//           image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop',
//
// category: 'HORMONES',
//           title: 'Hormonal changes through life: From puberty to menopause',
// subtitle:"",
//           link: '/women-health/hormonal-changes'
//         },
//         {
//           id: 4,
//           image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
//           category: 'WELLNESS',
//           title: 'Self-care strategies for busy women: Prioritizing your health',
//           link: '/women-health/self-care'
//         }
//       ]
//     }
//   };

//   // Default fallback configuration
//   const defaultConfig = {
//     mainTitle: 'Health & Wellness',
//     subtitle: 'Expert health information and wellness resources for better living',
//     accentColor: '#028388',
//     buttonText: 'view all articles',
//     buttonLink: '/articles',
//     articles: [
//       {
//         id: 1,
//         image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
//         category: 'HEALTH',
//         title: 'Understanding the basics of preventive healthcare',
//         link: '/health/preventive-care'
//       },
//       {
//         id: 2,
//         image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
//         category: 'WELLNESS',
//         title: 'Building healthy habits that last a lifetime',
//         link: '/wellness/healthy-habits'
//       },
//       {
//         id: 3,
//         image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
//         category: 'LIFESTYLE',
//         title: 'Work-life balance strategies for modern professionals',
//         link: '/lifestyle/work-life-balance'
//       },
//       {
//         id: 4,
//         image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop',
//         category: 'PREVENTION',
//         title: 'Annual health screenings: What you need and when',
//         link: '/prevention/health-screenings'
//       }
//     ]
//   };

//   // Find matching route configuration
//   const matchedRoute = Object.keys(routeConfigs).find(routeKey =>
//     route.startsWith(routeKey)
//   );

//   return matchedRoute ? routeConfigs[matchedRoute] : defaultConfig;
// };

// export default GetRelatedArticlesData;

import React from "react";

// 👉 Config-based data provider

const GetRelatedArticlesData = (route) => {
  const routeConfigs = {
    "/types/iud": {
      mainTitle: "Article You Might Like .....",
      subtitle: "",
      accentColor: "#028388",
      buttonText: "view all  articles",
      buttonLink: "/birth-control/articles",
      articles: [
        {
          id: 1,
          image:
            "/reproductive-health-supplies-coalition-bymICwLq-E4-unsplash.jpg",

          category: "Related Articles",
          title:
            "20 ways over-the-counter pills are changing access and control",
          subtitle: "Spoiler alert: life can get a whole lot easier",
          link: "/birth-control/articles/2816-20-ways-otc-birth-control-pills-change-the-game",
        },
        {
          id: 2,
          image:
            "/reproductive-health-supplies-coalition-cHrcHdg2H9E-unsplash (1).jpg",

          category: "IUD",
          title: "Lorde is answering our birth control prayers",
          subtitle:
            "IUDs have the spotlight in Lorde’s summer album, and we’re so here for it!",
          link: "/birth-control/articles/2815-lorde-is-answering-our-birth-control-prayers",
        },
        {
          id: 3,
          image: "/230912_PTD_CapitolHill-04c.jpg",

          category: "BIRTH CONTROL",
          title:
            "We're saying Thanks, Birth Control! louder than ever this year",
          subtitle: "12 years and counting",
          link: "/birth-control/articles/2718-we-re-saying-thanks-birth-control-louder-than-ever-this-year",
        },
        {
          id: 4,
          image: "/Screenshot 2024-03-04 at 8.04.06 AM (1).png",

          category: "BIRTH CONTROL PILL",
          title:
            "Everything you need to know about Opill, the new over-the-counter birth control pill",
          subtitle: "Now in stores!",
          link: "/birth-control/articles/2595-everything-you-need-to-know-about-opill-the-new-over-the-counter-birth-control-pill",
        },
      ],
    },
    "/types/birth-control-shot": {
      mainTitle: "Article You Might Like",
      subtitle: "",
      accentColor: "#028388",
      buttonText: "view all birth control articles",
      buttonLink: "/birth-control/articles",
      articles: [
        {
          id: 1,
          image:
            "/reproductive-health-supplies-coalition-bymICwLq-E4-unsplash.jpg",

          category: "Related Articles",
          title:
            "20 ways over-the-counter pills are changing access and control",
          subtitle: "Spoiler alert: life can get a whole lot easier",
          link: "/birth-control/articles/2816-20-ways-otc-birth-control-pills-change-the-game",
        },
        {
          id: 2,
          image:
            "/reproductive-health-supplies-coalition-cHrcHdg2H9E-unsplash (1).jpg",

          category: "IUD",
          title: "Lorde is answering our birth control prayers",
          subtitle:
            "IUDs have the spotlight in Lorde’s summer album, and we’re so here for it!",
          link: "/birth-control/articles/2815-lorde-is-answering-our-birth-control-prayers",
        },
        {
          id: 3,
          image: "/230912_PTD_CapitolHill-04c.jpg",

          category: "BIRTH CONTROL",
          title:
            "We're saying Thanks, Birth Control! louder than ever this year",
          subtitle: "12 years and counting",
          link: "/birth-control/articles/2718-we-re-saying-thanks-birth-control-louder-than-ever-this-year",
        },
        {
          id: 4,
          image: "/Screenshot 2024-03-04 at 8.04.06 AM (1).png",

          category: "BIRTH CONTROL PILL",
          title:
            "Everything you need to know about Opill, the new over-the-counter birth control pill",
          subtitle: "Now in stores!",
          link: "/birth-control/articles/2595-everything-you-need-to-know-about-opill-the-new-over-the-counter-birth-control-pill",
        },
      ],
    },
    "/types/implant": {
      mainTitle: "Article You Might Like",
      subtitle: "",
      accentColor: "#028388",
      buttonText: "view all birth control articles",
      buttonLink: "/birth-control/articles",
      articles: [
        {
          id: 1,
          image:
            "/reproductive-health-supplies-coalition-bymICwLq-E4-unsplash.jpg",

          category: "Related Articles",
          title:
            "20 ways over-the-counter pills are changing access and control",
          subtitle: "Spoiler alert: life can get a whole lot easier",
          link: "/birth-control/articles/2816-20-ways-otc-birth-control-pills-change-the-game",
        },
        {
          id: 2,
          image:
            "/reproductive-health-supplies-coalition-cHrcHdg2H9E-unsplash (1).jpg",

          category: "IUD",
          title: "Lorde is answering our birth control prayers",
          subtitle:
            "IUDs have the spotlight in Lorde’s summer album, and we’re so here for it!",
          link: "/birth-control/articles/2815-lorde-is-answering-our-birth-control-prayers",
        },
        {
          id: 3,
          image: "/230912_PTD_CapitolHill-04c.jpg",

          category: "BIRTH CONTROL",
          title:
            "We're saying Thanks, Birth Control! louder than ever this year",
          subtitle: "12 years and counting",
          link: "/birth-control/articles/2718-we-re-saying-thanks-birth-control-louder-than-ever-this-year",
        },
        {
          id: 4,
          image: "/Screenshot 2024-03-04 at 8.04.06 AM (1).png",

          category: "BIRTH CONTROL PILL",
          title:
            "Everything you need to know about Opill, the new over-the-counter birth control pill",
          subtitle: "Now in stores!",
          link: "/birth-control/articles/2595-everything-you-need-to-know-about-opill-the-new-over-the-counter-birth-control-pill",
        },
      ],
    },
    "/types/patch": {
      mainTitle: "Article You Might Like",
      subtitle: "",
      accentColor: "#028388",
      buttonText: "view all birth control articles",
      buttonLink: "/birth-control/articles",
      articles: [
        {
          id: 1,
          image:
            "/reproductive-health-supplies-coalition-bymICwLq-E4-unsplash.jpg",

          category: "Related Articles",
          title:
            "20 ways over-the-counter pills are changing access and control",
          subtitle: "Spoiler alert: life can get a whole lot easier",
          link: "/birth-control/articles/2816-20-ways-otc-birth-control-pills-change-the-game",
        },
        {
          id: 2,
          image:
            "/reproductive-health-supplies-coalition-cHrcHdg2H9E-unsplash (1).jpg",

          category: "IUD",
          title: "Lorde is answering our birth control prayers",
          subtitle:
            "IUDs have the spotlight in Lorde’s summer album, and we’re so here for it!",
          link: "/birth-control/articles/2815-lorde-is-answering-our-birth-control-prayers",
        },
        {
          id: 3,
          image: "/230912_PTD_CapitolHill-04c.jpg",

          category: "BIRTH CONTROL",
          title:
            "We're saying Thanks, Birth Control! louder than ever this year",
          subtitle: "12 years and counting",
          link: "/birth-control/articles/2718-we-re-saying-thanks-birth-control-louder-than-ever-this-year",
        },
        {
          id: 4,
          image: "/Screenshot 2024-03-04 at 8.04.06 AM (1).png",

          category: "BIRTH CONTROL PILL",
          title:
            "Everything you need to know about Opill, the new over-the-counter birth control pill",
          subtitle: "Now in stores!",
          link: "/birth-control/articles/2595-everything-you-need-to-know-about-opill-the-new-over-the-counter-birth-control-pill",
        },
      ],
    },
    "/types/diaphragm": {
      mainTitle: "Article You Might Like",
      subtitle: "",
      accentColor: "#028388",
      buttonText: "view all birth control articles",
      buttonLink: "/birth-control/articles",
      articles: [
        {
          id: 1,
          image:
            "/reproductive-health-supplies-coalition-bymICwLq-E4-unsplash.jpg",

          category: "Related Articles",
          title:
            "20 ways over-the-counter pills are changing access and control",
          subtitle: "Spoiler alert: life can get a whole lot easier",
          link: "/birth-control/articles/2816-20-ways-otc-birth-control-pills-change-the-game",
        },
        {
          id: 2,
          image:
            "/reproductive-health-supplies-coalition-cHrcHdg2H9E-unsplash (1).jpg",

          category: "IUD",
          title: "Lorde is answering our birth control prayers",
          subtitle:
            "IUDs have the spotlight in Lorde’s summer album, and we’re so here for it!",
          link: "/birth-control/articles/2815-lorde-is-answering-our-birth-control-prayers",
        },
        {
          id: 3,
          image: "/230912_PTD_CapitolHill-04c.jpg",

          category: "BIRTH CONTROL",
          title:
            "We're saying Thanks, Birth Control! louder than ever this year",
          subtitle: "12 years and counting",
          link: "/birth-control/articles/2718-we-re-saying-thanks-birth-control-louder-than-ever-this-year",
        },
        {
          id: 4,
          image: "/Screenshot 2024-03-04 at 8.04.06 AM (1).png",

          category: "BIRTH CONTROL PILL",
          title:
            "Everything you need to know about Opill, the new over-the-counter birth control pill",
          subtitle: "Now in stores!",
          link: "/birth-control/articles/2595-everything-you-need-to-know-about-opill-the-new-over-the-counter-birth-control-pill",
        },
      ],
    },
    "/types/Internal-condom": {
      mainTitle: "Article You Might Like",
      subtitle: "",
      accentColor: "#028388",
      buttonText: "view all birth control articles",
      buttonLink: "/birth-control/articles",
      articles: [
        {
          id: 1,
          image:
            "/reproductive-health-supplies-coalition-bymICwLq-E4-unsplash.jpg",

          category: "Related Articles",
          title:
            "20 ways over-the-counter pills are changing access and control",
          subtitle: "Spoiler alert: life can get a whole lot easier",
          link: "/birth-control/articles/2816-20-ways-otc-birth-control-pills-change-the-game",
        },
        {
          id: 2,
          image:
            "/reproductive-health-supplies-coalition-cHrcHdg2H9E-unsplash (1).jpg",

          category: "IUD",
          title: "Lorde is answering our birth control prayers",
          subtitle:
            "IUDs have the spotlight in Lorde’s summer album, and we’re so here for it!",
          link: "/birth-control/articles/2815-lorde-is-answering-our-birth-control-prayers",
        },
        {
          id: 3,
          image: "/230912_PTD_CapitolHill-04c.jpg",

          category: "BIRTH CONTROL",
          title:
            "We're saying Thanks, Birth Control! louder than ever this year",
          subtitle: "12 years and counting",
          link: "/birth-control/articles/2718-we-re-saying-thanks-birth-control-louder-than-ever-this-year",
        },
        {
          id: 4,
          image: "/Screenshot 2024-03-04 at 8.04.06 AM (1).png",

          category: "BIRTH CONTROL PILL",
          title:
            "Everything you need to know about Opill, the new over-the-counter birth control pill",
          subtitle: "Now in stores!",
          link: "/birth-control/articles/2595-everything-you-need-to-know-about-opill-the-new-over-the-counter-birth-control-pill",
        },
      ],
    },
    "/types/fertility-awareness": {
      mainTitle: "Article You Might Like",
      subtitle: "",
      accentColor: "#028388",
      buttonText: "view all birth control articles",
      buttonLink: "/birth-control/articles",
      articles: [
        {
          id: 1,
          image:
            "/reproductive-health-supplies-coalition-bymICwLq-E4-unsplash.jpg",

          category: "Related Articles",
          title:
            "20 ways over-the-counter pills are changing access and control",
          subtitle: "Spoiler alert: life can get a whole lot easier",
          link: "/birth-control/articles/2816-20-ways-otc-birth-control-pills-change-the-game",
        },
        {
          id: 2,
          image:
            "/reproductive-health-supplies-coalition-cHrcHdg2H9E-unsplash (1).jpg",

          category: "IUD",
          title: "Lorde is answering our birth control prayers",
          subtitle:
            "IUDs have the spotlight in Lorde’s summer album, and we’re so here for it!",
          link: "/birth-control/articles/2815-lorde-is-answering-our-birth-control-prayers",
        },
        {
          id: 3,
          image: "/230912_PTD_CapitolHill-04c.jpg",

          category: "BIRTH CONTROL",
          title:
            "We're saying Thanks, Birth Control! louder than ever this year",
          subtitle: "12 years and counting",
          link: "/birth-control/articles/2718-we-re-saying-thanks-birth-control-louder-than-ever-this-year",
        },
        {
          id: 4,
          image: "/Screenshot 2024-03-04 at 8.04.06 AM (1).png",

          category: "BIRTH CONTROL PILL",
          title:
            "Everything you need to know about Opill, the new over-the-counter birth control pill",
          subtitle: "Now in stores!",
          link: "/birth-control/articles/2595-everything-you-need-to-know-about-opill-the-new-over-the-counter-birth-control-pill",
        },
      ],
    },
    "/types/withdrawal": {
      mainTitle: "Article You Might Like",
      subtitle: "",
      accentColor: "#028388",
      buttonText: "view all birth control articles",
      buttonLink: "/birth-control/articles",
      articles: [
        {
          id: 1,
          image:
            "/reproductive-health-supplies-coalition-bymICwLq-E4-unsplash.jpg",

          category: "Related Articles",
          title:
            "20 ways over-the-counter pills are changing access and control",
          subtitle: "Spoiler alert: life can get a whole lot easier",
          link: "/birth-control/articles/2816-20-ways-otc-birth-control-pills-change-the-game",
        },
        {
          id: 2,
          image:
            "/reproductive-health-supplies-coalition-cHrcHdg2H9E-unsplash (1).jpg",

          category: "IUD",
          title: "Lorde is answering our birth control prayers",
          subtitle:
            "IUDs have the spotlight in Lorde’s summer album, and we’re so here for it!",
          link: "/birth-control/articles/2815-lorde-is-answering-our-birth-control-prayers",
        },
        {
          id: 3,
          image: "/230912_PTD_CapitolHill-04c.jpg",

          category: "BIRTH CONTROL",
          title:
            "We're saying Thanks, Birth Control! louder than ever this year",
          subtitle: "12 years and counting",
          link: "/birth-control/articles/2718-we-re-saying-thanks-birth-control-louder-than-ever-this-year",
        },
        {
          id: 4,
          image: "/Screenshot 2024-03-04 at 8.04.06 AM (1).png",

          category: "BIRTH CONTROL PILL",
          title:
            "Everything you need to know about Opill, the new over-the-counter birth control pill",
          subtitle: "Now in stores!",
          link: "/birth-control/articles/2595-everything-you-need-to-know-about-opill-the-new-over-the-counter-birth-control-pill",
        },
      ],
    },
    "/types/not-right-now": {
      mainTitle: "Article You Might Like",
      subtitle: "",
      accentColor: "#028388",
      buttonText: "view all birth control articles",
      buttonLink: "/birth-control/articles",
      articles: [
        {
          id: 1,
          image:
            "/reproductive-health-supplies-coalition-bymICwLq-E4-unsplash.jpg",

          category: "Related Articles",
          title:
            "20 ways over-the-counter pills are changing access and control",
          subtitle: "Spoiler alert: life can get a whole lot easier",
          link: "/birth-control/articles/2816-20-ways-otc-birth-control-pills-change-the-game",
        },
        {
          id: 2,
          image:
            "/reproductive-health-supplies-coalition-cHrcHdg2H9E-unsplash (1).jpg",

          category: "IUD",
          title: "Lorde is answering our birth control prayers",
          subtitle:
            "IUDs have the spotlight in Lorde’s summer album, and we’re so here for it!",
          link: "/birth-control/articles/2815-lorde-is-answering-our-birth-control-prayers",
        },
        {
          id: 3,
          image: "/230912_PTD_CapitolHill-04c.jpg",

          category: "BIRTH CONTROL",
          title:
            "We're saying Thanks, Birth Control! louder than ever this year",
          subtitle: "12 years and counting",
          link: "/birth-control/articles/2718-we-re-saying-thanks-birth-control-louder-than-ever-this-year",
        },
        {
          id: 4,
          image: "/Screenshot 2024-03-04 at 8.04.06 AM (1).png",

          category: "BIRTH CONTROL PILL",
          title:
            "Everything you need to know about Opill, the new over-the-counter birth control pill",
          subtitle: "Now in stores!",
          link: "/birth-control/articles/2595-everything-you-need-to-know-about-opill-the-new-over-the-counter-birth-control-pill",
        },
      ],
    },
    "/types/birth-control-ring": {
      mainTitle: "Article You Might Like",
      subtitle: "",
      accentColor: "#028388",
      buttonText: "view all birth control articles",
      buttonLink: "/birth-control/articles",
      articles: [
        {
          id: 1,
          image:
            "/reproductive-health-supplies-coalition-bymICwLq-E4-unsplash.jpg",

          category: "Related Articles",
          title:
            "20 ways over-the-counter pills are changing access and control",
          subtitle: "Spoiler alert: life can get a whole lot easier",
          link: "/birth-control/articles/2816-20-ways-otc-birth-control-pills-change-the-game",
        },
        {
          id: 2,
          image:
            "/reproductive-health-supplies-coalition-cHrcHdg2H9E-unsplash (1).jpg",

          category: "IUD",
          title: "Lorde is answering our birth control prayers",
          subtitle:
            "IUDs have the spotlight in Lorde’s summer album, and we’re so here for it!",
          link: "/birth-control/articles/2815-lorde-is-answering-our-birth-control-prayers",
        },
        {
          id: 3,
          image: "/230912_PTD_CapitolHill-04c.jpg",

          category: "BIRTH CONTROL",
          title:
            "We're saying Thanks, Birth Control! louder than ever this year",
          subtitle: "12 years and counting",
          link: "/birth-control/articles/2718-we-re-saying-thanks-birth-control-louder-than-ever-this-year",
        },
        {
          id: 4,
          image: "/Screenshot 2024-03-04 at 8.04.06 AM (1).png",

          category: "BIRTH CONTROL PILL",
          title:
            "Everything you need to know about Opill, the new over-the-counter birth control pill",
          subtitle: "Now in stores!",
          link: "/birth-control/articles/2595-everything-you-need-to-know-about-opill-the-new-over-the-counter-birth-control-pill",
        },
      ],
    },
    "/types/birth-control-pill": {
      mainTitle: "Article You Might Like",
      subtitle: "",
      accentColor: "#028388",
      buttonText: "view all birth control articles",
      buttonLink: "/birth-control/articles",
      articles: [
        {
          id: 1,
          image:
            "/reproductive-health-supplies-coalition-bymICwLq-E4-unsplash.jpg",

          category: "Related Articles",
          title:
            "20 ways over-the-counter pills are changing access and control",
          subtitle: "Spoiler alert: life can get a whole lot easier",
          link: "/birth-control/articles/2816-20-ways-otc-birth-control-pills-change-the-game",
        },
        {
          id: 2,
          image:
            "/reproductive-health-supplies-coalition-cHrcHdg2H9E-unsplash (1).jpg",

          category: "IUD",
          title: "Lorde is answering our birth control prayers",
          subtitle:
            "IUDs have the spotlight in Lorde’s summer album, and we’re so here for it!",
          link: "/birth-control/articles/2815-lorde-is-answering-our-birth-control-prayers",
        },
        {
          id: 3,
          image: "/230912_PTD_CapitolHill-04c.jpg",

          category: "BIRTH CONTROL",
          title:
            "We're saying Thanks, Birth Control! louder than ever this year",
          subtitle: "12 years and counting",
          link: "/birth-control/articles/2718-we-re-saying-thanks-birth-control-louder-than-ever-this-year",
        },
        {
          id: 4,
          image: "/Screenshot 2024-03-04 at 8.04.06 AM (1).png",

          category: "BIRTH CONTROL PILL",
          title:
            "Everything you need to know about Opill, the new over-the-counter birth control pill",
          subtitle: "Now in stores!",
          link: "/birth-control/articles/2595-everything-you-need-to-know-about-opill-the-new-over-the-counter-birth-control-pill",
        },
      ],
    },
    "/types/condom": {
      mainTitle: "Article You Might Like",
      subtitle: "",
      accentColor: "#028388",
      buttonText: "view all birth control articles",
      buttonLink: "/birth-control/articles",
      articles: [
        {
          id: 1,
          image:
            "/reproductive-health-supplies-coalition-bymICwLq-E4-unsplash.jpg",

          category: "Related Articles",
          title:
            "20 ways over-the-counter pills are changing access and control",
          subtitle: "Spoiler alert: life can get a whole lot easier",
          link: "/birth-control/articles/2816-20-ways-otc-birth-control-pills-change-the-game",
        },
        {
          id: 2,
          image:
            "/reproductive-health-supplies-coalition-cHrcHdg2H9E-unsplash (1).jpg",

          category: "IUD",
          title: "Lorde is answering our birth control prayers",
          subtitle:
            "IUDs have the spotlight in Lorde’s summer album, and we’re so here for it!",
          link: "/birth-control/articles/2815-lorde-is-answering-our-birth-control-prayers",
        },
        {
          id: 3,
          image: "/230912_PTD_CapitolHill-04c.jpg",

          category: "BIRTH CONTROL",
          title:
            "We're saying Thanks, Birth Control! louder than ever this year",
          subtitle: "12 years and counting",
          link: "/birth-control/articles/2718-we-re-saying-thanks-birth-control-louder-than-ever-this-year",
        },
        {
          id: 4,
          image: "/Screenshot 2024-03-04 at 8.04.06 AM (1).png",

          category: "BIRTH CONTROL PILL",
          title:
            "Everything you need to know about Opill, the new over-the-counter birth control pill",
          subtitle: "Now in stores!",
          link: "/birth-control/articles/2595-everything-you-need-to-know-about-opill-the-new-over-the-counter-birth-control-pill",
        },
      ],
    },
    "/types/cervical-cap": {
      mainTitle: "Article You Might Like",
      subtitle: "",
      accentColor: "#028388",
      buttonText: "view all birth control articles",
      buttonLink: "/birth-control/articles",
      articles: [
        {
          id: 1,
          image:
            "/reproductive-health-supplies-coalition-bymICwLq-E4-unsplash.jpg",

          category: "Related Articles",
          title:
            "20 ways over-the-counter pills are changing access and control",
          subtitle: "Spoiler alert: life can get a whole lot easier",
          link: "/birth-control/articles/2816-20-ways-otc-birth-control-pills-change-the-game",
        },
        {
          id: 2,
          image:
            "/reproductive-health-supplies-coalition-cHrcHdg2H9E-unsplash (1).jpg",

          category: "IUD",
          title: "Lorde is answering our birth control prayers",
          subtitle:
            "IUDs have the spotlight in Lorde’s summer album, and we’re so here for it!",
          link: "/birth-control/articles/2815-lorde-is-answering-our-birth-control-prayers",
        },
        {
          id: 3,
          image: "/230912_PTD_CapitolHill-04c.jpg",

          category: "BIRTH CONTROL",
          title:
            "We're saying Thanks, Birth Control! louder than ever this year",
          subtitle: "12 years and counting",
          link: "/birth-control/articles/2718-we-re-saying-thanks-birth-control-louder-than-ever-this-year",
        },
        {
          id: 4,
          image: "/Screenshot 2024-03-04 at 8.04.06 AM (1).png",

          category: "BIRTH CONTROL PILL",
          title:
            "Everything you need to know about Opill, the new over-the-counter birth control pill",
          subtitle: "Now in stores!",
          link: "/birth-control/articles/2595-everything-you-need-to-know-about-opill-the-new-over-the-counter-birth-control-pill",
        },
      ],
    },
    "/types/spermicide-gell": {
      mainTitle: "Article You Might Like",
      subtitle: "",
      accentColor: "#028388",
      buttonText: "view all birth control articles",
      buttonLink: "/birth-control/articles",
      articles: [
        {
          id: 1,
          image:
            "/reproductive-health-supplies-coalition-bymICwLq-E4-unsplash.jpg",

          category: "Related Articles",
          title:
            "20 ways over-the-counter pills are changing access and control",
          subtitle: "Spoiler alert: life can get a whole lot easier",
          link: "/birth-control/articles/2816-20-ways-otc-birth-control-pills-change-the-game",
        },
        {
          id: 2,
          image:
            "/reproductive-health-supplies-coalition-cHrcHdg2H9E-unsplash (1).jpg",

          category: "IUD",
          title: "Lorde is answering our birth control prayers",
          subtitle:
            "IUDs have the spotlight in Lorde’s summer album, and we’re so here for it!",
          link: "/birth-control/articles/2815-lorde-is-answering-our-birth-control-prayers",
        },
        {
          id: 3,
          image: "/230912_PTD_CapitolHill-04c.jpg",

          category: "BIRTH CONTROL",
          title:
            "We're saying Thanks, Birth Control! louder than ever this year",
          subtitle: "12 years and counting",
          link: "/birth-control/articles/2718-we-re-saying-thanks-birth-control-louder-than-ever-this-year",
        },
        {
          id: 4,
          image: "/Screenshot 2024-03-04 at 8.04.06 AM (1).png",

          category: "BIRTH CONTROL PILL",
          title:
            "Everything you need to know about Opill, the new over-the-counter birth control pill",
          subtitle: "Now in stores!",
          link: "/birth-control/articles/2595-everything-you-need-to-know-about-opill-the-new-over-the-counter-birth-control-pill",
        },
      ],
    },
    "/types/sterilization": {
      mainTitle: "Article You Might Like",
      subtitle: "",
      accentColor: "#028388",
      buttonText: "view all birth control articles",
      buttonLink: "/birth-control/articles",
      articles: [
        {
          id: 1,
          image:
            "/reproductive-health-supplies-coalition-bymICwLq-E4-unsplash.jpg",

          category: "Related Articles",
          title:
            "20 ways over-the-counter pills are changing access and control",
          subtitle: "Spoiler alert: life can get a whole lot easier",
          link: "/birth-control/articles/2816-20-ways-otc-birth-control-pills-change-the-game",
        },
        {
          id: 2,
          image:
            "/reproductive-health-supplies-coalition-cHrcHdg2H9E-unsplash (1).jpg",

          category: "IUD",
          title: "Lorde is answering our birth control prayers",
          subtitle:
            "IUDs have the spotlight in Lorde’s summer album, and we’re so here for it!",
          link: "/birth-control/articles/2815-lorde-is-answering-our-birth-control-prayers",
        },
        {
          id: 3,
          image: "/230912_PTD_CapitolHill-04c.jpg",

          category: "BIRTH CONTROL",
          title:
            "We're saying Thanks, Birth Control! louder than ever this year",
          subtitle: "12 years and counting",
          link: "/birth-control/articles/2718-we-re-saying-thanks-birth-control-louder-than-ever-this-year",
        },
        {
          id: 4,
          image: "/Screenshot 2024-03-04 at 8.04.06 AM (1).png",

          category: "BIRTH CONTROL PILL",
          title:
            "Everything you need to know about Opill, the new over-the-counter birth control pill",
          subtitle: "Now in stores!",
          link: "/birth-control/articles/2595-everything-you-need-to-know-about-opill-the-new-over-the-counter-birth-control-pill",
        },
      ],
    },
    "/types/emergency-contraception": {
      mainTitle: "Article You Might Like",
      subtitle: "",
      accentColor: "#028388",
      buttonText: "view all birth control articles",
      buttonLink: "/birth-control/articles",
      articles: [
        {
          id: 1,
          image:
            "/reproductive-health-supplies-coalition-bymICwLq-E4-unsplash.jpg",

          category: "Related Articles",
          title:
            "20 ways over-the-counter pills are changing access and control",
          subtitle: "Spoiler alert: life can get a whole lot easier",
          link: "/birth-control/articles/2816-20-ways-otc-birth-control-pills-change-the-game",
        },
        {
          id: 2,
          image:
            "/reproductive-health-supplies-coalition-cHrcHdg2H9E-unsplash (1).jpg",

          category: "IUD",
          title: "Lorde is answering our birth control prayers",
          subtitle:
            "IUDs have the spotlight in Lorde’s summer album, and we’re so here for it!",
          link: "/birth-control/articles/2815-lorde-is-answering-our-birth-control-prayers",
        },
        {
          id: 3,
          image: "/230912_PTD_CapitolHill-04c.jpg",

          category: "BIRTH CONTROL",
          title:
            "We're saying Thanks, Birth Control! louder than ever this year",
          subtitle: "12 years and counting",
          link: "/birth-control/articles/2718-we-re-saying-thanks-birth-control-louder-than-ever-this-year",
        },
        {
          id: 4,
          image: "/Screenshot 2024-03-04 at 8.04.06 AM (1).png",

          category: "BIRTH CONTROL PILL",
          title:
            "Everything you need to know about Opill, the new over-the-counter birth control pill",
          subtitle: "Now in stores!",
          link: "/birth-control/articles/2595-everything-you-need-to-know-about-opill-the-new-over-the-counter-birth-control-pill",
        },
      ],
    },

    //  now comes to another section pages routes

    "/sex-relationships/Relationships": {
      mainTitle: "Related  Articles ",
      subtitle: "",
      accentColor: "#028388",
      buttonText: "view all birth control articles",
      buttonLink: "/birth-control/articles",
      articles: [
        {
          id: 1,
          image:
            "/reproductive-health-supplies-coalition-bymICwLq-E4-unsplash.jpg",

          category: "Related Articles",
          title:
            "20 ways over-the-counter pills are changing access and control",
          subtitle: "Spoiler alert: life can get a whole lot easier",
          link: "/birth-control/articles/2816-20-ways-otc-birth-control-pills-change-the-game",
        },
        {
          id: 2,
          image:
            "/reproductive-health-supplies-coalition-cHrcHdg2H9E-unsplash (1).jpg",

          category: "IUD",
          title: "Lorde is answering our birth control prayers",
          subtitle:
            "IUDs have the spotlight in Lorde’s summer album, and we’re so here for it!",
          link: "/birth-control/articles/2815-lorde-is-answering-our-birth-control-prayers",
        },
        {
          id: 3,
          image: "/230912_PTD_CapitolHill-04c.jpg",

          category: "BIRTH CONTROL",
          title:
            "We're saying Thanks, Birth Control! louder than ever this year",
          subtitle: "12 years and counting",
          link: "/birth-control/articles/2718-we-re-saying-thanks-birth-control-louder-than-ever-this-year",
        },
        {
          id: 4,
          image: "/Screenshot 2024-03-04 at 8.04.06 AM (1).png",

          category: "BIRTH CONTROL PILL",
          title:
            "Everything you need to know about Opill, the new over-the-counter birth control pill",
          subtitle: "Now in stores!",
          link: "/birth-control/articles/2595-everything-you-need-to-know-about-opill-the-new-over-the-counter-birth-control-pill",
        },
      ],
    },
    "/sex-relationships/Masturbation": {
      mainTitle: "Related  Articles ",
      subtitle: "",
      accentColor: "#028388",
      buttonText: "view all birth control articles",
      buttonLink: "/birth-control/articles",
      articles: [
        {
          id: 1,
          image:
            "/reproductive-health-supplies-coalition-bymICwLq-E4-unsplash.jpg",

          category: "Related Articles",
          title:
            "20 ways over-the-counter pills are changing access and control",
          subtitle: "Spoiler alert: life can get a whole lot easier",
          link: "/birth-control/articles/2816-20-ways-otc-birth-control-pills-change-the-game",
        },
        {
          id: 2,
          image:
            "/reproductive-health-supplies-coalition-cHrcHdg2H9E-unsplash (1).jpg",

          category: "IUD",
          title: "Lorde is answering our birth control prayers",
          subtitle:
            "IUDs have the spotlight in Lorde’s summer album, and we’re so here for it!",
          link: "/birth-control/articles/2815-lorde-is-answering-our-birth-control-prayers",
        },
        {
          id: 3,
          image: "/230912_PTD_CapitolHill-04c.jpg",

          category: "BIRTH CONTROL",
          title:
            "We're saying Thanks, Birth Control! louder than ever this year",
          subtitle: "12 years and counting",
          link: "/birth-control/articles/2718-we-re-saying-thanks-birth-control-louder-than-ever-this-year",
        },
        {
          id: 4,
          image: "/Screenshot 2024-03-04 at 8.04.06 AM (1).png",

          category: "BIRTH CONTROL PILL",
          title:
            "Everything you need to know about Opill, the new over-the-counter birth control pill",
          subtitle: "Now in stores!",
          link: "/birth-control/articles/2595-everything-you-need-to-know-about-opill-the-new-over-the-counter-birth-control-pill",
        },
      ],
    },
    "/sex-relationships/DatingAndHookup": {
      mainTitle: "Related  Articles ",
      subtitle: "",
      accentColor: "#028388",
      buttonText: "view all birth control articles",
      buttonLink: "/birth-control/articles",
      articles: [
        {
          id: 1,
          image:
            "/reproductive-health-supplies-coalition-bymICwLq-E4-unsplash.jpg",

          category: "Related Articles",
          title:
            "20 ways over-the-counter pills are changing access and control",
          subtitle: "Spoiler alert: life can get a whole lot easier",
          link: "/birth-control/articles/2816-20-ways-otc-birth-control-pills-change-the-game",
        },
        {
          id: 2,
          image:
            "/reproductive-health-supplies-coalition-cHrcHdg2H9E-unsplash (1).jpg",

          category: "IUD",
          title: "Lorde is answering our birth control prayers",
          subtitle:
            "IUDs have the spotlight in Lorde’s summer album, and we’re so here for it!",
          link: "/birth-control/articles/2815-lorde-is-answering-our-birth-control-prayers",
        },
        {
          id: 3,
          image: "/230912_PTD_CapitolHill-04c.jpg",

          category: "BIRTH CONTROL",
          title:
            "We're saying Thanks, Birth Control! louder than ever this year",
          subtitle: "12 years and counting",
          link: "/birth-control/articles/2718-we-re-saying-thanks-birth-control-louder-than-ever-this-year",
        },
        {
          id: 4,
          image: "/Screenshot 2024-03-04 at 8.04.06 AM (1).png",

          category: "BIRTH CONTROL PILL",
          title:
            "Everything you need to know about Opill, the new over-the-counter birth control pill",
          subtitle: "Now in stores!",
          link: "/birth-control/articles/2595-everything-you-need-to-know-about-opill-the-new-over-the-counter-birth-control-pill",
        },
      ],
    },
    "/sex-relationships/BetterSex": {
      mainTitle: "Related  Articles ",
      subtitle: "",
      accentColor: "#028388",
      buttonText: "view all birth control articles",
      buttonLink: "/birth-control/articles",
      articles: [
        {
          id: 1,
          image:
            "/reproductive-health-supplies-coalition-bymICwLq-E4-unsplash.jpg",

          category: "Related Articles",
          title:
            "20 ways over-the-counter pills are changing access and control",
          subtitle: "Spoiler alert: life can get a whole lot easier",
          link: "/birth-control/articles/2816-20-ways-otc-birth-control-pills-change-the-game",
        },
        {
          id: 2,
          image:
            "/reproductive-health-supplies-coalition-cHrcHdg2H9E-unsplash (1).jpg",

          category: "IUD",
          title: "Lorde is answering our birth control prayers",
          subtitle:
            "IUDs have the spotlight in Lorde’s summer album, and we’re so here for it!",
          link: "/birth-control/articles/2815-lorde-is-answering-our-birth-control-prayers",
        },
        {
          id: 3,
          image: "/230912_PTD_CapitolHill-04c.jpg",

          category: "BIRTH CONTROL",
          title:
            "We're saying Thanks, Birth Control! louder than ever this year",
          subtitle: "12 years and counting",
          link: "/birth-control/articles/2718-we-re-saying-thanks-birth-control-louder-than-ever-this-year",
        },
        {
          id: 4,
          image: "/Screenshot 2024-03-04 at 8.04.06 AM (1).png",

          category: "BIRTH CONTROL PILL",
          title:
            "Everything you need to know about Opill, the new over-the-counter birth control pill",
          subtitle: "Now in stores!",
          link: "/birth-control/articles/2595-everything-you-need-to-know-about-opill-the-new-over-the-counter-birth-control-pill",
        },
      ],
    },
    "/sex-relationships/BoundariesAndconsent": {
      mainTitle: "Related  Articles ",
      subtitle: "",
      accentColor: "#028388",
      buttonText: "view all birth control articles",
      buttonLink: "/birth-control/articles",
      articles: [
        {
          id: 1,
          image:
            "/reproductive-health-supplies-coalition-bymICwLq-E4-unsplash.jpg",

          category: "Related Articles",
          title:
            "20 ways over-the-counter pills are changing access and control",
          subtitle: "Spoiler alert: life can get a whole lot easier",
          link: "/birth-control/articles/2816-20-ways-otc-birth-control-pills-change-the-game",
        },
        {
          id: 2,
          image:
            "/reproductive-health-supplies-coalition-cHrcHdg2H9E-unsplash (1).jpg",

          category: "IUD",
          title: "Lorde is answering our birth control prayers",
          subtitle:
            "IUDs have the spotlight in Lorde’s summer album, and we’re so here for it!",
          link: "/birth-control/articles/2815-lorde-is-answering-our-birth-control-prayers",
        },
        {
          id: 3,
          image: "/230912_PTD_CapitolHill-04c.jpg",

          category: "BIRTH CONTROL",
          title:
            "We're saying Thanks, Birth Control! louder than ever this year",
          subtitle: "12 years and counting",
          link: "/birth-control/articles/2718-we-re-saying-thanks-birth-control-louder-than-ever-this-year",
        },
        {
          id: 4,
          image: "/Screenshot 2024-03-04 at 8.04.06 AM (1).png",

          category: "BIRTH CONTROL PILL",
          title:
            "Everything you need to know about Opill, the new over-the-counter birth control pill",
          subtitle: "Now in stores!",
          link: "/birth-control/articles/2595-everything-you-need-to-know-about-opill-the-new-over-the-counter-birth-control-pill",
        },
      ],
    },
    
    // now routes data for  Nexe Section
    "/shw": {
      mainTitle: "Related  Articles ",
      subtitle: "",
      accentColor: "#028388",
      buttonText: "view all birth control articles",
      buttonLink: "/birth-control/articles",
      articles: [
        {
          id: 1,
          image:
            "/reproductive-health-supplies-coalition-bymICwLq-E4-unsplash.jpg",

          category: "Related Articles",
          title:
            "20 ways over-the-counter pills are changing access and control",
          subtitle: "Spoiler alert: life can get a whole lot easier",
          link: "/birth-control/articles/2816-20-ways-otc-birth-control-pills-change-the-game",
        },
        {
          id: 2,
          image:
            "/reproductive-health-supplies-coalition-cHrcHdg2H9E-unsplash (1).jpg",

          category: "IUD",
          title: "Lorde is answering our birth control prayers",
          subtitle:
            "IUDs have the spotlight in Lorde’s summer album, and we’re so here for it!",
          link: "/birth-control/articles/2815-lorde-is-answering-our-birth-control-prayers",
        },
        {
          id: 3,
          image: "/230912_PTD_CapitolHill-04c.jpg",

          category: "BIRTH CONTROL",
          title:
            "We're saying Thanks, Birth Control! louder than ever this year",
          subtitle: "12 years and counting",
          link: "/birth-control/articles/2718-we-re-saying-thanks-birth-control-louder-than-ever-this-year",
        },
        {
          id: 4,
          image: "/Screenshot 2024-03-04 at 8.04.06 AM (1).png",

          category: "BIRTH CONTROL PILL",
          title:
            "Everything you need to know about Opill, the new over-the-counter birth control pill",
          subtitle: "Now in stores!",
          link: "/birth-control/articles/2595-everything-you-need-to-know-about-opill-the-new-over-the-counter-birth-control-pill",
        },
      ],
    },
    "/pregnancy-and-fertility": {
      mainTitle: "Related  Articles ",
      subtitle: "",
      accentColor: "#028388",
      buttonText: "view all birth control articles",
      buttonLink: "/birth-control/articles",
      articles: [
        {
          id: 1,
          image:
            "/reproductive-health-supplies-coalition-bymICwLq-E4-unsplash.jpg",

          category: "Related Articles",
          title:
            "20 ways over-the-counter pills are changing access and control",
          subtitle: "Spoiler alert: life can get a whole lot easier",
          link: "/birth-control/articles/2816-20-ways-otc-birth-control-pills-change-the-game",
        },
        {
          id: 2,
          image:
            "/reproductive-health-supplies-coalition-cHrcHdg2H9E-unsplash (1).jpg",

          category: "IUD",
          title: "Lorde is answering our birth control prayers",
          subtitle:
            "IUDs have the spotlight in Lorde’s summer album, and we’re so here for it!",
          link: "/birth-control/articles/2815-lorde-is-answering-our-birth-control-prayers",
        },
        {
          id: 3,
          image: "/230912_PTD_CapitolHill-04c.jpg",

          category: "BIRTH CONTROL",
          title:
            "We're saying Thanks, Birth Control! louder than ever this year",
          subtitle: "12 years and counting",
          link: "/birth-control/articles/2718-we-re-saying-thanks-birth-control-louder-than-ever-this-year",
        },
        {
          id: 4,
          image: "/Screenshot 2024-03-04 at 8.04.06 AM (1).png",

          category: "BIRTH CONTROL PILL",
          title:
            "Everything you need to know about Opill, the new over-the-counter birth control pill",
          subtitle: "Now in stores!",
          link: "/birth-control/articles/2595-everything-you-need-to-know-about-opill-the-new-over-the-counter-birth-control-pill",
        },
      ],
    },
    "/health-care": {
      mainTitle: "Related  Articles ",
      subtitle: "",
      accentColor: "#028388",
      buttonText: "view all birth control articles",
      buttonLink: "/birth-control/articles",
      articles: [
        {
          id: 1,
          image:
            "/reproductive-health-supplies-coalition-bymICwLq-E4-unsplash.jpg",

          category: "Related Articles",
          title:
            "20 ways over-the-counter pills are changing access and control",
          subtitle: "Spoiler alert: life can get a whole lot easier",
          link: "/birth-control/articles/2816-20-ways-otc-birth-control-pills-change-the-game",
        },
        {
          id: 2,
          image:
            "/reproductive-health-supplies-coalition-cHrcHdg2H9E-unsplash (1).jpg",

          category: "IUD",
          title: "Lorde is answering our birth control prayers",
          subtitle:
            "IUDs have the spotlight in Lorde’s summer album, and we’re so here for it!",
          link: "/birth-control/articles/2815-lorde-is-answering-our-birth-control-prayers",
        },
        {
          id: 3,
          image: "/230912_PTD_CapitolHill-04c.jpg",

          category: "BIRTH CONTROL",
          title:
            "We're saying Thanks, Birth Control! louder than ever this year",
          subtitle: "12 years and counting",
          link: "/birth-control/articles/2718-we-re-saying-thanks-birth-control-louder-than-ever-this-year",
        },
        {
          id: 4,
          image: "/Screenshot 2024-03-04 at 8.04.06 AM (1).png",

          category: "BIRTH CONTROL PILL",
          title:
            "Everything you need to know about Opill, the new over-the-counter birth control pill",
          subtitle: "Now in stores!",
          link: "/birth-control/articles/2595-everything-you-need-to-know-about-opill-the-new-over-the-counter-birth-control-pill",
        },
      ],
    },
    "/periods-and-vaginal-health": {
      mainTitle: "Related  Articles ",
      subtitle: "",
      accentColor: "#028388",
      buttonText: "view all birth control articles",
      buttonLink: "/birth-control/articles",
      articles: [
        {
          id: 1,
          image:
            "/reproductive-health-supplies-coalition-bymICwLq-E4-unsplash.jpg",

          category: "Related Articles",
          title:
            "20 ways over-the-counter pills are changing access and control",
          subtitle: "Spoiler alert: life can get a whole lot easier",
          link: "/birth-control/articles/2816-20-ways-otc-birth-control-pills-change-the-game",
        },
        {
          id: 2,
          image:
            "/reproductive-health-supplies-coalition-cHrcHdg2H9E-unsplash (1).jpg",

          category: "IUD",
          title: "Lorde is answering our birth control prayers",
          subtitle:
            "IUDs have the spotlight in Lorde’s summer album, and we’re so here for it!",
          link: "/birth-control/articles/2815-lorde-is-answering-our-birth-control-prayers",
        },
        {
          id: 3,
          image: "/230912_PTD_CapitolHill-04c.jpg",

          category: "BIRTH CONTROL",
          title:
            "We're saying Thanks, Birth Control! louder than ever this year",
          subtitle: "12 years and counting",
          link: "/birth-control/articles/2718-we-re-saying-thanks-birth-control-louder-than-ever-this-year",
        },
        {
          id: 4,
          image: "/Screenshot 2024-03-04 at 8.04.06 AM (1).png",

          category: "BIRTH CONTROL PILL",
          title:
            "Everything you need to know about Opill, the new over-the-counter birth control pill",
          subtitle: "Now in stores!",
          link: "/birth-control/articles/2595-everything-you-need-to-know-about-opill-the-new-over-the-counter-birth-control-pill",
        },
      ],
    },


// now routes data for LifeCycle & Inspiration Section Pages
 "/lifestyle-and-inspiration/Inspiration": {
      mainTitle: "Related  Articles ",
      subtitle: "",
      accentColor: "#028388",
      buttonText: "view all birth control articles",
      buttonLink: "/birth-control/articles",
      articles: [
        {
          id: 1,
          image:
            "/reproductive-health-supplies-coalition-bymICwLq-E4-unsplash.jpg",

          category: "Related Articles",
          title:
            "20 ways over-the-counter pills are changing access and control",
          subtitle: "Spoiler alert: life can get a whole lot easier",
          link: "/birth-control/articles/2816-20-ways-otc-birth-control-pills-change-the-game",
        },
        {
          id: 2,
          image:
            "/reproductive-health-supplies-coalition-cHrcHdg2H9E-unsplash (1).jpg",

          category: "IUD",
          title: "Lorde is answering our birth control prayers",
          subtitle:
            "IUDs have the spotlight in Lorde’s summer album, and we’re so here for it!",
          link: "/birth-control/articles/2815-lorde-is-answering-our-birth-control-prayers",
        },
        {
          id: 3,
          image: "/230912_PTD_CapitolHill-04c.jpg",

          category: "BIRTH CONTROL",
          title:
            "We're saying Thanks, Birth Control! louder than ever this year",
          subtitle: "12 years and counting",
          link: "/birth-control/articles/2718-we-re-saying-thanks-birth-control-louder-than-ever-this-year",
        },
        {
          id: 4,
          image: "/Screenshot 2024-03-04 at 8.04.06 AM (1).png",

          category: "BIRTH CONTROL PILL",
          title:
            "Everything you need to know about Opill, the new over-the-counter birth control pill",
          subtitle: "Now in stores!",
          link: "/birth-control/articles/2595-everything-you-need-to-know-about-opill-the-new-over-the-counter-birth-control-pill",
        },
      ],
    },
 "/lifestyle-and-inspiration/horoscopes": {
      mainTitle: "Related  Articles ",
      subtitle: "",
      accentColor: "#028388",
      buttonText: "view all birth control articles",
      buttonLink: "/birth-control/articles",
      articles: [
        {
          id: 1,
          image:
            "/reproductive-health-supplies-coalition-bymICwLq-E4-unsplash.jpg",

          category: "Related Articles",
          title:
            "20 ways over-the-counter pills are changing access and control",
          subtitle: "Spoiler alert: life can get a whole lot easier",
          link: "/birth-control/articles/2816-20-ways-otc-birth-control-pills-change-the-game",
        },
        {
          id: 2,
          image:
            "/reproductive-health-supplies-coalition-cHrcHdg2H9E-unsplash (1).jpg",

          category: "IUD",
          title: "Lorde is answering our birth control prayers",
          subtitle:
            "IUDs have the spotlight in Lorde’s summer album, and we’re so here for it!",
          link: "/birth-control/articles/2815-lorde-is-answering-our-birth-control-prayers",
        },
        {
          id: 3,
          image: "/230912_PTD_CapitolHill-04c.jpg",

          category: "BIRTH CONTROL",
          title:
            "We're saying Thanks, Birth Control! louder than ever this year",
          subtitle: "12 years and counting",
          link: "/birth-control/articles/2718-we-re-saying-thanks-birth-control-louder-than-ever-this-year",
        },
        {
          id: 4,
          image: "/Screenshot 2024-03-04 at 8.04.06 AM (1).png",

          category: "BIRTH CONTROL PILL",
          title:
            "Everything you need to know about Opill, the new over-the-counter birth control pill",
          subtitle: "Now in stores!",
          link: "/birth-control/articles/2595-everything-you-need-to-know-about-opill-the-new-over-the-counter-birth-control-pill",
        },
      ],
    },
 "/lifestyle-and-inspiration/activism-politics": {
      mainTitle: "Related  Articles ",
      subtitle: "",
      accentColor: "#028388",
      buttonText: "view all birth control articles",
      buttonLink: "/birth-control/articles",
      articles: [
        {
          id: 1,
          image:
            "/reproductive-health-supplies-coalition-bymICwLq-E4-unsplash.jpg",

          category: "Related Articles",
          title:
            "20 ways over-the-counter pills are changing access and control",
          subtitle: "Spoiler alert: life can get a whole lot easier",
          link: "/birth-control/articles/2816-20-ways-otc-birth-control-pills-change-the-game",
        },
        {
          id: 2,
          image:
            "/reproductive-health-supplies-coalition-cHrcHdg2H9E-unsplash (1).jpg",

          category: "IUD",
          title: "Lorde is answering our birth control prayers",
          subtitle:
            "IUDs have the spotlight in Lorde’s summer album, and we’re so here for it!",
          link: "/birth-control/articles/2815-lorde-is-answering-our-birth-control-prayers",
        },
        {
          id: 3,
          image: "/230912_PTD_CapitolHill-04c.jpg",

          category: "BIRTH CONTROL",
          title:
            "We're saying Thanks, Birth Control! louder than ever this year",
          subtitle: "12 years and counting",
          link: "/birth-control/articles/2718-we-re-saying-thanks-birth-control-louder-than-ever-this-year",
        },
        {
          id: 4,
          image: "/Screenshot 2024-03-04 at 8.04.06 AM (1).png",

          category: "BIRTH CONTROL PILL",
          title:
            "Everything you need to know about Opill, the new over-the-counter birth control pill",
          subtitle: "Now in stores!",
          link: "/birth-control/articles/2595-everything-you-need-to-know-about-opill-the-new-over-the-counter-birth-control-pill",
        },
      ],
    },
 "/lifestyle-and-inspiration/self-love-and-body-positivity": {
      mainTitle: "Related  Articles ",
      subtitle: "",
      accentColor: "#028388",
      buttonText: "view all birth control articles",
      buttonLink: "/birth-control/articles",
      articles: [
        {
          id: 1,
          image:
            "/reproductive-health-supplies-coalition-bymICwLq-E4-unsplash.jpg",

          category: "Related Articles",
          title:
            "20 ways over-the-counter pills are changing access and control",
          subtitle: "Spoiler alert: life can get a whole lot easier",
          link: "/birth-control/articles/2816-20-ways-otc-birth-control-pills-change-the-game",
        },
        {
          id: 2,
          image:
            "/reproductive-health-supplies-coalition-cHrcHdg2H9E-unsplash (1).jpg",

          category: "IUD",
          title: "Lorde is answering our birth control prayers",
          subtitle:
            "IUDs have the spotlight in Lorde’s summer album, and we’re so here for it!",
          link: "/birth-control/articles/2815-lorde-is-answering-our-birth-control-prayers",
        },
        {
          id: 3,
          image: "/230912_PTD_CapitolHill-04c.jpg",

          category: "BIRTH CONTROL",
          title:
            "We're saying Thanks, Birth Control! louder than ever this year",
          subtitle: "12 years and counting",
          link: "/birth-control/articles/2718-we-re-saying-thanks-birth-control-louder-than-ever-this-year",
        },
        {
          id: 4,
          image: "/Screenshot 2024-03-04 at 8.04.06 AM (1).png",

          category: "BIRTH CONTROL PILL",
          title:
            "Everything you need to know about Opill, the new over-the-counter birth control pill",
          subtitle: "Now in stores!",
          link: "/birth-control/articles/2595-everything-you-need-to-know-about-opill-the-new-over-the-counter-birth-control-pill",
        },
      ],
    },

  };

  const defaultConfig = {
    mainTitle: "Health & Wellness",
    subtitle:
      "Expert health information and wellness resources for better living",
    accentColor: "#028388",
    buttonText: "view all articles",
    buttonLink: "/articles",
    articles: [
      /* ...default articles... */
    ],
  };

  const cleanedRoute = route.toLowerCase(); // normalize casing

  const matchedRoute = Object.keys(routeConfigs).find(
    (key) => cleanedRoute === key.toLowerCase()
  );

  return matchedRoute ? routeConfigs[matchedRoute] : defaultConfig;
};
export default GetRelatedArticlesData;
