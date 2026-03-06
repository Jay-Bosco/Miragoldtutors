"use client";
import { useState } from "react";

const faqs = [
  {
    question: "How much homework will my child receive?",
    answer: "1–2 hours per week, depending on progress and group level.",
  },
  {
    question: "Can my child join mid-year",
    answer: "Yes, we welcome students throughout the year. Our tutors will assess your child's level and place them in the most suitable group to ensure they catch up quickly.",
  },
  {
    question: "What if my child misses a lesson?",
    answer: "We provide catch-up materials and recordings where available. Your child can also attend a different session in the same week, subject to availability.",
  },
  {
    question: "Are all tutors DBS-checked?",
    answer: "Yes, all our tutors are fully DBS-checked and have undergone safeguarding training to ensure the safety of every child.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faqs" style={{ width: "100%", backgroundColor: "white", scrollMarginTop: "80px"  }}>
      <div
        style={{
          maxWidth: "750px",
          margin: "0 auto",
          paddingLeft: "24px",
          paddingRight: "24px",
          paddingTop: "60px",
          paddingBottom: "80px",
          textAlign: "center",
        }}
      >
        <h2
          className="font-display text-[24px] sm:text-[28px] md:text-[32px] font-bold text-dark leading-[1.2]"
          style={{ marginBottom: "40px" }}
        >
          Frequently Asked Questions
        </h2>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="text-left"
                style={{
                  backgroundColor: "#F0F9FF",
                  borderRadius: "16px",
                  padding: "20px 24px",
                  cursor: "pointer",
                }}
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
              >
                <div className="flex items-center justify-between">
                  <p className="font-sans text-dark text-[14px] sm:text-[15px] font-medium leading-[1.4]">
                    {faq.question}
                  </p>
                  <div
                    className="w-9 h-9 rounded-full bg-[#4A90D9] flex items-center justify-center shrink-0"
                    style={{ marginLeft: "16px" }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.3s ease",
                      }}
                    >
                      <path
                        d="M6 9l6 6 6-6"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                {isOpen && (
                  <p
                    className="font-sans text-[#6B6B7B] text-[13px] sm:text-[14px] leading-[1.7]"
                    style={{ marginTop: "12px" }}
                  >
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}