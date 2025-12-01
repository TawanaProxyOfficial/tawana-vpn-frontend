import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ServerCard } from '../molecules';
import { Icon } from '../atoms';
import { servers, stats } from '../../data/servers';
import type { Language } from '../../types';
import { cn } from '../../utils/helpers';

interface InfrastructureSectionProps {
  language: Language;
  t: (key: string) => string;
}

export function InfrastructureSection({ language, t }: InfrastructureSectionProps) {
  const [counters, setCounters] = useState({ locations: 0, speed: 0, uptime: 0 });

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      setCounters({
        locations: Math.round(stats.locations * progress),
        speed: Math.round(10 * progress),
        uptime: Math.round(99.9 * progress * 10) / 10,
      });
      if (step >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const statsData = [
    { label: t('infrastructure.stats.locations'), value: `${counters.locations}`, icon: 'MapPin' },
    { label: t('infrastructure.stats.speed'), value: `${counters.speed} GBPS`, icon: 'Gauge' },
    { label: t('infrastructure.stats.uptime'), value: `${counters.uptime}%`, icon: 'Activity' },
    { label: t('infrastructure.stats.protocol'), value: stats.protocol, icon: 'Shield' },
  ];

  return (
    <section id="infrastructure" className="py-24 relative overflow-hidden">
      {/* Terminal-style background */}
      <div className="absolute inset-0 dark:bg-[#0a0a0a] light:bg-gray-50" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(34, 197, 94, 0.03) 1px, rgba(34, 197, 94, 0.03) 2px)',
          backgroundSize: '100% 3px',
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block font-mono text-green-400 mb-4"
          >
            {'>'} {t('infrastructure.subtitle')}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold font-mono gradient-text"
          >
            {t('infrastructure.title')}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Server List */}
          <div className="space-y-3">
            {servers.map((server, index) => (
              <ServerCard
                key={server.id}
                server={server}
                language={language}
                index={index}
              />
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {statsData.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={cn(
                  'p-6 rounded-2xl text-center transition-all duration-300',
                  'dark:bg-white/5 dark:border dark:border-white/10 dark:hover:border-green-500/50',
                  'light:bg-white light:border light:border-gray-200 light:hover:border-green-500/50 light:shadow-lg'
                )}
              >
                <Icon name={stat.icon} size={32} className="text-green-400 mx-auto mb-3" />
                <div className="text-2xl md:text-3xl font-bold font-mono gradient-text mb-1">
                  {stat.value}
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
