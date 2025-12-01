import { motion } from 'framer-motion';
import { Icon } from '../atoms';
import { SITE_CONFIG } from '../../constants';
import type { Language } from '../../types';
import { cn } from '../../utils/helpers';

interface FloatingElementsProps {
  language: Language;
  t: (key: string) => string;
}

export function FloatingElements({ language, t }: FloatingElementsProps) {
  return (
    <>
      {/* Order Button - Bottom Right */}
      <motion.a
        href="#pricing"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: 'spring' }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className={cn(
          'fixed z-50 flex items-center gap-2 px-5 py-3 rounded-full shadow-lg transition-all duration-300',
          'bg-gradient-to-r from-green-500 to-cyan-500 text-white',
          'glow-green animate-bounce-subtle',
          language === 'fa' ? 'bottom-6 right-6' : 'bottom-6 right-6'
        )}
      >
        <Icon name="ShoppingCart" size={20} />
        <span className="font-semibold">{t('floating.order')}</span>
      </motion.a>

      {/* Telegram Button - Bottom Left */}
      <motion.a
        href={SITE_CONFIG.telegramLink}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: 'spring' }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className={cn(
          'fixed z-50 flex items-center gap-2 px-5 py-3 rounded-full shadow-lg transition-all duration-300',
          'bg-[#0088cc] text-white',
          'animate-pulse-glow',
          language === 'fa' ? 'bottom-6 left-6' : 'bottom-6 left-6'
        )}
      >
        <Icon name="MessageCircle" size={20} />
        <span className="font-semibold">{t('floating.telegram')}</span>
      </motion.a>
    </>
  );
}
