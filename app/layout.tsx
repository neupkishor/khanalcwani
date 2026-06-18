import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import type { ReactNode } from "react";

import "./globals.css";
import { SiteShell } from "@/components/site-shell";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

const sans = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Bhawani Khanal",
  description:
    "Business, marketing, creativity, and continuous learning from Kathmandu, Nepal.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${sans.variable}`}>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
