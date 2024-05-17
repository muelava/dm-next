// "use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

import Head from "next/head";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Danamart",
  description: "Homepage - Danamart",
  keywords: "Danamart, Urun Dana, Investasi, Bisnis, securities crowdfunding, pendanaan startup, pendanaan proyek, umkm, saham, obligasi, investasi online, pasar saham, pasar modal, ESG, akses keuangan",
  publisher: "PT Dana Aguna Nusantara",
  authors: [{ name: "Seb" }, { name: "Josh", url: "https://danamart.id" }],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Investasi Urun Dana Potensi Untung Maksimal",
    description: "Investasi Securities Crowdfunding Pertama Berbasis ESG di Indonesia Terpercaya dan berizin OJK dengan potensi keuntungan 15% per tahun",
  },
  twitter: {
    creator: "danamartscf",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <Head>
        <link rel="icon" href="./favicon.ico" sizes="any" />
      </Head>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
