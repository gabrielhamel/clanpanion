/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/EU",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        port: "",
        hostname: "eu.wargaming.net",
        protocol: "https",
        pathname: "/**",
      },
      {
        port: "",
        hostname: "asia.wargaming.net",
        protocol: "https",
        pathname: "/**",
      },
      {
        port: "",
        hostname: "na.wargaming.net",
        protocol: "https",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
