"use client";

import Section from "./Section";
import { Reveal } from "./Reveal";
import {
    Monitor,
    Server,
    Wrench,
    Layers,
    GitBranch,
    Target,
    LucideIcon,
} from "lucide-react";

type SkillCategory =
    | "Frontend"
    | "Backend"
    | "Tools"
    | "Architecture & Performance"
    | "Methodologies"
    | "Focus Areas";

const skillIcons: Record<SkillCategory, LucideIcon> = {
    Frontend: Monitor,
    Backend: Server,
    Tools: Wrench,
    "Architecture & Performance": Layers,
    Methodologies: GitBranch,
    "Focus Areas": Target,
};


export default function Skills() {
    const skills: {
        title: SkillCategory;
        items: string[];
    }[] = [
            {
                title: "Frontend",
                items: [
                    "React",
                    "Javascript",
                    "HTML",
                    "CSS",
                    "Next.js",
                    "TypeScript",
                    "Tailwind",
                    "Material UI",
                    "Responsive Design",
                    "SPA Architecture",
                    "Shadcn",
                    "RBAC-driven UI visibility",
                ],
            },
            {
                title: "Backend",
                items: [
                    "Node.js",
                    "GraphQL",
                    "Apollo",
                    "REST APIs",
                    "Express",
                    "Fastify",
                    "JWT Authentication",
                    "MongoDb",
                ],
            },
            {
                title: "Tools",
                items: [
                    "Git",
                    "Jest",
                    "Webpack",
                    "Jira",
                    "VS Code",
                    "Github Copilot",
                    "GitLab",
                    "Bitbucket",
                    "MixPanel",
                    "CI/CD Pipelines",
                    "Vite/Webpack",
                ],
            },
            {
                title: "Architecture & Performance",
                items: [
                    "Component Architecture",
                    "SPA Optimization",
                    "Performance Tuning",
                    "Caching Strategies",
                ],
            },
            {
                title: "Methodologies",
                items: [
                    "Agile",
                    "Scrum",
                    "Code Reviews",
                    "Mentoring",
                    "Sprint Planning",
                    "Cross-team Collaboration",
                ],
            },
            {
                title: "Focus Areas",
                items: ["Performance", "Scalability", "UX", "System Design"],
            },
        ];

    return (
        <Section title="" id="skills">
            <Reveal>
                <h2 className="text-2xl md:text-3xl font-medium mb-12">
                    Skills
                </h2>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-10">
                {skills.map((group, index) => {
                    const Icon = skillIcons[group.title];
                    return (
                        <Reveal key={group.title}>
                            <div className="group">
                                <div className="flex items-center gap-2 mb-4 text-gray-300 text-1xl tracking-wide uppercase">
                                    {Icon && (
                                        <Icon className="w-4 h-4 text-gray-400 group-hover:text-white transition" />
                                    )}
                                    {group.title}
                                </div>

                                <div className="flex flex-wrap gap-3">
                                    {group.items.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-3 py-1.5 text-sm text-gray-200 rounded-full bg-gray-800
                        transition-all duration-300
                        hover:scale-[1.05] hover:bg-white hover:text-black"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Reveal>
                    );
                })}
            </div>
        </Section>
    );
}