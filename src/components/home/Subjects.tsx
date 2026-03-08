"use client";
import { EnglishIcon, MathematicsIcon, ReasoningIcon } from "@/components/ui/svg";

export default function WhatWeTeach() {
  const subjects = [
    {
      icon: <EnglishIcon />,
      title: "English",
      description: "Comprehension, vocabulary development, grammar precision, and structured writing.",
    },
    {
      icon: <MathematicsIcon />,
      title: "Mathematics",
      description: "Arithmetic fluency, problem-solving techniques, and advanced reasoning skills.",
    },
    {
      icon: <ReasoningIcon />,
      title: "Verbal & Non-Verbal Reasoning",
      description: "Pattern recognition, logic, and exam strategy tailored to GL, CEM, and ISEB formats.",
    },
  ];

  return (
    <section id="subjects" style={{ backgroundColor: "#FEFCF4", width: "100%", scrollMarginTop: "80px" }}>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
      `}</style>

      <div className="section-padding"
        style={{
          maxWidth: "1440px",
          margin: "0 auto",
          paddingTop: "60px",
          paddingBottom: "60px",
          textAlign: "center",
        }}
      >
        <h2 className="font-display font-bold text-dark leading-[1.2]" style={{ fontSize: "32px", marginBottom: "16px" }}>
          What We Teach
        </h2>

        <p style={{ maxWidth: "600px", margin: "0 auto", marginBottom: "32px", fontSize: "16px", lineHeight: "24px", letterSpacing: "-0.02em" }} className="font-sans text-[#6B6B7B] font-normal">
          We strengthen core academic skills while developing exam technique, speed, and resilience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {subjects.map((subject, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl flex items-start gap-4 text-left"
              style={{
                padding: "28px 24px",
                boxShadow: "0px 10px 25px rgba(56, 56, 56, 0.05)",
                animation: "float 3s ease-in-out infinite",
                animationDelay: `${index * 0.4}s`,
              }}
            >
              <div className="shrink-0">{subject.icon}</div>
              <div>
                <h3 className="font-sans text-dark font-medium leading-[28px]" style={{ fontSize: "20px", marginBottom: "8px", letterSpacing: "-0.02em" }}>
                  {subject.title}
                </h3>
                <p className="font-sans text-[#6B6B7B] font-normal leading-[24px]" style={{ fontSize: "16px", letterSpacing: "-0.02em" }}>
                  {subject.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}