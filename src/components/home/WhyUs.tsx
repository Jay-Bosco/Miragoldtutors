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
    title: <>Small Group Learning (6–8<br />Pupils)</>,
    description: "Individual attention within a collaborative environment that builds confidence and healthy competition.",
  },
  {
    icon: <ProgressIcon />,
    title: <>Weekly Progress &<br />Feedback</>,
    description: "Regular assessments, homework review, and detailed termly reports to keep parents fully informed.",
  },
  {
    icon: <MockExamsIcon />,
    title: "Realistic Mock Exams",
    description: "Three formal mock exams in Year 5 to simulate real exam conditions and boost performance under pressure.",
  },
];

  return (
    <section id="why" style={{ width: "100%", backgroundColor: "#FEFCF4", scrollMarginTop: "80px" }}>
      <div className="section-padding"
        style={{
          maxWidth: "1440px",
          margin: "0 auto",
        
          paddingTop: "80px",
          paddingBottom: "0",
          textAlign: "center",
        }}
      >
        <h2 className="font-display text-[24px] sm:text-[28px] md:text-[32px] font-bold text-dark leading-[1.2]" style={{ marginBottom: "16px" }}>
          Why Choose Us
        </h2>

        <p style={{ maxWidth: "794px", margin: "0 auto", marginBottom: "48px", fontSize: "16px", lineHeight: "24px", letterSpacing: "-0.02em" }} className="font-sans text-[#6B6B7B] font-normal">
  Our carefully designed Year 4 and Year 5 programmes provide complete preparation for 11+ and independent
  school entrance exams through a consistent weekly structure and measurable progress tracking.
</p>
      </div>

      {/* Cards area with wave background */}
      <div className="relative" style={{ width: "100%" }}>
        <WhyChooseUsBg className="absolute bottom-0 left-0 w-full h-[80%]" />

        <div
  className="relative z-10 section-padding"
  style={{
    maxWidth: "1440px",
    margin: "0 auto",
    paddingTop: "20px",
    paddingBottom: "80px",
  }}
>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-5">
    {features.map((feature, index) => (
      <div
        key={index}
        className="bg-white flex flex-col items-center text-center justify-start lg:min-h-[300px]"
        style={{
          padding: "20px",
          borderRadius: "16px",
          gap: "10px",
          boxShadow: "0px 10px 25px rgba(56, 56, 56, 0.05)",
        }}
      >
        <div style={{ marginBottom: "24px" }}>{feature.icon}</div>
        <h3 className="font-sans text-dark font-medium leading-[28px] whitespace-nowrap" style={{ fontSize: "20px", letterSpacing: "-0.02em" }}>
  {feature.title}
</h3>
        <p className="font-sans text-[#6B6B7B] font-normal leading-[24px]" style={{ fontSize: "16px", letterSpacing: "-0.02em" }}>
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