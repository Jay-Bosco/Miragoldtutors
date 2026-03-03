import { WhyChooseUsBg, CurriculumIcon, SmallGroupIcon, ProgressIcon, MockExamsIcon } from "@/components/ui/svg";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <CurriculumIcon />,
      title: "Comprehensive Curriculum",
      description: "English, Mathematics, Verbal & Non-Verbal Reasoning, taught through proven strategies and exam-focused practice.",
    },
    {
      icon: <SmallGroupIcon />,
      title: "Small Group Learning (6–8 Pupils)",
      description: "Individual attention within a collaborative environment that builds confidence and healthy competition.",
    },
    {
      icon: <ProgressIcon />,
      title: "Weekly Progress & Feedback",
      description: "Regular assessments, homework review, and detailed termly reports to keep parents fully informed.",
    },
    {
      icon: <MockExamsIcon />,
      title: "Realistic Mock Exams",
      description: "Three formal mock exams in Year 5 to simulate real exam conditions and boost performance under pressure.",
    },
  ];

  return (
    <section style={{ width: "100%", backgroundColor: "#FEFCF4" }}>
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          paddingLeft: "40px",
          paddingRight: "40px",
          paddingTop: "80px",
          paddingBottom: "0",
          textAlign: "center",
        }}
      >
        <h2 className="font-display text-[24px] sm:text-[28px] md:text-[32px] font-bold text-dark leading-[1.2]" style={{ marginBottom: "16px" }}>
          Why Choose Us
        </h2>

        <p style={{ maxWidth: "700px", margin: "0 auto", marginBottom: "48px" }} className="font-sans text-[#6B6B7B] text-[13px] sm:text-[14px] md:text-[15px] leading-[1.7]">
          Our carefully designed Year 4 and Year 5 programmes provide complete preparation for 11+ and independent
          school entrance exams through a consistent weekly structure and measurable progress tracking.
        </p>
      </div>

      {/* Cards area with wave background */}
      <div className="relative" style={{ width: "100%" }}>
        <WhyChooseUsBg className="absolute bottom-0 left-0 w-full h-[80%]" />

        <div
          className="relative z-10"
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            paddingLeft: "40px",
            paddingRight: "40px",
            paddingTop: "20px",
            paddingBottom: "80px",
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white flex flex-col items-center text-center justify-start"
                style={{
                  padding: "28px 20px",
                  borderRadius: "16px",
                  gap: "10px",
                  boxShadow: "0px 10px 25px rgba(56, 56, 56, 0.05)",
                  minHeight: "280px",
                }}
              >
                <div style={{ marginBottom: "28px" }}>{feature.icon}</div>
                <h3 className="font-sans text-dark text-[14px] sm:text-[15px] font-semibold leading-[1.3]">
                  {feature.title}
                </h3>
                <p className="font-sans text-[#6B6B7B] text-[12px] sm:text-[13px] leading-[1.6]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}