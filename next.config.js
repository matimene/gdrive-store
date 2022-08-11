const { i18n } = require("./next-i18next.config");
const path = require("path");

const { parsed: localEnv } = require("dotenv-safe").config({
  allowEmptyValues: false,
  path: path.resolve(__dirname, `.env`),
});

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  i18n,
  env: localEnv,
  ssr: true,
  displayName: true
};

module.exports = nextConfig;
