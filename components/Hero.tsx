import { motion } from "framer-motion";

export default function Hero() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="section relative"
        >
            <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full"></div>

            <h1 className="text-5xl font-bold mb-6">Shilpa Rana</h1>
            <h2 className="text-4xl font-semibold leading-tight max-w-2xl">
                I build frontend systems that scale —
                <span className="text-gray-500">
                    from UI components to architecture powering 100K+ users
                </span>
            </h2>

            <p className="mt-6 text-gray-400 max-w-xl">
                Frontend Tech Lead with 10+ years experience in React, GraphQL,
                and performance optimization. Focused on building systems,
                not just features.
            </p>
        </motion.section>
    );
}