"use client";

import Section from "./Section";
import Link from "next/link";
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

const projects = [
    {
        title: "PRM Sales & Service (Tata Play)",
        desc: "Built GraphQL BFF, reduced API calls by 40%, improved load time by 30%.",
        link: "/case-study/prm",
        tags: ["Apollo GraphQL", "BFF", "Fastify", "React", "JWT", "Postman"]
    },
    {
        title: "Smart TV Platform",
        desc: "Built React TV apps optimized for low memory devices.",
        link: "/case-study/tv",
        tags: ["React", "OTT", "Spatial navigation", "Context API", "Mixpanel"]
    },
    {
        title: "ULTA Beauty",
        desc: "Improved rendering performance by 25% via memoization.",
        link: "/case-study/ulta",
        tags: ["React", "Redux", "SCSS", "TDD", "Performance", "GraphQl", "Formik"]
    },
    {
        title: "CDN Manager",
        desc: "Handles huge data and created Charts and Analytics site",
        link: "/case-study/cdn",
        tags: ["React", "Context API", "SCSS", "Recharts.js", "Data Visualization"]
    },
];

const MotionCard = motion.create(Card);

export default function Projects() {
    return (
        <section title="Selected Work" id="projects" className="mb-16">
            <Reveal>
                <h2 className="text-lg md:text-lg font-semibold mb-6">
                    Selected Work
                </h2>
            </Reveal>
            <Reveal>
                <div className="grid gap-6">
                    {projects.map((project) => (
                        <Reveal 
                                key={project.title}
                        >
                            <MotionCard
                                key={project.title}
                                whileHover={{ y: -6, scale: 1.01 }}
                                transition={{ type: "spring", stiffness: 200 }}
                                className="group bg-black border border-orange-400/90 hover:border-orange-600/70 transition-all duration-300 hover:shadow-lg"
                            >
                                <CardHeader>
                                    <CardTitle className="text-amber-50">
                                        {project.title}
                                    </CardTitle>

                                    <CardDescription className="text-gray-400 mt-2 leading-relaxed">
                                        {project.desc}
                                    </CardDescription>
                                    <div className="mt-3 flex gap-2 flex-wrap">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="text-xs px-2 py-1 bg-gray-800 rounded-md text-gray-400"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </CardHeader>

                                <CardFooter>
                                    <Link
                                        href={project.link}
                                        className="text-blue-500 text-sm inline-block transition group-hover:translate-x-1"
                                    >
                                        Read Case Study →
                                    </Link>
                                </CardFooter>
                            </MotionCard>
                        </Reveal>
                    ))}
                </div>
            </Reveal>
        </section>
    );
}