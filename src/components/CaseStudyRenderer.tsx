"use client";

import { motion } from "framer-motion";

export default function CaseStudyRenderer({ study }: any) {
    return (
        <div className="mt-6 space-y-6">

            {/* Subtitle */}
            <p className="text-gray-400">{study.subtitle}</p>

            {/* Sections */}
            {study.sections.map((section: any, i: number) => (
                <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                >
                    <h3 className="text-sm uppercase tracking-wide text-gray-500 mb-2">
                        {section.title}
                    </h3>

                    {section.content && (
                        <p className="text-gray-400 text-sm leading-relaxed">
                            {section.content}
                        </p>
                    )}

                    {section.list && (
                        <ul className="mt-2 space-y-1 text-sm text-gray-400">
                            {section.list.map((item: string, idx: number) => (
                                <li key={idx} className="flex gap-2">
                                    <span className="text-orange-400">•</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    )}
                </motion.div>
            ))}
        </div>
    );
}