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
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={cn(
        'rounded-xl overflow-hidden transition-all duration-300',
        'dark:bg-white/5 dark:border dark:border-white/10',
        'light:bg-white light:border light:border-gray-200 light:shadow-sm',
        isOpen && 'dark:border-green-500/30 light:border-green-500/50'
      )}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-right"
      >
        <span className="font-semibold dark:text-white light:text-gray-900">
          {faq.question[language]}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0 ms-4"
        >
          <Icon
            name="ChevronDown"
            size={20}
            className={cn(
              'transition-colors duration-300',
              isOpen ? 'text-green-400' : 'dark:text-gray-400 light:text-gray-500'
            )}
          />
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
            <div className="px-5 pb-5 dark:text-gray-400 light:text-gray-600 leading-relaxed">
              {faq.answer[language]}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
