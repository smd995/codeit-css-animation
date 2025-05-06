"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface InViewSlideSectionProps {
  children: React.ReactNode;
  direction: "left" | "top" | "bottom";
  className?: string;
}

export default function InViewSlideSection({
  children,
  direction,
  className = "",
}: InViewSlideSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.8,
  });

  const variants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -100 : 0,
      y: direction === "top" ? -100 : direction === "bottom" ? 100 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
