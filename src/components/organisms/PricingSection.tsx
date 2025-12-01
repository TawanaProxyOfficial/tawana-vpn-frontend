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
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold dark:text-white light:text-gray-900 mb-4"
          >
            {t('pricing.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg dark:text-gray-400 light:text-gray-600"
          >
            {t('pricing.subtitle')}
          </motion.p>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredPlans.map((plan) => (
            <PlanCard
              key={plan.id}
              plan={plan}
              language={language}
              onBuy={handleBuy}
            />
          ))}
        </div>

        {/* Guarantee Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Badge variant="green" size="md">
            <Icon name="ShieldCheck" size={16} className="me-2" />
            {t('pricing.guarantee')}
          </Badge>
        </motion.div>
      </div>
    </section>
  );
}
