"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export function Reveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-80px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay },
      });
    } else {
      controls.start({
        opacity: 0,
        y: 40,
        transition: { duration: 0.4 },
      });
    }
  }, [isInView, controls, delay]);

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={controls}>
      {children}
    </motion.div>
  );
}