import { useState } from 'react';
import { motion } from 'framer-motion';
import { PlanCard } from '../molecules';
import { Badge, Icon } from '../atoms';
import { plans as defaultPlans } from '../../data/plans';
import { useAdminStore } from '../../stores/adminStore';
import type { Language, PlanCategory } from '../../types';
import { cn } from '../../utils/helpers';

interface PricingSectionProps {
  language: Language;
  t: (key: string) => string;
}

export function PricingSection({ language, t }: PricingSectionProps) {
  const [activeCategory, setActiveCategory] = useState<PlanCategory>('all');
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');
  const { plans: storedPlans, settings } = useAdminStore();
  
  // Use stored plans if available, otherwise use default plans
  const plans = storedPlans.length > 0 ? storedPlans : defaultPlans;

  const categories: { id: PlanCategory; label: string }[] = [
    { id: 'all', label: t('pricing.categories.all') },
    { id: 'gaming', label: t('pricing.categories.gaming') },
    { id: 'family', label: t('pricing.categories.family') },
    { id: 'iran-access', label: t('pricing.categories.iran-access') },
  ];

  const filteredPlans = activeCategory === 'all'
    ? plans
    : plans.filter((plan) => plan.category.includes(activeCategory));

  const handleBuy = () => {
    window.open(settings.paymentLink || 'https://t.me/TawanaProxy', '_blank');
  };

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dark:bg-gradient-to-b dark:from-transparent dark:via-cyan-500/5 dark:to-transparent light:bg-gradient-to-b light:from-transparent light:via-cyan-500/5 light:to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-semibold text-[#00D4AA] mb-4"
          >
            {t('pricing.subtitle')}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold dark:text-white light:text-gray-900 mb-6"
          >
            {t('pricing.title')}
          </motion.h2>
          
          {/* Billing Period Toggle - تغییر بین ماهانه و سالانه */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 p-1 rounded-xl glass mb-8"
          >
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={cn(
                'px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300',
                billingPeriod === 'monthly'
                  ? 'bg-gradient-to-r from-[#00D4AA] to-[#6366F1] text-white shadow-lg'
                  : 'dark:text-gray-400 light:text-gray-600'
              )}
            >
              {language === 'fa' ? 'ماهانه' : 'Monthly'}
            </button>
            <button
              onClick={() => setBillingPeriod('yearly')}
              className={cn(
                'px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative',
                billingPeriod === 'yearly'
                  ? 'bg-gradient-to-r from-[#00D4AA] to-[#6366F1] text-white shadow-lg'
                  : 'dark:text-gray-400 light:text-gray-600'
              )}
            >
              {language === 'fa' ? 'سالانه' : 'Yearly'}
              <span className="absolute -top-2 -right-2 px-2 py-0.5 bg-[#F59E0B] text-white text-xs rounded-full">
                {language === 'fa' ? '۴۰٪ تخفیف' : '40% OFF'}
              </span>
            </button>
          </motion.div>
        </div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                'px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300',
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-green-500 to-cyan-500 text-white'
                  : 'dark:bg-white/5 dark:text-gray-400 dark:hover:bg-white/10 light:bg-gray-100 light:text-gray-600 light:hover:bg-gray-200'
              )}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Plans Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {filteredPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + index * 0.1 }}
            >
              <PlanCard
                plan={plan}
                language={language}
                onBuy={handleBuy}
                billingPeriod={billingPeriod}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Guarantee Badge - بج ضمانت بازگشت وجه */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-4"
        >
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Badge variant="green" size="md" className="text-base px-6 py-3">
              <Icon name="ShieldCheck" size={20} className="me-2" />
              {t('pricing.guarantee')}
            </Badge>
          </motion.div>
          <p className="text-sm dark:text-gray-500 light:text-gray-600 text-center max-w-md">
            {language === 'fa' 
              ? 'اگر از سرویس راضی نبودید، بدون هیچ سوالی پول شما برمی‌گردد'
              : 'If you\'re not satisfied with our service, your money will be refunded without any questions'
            }
          </p>
        </motion.div>
      </div>
    </section>
  );
}
