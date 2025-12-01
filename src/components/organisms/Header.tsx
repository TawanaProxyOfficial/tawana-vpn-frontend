import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button, Icon } from '../atoms';
import { MenuItem } from '../molecules';
import { SITE_CONFIG } from '../../constants';
import { cn } from '../../utils/helpers';
import type { Language, Theme } from '../../types';

interface HeaderProps {
  language: Language;
  theme: Theme;
  onToggleLanguage: () => void;
  onToggleTheme: () => void;
  t: (key: string) => string;
}

export function Header({ language, theme, onToggleLanguage, onToggleTheme, t }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: t('nav.home'), sectionId: 'hero' },
    { label: t('nav.plans'), sectionId: 'pricing' },
    { label: t('nav.academy'), sectionId: 'blog' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'backdrop-blur-xl dark:bg-black/80 light:bg-white/80 border-b dark:border-white/10 light:border-gray-200'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo - لوگو */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2"
          >
            <motion.div 
              animate={isScrolled ? {} : { 
                boxShadow: [
                  '0 0 15px rgba(0, 212, 170, 0.3)',
                  '0 0 25px rgba(0, 212, 170, 0.5)',
                  '0 0 15px rgba(0, 212, 170, 0.3)',
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00D4AA] to-[#6366F1] flex items-center justify-center"
            >
              <Icon name="Zap" size={24} className="text-white" />
            </motion.div>
            <span className="text-xl font-bold gradient-text">
              {SITE_CONFIG.name}
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {menuItems.map((item) => (
              <MenuItem
                key={item.sectionId}
                label={item.label}
                sectionId={item.sectionId}
              />
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Language Toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onToggleLanguage}
              className="p-2 rounded-lg dark:hover:bg-white/10 light:hover:bg-gray-100 transition-colors"
              title={language === 'fa' ? 'English' : 'فارسی'}
            >
              <span className="text-sm font-medium dark:text-white light:text-gray-700">
                {language === 'fa' ? 'EN' : 'FA'}
              </span>
            </motion.button>

            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onToggleTheme}
              className="p-2 rounded-lg dark:hover:bg-white/10 light:hover:bg-gray-100 transition-colors"
            >
              <Icon
                name={theme === 'dark' ? 'Sun' : 'Moon'}
                size={20}
                className="dark:text-white light:text-gray-700"
              />
            </motion.button>

            {/* Login Button */}
            <Button variant="primary" size="sm" className="hidden md:flex">
              <Icon name="LogIn" size={16} />
              {t('nav.login')}
            </Button>

            {/* Mobile Menu Button - دکمه منوی موبایل */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                'md:hidden p-2 rounded-lg transition-all duration-300',
                isMobileMenuOpen
                  ? 'bg-[#00D4AA]/20 text-[#00D4AA]'
                  : 'dark:hover:bg-white/10 light:hover:bg-gray-100 dark:text-white light:text-gray-700'
              )}
            >
              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <Icon
                  name={isMobileMenuOpen ? 'X' : 'Menu'}
                  size={24}
                />
              </motion.div>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - منوی موبایل */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden dark:bg-black/95 light:bg-white/95 backdrop-blur-xl border-b dark:border-white/10 light:border-gray-200"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-3">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.sectionId}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <MenuItem
                    label={item.label}
                    sectionId={item.sectionId}
                    onClick={() => setIsMobileMenuOpen(false)}
                  />
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: menuItems.length * 0.1 }}
              >
                <Button variant="primary" className="w-full mt-2">
                  <Icon name="LogIn" size={18} />
                  {t('nav.login')}
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
