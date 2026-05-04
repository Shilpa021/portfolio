"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Reveal } from "./Reveal";

type PersonalProject = {
    title: string;
    description: string;
    websiteUrl?: string;
    githubUrl: string;
    techStack: string[];
};

const personalProjects: PersonalProject[] = [
    {
        title: "Portfolio Website",
        description:
            "A modern developer portfolio with motion-based UI, reusable sections, and responsive layouts.",
        websiteUrl: "https://shilparana-portfolio.vercel.app/",
        githubUrl: "https://github.com/Shilpa021/portfolio",
        techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    },
    {
        title: "AI Meeting Summarizer",
        description:
            "An AI-powered app that converts meeting audio into structured insights including summaries, key points, and action items. Features audio upload, speech-to-text transcription, LLM-based summarization, robust JSON parsing, and a modern SaaS-style UI.",
        websiteUrl: "https://ai-meeting-summarizer-sooty.vercel.app",
        githubUrl: "https://github.com/Shilpa021/ai-meeting-summarizer",
        techStack: [
            "Next.js",
            "TypeScript",
            "Groq",
            "Cloudinary",
            "Tailwind CSS",
            "shadcn/ui"],
    },
    {
        title: "AI Brochure Generator",
        description:
        "An AI-powered content generation app that creates structured, marketing-ready brochures from user input using LLMs. Features real-time streaming output, prompt engineering, and a clean, modern UI for fast content creation.",
        websiteUrl: "https://ai-brochure-generator.vercel.app",
        githubUrl: "https://github.com/Shilpa021/ai-brochure-generator",
        techStack: [  "Next.js",
            "TypeScript",
            "LLM APIs",
            "Streaming APIs",
            "Tailwind CSS",
            "shadcn/ui"],
    },
];

export default function PersonalProjects() {
    return (
        <section className="mt-14">
            <Reveal>
                <h3 className="text-lg font-semibold mb-6">Personal GitHub Projects</h3>
            </Reveal>

            <div className="space-y-6">
                {personalProjects.map((project) => (
                    <Card
                        key={project.title}
                        className="group border transition-all duration-500 bg-black/60 border-orange-400/90 hover:border-orange-400/50"
                    >
                        <CardHeader>
                            <CardTitle className="text-white text-base">
                                {project.title}
                            </CardTitle>
                            <p className="text-gray-400 mt-2">{project.description}</p>
                        </CardHeader>

                        <CardContent className="pt-0">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.techStack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="text-xs px-2 py-1 bg-gray-800 rounded-md text-gray-400 group-hover:text-white transition"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-x-5 gap-y-2">
                                {project.websiteUrl ? (
                                    <a
                                        href={project.websiteUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-orange-400 hover:text-orange-300 transition underline underline-offset-4"
                                    >
                                        Live site
                                    </a>
                                ) : null}
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-gray-300 hover:text-white transition underline underline-offset-4"
                                >
                                    GitHub
                                </a>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
}
