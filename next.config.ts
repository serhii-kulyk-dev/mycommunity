import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 85, 100],
    minimumCacheTTL: 31536000,
    unoptimized: true,
  },
};

export default nextConfig;
