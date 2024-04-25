/** @type {import('next').NextConfig} */
const nextConfig = {
  // async rewrites() {
  //   return [
  //     {
  //       source: "/pemodal/:path*", // Tentukan source untuk subdomain pemodal.showdev.tech
  //       destination: "/src/app/pemodal/:path*", // Arahkan permintaan dari subdomain pemodal.showdev.tech ke folder src/app/pemodal
  //     },
  //     {
  //       source: "/:path*", // Tentukan source untuk domain showdev.tech
  //       destination: "/src/app/:path*", // Arahkan semua permintaan dari domain showdev.tech ke folder src/app
  //     },
  //   ];
  // },
};

export default nextConfig;
