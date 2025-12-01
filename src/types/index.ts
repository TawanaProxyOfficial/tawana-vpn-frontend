export type Language = 'fa' | 'en';
export type Theme = 'dark' | 'light';

export interface Plan {
  id: string;
  name: { fa: string; en: string };
  traffic: string;
  users: number;
  price: number;
  priceDisplay: { fa: string; en: string };
  features: { fa: string[]; en: string[] };
  badge?: { fa: string; en: string };
  badgeColor?: string;
  category: PlanCategory[];
  popular?: boolean;
  icon: string;
}

export type PlanCategory = 'all' | 'gaming' | 'family' | 'national' | 'iran-access';

export interface Feature {
  id: string;
  icon: string;
  title: { fa: string; en: string };
  description: { fa: string; en: string };
}

export interface Server {
  id: string;
  country: { fa: string; en: string };
  city?: { fa: string; en: string };
  provider: string;
  ping: number;
  flag: string;
}

export interface FAQ {
  id: string;
  question: { fa: string; en: string };
  answer: { fa: string; en: string };
}

export interface BlogPost {
  id: string;
  title: { fa: string; en: string };
  excerpt: { fa: string; en: string };
  category: BlogCategory;
  date: string;
  readTime: number;
  featured?: boolean;
  image?: string;
}

export type BlogCategory = 'all' | 'security' | 'tutorial' | 'news';

export interface TeamMember {
  id: string;
  name: { fa: string; en: string };
  role: { fa: string; en: string };
  avatar?: string;
}

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: string;
}

export interface Translation {
  [key: string]: string | Translation;
}

export interface AdminSettings {
  primaryColor: string;
  accentColor: string;
  logoText: string;
  telegramLink: string;
  paymentLink: string;
}
