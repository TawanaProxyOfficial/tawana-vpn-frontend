import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Server, 
  Download, 
  Upload, 
  Activity, 
  Clock, 
  Shield,
  LogOut,
  Settings,
  CreditCard
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useLanguage, useTheme } from '../hooks';
import { Header, Footer } from '../components/organisms';

export function Dashboard() {
  const { user, logout, isAuthenticated } = useAuth();
  const { language, toggleLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  if (!isAuthenticated) {
    navigate('/login');
    return null;
  }

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  // Mock data
  const stats = {
    dataUsed: '45.2 GB',
    dataTotal: '100 GB',
    daysLeft: 23,
    activeSessions: 2,
    avgSpeed: '125 Mbps',
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
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#00D4AA] to-[#7C3AED] flex items-center justify-center text-2xl font-bold text-white">
                {user?.name?.charAt(0) || 'U'}
              </div>
              <div>
                <h1 className="text-3xl font-bold">{user?.name}</h1>
                <p className="opacity-70">{user?.email}</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="btn-secondary flex items-center gap-2"
            >
              <LogOut className="w-5 h-5" />
              خروج
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="card p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <Download className="w-8 h-8 text-[#00D4AA]" />
                <span className="text-2xl font-bold">{stats.dataUsed}</span>
              </div>
              <div className="text-sm opacity-70">حجم مصرفی</div>
              <div className="mt-2 h-2 bg-white/10 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[#00D4AA]" 
                  style={{ width: '45%' }}
                />
              </div>
              <div className="text-xs opacity-50 mt-1">از {stats.dataTotal}</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="card p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <Clock className="w-8 h-8 text-[#7C3AED]" />
                <span className="text-2xl font-bold">{stats.daysLeft}</span>
              </div>
              <div className="text-sm opacity-70">روز باقیمانده</div>
              <div className="text-xs opacity-50 mt-2">تا تمدید اشتراک</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="card p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <Activity className="w-8 h-8 text-[#F59E0B]" />
                <span className="text-2xl font-bold">{stats.activeSessions}</span>
              </div>
              <div className="text-sm opacity-70">دستگاه متصل</div>
              <div className="text-xs opacity-50 mt-2">فعال در حال حاضر</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="card p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <Upload className="w-8 h-8 text-[#0ea5e9]" />
                <span className="text-2xl font-bold">{stats.avgSpeed}</span>
              </div>
              <div className="text-sm opacity-70">میانگین سرعت</div>
              <div className="text-xs opacity-50 mt-2">24 ساعت گذشته</div>
            </motion.div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Active Plan */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="lg:col-span-2 card p-6"
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Shield className="w-6 h-6 text-[#00D4AA]" />
                اشتراک فعال
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-xl bg-white/5">
                  <div>
                    <div className="font-bold text-lg">پلن طلایی - ۳ ماهه</div>
                    <div className="text-sm opacity-70 mt-1">فعال تا ۱۵ اسفند ۱۴۰۳</div>
                  </div>
                  <div className="text-2xl font-bold text-[#00D4AA]">۱۴۹,۰۰۰ تومان</div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-white/5">
                    <div className="text-sm opacity-70 mb-1">حجم اختصاصی</div>
                    <div className="font-bold">۱۰۰ گیگابایت</div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5">
                    <div className="text-sm opacity-70 mb-1">تعداد کاربر</div>
                    <div className="font-bold">۳ کاربر همزمان</div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5">
                    <div className="text-sm opacity-70 mb-1">لوکیشن</div>
                    <div className="font-bold">۸ کشور</div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5">
                    <div className="text-sm opacity-70 mb-1">پشتیبانی</div>
                    <div className="font-bold">۲۴/۷ اولویت دار</div>
                  </div>
                </div>

                <button className="btn-primary w-full">
                  تمدید اشتراک
                </button>
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="space-y-6"
            >
              <div className="card p-6">
                <h3 className="text-xl font-bold mb-4">دسترسی سریع</h3>
                <div className="space-y-3">
                  <button className="btn-secondary w-full flex items-center justify-start gap-3">
                    <Server className="w-5 h-5" />
                    سرورها
                  </button>
                  <button className="btn-secondary w-full flex items-center justify-start gap-3">
                    <Download className="w-5 h-5" />
                    دانلود اپلیکیشن
                  </button>
                  <button className="btn-secondary w-full flex items-center justify-start gap-3">
                    <Settings className="w-5 h-5" />
                    تنظیمات
                  </button>
                  <button className="btn-secondary w-full flex items-center justify-start gap-3">
                    <CreditCard className="w-5 h-5" />
                    تاریخچه پرداخت
                  </button>
                </div>
              </div>

              <div className="card p-6 bg-gradient-to-br from-[#00D4AA]/20 to-[#7C3AED]/20">
                <h3 className="text-xl font-bold mb-2">🎁 پاداش وفاداری</h3>
                <p className="text-sm opacity-70 mb-4">
                  با دعوت از دوستان، ۱ ماه رایگان دریافت کنید!
                </p>
                <button className="btn-primary w-full">
                  دعوت از دوستان
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <Footer language={language} t={t} />
    </div>
  );
}
