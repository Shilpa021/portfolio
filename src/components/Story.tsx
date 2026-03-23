"use client";

import Decisions from "./Decisions";
import Failure from "./Failure";
import { Reveal } from "./Reveal";
import Section from "./Section";

const story = [
    {
        text: "I started my journey as a frontend developer focused on shipping features and building clean user interfaces. At that stage, success meant delivering what was asked — quickly and correctly.",
    },
    {
        text: "As I worked on larger applications, I began noticing patterns — performance bottlenecks, tightly coupled systems, and increasing complexity that slowed teams down.",
    },
    {
        text: "This shift pushed me to think beyond components and into system design — how data flows, how components scale, and how small architectural decisions impact long-term velocity.",
    },
    {
        text: "Today, I focus on building scalable frontend architectures, optimizing performance, and enabling teams to move faster through better systems and clearer abstractions.",
    },
];

export default function Story() {
    return (
        <Section id="journey">
            <Reveal>
                <h2 className="text-2xl md:text-3xl font-semibold mb-12">
                    My Journey
                </h2>
            </Reveal>

            <div className="space-y-6">
                {story.map((item, index) => (
                    <Reveal key={index}>
                        <p className="text-gray-400 leading-relaxed">
                            {item.text}
                        </p>
                    </Reveal>
                ))}
            </div>

            <div className="my-16 h-px bg-gray-800 " />

            <Failure />
            <Decisions />
        </Section>
    );
}