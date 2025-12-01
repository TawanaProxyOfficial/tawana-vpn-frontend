import { motion } from 'framer-motion';
import { useLanguage, useTheme } from '../hooks';
import { Header, Footer, PricingSection as PricingSectionComponent } from '../components/organisms';
import { FloatingSupport, ScrollProgress } from '../components/ui';

export function Pricing() {
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
            تعرفه‌های توانا پروکسی
          </h1>
          <p className="text-xl opacity-70 mb-8 max-w-2xl mx-auto">
            پلن مناسب خود را انتخاب کنید و از اینترنت آزاد لذت ببرید
          </p>
        </motion.div>

        <PricingSectionComponent language={language} t={t} />

        {/* Additional Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container mx-auto px-4 py-16"
        >
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="card p-6 text-center">
              <div className="text-4xl mb-3">🔒</div>
              <h3 className="font-bold mb-2">پرداخت امن</h3>
              <p className="text-sm opacity-70">
                درگاه پرداخت معتبر و امن
              </p>
            </div>
            <div className="card p-6 text-center">
              <div className="text-4xl mb-3">💎</div>
              <h3 className="font-bold mb-2">ضمانت بازگشت وجه</h3>
              <p className="text-sm opacity-70">
                7 روز ضمانت بازگشت پول
              </p>
            </div>
            <div className="card p-6 text-center">
              <div className="text-4xl mb-3">🎁</div>
              <h3 className="font-bold mb-2">تخفیف‌های ویژه</h3>
              <p className="text-sm opacity-70">
                تخفیف‌های دوره‌ای و ویژه
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <Footer language={language} t={t} />
      <FloatingSupport />
    </div>
  );
}
