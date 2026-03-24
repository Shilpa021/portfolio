import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: any) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${inter.className} bg-[#0B0B0C] text-white`}>
          <Navbar />
          {children}
          <SpeedInsights />
      </body>
    </html>
  );
}

export const metadata = {
  title: "Shilpa Rana | Frontend Engineer",
  description: "Senior Frontend Engineer building scalable web apps",
};