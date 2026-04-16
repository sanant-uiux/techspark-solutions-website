"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Zap, Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="section-darker border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold">TechSpark</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Crafting premium digital experiences that drive growth and transform businesses since 2020.
            </p>
            <div className="flex gap-3">
              {[Github, Linkedin, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-lg bg-white/5 hover:bg-indigo-600/20 flex items-center justify-center text-gray-400 hover:text-indigo-400 transition-all">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-400">Navigation</h4>
            <div className="space-y-3">
              {["Home", "About", "Services", "Portfolio", "Contact"].map((item) => (
                <Link key={item} href={item === "Home" ? "/" : `/${item.toLowerCase()}`} className="block text-gray-500 text-sm hover:text-white transition-colors">
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-400">Services</h4>
            <div className="space-y-3 text-sm text-gray-500">
              {["Web Development", "Mobile Apps", "Cloud & DevOps", "AI Solutions", "UI/UX Design"].map((s) => (
                <p key={s}>{s}</p>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-400">Contact</h4>
            <div className="space-y-3 text-sm text-gray-500">
              <p className="flex items-center gap-3"><Mail className="w-4 h-4 text-indigo-400" /> hello@techspark.dev</p>
              <p className="flex items-center gap-3"><Phone className="w-4 h-4 text-indigo-400" /> +91 98765 43210</p>
              <p className="flex items-center gap-3"><MapPin className="w-4 h-4 text-indigo-400" /> Mumbai, Maharashtra, India</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">&copy; 2026 TechSpark Solutions. All rights reserved.</p>
          <p className="text-gray-700 text-xs">Crafted with Next.js, Tailwind CSS & Framer Motion</p>
        </div>
      </div>
    </footer>
  );
}