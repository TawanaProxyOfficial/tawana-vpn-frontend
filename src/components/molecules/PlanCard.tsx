import { motion } from 'framer-motion';
import { Button, Badge, Icon } from '../atoms';
import type { Plan, Language } from '../../types';
import { cn } from '../../utils/helpers';

interface PlanCardProps {
  plan: Plan;
  language: Language;
  onBuy?: () => void;
}

export function PlanCard({ plan, language, onBuy }: PlanCardProps) {
  const isEnterprise = plan.id === 'enterprise';

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className={cn(
        'relative rounded-2xl p-6 transition-all duration-300 flex flex-col h-full',
        'dark:bg-white/5 dark:border dark:border-white/10 dark:hover:border-white/20',
        'light:bg-white light:border light:border-gray-200 light:hover:border-gray-300 light:shadow-lg',
        plan.popular && 'ring-2 ring-green-500 dark:border-green-500/50 light:border-green-500'
      )}
    >
      {/* Badge */}
      {plan.badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <Badge
            variant={plan.badgeColor === 'green' ? 'green' : plan.badgeColor === 'purple' ? 'purple' : 'blue'}
          >
            {plan.badge[language]}
          </Badge>
        </div>
      )}

      {/* Header */}
      <div className="text-center mb-6 pt-2">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500/20 to-cyan-500/20 mb-4">
          <Icon name={plan.icon} size={28} className="text-green-400" />
        </div>
        <h3 className="text-xl font-bold dark:text-white light:text-gray-900 mb-1">
          {plan.name[language]}
        </h3>
        <p className="text-sm dark:text-gray-400 light:text-gray-500">
          {plan.traffic} | {plan.users} {language === 'fa' ? 'کاربر' : 'user(s)'}
        </p>
      </div>

      {/* Price */}
      <div className="text-center mb-6">
        <div className="text-3xl font-bold gradient-text">
          {plan.priceDisplay[language]}
        </div>
        {!isEnterprise && (
          <p className="text-sm dark:text-gray-500 light:text-gray-400 mt-1">
            {language === 'fa' ? 'ماهانه' : 'per month'}
          </p>
        )}
      </div>

      {/* Features */}
      <ul className="space-y-3 mb-6 flex-grow">
        {plan.features[language].map((feature, index) => (
          <li key={index} className="flex items-center gap-3 text-sm">
            <Icon name="Check" size={16} className="text-green-400 shrink-0" />
            <span className="dark:text-gray-300 light:text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Button
        variant={plan.popular ? 'primary' : 'secondary'}
        className="w-full"
        onClick={onBuy}
        glow={plan.popular}
      >
        {isEnterprise
          ? (language === 'fa' ? 'تماس بگیرید' : 'Contact Us')
          : (language === 'fa' ? 'خرید' : 'Buy Now')}
      </Button>
    </motion.div>
  );
}
