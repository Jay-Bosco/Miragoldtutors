import Image from "next/image";
import Button from "@/components/ui/Button";

export default function CTABanner() {
  return (
    <section className="relative" style={{ width: "100%", overflow: "hidden", backgroundColor: "white", maxHeight: "600px" }}>
      {/* Background image */}
      <img
        src="/images/CTA-background.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{ objectPosition: "top" }}
      />

      <div
        className="relative z-10"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          paddingLeft: "40px",
          paddingRight: "40px",
          paddingTop: "100px",
          paddingBottom: "0",
        }}
      >
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Text side */}
          <div className="flex-1">
            <h2
              className="font-display text-[24px] sm:text-[28px] md:text-[32px] font-bold text-dark leading-[1.2]"
              style={{ marginBottom: "16px" }}
            >
              Give Your Child the Confidence to<br />Succeed
            </h2>
            <p
              className="font-sans text-[#6B6B7B] text-[13px] sm:text-[14px] md:text-[15px] leading-[1.7]"
              style={{ maxWidth: "500px", marginBottom: "20px" }}
            >
              We combine structure, encouragement, and academic excellence to help every
              child thrive in their entrance exams and beyond.
            </p>
            <Button label="Book a free call now" href="/contact" variant="primary" />
          </div>

          {/* Image side */}
          <div className="flex-1 flex justify-end">
            <div className="relative" style={{ width: "600px", height: "600px", marginRight: "-40px" }}>
              <Image
                src="/images/CTA-image.png"
                alt="Children studying together"
                fill
                className="object-contain"
                sizes="600px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}