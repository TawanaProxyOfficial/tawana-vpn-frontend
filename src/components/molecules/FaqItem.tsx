import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '../atoms';
import type { FAQ, Language } from '../../types';
import { cn } from '../../utils/helpers';

interface FaqItemProps {
  faq: FAQ;
  language: Language;
  index: number;
}

export function FaqItem({ faq, language, index }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.01 }}
      className={cn(
        'rounded-2xl overflow-hidden transition-all duration-300 backdrop-blur-xl',
        'dark:bg-white/5 dark:border dark:border-white/10',
        'light:bg-white light:border light:border-gray-200 light:shadow-sm',
        isOpen && 'dark:border-[#00D4AA]/50 light:border-[#00D4AA]/50 glow-primary'
      )}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-right group"
      >
        <span className="font-semibold text-lg dark:text-white light:text-gray-900 text-balance">
          {faq.question[language]}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, type: 'spring' }}
          className="shrink-0 ms-4"
        >
          <div className={cn(
            'w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300',
            isOpen 
              ? 'bg-[#00D4AA]/20 text-[#00D4AA]' 
              : 'dark:bg-white/5 light:bg-gray-100 dark:text-gray-400 light:text-gray-500 group-hover:bg-[#00D4AA]/10'
          )}>
            <Icon
              name={isOpen ? 'X' : 'Plus'}
              size={20}
            />
          </div>
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="px-6 pb-6 dark:text-gray-300 light:text-gray-600 text-base"
              style={{ lineHeight: 'var(--line-height-fa)' }}
              initial={{ y: -10 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {faq.answer[language]}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
