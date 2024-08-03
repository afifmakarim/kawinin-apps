/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "picsum.photos",
      "loremflickr.com",
      "api.qrserver.com",
      "rojokundo.xyz",
      "localhost",
      "api.veritrans.co.id",
    ],
  },
};

module.exports = nextConfig;
