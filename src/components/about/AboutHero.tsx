import Image from "next/image";
import Button from "@/components/ui/Button";

export default function AboutHero() {
  return (
    <section style={{ position: "relative", backgroundColor: "#FEFCF4", width: "100%", overflow: "hidden" }}>
      {/* Warm accent shape behind image */}
<div
  className="absolute pointer-events-none"
  style={{
    width: "900px",
    height: "700px",
    top: "40%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    background: "radial-gradient(ellipse at center, rgba(254, 243, 208, 0.35) 0%, rgba(254, 243, 208, 0.15) 30%, transparent 60%)",
    // filter: "blur(40px)",
  }}
/>

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          paddingLeft: "40px",
          paddingRight: "40px",
          paddingTop: "60px",
          paddingBottom: "60px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Text side */}
          <div className="flex-1">
            <h1
              className="font-display text-[28px] sm:text-[36px] md:text-[40px] lg:text-[46px] font-bold text-dark leading-[1.2]"
              style={{ marginBottom: "16px" }}
            >
              Nurturing Potential.<br />Delivering Excellence.
            </h1>
            <p
              className="font-sans text-[#6B6B7B] text-[13px] sm:text-[14px] md:text-[15px] leading-[1.7]"
              style={{ maxWidth: "500px", marginBottom: "28px" }}
            >
              We combine expert teaching, structured preparation, and genuine care to
              help every child thrive.
            </p>
            <div className="flex gap-3 flex-wrap">
              <Button label="Book a free call now" href="/contact" variant="primary" />
              <Button label="Learn more" href="#our-story" variant="secondary" />
            </div>
          </div>

          {/* Image side */}
<div className="flex-1 flex justify-center md:justify-end w-full">
  <div
    className="relative w-full"
    style={{ maxWidth: "500px", aspectRatio: "5/4" }}
  >
    <Image
      src="/images/About-hero.png"
      alt="Student smiling"
      fill
      className="object-contain"
      sizes="(max-width: 768px) 100vw, 500px"
    />
  </div>
</div>
        </div>
      </div>
    </section>
  );
}