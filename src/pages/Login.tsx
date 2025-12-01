import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, Shield } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

type AuthMode = 'login' | 'register';

export function Login() {
  const [mode, setMode] = useState<AuthMode>('login');
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  
  const { login, register, loginWithGoogle, loginWithTelegram } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    try {
      if (mode === 'login') {
        const result = await login({ email, password });
        setMessage(result.message);
        if (result.success) {
          setTimeout(() => navigate('/dashboard'), 1000);
        }
      } else {
        const result = await register({ name, email, password });
        setMessage(result.message);
        if (result.success) {
          setTimeout(() => navigate('/dashboard'), 1000);
        }
      }
    } catch (error) {
      setMessage('خطا در عملیات');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    const result = await loginWithGoogle();
    setMessage(result.message);
    if (result.success) {
      setTimeout(() => navigate('/dashboard'), 1000);
    }
    setIsLoading(false);
  };

  const handleTelegramLogin = async () => {
    setIsLoading(true);
    const result = await loginWithTelegram();
    setMessage(result.message);
    if (result.success) {
      setTimeout(() => navigate('/dashboard'), 1000);
    }
    setIsLoading(false);
  };



  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 gradient-mesh opacity-30" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00D4AA]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#7C3AED]/10 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-md"
      >
        {/* Logo */}
        <Link to="/" className="block mb-8 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="inline-flex items-center gap-3"
          >
            <Shield className="w-12 h-12 text-[#00D4AA]" />
            <span className="text-3xl font-bold gradient-text">توانا پروکسی</span>
          </motion.div>
        </Link>

        {/* Auth Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="card p-8"
        >
          {/* Mode Toggle */}
          <div className="flex rounded-xl bg-white/5 p-1 mb-8">
            <button
              onClick={() => setMode('login')}
              className={`flex-1 py-3 rounded-lg font-semibold transition-all ${
                mode === 'login'
                  ? 'bg-[#00D4AA] text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              ورود
            </button>
            <button
              onClick={() => setMode('register')}
              className={`flex-1 py-3 rounded-lg font-semibold transition-all ${
                mode === 'register'
                  ? 'bg-[#00D4AA] text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              ثبت‌نام
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === 'register' && (
              <div>
                <label className="block text-sm mb-2">نام و نام خانوادگی</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="input"
                  placeholder="نام خود را وارد کنید"
                  required
                />
              </div>
            )}

            <div>
              <label className="block text-sm mb-2">
                {mode === 'login' ? '📱 شماره موبایل یا ایمیل' : '📧 ایمیل'}
              </label>
              <div className="relative">
                <Mail className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 opacity-50" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input pr-10"
                  placeholder="example@email.com"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm mb-2">🔑 رمز عبور</label>
              <div className="relative">
                <Lock className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 opacity-50" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input pr-10 pl-10"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 opacity-50 hover:opacity-100 transition-opacity"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {message && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-3 rounded-lg text-sm ${
                  message.includes('موفق') ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'
                }`}
              >
                {message}
              </motion.div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="btn-primary w-full flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                  در حال پردازش...
                </>
              ) : (
                <>
                  🔓 {mode === 'login' ? 'ورود به حساب' : 'ثبت‌نام'}
                </>
              )}
            </button>
          </form>

          {mode === 'login' && (
            <div className="text-center mt-4">
              <button className="text-sm text-[#00D4AA] hover:underline">
                رمز عبور را فراموش کردم؟
              </button>
            </div>
          )}

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-white/10" />
            <span className="text-sm opacity-50">یا</span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={handleGoogleLogin}
              disabled={isLoading}
              className="btn-secondary py-3 flex items-center justify-center gap-2"
              title="Google"
            >
              🔵 Google
            </button>
            <button
              onClick={handleTelegramLogin}
              disabled={isLoading}
              className="btn-secondary py-3 flex items-center justify-center gap-2"
              title="Telegram"
            >
              📱 Telegram
            </button>
          </div>

          {/* Back to Home */}
          <div className="text-center mt-6">
            <Link to="/" className="text-sm opacity-70 hover:opacity-100 transition-opacity">
              ← بازگشت به صفحه اصلی
            </Link>
          </div>
        </motion.div>

        {/* Security Notice */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center mt-6 text-sm opacity-50"
        >
          🔐 اطلاعات شما با رمزنگاری SSL محافظت می‌شود
        </motion.div>
      </motion.div>
    </div>
  );
}
