"use client";

import { useEffect, useState } from "react";

const SEQUENCE = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
] as const;

type Key = (typeof SEQUENCE)[number];

export function useEasterEgg(): boolean {
    const [active, setActive] = useState<boolean>(false);

    useEffect(() => {
        let input: Key[] = [];

        const handler = (e: KeyboardEvent): void => {
            const key = e.key as Key;

            input.push(key);
            input = input.slice(-SEQUENCE.length);

            const isMatch = SEQUENCE.every((seqKey, i) => seqKey === input[i]);

            if (isMatch) {
                setActive(true);
                console.log("🚀 Dev Mode Activated. Welcome, curious human.");
            }
        };

        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, []);

    return active;
}