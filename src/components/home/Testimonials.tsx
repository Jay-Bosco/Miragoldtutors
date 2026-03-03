"use client";
import { useState } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { PlayIcon } from "@/components/ui/svg";

const testimonials = [
  {
    title: "Arjun – From Quiet Learner to Top Scorer",
    body: "Arjun joined Miragold Tutors at the start of Year 5. Initially shy and hesitant in Maths reasoning, he quickly benefited from our small group approach and targeted feedback. Through consistent effort, practice exams, and weekly homework reviews, Arjun's confidence grew tremendously. By the summer term, he achieved top scores in both GL mock exams.",
    quote: "\"The structured lessons and regular feedback made all the difference. Arjun looked forward to class every week!\"",
    author: "Arjun's Parents",
  },
  {
    title: "Sofia – Building Confidence in English",
    body: "Sofia joined midway through Year 5 after struggling with comprehension and timed writing. Our tutor identified key areas for improvement and created a tailored plan, including extra reading and vocabulary tasks. Within months, Sofia's writing became more fluent, and her mock exam results improved from 58% to 86%.",
    quote: "\"Sofia's enthusiasm and confidence blossomed — she became an independent learner who genuinely enjoyed English.\"",
    author: "Sofia's Teacher",
  },
];

const featured = {
  body: "Through consistent effort, practice exams, and weekly homework reviews, Arjun's confidence grew tremendously. By the summer term, he achieved top scores in both GL mock exams.",
  author: "Juliana George",
  role: "Parent",
};

export default function Testimonials() {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <section style={{ width: "100%", backgroundColor: "White" }}>
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          paddingLeft: "40px",
          paddingRight: "40px",
          paddingTop: "80px",
          paddingBottom: "40px",
        }}
      >
        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between" style={{ marginBottom: "48px" }}>
          <div>
            <h2 className="font-display text-[24px] sm:text-[28px] md:text-[32px] font-bold text-dark leading-[1.2]" style={{ marginBottom: "12px" }}>
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
<div className="flex flex-col md:flex-row gap-8 items-stretch" style={{ marginBottom: "48px" }}>
  {/* Text side */}
  <div className="md:w-[40%] flex flex-col justify-between">
   <p className="font-sans text-[#3A3A4A] text-[13px] sm:text-[14px] md:text-[15px] leading-[1.8]" style={{ marginBottom: "32px", maxWidth: "520px" }}>
  {featured.body}
</p>
     

   <div>
  <div style={{ width: "480px", height: "1px", backgroundColor: "#E0E0E0", marginBottom: "16px" }} />
  <p className="font-sans text-dark text-[14px] sm:text-[15px] font-semibold">{featured.author}</p>
  <p className="font-sans text-[#6B6B7B] text-[12px] sm:text-[13px]">{featured.role}</p>
</div>

    {/* Navigation arrows */}
    <div className="flex gap-3" style={{ marginTop: "24px" }}>
      <button
        className="w-10 h-10 rounded-full bg-[#F5C842] flex items-center justify-center hover:bg-[#E5B832] transition-colors cursor-pointer"
        aria-label="Previous"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 18l-6-6 6-6" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <button
        className="w-10 h-10 rounded-full bg-[#F5C842] flex items-center justify-center hover:bg-[#E5B832] transition-colors cursor-pointer"
        aria-label="Next"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 18l6-6-6-6" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  </div>

  {/* Image side */}
  <div className="md:w-[58%] relative rounded-2xl overflow-hidden" style={{ minHeight: "340px" }}>
    <Image
      src="/images/Testimonial.png"
      alt="Parent testimonial"
      fill
      className="object-cover"
      sizes="(max-width: 768px) 100vw, 58vw"
    />
    <div className="absolute inset-0 flex items-center justify-center">
      <button
        aria-label="Play video"
        className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-white/15 flex items-center justify-center hover:scale-105 transition-transform cursor-pointer"
      >
        <PlayIcon width={34} height={34} />
      </button>
    </div>
  </div>
</div>

        {/* Testimonial cards */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6" style={{ marginBottom: "32px" }}>
  {testimonials.map((testimonial, index) => (
    <div key={index} className="relative">
      {/* Yellow frame background */}
      <img
        src="/images/Yellow.png"
        alt=""
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
      <div
        className="relative z-10 flex flex-col justify-between"
        style={{ padding: "28px" }}
      >
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
          <p className="font-sans text-dark text-[13px] sm:text-[14px] font-semibold">
            {testimonial.author}
          </p>
        </div>
      </div>
    </div>
  ))}
</div>

        {/* Bottom navigation arrows */}
        <div className="flex justify-center gap-3">
  <button
    onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
    className="w-10 h-10 rounded-full bg-[#F5C842] flex items-center justify-center hover:bg-[#E5B832] transition-colors cursor-pointer"
    aria-label="Previous testimonials"
  >
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 18l-6-6 6-6" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </button>
  <button
    onClick={() => setCurrentPage(currentPage + 1)}
    className="w-10 h-10 rounded-full bg-[#F5C842] flex items-center justify-center hover:bg-[#E5B832] transition-colors cursor-pointer"
    aria-label="Next testimonials"
  >
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 18l6-6-6-6" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </button>
</div>
      </div>
    </section>
  );
}