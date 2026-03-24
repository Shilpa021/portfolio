"use client";

import { useRef, useState } from "react";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "./Reveal";
import CaseStudyRenderer from "./CaseStudyRenderer";
import { caseStudies, CaseStudyKey } from "./../data/caseStudies";

const projects: {
    id: CaseStudyKey;
    title: string;
    desc: string;
    details: string[];
    tags: string[];
}[] = [
        {
            id: "prm",
            title: "PRM Sales & Service (Tata Play)",
            desc: "Built GraphQL BFF, reduced API calls by 40%, improved load time by 30%.",
            details: [
                "Designed GraphQL BFF layer using Fastify",
                "Reduced API calls by ~40%",
                "Improved load time by ~30%",
                "Led frontend architecture across modules",
            ],
            tags: ["Apollo GraphQL", "BFF", "Fastify", "React", "JWT", "Postman"]
        },
        {
            id: "tv",
            title: "Smart TV OTT Platform",
            desc: "Built React TV apps optimized for low memory devices.",
            details: [
                "Implemented spatial navigation",
                "Optimized rendering for low-memory devices",
                "Tracked user behavior via Mixpanel",
            ],
            tags: ["React", "OTT", "Spatial navigation", "Context API", "Mixpanel"]
        },
        {
            id: "ulta",
            title: "ULTA Beauty",
            desc: "Built Checkout and Product functionalities. Improved rendering performance by 25%.",
            details: [
                "Reduced re-renders using memoization",
                "Refactored component structure",
                "Improved performance by ~25%",
            ],
            tags: ["React", "Redux", "SCSS", "TDD", "Performance", "GraphQl", "Formik", "E-commerce"]

        },
        {
            id: "cdn",
            title: "CDN Manager",
            desc: "Reusable UI modules + analytics dashboards.",
            details: [
                "Built reusable UI across 3+ tools",
                "Implemented analytics using Recharts",
                "Standardized dashboard architecture",
            ],
            tags: ["React", "Context API", "SCSS", "Recharts", "Data Viz"]

        },
    ];

export default function Projects() {
    const [active, setActive] = useState<CaseStudyKey | null>(null);

    // 🔥 Track card refs
    const cardRefs = useRef<Record<string, HTMLDivElement | null>>({});

    // 🔥 Toggle handler (FOCUS FIX)
    const handleToggle = (id: CaseStudyKey) => {
    if (active === id) {
        // 👇 blur current element
        if (document.activeElement instanceof HTMLElement) {
            document.activeElement.blur();
        }

        setActive(null);

        // 👇 restore focus + scroll into view
        setTimeout(() => {
            const el = cardRefs.current[id];
            if (el) {
                el.focus();

                el.scrollIntoView({
                    behavior: "smooth",
                    block: "start", // 🔥 key part
                });
            }
        }, 50); // slight delay for layout animation
    } else {
        setActive(id);

        // 👇 optional: scroll opened card nicely
        setTimeout(() => {
            cardRefs.current[id]?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }, 100);
    }
};

    return (
        <section id="projects" className="mb-24">
            <Reveal>
                <h2 className="text-xl font-semibold mb-10">Selected Work</h2>
            </Reveal>

            <div className="space-y-6">
                {projects.map((project) => {
                    const isOpen = active === project.id;

                    return (
                        <motion.div
                            key={project.id}
                            layout
                            transition={{ type: "spring", stiffness: 120, damping: 20 }}
                        >
                            <Card
                                ref={(el) => {
                                    cardRefs.current[project.id] = el;
                                }}
                                tabIndex={0} // ✅ makes focusable
                                onClick={() => handleToggle(project.id)}
                                
                                // 🔥 keyboard accessibility
                                onKeyDown={(e) => {
                                    if (e.key === "Enter" || e.key === " ") {
                                        e.preventDefault();
                                        handleToggle(project.id);
                                    }
                                }}

                                className={`scroll-mt-32 cursor-pointer group border transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-orange-400
                                ${isOpen
                                        ? "bg-black border-orange-500 shadow-xl"
                                        : "bg-black/60 border-orange-400/90 hover:border-orange-400/50"
                                    }`}
                            >
                                <CardHeader>
                                    <CardTitle className="text-white text-lg">
                                        {project.title}
                                    </CardTitle>

                                    <p className="text-gray-400 mt-2">
                                        {project.desc}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mt-3">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="text-xs px-2 py-1 bg-gray-800 rounded-md text-gray-400 group-hover:text-white transition"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </CardHeader>

                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            key="content"
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <CardContent className="pt-0">
                                                <CaseStudyRenderer
                                                    study={caseStudies[project.id]}
                                                />
                                            </CardContent>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </Card>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}