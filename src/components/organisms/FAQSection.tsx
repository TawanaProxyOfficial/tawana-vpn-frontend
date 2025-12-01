import { motion } from 'framer-motion';
import { FaqItem } from '../molecules';
import { Button, Icon } from '../atoms';
import { faqs as defaultFaqs } from '../../data/faq';
import { useAdminStore } from '../../stores/adminStore';
import type { Language } from '../../types';

interface FAQSectionProps {
  language: Language;
  t: (key: string) => string;
}

export function FAQSection({ language, t }: FAQSectionProps) {
  const { faqs: storedFaqs, settings } = useAdminStore();
  
  // Use stored FAQs if available, otherwise use default
  const faqs = storedFaqs.length > 0 ? storedFaqs : defaultFaqs;

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-semibold text-green-400 mb-4"
          >
            {t('faq.subtitle')}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold dark:text-white light:text-gray-900"
          >
            {t('faq.title')}
          </motion.h2>
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <FaqItem
              key={faq.id}
              faq={faq}
              language={language}
              index={index}
            />
          ))}
        </div>

        {/* Contact Support Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Button
            variant="primary"
            onClick={() => window.open(settings.telegramLink || 'https://t.me/TawanaProxy', '_blank')}
          >
            <Icon name="MessageCircle" size={20} />
            {t('faq.contact')}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
