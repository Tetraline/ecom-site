/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "placekitten.com",
        port: "",
        pathname: "/200/300",
      },
    ],
  },
};

module.exports = nextConfig;
