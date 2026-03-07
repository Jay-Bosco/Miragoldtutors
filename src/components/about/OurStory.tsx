import Image from "next/image";

export default function OurStory() {
  return (
    <section id="our-story" style={{ width: "100%", backgroundColor: "white" }}>
      <div
        className="section-padding flex flex-col md:flex-row items-start"
        style={{
          maxWidth: "1440px",
          margin: "0 auto",
          paddingTop: "clamp(40px, 5vw, 60px)",
          paddingBottom: "clamp(40px, 5vw, 60px)",
          gap: "clamp(40px, 6vw, 76px)",
        }}
      >
        {/* ── Images side ── */}
        <div
          className="w-full md:flex-shrink-0"
          style={{
            width: "min(503px, 100%)",
            aspectRatio: "503 / 426",
            position: "relative",
          }}
        >
          {/* Image 1 — top-left */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "57.6%",   // 290/503
              height: "68%",    // 290/426
              borderRadius: "20px",
              border: "4px solid #F9C219",
              overflow: "hidden",
            }}
          >
            <Image
              src="/images/About-story1.png"
              alt="Students learning"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 58vw, 290px"
            />
          </div>

          {/* 8+ badge */}
          <div
            style={{
              position: "absolute",
              top: "31.9%",   // 136/426
              left: "32.2%",  // 162/503
              width: "34.6%", // 174/503
              height: "36.2%",// 154/426
              borderRadius: "20px",
              border: "4px solid #FFFFFF",
              backgroundColor: "#F9C219",
              zIndex: 10,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                fontFamily: "DM Sans, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(18px, 3vw, 32px)",
                lineHeight: 1,
                color: "#1A1A2E",
              }}
            >
              8+
            </span>
            <span
              style={{
                fontFamily: "DM Sans, sans-serif",
                fontSize: "clamp(9px, 1.2vw, 11px)",
                color: "rgba(26,26,46,0.7)",
                marginTop: "4px",
                textAlign: "center",
                lineHeight: "1.3",
              }}
            >
              Years of experience
            </span>
          </div>

          {/* Image 2 — bottom-right */}
          <div
            style={{
              position: "absolute",
              top: "31.9%",   // 136/426
              left: "42.3%",  // 213/503
              width: "57.6%", // 290/503
              height: "68%",  // 290/426
              borderRadius: "20px",
              border: "4px solid #F9C219",
              overflow: "hidden",
            }}
          >
            <Image
              src="/images/About-story2.png"
              alt="Students studying"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 58vw, 290px"
            />
          </div>
        </div>

        {/* ── Text side ── */}
        <div className="flex-1 min-w-0">
          <h2
            style={{
              fontFamily: "DM Sans, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(22px, 3vw, 32px)",
              lineHeight: "1.2",
              color: "#1A1A2E",
              marginBottom: "20px",
            }}
          >
            Our Story
          </h2>

          <div
            style={{
              fontFamily: "DM Sans, sans-serif",
              fontWeight: 400,
              fontSize: "clamp(14px, 1.2vw, 16px)",
              lineHeight: "24px",
              letterSpacing: "-0.02em",
              color: "#222222",
            }}
          >
            <p style={{ marginBottom: "16px" }}>
              At Miragold 11 Plus Tutors, our programme helps children prepare confidently and effectively
              for 11 Plus entrance and other school leavers exams. Since 2018, Miragold Tutors has been
              helping children excel confidently in their entrance examinations — guiding them into top
              grammar and independent schools across the UK. We believe every child has the potential to
              excel and thrive, and our mission is to unlock that brilliance through expert teaching,
              mentorship, and care.
            </p>

            <p style={{ marginBottom: "12px" }}>
              Our full syllabus consists of 36 normal weekly units, the pack of 6 summer lessons and 3
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
    </section>
  );
}