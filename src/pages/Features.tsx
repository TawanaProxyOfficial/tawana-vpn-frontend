import { motion } from 'framer-motion';
import { Shield, Zap, Globe, Lock, Server, Award } from 'lucide-react';
import { useLanguage, useTheme } from '../hooks';
import { Header, Footer } from '../components/organisms';
import { FloatingSupport, ScrollProgress } from '../components/ui';

export function Features() {
  const { language, toggleLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const features = [
    {
      icon: Shield,
      title: 'امنیت حرفه‌ای',
      description: 'رمزنگاری نظامی AES-256 برای محافظت کامل از اطلاعات شما',
      color: 'green',
      details: [
        'رمزنگاری سطح نظامی',
        'عدم ثبت لاگ',
        'Kill Switch خودکار',
        'محافظت از DNS Leak',
      ],
    },
    {
      icon: Zap,
      title: 'سرعت فوق‌العاده',
      description: 'سرورهای اختصاصی با پهنای باند بالا برای تجربه‌ای بدون وقفه',
      color: 'yellow',
      details: [
        'پینگ زیر 50ms',
        'پهنای باند نامحدود',
        'سرورهای 10Gbps',
        'بهینه‌سازی خودکار',
      ],
    },
    {
      icon: Globe,
      title: 'دسترسی جهانی',
      description: 'بیش از 100 سرور در سراسر جهان برای دسترسی به هر محتوایی',
      color: 'blue',
      details: [
        '15+ کشور',
        '100+ سرور',
        'تغییر IP نامحدود',
        'دسترسی به تمام محتوا',
      ],
    },
    {
      icon: Lock,
      title: 'حریم خصوصی',
      description: 'سیاست عدم ثبت لاگ برای حفظ کامل حریم خصوصی شما',
      color: 'purple',
      details: [
        'بدون ثبت لاگ',
        'پرداخت ناشناس',
        'مستقر در خارج',
        'حذف خودکار داده',
      ],
    },
    {
      icon: Server,
      title: 'زیرساخت قدرتمند',
      description: 'سرورهای مدرن با تکنولوژی روز دنیا',
      color: 'cyan',
      details: [
        'آپتایم 99.9%',
        'پشتیبان‌گیری خودکار',
        'مانیتورینگ 24/7',
        'بروزرسانی مداوم',
      ],
    },
    {
      icon: Award,
      title: 'پشتیبانی عالی',
      description: 'تیم پشتیبانی حرفه‌ای 24/7 در خدمت شما',
      color: 'rose',
      details: [
        'پشتیبانی 24/7',
        'پاسخ سریع',
        'راهنمای کامل',
        'مشاوره رایگان',
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <ScrollProgress />
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
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block text-sm font-semibold text-[#00D4AA] mb-4"
            >
              ✨ ویژگی‌های برتر
            </motion.span>
            <h1 className="text-5xl font-bold mb-6 gradient-text">
              چرا توانا پروکسی؟
            </h1>
            <p className="text-xl opacity-70 max-w-2xl mx-auto">
              تکنولوژی روز دنیا برای تجربه‌ای بی‌نظیر از اینترنت آزاد
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="card p-6 group"
                >
                  <div className={`w-16 h-16 mb-4 rounded-2xl bg-${feature.color}-500/10 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-8 h-8 text-${feature.color}-500`} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                  <p className="opacity-70 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#00D4AA]" />
                        <span className="opacity-70">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-16 card p-12 text-center bg-gradient-to-br from-[#00D4AA]/10 to-[#7C3AED]/10"
          >
            <h2 className="text-3xl font-bold mb-4">
              آماده تجربه اینترنت آزاد هستید؟
            </h2>
            <p className="text-lg opacity-70 mb-8 max-w-2xl mx-auto">
              همین حالا با پلن‌های ویژه توانا پروکسی شروع کنید
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button className="btn-primary">
                مشاهده پلن‌ها
              </button>
              <button className="btn-secondary">
                تماس با پشتیبانی
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <Footer language={language} t={t} />
      <FloatingSupport />
    </div>
  );
}
