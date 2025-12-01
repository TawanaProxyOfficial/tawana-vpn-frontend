import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingCart, ArrowRight, ArrowLeft, Tag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../hooks';
import { useState } from 'react';
import { Header, Footer } from '../components/organisms';
import { useTheme } from '../hooks';

export function Cart() {
  const { items, removeItem, updateQuantity, total, itemCount, applyDiscount, discount } = useCart();
  const { language, toggleLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [discountCode, setDiscountCode] = useState('');
  const [discountMessage, setDiscountMessage] = useState('');

  const handleApplyDiscount = async () => {
    const result = await applyDiscount(discountCode);
    setDiscountMessage(result.message);
    if (result.success) {
      setDiscountCode('');
    }
  };

  const discountAmount = total * discount;
  const finalTotal = total - discountAmount;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fa-IR').format(price);
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
            <ShoppingCart className="w-24 h-24 mx-auto mb-6 opacity-30" />
            <h2 className="text-3xl font-bold mb-4">{t('cart.empty')}</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-8">
              {t('cart.emptyDescription')}
            </p>
            <Link
              to="/"
              className="btn-primary inline-flex items-center gap-2"
            >
              {language === 'fa' ? <ArrowLeft className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
              {t('cart.continueShopping')}
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
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-4xl font-bold flex items-center gap-3">
              <ShoppingCart className="w-10 h-10 text-[#00D4AA]" />
              {t('cart.title')} ({itemCount})
            </h1>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="card p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                      <p className="text-sm opacity-70 mb-3">{item.duration}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.features.slice(0, 3).map((feature, idx) => (
                          <span
                            key={idx}
                            className="text-xs px-3 py-1 rounded-full bg-[#00D4AA]/10 text-[#00D4AA]"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                      <div className="text-2xl font-bold text-[#00D4AA]">
                        {formatPrice(item.price)} {t('pricing.currency')}
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-4">
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-2 rounded-lg hover:bg-red-500/10 text-red-500 transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>

                      <div className="flex items-center gap-2 card p-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:bg-white/10 rounded transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center font-bold">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:bg-white/10 rounded transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="card p-6 sticky top-24"
              >
                <h3 className="text-xl font-bold mb-6">{t('cart.summary')}</h3>

                {/* Discount Code */}
                <div className="mb-6">
                  <label className="block text-sm mb-2">{t('cart.discountCode')}</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={discountCode}
                      onChange={(e) => setDiscountCode(e.target.value)}
                      placeholder={t('cart.enterCode')}
                      className="input flex-1"
                    />
                    <button
                      onClick={handleApplyDiscount}
                      className="btn-secondary px-4"
                    >
                      <Tag className="w-4 h-4" />
                    </button>
                  </div>
                  {discountMessage && (
                    <p className={`text-sm mt-2 ${discount > 0 ? 'text-green-500' : 'text-red-500'}`}>
                      {discountMessage}
                    </p>
                  )}
                </div>

                <div className="space-y-3 mb-6 pb-6 border-b border-white/10">
                  <div className="flex justify-between">
                    <span>{t('cart.subtotal')}</span>
                    <span className="font-semibold">{formatPrice(total)} تومان</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-green-500">
                      <span>{t('cart.discount')} ({Math.round(discount * 100)}%)</span>
                      <span className="font-semibold">-{formatPrice(discountAmount)} تومان</span>
                    </div>
                  )}
                </div>

                <div className="flex justify-between text-xl font-bold mb-6">
                  <span>{t('cart.total')}</span>
                  <span className="text-[#00D4AA]">{formatPrice(finalTotal)} تومان</span>
                </div>

                <Link
                  to="/checkout"
                  className="btn-primary w-full flex items-center justify-center gap-2 mb-3"
                >
                  🔒 {t('cart.checkout')}
                </Link>

                <Link
                  to="/"
                  className="btn-secondary w-full flex items-center justify-center gap-2"
                >
                  {language === 'fa' ? <ArrowLeft className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
                  {t('cart.continueShopping')}
                </Link>

                <div className="mt-6 text-sm opacity-70 text-center">
                  {t('cart.guarantee')}
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
