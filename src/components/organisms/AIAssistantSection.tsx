import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button, Icon, Input } from '../atoms';
import type { Language } from '../../types';
import { plans } from '../../data/plans';
import { cn } from '../../utils/helpers';

interface AIAssistantSectionProps {
  language: Language;
  t: (key: string) => string;
}

export function AIAssistantSection({ language, t }: AIAssistantSectionProps) {
  const [query, setQuery] = useState('');
  const [suggestion, setSuggestion] = useState<string | null>(null);
  const [isTyping, setIsTyping] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsTyping(true);
    setSuggestion(null);

    // Simple AI-like logic based on keywords
    const lowerQuery = query.toLowerCase();
    let recommendedPlan = plans[1]; // Default: Professional

    if (lowerQuery.includes('گیم') || lowerQuery.includes('game') || lowerQuery.includes('بازی') || lowerQuery.includes('ping') || lowerQuery.includes('پینگ')) {
      recommendedPlan = plans[2]; // Gaming VIP
    } else if (lowerQuery.includes('خانواده') || lowerQuery.includes('family') || lowerQuery.includes('چند نفر')) {
      recommendedPlan = plans[3]; // Family
    } else if (lowerQuery.includes('ترید') || lowerQuery.includes('trade') || lowerQuery.includes('بانک') || lowerQuery.includes('bank') || lowerQuery.includes('ایران')) {
      recommendedPlan = plans[4]; // Iran Access
    } else if (lowerQuery.includes('ارزان') || lowerQuery.includes('اقتصادی') || lowerQuery.includes('cheap')) {
      recommendedPlan = plans[0]; // Economy
    } else if (lowerQuery.includes('سازمان') || lowerQuery.includes('enterprise') || lowerQuery.includes('شرکت')) {
      recommendedPlan = plans[5]; // Enterprise
    }

    setTimeout(() => {
      setIsTyping(false);
      setSuggestion(language === 'fa' 
        ? `بر اساس نیاز شما، پلن "${recommendedPlan.name.fa}" با ${recommendedPlan.traffic} ترافیک پیشنهاد می‌شود. قیمت: ${recommendedPlan.priceDisplay.fa}`
        : `Based on your needs, we recommend the "${recommendedPlan.name.en}" plan with ${recommendedPlan.traffic} traffic. Price: ${recommendedPlan.priceDisplay.en}`
      );
    }, 1500);
  };

  return (
    <section id="ai-assistant" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 mb-6"
            >
              <Icon name="Bot" size={32} className="text-purple-400" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold dark:text-white light:text-gray-900 mb-4"
            >
              {t('ai.title')}
            </motion.h2>
          </div>

          {/* Input Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className={cn(
              'p-6 rounded-2xl backdrop-blur-xl',
              'dark:bg-white/5 dark:border dark:border-white/10',
              'light:bg-white light:border light:border-gray-200 light:shadow-xl'
            )}
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t('ai.placeholder')}
                icon={<Icon name="Search" size={20} />}
                className="flex-1"
              />
              <Button type="submit" variant="primary" disabled={isTyping}>
                <Icon name="Sparkles" size={18} />
                {t('ai.button')}
              </Button>
            </div>

            {/* Response */}
            {(isTyping || suggestion) && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-4 rounded-xl dark:bg-white/5 light:bg-gray-50"
              >
                {isTyping ? (
                  <div className="flex items-center gap-2 dark:text-gray-400 light:text-gray-600">
                    <motion.span
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      {language === 'fa' ? 'در حال تحلیل نیاز شما...' : 'Analyzing your needs...'}
                    </motion.span>
                  </div>
                ) : (
                  <div className="flex items-start gap-3">
                    <Icon name="Lightbulb" size={20} className="text-yellow-400 shrink-0 mt-1" />
                    <p className="dark:text-gray-300 light:text-gray-700">{suggestion}</p>
                  </div>
                )}
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
