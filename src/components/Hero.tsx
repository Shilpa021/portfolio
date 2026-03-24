"use client";

import { ShootingStars } from "@/components/ui/shooting-stars";
import { motion } from "framer-motion";
import ScrollIndicator from "./ScrollIndicator";
import { Reveal } from "./Reveal";

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center px-50 bg-gray-950 w-full relative" id="top">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center ">
                <Reveal delay={.3}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold ">
                            <span>
                                Frontend
                            </span> <br></br>
                            <span className=" ml-16 text-orange">Engineer.</span>
                        </h1>

                        <p className="mt-6 text-lg text-gray-600">
                            Senior Frontend Engineer building scalable, high-performance web
                            applications with React & modern technologies.
                        </p>
                        <h2 className="text-2xl font-semibold leading-tight max-w-2xl mt-20">
                            I build frontend systems that scale —
                            <span className="text-gray-500">
                                <span>{" "}</span>from UI components to architecture powering 100K+ users
                            </span>
                        </h2>

                    </motion.div>
                    <div className="hidden md:block">
                    <ScrollIndicator />

                    </div>
                </Reveal>

                <div
                    className={`absolute bottom-4 right-4 text-sm text-gray-500 text-right 
                                backdrop-blur-md px-3 py-2 rounded-xl shadow-sm
                                transition-all duration-500
                                `}
                >
                    <Reveal>
                        <p>Did you catch a shooting star?</p>
                        <p>Make a wish 💫</p>
                        <b className="text-orange">And Hire Me!</b>
                    </Reveal>
                </div>
                <ShootingStars />
            </div>
        </section>
    );
}