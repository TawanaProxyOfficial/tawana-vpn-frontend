import { motion } from 'framer-motion';
import { DollarSign, Clock, FileCheck, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';
import { useLanguage, useTheme } from '../hooks';
import { Header, Footer } from '../components/organisms';
import { FloatingSupport } from '../components/ui';

export function Refund() {
  const { language, toggleLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const refundConditions = [
    {
      icon: CheckCircle,
      title: 'شرایط بازگشت وجه',
      items: [
        'درخواست در طی ۷ روز اول از خرید',
        'مشکل فنی غیرقابل حل با پشتیبانی',
        'عدم دسترسی به سرویس به دلیل محدودیت فنی',
        'عدم رضایت از کیفیت سرویس (در ۷۲ ساعت اول)',
      ],
      color: 'green',
    },
    {
      icon: XCircle,
      title: 'موارد عدم بازگشت وجه',
      items: [
        'استفاده بیش از ۵۰٪ از حجم یا زمان اشتراک',
        'نقض قوانین و مقررات سرویس',
        'گذشت بیش از ۷ روز از تاریخ خرید',
        'خرید از طریق واسطه‌های غیرمجاز',
      ],
      color: 'red',
    },
  ];

  const refundSteps = [
    {
      step: '۱',
      title: 'ارسال درخواست',
      description: 'از طریق پشتیبانی تلگرام یا ایمیل درخواست خود را ارسال کنید',
    },
    {
      step: '۲',
      title: 'بررسی درخواست',
      description: 'تیم پشتیبانی درخواست شما را ظرف ۲۴ ساعت بررسی می‌کند',
    },
    {
      step: '۳',
      title: 'تایید و پردازش',
      description: 'در صورت تایید، مبلغ ظرف ۳ تا ۷ روز کاری به حساب شما بازگردانده می‌شود',
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
              <DollarSign className="w-10 h-10 text-white" />
            </motion.div>
            <h1 className="text-5xl font-bold mb-6 gradient-text">سیاست بازگشت وجه</h1>
            <p className="text-xl opacity-70">
              رضایت شما برای ما مهم است - گارانتی بازگشت وجه ۷ روزه
            </p>
          </div>

          {/* Guarantee Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="card p-8 mb-8 text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Clock className="w-8 h-8 text-[#00D4AA]" />
              <h3 className="text-3xl font-bold">گارانتی ۷ روزه</h3>
            </div>
            <p className="text-lg opacity-80 leading-relaxed">
              اگر در طی ۷ روز اول از سرویس راضی نبودید، بدون هیچ سوالی وجه شما بازگردانده می‌شود
            </p>
          </motion.div>

          {/* Conditions Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {refundConditions.map((condition, index) => {
              const Icon = condition.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + 0.1 * index }}
                  className="card p-8"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <Icon
                      className={`w-8 h-8 ${
                        condition.color === 'green' ? 'text-[#00D4AA]' : 'text-red-500'
                      }`}
                    />
                    <h3 className="text-2xl font-bold">{condition.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {condition.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span
                          className={`mt-1.5 ${
                            condition.color === 'green' ? 'text-[#00D4AA]' : 'text-red-500'
                          }`}
                        >
                          {condition.color === 'green' ? '✓' : '✗'}
                        </span>
                        <span className="opacity-80 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>

          {/* Refund Process */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="card p-8 mb-8"
          >
            <div className="flex items-center gap-3 mb-8">
              <FileCheck className="w-8 h-8 text-[#00D4AA]" />
              <h2 className="text-3xl font-bold">فرآیند بازگشت وجه</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {refundSteps.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + 0.1 * index }}
                  className="text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#00D4AA] to-[#7C3AED] flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">{item.step}</span>
                  </div>
                  <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                  <p className="text-sm opacity-70 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Important Notes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="card p-8 mb-8"
          >
            <div className="flex items-start gap-4 mb-6">
              <AlertTriangle className="w-8 h-8 text-[#F59E0B] shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold mb-4">نکات مهم</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-[#00D4AA] mt-1.5">•</span>
                    <span className="opacity-80 leading-relaxed">
                      بازگشت وجه به همان روش پرداخت اولیه انجام می‌شود
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#00D4AA] mt-1.5">•</span>
                    <span className="opacity-80 leading-relaxed">
                      زمان بازگشت وجه بسته به روش پرداخت متفاوت است (۳ تا ۷ روز کاری)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#00D4AA] mt-1.5">•</span>
                    <span className="opacity-80 leading-relaxed">
                      در صورت تایید بازگشت وجه، دسترسی به سرویس فوراً قطع می‌شود
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#00D4AA] mt-1.5">•</span>
                    <span className="opacity-80 leading-relaxed">
                      هزینه‌های تراکنش بانکی ممکن است از مبلغ بازگشتی کسر شود
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="text-center"
          >
            <p className="text-lg opacity-70 mb-6">
              برای درخواست بازگشت وجه یا سوالات بیشتر، با پشتیبانی تماس بگیرید
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://t.me/Rahbarusd"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                پشتیبانی تلگرام
              </a>
              <a href="mailto:support@tawana.proxy" className="btn-secondary">
                ارسال ایمیل
              </a>
            </div>
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
