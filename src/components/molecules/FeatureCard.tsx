import { motion } from 'framer-motion';
import { Icon } from '../atoms';
import type { Feature, Language } from '../../types';
import { cn } from '../../utils/helpers';

interface FeatureCardProps {
  feature: Feature;
  language: Language;
  index: number;
}

export function FeatureCard({ feature, language, index }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className={cn(
        'group relative rounded-2xl p-6 backdrop-blur-xl transition-all duration-300',
        'dark:bg-white/5 dark:border dark:border-white/10 dark:hover:border-green-500/50',
        'light:bg-white light:border light:border-gray-200 light:hover:border-green-500/50 light:shadow-lg'
      )}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-500/0 to-cyan-500/0 group-hover:from-green-500/10 group-hover:to-cyan-500/10 transition-all duration-500" />
      
      {/* Icon */}
      <motion.div
        whileHover={{ rotate: 5, scale: 1.1 }}
        className="relative inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500/20 to-cyan-500/20 mb-4"
      >
        <Icon name={feature.icon} size={28} className="text-green-400" />
      </motion.div>

      {/* Content */}
      <h3 className="relative text-xl font-bold mb-2 dark:text-white light:text-gray-900">
        {feature.title[language]}
      </h3>
      <p className="relative text-sm dark:text-gray-400 light:text-gray-600 leading-relaxed">
        {feature.description[language]}
      </p>
    </motion.div>
  );
}
