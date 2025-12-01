import { useState } from 'react';
import { motion } from 'framer-motion';
import { useAdminStore } from '../stores/adminStore';
import { Button, Icon, Input } from '../components/atoms';
import { cn } from '../utils/helpers';

export function Admin() {
  const {
    isAuthenticated,
    login,
    logout,
    plans,
    faqs,
    settings,
    updateSettings,
    resetToDefaults,
  } = useAdminStore();

  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);
  const [activeTab, setActiveTab] = useState<'plans' | 'faqs' | 'settings'>('plans');
  const [editMessage, setEditMessage] = useState<string | null>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const success = login(password);
    if (!success) {
      setLoginError(true);
      setTimeout(() => setLoginError(false), 2000);
    }
  };

  const showEditMessage = () => {
    setEditMessage('ویرایش در نسخه بعدی اضافه خواهد شد');
    setTimeout(() => setEditMessage(null), 2000);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center dark:bg-[#0a0a0a] light:bg-gray-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className={cn(
            'w-full max-w-md p-8 rounded-2xl',
            'dark:bg-white/5 dark:border dark:border-white/10',
            'light:bg-white light:border light:border-gray-200 light:shadow-xl'
          )}
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500/20 to-cyan-500/20 mb-4">
              <Icon name="Lock" size={32} className="text-green-400" />
            </div>
            <h1 className="text-2xl font-bold dark:text-white light:text-gray-900">
              پنل ادمین
            </h1>
            <p className="text-sm dark:text-gray-400 light:text-gray-500 mt-2">
              Admin Panel
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="رمز عبور"
              icon={<Icon name="Key" size={20} />}
              className={loginError ? 'border-red-500' : ''}
            />
            {loginError && (
              <p className="text-red-400 text-sm text-center">رمز عبور اشتباه است</p>
            )}
            <Button type="submit" variant="primary" className="w-full">
              <Icon name="LogIn" size={18} />
              ورود
            </Button>
          </form>
        </motion.div>
      </div>
    );
  }

  const tabs = [
    { id: 'plans', label: 'پلن‌ها', icon: 'Package' },
    { id: 'faqs', label: 'سوالات متداول', icon: 'HelpCircle' },
    { id: 'settings', label: 'تنظیمات', icon: 'Settings' },
  ] as const;

  return (
    <div className="min-h-screen dark:bg-[#0a0a0a] light:bg-gray-50">
      {/* Header */}
      <header className={cn(
        'sticky top-0 z-50 backdrop-blur-xl border-b',
        'dark:bg-black/80 dark:border-white/10',
        'light:bg-white/80 light:border-gray-200'
      )}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-cyan-500 flex items-center justify-center">
                <Icon name="Shield" size={24} className="text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">پنل ادمین</span>
            </div>
            <Button variant="ghost" size="sm" onClick={logout}>
              <Icon name="LogOut" size={18} />
              خروج
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Tabs */}
        <div className="flex gap-2 mb-8">
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              variant={activeTab === tab.id ? 'primary' : 'secondary'}
              size="sm"
              onClick={() => setActiveTab(tab.id)}
            >
              <Icon name={tab.icon} size={18} />
              {tab.label}
            </Button>
          ))}
        </div>

        {/* Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={cn(
            'p-6 rounded-2xl',
            'dark:bg-white/5 dark:border dark:border-white/10',
            'light:bg-white light:border light:border-gray-200 light:shadow-lg'
          )}
        >
          {activeTab === 'plans' && (
            <div>
              <h2 className="text-xl font-bold dark:text-white light:text-gray-900 mb-6">
                مدیریت پلن‌ها
              </h2>
              <div className="space-y-4">
                {editMessage && (
                  <div className="p-3 rounded-xl bg-yellow-500/20 text-yellow-500 text-sm text-center">
                    {editMessage}
                  </div>
                )}
                {plans.map((plan) => (
                  <div
                    key={plan.id}
                    className={cn(
                      'p-4 rounded-xl flex items-center justify-between',
                      'dark:bg-white/5 dark:border dark:border-white/10',
                      'light:bg-gray-50 light:border light:border-gray-200'
                    )}
                  >
                    <div>
                      <h3 className="font-semibold dark:text-white light:text-gray-900">
                        {plan.name.fa}
                      </h3>
                      <p className="text-sm dark:text-gray-400 light:text-gray-500">
                        {plan.traffic} | {plan.priceDisplay.fa}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm" onClick={showEditMessage} title="ویرایش (بزودی)">
                        <Icon name="Edit" size={16} />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'faqs' && (
            <div>
              <h2 className="text-xl font-bold dark:text-white light:text-gray-900 mb-6">
                مدیریت سوالات متداول
              </h2>
              <div className="space-y-4">
                {faqs.map((faq) => (
                  <div
                    key={faq.id}
                    className={cn(
                      'p-4 rounded-xl',
                      'dark:bg-white/5 dark:border dark:border-white/10',
                      'light:bg-gray-50 light:border light:border-gray-200'
                    )}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold dark:text-white light:text-gray-900 mb-2">
                          {faq.question.fa}
                        </h3>
                        <p className="text-sm dark:text-gray-400 light:text-gray-500 line-clamp-2">
                          {faq.answer.fa}
                        </p>
                      </div>
                      <Button variant="ghost" size="sm" onClick={showEditMessage} title="ویرایش (بزودی)">
                        <Icon name="Edit" size={16} />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div>
              <h2 className="text-xl font-bold dark:text-white light:text-gray-900 mb-6">
                تنظیمات
              </h2>
              <div className="space-y-6 max-w-md">
                <div>
                  <label className="block text-sm font-medium dark:text-gray-300 light:text-gray-700 mb-2">
                    لینک تلگرام
                  </label>
                  <Input
                    value={settings.telegramLink}
                    onChange={(e) => updateSettings({ telegramLink: e.target.value })}
                    placeholder="https://t.me/..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium dark:text-gray-300 light:text-gray-700 mb-2">
                    لینک پرداخت
                  </label>
                  <Input
                    value={settings.paymentLink}
                    onChange={(e) => updateSettings({ paymentLink: e.target.value })}
                    placeholder="https://..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium dark:text-gray-300 light:text-gray-700 mb-2">
                    متن لوگو
                  </label>
                  <Input
                    value={settings.logoText}
                    onChange={(e) => updateSettings({ logoText: e.target.value })}
                    placeholder="TawanaProxy"
                  />
                </div>
                <div className="pt-4 border-t dark:border-white/10 light:border-gray-200">
                  <Button
                    variant="secondary"
                    onClick={resetToDefaults}
                    className="text-red-400"
                  >
                    <Icon name="RotateCcw" size={18} />
                    بازگشت به پیش‌فرض
                  </Button>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
