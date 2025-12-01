import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button, Badge, Icon } from '../atoms';
import type { Language } from '../../types';

interface HeroSectionProps {
  language: Language;
  t: (key: string) => string;
}

export function HeroSection({ t }: HeroSectionProps) {
  const [displayText, setDisplayText] = useState('');
  const fullText = t('hero.title');

  // Typewriter effect - افکت ماشین تحریر
  useEffect(() => {
    setDisplayText('');
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, [fullText]);

  const badges = [
    { text: t('hero.badges.ping'), icon: 'Gauge' },
    { text: t('hero.badges.encryption'), icon: 'Lock' },
    { text: t('hero.badges.access'), icon: 'Globe' },
  ];

  const stats = [
    { value: t('hero.stats.users'), icon: 'Users' },
    { value: t('hero.stats.servers'), icon: 'Server' },
    { value: t('hero.stats.uptime'), icon: 'Activity' },
  ];

  const platforms = [
    { name: 'Android', icon: 'Smartphone' },
    { name: 'iOS', icon: 'Smartphone' },
    { name: 'Windows', icon: 'Monitor' },
    { name: 'macOS', icon: 'Laptop' },
    { name: 'Linux', icon: 'Terminal' },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Gradient Mesh */}
      <div className="absolute inset-0 gradient-mesh" />
      
      {/* Animated Gradient Orbs - گوی‌های انیمیشنی */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#00D4AA]/20 blur-3xl"
      />
      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#6366F1]/20 blur-3xl"
      />

      {/* Floating Particles - ذرات شناور */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            delay: i * 0.2,
          }}
          className="absolute w-2 h-2 rounded-full bg-[#00D4AA]"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Logo with Glow - لوگو با افکت درخشش */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="mb-6 inline-block"
          >
            <motion.div
              animate={{ 
                boxShadow: [
                  '0 0 20px rgba(0, 212, 170, 0.3)',
                  '0 0 40px rgba(0, 212, 170, 0.6)',
                  '0 0 20px rgba(0, 212, 170, 0.3)',
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#00D4AA] to-[#6366F1]"
            >
              <Icon name="Zap" size={40} className="text-white" />
            </motion.div>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg md:text-xl mb-4 gradient-text font-semibold"
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* Title with Typewriter Effect */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 dark:text-white light:text-gray-900"
            style={{ lineHeight: 'var(--line-height-fa)' }}
          >
            {displayText}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity }}
              className="inline-block w-1 h-12 md:h-16 lg:h-20 bg-[#00D4AA] ms-2 align-middle"
            />
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-lg md:text-xl mb-8 dark:text-gray-400 light:text-gray-600 max-w-3xl mx-auto"
            style={{ lineHeight: 'var(--line-height-fa)' }}
          >
            {t('hero.description')}
          </motion.p>

          {/* CTA Buttons with Pulse - دکمه‌های اکشن */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="primary" size="lg" className="pulse glow-primary">
                <Icon name="Zap" size={20} />
                {t('hero.cta')}
              </Button>
            </motion.div>
            <Button variant="secondary" size="lg">
              <Icon name="Play" size={20} />
              {t('hero.demo')}
            </Button>
          </motion.div>

          {/* Live Stats - آمار زنده */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex flex-wrap items-center justify-center gap-6 mb-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 1.1 + index * 0.1 }}
                className="flex items-center gap-2 px-4 py-2 rounded-lg glass"
              >
                <Icon name={stat.icon} size={20} className="text-[#00D4AA]" />
                <span className="text-sm md:text-base font-semibold dark:text-white light:text-gray-900">
                  {stat.value}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Trust Badges - نشان‌های اعتماد */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-8"
          >
            {badges.map((badge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 1.3 + index * 0.1 }}
              >
                <Badge variant={index === 0 ? 'green' : index === 1 ? 'blue' : 'purple'}>
                  <Icon name={badge.icon} size={14} className="me-1" />
                  {badge.text}
                </Badge>
              </motion.div>
            ))}
          </motion.div>

          {/* Platform Icons - آیکون‌های پلتفرم */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <span className="text-sm dark:text-gray-500 light:text-gray-600 w-full mb-2">
              {t('hero.platforms.title')}
            </span>
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ duration: 0.2, delay: 1.5 + index * 0.05 }}
                className="w-10 h-10 flex items-center justify-center rounded-lg glass hover:glow-primary cursor-pointer"
                title={platform.name}
              >
                <Icon name={platform.icon} size={20} className="dark:text-gray-400 light:text-gray-600" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - نشانگر اسکرول */}
      <motion.a
        href="#features"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
        aria-label="Scroll to features section"
      >
        <Icon name="ChevronDown" size={32} className="dark:text-white/50 light:text-gray-400" />
      </motion.a>
    </section>
  );
}
