import type { Feature } from '../types';

export const features: Feature[] = [
  {
    id: 'speed',
    icon: 'Rocket',
    title: { fa: 'سرعت مافوق صوت', en: 'Supersonic Speed' },
    description: {
      fa: 'سرورهای NVMe با پورت ۱۰Gbps برای تجربه‌ای بی‌وقفه',
      en: 'NVMe servers with 10Gbps ports for seamless experience',
    },
  },
  {
    id: 'security',
    icon: 'Shield',
    title: { fa: 'نامرئی و امن', en: 'Invisible & Secure' },
    description: {
      fa: 'تکنولوژی Reality + TLS 1.3 برای امنیت نظامی',
      en: 'Reality + TLS 1.3 technology for military-grade security',
    },
  },
  {
    id: 'access',
    icon: 'Globe',
    title: { fa: 'دسترسی جهانی', en: 'Global Access' },
    description: {
      fa: 'Netflix, Spotify, YouTube و تمام سرویس‌های جهانی',
      en: 'Netflix, Spotify, YouTube and all global services',
    },
  },
  {
    id: 'uptime',
    icon: 'Zap',
    title: { fa: 'پایداری ۹۹.۹٪', en: '99.9% Uptime' },
    description: {
      fa: 'زیرساخت توزیع‌شده برای اتصال همیشگی',
      en: 'Distributed infrastructure for always-on connection',
    },
  },
];
