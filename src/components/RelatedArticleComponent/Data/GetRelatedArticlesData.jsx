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
//           category: 'Related Articles',
//           title: '20 ways over-the-counter pills are changing access and control',
//           link: '/birth-control/otc-pills-access'
//         },
//         {
//           id: 2,
//           image: '/reproductive-health-supplies-coalition-cHrcHdg2H9E-unsplash (1).jpg',
//           category: 'IUD',
//           title: 'How public voices are shaping awareness about IUD benefits.',
//           link: '/birth-control/iud-awareness'
//         },
//         {
//           id: 3,
//           image: '/230912_PTD_CapitolHill-04c.jpg',
//           category: 'BIRTH CONTROL',
//           title: 'Why this year calls for more gratitude toward birth control options.',
//           link: '/birth-control/gratitude-options'
//         },
//         {
//           id: 4,
//           image: '/Screenshot 2024-03-04 at 8.04.06 AM (1).png',
//           category: 'BIRTH CONTROL PILL',
//           title: 'A complete guide to Opill, the latest non-prescription birth control pill available.',
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
//           category: 'THERAPY',
//           title: 'Understanding the benefits of cognitive behavioral therapy for anxiety',
//           link: '/mental-health/cbt-anxiety'
//         },
//         {
//           id: 2,
//           image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
//           category: 'MINDFULNESS',
//           title: 'How meditation can transform your daily stress management routine',
//           link: '/mental-health/meditation-stress'
//         },
//         {
//           id: 3,
//           image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
//           category: 'DEPRESSION',
//           title: 'Recognizing the signs: When to seek professional help for depression',
//           link: '/mental-health/depression-signs'
//         },
//         {
//           id: 4,
//           image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
//           category: 'WELLNESS',
//           title: 'Building resilience: Daily practices for better mental health',
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
//           category: 'HEALTHY EATING',
//           title: 'Plant-based nutrition: Essential nutrients you need to know about',
//           link: '/nutrition/plant-based-nutrients'
//         },
//         {
//           id: 2,
//           image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=300&fit=crop',
//           category: 'WEIGHT MANAGEMENT',
//           title: 'Sustainable approaches to healthy weight loss without extreme dieting',
//           link: '/nutrition/sustainable-weight-loss'
//         },
//         {
//           id: 3,
//           image: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=400&h=300&fit=crop',
//           category: 'SUPPLEMENTS',
//           title: 'Do you really need vitamins? A science-based guide to supplementation',
//           link: '/nutrition/vitamin-guide'
//         },
//         {
//           id: 4,
//           image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=400&h=300&fit=crop',
//           category: 'MEAL PLANNING',
//           title: 'Weekly meal prep strategies for busy professionals and families',
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
//           category: 'STRENGTH TRAINING',
//           title: 'Building muscle at home: Effective bodyweight exercises for beginners',
//           link: '/fitness/bodyweight-exercises'
//         },
//         {
//           id: 2,
//           image: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=400&h=300&fit=crop',
//           category: 'CARDIO',
//           title: 'HIIT vs steady-state cardio: Which approach is right for your goals',
//           link: '/fitness/hiit-vs-cardio'
//         },
//         {
//           id: 3,
//           image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop',
//           category: 'RECOVERY',
//           title: 'The importance of rest days: How recovery improves performance',
//           link: '/fitness/recovery-importance'
//         },
//         {
//           id: 4,
//           image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400&h=300&fit=crop',
//           category: 'MOTIVATION',
//           title: 'Creating lasting fitness habits: Psychology-backed strategies that work',
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
//           category: 'REPRODUCTIVE HEALTH',
//           title: 'Understanding your menstrual cycle: What\'s normal and what\'s not',
//           link: '/women-health/menstrual-cycle'
//         },
//         {
//           id: 2,
//           image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
//           category: 'PREGNANCY',
//           title: 'Essential prenatal care: A comprehensive guide for expecting mothers',
//           link: '/women-health/prenatal-care'
//         },
//         {
//           id: 3,
//           image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop',
//           category: 'HORMONES',
//           title: 'Hormonal changes through life: From puberty to menopause',
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







import React from 'react';

// 👉 Config-based data provider
  const GetRelatedArticlesData = (route) => {
  const routeConfigs = {
    '/types/iud': {
      mainTitle: 'Article You Might Like',
      subtitle: '',
      accentColor: '#028388',
      buttonText: 'view all birth control articles',
      buttonLink: '/birth-control/articles',
      articles: [
        {
          id: 1,
          image: '/reproductive-health-supplies-coalition-bymICwLq-E4-unsplash.jpg',
          category: 'Related Articles',
          title: '20 ways over-the-counter pills are changing access and control',
          link: '/birth-control/otc-pills-access'
        },
        {
          id: 2,
          image: '/reproductive-health-supplies-coalition-cHrcHdg2H9E-unsplash (1).jpg',
          category: 'IUD',
          title: 'How public voices are shaping awareness about IUD benefits.',
          link: '/birth-control/iud-awareness'
        },
        {
          id: 3,
          image: '/230912_PTD_CapitolHill-04c.jpg',
          category: 'BIRTH CONTROL',
          title: 'Why this year calls for more gratitude toward birth control options.',
          link: '/birth-control/gratitude-options'
        },
        {
          id: 4,
          image: '/Screenshot 2024-03-04 at 8.04.06 AM (1).png',
          category: 'BIRTH CONTROL PILL',
          title: 'A complete guide to Opill, the latest non-prescription birth control pill available.',
          link: '/birth-control/opill-guide'
        }
      ]
    },
    'types/birth-control-shot': {
      mainTitle: 'Article You Might Like',
      subtitle: '',
      accentColor: '#028388',
      buttonText: 'view all birth control articles',
      buttonLink: '/birth-control/articles',
      articles: [
        {
          id: 1,
          image: '/reproductive-health-supplies-coalition-bymICwLq-E4-unsplash.jpg',
          category: 'Related Articles',
          title: '20 ways over-the-counter pills are changing access and control',
          link: '/birth-control/otc-pills-access'
        },
        {
          id: 2,
          image: '/reproductive-health-supplies-coalition-cHrcHdg2H9E-unsplash (1).jpg',
          category: 'IUD',
          title: 'How public voices are shaping awareness about IUD benefits.',
          link: '/birth-control/iud-awareness'
        },
        {
          id: 3,
          image: '/230912_PTD_CapitolHill-04c.jpg',
          category: 'BIRTH CONTROL',
          title: 'Why this year calls for more gratitude toward birth control options.',
          link: '/birth-control/gratitude-options'
        },
        {
          id: 4,
          image: '/Screenshot 2024-03-04 at 8.04.06 AM (1).png',
          category: 'BIRTH CONTROL PILL',
          title: 'A complete guide to Opill, the latest non-prescription birth control pill available.',
          link: '/birth-control/opill-guide'
        }
      ]
    },
    'types/implant': {
      mainTitle: 'Article You Might Like',
      subtitle: '',
      accentColor: '#028388',
      buttonText: 'view all birth control articles',
      buttonLink: '/birth-control/articles',
      articles: [
        {
          id: 1,
          image: '/reproductive-health-supplies-coalition-bymICwLq-E4-unsplash.jpg',
          category: 'Related Articles',
          title: '20 ways over-the-counter pills are changing access and control',
          link: '/birth-control/otc-pills-access'
        },
        {
          id: 2,
          image: '/reproductive-health-supplies-coalition-cHrcHdg2H9E-unsplash (1).jpg',
          category: 'IUD',
          title: 'How public voices are shaping awareness about IUD benefits.',
          link: '/birth-control/iud-awareness'
        },
        {
          id: 3,
          image: '/230912_PTD_CapitolHill-04c.jpg',
          category: 'BIRTH CONTROL',
          title: 'Why this year calls for more gratitude toward birth control options.',
          link: '/birth-control/gratitude-options'
        },
        {
          id: 4,
          image: '/Screenshot 2024-03-04 at 8.04.06 AM (1).png',
          category: 'BIRTH CONTROL PILL',
          title: 'A complete guide to Opill, the latest non-prescription birth control pill available.',
          link: '/birth-control/opill-guide'
        }
      ]
    },
    'types/patch': {
      mainTitle: 'Article You Might Like',
      subtitle: '',
      accentColor: '#028388',
      buttonText: 'view all birth control articles',
      buttonLink: '/birth-control/articles',
      articles: [
        {
          id: 1,
          image: '/reproductive-health-supplies-coalition-bymICwLq-E4-unsplash.jpg',
          category: 'Related Articles',
          title: '20 ways over-the-counter pills are changing access and control',
          link: '/birth-control/otc-pills-access'
        },
        {
          id: 2,
          image: '/reproductive-health-supplies-coalition-cHrcHdg2H9E-unsplash (1).jpg',
          category: 'IUD',
          title: 'How public voices are shaping awareness about IUD benefits.',
          link: '/birth-control/iud-awareness'
        },
        {
          id: 3,
          image: '/230912_PTD_CapitolHill-04c.jpg',
          category: 'BIRTH CONTROL',
          title: 'Why this year calls for more gratitude toward birth control options.',
          link: '/birth-control/gratitude-options'
        },
        {
          id: 4,
          image: '/Screenshot 2024-03-04 at 8.04.06 AM (1).png',
          category: 'BIRTH CONTROL PILL',
          title: 'A complete guide to Opill, the latest non-prescription birth control pill available.',
          link: '/birth-control/opill-guide'
        }
      ]
    },
    'types/diaphragm': {
      mainTitle: 'Article You Might Like',
      subtitle: '',
      accentColor: '#028388',
      buttonText: 'view all birth control articles',
      buttonLink: '/birth-control/articles',
      articles: [
        {
          id: 1,
          image: '/reproductive-health-supplies-coalition-bymICwLq-E4-unsplash.jpg',
          category: 'Related Articles',
          title: '20 ways over-the-counter pills are changing access and control',
          link: '/birth-control/otc-pills-access'
        },
        {
          id: 2,
          image: '/reproductive-health-supplies-coalition-cHrcHdg2H9E-unsplash (1).jpg',
          category: 'IUD',
          title: 'How public voices are shaping awareness about IUD benefits.',
          link: '/birth-control/iud-awareness'
        },
        {
          id: 3,
          image: '/230912_PTD_CapitolHill-04c.jpg',
          category: 'BIRTH CONTROL',
          title: 'Why this year calls for more gratitude toward birth control options.',
          link: '/birth-control/gratitude-options'
        },
        {
          id: 4,
          image: '/Screenshot 2024-03-04 at 8.04.06 AM (1).png',
          category: 'BIRTH CONTROL PILL',
          title: 'A complete guide to Opill, the latest non-prescription birth control pill available.',
          link: '/birth-control/opill-guide'
        }
      ]
    },
    'types/Internal-condom': {
      mainTitle: 'Article You Might Like',
      subtitle: '',
      accentColor: '#028388',
      buttonText: 'view all birth control articles',
      buttonLink: '/birth-control/articles',
      articles: [
        {
          id: 1,
          image: '/reproductive-health-supplies-coalition-bymICwLq-E4-unsplash.jpg',
          category: 'Related Articles',
          title: '20 ways over-the-counter pills are changing access and control',
          link: '/birth-control/otc-pills-access'
        },
        {
          id: 2,
          image: '/reproductive-health-supplies-coalition-cHrcHdg2H9E-unsplash (1).jpg',
          category: 'IUD',
          title: 'How public voices are shaping awareness about IUD benefits.',
          link: '/birth-control/iud-awareness'
        },
        {
          id: 3,
          image: '/230912_PTD_CapitolHill-04c.jpg',
          category: 'BIRTH CONTROL',
          title: 'Why this year calls for more gratitude toward birth control options.',
          link: '/birth-control/gratitude-options'
        },
        {
          id: 4,
          image: '/Screenshot 2024-03-04 at 8.04.06 AM (1).png',
          category: 'BIRTH CONTROL PILL',
          title: 'A complete guide to Opill, the latest non-prescription birth control pill available.',
          link: '/birth-control/opill-guide'
        }
      ]
    },
    'types/fertility-awareness': {
      mainTitle: 'Article You Might Like',
      subtitle: '',
      accentColor: '#028388',
      buttonText: 'view all birth control articles',
      buttonLink: '/birth-control/articles',
      articles: [
        {
          id: 1,
          image: '/reproductive-health-supplies-coalition-bymICwLq-E4-unsplash.jpg',
          category: 'Related Articles',
          title: '20 ways over-the-counter pills are changing access and control',
          link: '/birth-control/otc-pills-access'
        },
        {
          id: 2,
          image: '/reproductive-health-supplies-coalition-cHrcHdg2H9E-unsplash (1).jpg',
          category: 'IUD',
          title: 'How public voices are shaping awareness about IUD benefits.',
          link: '/birth-control/iud-awareness'
        },
        {
          id: 3,
          image: '/230912_PTD_CapitolHill-04c.jpg',
          category: 'BIRTH CONTROL',
          title: 'Why this year calls for more gratitude toward birth control options.',
          link: '/birth-control/gratitude-options'
        },
        {
          id: 4,
          image: '/Screenshot 2024-03-04 at 8.04.06 AM (1).png',
          category: 'BIRTH CONTROL PILL',
          title: 'A complete guide to Opill, the latest non-prescription birth control pill available.',
          link: '/birth-control/opill-guide'
        }
      ]
    },
    'types/withdrawal': {
      mainTitle: 'Article You Might Like',
      subtitle: '',
      accentColor: '#028388',
      buttonText: 'view all birth control articles',
      buttonLink: '/birth-control/articles',
      articles: [
        {
          id: 1,
          image: '/reproductive-health-supplies-coalition-bymICwLq-E4-unsplash.jpg',
          category: 'Related Articles',
          title: '20 ways over-the-counter pills are changing access and control',
          link: '/birth-control/otc-pills-access'
        },
        {
          id: 2,
          image: '/reproductive-health-supplies-coalition-cHrcHdg2H9E-unsplash (1).jpg',
          category: 'IUD',
          title: 'How public voices are shaping awareness about IUD benefits.',
          link: '/birth-control/iud-awareness'
        },
        {
          id: 3,
          image: '/230912_PTD_CapitolHill-04c.jpg',
          category: 'BIRTH CONTROL',
          title: 'Why this year calls for more gratitude toward birth control options.',
          link: '/birth-control/gratitude-options'
        },
        {
          id: 4,
          image: '/Screenshot 2024-03-04 at 8.04.06 AM (1).png',
          category: 'BIRTH CONTROL PILL',
          title: 'A complete guide to Opill, the latest non-prescription birth control pill available.',
          link: '/birth-control/opill-guide'
        }
      ]
    },
    'types/not-right-now': {
      mainTitle: 'Article You Might Like',
      subtitle: '',
      accentColor: '#028388',
      buttonText: 'view all birth control articles',
      buttonLink: '/birth-control/articles',
      articles: [
        {
          id: 1,
          image: '/reproductive-health-supplies-coalition-bymICwLq-E4-unsplash.jpg',
          category: 'Related Articles',
          title: '20 ways over-the-counter pills are changing access and control',
          link: '/birth-control/otc-pills-access'
        },
        {
          id: 2,
          image: '/reproductive-health-supplies-coalition-cHrcHdg2H9E-unsplash (1).jpg',
          category: 'IUD',
          title: 'How public voices are shaping awareness about IUD benefits.',
          link: '/birth-control/iud-awareness'
        },
        {
          id: 3,
          image: '/230912_PTD_CapitolHill-04c.jpg',
          category: 'BIRTH CONTROL',
          title: 'Why this year calls for more gratitude toward birth control options.',
          link: '/birth-control/gratitude-options'
        },
        {
          id: 4,
          image: '/Screenshot 2024-03-04 at 8.04.06 AM (1).png',
          category: 'BIRTH CONTROL PILL',
          title: 'A complete guide to Opill, the latest non-prescription birth control pill available.',
          link: '/birth-control/opill-guide'
        }
      ]
    },
    'types/birth-control-ring': {
      mainTitle: 'Article You Might Like',
      subtitle: '',
      accentColor: '#028388',
      buttonText: 'view all birth control articles',
      buttonLink: '/birth-control/articles',
      articles: [
        {
          id: 1,
          image: '/reproductive-health-supplies-coalition-bymICwLq-E4-unsplash.jpg',
          category: 'Related Articles',
          title: '20 ways over-the-counter pills are changing access and control',
          link: '/birth-control/otc-pills-access'
        },
        {
          id: 2,
          image: '/reproductive-health-supplies-coalition-cHrcHdg2H9E-unsplash (1).jpg',
          category: 'IUD',
          title: 'How public voices are shaping awareness about IUD benefits.',
          link: '/birth-control/iud-awareness'
        },
        {
          id: 3,
          image: '/230912_PTD_CapitolHill-04c.jpg',
          category: 'BIRTH CONTROL',
          title: 'Why this year calls for more gratitude toward birth control options.',
          link: '/birth-control/gratitude-options'
        },
        {
          id: 4,
          image: '/Screenshot 2024-03-04 at 8.04.06 AM (1).png',
          category: 'BIRTH CONTROL PILL',
          title: 'A complete guide to Opill, the latest non-prescription birth control pill available.',
          link: '/birth-control/opill-guide'
        }
      ]
    },
    'types/birth-control-pill': {
      mainTitle: 'Article You Might Like',
      subtitle: '',
      accentColor: '#028388',
      buttonText: 'view all birth control articles',
      buttonLink: '/birth-control/articles',
      articles: [
        {
          id: 1,
          image: '/reproductive-health-supplies-coalition-bymICwLq-E4-unsplash.jpg',
          category: 'Related Articles',
          title: '20 ways over-the-counter pills are changing access and control',
          link: '/birth-control/otc-pills-access'
        },
        {
          id: 2,
          image: '/reproductive-health-supplies-coalition-cHrcHdg2H9E-unsplash (1).jpg',
          category: 'IUD',
          title: 'How public voices are shaping awareness about IUD benefits.',
          link: '/birth-control/iud-awareness'
        },
        {
          id: 3,
          image: '/230912_PTD_CapitolHill-04c.jpg',
          category: 'BIRTH CONTROL',
          title: 'Why this year calls for more gratitude toward birth control options.',
          link: '/birth-control/gratitude-options'
        },
        {
          id: 4,
          image: '/Screenshot 2024-03-04 at 8.04.06 AM (1).png',
          category: 'BIRTH CONTROL PILL',
          title: 'A complete guide to Opill, the latest non-prescription birth control pill available.',
          link: '/birth-control/opill-guide'
        }
      ]
    },
    'types/condom': {
      mainTitle: 'Article You Might Like',
      subtitle: '',
      accentColor: '#028388',
      buttonText: 'view all birth control articles',
      buttonLink: '/birth-control/articles',
      articles: [
        {
          id: 1,
          image: '/reproductive-health-supplies-coalition-bymICwLq-E4-unsplash.jpg',
          category: 'Related Articles',
          title: '20 ways over-the-counter pills are changing access and control',
          link: '/birth-control/otc-pills-access'
        },
        {
          id: 2,
          image: '/reproductive-health-supplies-coalition-cHrcHdg2H9E-unsplash (1).jpg',
          category: 'IUD',
          title: 'How public voices are shaping awareness about IUD benefits.',
          link: '/birth-control/iud-awareness'
        },
        {
          id: 3,
          image: '/230912_PTD_CapitolHill-04c.jpg',
          category: 'BIRTH CONTROL',
          title: 'Why this year calls for more gratitude toward birth control options.',
          link: '/birth-control/gratitude-options'
        },
        {
          id: 4,
          image: '/Screenshot 2024-03-04 at 8.04.06 AM (1).png',
          category: 'BIRTH CONTROL PILL',
          title: 'A complete guide to Opill, the latest non-prescription birth control pill available.',
          link: '/birth-control/opill-guide'
        }
      ]
    },
    'types/cervical-cap': {
      mainTitle: 'Article You Might Like',
      subtitle: '',
      accentColor: '#028388',
      buttonText: 'view all birth control articles',
      buttonLink: '/birth-control/articles',
      articles: [
        {
          id: 1,
          image: '/reproductive-health-supplies-coalition-bymICwLq-E4-unsplash.jpg',
          category: 'Related Articles',
          title: '20 ways over-the-counter pills are changing access and control',
          link: '/birth-control/otc-pills-access'
        },
        {
          id: 2,
          image: '/reproductive-health-supplies-coalition-cHrcHdg2H9E-unsplash (1).jpg',
          category: 'IUD',
          title: 'How public voices are shaping awareness about IUD benefits.',
          link: '/birth-control/iud-awareness'
        },
        {
          id: 3,
          image: '/230912_PTD_CapitolHill-04c.jpg',
          category: 'BIRTH CONTROL',
          title: 'Why this year calls for more gratitude toward birth control options.',
          link: '/birth-control/gratitude-options'
        },
        {
          id: 4,
          image: '/Screenshot 2024-03-04 at 8.04.06 AM (1).png',
          category: 'BIRTH CONTROL PILL',
          title: 'A complete guide to Opill, the latest non-prescription birth control pill available.',
          link: '/birth-control/opill-guide'
        }
      ]
    },
    'types/spermicide-gell': {
      mainTitle: 'Article You Might Like',
      subtitle: '',
      accentColor: '#028388',
      buttonText: 'view all birth control articles',
      buttonLink: '/birth-control/articles',
      articles: [
        {
          id: 1,
          image: '/reproductive-health-supplies-coalition-bymICwLq-E4-unsplash.jpg',
          category: 'Related Articles',
          title: '20 ways over-the-counter pills are changing access and control',
          link: '/birth-control/otc-pills-access'
        },
        {
          id: 2,
          image: '/reproductive-health-supplies-coalition-cHrcHdg2H9E-unsplash (1).jpg',
          category: 'IUD',
          title: 'How public voices are shaping awareness about IUD benefits.',
          link: '/birth-control/iud-awareness'
        },
        {
          id: 3,
          image: '/230912_PTD_CapitolHill-04c.jpg',
          category: 'BIRTH CONTROL',
          title: 'Why this year calls for more gratitude toward birth control options.',
          link: '/birth-control/gratitude-options'
        },
        {
          id: 4,
          image: '/Screenshot 2024-03-04 at 8.04.06 AM (1).png',
          category: 'BIRTH CONTROL PILL',
          title: 'A complete guide to Opill, the latest non-prescription birth control pill available.',
          link: '/birth-control/opill-guide'
        }
      ]
    },
    'types/sterilization': {
      mainTitle: 'Article You Might Like',
      subtitle: '',
      accentColor: '#028388',
      buttonText: 'view all birth control articles',
      buttonLink: '/birth-control/articles',
      articles: [
        {
          id: 1,
          image: '/reproductive-health-supplies-coalition-bymICwLq-E4-unsplash.jpg',
          category: 'Related Articles',
          title: '20 ways over-the-counter pills are changing access and control',
          link: '/birth-control/otc-pills-access'
        },
        {
          id: 2,
          image: '/reproductive-health-supplies-coalition-cHrcHdg2H9E-unsplash (1).jpg',
          category: 'IUD',
          title: 'How public voices are shaping awareness about IUD benefits.',
          link: '/birth-control/iud-awareness'
        },
        {
          id: 3,
          image: '/230912_PTD_CapitolHill-04c.jpg',
          category: 'BIRTH CONTROL',
          title: 'Why this year calls for more gratitude toward birth control options.',
          link: '/birth-control/gratitude-options'
        },
        {
          id: 4,
          image: '/Screenshot 2024-03-04 at 8.04.06 AM (1).png',
          category: 'BIRTH CONTROL PILL',
          title: 'A complete guide to Opill, the latest non-prescription birth control pill available.',
          link: '/birth-control/opill-guide'
        }
      ]
    },
    'types/emergency-contraception': {
      mainTitle: 'Article You Might Like',
      subtitle: '',
      accentColor: '#028388',
      buttonText: 'view all birth control articles',
      buttonLink: '/birth-control/articles',
      articles: [
        {
          id: 1,
          image: '/reproductive-health-supplies-coalition-bymICwLq-E4-unsplash.jpg',
          category: 'Related Articles',
          title: '20 ways over-the-counter pills are changing access and control',
          link: '/birth-control/otc-pills-access'
        },
        {
          id: 2,
          image: '/reproductive-health-supplies-coalition-cHrcHdg2H9E-unsplash (1).jpg',
          category: 'IUD',
          title: 'How public voices are shaping awareness about IUD benefits.',
          link: '/birth-control/iud-awareness'
        },
        {
          id: 3,
          image: '/230912_PTD_CapitolHill-04c.jpg',
          category: 'BIRTH CONTROL',
          title: 'Why this year calls for more gratitude toward birth control options.',
          link: '/birth-control/gratitude-options'
        },
        {
          id: 4,
          image: '/Screenshot 2024-03-04 at 8.04.06 AM (1).png',
          category: 'BIRTH CONTROL PILL',
          title: 'A complete guide to Opill, the latest non-prescription birth control pill available.',
          link: '/birth-control/opill-guide'
        }
      ]
    },
   
  };

  const defaultConfig = {
    mainTitle: 'Health & Wellness',
    subtitle: 'Expert health information and wellness resources for better living',
    accentColor: '#028388',
    buttonText: 'view all articles',
    buttonLink: '/articles',
    articles: [ /* ...default articles... */ ]
  };

  const cleanedRoute = route.startsWith('/') ? route : `/${route}`;
  const matchedRoute = Object.keys(routeConfigs).find(routeKey =>
    cleanedRoute.startsWith(routeKey)
  );

  return matchedRoute ? routeConfigs[matchedRoute] : defaultConfig;
};
export default GetRelatedArticlesData ;