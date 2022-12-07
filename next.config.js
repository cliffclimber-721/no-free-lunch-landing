/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");
const withPlugins = require("next-compose-plugins");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: true },
  i18n,
  images: {
    domains: ["storage.googleapis.com"],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

module.exports = withPlugins([withBundleAnalyzer], nextConfig);
