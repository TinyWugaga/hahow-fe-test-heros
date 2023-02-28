/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "**.annihil.us",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/heros",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
