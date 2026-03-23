'use client'
import Hero from "../components/Hero";
import Story from "../components/Story";
import About from "../components/About";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Experience from "../components/Experience";
import { StarsBackground } from "@/components/ui/stars-background";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const params = useSearchParams();

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;

    const el = document.getElementById(hash);
    if (!el) return;

    setTimeout(() => {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: "smooth",
      });
    }, 100); // wait for render
  }, []);

  return (
    <main className="px-6 py-16 mx-auto bg-gray-950">
      <div className="relative overflow-hidden">
        <Hero />
        {/* Background */}
        <StarsBackground className=" pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 px-6 py-16 max-w-5xl mx-auto">
          <About />
          <Skills />
          <Experience />
          <Story />
          <Contact />
          <Footer />
        </div>
      </div>
    </main >
  );
}