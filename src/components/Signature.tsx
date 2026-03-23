"use client";

import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Reveal } from "./Reveal";

const items = [
    {
        title: "Scaling Frontend Architecture",
        desc: "Designed systems supporting 100K+ users with performance and maintainability.",
    },
    {
        title: "Performance Optimization",
        desc: "Consistently improved load times by 25–30% across projects.",
    },
    {
        title: "GraphQL BFF Systems",
        desc: "Reduced API complexity and improved frontend velocity.",
    },
    {
        title: "Team Leadership",
        desc: "Mentored engineers, reviewed code and improved delivery efficiency.",
    },
];

export default function Signature() {
    return (
        <section title="What I’m Known For" id="signature" className="mb-16">
            <Reveal>
                <h2 className="text-lg md:text-lg font-semibold mb-6">
                    What I’m Known For
                </h2>
            </Reveal>

            <div className="grid gap-6 md:grid-cols-2">
                {items.map((item, index) => (
                    <Reveal key={item.title}>
                        <Card className="group bg-black border border-orange-400/90 hover:border-orange-600/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                            <CardHeader>
                                <CardTitle className="text-amber-50">
                                    <span>⚡</span>  {item.title}
                                </CardTitle>

                                <CardDescription className="text-gray-400 mt-2 leading-relaxed">
                                    {item.desc}
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}