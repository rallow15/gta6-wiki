import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rockstarintel.com",
      },
      {
        protocol: "https",
        hostname: "allthings.how",
      },
      {
        protocol: "https",
        hostname: "gta6intel.com",
      },
    ],
  },
  async redirects() {
    const hubFr = "/gta-6-avant-sortie";
    const hubEn = "/en/gta-6-before-release";
    return [
      // Thin pre-release guides merged into the pre-release hub
      { source: "/solution-gta-6-guide-missions", destination: hubFr, permanent: true },
      { source: "/comment-gagner-argent-gta-6", destination: hubFr, permanent: true },
      { source: "/astuces-gta-6", destination: hubFr, permanent: true },
      { source: "/secrets-easter-eggs-gta-6", destination: hubFr, permanent: true },
      { source: "/problemes-gta-6-solutions", destination: hubFr, permanent: true },
      { source: "/en/gta-6-walkthrough", destination: hubEn, permanent: true },
      { source: "/en/how-to-make-money-gta-6", destination: hubEn, permanent: true },
      { source: "/en/tips-gta-6", destination: hubEn, permanent: true },
      { source: "/en/secrets-easter-eggs-gta-6", destination: hubEn, permanent: true },
      { source: "/en/gta-6-problems-solutions", destination: hubEn, permanent: true },
      // Duplicate / shallow pages consolidated into richer equivalents
      { source: "/codes", destination: "/code-triche-gta-6", permanent: true },
      { source: "/en/codes", destination: "/en/cheat-codes-gta-6", permanent: true },
      { source: "/armes-gta-6", destination: "/armes", permanent: true },
      { source: "/en/weapons-gta-6", destination: "/en/weapons", permanent: true },
    ];
  },
};

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

export default withNextIntl(nextConfig);