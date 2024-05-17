// "use client";

import Navbars from "./components/Navbar/Navbars";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Pemodal",
  description: "Danamart - Pemodal",
};
export default function WeddingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbars />
      <section>{children}</section>
    </>
  );
}
