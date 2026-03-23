"use client";

import { useEffect, useState, useRef } from "react";

type Star = {
    id: number;
    top: number;
    left: number;
};

const wishes = [
    "✨ Wish granted (almost)",
    "🌠 That one might come true...",
    "💫 Keep building, you're close",
    "🚀 Big things loading...",
    "🧠 Debugging your dreams...",
];

export function ShootingStarsInteractive() {
    const [stars, setStars] = useState<Star[]>([]);
    const [message, setMessage] = useState<string | null>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            const id = Date.now();

            const newStar: Star = {
                id,
                top: Math.random() * 70,   // better spread
                left: Math.random() * 100,
            };

            setStars([newStar]);

            setTimeout(() => {
                setStars([]);
            }, 1200);
        }, 1800);

        return () => clearInterval(interval);
    }, []);

    const handleClick = (id: number) => {
        const randomWish =
            wishes[Math.floor(Math.random() * wishes.length)];

        if (timeoutRef.current) clearTimeout(timeoutRef.current);

        setMessage(randomWish);

        timeoutRef.current = setTimeout(() => {
            setMessage(null);
        }, 2000);

        setStars([]);
    };

    return (
        <div className="fixed inset-0 z-50 overflow-hidden pointer-events-none">
            {stars.map((star) => (
                <span
                    key={star.id}
                    onClick={() => handleClick(star.id)}
                    className="absolute w-1.5 h-1.5 bg-white rounded-full animate-shooting cursor-pointer pointer-events-auto"
                    style={{
                        top: `${star.top}%`,
                        left: `${star.left}%`,
                    }}
                />
            ))}

            {message && (
                <div className="pointer-events-none absolute bottom-20 left-1/2 -translate-x-1/2 px-4 py-2 text-sm text-white bg-black/70 backdrop-blur rounded-full border border-gray-700 animate-fade-in">
                    {message}
                </div>
            )}
        </div>
    );
}