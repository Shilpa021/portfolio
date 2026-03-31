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

      <footer className="mt-40 pt-20 pb-20 text-center text-sm text-gray-500 relative border-t border-white/10">


          <p>
            © {new Date().getFullYear()} Shilpa Rana
          </p>
          <p>Built with Next, attention to detail, and a bit of obsession.</p>
          <p className="mt-2 text-gray-400">
            If you made it this far, let’s build something great.
          </p>

        <p className="mt-16 text-xs text-gray-600">
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