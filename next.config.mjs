import i18nConfig from "./next-i18next.config.js";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: i18nConfig.i18n,
  images: {
    remotePatterns: [{
      port: "",
      hostname: "eu.wargaming.net",
      protocol: "https",
      pathname: "/**"
    }, {
      port: "",
      hostname: "asia.wargaming.net",
      protocol: "https",
      pathname: "/**"
    }, {
      port: "",
      hostname: "na.wargaming.net",
      protocol: "https",
      pathname: "/**"
    }]
  }
};

export default nextConfig;
