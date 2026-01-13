// next.config.mjs
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin(); // أو './i18n'

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  
  // إزالة turbopack لأنه غير مدعوم في الإصدار الحالي
  // experimental: {
  //   turbo: {
  //     // إعدادات turbo إذا كنت تستخدم Next.js 15+
  //   }
  // },
  
  // إذا كنت تريد تمكين ميزات تجريبية
  experimental: {
    // serverActions: true, // إذا كنت تحتاجها
  },
  
  // إعدادات الصور
  images: {
    domains: ['localhost'],
    unoptimized: process.env.NODE_ENV === 'development', // لتسريع التطوير
  },
  
  // إعدادات أخرى
  reactStrictMode: true,
  swcMinify: true,
  
  // إعدادات i18n (تأكد أنها متوافقة مع next-intl)
  // i18n: {
  //   locales: ['en', 'ar'],
  //   defaultLocale: 'en',
  // },
  
  // إعدادات webpack إذا كنت تحتاجها
  webpack: (config, { isServer }) => {
    // تعديلات webpack إذا لزم الأمر
    return config;
  },
};

export default withNextIntl(nextConfig);