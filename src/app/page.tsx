"use client";

import QuestionPage from "@/components/question-page";
import ResultPage from "@/components/result-page";
import StartPage from "@/components/start-page";
import { useState } from "react";

const questions = [
  {
    question: "사람들과 함께 있을 때 에너지가 충전되나요?",
    options: [
      "매우 그렇다",
      "약간 그렇다",
      "보통",
      "다소 그렇지 않다",
      "매우 그렇지 않다",
    ],
  },
  {
    question: "새로운 아이디어를 생각하는 것을 좋아하나요?",
    options: [
      "매우 그렇다",
      "약간 그렇다",
      "보통",
      "다소 그렇지 않다",
      "매우 그렇지 않다",
    ],
  },
  {
    question: "계획을 세우는 것을 선호하시나요?",
    options: [
      "매우 그렇다",
      "약간 그렇다",
      "보통",
      "다소 그렇지 않다",
      "매우 그렇지 않다",
    ],
  },
];

export default function Home() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const handleStart = () => {
    setCurrentStep(1);
  };

  const handleAnswer = (answer: string) => {
    setAnswers([...answers, answer]);
    if (answers.length + 1 === questions.length) {
      setCurrentStep(2);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      {currentStep === 0 && <StartPage onStart={handleStart} />}
      {currentStep === 1 && (
        <QuestionPage
          key={answers.length}
          question={questions[answers.length]}
          onAnswer={handleAnswer}
        />
      )}
      {currentStep === 2 && <ResultPage answers={answers} />}
    </div>
  );
}
