/** @type {import('next').NextConfig} */
const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
  disable: process.env.NODE_ENV === "development",
  dest: "public",
  register: true,
  skipWaiting: false,
  runtimeCaching,
});
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "smoothiefactory.net",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.planetsmoothie.com",
        pathname: "/**",
      },
    ],
  },
};

module.exports = withPWA(nextConfig);
