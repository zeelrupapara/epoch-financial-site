/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["swiper"],
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
};

module.exports = nextConfig;
