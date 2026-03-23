"use client";

import { Reveal } from "./Reveal";
import Section from "./Section";

const impacts = [
    { value: "100K+", label: "Users Impacted" },
    { value: "30%", label: "Performance Gains" },
    { value: "40%", label: "API Reduction" },
    { value: "10+", label: "Engineers Mentored" },
];

export default function Impact() {
    return (
        <section title="Impact" id="impact" className="mb-16">
            <Reveal>
                <h2 className="text-lg md:text-lg font-semibold mb-6">
                    Impact
                </h2>
            </Reveal>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {impacts.map((item, index) => (
                    <Reveal key={item.label}>
                        <div className="group">
                            <p className="text-3xl md:text-4xl font-bold text-white transition group-hover:scale-110">
                                {item.value}
                            </p>
                            <p className="text-gray-400 mt-2 text-sm tracking-wide">
                                {item.label}
                            </p>
                            <div className="mt-3 h-0.5 w-6 bg-gray-700 mx-auto group-hover:w-10 group-hover:bg-white transition-all duration-300" />
                        </div>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}