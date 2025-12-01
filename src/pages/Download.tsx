import { motion } from 'framer-motion';
import { Download as DownloadIcon, Smartphone, Monitor, Apple, Chrome } from 'lucide-react';
import { useLanguage, useTheme } from '../hooks';
import { Header, Footer } from '../components/organisms';
import { FloatingSupport } from '../components/ui';

export function Download() {
  const { language, toggleLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const platforms = [
    {
      name: 'اندروید',
      icon: Smartphone,
      version: 'نسخه ۲.۵.۰',
      size: '۱۵ مگابایت',
      description: 'برای اندروید ۵.۰ به بالا',
      link: '#',
      color: 'green',
    },
    {
      name: 'ویندوز',
      icon: Monitor,
      version: 'نسخه ۳.۲.۱',
      size: '۲۵ مگابایت',
      description: 'برای ویندوز ۱۰ و ۱۱',
      link: '#',
      color: 'blue',
    },
    {
      name: 'iOS / macOS',
      icon: Apple,
      version: 'نسخه ۲.۴.۵',
      size: '۲۰ مگابایت',
      description: 'برای iOS ۱۳+ و macOS ۱۱+',
      link: '#',
      color: 'gray',
    },
    {
      name: 'افزونه کروم',
      icon: Chrome,
      version: 'نسخه ۱.۸.۲',
      size: '۵ مگابایت',
      description: 'برای مرورگرهای کرومیوم',
      link: '#',
      color: 'yellow',
    },
  ];

  return (
    <div className="min-h-screen">
      <Header
        language={language}
        theme={theme}
        onToggleLanguage={toggleLanguage}
        onToggleTheme={toggleTheme}
        t={t}
      />

      <div className="container mx-auto px-4 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto"
        >
          {/* Hero */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-[#00D4AA] to-[#7C3AED] mb-6"
            >
              <DownloadIcon className="w-10 h-10 text-white" />
            </motion.div>
            <h1 className="text-5xl font-bold mb-6 gradient-text">دانلود اپلیکیشن</h1>
            <p className="text-xl opacity-70">
              توانا پروکسی را در همه پلتفرم‌ها استفاده کنید
            </p>
          </div>

          {/* Platforms Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {platforms.map((platform, index) => {
              const Icon = platform.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="card p-8"
                >
                  <div className="flex items-start gap-6">
                    <div className={`w-16 h-16 shrink-0 rounded-2xl bg-${platform.color}-500/10 flex items-center justify-center`}>
                      <Icon className={`w-8 h-8 text-${platform.color}-500`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">{platform.name}</h3>
                      <p className="text-sm opacity-70 mb-4">{platform.description}</p>
                      <div className="flex items-center gap-4 text-sm opacity-60 mb-4">
                        <span>{platform.version}</span>
                        <span>•</span>
                        <span>{platform.size}</span>
                      </div>
                      <button className="btn-primary flex items-center gap-2">
                        <DownloadIcon className="w-5 h-5" />
                        دانلود
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Installation Guide */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="card p-8"
          >
            <h2 className="text-3xl font-bold mb-6">راهنمای نصب</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#00D4AA]/10 flex items-center justify-center text-2xl font-bold text-[#00D4AA]">
                  ۱
                </div>
                <h4 className="font-bold mb-2">دانلود اپلیکیشن</h4>
                <p className="text-sm opacity-70">
                  اپلیکیشن مناسب پلتفرم خود را دانلود کنید
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#7C3AED]/10 flex items-center justify-center text-2xl font-bold text-[#7C3AED]">
                  ۲
                </div>
                <h4 className="font-bold mb-2">نصب و راه‌اندازی</h4>
                <p className="text-sm opacity-70">
                  اپلیکیشن را نصب و با حساب کاربری وارد شوید
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#F59E0B]/10 flex items-center justify-center text-2xl font-bold text-[#F59E0B]">
                  ۳
                </div>
                <h4 className="font-bold mb-2">اتصال به سرور</h4>
                <p className="text-sm opacity-70">
                  سرور مورد نظر را انتخاب و اتصال برقرار کنید
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <Footer language={language} t={t} />
      <FloatingSupport />
    </div>
  );
}
