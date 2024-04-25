/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/pemodal/:path*",
        destination: "/pemodal/:path*",
      },
    ];
  },
};

export default nextConfig;
