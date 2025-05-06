"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const SLIDES = [
  "bg-red-500",
  "bg-blue-500",
  "bg-green-500",
  "bg-yellow-500",
  "bg-purple-500",
];

export default function SimpleSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + SLIDES.length) % SLIDES.length,
    );
  };

  return (
    <div className="relative mx-auto w-full max-w-2xl">
      <div className="relative h-64 overflow-hidden">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 1 }}
            className={`absolute h-full w-full ${SLIDES[currentIndex]}`}
          ></motion.div>
        </AnimatePresence>
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 -translate-y-1/2 transform rounded-full bg-black/50 p-2 text-white"
      >
        ←
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 -translate-y-1/2 transform rounded-full bg-black/50 p-2 text-white"
      >
        →
      </button>
    </div>
  );
}
