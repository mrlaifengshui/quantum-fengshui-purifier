export interface Brand {
  id: string;
  name: string;
  nameEn: string;
  category: string;
  categoryEn: string;
  priceRange: string;
  rating: number;
  description: string;
  descriptionEn: string;
  features: string[];
  featuresEn: string[];
  specs: {
    hepaLevel: string;
    formaldehydeRemoval: string;
    negativeIons: string;
    noiseLevel: string;
    energyEfficiency: number;
  };
  targetCustomers: string[];
  targetCustomersEn: string[];
  brandColor: {
    primary: string;
    secondary: string;
  };
  logo?: string;
}

export const brands: Brand[] = [
  {
    id: 'dyson',
    name: 'Dyson',
    nameEn: 'Dyson',
    category: '高端市場領導者',
    categoryEn: 'Premium Market Leader',
    priceRange: 'HK$3,000-5,000',
    rating: 5,
    description: '創新設計與先進技術的代表，提供強大的空氣淨化能力。',
    descriptionEn: 'Innovative design with advanced technology, offering powerful air purification.',
    features: [
      '創新設計',
      '先進技術',
      '強大淨化',
      '智能控制',
      '品牌保證'
    ],
    featuresEn: [
      'Innovative Design',
      'Advanced Technology',
      'Powerful Purification',
      'Smart Control',
      'Brand Guarantee'
    ],
    specs: {
      hepaLevel: 'H13',
      formaldehydeRemoval: '99.95%',
      negativeIons: '高 (5000萬/cm³)',
      noiseLevel: '62dB',
      energyEfficiency: 4
    },
    targetCustomers: [
      '高端消費者',
      '企業辦公室',
      '追求品質的家庭',
      '科技愛好者'
    ],
    targetCustomersEn: [
      'Premium Consumers',
      'Corporate Offices',
      'Quality-Focused Families',
      'Tech Enthusiasts'
    ],
    brandColor: {
      primary: '#1F2937',
      secondary: '#3B82F6'
    },
    logo: '/images/brands/dyson-logo.svg'
  },
  {
    id: 'philips',
    name: 'Philips',
    nameEn: 'Philips',
    category: '中端市場',
    categoryEn: 'Mid-Range Market',
    priceRange: 'HK$1,500-3,000',
    rating: 4,
    description: '可靠的品牌，提供高性價比的空氣淨化解決方案。',
    descriptionEn: 'Reliable brand offering cost-effective air purification solutions.',
    features: [
      '可靠性能',
      '合理價格',
      '廣泛認可',
      '易於使用',
      '良好服務'
    ],
    featuresEn: [
      'Reliable Performance',
      'Reasonable Price',
      'Wide Recognition',
      'Easy to Use',
      'Good Service'
    ],
    specs: {
      hepaLevel: 'H13',
      formaldehydeRemoval: '95%',
      negativeIons: '中 (3000萬/cm³)',
      noiseLevel: '65dB',
      energyEfficiency: 4
    },
    targetCustomers: [
      '中產家庭',
      '小型企業',
      '注重實用性的客戶',
      '預算有限的客戶'
    ],
    targetCustomersEn: [
      'Middle-Class Families',
      'Small Businesses',
      'Practical Customers',
      'Budget-Conscious Customers'
    ],
    brandColor: {
      primary: '#FF0000',
      secondary: '#FFFFFF'
    },
    logo: '/images/brands/philips-logo.svg'
  },
  {
    id: 'sharp',
    name: 'Sharp',
    nameEn: 'Sharp',
    category: '大眾市場',
    categoryEn: 'Mass Market',
    priceRange: 'HK$800-2,000',
    rating: 3,
    description: '日本品牌，以Plasmacluster技術聞名，價格親民。',
    descriptionEn: 'Japanese brand known for Plasmacluster technology, affordable pricing.',
    features: [
      'Plasmacluster技術',
      '親民價格',
      '日本品質',
      '操作簡單',
      '維護方便'
    ],
    featuresEn: [
      'Plasmacluster Technology',
      'Affordable Price',
      'Japanese Quality',
      'Simple Operation',
      'Easy Maintenance'
    ],
    specs: {
      hepaLevel: 'H12',
      formaldehydeRemoval: '90%',
      negativeIons: '中 (2000萬/cm³)',
      noiseLevel: '68dB',
      energyEfficiency: 3
    },
    targetCustomers: [
      '一般家庭',
      '租房族',
      '首次購買者',
      '預算緊張的客戶'
    ],
    targetCustomersEn: [
      'General Families',
      'Renters',
      'First-Time Buyers',
      'Budget-Limited Customers'
    ],
    brandColor: {
      primary: '#FFFFFF',
      secondary: '#000000'
    },
    logo: '/images/brands/sharp-logo.svg'
  },
  {
    id: 'lg',
    name: 'LG',
    nameEn: 'LG',
    category: '大眾市場',
    categoryEn: 'Mass Market',
    priceRange: 'HK$1,000-2,500',
    rating: 3,
    description: '韓國品牌，提供多樣化的產品選擇和良好的售後服務。',
    descriptionEn: 'Korean brand offering diverse product choices and good after-sales service.',
    features: [
      '多樣選擇',
      '良好服務',
      '可靠品質',
      '現代設計',
      '智能功能'
    ],
    featuresEn: [
      'Diverse Options',
      'Good Service',
      'Reliable Quality',
      'Modern Design',
      'Smart Features'
    ],
    specs: {
      hepaLevel: 'H12',
      formaldehydeRemoval: '90%',
      negativeIons: '中 (2500萬/cm³)',
      noiseLevel: '66dB',
      energyEfficiency: 3
    },
    targetCustomers: [
      '一般家庭',
      '小型辦公室',
      '追求多功能的客戶',
      '中等預算客戶'
    ],
    targetCustomersEn: [
      'General Families',
      'Small Offices',
      'Multi-Function Seekers',
      'Mid-Budget Customers'
    ],
    brandColor: {
      primary: '#CC0000',
      secondary: '#FFFFFF'
    },
    logo: '/images/brands/lg-logo.svg'
  },
  {
    id: 'xiaomi',
    name: '小米',
    nameEn: 'Xiaomi',
    category: '大眾市場',
    categoryEn: 'Mass Market',
    priceRange: 'HK$500-1,500',
    rating: 2,
    description: '性價比之王，適合預算有限但追求智能化的消費者。',
    descriptionEn: 'Best value for money, suitable for budget-conscious smart consumers.',
    features: [
      '超高性價比',
      '智能控制',
      '簡約設計',
      'App控制',
      '易於安裝'
    ],
    featuresEn: [
      'Best Value',
      'Smart Control',
      'Minimalist Design',
      'App Control',
      'Easy Installation'
    ],
    specs: {
      hepaLevel: 'H11',
      formaldehydeRemoval: '80%',
      negativeIons: '低 (1000萬/cm³)',
      noiseLevel: '70dB',
      energyEfficiency: 5
    },
    targetCustomers: [
      '年輕消費者',
      '學生',
      '租房族',
      '追求性價比的客戶'
    ],
    targetCustomersEn: [
      'Young Consumers',
      'Students',
      'Renters',
      'Value Seekers'
    ],
    brandColor: {
      primary: '#FF6900',
      secondary: '#FFFFFF'
    },
    logo: '/images/brands/xiaomi-logo.svg'
  },
  {
    id: 'amway',
    name: 'Amway Sky',
    nameEn: 'Amway Sky',
    category: '直銷渠道',
    categoryEn: 'Direct Sales',
    priceRange: 'HK$2,000-3,500',
    rating: 4,
    description: '頂級淨化能力，通過多項國際認證，適合追求極致健康的家庭。',
    descriptionEn: 'Premium purification with international certifications, for health-focused families.',
    features: [
      '極致過濾 (0.0024微米)',
      '四大國際認證',
      '高濃度負離子',
      '德國渦輪馬達',
      '專業服務'
    ],
    featuresEn: [
      'Ultra Filtration (0.0024µm)',
      '4 International Certifications',
      'High-Concentration Negative Ions',
      'German Turbo Motor',
      'Professional Service'
    ],
    specs: {
      hepaLevel: 'H13',
      formaldehydeRemoval: '99.95%',
      negativeIons: '高 (5000萬/cm³)',
      noiseLevel: '64dB',
      energyEfficiency: 4
    },
    targetCustomers: [
      'Amway直銷商',
      '追求極致健康的家庭',
      '高端消費者',
      '注重品質的客戶'
    ],
    targetCustomersEn: [
      'Amway Distributors',
      'Health-Focused Families',
      'Premium Consumers',
      'Quality-Oriented Customers'
    ],
    brandColor: {
      primary: '#003DA5',
      secondary: '#FFB81C'
    },
    logo: '/images/brands/amway-logo.svg'
  }
];

export function getBrandById(id: string): Brand | undefined {
  return brands.find(brand => brand.id === id);
}

export function getBrandsByCategory(category: string): Brand[] {
  return brands.filter(brand => brand.category === category);
}
