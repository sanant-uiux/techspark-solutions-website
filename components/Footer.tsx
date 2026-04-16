"use client";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-16 px-6" style={{ background: "#050505" }}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div><h3 className="text-lg font-bold mb-4" style={{ color: "#6366f1" }}>TechSpark</h3><p className="text-gray-400 text-sm">Innovative software solutions for modern businesses.</p></div>
        <div><h4 className="font-semibold mb-4">Quick Links</h4><div className="space-y-2"><Link href="/" className="block text-gray-400 text-sm hover:text-white">Home</Link><Link href="/about" className="block text-gray-400 text-sm hover:text-white">About</Link><Link href="/contact" className="block text-gray-400 text-sm hover:text-white">Contact</Link></div></div>
        <div><h4 className="font-semibold mb-4">Contact</h4><div className="space-y-2 text-sm text-gray-400"><p className="flex items-center gap-2"><Mail className="w-4 h-4" /> hello@techspark.dev</p><p className="flex items-center gap-2"><Phone className="w-4 h-4" /> +91 98765 43210</p><p className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Mumbai, India</p></div></div>
      </div>
      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-white/10 text-center text-gray-500 text-sm"><p>© 2026 TechSpark Solutions. All rights reserved.</p></div>
    </footer>
  );
}