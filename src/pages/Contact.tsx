import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { useLanguage, useTheme } from '../hooks';
import { Header, Footer } from '../components/organisms';
import { FloatingSupport } from '../components/ui';
import { useState } from 'react';

export function Contact() {
  const { language, toggleLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setSubmitMessage('پیام شما با موفقیت ارسال شد!');
    setIsSubmitting(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitMessage(''), 3000);
  };

  const contactMethods = [
    {
      icon: MessageCircle,
      title: 'تلگرام',
      value: '@panbehnet',
      link: 'https://t.me/panbehnet',
      color: 'blue',
    },
    {
      icon: Phone,
      title: 'تلفن پشتیبانی',
      value: '+98 990 112 0235',
      link: 'tel:+989901120235',
      color: 'green',
    },
    {
      icon: Mail,
      title: 'ایمیل',
      value: 'support@tawana.proxy',
      link: 'mailto:support@tawana.proxy',
      color: 'purple',
    },
    {
      icon: MessageCircle,
      title: 'پشتیبانی تلگرام',
      value: '@Rahbarusd',
      link: 'https://t.me/Rahbarusd',
      color: 'cyan',
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
            <h1 className="text-5xl font-bold mb-6 gradient-text">تماس با ما</h1>
            <p className="text-xl opacity-70">
              پشتیبانی ۲۴/۷ آماده پاسخگویی به شماست
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.a
                  key={index}
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="card p-6 text-center hover:scale-105 transition-transform"
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-${method.color}-500/10 flex items-center justify-center`}>
                    <Icon className={`w-8 h-8 text-${method.color}-500`} />
                  </div>
                  <h3 className="font-bold mb-2">{method.title}</h3>
                  <p className="text-sm opacity-70">{method.value}</p>
                </motion.a>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="card p-8"
            >
              <h2 className="text-3xl font-bold mb-6">ارسال پیام</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm mb-2">نام و نام خانوادگی</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="input"
                    placeholder="نام خود را وارد کنید"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2">ایمیل</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="input"
                    placeholder="example@email.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2">موضوع</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="input"
                    placeholder="موضوع پیام"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2">پیام</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="input min-h-[150px] resize-y"
                    placeholder="پیام خود را بنویسید..."
                    required
                  />
                </div>

                {submitMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-lg bg-green-500/10 text-green-500 text-center"
                  >
                    {submitMessage}
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                      در حال ارسال...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      ارسال پیام
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Info & Map */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-6"
            >
              <div className="card p-8">
                <h2 className="text-3xl font-bold mb-6">اطلاعات تماس</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-[#00D4AA] shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold mb-1">دفتر مرکزی</h4>
                      <p className="opacity-70">تهران، ایران</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-[#00D4AA] shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold mb-1">تلفن پشتیبانی</h4>
                      <p className="opacity-70" dir="ltr">+98 990 112 0235</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-[#00D4AA] shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold mb-1">ایمیل</h4>
                      <p className="opacity-70">support@tawana.proxy</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card p-8">
                <h3 className="text-xl font-bold mb-4">ساعات کاری</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="opacity-70">شنبه تا چهارشنبه</span>
                    <span className="font-bold">۹:۰۰ - ۱۸:۰۰</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="opacity-70">پنج‌شنبه</span>
                    <span className="font-bold">۹:۰۰ - ۱۳:۰۰</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="opacity-70">پشتیبانی آنلاین</span>
                    <span className="font-bold text-[#00D4AA]">۲۴/۷</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <Footer language={language} t={t} />
      <FloatingSupport />
    </div>
  );
}
