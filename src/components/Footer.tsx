"use client";

import { useEasterEgg } from "@/hooks/useEasterEgg";
import { JSX } from "react";
import { ShootingStarsInteractive } from "./ShootingStarsInteractive";

export default function Footer(): JSX.Element {
  const devMode = useEasterEgg();

  const handleScrollTop = (): void => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {devMode && <>
        <ShootingStarsInteractive />
      </>}

      <footer className="pt-40 pb-20 text-center text-sm text-gray-500 relative">
        
        <p>
          © {new Date().getFullYear()} Shilpa Rana · Built with ☕ & curiosity
        </p>

        <p className="mt-2 text-xs text-gray-600">
          {devMode
            ? "🧠 Dev Mode Activated — You’re not like other users, are you?"
            : "Press some keys… something might happen 👀"}
        </p>

        <button
          onClick={handleScrollTop}
          className="mt-4 text-xs text-gray-600 hover:text-white transition"
        >
          ↑ Back to top
        </button>
      </footer>
    </>
  );
}