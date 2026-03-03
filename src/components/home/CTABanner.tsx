import Image from "next/image";
import Button from "@/components/ui/Button";

export default function CTABanner() {
  return (
    <section className="relative" style={{ width: "100%", overflow: "hidden", backgroundColor: "white" }}>
      {/* Background image */}
      <img
        src="/images/CTA-background.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{ objectPosition: "top" }}
      />

      <div
        className="relative z-10 px-6 sm:px-10"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          paddingTop: "60px",
          paddingBottom: "0",
        }}
      >
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
          {/* Text side */}
          <div className="flex-1 text-center md:text-left">
            <h2
  className="font-display text-[22px] sm:text-[28px] md:text-[32px] font-bold text-dark leading-[1.2] text-left"
  style={{ marginBottom: "12px" }}
>
  Give Your Child the Confidence to<br />Succeed
</h2>
            <p
              className="font-sans text-[#6B6B7B] text-[13px] sm:text-[14px] md:text-[15px] leading-[1.7] mx-auto md:mx-0"
              style={{ maxWidth: "500px", marginBottom: "20px" }}
            >
              We combine structure, encouragement, and academic excellence to help every
              child thrive in their entrance exams and beyond.
            </p>
            <div className="flex justify-center md:justify-start">
              <Button label="Book a free call now" href="/contact" variant="primary" />
            </div>
          </div>

          {/* Image side */}
          {/* Image side */}
{/* Image side */}
<div className="flex-1 flex justify-center md:justify-end w-full">
  <div
    className="relative md:-mr-10"
    style={{ width: "min(80vw, 600px)", height: "min(70vw, 420px)" }}
  >
    <Image
      src="/images/CTA-image.png"
      alt="Children studying together"
      fill
      className="object-contain"
      sizes="(max-width: 768px) 80vw, 600px"
    />
  </div>
</div>
        </div>
      </div>
    </section>
  );
}