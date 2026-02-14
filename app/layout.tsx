import type React from "react";
import type { Metadata } from "next";
import { Manrope, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Justly - Dispute Resolution for Digital Platforms",
  description:
    "Join the decentralized jury. Resolve disputes for crowdfunding, escrows, and protocols. Earn rewards in a gamified, on-chain court.",
  icons: {
    icon: [
      {
        url: "/icons/justly-logo-transparent.svg",
        type: "image/svg+xml",
      },
      {
        url: "/icons/justly-light-logo-transparent.svg",
        media: "(prefers-color-scheme: light)",
        type: "image/svg+xml",
      },
      {
        url: "/icons/justly-logo-transparent.svg",
        media: "(prefers-color-scheme: dark)",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
