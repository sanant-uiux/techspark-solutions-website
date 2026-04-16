"use client";
import { motion } from "framer-motion";
import { ArrowRight, Globe, Smartphone, Cloud, Brain } from "lucide-react";

const services = [
  { icon: <Globe className="w-8 h-8" />, title: "Web Development", desc: "Modern responsive websites" },
  { icon: <Smartphone className="w-8 h-8" />, title: "Mobile Apps", desc: "Cross-platform mobile apps" },
  { icon: <Cloud className="w-8 h-8" />, title: "Cloud Solutions", desc: "Scalable cloud infrastructure" },
  { icon: <Brain className="w-8 h-8" />, title: "AI Integration", desc: "Smart AI-powered features" },
];

export default function HomePage() {
  return (
    <div>
      <section className="min-h-[90vh] flex items-center justify-center px-6" style={{ background: "linear-gradient(135deg, #0f0f23, #1a1a3e, #0f0f23)" }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Building <span style={{ color: "#6366f1" }}>Digital</span> Futures</h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">We transform ideas into powerful software solutions that drive growth and innovation.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-semibold hover:scale-105 transition-transform" style={{ background: "#6366f1" }}>Get Started <ArrowRight className="w-5 h-5" /></a>
            <a href="/about" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/5 transition-all">Learn More</a>
          </div>
        </motion.div>
      </section>
      <section className="py-24 px-6" style={{ background: "#0a0a0a" }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">What We Do</h2>
          <p className="text-gray-400 text-lg text-center mb-16">Our expertise spans across multiple domains</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 rounded-2xl border border-white/10 hover:border-indigo-500/50 transition-all hover:bg-white/5">
                <div className="mb-4" style={{ color: "#6366f1" }}>{s.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                <p className="text-gray-400 text-sm">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 px-6" style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start?</h2>
          <p className="text-xl text-white/80 mb-8">Let us build something amazing together.</p>
          <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-600 rounded-xl font-semibold hover:scale-105 transition-transform">Contact Us <ArrowRight className="w-5 h-5" /></a>
        </div>
      </section>
    </div>
  );
}