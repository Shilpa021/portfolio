import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: any) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <meta name="google-site-verification" content="U5crCV7O7Qnu3aFX8Ylqq25WNA4PDUm7QwXYakueZEM" />
      </head>
      <body className={`${inter.className} bg-[#0B0B0C] text-white`}>
          <Navbar />
          {children}
          <SpeedInsights />
          <Analytics />
      </body>
    </html>
  );
}

export const metadata = {
  title: "Shilpa Rana | Frontend Engineer | AI Developer",
  description:
    "Portfolio of Shilpa Rana — Frontend Engineer specializing in React, Next.js, and AI-powered applications.",
};