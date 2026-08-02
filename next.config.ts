import type { NextConfig } from "next";

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
};

export default nextConfig;