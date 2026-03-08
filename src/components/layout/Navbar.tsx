"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Button from "../../components/ui/Button";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Subjects", href: "/#subjects" },
  { label: "Why Us", href: "/#why" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav style={{ position: "sticky", top: 0, zIndex: 50, backgroundColor: "rgba(254, 252, 244, 0.85)", backdropFilter: "blur(8px)", width: "100%" }}>
      <div
        className="section-padding"
        style={{
          maxWidth: "1440px",
          margin: "0 auto",
          height: "112px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ flexShrink: 0 }} className="transition-opacity duration-200 hover:opacity-80 active:opacity-60">
          <Image
            src="/images/Logo.png"
            alt="Miragold Tutors"
            width={85}
            height={80}
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 list-none">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="relative text-sm font-medium text-[#3A3A4A] transition-colors duration-200 hover:text-[#4A90D9]
                  after:content-[''] after:absolute after:left-0 after:-bottom-1
                  after:w-0 after:h-[2px] after:bg-[#4A90D9] after:rounded-full
                  after:transition-all after:duration-200 hover:after:w-full"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:block">
          <Button label="Book a free call now" href="/contact" variant="primary" />
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 cursor-pointer p-1 rounded-md
            hover:bg-black/5 active:bg-black/10 active:scale-95 transition-all duration-150"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-[#1A1A2E] transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#1A1A2E] transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#1A1A2E] transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t border-black/5 flex flex-col gap-1 section-padding"
          style={{
            position: "absolute",
            top: "112px",
            left: 0,
            right: 0,
            backgroundColor: "white",
            paddingTop: "12px",
            paddingBottom: "16px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
            zIndex: 49,
          }}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#3A3A4A] rounded-lg transition-all duration-150
                hover:text-[#4A90D9] hover:bg-[#F0F7FF]
                active:text-[#4A90D9] active:bg-[#F0F7FF] active:scale-[0.98]"
              style={{ padding: "10px 12px", display: "block" }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div style={{ marginTop: "8px" }}>
            <Button label="Book a free call now" href="/contact" variant="primary" />
          </div>
        </div>
      )}
    </nav>
  );
}