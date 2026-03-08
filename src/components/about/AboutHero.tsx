import Image from "next/image";
import Button from "@/components/ui/Button";

export default function AboutHero() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "#FEFCF4", marginTop: 0 }}
    >
      {/* Accent blob */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: "900px",
          height: "700px",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(ellipse at center, rgba(254,243,208,0.35) 0%, rgba(254,243,208,0.15) 30%, transparent 60%)",
        }}
      />

      <div
        className="section-padding relative z-10 flex flex-col md:flex-row items-center"
        style={{
          paddingTop: "48px",
          paddingBottom: "48px",
          gap: "clamp(32px, 4vw, 46px)",
          maxWidth: "1440px",
          margin: "0 auto",
        }}
      >
        {/* ── Text side ── */}
        <div className="w-full md:flex-shrink-0" style={{ maxWidth: "550px" }}>
          <h1
            style={{
              fontFamily: "DM Sans, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(28px, 4.5vw, 48px)",  // ← 28px on mobile, 48px on desktop
              lineHeight: "clamp(34px, 5.5vw, 54px)",
              letterSpacing: "-0.02em",
              color: "#000000",
              marginBottom: "16px",
            }}
          >
            Nurturing Potential.
            <br />
            Delivering Excellence.
          </h1>

          <p
            style={{
              fontFamily: "DM Sans, sans-serif",
              fontWeight: 400,
              fontSize: "clamp(14px, 1.2vw, 16px)",
              lineHeight: "24px",
              letterSpacing: "-0.02em",
              color: "#6B6B7B",
              marginBottom: "28px",
            }}
          >
            We combine expert teaching, structured preparation, and genuine care to
            help every child thrive.
          </p>

          <div className="flex gap-3 flex-wrap">
            <Button label="Book a free call now" href="/contact" variant="primary" />
            <Button label="Learn more" href="#our-story" variant="secondary" />
          </div>
        </div>

        {/* ── Image side ── */}
        <div
          className="w-full md:flex-1"
          style={{
            maxWidth: "622px",
            width: "100%",
            aspectRatio: "622 / 500",
            position: "relative",
          }}
        >
          <Image
            src="/images/About-hero.png"
            alt="Student smiling"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 622px"
            priority
          />
        </div>
      </div>
    </section>
  );
}