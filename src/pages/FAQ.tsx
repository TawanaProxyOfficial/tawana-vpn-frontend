import { motion } from 'framer-motion';
import { useLanguage, useTheme } from '../hooks';
import { Header, Footer, FAQSection as FAQSectionComponent } from '../components/organisms';
import { FloatingSupport, ScrollProgress } from '../components/ui';

export function FAQ() {
  const { language, toggleLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

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

      <div className="pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto px-4 py-12 text-center"
        >
          <h1 className="text-5xl font-bold mb-6 gradient-text">
            سوالات متداول
          </h1>
          <p className="text-xl opacity-70 mb-8 max-w-2xl mx-auto">
            پاسخ سوالات رایج کاربران را اینجا بیابید
          </p>
        </motion.div>

        <FAQSectionComponent language={language} t={t} />

        {/* Support CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container mx-auto px-4 py-16"
        >
          <div className="card p-12 text-center bg-gradient-to-br from-[#00D4AA]/10 to-[#7C3AED]/10 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              سوال دیگری دارید؟
            </h2>
            <p className="text-lg opacity-70 mb-8">
              تیم پشتیبانی ما 24/7 آماده پاسخگویی به سوالات شماست
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="https://t.me/Rahbarusd" target="_blank" rel="noopener noreferrer" className="btn-primary">
                تماس با پشتیبانی
              </a>
              <a href="/contact" className="btn-secondary">
                فرم تماس
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <Footer language={language} t={t} />
      <FloatingSupport />
    </div>
  );
}
