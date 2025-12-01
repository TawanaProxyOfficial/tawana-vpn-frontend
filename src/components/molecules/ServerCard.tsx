import { motion } from 'framer-motion';
import type { Server, Language } from '../../types';
import { cn } from '../../utils/helpers';

interface ServerCardProps {
  server: Server;
  language: Language;
  index: number;
}

export function ServerCard({ server, language, index }: ServerCardProps) {
  const getPingColor = (ping: number) => {
    if (ping <= 30) return 'text-green-400';
    if (ping <= 50) return 'text-cyan-400';
    if (ping <= 80) return 'text-yellow-400';
    return 'text-orange-400';
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={cn(
        'flex items-center justify-between p-4 rounded-xl transition-all duration-300',
        'dark:bg-white/5 dark:border dark:border-white/10 dark:hover:bg-white/10',
        'light:bg-white light:border light:border-gray-200 light:hover:bg-gray-50'
      )}
    >
      <div className="flex items-center gap-4">
        <span className="text-2xl">{server.flag}</span>
        <div>
          <div className="font-semibold dark:text-white light:text-gray-900">
            {server.country[language]}
          </div>
          <div className="text-sm dark:text-gray-400 light:text-gray-500">
            {server.provider}
          </div>
        </div>
      </div>
      <div className={cn('font-mono font-bold', getPingColor(server.ping))}>
        {server.ping}ms
      </div>
    </motion.div>
  );
}
