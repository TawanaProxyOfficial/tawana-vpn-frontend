import { motion } from 'framer-motion';
import { FeatureCard } from '../molecules';
import { features } from '../../data/features';
import type { Language } from '../../types';

interface FeaturesSectionProps {
  language: Language;
  t: (key: string) => string;
}

export function FeaturesSection({ language, t }: FeaturesSectionProps) {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dark:bg-gradient-to-b dark:from-transparent dark:via-green-500/5 dark:to-transparent light:bg-gradient-to-b light:from-transparent light:via-green-500/5 light:to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-semibold text-green-400 mb-4"
          >
            {t('features.subtitle')}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold dark:text-white light:text-gray-900"
          >
            {t('features.title')}
          </motion.h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.id}
              feature={feature}
              language={language}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
