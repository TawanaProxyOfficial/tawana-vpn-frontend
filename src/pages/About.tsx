import { motion } from 'framer-motion';
import { Shield, Users, Award, Target } from 'lucide-react';
import { useLanguage, useTheme } from '../hooks';
import { Header, Footer } from '../components/organisms';
import { FloatingSupport } from '../components/ui';

export function About() {
  const { language, toggleLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const stats = [
    { icon: Users, value: '+50,000', label: 'کاربر فعال' },
    { icon: Shield, value: '100+', label: 'سرور جهانی' },
    { icon: Award, value: '99.9%', label: 'آپتایم' },
    { icon: Target, value: '10+', label: 'سال تجربه' },
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
          className="max-w-4xl mx-auto"
        >
          {/* Hero Section */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-[#00D4AA] to-[#7C3AED] mb-6"
            >
              <Shield className="w-10 h-10 text-white" />
            </motion.div>
            <h1 className="text-5xl font-bold mb-6 gradient-text">درباره توانا پروکسی</h1>
            <p className="text-xl opacity-70 leading-relaxed">
              بیش از یک دهه تجربه در ارائه خدمات VPN و پروکسی
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="card p-6 text-center"
                >
                  <Icon className="w-8 h-8 mx-auto mb-3 text-[#00D4AA]" />
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm opacity-70">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>

          {/* Story Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="card p-8 mb-16"
          >
            <h2 className="text-3xl font-bold mb-6">داستان ما</h2>
            <div className="space-y-4 text-lg leading-relaxed opacity-80">
              <p>
                توانا پروکسی در سال ۱۳۹۲ با هدف ارائه اینترنت آزاد و امن به کاربران ایرانی آغاز به کار کرد. 
                ما با درک نیازهای کاربران و تکیه بر تکنولوژی‌های روز دنیا، توانسته‌ایم یکی از پیشروترین ارائه‌دهندگان 
                خدمات VPN در منطقه باشیم.
              </p>
              <p>
                تیم ما متشکل از متخصصان شبکه، امنیت سایبری و توسعه نرم‌افزار است که با تجربه بیش از ۱۰ سال 
                در این حوزه، همواره در تلاش برای ارائه بهترین خدمات به شما هستیم.
              </p>
            </div>
          </motion.div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="card p-8"
            >
              <Target className="w-12 h-12 text-[#00D4AA] mb-4" />
              <h3 className="text-2xl font-bold mb-4">ماموریت ما</h3>
              <p className="opacity-80 leading-relaxed">
                فراهم کردن دسترسی آزاد، امن و نامحدود به اینترنت برای همه کاربران 
                با استفاده از بهترین تکنولوژی‌های موجود.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="card p-8"
            >
              <Award className="w-12 h-12 text-[#7C3AED] mb-4" />
              <h3 className="text-2xl font-bold mb-4">چشم‌انداز ما</h3>
              <p className="opacity-80 leading-relaxed">
                تبدیل شدن به شماره یک ارائه‌دهنده خدمات VPN در منطقه خاورمیانه 
                با تمرکز بر کیفیت، امنیت و پشتیبانی.
              </p>
            </motion.div>
          </div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="card p-8"
          >
            <h2 className="text-3xl font-bold mb-6">ارزش‌های ما</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="text-xl font-bold mb-3 text-[#00D4AA]">🔒 امنیت</h4>
                <p className="opacity-80">
                  حفاظت از حریم خصوصی و امنیت اطلاعات کاربران در اولویت اول ماست.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-3 text-[#7C3AED]">⚡ سرعت</h4>
                <p className="opacity-80">
                  ارائه بالاترین سرعت ممکن با استفاده از سرورهای قدرتمند و بهینه‌سازی شده.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-3 text-[#F59E0B]">💎 کیفیت</h4>
                <p className="opacity-80">
                  تعهد به ارائه خدمات باکیفیت و پشتیبانی ۲۴/۷ برای کاربران.
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
