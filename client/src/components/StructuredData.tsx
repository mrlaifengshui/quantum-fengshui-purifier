import { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function StructuredData() {
  const { language } = useLanguage();

  useEffect(() => {
    // Remove existing structured data scripts
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
    existingScripts.forEach(script => script.remove());

    // Organization Schema
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": language === 'zh' ? "量子風水空氣淨化方案" : "Quantum Feng Shui Air Purification",
      "alternateName": "Master Lai Feng Shui Design",
      "url": "https://fengshuipurifier.com",
      "logo": "https://fengshuipurifier.com/images/logo.png",
      "description": language === 'zh' 
        ? "結合頂級空氣淨化科技與量子調頻技術，精準擺設風水吉位" 
        : "Combining premium air purification technology with quantum frequency tuning and feng shui",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Tsim Sha Tsui",
        "addressLocality": "Kowloon",
        "addressRegion": "Hong Kong",
        "addressCountry": "HK"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+852-9882-1298",
        "contactType": "Customer Service",
        "areaServed": "HK",
        "availableLanguage": ["zh-HK", "en"]
      },
      "sameAs": [
        "https://www.facebook.com/黎Sir風水設計-Master-Lai-Fengshui-Design-111477021229102",
        "https://wa.me/85298821298"
      ]
    };

    // Local Business Schema
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": language === 'zh' ? "黎Sir風水設計" : "Master Lai Feng Shui Design",
      "image": "https://fengshuipurifier.com/images/logo.png",
      "url": "https://fengshuipurifier.com",
      "telephone": "+852-9882-1298",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Tsim Sha Tsui",
        "addressLocality": "Kowloon",
        "addressRegion": "Hong Kong",
        "addressCountry": "HK"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 22.3193,
        "longitude": 114.1694
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          "opens": "09:00",
          "closes": "18:00"
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "128"
      }
    };

    // Service Schema
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": language === 'zh' ? "量子風水空氣淨化服務" : "Quantum Feng Shui Air Purification Service",
      "provider": {
        "@type": "Organization",
        "name": language === 'zh' ? "量子風水空氣淨化方案" : "Quantum Feng Shui Air Purification"
      },
      "areaServed": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": 22.3193,
          "longitude": 114.1694
        },
        "geoRadius": "50000"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": language === 'zh' ? "服務項目" : "Service Catalog",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": language === 'zh' ? "家居風水與空氣淨化" : "Home Feng Shui & Air Purification"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": language === 'zh' ? "辦公室風水佈局" : "Office Feng Shui Layout"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": language === 'zh' ? "量子調頻能量優化" : "Quantum Frequency Energy Optimization"
            }
          }
        ]
      }
    };

    // Product Schema for Air Purifiers
    const productSchema = {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": language === 'zh' ? "量子風水空氣淨化器" : "Quantum Feng Shui Air Purifier",
      "description": language === 'zh' 
        ? "結合風水學與量子物理學的創新空氣淨化方案" 
        : "Innovative air purification solution combining Feng Shui and quantum physics",
      "brand": {
        "@type": "Brand",
        "name": "Quantum Feng Shui"
      },
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "HKD",
        "lowPrice": "5000",
        "highPrice": "50000",
        "offerCount": "6"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "95"
      }
    };

    // FAQ Schema
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": language === 'zh' ? [
        {
          "@type": "Question",
          "name": "量子風水空氣淨化方案是什麼?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "量子風水空氣淨化方案結合頂級空氣淨化科技、量子調頻技術和傳統風水智慧，從物質、能量、風水三個層面全方位提升生活品質。"
          }
        },
        {
          "@type": "Question",
          "name": "服務收費如何?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "我們提供不同級別的服務方案，價格從HKD 5,000起。具體收費根據服務範圍、空間大小和設備選擇而定。歡迎WhatsApp查詢詳情。"
          }
        },
        {
          "@type": "Question",
          "name": "哪些品牌的空氣淨化器可以選擇?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "我們提供Dyson、Philips、Sharp、LG、小米、Amway Sky等多個國際頂級品牌的空氣淨化器，並根據您的需求和預算推薦最適合的方案。"
          }
        }
      ] : [
        {
          "@type": "Question",
          "name": "What is Quantum Feng Shui Air Purification?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Quantum Feng Shui Air Purification combines premium air purification technology, quantum frequency tuning, and traditional feng shui wisdom to enhance quality of life from physical, energetic, and feng shui perspectives."
          }
        },
        {
          "@type": "Question",
          "name": "How much does the service cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer various service packages starting from HKD 5,000. Specific pricing depends on service scope, space size, and equipment selection. Please WhatsApp us for details."
          }
        },
        {
          "@type": "Question",
          "name": "Which air purifier brands are available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer premium international brands including Dyson, Philips, Sharp, LG, Xiaomi, and Amway Sky. We recommend the most suitable solution based on your needs and budget."
          }
        }
      ]
    };

    // Breadcrumb Schema
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": language === 'zh' ? "首頁" : "Home",
          "item": "https://fengshuipurifier.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": language === 'zh' ? "服務項目" : "Services",
          "item": "https://fengshuipurifier.com/services"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": language === 'zh' ? "品牌選擇" : "Brands",
          "item": "https://fengshuipurifier.com/brands"
        }
      ]
    };

    // Insert all schemas
    const schemas = [
      organizationSchema,
      localBusinessSchema,
      serviceSchema,
      productSchema,
      faqSchema,
      breadcrumbSchema
    ];

    schemas.forEach(schema => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    });

  }, [language]);

  return null;
}
