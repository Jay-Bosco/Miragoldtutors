import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer style={{ width: "100%", backgroundColor: "Black" }}>
     <div
  className="section-padding"
  style={{
    maxWidth: "1440px",
    margin: "0 auto",
    paddingTop: "48px",
    paddingBottom: "24px",
  }}
>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10" style={{ marginBottom: "40px" }}>
          {/* Logo + Social */}
          <div>
           <Link href="/" className="inline-block" style={{ marginBottom: "20px" }}>
  <div className="bg-white rounded-lg flex items-center justify-center" style={{ padding: "8px", width: "fit-content" }}>
    <Image
      src="/images/Logo.png"
      alt="Miragold Tutors"
      width={80}
      height={60}
      className="object-contain w-auto h-[50px]"
    />
  </div>
</Link>
            <div className="flex gap-3" style={{ marginTop: "16px" }}>
              {/* Twitter */}
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 4.01c-1 .49-1.98.69-3 .99-1.13-1.3-3.15-1.35-4.35-.1-.74.77-1.07 1.87-.86 2.95C10.07 7.67 6.83 5.89 4.63 3.1c-.55.95-.27 2.18.69 2.8-.6-.02-1.17-.18-1.68-.48v.05c0 1 .72 1.9 1.73 2.13-.45.12-.93.14-1.39.04.4 1.27 1.56 2.14 2.9 2.17A6.09 6.09 0 013 11.2a8.45 8.45 0 004.6 1.35c5.56 0 8.6-4.62 8.6-8.62 0-.13 0-.26-.01-.39A6.17 6.17 0 0022 4.01z" fill="white"/>
                </svg>
              </a>
              {/* Facebook */}
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z" fill="white"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke="white" strokeWidth="2"/>
                  <circle cx="12" cy="12" r="5" stroke="white" strokeWidth="2"/>
                  <circle cx="17.5" cy="6.5" r="1.5" fill="white"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2V9zM4 6a2 2 0 100-4 2 2 0 000 4z" fill="white"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-white text-[14px] font-semibold" style={{ marginBottom: "16px" }}>
              Contact
            </h4>
            <div className="flex flex-col gap-3">
              <a href="tel:+447890423087" className="font-sans text-white/50 text-[13px] flex items-center gap-2 hover:text-[#F5C842] transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="white" strokeOpacity="0.5" strokeWidth="1.5"/>
                </svg>
                +447890423087
              </a>
              <a href="mailto:Miragold1230@gmail.com" className="font-sans text-white/50 text-[13px] flex items-center gap-2 hover:text-[#F5C842] transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="white" strokeOpacity="0.5" strokeWidth="1.5"/>
                  <path d="M22 6l-10 7L2 6" stroke="white" strokeOpacity="0.5" strokeWidth="1.5"/>
                </svg>
                Miragold1230@gmail.com
              </a>
            </div>
          </div>

          {/* Useful links */}
          <div>
            <h4 className="font-sans text-white text-[14px] font-semibold" style={{ marginBottom: "16px" }}>
              Useful links
            </h4>
            <ul className="flex flex-col gap-3 list-none">
              {[
                { label: "Home", href: "/" },
                { label: "About us", href: "/about" },
                { label: "FAQs", href: "/#faqs" },
                { label: "Our programmes", href: "/#programmes" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="font-sans text-white/50 text-[13px] hover:text-[#F5C842] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        
{/* Newsletter */}
<div className="w-full md:w-fit">
  <h4 className="font-sans text-white text-[14px] font-semibold" style={{ marginBottom: "8px" }}>
    Newsletter
  </h4>
  <p className="font-sans text-white/50 text-[12px] leading-[1.6] md:whitespace-nowrap" style={{ marginBottom: "16px" }}>
    Sign up to our newsletter to receive latest updates
  </p>
  <div className="flex flex-col gap-3">
    <input
      type="email"
      placeholder="Your email"
      className="font-sans text-[13px] text-white bg-white/10 rounded-lg outline-none focus:ring-1 focus:ring-[#F5C842] placeholder-white/30 w-full"
      style={{ padding: "10px 14px" }}
    />
    <button
      className="font-sans text-[13px] text-white bg-[#F5C842] rounded-full font-medium hover:bg-[#E5B832] transition-colors cursor-pointer w-full"
      style={{ padding: "10px 14px" }}
    >
      Subscribe
    </button>
  </div>
</div>
        </div>

        {/* Copyright */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "20px", textAlign: "center" }}>
          <p className="font-sans text-white/30 text-[12px]">
            ©copyright 2026 all right reserved
          </p>
        </div>
      </div>
    </footer>
  );
}