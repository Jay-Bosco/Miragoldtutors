import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export const metadata: Metadata = {
  title: "Miragold Tutors – Confident Children, Outstanding Results",
  description: "Expert 1-on-1 tutoring that builds confidence and improves grades.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" style={{ overflowX: "hidden" }}>
      <body style={{ margin: 0, padding: 0, width: "100%", minHeight: "100vh", overflowX: "hidden" }}>
        <Navbar />
        <main style={{ width: "100%", overflowX: "hidden" }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}