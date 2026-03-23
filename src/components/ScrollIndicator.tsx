"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ScrollIndicator() {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY < 500); // hide quickly on scroll
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={`absolute bottom-30 left-1/2 -translate-x-1/2 transition-opacity duration-700 ${visible ? "opacity-100" : "opacity-0"
                }`}
        >
            <motion.div
                animate={{
                    y: [0, 14, 0],
                    opacity: [0.3, 1, 0.3],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="flex flex-col items-center cursor-pointer"
                onClick={() =>
                    window.scrollTo({
                        top: window.innerHeight,
                        behavior: "smooth",
                    })
                }
            >
                {/* Main Chevron */}
                <div className="w-5 h-5 border-b border-r border-gray-400/70 rotate-45"></div>

                {/* Trail Chevron */}
                <div className="w-5 h-5 border-b border-r border-gray-300/40 rotate-45 -mt-2"></div>
            </motion.div>
        </div>
    );
}