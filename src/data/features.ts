import type { Feature } from '../types';

export const features: Feature[] = [
  {
    id: 'encryption',
    icon: 'Lock',
    title: { fa: 'رمزنگاری نظامی AES-256', en: 'Military-Grade AES-256 Encryption' },
    description: {
      fa: 'امنیت حرفه‌ای با رمزنگاری استاندارد نظامی برای حفاظت کامل داده‌ها',
      en: 'Professional security with military-standard encryption for complete data protection',
    },
  },
  {
    id: 'speed',
    icon: 'Zap',
    title: { fa: 'سرعت نامحدود', en: 'Unlimited Speed' },
    description: {
      fa: 'بدون محدودیت پهنای باند، دانلود و آپلود با حداکثر سرعت',
      en: 'No bandwidth throttling, download and upload at maximum speed',
    },
  },
  {
    id: 'servers',
    icon: 'Globe',
    title: { fa: '+۱۰۰ سرور در ۵۰ کشور', en: '+100 Servers in 50 Countries' },
    description: {
      fa: 'دسترسی به سرورهای پرسرعت در سراسر جهان با پایداری بالا',
      en: 'Access to high-speed servers worldwide with high reliability',
    },
  },
  {
    id: 'devices',
    icon: 'Smartphone',
    title: { fa: 'یک اکانت، همه دستگاه‌ها', en: 'One Account, All Devices' },
    description: {
      fa: 'استفاده همزمان در موبایل، تبلت، لپتاپ و دسکتاپ',
      en: 'Simultaneous use on mobile, tablet, laptop and desktop',
    },
  },
  {
    id: 'nolog',
    icon: 'EyeOff',
    title: { fa: 'بدون لاگ، بدون ردیابی', en: 'No Logs, No Tracking' },
    description: {
      fa: 'سیاست عدم ذخیره‌سازی لاگ - حریم خصوصی شما محفوظ است',
      en: 'Zero-log policy - your privacy is protected',
    },
  },
  {
    id: 'killswitch',
    icon: 'ShieldAlert',
    title: { fa: 'Kill Switch خودکار', en: 'Automatic Kill Switch' },
    description: {
      fa: 'قطع خودکار اینترنت در صورت افت اتصال VPN',
      en: 'Automatic internet disconnect if VPN connection drops',
    },
  },
  {
    id: 'update',
    icon: 'RefreshCw',
    title: { fa: 'آپدیت خودکار سرورها', en: 'Auto Server Updates' },
    description: {
      fa: 'به‌روزرسانی خودکار و هوشمند سرورها بدون نیاز به دخالت شما',
      en: 'Automatic and smart server updates without your intervention',
    },
  },
  {
    id: 'support',
    icon: 'Headphones',
    title: { fa: 'پشتیبانی ۲۴/۷', en: '24/7 Support' },
    description: {
      fa: 'تیم پشتیبانی حرفه‌ای آماده پاسخگویی در هر لحظه',
      en: 'Professional support team ready to respond at any moment',
    },
  },
];
