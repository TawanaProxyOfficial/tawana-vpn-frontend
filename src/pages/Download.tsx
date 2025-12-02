import { motion } from 'framer-motion';
import { Download as DownloadIcon, Smartphone, Monitor, Apple, Chrome, Terminal, QrCode, Copy, Check, CheckCircle } from 'lucide-react';
import { useLanguage, useTheme } from '../hooks';
import { Header, Footer } from '../components/organisms';
import { FloatingSupport } from '../components/ui';
import { LINKS } from '../config/links';
import { useState } from 'react';

export function Download() {
  const { language, toggleLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [copiedConfig, setCopiedConfig] = useState(false);

  const platforms = [
    {
      name: 'اندروید',
      icon: Smartphone,
      version: 'نسخه ۲.۵.۰',
      size: '۱۵ مگابایت',
      description: 'برای اندروید ۵.۰ به بالا',
      link: LINKS.DOWNLOAD_ANDROID,
      color: 'green',
      badge: 'محبوب',
    },
    {
      name: 'iOS',
      icon: Apple,
      version: 'نسخه ۲.۴.۵',
      size: '۱۸ مگابایت',
      description: 'برای iOS ۱۳ به بالا',
      link: LINKS.DOWNLOAD_IOS,
      color: 'gray',
    },
    {
      name: 'ویندوز',
      icon: Monitor,
      version: 'نسخه ۳.۲.۱',
      size: '۲۵ مگابایت',
      description: 'برای ویندوز ۱۰ و ۱۱',
      link: LINKS.DOWNLOAD_WINDOWS,
      color: 'blue',
    },
    {
      name: 'macOS',
      icon: Apple,
      version: 'نسخه ۲.۴.۵',
      size: '۲۰ مگابایت',
      description: 'برای macOS ۱۱ به بالا',
      link: LINKS.DOWNLOAD_MAC,
      color: 'purple',
    },
    {
      name: 'لینوکس',
      icon: Terminal,
      version: 'نسخه ۲.۳.۰',
      size: '۱۸ مگابایت',
      description: 'Ubuntu, Debian, Arch',
      link: LINKS.DOWNLOAD_LINUX,
      color: 'orange',
    },
    {
      name: 'افزونه کروم',
      icon: Chrome,
      version: 'نسخه ۱.۸.۲',
      size: '۵ مگابایت',
      description: 'Chrome, Edge, Brave',
      link: LINKS.DOWNLOAD_CHROME,
      color: 'yellow',
    },
  ];

  const xrayConfig = `{
  "inbounds": [{
    "port": 10808,
    "protocol": "socks",
    "settings": {
      "udp": true
    }
  }],
  "outbounds": [{
    "protocol": "vless",
    "settings": {
      "vnext": [{
        "address": "your-server.com",
        "port": 443,
        "users": [{
          "id": "your-uuid-here",
          "encryption": "none"
        }]
      }]
    }
  }]
}`;

  const copyConfig = () => {
    navigator.clipboard.writeText(xrayConfig);
    setCopiedConfig(true);
    setTimeout(() => setCopiedConfig(false), 2000);
  };

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
                  className="card p-8 relative overflow-hidden"
                >
                  {platform.badge && (
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-gradient-to-r from-[#00D4AA] to-[#7C3AED] text-white text-xs font-bold">
                      {platform.badge}
                    </div>
                  )}
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 shrink-0 rounded-2xl bg-gradient-to-br from-[#00D4AA]/10 to-[#7C3AED]/10 flex items-center justify-center border border-[#00D4AA]/20">
                      <Icon className="w-8 h-8 text-[#00D4AA]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">{platform.name}</h3>
                      <p className="text-sm opacity-70 mb-4">{platform.description}</p>
                      <div className="flex items-center gap-4 text-sm opacity-60 mb-4">
                        <span>{platform.version}</span>
                        <span>•</span>
                        <span>{platform.size}</span>
                      </div>
                      <a
                        href={platform.link}
                        className="btn-primary flex items-center gap-2 inline-flex"
                      >
                        <DownloadIcon className="w-5 h-5" />
                        دانلود
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* QR Code Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="card p-8 mb-16"
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <QrCode className="w-8 h-8 text-[#00D4AA]" />
                  <h2 className="text-3xl font-bold">دانلود سریع با QR Code</h2>
                </div>
                <p className="text-lg opacity-80 mb-6 leading-relaxed">
                  کد QR را با دوربین گوشی خود اسکن کنید و مستقیماً به صفحه دانلود اپلیکیشن بروید.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-sm opacity-70">
                    <CheckCircle className="w-5 h-5 text-[#00D4AA]" />
                    <span>نصب آسان</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm opacity-70">
                    <CheckCircle className="w-5 h-5 text-[#00D4AA]" />
                    <span>دانلود مستقیم</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm opacity-70">
                    <CheckCircle className="w-5 h-5 text-[#00D4AA]" />
                    <span>بدون نیاز به لینک</span>
                  </div>
                </div>
              </div>
              <div className="w-48 h-48 rounded-2xl p-4 flex items-center justify-center shadow-2xl border-2 dark:bg-white dark:border-white light:bg-gray-100 light:border-gray-300">
                <div className="text-center">
                  <QrCode className="w-32 h-32 text-gray-800 mx-auto mb-2" />
                  <p className="text-xs text-gray-600">اسکن کنید</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Xray Config Guide */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="card p-8 mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <Terminal className="w-8 h-8 text-[#00D4AA]" />
              <h2 className="text-3xl font-bold">راهنمای استفاده از Xray Config</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-bold mb-3">نحوه استفاده:</h4>
                <ol className="space-y-2 opacity-80">
                  <li className="flex items-start gap-3">
                    <span className="text-[#00D4AA] font-bold">۱.</span>
                    <span>فایل کانفیگ Xray یا V2Ray را از پنل کاربری خود دانلود کنید</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#00D4AA] font-bold">۲.</span>
                    <span>کلاینت مناسب سیستم‌عامل خود را دانلود و نصب کنید</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#00D4AA] font-bold">۳.</span>
                    <span>فایل کانفیگ را در کلاینت import کنید یا لینک subscription را اضافه کنید</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#00D4AA] font-bold">۴.</span>
                    <span>روی Connect کلیک کنید و از اینترنت آزاد لذت ببرید!</span>
                  </li>
                </ol>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-3">نمونه کانفیگ Xray:</h4>
                <div className="relative">
                  <pre className="bg-black/50 p-6 rounded-xl overflow-x-auto text-sm border border-[#00D4AA]/20">
                    <code className="text-green-400">{xrayConfig}</code>
                  </pre>
                  <button
                    onClick={copyConfig}
                    className="absolute top-4 left-4 p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all"
                    title="کپی کانفیگ"
                  >
                    {copiedConfig ? (
                      <Check className="w-5 h-5 text-[#00D4AA]" />
                    ) : (
                      <Copy className="w-5 h-5" />
                    )}
                  </button>
                </div>
                <p className="text-sm opacity-60 mt-3">
                  * این یک نمونه کانفیگ است. کانفیگ واقعی خود را از پنل کاربری دریافت کنید.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-3">کلاینت‌های پیشنهادی:</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-[#00D4AA]/10 to-[#7C3AED]/10 border border-[#00D4AA]/20">
                    <h5 className="font-bold mb-2">اندروید</h5>
                    <p className="text-sm opacity-70">V2RayNG, V2RayN</p>
                  </div>
                  <div className="p-4 rounded-xl bg-gradient-to-br from-[#00D4AA]/10 to-[#7C3AED]/10 border border-[#00D4AA]/20">
                    <h5 className="font-bold mb-2">iOS</h5>
                    <p className="text-sm opacity-70">Shadowrocket, Quantumult</p>
                  </div>
                  <div className="p-4 rounded-xl bg-gradient-to-br from-[#00D4AA]/10 to-[#7C3AED]/10 border border-[#00D4AA]/20">
                    <h5 className="font-bold mb-2">ویندوز/مک</h5>
                    <p className="text-sm opacity-70">V2RayN, Qv2ray, Clash</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

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

          {/* Support Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="text-center"
          >
            <p className="text-lg opacity-70 mb-6">
              نیاز به راهنمایی دارید؟ تیم پشتیبانی ما آماده کمک به شماست
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={LINKS.TELEGRAM_SUPPORT}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                پشتیبانی تلگرام
              </a>
              <a
                href={LINKS.TELEGRAM_CHANNEL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                کانال تلگرام
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <Footer language={language} t={t} />
      <FloatingSupport />
    </div>
  );
}
