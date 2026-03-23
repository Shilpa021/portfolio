"use client";

import { useEffect, useState } from "react";
import ResumeModal from "./ResumeModal";
import { usePathname, useRouter } from "next/navigation";

const links = [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Experience", id: "experience" },
    { name: "Journey", id: "journey" },
    { name: "Contact", id: "contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState("");

    useEffect(() => {
        const sections = links
            .map((link) => document.getElementById(link.id))
            .filter(Boolean) as HTMLElement[];

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id);
                    }
                });
            },
            {
                root: null,
                rootMargin: "-40% 0px -50% 0px",
                threshold: 0,
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    const router = useRouter();
    const pathname = usePathname();

    const scrollTo = (id: string) => {
        if (id === "top") {
            if (pathname !== "/") {
                router.push("/");
                return;
            }

            window.scrollTo({ top: 0, behavior: "smooth" });
            return;
        }

        if (pathname !== "/") {
            router.push(`/#${id}`);
            return;
        }

        const el = document.getElementById(id);
        if (!el) return;

        el.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };
    return (
        <nav className="fixed top-0 w-full z-50 backdrop-blur-xl">
            <div
                className={`transition-all duration-300 mx-auto px-6 md:px-12 flex items-center justify-between
                    ${scrolled ? "bg-black/70 py-5" : "bg-transparent py-5"}`}
            >
                {/* Logo */}
                <h1
                    onClick={() => scrollTo("top")}
                    className="cursor-pointer text-lg font-semibold tracking-wide transition hover:opacity-80 active:scale-95"
                >
                    Shilpa Rana
                </h1>

                {/* Links */}
                <div className="hidden md:flex items-center gap-8 text-sm">
                    {links.map((item) => {
                        const isActive = active === item.id;

                        return (
                            <button
                                key={item.id}
                                onClick={() => scrollTo(item.id)}
                                className={`relative transition ${isActive
                                    ? "text-white"
                                    : "text-gray-400 hover:text-white"}`}
                            >
                                {item.name}

                                {/* Animated underline */}
                                <span
                                    className={`absolute left-0 -bottom-1 h-0.5 rounded-full transition-all duration-300
                    ${isActive ? "w-full bg-white" : "w-0 bg-white group-hover:w-full"}`}
                                />
                            </button>
                        );
                    })}
                </div>

                {/* CTA */}
                <div className="flex items-center gap-3">
                    <ResumeModal />
                </div>
            </div>
            <div
                className={`absolute bottom-0 left-0 w-full h-px bg-white/10 transition-opacity duration-300 ${scrolled ? "opacity-100" : "opacity-0"}`}
            />
        </nav>
    );
}