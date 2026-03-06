import Image from "next/image";
import Button from "@/components/ui/Button";
import { PlayIcon, HeroDecorBg } from "@/components/ui/svg";

export default function Hero() {
  return (
    <section style={{ position: "relative", backgroundColor: "#FEFCF4", width: "100%" }}>
  <HeroDecorBg
  className="pointer-events-none"
  style={{
    position: "absolute",
    top: "-28px",
    left: "-25%",
    transform: "skewX(-28deg)",
    width: "130%",
    height: "calc(100%)",
    zIndex: 0,
  }}
/>

      <div className="absolute top-0 right-0 w-75 sm:w-100 md:w-150 h-75 sm:h-100 md:h-150 rounded-full bg-[radial-gradient(ellipse,rgba(74,144,217,0.07)_0%,transparent_70%)] pointer-events-none" />

      <div
        className="relative z-10"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          paddingLeft: "24px",
          paddingRight: "24px",
          paddingTop: "40px",
          paddingBottom: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <h1 className="font-display text-[28px] sm:text-[36px] md:text-[40px] lg:text-[46px] font-bold text-dark leading-[1.2]" style={{ marginBottom: "16px" }}>
          Confident Children.
          <br />
          Outstanding Results.
        </h1>

        <p style={{ maxWidth: "620px", marginBottom: "24px" }} className="font-sans text-[#6B6B7B] text-[13px] sm:text-[14px] md:text-[15px] leading-[1.7]">
          Structured lessons, small groups, and personalised guidance to help your child excel
          <br />
          with confidence.
        </p>

        <div className="flex gap-3 flex-wrap justify-center" style={{ marginBottom: "32px" }}>
          <Button label="Book a free call now" href="/contact" variant="primary" />
          <Button label="Learn more" href="/about" variant="secondary" />
        </div>

        <div className="relative w-full max-w-[100%] lg:max-w-[1100px] mx-auto" style={{ aspectRatio: "1099/521" }}>

          <img
            src="/images/background-blue.png"
            alt=""
            className="absolute inset-0 w-full h-full object-fill pointer-events-none z-0"
          />

          <div className="absolute top-3 left-3 right-3 bottom-3 sm:top-4 sm:left-4 sm:right-4 sm:bottom-4 md:top-4 md:left-5 md:right-5 md:bottom-4 z-1 rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.10)]">
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <button
                aria-label="Play video"
                className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-white/26 flex items-center justify-center hover:scale-105 transition-transform cursor-pointer"
              >
                <PlayIcon />
              </button>
            </div>

            <Image
              src="/images/Hero.png"
              alt="Children studying with tutor"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 640px) 90vw, (max-width: 768px) 600px, (max-width: 1024px) 700px, 750px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}