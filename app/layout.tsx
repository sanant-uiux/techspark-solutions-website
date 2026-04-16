import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "TechSpark Solutions | Premium Software Development & Digital Innovation",
  description: "We craft high-performance web applications, mobile apps, and AI-powered solutions that transform businesses. 50+ projects delivered across 8+ industries.",
  keywords: ["software development", "web development", "mobile apps", "AI solutions", "Next.js", "React", "cloud"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}