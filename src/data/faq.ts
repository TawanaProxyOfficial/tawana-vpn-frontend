import type { FAQ } from '../types';

export const faqs: FAQ[] = [
  {
    id: 'all-networks',
    question: {
      fa: 'آیا روی همه اینترنت‌ها کار می‌کند؟',
      en: 'Does it work on all networks?',
    },
    answer: {
      fa: 'بله، سرویس ما با استفاده از تکنولوژی V2Ray Reality روی تمام اپراتورهای ایرانی (همراه اول، ایرانسل، رایتل و...) و همچنین اینترنت ثابت کار می‌کند.',
      en: 'Yes, our service works on all Iranian operators (MCI, Irancell, Rightel, etc.) and fixed internet using V2Ray Reality technology.',
    },
  },
  {
    id: 'gaming-difference',
    question: {
      fa: 'تفاوت پلن گیمینگ با پلن‌های دیگر چیست؟',
      en: 'What is the difference between Gaming and other plans?',
    },
    answer: {
      fa: 'پلن گیمینگ VIP روی سرورهای اختصاصی با پینگ زیر ۸۰ms قرار دارد و برای بازی‌های آنلاین مثل Call of Duty، PUBG و Valorant بهینه‌سازی شده است.',
      en: 'Gaming VIP plan runs on dedicated servers with ping under 80ms, optimized for online games like Call of Duty, PUBG, and Valorant.',
    },
  },
  {
    id: 'multi-device',
    question: {
      fa: 'چند دستگاه می‌توانم همزمان وصل کنم؟',
      en: 'How many devices can I connect simultaneously?',
    },
    answer: {
      fa: 'تعداد دستگاه‌های همزمان بستگی به پلن انتخابی شما دارد. از ۱ تا ۴ دستگاه در پلن‌های مختلف. پلن سازمانی محدودیتی ندارد.',
      en: 'The number of simultaneous devices depends on your plan. From 1 to 4 devices in different plans. Enterprise plan has no limit.',
    },
  },
  {
    id: 'refund',
    question: {
      fa: 'آیا امکان بازگشت وجه وجود دارد؟',
      en: 'Is there a refund policy?',
    },
    answer: {
      fa: 'بله، ما ۷ روز ضمانت بازگشت وجه بدون قید و شرط داریم. اگر از سرویس راضی نبودید، تمام مبلغ به شما برگردانده می‌شود.',
      en: 'Yes, we offer a 7-day unconditional money-back guarantee. If you are not satisfied, the full amount will be refunded.',
    },
  },
  {
    id: 'app-required',
    question: {
      fa: 'آیا نیاز به نصب برنامه خاصی دارم؟',
      en: 'Do I need to install a specific app?',
    },
    answer: {
      fa: 'بله، برای اتصال نیاز به نصب اپلیکیشن V2Ray دارید. ما برای iOS از Streisand و برای Android از V2rayNG پیشنهاد می‌کنیم. آموزش کامل در بخش آکادمی موجود است.',
      en: 'Yes, you need to install a V2Ray app. We recommend Streisand for iOS and V2rayNG for Android. Full tutorials are available in our Academy section.',
    },
  },
  {
    id: 'static-ip-trading',
    question: {
      fa: 'آیا IP ثابت برای ترید مناسب است؟',
      en: 'Is the static IP suitable for trading?',
    },
    answer: {
      fa: 'بله، پلن ایران اکسس با IP ثابت تهران مخصوص کاربرانی است که نیاز به آی‌پی ثابت ایرانی برای سایت‌های بانکی، ترید یا سرویس‌های داخلی دارند.',
      en: 'Yes, the Iran Access plan with static Tehran IP is designed for users who need a fixed Iranian IP for banking sites, trading, or domestic services.',
    },
  },
];
