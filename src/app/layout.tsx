import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Geist,
  Geist_Mono,
  Instrument_Serif,
  Montserrat,
} from "next/font/google";
import { InteractiveShell } from "@/components/providers/InteractiveShell";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const brandSerif = Cormorant_Garamond({
  variable: "--font-brand",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const displaySerif = Instrument_Serif({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

/** Morgan-style header logotype: thin geometric sans + wide tracking */
const wordmarkSans = Montserrat({
  variable: "--font-wordmark",
  subsets: ["latin"],
  weight: "200",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "George Barakat, Photography",
    template: "%s, George Barakat",
  },
  description:
    "George Barakat, Toronto portrait, event, travel & street photographer. Inspired by classic Pixieset storytelling with custom motion and cursor.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${brandSerif.variable} ${displaySerif.variable} ${wordmarkSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div className="gb-bg" aria-hidden="true" />
        <div className="gb-noise" aria-hidden="true" />
        <InteractiveShell>{children}</InteractiveShell>
      </body>
    </html>
  );
}
