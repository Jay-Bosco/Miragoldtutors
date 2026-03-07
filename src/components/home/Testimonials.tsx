"use client";
import { useState } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { PlayIcon } from "@/components/ui/svg";

const featuredTestimonials = [
  {
    body: "Through consistent effort, practice exams, and weekly homework reviews, Arjun's confidence grew tremendously. By the summer term, he achieved top scores in both GL mock exams.",
    author: "Juliana George",
    role: "Parent",
    image: "/images/Testimonial.png",
  },
  {
    body: "My daughter went from dreading maths to actually asking for extra practice sheets. The tutors made learning fun while keeping the focus on real exam preparation.",
    author: "Sarah Mitchell",
    role: "Parent",
    image: "/images/Testimonial.png",
  },
  {
    body: "We were amazed at how quickly our son improved. The small group setting gave him the confidence to ask questions and the mock exams prepared him perfectly.",
    author: "David & Priya Okonkwo",
    role: "Parents",
    image: "/images/Testimonial.png",
  },
];

const testimonialPages = [
  [
    {
      title: "Arjun – From Quiet Learner to Top Scorer",
      body: "Arjun joined Miragold Tutors at the start of Year 5. Initially shy and hesitant in Maths reasoning, he quickly benefited from our small group approach and targeted feedback. Through consistent effort, practice exams, and weekly homework reviews, Arjun's confidence grew tremendously.",
      quote: "\"The structured lessons and regular feedback made all the difference. Arjun looked forward to class every week!\"",
      author: "Arjun's Parents",
    },
    {
      title: "Sofia – Building Confidence in English",
      body: "Sofia joined midway through Year 5 after struggling with comprehension and timed writing. Our tutor identified key areas for improvement and created a tailored plan, including extra reading and vocabulary tasks. Within months, Sofia's writing became more fluent, and her mock exam results improved from 58% to 86%.",
      quote: "\"Sofia's enthusiasm and confidence blossomed — she became an independent learner who genuinely enjoyed English.\"",
      author: "Sofia's Teacher",
    },
  ],
  [
    {
      title: "Ethan – Conquering Non-Verbal Reasoning",
      body: "Ethan struggled with pattern recognition and spatial reasoning. After joining Miragold, his tutor introduced visual strategies and timed drills that transformed his approach. Within two terms, Ethan went from scoring in the 40th percentile to the 85th percentile in NVR mock exams.",
      quote: "\"Ethan now tackles reasoning puzzles with excitement. The change has been incredible to watch.\"",
      author: "Ethan's Mother",
    },
    {
      title: "Amara – A Journey to Grammar School",
      body: "Amara's family had always dreamed of grammar school but weren't sure how to prepare. Miragold's structured programme gave Amara the skills and confidence she needed. She passed all four of her entrance exams and secured a place at her first-choice school.",
      quote: "\"We couldn't have done it without Miragold. Amara's tutors believed in her even when she doubted herself.\"",
      author: "Amara's Father",
    },
  ],
  [
    {
      title: "Liam – Overcoming Exam Anxiety",
      body: "Liam was academically capable but froze during timed tests. His tutor worked on exam technique, time management, and building mental resilience. The realistic mock exams were a game-changer — by exam day, Liam felt calm and prepared.",
      quote: "\"The mock exams made the real thing feel familiar. Liam walked in confident and came out smiling.\"",
      author: "Liam's Parents",
    },
    {
      title: "Zara – From Average to Outstanding",
      body: "Zara was performing at an average level across all subjects when she joined in Year 4. The early start gave her time to build strong foundations. By Year 5, she was consistently scoring in the top 10% of her class and passed her 11+ with flying colours.",
      quote: "\"Starting early was the best decision. Zara had time to grow without pressure, and the results speak for themselves.\"",
      author: "Zara's Parents",
    },
  ],
];

const ArrowButton = ({ onClick, direction, label }: { onClick: () => void; direction: "left" | "right"; label: string }) => (
  <button
    onClick={onClick}
    className="w-10 h-10 rounded-full bg-[#F5C842] flex items-center justify-center hover:bg-[#E5B832] hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer"
    aria-label={label}
  >
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path
        d={direction === "left" ? "M15 18l-6-6 6-6" : "M9 18l6-6-6-6"}
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </button>
);

export default function Testimonials() {
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const [cardPage, setCardPage] = useState(0);
  const [featuredDir, setFeaturedDir] = useState<"left" | "right">("right");
  const [cardDir, setCardDir] = useState<"left" | "right">("right");
  const [featuredAnimating, setFeaturedAnimating] = useState(false);
  const [cardAnimating, setCardAnimating] = useState(false);

  const featured = featuredTestimonials[featuredIndex];
  const currentCards = testimonialPages[cardPage];

  const nextFeatured = () => {
    if (featuredAnimating) return;
    setFeaturedDir("right");
    setFeaturedAnimating(true);
    setTimeout(() => {
      setFeaturedIndex((prev) => (prev + 1) % featuredTestimonials.length);
      setFeaturedAnimating(false);
    }, 300);
  };

  const prevFeatured = () => {
    if (featuredAnimating) return;
    setFeaturedDir("left");
    setFeaturedAnimating(true);
    setTimeout(() => {
      setFeaturedIndex((prev) => (prev - 1 + featuredTestimonials.length) % featuredTestimonials.length);
      setFeaturedAnimating(false);
    }, 300);
  };

  const nextCards = () => {
    if (cardAnimating) return;
    setCardDir("right");
    setCardAnimating(true);
    setTimeout(() => {
      setCardPage((prev) => (prev + 1) % testimonialPages.length);
      setCardAnimating(false);
    }, 300);
  };

  const prevCards = () => {
    if (cardAnimating) return;
    setCardDir("left");
    setCardAnimating(true);
    setTimeout(() => {
      setCardPage((prev) => (prev - 1 + testimonialPages.length) % testimonialPages.length);
      setCardAnimating(false);
    }, 300);
  };

  return (
    <section style={{ width: "100%", backgroundColor: "white" }}>
      <div
        className="section-padding"
        style={{ maxWidth: "1440px", margin: "0 auto", paddingTop: "60px", paddingBottom: "60px" }}
      >
        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between" style={{ marginBottom: "48px" }}>
          <div>
            <h2
              className="font-display font-bold text-dark leading-[1.2]"
              style={{ fontSize: "clamp(22px, 3vw, 32px)", marginBottom: "12px" }}
            >
              Success Stories
            </h2>
            <p className="font-sans text-[#6B6B7B] text-[13px] sm:text-[14px] md:text-[15px] leading-[1.7]">
              We measure success not just by scores but by confidence, growth, and independence.
            </p>
          </div>
          <div className="mt-4 md:mt-0 shrink-0">
            <Button label="Book a free call now" href="/contact" variant="primary" />
          </div>
        </div>

        {/* Featured testimonial */}
        <div style={{ marginBottom: "48px" }}>
          <div className="flex flex-col md:flex-row gap-8 items-stretch overflow-hidden">

            {/* Text side */}
            <div className="md:w-[40%] flex flex-col justify-between">
              <div
                className="transition-all duration-500 ease-out"
                style={{
                  opacity: featuredAnimating ? 0 : 1,
                  transform: featuredAnimating
                    ? `translateX(${featuredDir === "right" ? "-30px" : "30px"})`
                    : "translateX(0)",
                }}
              >
                <p
                  className="font-sans text-[#3A3A4A] text-[13px] sm:text-[14px] md:text-[15px] leading-[1.8]"
                  style={{ marginBottom: "32px", maxWidth: "520px" }}
                >
                  {featured.body}
                </p>
                <div>
                  <div style={{ width: "100%", maxWidth: "430px", height: "1px", backgroundColor: "#E0E0E0", marginBottom: "16px" }} />
                  <p className="font-sans text-dark text-[14px] sm:text-[15px] font-semibold">{featured.author}</p>
                  <p className="font-sans text-[#6B6B7B] text-[12px] sm:text-[13px]">{featured.role}</p>
                </div>
              </div>

              {/* Arrows — desktop only, below text */}
              <div className="hidden md:flex gap-3" style={{ marginTop: "24px" }}>
                <ArrowButton onClick={prevFeatured} direction="left" label="Previous" />
                <ArrowButton onClick={nextFeatured} direction="right" label="Next" />
              </div>
            </div>

            {/* Image side */}
            <div
              className="md:w-[58%] relative rounded-2xl overflow-hidden"
              style={{ minHeight: "340px" }}
            >
              <div
                className="absolute inset-0 transition-all duration-700 ease-out"
                style={{
                  opacity: featuredAnimating ? 0 : 1,
                  transform: featuredAnimating ? "scale(1.05)" : "scale(1)",
                }}
              >
                <Image
                  src={featured.image}
                  alt="Parent testimonial"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 58vw"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <button
                  aria-label="Play video"
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-white/15 flex items-center justify-center hover:scale-110 hover:bg-white/25 active:scale-95 transition-all duration-300 cursor-pointer"
                >
                  <PlayIcon width={34} height={34} />
                </button>
              </div>
            </div>
          </div>

          {/* Arrows — mobile only, centered below video */}
          <div className="flex md:hidden justify-center gap-3" style={{ marginTop: "20px" }}>
            <ArrowButton onClick={prevFeatured} direction="left" label="Previous" />
            <ArrowButton onClick={nextFeatured} direction="right" label="Next" />
          </div>
        </div>

        {/* Testimonial cards */}
        <div
          className="transition-all duration-500 ease-out"
          style={{
            marginBottom: "32px",
            opacity: cardAnimating ? 0 : 1,
            transform: cardAnimating
              ? `translateX(${cardDir === "right" ? "-40px" : "40px"})`
              : "translateX(0)",
          }}
        >
          {/* Mobile: one card */}
          <div className="block md:hidden">
            <div className="relative">
              <img src="/images/Yellow.png" alt="" className="absolute inset-0 w-full h-full pointer-events-none" />
              <div className="relative z-10 flex flex-col justify-between" style={{ padding: "24px" }}>
                <div>
                  <h3 className="font-sans text-dark text-[15px] font-semibold leading-[1.3]" style={{ marginBottom: "12px" }}>
                    {currentCards[0].title}
                  </h3>
                  <p className="font-sans text-[#6B6B7B] text-[12px] leading-[1.7]" style={{ marginBottom: "20px" }}>
                    {currentCards[0].body}
                  </p>
                </div>
                <div>
                  <p className="font-sans text-[#6B6B7B] text-[12px] italic leading-[1.6]" style={{ marginBottom: "12px" }}>
                    {currentCards[0].quote}
                  </p>
                  <p className="font-sans text-dark text-[13px] font-semibold">{currentCards[0].author}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop: two cards */}
          <div className="hidden md:grid md:grid-cols-2 gap-6">
            {currentCards.map((testimonial, index) => (
              <div key={`${cardPage}-${index}`} className="relative">
                <img src="/images/Yellow.png" alt="" className="absolute inset-0 w-full h-full pointer-events-none" />
                <div className="relative z-10 flex flex-col justify-between" style={{ padding: "28px" }}>
                  <div>
                    <h3 className="font-sans text-dark text-[15px] sm:text-[16px] font-semibold leading-[1.3]" style={{ marginBottom: "12px" }}>
                      {testimonial.title}
                    </h3>
                    <p className="font-sans text-[#6B6B7B] text-[12px] sm:text-[13px] leading-[1.7]" style={{ marginBottom: "20px" }}>
                      {testimonial.body}
                    </p>
                  </div>
                  <div>
                    <p className="font-sans text-[#6B6B7B] text-[12px] sm:text-[13px] italic leading-[1.6]" style={{ marginBottom: "12px" }}>
                      {testimonial.quote}
                    </p>
                    <p className="font-sans text-dark text-[13px] sm:text-[14px] font-semibold">{testimonial.author}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2" style={{ marginBottom: "20px" }}>
          {testimonialPages.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (cardAnimating) return;
                setCardDir(index > cardPage ? "right" : "left");
                setCardAnimating(true);
                setTimeout(() => { setCardPage(index); setCardAnimating(false); }, 300);
              }}
              className="transition-all duration-300 rounded-full cursor-pointer"
              style={{
                width: cardPage === index ? "24px" : "8px",
                height: "8px",
                backgroundColor: cardPage === index ? "#F5C842" : "#E0E0E0",
              }}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>

        {/* Card navigation arrows */}
        <div className="flex justify-center gap-3">
          <ArrowButton onClick={prevCards} direction="left" label="Previous testimonials" />
          <ArrowButton onClick={nextCards} direction="right" label="Next testimonials" />
        </div>
      </div>
    </section>
  );
}