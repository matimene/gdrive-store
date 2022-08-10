/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");
const path = require("path");

const { parsed: localEnv } = require("dotenv-safe").config({
  allowEmptyValues: false,
  path: path.resolve(__dirname, `.env`),
});

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n,
  env: localEnv,
};

module.exports = nextConfig;
