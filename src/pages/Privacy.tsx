import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Database, CheckCircle, XCircle } from 'lucide-react';
import { useLanguage, useTheme } from '../hooks';
import { Header, Footer } from '../components/organisms';
import { FloatingSupport } from '../components/ui';

export function Privacy() {
  const { language, toggleLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const sections = [
    {
      icon: Shield,
      title: 'سیاست حفظ حریم خصوصی',
      content: [
        'توانا پروکسی متعهد به حفاظت از حریم خصوصی کاربران خود است.',
        'ما از پروتکل‌های امنیتی پیشرفته برای محافظت از اطلاعات شما استفاده می‌کنیم.',
        'تمامی ارتباطات با سرورهای ما رمزنگاری شده و امن است.',
        'هیچ‌گونه اطلاعات شخصی شما به اشتراک گذاشته یا فروخته نمی‌شود.',
      ],
    },
    {
      icon: Eye,
      title: 'سیاست No-Log',
      content: [
        'ما هیچ‌گونه لاگ از فعالیت‌های اینترنتی شما نگه نمی‌داریم.',
        'آدرس IP، تاریخچه مرور، و داده‌های ترافیکی شما ثبت نمی‌شود.',
        'تنها اطلاعات پایه حساب کاربری برای ارائه سرویس نگهداری می‌شود.',
        'حتی در صورت درخواست، قادر به ارائه لاگ فعالیت کاربران نیستیم.',
      ],
    },
    {
      icon: Database,
      title: 'داده‌های جمع‌آوری شده',
      content: [
        'ایمیل: برای احراز هویت و ارتباطات مهم',
        'اطلاعات پرداخت: برای پردازش تراکنش‌ها (توسط درگاه‌های امن)',
        'اطلاعات دستگاه: نوع دستگاه و سیستم‌عامل برای پشتیبانی بهتر',
        'اطلاعات استفاده: حجم مصرفی و تعداد اتصالات (بدون جزئیات)',
      ],
    },
    {
      icon: Lock,
      title: 'امنیت اطلاعات',
      content: [
        'استفاده از رمزنگاری AES-256 برای محافظت از داده‌ها',
        'احراز هویت دو مرحله‌ای برای حساب کاربری',
        'سرورهای امن با استانداردهای بین‌المللی',
        'بررسی‌های امنیتی منظم و به‌روزرسانی‌های دوره‌ای',
      ],
    },
  ];

  const dataCollected = [
    { icon: CheckCircle, text: 'ایمیل حساب کاربری', collected: true },
    { icon: CheckCircle, text: 'اطلاعات پرداخت (رمزنگاری شده)', collected: true },
    { icon: CheckCircle, text: 'نوع دستگاه و سیستم‌عامل', collected: true },
    { icon: CheckCircle, text: 'حجم مصرفی کلی', collected: true },
    { icon: XCircle, text: 'تاریخچه مرور و URL‌ها', collected: false },
    { icon: XCircle, text: 'آدرس IP واقعی', collected: false },
    { icon: XCircle, text: 'لاگ فعالیت‌های اینترنتی', collected: false },
    { icon: XCircle, text: 'محتوای ترافیک', collected: false },
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
          {/* Hero */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-[#00D4AA] to-[#7C3AED] mb-6"
            >
              <Shield className="w-10 h-10 text-white" />
            </motion.div>
            <h1 className="text-5xl font-bold mb-6 gradient-text">حریم خصوصی</h1>
            <p className="text-xl opacity-70">
              حفاظت از حریم خصوصی شما اولویت اول ماست
            </p>
          </div>

          {/* No-Log Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="card p-6 mb-8 text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-2">
              <Eye className="w-6 h-6 text-[#00D4AA]" />
              <h3 className="text-2xl font-bold">سیاست No-Log صد در صد</h3>
            </div>
            <p className="opacity-70">
              ما هیچ‌گونه لاگ از فعالیت‌های آنلاین شما نگه نمی‌داریم
            </p>
          </motion.div>

          {/* Data Collection Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="card p-8 mb-8"
          >
            <h2 className="text-3xl font-bold mb-6 text-center">چه داده‌هایی جمع‌آوری می‌شود؟</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {dataCollected.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: item.collected ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * index }}
                    className={`flex items-center gap-3 p-4 rounded-xl ${
                      item.collected 
                        ? 'bg-[#00D4AA]/10 border border-[#00D4AA]/20' 
                        : 'bg-gray-500/10 border border-gray-500/20'
                    }`}
                  >
                    <Icon
                      className={`w-5 h-5 shrink-0 ${
                        item.collected ? 'text-[#00D4AA]' : 'text-gray-500'
                      }`}
                    />
                    <span className="text-sm">{item.text}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Sections */}
          <div className="space-y-6">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * (index + 5) }}
                  className="card p-8"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 shrink-0 rounded-xl bg-gradient-to-r from-[#00D4AA] to-[#7C3AED] flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold mt-2">{section.title}</h2>
                  </div>
                  <ul className="space-y-3">
                    {section.content.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-[#00D4AA] mt-1.5">•</span>
                        <span className="opacity-80 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="text-center mt-8"
          >
            <p className="opacity-70 mb-4">سوالی در مورد حریم خصوصی دارید؟</p>
            <a
              href="https://t.me/Rahbarusd"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              تماس با پشتیبانی
            </a>
          </motion.div>

          {/* Last Updated */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="text-center mt-8 opacity-60 text-sm"
          >
            آخرین بروزرسانی: ۱۵ آذر ۱۴۰۳
          </motion.div>
        </motion.div>
      </div>

      <Footer language={language} t={t} />
      <FloatingSupport />
    </div>
  );
}
