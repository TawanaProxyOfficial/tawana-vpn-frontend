import { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Icon } from '../atoms';
import type { Feature, Language } from '../../types';
import { cn } from '../../utils/helpers';

interface FeatureCardProps {
  feature: Feature;
  language: Language;
  index: number;
}

export function FeatureCard({ feature, language, index }: FeatureCardProps) {
  const [isHovering, setIsHovering] = useState(false);
  
  // 3D Tilt Effect - افکت چرخش سه‌بعدی
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['17.5deg', '-17.5deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-17.5deg', '17.5deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isHovering) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className={cn(
        'group relative rounded-2xl p-6 backdrop-blur-xl transition-all duration-300 cursor-pointer',
        'dark:bg-white/5 dark:border dark:border-white/10 dark:hover:border-[#00D4AA]/50',
        'light:bg-white light:border light:border-gray-200 light:hover:border-[#00D4AA]/50 light:shadow-lg'
      )}
    >
      {/* Glow effect on hover - افکت درخشش */}
      <div 
        className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00D4AA]/0 to-[#6366F1]/0 group-hover:from-[#00D4AA]/10 group-hover:to-[#6366F1]/10 transition-all duration-500" 
        style={{ transform: 'translateZ(-10px)' }}
      />
      
      {/* Icon with animation - آیکون انیمیشنی */}
      <motion.div
        whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
        transition={{ duration: 0.5 }}
        className="relative inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-[#00D4AA]/20 to-[#6366F1]/20 mb-4"
        style={{ transform: 'translateZ(20px)' }}
      >
        <Icon name={feature.icon} size={28} className="text-[#00D4AA]" />
      </motion.div>

      {/* Content */}
      <h3 
        className="relative text-xl font-bold mb-2 dark:text-white light:text-gray-900"
        style={{ transform: 'translateZ(15px)', lineHeight: 'var(--line-height-fa)' }}
      >
        {feature.title[language]}
      </h3>
      <p 
        className="relative text-sm dark:text-gray-400 light:text-gray-600"
        style={{ transform: 'translateZ(10px)', lineHeight: 'var(--line-height-fa)' }}
      >
        {feature.description[language]}
      </p>
      
      {/* Shine effect on hover - افکت نور */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-[#00D4AA]/10 to-transparent" />
    </motion.div>
  );
}
