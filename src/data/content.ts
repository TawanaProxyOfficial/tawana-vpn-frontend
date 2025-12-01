import type { BlogPost, TeamMember, SocialLink } from '../types';

export const blogPosts: BlogPost[] = [
  {
    id: 'bypass-filtering',
    title: {
      fa: 'عبور از فیلترینگ هوشمند در سال ۲۰۲۵',
      en: 'Bypassing Smart Filtering in 2025',
    },
    excerpt: {
      fa: 'آموزش جامع استفاده از تکنولوژی‌های جدید برای عبور از محدودیت‌های اینترنتی...',
      en: 'Comprehensive guide on using new technologies to bypass internet restrictions...',
    },
    category: 'tutorial',
    date: '2025-01-15',
    readTime: 8,
    featured: true,
  },
  {
    id: 'v2ray-security',
    title: {
      fa: 'چرا V2Ray امن‌ترین پروتکل است؟',
      en: 'Why V2Ray is the Most Secure Protocol?',
    },
    excerpt: {
      fa: 'بررسی فنی پروتکل V2Ray و مقایسه آن با سایر پروتکل‌های VPN...',
      en: 'Technical analysis of V2Ray protocol and comparison with other VPN protocols...',
    },
    category: 'security',
    date: '2025-01-10',
    readTime: 6,
  },
  {
    id: 'static-vs-dedicated',
    title: {
      fa: 'تفاوت IP ثابت و اختصاصی',
      en: 'Difference Between Static and Dedicated IP',
    },
    excerpt: {
      fa: 'آیا می‌دانید تفاوت IP ثابت با IP اختصاصی چیست و کدام برای شما مناسب‌تر است؟',
      en: 'Do you know the difference between static and dedicated IP? Which one is better for you?',
    },
    category: 'tutorial',
    date: '2025-01-05',
    readTime: 5,
  },
  {
    id: 'mobile-setup',
    title: {
      fa: 'آموزش اتصال در آیفون و اندروید',
      en: 'Connection Guide for iPhone and Android',
    },
    excerpt: {
      fa: 'راهنمای گام به گام نصب و راه‌اندازی V2Ray روی گوشی‌های موبایل...',
      en: 'Step-by-step guide to install and setup V2Ray on mobile phones...',
    },
    category: 'tutorial',
    date: '2025-01-01',
    readTime: 4,
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: 'member-1',
    name: { fa: 'توانا محمدی', en: 'Tawana Mohammadi' },
    role: { fa: 'مدیرعامل و بنیان‌گذار', en: 'CEO & Founder' },
  },
  {
    id: 'member-2',
    name: { fa: 'علی رضایی', en: 'Ali Rezaei' },
    role: { fa: 'مدیر فنی', en: 'CTO' },
  },
  {
    id: 'member-3',
    name: { fa: 'سارا احمدی', en: 'Sara Ahmadi' },
    role: { fa: 'مدیر پشتیبانی', en: 'Support Manager' },
  },
];

export const socialLinks: SocialLink[] = [
  {
    id: 'telegram',
    name: 'Telegram',
    url: 'https://t.me/TawanaProxy',
    icon: 'MessageCircle',
  },
  {
    id: 'instagram',
    name: 'Instagram',
    url: 'https://instagram.com/TawanaProxy',
    icon: 'Instagram',
  },
  {
    id: 'twitter',
    name: 'Twitter',
    url: 'https://twitter.com/TawanaProxy',
    icon: 'Twitter',
  },
];
