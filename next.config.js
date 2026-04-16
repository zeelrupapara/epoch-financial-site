const path = require("path");

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
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "swiper/react": path.resolve(
        __dirname,
        "node_modules/swiper/swiper-react.mjs"
      ),
      "swiper/modules": path.resolve(
        __dirname,
        "node_modules/swiper/modules/index.mjs"
      ),
      "swiper/css/pagination": path.resolve(
        __dirname,
        "node_modules/swiper/modules/pagination.css"
      ),
      "swiper/css": path.resolve(
        __dirname,
        "node_modules/swiper/swiper.css"
      ),
    };
    return config;
  },
};

module.exports = nextConfig;
