import Image from "next/image";
import Button from "@/components/ui/Button";

export default function CTABanner() {
  return (
    <section className="relative" style={{ width: "100%", overflow: "hidden", backgroundColor: "white" }}>
      <img
        src="/images/CTA-background.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{ objectPosition: "top" }}
      />

      <div
        className="relative z-10 section-padding"
        style={{
          maxWidth: "1440px",
          margin: "0 auto",
          paddingTop: "40px",
          paddingBottom: "0",
        }}
      >
        <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-[127px]">

          {/* Text side */}
          <div className="w-full md:flex-shrink-0 text-left" style={{ maxWidth: "562px" }}>
            <h2
              className="font-display font-bold text-dark leading-[1.2]"
              style={{ fontSize: "clamp(24px, 3vw, 32px)", marginBottom: "12px" }}
            >
              Give Your Child the Confidence to
              <br />
              Succeed
            </h2>
            <p
              className="font-sans text-[#6B6B7B] leading-[1.7]"
              style={{ fontSize: "16px", marginBottom: "20px" }}
            >
              We combine structure, encouragement, and academic excellence to help every
              child thrive in their entrance exams and beyond.
            </p>
            <div className="flex justify-start">
              <Button label="Book a free call now" href="/contact" variant="primary" />
            </div>
          </div>

          {/* Image side */}
          <div className="flex-1 flex justify-center md:justify-end w-full">
            <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[551px] lg:h-[486px]">
              <Image
                src="/images/CTA-image.png"
                alt="Children studying together"
                fill
                className="object-contain"
                sizes="(max-width: 640px) 280px, (max-width: 768px) 350px, (max-width: 1024px) 400px, 551px"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}