import { motion } from 'framer-motion';
import { Icon } from '../atoms';
import { SITE_CONFIG } from '../../constants';
import type { Language } from '../../types';
import { cn } from '../../utils/helpers';

interface FloatingElementsProps {
  language?: Language; // Not currently used but kept for future language-specific features
  t: (key: string) => string;
}

export function FloatingElements({ t }: FloatingElementsProps) {
  return (
    <>
      {/* Order/CTA Button - Bottom Right - دکمه خرید شناور */}
      <motion.a
        href="#pricing"
        initial={{ scale: 0, opacity: 0, y: 100 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ delay: 1, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.95 }}
        className={cn(
          'fixed z-50 flex items-center gap-2 px-6 py-3.5 rounded-full shadow-2xl transition-all duration-300 backdrop-blur-sm',
          'bg-gradient-to-r from-[#00D4AA] to-[#6366F1] text-white font-semibold',
          'glow-primary',
          'bottom-6 md:bottom-8 right-6 md:right-8',
          'hover:shadow-[0_0_60px_rgba(0,212,170,0.5)]'
        )}
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Icon name="ShoppingCart" size={22} />
        </motion.div>
        <span className="hidden sm:inline">{t('floating.order')}</span>
      </motion.a>

      {/* Telegram/Support Chat Button - Bottom Left - دکمه پشتیبانی */}
      <motion.a
        href={SITE_CONFIG.telegramLink}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0, y: 100 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ delay: 1.3, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.95 }}
        className={cn(
          'fixed z-50 flex items-center gap-2 px-6 py-3.5 rounded-full shadow-2xl transition-all duration-300 backdrop-blur-sm',
          'bg-[#0088cc] text-white font-semibold',
          'bottom-6 md:bottom-8 left-6 md:left-8',
          'hover:shadow-[0_0_60px_rgba(0,136,204,0.5)]'
        )}
      >
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Icon name="MessageCircle" size={22} />
        </motion.div>
        <span className="hidden sm:inline">{t('floating.telegram')}</span>
      </motion.a>

      {/* Scroll to Top Button - appears after scrolling */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: 'spring' }}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={cn(
          'fixed z-50 w-12 h-12 rounded-full shadow-xl transition-all duration-300',
          'bg-white/10 backdrop-blur-md border border-white/20',
          'dark:hover:bg-white/20 light:hover:bg-gray-100',
          'bottom-24 md:bottom-28 right-6 md:right-8',
          'flex items-center justify-center'
        )}
      >
        <Icon name="ChevronUp" size={24} className="dark:text-white light:text-gray-900" />
      </motion.button>
    </>
  );
}
