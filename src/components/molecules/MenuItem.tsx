import { motion } from 'framer-motion';
import { scrollToSection } from '../../utils/helpers';

interface MenuItemProps {
  label: string;
  href?: string;
  sectionId?: string;
  onClick?: () => void;
  isActive?: boolean;
}

export function MenuItem({ label, href, sectionId, onClick, isActive }: MenuItemProps) {
  const handleClick = (e: React.MouseEvent) => {
    if (sectionId) {
      e.preventDefault();
      scrollToSection(sectionId);
    }
    onClick?.();
  };

  return (
    <motion.a
      href={href || `#${sectionId}`}
      onClick={handleClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200
        ${isActive
          ? 'text-green-400'
          : 'dark:text-gray-300 dark:hover:text-white light:text-gray-600 light:hover:text-gray-900'
        }
      `}
    >
      {label}
      {isActive && (
        <motion.div
          layoutId="activeIndicator"
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-green-400"
        />
      )}
    </motion.a>
  );
}
