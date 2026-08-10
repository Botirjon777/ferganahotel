import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const securityHeaders = [
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
];

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.1.105", "192.168.0.41"],
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "flagcdn.com" },
    ],
  },
  async redirects() {
    return [
      // 1. Legacy locales with specific pages (single-hop redirects for performance and SEO)
      // Special Offers -> /:locale/offers
      { source: "/:locale(uz-latn-uz|uz-LATN-uz|UZ-LATN-UZ|uz-Latn-Uz)/special-offers", destination: "/uz/offers", permanent: true },
      { source: "/:locale(uz-latn-uz|uz-LATN-uz|UZ-LATN-UZ|uz-Latn-Uz)/special-offers/:path*", destination: "/uz/offers/:path*", permanent: true },
      { source: "/:locale(ru-ru|ru-RU|RU-RU|RU-ru)/special-offers", destination: "/ru/offers", permanent: true },
      { source: "/:locale(ru-ru|ru-RU|RU-RU|RU-ru)/special-offers/:path*", destination: "/ru/offers/:path*", permanent: true },
      { source: "/:locale(en-gb|en-GB|EN-GB|EN-gb)/special-offers", destination: "/en/offers", permanent: true },
      { source: "/:locale(en-gb|en-GB|EN-GB|EN-gb)/special-offers/:path*", destination: "/en/offers/:path*", permanent: true },

      // Restaurants -> /:locale/services/gastrobar
      { source: "/:locale(uz-latn-uz|uz-LATN-uz|UZ-LATN-UZ|uz-Latn-Uz)/restaurants", destination: "/uz/services/gastrobar", permanent: true },
      { source: "/:locale(uz-latn-uz|uz-LATN-uz|UZ-LATN-UZ|uz-Latn-Uz)/restaurants/:path*", destination: "/uz/services/gastrobar/:path*", permanent: true },
      { source: "/:locale(ru-ru|ru-RU|RU-RU|RU-ru)/restaurants", destination: "/ru/services/gastrobar", permanent: true },
      { source: "/:locale(ru-ru|ru-RU|RU-RU|RU-ru)/restaurants/:path*", destination: "/ru/services/gastrobar/:path*", permanent: true },
      { source: "/:locale(en-gb|en-GB|EN-GB|EN-gb)/restaurants", destination: "/en/services/gastrobar", permanent: true },
      { source: "/:locale(en-gb|en-GB|EN-GB|EN-gb)/restaurants/:path*", destination: "/en/services/gastrobar/:path*", permanent: true },

      // Photos -> /:locale/gallery
      { source: "/:locale(uz-latn-uz|uz-LATN-uz|UZ-LATN-UZ|uz-Latn-Uz)/photos", destination: "/uz/gallery", permanent: true },
      { source: "/:locale(uz-latn-uz|uz-LATN-uz|UZ-LATN-UZ|uz-Latn-Uz)/photos/:path*", destination: "/uz/gallery/:path*", permanent: true },
      { source: "/:locale(ru-ru|ru-RU|RU-RU|RU-ru)/photos", destination: "/ru/gallery", permanent: true },
      { source: "/:locale(ru-ru|ru-RU|RU-RU|RU-ru)/photos/:path*", destination: "/ru/gallery/:path*", permanent: true },
      { source: "/:locale(en-gb|en-GB|EN-GB|EN-gb)/photos", destination: "/en/gallery", permanent: true },
      { source: "/:locale(en-gb|en-GB|EN-GB|EN-gb)/photos/:path*", destination: "/en/gallery/:path*", permanent: true },

      // 2. Legacy locales fallback (e.g. /ru-ru/contacts -> /ru/contacts)
      { source: "/:locale(uz-latn-uz|uz-LATN-uz|UZ-LATN-UZ|uz-Latn-Uz)", destination: "/uz", permanent: true },
      { source: "/:locale(uz-latn-uz|uz-LATN-uz|UZ-LATN-UZ|uz-Latn-Uz)/:path*", destination: "/uz/:path*", permanent: true },
      { source: "/:locale(ru-ru|ru-RU|RU-RU|RU-ru)", destination: "/ru", permanent: true },
      { source: "/:locale(ru-ru|ru-RU|RU-RU|RU-ru)/:path*", destination: "/ru/:path*", permanent: true },
      { source: "/:locale(en-gb|en-GB|EN-GB|EN-gb)", destination: "/en", permanent: true },
      { source: "/:locale(en-gb|en-GB|EN-GB|EN-gb)/:path*", destination: "/en/:path*", permanent: true },
      
      { source: "/en-gb/guest-account", destination: "/en", permanent: true },

      // 3. Normal locales and root paths with old page names
      // Special Offers -> /:locale/offers
      { source: "/special-offers", destination: "/offers", permanent: true },
      { source: "/special-offers/:path*", destination: "/offers/:path*", permanent: true },
      { source: "/:locale(uz|ru|en)/special-offers", destination: "/:locale/offers", permanent: true },
      { source: "/:locale(uz|ru|en)/special-offers/:path*", destination: "/:locale/offers/:path*", permanent: true },

      // Restaurants -> /:locale/services/gastrobar
      { source: "/restaurants", destination: "/services/gastrobar", permanent: true },
      { source: "/restaurants/:path*", destination: "/services/gastrobar/:path*", permanent: true },
      { source: "/:locale(uz|ru|en)/restaurants", destination: "/:locale/services/gastrobar", permanent: true },
      { source: "/:locale(uz|ru|en)/restaurants/:path*", destination: "/:locale/services/gastrobar/:path*", permanent: true },

      // Photos -> /:locale/gallery
      { source: "/photos", destination: "/gallery", permanent: true },
      { source: "/photos/:path*", destination: "/gallery/:path*", permanent: true },
      { source: "/:locale(uz|ru|en)/photos", destination: "/:locale/gallery", permanent: true },
      { source: "/:locale(uz|ru|en)/photos/:path*", destination: "/:locale/gallery/:path*", permanent: true },

      { source: "/:lang/guest-account", destination: "/:lang", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
