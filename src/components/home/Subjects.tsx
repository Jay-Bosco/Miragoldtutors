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
    <section id="subjects" style={{ backgroundColor: "#FEFCF4", width: "100%" }}>
    
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          paddingLeft: "24px",
          paddingRight: "24px",
          paddingTop: "80px",
          paddingBottom: "80px",
          textAlign: "center",
        }}
      >
        <h2 className="font-display text-[24px] sm:text-[28px] md:text-[32px] font-bold text-dark leading-[1.2]" style={{ marginBottom: "16px" }}>
          What We Teach
        </h2>

        <p style={{ maxWidth: "600px", margin: "0 auto", marginBottom: "48px" }} className="font-sans text-[#6B6B7B] text-[13px] sm:text-[14px] md:text-[15px] leading-[1.7]">
          We strengthen core academic skills while developing exam technique, speed, and resilience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {subjects.map((subject, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl flex items-start gap-4 text-left"
              style={{ padding: "28px 24px", boxShadow: "0px 10px 25px rgba(56, 56, 56, 0.05)" }}
            >
              <div className="shrink-0">{subject.icon}</div>
              <div>
                <h3 className="font-sans text-dark text-[14px] sm:text-[15px] font-semibold leading-[1.3]" style={{ marginBottom: "8px" }}>
                  {subject.title}
                </h3>
                <p className="font-sans text-[#6B6B7B] text-[12px] sm:text-[13px] leading-[1.6]">
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