"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
const links = [{ name: "Home", href: "/" }, { name: "About", href: "/about" }, { name: "Contact", href: "/contact" }];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5" style={{ background: "rgba(10,10,10,0.8)", backdropFilter: "blur(16px)" }}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold" style={{ color: "#6366f1" }}>TechSpark</Link>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (<Link key={l.href} href={l.href} className="text-sm text-gray-300 hover:text-white transition-colors">{l.name}</Link>))}
          <Link href="/contact" className="px-5 py-2 rounded-lg text-sm font-medium text-white" style={{ background: "#6366f1" }}>Get Started</Link>
        </div>
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>{open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}</button>
      </div>
      {open && (<div className="md:hidden px-6 pb-4 space-y-3" style={{ background: "rgba(10,10,10,0.95)" }}>{links.map((l) => (<Link key={l.href} href={l.href} className="block text-gray-300 hover:text-white py-2" onClick={() => setOpen(false)}>{l.name}</Link>))}</div>)}
    </nav>
  );
}