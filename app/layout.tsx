import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import type { ReactNode } from "react";

import "./globals.css";
import { SchemaScript } from "@/components/schema-script";
import { SiteShell } from "@/components/site-shell";
import { siteConfig } from "@/lib/seo";

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
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    images: [
      {
        url: siteConfig.defaultImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: siteConfig.xHandle,
    images: [siteConfig.defaultImage],
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  const globalSchema = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
      description: siteConfig.description,
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
      jobTitle: "Business and Marketing Professional",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kathmandu",
        addressCountry: "NP",
      },
      sameAs: [
        "https://www.linkedin.com/in/khanalcwani",
        "https://www.instagram.com/khanalcwani",
        "https://www.facebook.com/khanalcwani",
        "https://twitter.com/khanalcwani",
        "https://www.tiktok.com/@khanalcwani",
      ],
    },
  ];

  return (
    <html lang="en">
      <body className={`${display.variable} ${sans.variable}`}>
        <SchemaScript schema={globalSchema} />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
