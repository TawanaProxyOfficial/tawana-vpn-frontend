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
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.a
              href="#"
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-2 mb-4"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-cyan-500 flex items-center justify-center">
                <Icon name="Shield" size={24} className="text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">
                {SITE_CONFIG.name}
              </span>
            </motion.a>
            <p className="dark:text-gray-400 light:text-gray-600 mb-6 max-w-sm">
              {t('footer.description')}
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={cn(
                    'w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300',
                    'dark:bg-white/5 dark:hover:bg-white/10 dark:text-gray-400 dark:hover:text-white',
                    'light:bg-gray-100 light:hover:bg-gray-200 light:text-gray-500 light:hover:text-gray-900'
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

        {/* Copyright */}
        <div className={cn(
          'pt-8 border-t text-center',
          'dark:border-white/10',
          'light:border-gray-200'
        )}>
          <p className="dark:text-gray-500 light:text-gray-500 text-sm">
            © {currentYear} {SITE_CONFIG.name}. {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}
