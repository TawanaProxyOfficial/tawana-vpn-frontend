import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '../atoms';
import { STATS } from '../../constants';
import type { Language } from '../../types';
import { cn, toFarsiNumber } from '../../utils/helpers';

interface WhyUsSectionProps {
  language: Language;
  t: (key: string) => string;
}

export function WhyUsSection({ language, t }: WhyUsSectionProps) {
  const [counters, setCounters] = useState({ experts: 0, servers: 0, users: 0 });

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      setCounters({
        experts: Math.round(STATS.experts * progress),
        servers: Math.round(STATS.servers * progress),
        users: Math.round(STATS.users * progress),
      });
      if (step >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const stats = [
    { value: counters.experts, suffix: '+', label: t('whyUs.stats.experts'), icon: 'Users' },
    { value: counters.servers, suffix: '+', label: t('whyUs.stats.servers'), icon: 'Server' },
    { value: counters.users, suffix: '+', label: t('whyUs.stats.users'), icon: 'UserCheck' },
  ];

  const teamAvatars = [
    'https://i.pravatar.cc/80?img=1',
    'https://i.pravatar.cc/80?img=2',
    'https://i.pravatar.cc/80?img=3',
    'https://i.pravatar.cc/80?img=4',
    'https://i.pravatar.cc/80?img=5',
  ];

  return (
    <section id="why-us" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold dark:text-white light:text-gray-900 mb-4"
            >
              {t('whyUs.title')}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="text-xl gradient-text font-semibold mb-4"
            >
              {t('whyUs.subtitle')}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg dark:text-gray-400 light:text-gray-600 mb-8"
            >
              {t('whyUs.description')}
            </motion.p>

            {/* Team Avatars */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-8"
            >
              <div className="flex -space-x-3 rtl:space-x-reverse">
                {teamAvatars.map((avatar, index) => (
                  <motion.img
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                    src={avatar}
                    alt="Team member"
                    className="w-10 h-10 rounded-full border-2 dark:border-black light:border-white"
                  />
                ))}
              </div>
              <span className="text-sm dark:text-gray-400 light:text-gray-500 ms-2">
                {language === 'fa' ? 'تیم متخصصان ما' : 'Our expert team'}
              </span>
            </motion.div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className={cn(
                  'p-6 rounded-2xl text-center transition-all duration-300',
                  'dark:bg-white/5 dark:border dark:border-white/10 dark:hover:border-green-500/50',
                  'light:bg-white light:border light:border-gray-200 light:hover:border-green-500/50 light:shadow-lg'
                )}
              >
                <Icon name={stat.icon} size={32} className="text-green-400 mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                  {language === 'fa' ? toFarsiNumber(stat.value) : stat.value.toLocaleString()}{stat.suffix}
                </div>
                <div className="text-sm dark:text-gray-400 light:text-gray-500">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
