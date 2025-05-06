"use client";

import { motion } from "motion/react";

export default function StartPage({ onStart }: { onStart: () => void }) {
  return (
    <motion.div className="text-center">
      <motion.h1
        className="mb-8 text-4xl font-bold"
        initial={{ opacity: 0, scale: 0.2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        MBTI 테스트
      </motion.h1>
      <motion.button
        onClick={onStart}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="cursor-pointer rounded-lg bg-blue-500 px-6 py-3 text-lg text-white"
      >
        시작하기
      </motion.button>
    </motion.div>
  );
}
