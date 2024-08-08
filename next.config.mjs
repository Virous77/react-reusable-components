/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        port: "",
        protocol: "https",
        hostname: "d2u8k2ocievbld.cloudfront.net",
      },
    ],
  },
};

export default nextConfig;
