/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  images: {
    domains: [
      "picsum.photos",
      "loremflickr.com",
      "api.qrserver.com",
      "rojokundo.xyz",
      "localhost",
    ],
  },
};

module.exports = nextConfig;
