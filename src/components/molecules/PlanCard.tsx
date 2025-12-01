import { motion } from 'framer-motion';
import { Button, Badge, Icon } from '../atoms';
import type { Plan, Language } from '../../types';
import { cn } from '../../utils/helpers';

interface PlanCardProps {
  plan: Plan;
  language: Language;
  onBuy?: () => void;
  billingPeriod?: 'monthly' | 'yearly';
}

export function PlanCard({ plan, language, onBuy, billingPeriod = 'monthly' }: PlanCardProps) {
  const isEnterprise = plan.id === 'enterprise';
  const yearlyDiscount = 0.6; // 40% تخفیف = ۶۰٪ قیمت نهایی
  const displayPrice = billingPeriod === 'yearly' && !isEnterprise 
    ? Math.round(plan.price * yearlyDiscount * 12)
    : plan.price;

  return (
    <motion.div
      whileHover={{ y: -8, scale: plan.popular ? 1.05 : 1.02 }}
      transition={{ duration: 0.3 }}
      className={cn(
        'relative rounded-2xl p-6 transition-all duration-300 flex flex-col h-full backdrop-blur-xl',
        'dark:bg-white/5 dark:border dark:border-white/10',
        'light:bg-white light:border light:border-gray-200 light:shadow-lg',
        plan.popular 
          ? 'ring-2 ring-[#00D4AA] dark:border-[#00D4AA]/50 light:border-[#00D4AA] scale-105 lg:scale-110 z-10 glow-primary'
          : 'dark:hover:border-white/20 light:hover:border-gray-300'
      )}
    >
      {/* Popular Tag - برچسب پرفروش‌ترین */}
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Badge variant="green" size="lg" className="px-4 py-2 shadow-lg">
              <Icon name="Star" size={16} className="me-2" />
              {language === 'fa' ? '⭐ پرفروش‌ترین' : '⭐ Most Popular'}
            </Badge>
          </motion.div>
        </div>
      )}

      {/* Badge */}
      {plan.badge && !plan.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <Badge
            variant={plan.badgeColor === 'green' ? 'green' : plan.badgeColor === 'purple' ? 'purple' : 'blue'}
          >
            {plan.badge[language]}
          </Badge>
        </div>
      )}

      {/* Header */}
      <div className="text-center mb-6 pt-4">
        <motion.div 
          whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
          className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00D4AA]/20 to-[#6366F1]/20 mb-4"
        >
          <Icon name={plan.icon} size={32} className="text-[#00D4AA]" />
        </motion.div>
        <h3 className="text-2xl font-bold dark:text-white light:text-gray-900 mb-2">
          {plan.name[language]}
        </h3>
        <p className="text-sm dark:text-gray-400 light:text-gray-500">
          {plan.traffic} | {plan.users} {language === 'fa' ? 'کاربر' : 'user(s)'}
        </p>
      </div>

      {/* Price */}
      <div className="text-center mb-6">
        {billingPeriod === 'yearly' && !isEnterprise && (
          <div className="text-sm dark:text-gray-500 light:text-gray-400 line-through mb-1">
            {language === 'fa' 
              ? `${(plan.price * 12).toLocaleString('fa-IR')} تومان`
              : `${(plan.price * 12).toLocaleString()} T`
            }
          </div>
        )}
        <div className="text-4xl font-bold gradient-text mb-1">
          {isEnterprise 
            ? plan.priceDisplay[language]
            : (language === 'fa'
              ? `${displayPrice.toLocaleString('fa-IR')} تومان`
              : `${displayPrice.toLocaleString()} T`
            )
          }
        </div>
        {!isEnterprise && (
          <p className="text-sm dark:text-gray-500 light:text-gray-400">
            {billingPeriod === 'yearly'
              ? (language === 'fa' ? 'سالانه (۴۰٪ تخفیف)' : 'per year (40% OFF)')
              : (language === 'fa' ? 'ماهانه' : 'per month')
            }
          </p>
        )}
      </div>

      {/* Features - لیست ویژگی‌ها */}
      <ul className="space-y-3 mb-6 flex-grow">
        {plan.features[language].map((feature, index) => (
          <motion.li 
            key={index} 
            className="flex items-start gap-3 text-sm"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: index * 0.1 + 0.2, type: 'spring' }}
              viewport={{ once: true }}
            >
              <Icon name="CheckCircle2" size={18} className="text-[#00D4AA] shrink-0 mt-0.5" />
            </motion.div>
            <span className="dark:text-gray-300 light:text-gray-600 leading-relaxed">
              {feature}
            </span>
          </motion.li>
        ))}
      </ul>

      {/* CTA Button */}
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button
          variant={plan.popular ? 'primary' : 'secondary'}
          className={cn('w-full', plan.popular && 'pulse')}
          onClick={onBuy}
          glow={plan.popular}
        >
          <Icon name={isEnterprise ? 'MessageCircle' : 'ShoppingCart'} size={18} />
          {isEnterprise
            ? (language === 'fa' ? 'تماس بگیرید' : 'Contact Us')
            : (language === 'fa' ? 'خرید پلن' : 'Buy Plan')}
        </Button>
      </motion.div>
    </motion.div>
  );
}
