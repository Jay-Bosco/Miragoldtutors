import Image from "next/image";

export default function OurStory() {
  return (
    <section id="our-story" style={{ width: "100%", backgroundColor: "white" }}>
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          paddingLeft: "40px",
          paddingRight: "40px",
          paddingTop: "80px",
          paddingBottom: "80px",
        }}
      >
        <div className="flex flex-col md:flex-row gap-12 items-start">
         {/* Images side */}
<div className="flex-1 relative" style={{ minHeight: "500px" }}>
  {/* Top image with yellow border */}
  <div
    className="relative overflow-hidden"
    style={{
      width: "240px",
      height: "220px",
      marginLeft: "40px",
      border: "3px solid #F5C842",
      borderRadius: "16px",
    }}
  >
    <Image
      src="/images/About-story1.png"
      alt="Students learning"
      fill
      className="object-cover"
      sizes="240px"
    />
  </div>

  {/* 8+ badge - bridging both images */}
  <div
    className="relative bg-[#F5C842] rounded-2xl flex flex-col items-center justify-center"
    style={{
      width: "130px",
      height: "120px",
      marginTop: "-120px",
      marginLeft: "180px",
      zIndex: 10,
      border: "5px solid white",
    }}
  >
    <span className="font-display text-[32px] font-bold text-dark leading-none">8+</span>
    <span className="font-sans text-[11px] text-dark/70 leading-tight text-center" style={{ marginTop: "4px" }}>
      Years of experience
    </span>
  </div>

  {/* Bottom image with yellow border */}
  <div
    className="relative overflow-hidden"
    style={{
      width: "240px",
      height: "220px",
      marginTop: "-120px",
      marginLeft: "240px",
      border: "3px solid #F5C842",
      borderRadius: "16px",
    }}
  >
    <Image
      src="/images/About-story2.png"
      alt="Students studying"
      fill
      className="object-cover"
      sizes="240px"
    />
  </div>
</div>

          {/* Text side */}
          <div className="flex-1">
            <h2
              className="font-display text-[24px] sm:text-[28px] md:text-[32px] font-bold text-dark leading-[1.2]"
              style={{ marginBottom: "20px" }}
            >
              Our Story
            </h2>

            <div className="font-sans text-[#6B6B7B] text-[13px] sm:text-[14px] leading-[1.8]">
              <p style={{ marginBottom: "16px" }}>
                At Miragold 11 Plus Tutors, our programme helps children prepare confidently and effectively
                for 11 Plus entrance and other school leavers exams. Since 2018, Miragold Tutors has been
                helping children excel confidently in their entrance examinations — guiding them into top
                grammar and independent schools across the UK. We believe every child has the potential to
                excel and thrive, and our mission is to unlock that brilliance through expert teaching,
                mentorship, and care.
              </p>

              <p style={{ marginBottom: "12px" }}>
                Our full syllabus consists of 30 normal weekly units, the pack of 6 summer lessons and 3
                mandatory mock exams for Year 5 during the summer term. The classes focus on:
              </p>

              <ul className="list-disc" style={{ paddingLeft: "20px", marginBottom: "16px" }}>
                <li style={{ marginBottom: "4px" }}>English (Comprehension, Vocabulary, Grammar & Writing)</li>
                <li style={{ marginBottom: "4px" }}>Mathematics (Problem-Solving, Arithmetic, and Reasoning)</li>
                <li>Verbal and Non-Verbal Reasoning</li>
              </ul>

              <p style={{ marginBottom: "12px" }}>
                Our classes of small groups (typically 6–8 pupils) combine individual support with
                collaborative learning. Lesson plans and structure include:
              </p>

              <ul className="list-disc" style={{ paddingLeft: "20px" }}>
                <li style={{ marginBottom: "4px" }}>Review of previous work</li>
                <li style={{ marginBottom: "4px" }}>Teaching of new concepts and strategies</li>
                <li style={{ marginBottom: "4px" }}>Guided and independent practice</li>
                <li>Regular feedback and assessment</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}