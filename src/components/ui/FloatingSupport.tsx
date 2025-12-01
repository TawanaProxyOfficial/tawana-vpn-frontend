import { motion } from 'framer-motion';
import { MessageCircle, Send } from 'lucide-react';

export function FloatingSupport() {
  const telegramChannel = 'https://t.me/panbehnet';
  const telegramSupport = 'https://t.me/Rahbarusd';

  return (
    <>
      {/* Telegram Channel Button - Left */}
      <motion.a
        href={telegramChannel}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        className="fixed bottom-6 left-6 z-40 group"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
          <button className="relative w-14 h-14 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110">
            <Send className="w-6 h-6" />
          </button>
        </div>
        <div className="absolute bottom-full left-0 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          کانال تلگرام
          <div className="absolute top-full left-4 -mt-1">
            <div className="border-4 border-transparent border-t-gray-900" />
          </div>
        </div>
      </motion.a>

      {/* Support Chat Button - Right */}
      <motion.a
        href={telegramSupport}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        className="fixed bottom-6 right-6 z-40 group"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-[#00D4AA] rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
          <button className="relative w-14 h-14 bg-gradient-to-r from-[#00D4AA] to-[#7C3AED] text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110">
            <MessageCircle className="w-6 h-6" />
          </button>
          {/* Pulse animation */}
          <span className="absolute inset-0 rounded-full bg-[#00D4AA] animate-ping opacity-20" />
        </div>
        <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          پشتیبانی آنلاین
          <div className="absolute top-full right-4 -mt-1">
            <div className="border-4 border-transparent border-t-gray-900" />
          </div>
        </div>
      </motion.a>

      {/* Phone Support Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="fixed bottom-24 right-6 z-30 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
      >
        <div className="card p-3 text-sm whitespace-nowrap">
          <div className="flex items-center gap-2">
            <span>📞</span>
            <a 
              href="tel:+989901120235" 
              className="pointer-events-auto hover:text-[#00D4AA] transition-colors"
              dir="ltr"
            >
              +98 990 112 0235
            </a>
          </div>
        </div>
      </motion.div>
    </>
  );
}
