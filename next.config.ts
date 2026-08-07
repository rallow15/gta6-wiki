import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/cheat-codes-gta-6",
        destination: "/code-triche-gta-6",
        permanent: true,
      },
    ];
  },
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
};

export default nextConfig;