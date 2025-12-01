import { motion } from 'framer-motion';
import { Icon } from '../atoms';
import { socialLinks } from '../../data/content';
import { SITE_CONFIG } from '../../constants';
import type { Language } from '../../types';
import { cn } from '../../utils/helpers';

interface FooterProps {
  language: Language;
  t: (key: string) => string;
}

export function Footer({ t }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { label: t('footer.product.pricing'), href: '#pricing' },
      { label: t('footer.product.speedTest'), href: '#' },
      { label: t('footer.product.app'), href: '#' },
    ],
    support: [
      { label: t('footer.support.guide'), href: '#' },
      { label: t('footer.support.faq'), href: '#faq' },
      { label: t('footer.support.contact'), href: 'https://t.me/TawanaProxy' },
    ],
    legal: [
      { label: t('footer.legal.privacy'), href: '#' },
      { label: t('footer.legal.terms'), href: '#' },
    ],
  };

  return (
    <footer className={cn(
      'py-16 border-t',
      'dark:bg-black/50 dark:border-white/10',
      'light:bg-gray-50 light:border-gray-200'
    )}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-2">
            <motion.a
              href="#"
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-2 mb-4"
            >
              <motion.div 
                animate={{ 
                  boxShadow: [
                    '0 0 20px rgba(0, 212, 170, 0.3)',
                    '0 0 30px rgba(0, 212, 170, 0.5)',
                    '0 0 20px rgba(0, 212, 170, 0.3)',
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00D4AA] to-[#6366F1] flex items-center justify-center"
              >
                <Icon name="Zap" size={24} className="text-white" />
              </motion.div>
              <span className="text-2xl font-bold gradient-text">
                {SITE_CONFIG.name}
              </span>
            </motion.a>
            <p className="dark:text-gray-400 light:text-gray-600 mb-6 max-w-sm leading-relaxed">
              {t('footer.description')}
            </p>

            {/* Newsletter Form */}
            <div className="mb-6">
              <h4 className="font-semibold dark:text-white light:text-gray-900 mb-3">
                {t('footer.newsletter.title') || 'خبرنامه'}
              </h4>
              <p className="text-sm dark:text-gray-400 light:text-gray-600 mb-3">
                {t('footer.newsletter.description') || 'از آخرین اخبار و تخفیف‌ها با خبر شوید'}
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder={t('footer.newsletter.placeholder') || 'ایمیل شما'}
                  className="input flex-1 text-sm"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#00D4AA] to-[#6366F1] text-white font-medium text-sm"
                >
                  {t('footer.newsletter.button') || 'عضویت'}
                </motion.button>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className={cn(
                    'w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300',
                    'dark:bg-white/5 dark:hover:bg-[#00D4AA]/20 dark:text-gray-400 dark:hover:text-[#00D4AA]',
                    'light:bg-gray-100 light:hover:bg-[#00D4AA]/20 light:text-gray-500 light:hover:text-[#00D4AA]'
                  )}
                >
                  <Icon name={link.icon} size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold dark:text-white light:text-gray-900 mb-4">
              {t('footer.product.title')}
            </h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="dark:text-gray-400 dark:hover:text-white light:text-gray-600 light:hover:text-gray-900 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold dark:text-white light:text-gray-900 mb-4">
              {t('footer.support.title')}
            </h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="dark:text-gray-400 dark:hover:text-white light:text-gray-600 light:hover:text-gray-900 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold dark:text-white light:text-gray-900 mb-4">
              {t('footer.legal.title')}
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="dark:text-gray-400 dark:hover:text-white light:text-gray-600 light:hover:text-gray-900 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright & Trust Badges */}
        <div className={cn(
          'pt-8 border-t',
          'dark:border-white/10',
          'light:border-gray-200'
        )}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="dark:text-gray-500 light:text-gray-500 text-sm">
              © {currentYear} {SITE_CONFIG.name}. {t('footer.copyright')}
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg glass">
                <Icon name="Lock" size={14} className="text-[#00D4AA]" />
                <span className="text-xs dark:text-gray-400 light:text-gray-600">SSL Secure</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg glass">
                <Icon name="ShieldCheck" size={14} className="text-[#00D4AA]" />
                <span className="text-xs dark:text-gray-400 light:text-gray-600">No-Log Policy</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg glass">
                <Icon name="Activity" size={14} className="text-[#00D4AA]" />
                <span className="text-xs dark:text-gray-400 light:text-gray-600">99.9% Uptime</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
