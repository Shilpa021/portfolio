"use client";

import Impact from "./Impact";
import Projects from "./Projects";
import { Reveal } from "./Reveal";
import Section from "./Section";
import Signature from "./Signature";

const experiences = [
    {
        role: "Frontend Lead",
        company: "Infinite Computer Solutions",
        duration: "2022 — 2025",
        points: [
            "Improved application performance by ~30% through memoization and lazy loading",
            "Built scalable and reusable component architecture using React",
            "Optimized data fetching and reduced unnecessary re-renders",
            "Collaborated with backend teams to improve API efficiency",
        ],
    },
    {
        role: "Frontend Developer",
        company: "HCL Technologies",
        duration: "2014 — 2022",
        points: [
            "Developed responsive UI components and improved user experience",
            "Reduced UI bugs by implementing better state management practices",
            "Worked closely with design and product teams to ship features faster",
        ],
    },
];

export default function Experience() {
    return (
        <Section
            title="" id="experience"
        >
            <Reveal>
                <h2 className="text-2xl md:text-3xl font-medium mb-12">
                    Experience
                </h2>
            </Reveal>

            <div className="relative border-l border-gray-200 pl-6 space-y-12">
                {experiences.map((exp, index) => (
                    <Reveal key={index}>
                        <div className="relative">
                            <div className="absolute -left-2.5 top-2 w-3 h-3 bg-black rounded-full" />
                            <div>
                                <h3 className="text-lg font-medium">
                                    {exp.role}
                                </h3>

                                <p className="text-gray-500 text-sm">
                                    {exp.company} • {exp.duration}
                                </p>

                                <ul className="mt-4 space-y-2 text-gray-600">
                                    {exp.points.map((point, i) => (
                                        <li key={i} className="leading-relaxed">
                                            • {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </Reveal>
                ))}
            </div>
            <div className="pt-16 px-6 max-w-4xl mx-auto">
                <Projects />
                <Signature />
                <Impact />

            </div>
        </Section >
    );
}