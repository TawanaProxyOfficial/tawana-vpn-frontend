import { motion } from 'framer-motion';
import { Shield, AlertCircle, FileText, CheckCircle } from 'lucide-react';
import { useLanguage, useTheme } from '../hooks';
import { Header, Footer } from '../components/organisms';
import { FloatingSupport } from '../components/ui';

export function Terms() {
  const { language, toggleLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const sections = [
    {
      icon: FileText,
      title: 'قوانین استفاده از سرویس',
      content: [
        'استفاده از سرویس توانا پروکسی به معنای پذیرش کامل شرایط و قوانین است.',
        'کاربران متعهد می‌شوند از سرویس صرفاً برای اهداف قانونی استفاده کنند.',
        'هرگونه سوء استفاده از سرویس منجر به تعلیق یا لغو حساب کاربری خواهد شد.',
      ],
    },
    {
      icon: Shield,
      title: 'محدودیت‌ها',
      content: [
        'استفاده از سرویس برای فعالیت‌های غیرقانونی ممنوع است.',
        'اشتراک گذاری حساب کاربری با افراد دیگر مجاز نیست.',
        'استفاده از سرویس برای حملات DDoS یا هرگونه فعالیت مخرب ممنوع است.',
        'ارسال اسپم یا محتوای مزاحم از طریق سرویس ممنوع است.',
      ],
    },
    {
      icon: AlertCircle,
      title: 'مسئولیت‌ها',
      content: [
        'توانا پروکسی مسئولیتی در قبال نحوه استفاده کاربران از سرویس ندارد.',
        'کاربران مسئول تمامی فعالیت‌های انجام شده از طریق حساب کاربری خود هستند.',
        'توانا پروکسی در صورت درخواست مقامات قانونی، ملزم به همکاری است.',
        'سرویس "همانطور که هست" ارائه می‌شود و هیچ تضمینی در مورد دسترسی ۱۰۰٪ وجود ندارد.',
      ],
    },
    {
      icon: CheckCircle,
      title: 'حقوق کاربر',
      content: [
        'کاربران حق دارند در صورت عدم رضایت، طبق سیاست بازگشت وجه، درخواست استرداد دهند.',
        'حریم خصوصی کاربران محفوظ است و اطلاعات آن‌ها محرمانه نگه داشته می‌شود.',
        'کاربران می‌توانند در هر زمان حساب کاربری خود را حذف کنند.',
        'پشتیبانی ۲۴/۷ برای پاسخگویی به سوالات و مشکلات کاربران در دسترس است.',
      ],
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
              <FileText className="w-10 h-10 text-white" />
            </motion.div>
            <h1 className="text-5xl font-bold mb-6 gradient-text">قوانین و مقررات</h1>
            <p className="text-xl opacity-70">
              لطفاً قبل از استفاده از سرویس، شرایط و قوانین را مطالعه کنید
            </p>
          </div>

          {/* Last Updated */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="card p-6 mb-8 text-center"
          >
            <p className="text-sm opacity-70">
              آخرین بروزرسانی: <span className="font-bold">۱۵ آذر ۱۴۰۳</span>
            </p>
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
                  transition={{ delay: 0.1 * (index + 4) }}
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

          {/* Agreement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="card p-8 mt-8 text-center"
          >
            <p className="text-lg opacity-80 leading-relaxed">
              با استفاده از سرویس توانا پروکسی، شما تایید می‌کنید که این قوانین را خوانده و
              می‌پذیرید. در صورت عدم پذیرش، لطفاً از سرویس استفاده نکنید.
            </p>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="text-center mt-8"
          >
            <p className="opacity-70 mb-4">سوالی دارید؟ با پشتیبانی ما تماس بگیرید</p>
            <a
              href="https://t.me/Rahbarusd"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              تماس با پشتیبانی
            </a>
          </motion.div>
        </motion.div>
      </div>

      <Footer language={language} t={t} />
      <FloatingSupport />
    </div>
  );
}
