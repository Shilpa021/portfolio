"use client";

import { Reveal } from "./Reveal";
import Section from "./Section";

const failures = [
    {
        title: "Tight Coupling with APIs",
        mistake:
            "Tightly coupled frontend components with backend APIs, leading to frequent breakages and slow iteration.",
        learning:
            "Moved to a decoupled architecture using a GraphQL BFF to stabilize contracts and improve velocity.",
    },
    {
        title: "Uncontrolled Re-renders",
        mistake:
            "Ignored render optimization early on, causing unnecessary re-renders and degraded performance in large components.",
        learning:
            "Adopted memoization strategies (useMemo, useCallback, React.memo) and better state structuring.",
    },
    {
        title: "Poor State Management Decisions",
        mistake:
            "Overused global state, making debugging difficult and increasing coupling across components.",
        learning:
            "Shifted to localized state and clearer data flow patterns, using global state only where necessary.",
    },
    {
        title: "Over-engineering Components",
        mistake:
            "Built overly generic components too early, which increased complexity and slowed down development.",
        learning:
            "Now prioritize simple, purpose-driven components and refactor only when patterns emerge.",
    },
    {
        title: "Inefficient Data Fetching",
        mistake:
            "Triggered redundant API calls due to improper dependency management in useEffect.",
        learning:
            "Improved dependency handling, caching strategies, and centralized data fetching logic.",
    },
];

export default function Failure() {
    return (
        <Section id="failure" sectionClass="mt-24">
            <Reveal>
                <h2 className="text-2xl md:text-2xl font-semibold mb-12">
                    Mistakes That Shaped How I Build
                </h2>
            </Reveal>

            <div className="max-w-3xl space-y-10">
                {failures.map((item, index) => (
                    <Reveal key={item.title}>
                        <div className="group">
                            <h3 className="text-lg font-medium text-white mb-3">
                                {item.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                <span className="text-gray-500">Mistake: </span>
                                {item.mistake}
                            </p>
                            <p className="text-gray-300 mt-2 leading-relaxed">
                                <span className="text-gray-500">What changed: </span>
                                {item.learning}
                            </p>
                            <div className="mt-4 h-px bg-gray-800" />
                        </div>
                    </Reveal>
                ))}
            </div>
        </Section>
    );
}