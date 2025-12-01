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

  // Typewriter effect
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
    }, 100);
    return () => clearInterval(timer);
  }, [fullText]);

  const badges = [
    { text: t('hero.badges.ping'), icon: 'Gauge' },
    { text: t('hero.badges.encryption'), icon: 'Lock' },
    { text: t('hero.badges.access'), icon: 'Globe' },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Gradient Mesh */}
      <div className="absolute inset-0 gradient-mesh" />
      
      {/* Animated Gradient Orbs */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-green-500/20 blur-3xl"
      />
      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-cyan-500/20 blur-3xl"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-lg md:text-xl mb-4 gradient-text font-semibold"
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* Title with Typewriter Effect */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 dark:text-white light:text-gray-900"
          >
            {displayText}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity }}
              className="inline-block w-1 h-12 md:h-16 bg-green-400 ms-2 align-middle"
            />
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg md:text-xl mb-8 dark:text-gray-400 light:text-gray-600 max-w-2xl mx-auto"
          >
            {t('hero.description')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Button variant="primary" size="lg" glow>
              <Icon name="Zap" size={20} />
              {t('hero.cta')}
            </Button>
            <Button variant="secondary" size="lg">
              <Icon name="Play" size={20} />
              {t('hero.demo')}
            </Button>
          </motion.div>

          {/* Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            {badges.map((badge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.9 + index * 0.1 }}
              >
                <Badge variant={index === 0 ? 'green' : index === 1 ? 'blue' : 'purple'}>
                  <Icon name={badge.icon} size={14} className="me-1" />
                  {badge.text}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <Icon name="ChevronDown" size={32} className="dark:text-white/50 light:text-gray-400" />
      </motion.div>
    </section>
  );
}
