import type { Server } from '../types';

export const servers: Server[] = [
  {
    id: 'de-hetzner',
    country: { fa: 'آلمان', en: 'Germany' },
    city: { fa: 'فرانکفورت', en: 'Frankfurt' },
    provider: 'Hetzner',
    ping: 35,
    flag: '🇩🇪',
  },
  {
    id: 'us-aws',
    country: { fa: 'آمریکا', en: 'USA' },
    city: { fa: 'واشنگتن', en: 'Washington' },
    provider: 'AWS',
    ping: 110,
    flag: '🇺🇸',
  },
  {
    id: 'nl-do',
    country: { fa: 'هلند', en: 'Netherlands' },
    city: { fa: 'آمستردام', en: 'Amsterdam' },
    provider: 'DigitalOcean',
    ping: 42,
    flag: '🇳🇱',
  },
  {
    id: 'tr-cf',
    country: { fa: 'ترکیه', en: 'Turkey' },
    city: { fa: 'استانبول', en: 'Istanbul' },
    provider: 'Cloudflare',
    ping: 20,
    flag: '🇹🇷',
  },
  {
    id: 'fr-ovh',
    country: { fa: 'فرانسه', en: 'France' },
    city: { fa: 'پاریس', en: 'Paris' },
    provider: 'OVH',
    ping: 45,
    flag: '🇫🇷',
  },
  {
    id: 'fi-oracle',
    country: { fa: 'فنلاند', en: 'Finland' },
    city: { fa: 'هلسینکی', en: 'Helsinki' },
    provider: 'Oracle',
    ping: 55,
    flag: '🇫🇮',
  },
];

export const stats = {
  locations: 22,
  speed: '10 GBPS',
  uptime: '99.9%',
  protocol: 'V2RAY REALITY',
};
