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
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          paddingLeft: "40px",
          paddingRight: "40px",
          height: "68px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        
        {/* Logo */}
        <Link href="/" style={{ flexShrink: 0 }}>
          <Image
            src="/images/Logo.png"
            alt="Miragold Tutors"
            width={100}
            height={36}
            className="object-contain w-auto h-[40px] sm:h-[48px] md:h-[52px]"
            priority
          />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 list-none">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-[#3A3A4A] hover:text-[#4A90D9] transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:block">
          <Button label="Get Started" href="/about" variant="primary" />
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block w-6 h-0.5 bg-[#1A1A2E] transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#1A1A2E] transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#1A1A2E] transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#FEF9E8] border-t border-black/5 flex flex-col gap-4" style={{ padding: "16px 40px" }}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#3A3A4A] hover:text-[#4A90D9]"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button label="Get Started" href="/about" variant="primary" />
        </div>
      )}
    </nav>
  );
}