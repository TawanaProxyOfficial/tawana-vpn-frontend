import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CreditCard, Smartphone, Bitcoin, DollarSign, Shield, Lock } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useLanguage, useTheme } from '../hooks';
import { useState } from 'react';
import { Header, Footer } from '../components/organisms';

type PaymentMethod = 'bank' | 'crypto' | 'perfectmoney' | 'card';

export function Checkout() {
  const { total, discount, items } = useCart();
  const { language, toggleLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod>('bank');
  const [isProcessing, setIsProcessing] = useState(false);

  const finalTotal = total * (1 - discount);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fa-IR').format(price);
  };

  const paymentMethods = [
    {
      id: 'bank' as PaymentMethod,
      name: 'درگاه بانکی (زرینپال)',
      icon: CreditCard,
      description: 'پرداخت امن با کارت‌های بانکی',
    },
    {
      id: 'crypto' as PaymentMethod,
      name: 'ارز دیجیتال',
      icon: Bitcoin,
      description: 'USDT, BTC, ETH',
    },
    {
      id: 'perfectmoney' as PaymentMethod,
      name: 'پرفکت مانی',
      icon: DollarSign,
      description: 'Perfect Money',
    },
    {
      id: 'card' as PaymentMethod,
      name: 'کارت به کارت',
      icon: Smartphone,
      description: 'انتقال مستقیم بانکی',
    },
  ];

  const handlePayment = async () => {
    setIsProcessing(true);
    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsProcessing(false);
    // Redirect to success page or show success message
  };

  if (items.length === 0) {
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
            className="text-center max-w-md mx-auto"
          >
            <h2 className="text-3xl font-bold mb-4">سبد خرید خالی است</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-8">
              لطفاً ابتدا یک پلن انتخاب کنید
            </p>
            <Link to="/" className="btn-primary">
              بازگشت به صفحه اصلی
            </Link>
          </motion.div>
        </div>
        <Footer language={language} t={t} />
      </div>
    );
  }

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
          <h1 className="text-4xl font-bold mb-8 flex items-center gap-3">
            <Lock className="w-10 h-10 text-[#00D4AA]" />
            پرداخت امن
          </h1>

          <div className="grid gap-6 lg:grid-cols-3">
            {/* Payment Methods */}
            <div className="lg:col-span-2 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="card p-6"
              >
                <h2 className="text-2xl font-bold mb-6">💳 انتخاب روش پرداخت</h2>
                <div className="space-y-3">
                  {paymentMethods.map((method) => {
                    const Icon = method.icon;
                    return (
                      <button
                        key={method.id}
                        onClick={() => setSelectedMethod(method.id)}
                        className={`w-full p-4 rounded-xl border-2 transition-all text-right flex items-center gap-4 ${
                          selectedMethod === method.id
                            ? 'border-[#00D4AA] bg-[#00D4AA]/10'
                            : 'border-white/10 hover:border-white/20'
                        }`}
                      >
                        <div
                          className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                            selectedMethod === method.id
                              ? 'bg-[#00D4AA] text-white'
                              : 'bg-white/5'
                          }`}
                        >
                          <Icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <div className="font-bold">{method.name}</div>
                          <div className="text-sm opacity-70">{method.description}</div>
                        </div>
                        <div
                          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                            selectedMethod === method.id
                              ? 'border-[#00D4AA]'
                              : 'border-white/20'
                          }`}
                        >
                          {selectedMethod === method.id && (
                            <div className="w-3 h-3 rounded-full bg-[#00D4AA]" />
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </motion.div>

              {/* Security Badges */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="flex items-center justify-center gap-6 text-sm opacity-70"
              >
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-500" />
                  SSL Secured
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-5 h-5 text-blue-500" />
                  PCI Compliant
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-purple-500" />
                  256-bit Encryption
                </div>
              </motion.div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="card p-6 sticky top-24"
              >
                <h3 className="text-xl font-bold mb-6">خلاصه سفارش</h3>

                <div className="space-y-3 mb-6">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span className="opacity-70">
                        {item.name} × {item.quantity}
                      </span>
                      <span>{formatPrice(item.price * item.quantity)} تومان</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 mb-6 pb-6 border-b border-white/10">
                  <div className="flex justify-between">
                    <span>جمع جزء</span>
                    <span className="font-semibold">{formatPrice(total)} تومان</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-green-500">
                      <span>تخفیف ({Math.round(discount * 100)}%)</span>
                      <span className="font-semibold">
                        -{formatPrice(total * discount)} تومان
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex justify-between text-xl font-bold mb-6">
                  <span>قابل پرداخت</span>
                  <span className="text-[#00D4AA]">{formatPrice(finalTotal)} تومان</span>
                </div>

                <button
                  onClick={handlePayment}
                  disabled={isProcessing}
                  className="btn-primary w-full flex items-center justify-center gap-2"
                >
                  {isProcessing ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                      در حال پردازش...
                    </>
                  ) : (
                    <>
                      <Lock className="w-5 h-5" />
                      پرداخت امن
                    </>
                  )}
                </button>

                <Link
                  to="/cart"
                  className="btn-secondary w-full flex items-center justify-center gap-2 mt-3"
                >
                  بازگشت به سبد خرید
                </Link>

                <div className="mt-6 text-xs opacity-70 text-center">
                  با پرداخت شما قوانین و شرایط سرویس را می‌پذیرید
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      <Footer language={language} t={t} />
    </div>
  );
}
