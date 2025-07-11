/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "greatstack.in",
        port: "",
        pathname: "/assets/**",
      },
    ],
  },
};

export default nextConfig;
