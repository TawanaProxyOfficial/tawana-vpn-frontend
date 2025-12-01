import { motion, AnimatePresence } from 'framer-motion';
import { Gift, X } from 'lucide-react';
import { useScrollRewards } from '../../hooks/useScrollRewards';
import { useState, useEffect } from 'react';

export function ScrollRewards() {
  const { points, maxPoints, progress, rewardClaimed, claimReward } = useScrollRewards();
  const [showFullCard, setShowFullCard] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    // Show full card when close to completion
    if (progress >= 80 && !rewardClaimed && !showFullCard) {
      setShowFullCard(true);
    }
  }, [progress, rewardClaimed, showFullCard]);

  const handleClaim = () => {
    const claimed = claimReward();
    if (claimed) {
      setShowSuccess(true);
      setTimeout(() => {
        setShowFullCard(false);
        setShowSuccess(false);
      }, 3000);
    }
  };

  if (rewardClaimed && !showSuccess) {
    return null;
  }

  return (
    <>
      {/* Compact Progress Bar */}
      <AnimatePresence>
        {!showFullCard && !rewardClaimed && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed bottom-24 right-6 z-40"
          >
            <button
              onClick={() => setShowFullCard(true)}
              className="glass hover:glass-hover px-4 py-3 rounded-2xl shadow-lg flex items-center gap-3 transition-all"
            >
              <Gift className="w-5 h-5 text-[#00D4AA]" />
              <div className="text-sm">
                <div className="font-bold">{Math.round(progress)}%</div>
              </div>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full Reward Card */}
      <AnimatePresence>
        {showFullCard && !rewardClaimed && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-24 right-6 z-50 w-80"
          >
            <div className="card p-6 relative">
              <button
                onClick={() => setShowFullCard(false)}
                className="absolute top-4 left-4 p-1 rounded-lg hover:bg-white/10 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="text-center mb-4">
                <Gift className="w-12 h-12 mx-auto mb-3 text-[#00D4AA]" />
                <h3 className="text-xl font-bold mb-2">🎁 پاداش اسکرول</h3>
                <p className="text-sm opacity-70">
                  با اسکرول کامل صفحه، ۳ گیگ رایگان دریافت کنید!
                </p>
              </div>

              <div className="mb-4">
                <div className="flex justify-between text-sm mb-2">
                  <span>پیشرفت</span>
                  <span className="font-bold text-[#00D4AA]">
                    {points}/{maxPoints} امتیاز
                  </span>
                </div>
                <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    className="h-full bg-gradient-to-r from-[#00D4AA] to-[#7C3AED]"
                  />
                </div>
              </div>

              {progress >= 100 ? (
                <button
                  onClick={handleClaim}
                  className="btn-primary w-full flex items-center justify-center gap-2"
                >
                  <Gift className="w-5 h-5" />
                  دریافت پاداش
                </button>
              ) : (
                <div className="text-center text-sm opacity-70">
                  {maxPoints - points} امتیاز تا دریافت پاداش!
                </div>
              )}

              <div className="mt-4 text-xs opacity-50 text-center">
                • دیدن تمام بخش‌ها
                <br />
                • اسکرول تا پایین صفحه
                <br />
                • زمان حضور در صفحه
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Success Message */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          >
            <div className="card p-8 max-w-md text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring' }}
              >
                <Gift className="w-20 h-20 mx-auto mb-4 text-[#00D4AA]" />
              </motion.div>
              <h2 className="text-3xl font-bold mb-4">🎉 تبریک!</h2>
              <p className="text-lg mb-6">
                شما ۳ گیگابایت اینترنت رایگان دریافت کردید!
              </p>
              <p className="text-sm opacity-70">
                پاداش شما به حساب کاربری اضافه شد
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
