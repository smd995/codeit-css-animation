"use client";

import { motion, useScroll, useTransform } from "motion/react";

const PAGE_COUNT = 5;

function ScrollLinked() {
  const { scrollYProgress } = useScroll();
  // 2. 현재 스크롤 위치를 기반으로 클립 경로 계산
  const clipPath = useTransform(
    scrollYProgress,
    (scrollYProgress) => `circle(${scrollYProgress * 100}%)`,
  );

  return (
    <div className="h-full w-full bg-gray-900">
      <div className="fixed inset-0">
        <motion.div
          className="absolute top-1/2 left-1/2 flex h-full w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-orange-500"
          style={{ clipPath }}
        >
          <div className="text-center">
            <h1 className="flex flex-col gap-4 text-8xl font-bold text-blue-600">
              <span>
                <motion.span>Aha!</motion.span>
              </span>
              <span>
                <motion.span>You found me!</motion.span>
              </span>
            </h1>
          </div>
        </motion.div>
      </div>
      {new Array(PAGE_COUNT).fill(null).map((_, index) => (
        <div className="h-screen w-screen" key={index} />
      ))}
    </div>
  );
}

export default ScrollLinked;
