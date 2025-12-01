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
      {/* Background */}
      <div className="absolute inset-0 dark:bg-gradient-to-b dark:from-transparent dark:via-[#6366F1]/5 dark:to-transparent light:bg-gradient-to-b light:from-transparent light:via-[#6366F1]/5 light:to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-semibold text-[#6366F1] mb-4"
          >
            {t('faq.subtitle')}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold dark:text-white light:text-gray-900 mb-4"
          >
            {t('faq.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg dark:text-gray-400 light:text-gray-600"
          >
            {language === 'fa' 
              ? 'پاسخ سوالات متداول را در اینجا پیدا کنید'
              : 'Find answers to frequently asked questions here'
            }
          </motion.p>
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
          className="flex flex-col items-center gap-4"
        >
          <p className="text-center dark:text-gray-400 light:text-gray-600">
            {language === 'fa'
              ? 'سوال شما پاسخ داده نشد؟ تیم پشتیبانی ما آماده کمک به شماست'
              : 'Question not answered? Our support team is ready to help you'
            }
          </p>
          <Button
            variant="primary"
            size="lg"
            onClick={() => window.open(settings.telegramLink || 'https://t.me/TawanaProxy', '_blank')}
            glow
          >
            <Icon name="MessageCircle" size={20} />
            {t('faq.contact')}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
