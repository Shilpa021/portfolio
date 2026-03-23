"use client";

import { Reveal } from "./Reveal";
import Section from "./Section";

const principles = [
    "Start with user impact, not technology",
    "Evaluate tradeoffs (performance vs complexity)",
    "Optimize for long-term maintainability",
    "Align with team productivity and scalability",
];

export default function Decisions() {
    return (
        <Section id="decisions" sectionClass="mt-24">
            <Reveal>
                <h2 className="text-2xl md:text-2xl font-semibold mb-12">
                    How I Make Technical Decisions
                </h2>
            </Reveal>

            <div className="max-w-2xl space-y-4">
                {principles.map((item, index) => (
                    <Reveal key={item}>
                        <div className="group flex items-start gap-3 text-gray-400">
                            <span className="mt-2 w-2 h-2 rounded-full bg-gray-600 group-hover:bg-white transition" />
                            <p className="leading-relaxed transition group-hover:text-gray-200">
                                {item}
                            </p>
                        </div>
                    </Reveal>
                ))}
            </div>
        </Section>
    );
}