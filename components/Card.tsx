"use client";

import { motion } from "framer-motion";

export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="card hover:border-gray-500 hover:shadow-lg hover:shadow-black/30"
    >
      {children}
    </motion.div>
  );
}