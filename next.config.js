/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["swiper"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vldattsztnmoukeidupe.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
      {
        protocol: "https",
        hostname: "img.youtube.com",
        pathname: "/vi/**",
      },
    ],
  },
};

module.exports = nextConfig;
