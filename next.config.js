const { i18n } = require("./next-i18next.config");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n,
  ssr: true,
  displayName: true
};

module.exports = nextConfig;
