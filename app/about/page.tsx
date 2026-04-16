"use client";
import { motion } from "framer-motion";
import { Target, Award, Users, TrendingUp } from "lucide-react";

const stats = [
  { icon: <Target className="w-6 h-6" />, value: "50+", label: "Projects" },
  { icon: <Users className="w-6 h-6" />, value: "30+", label: "Clients" },
  { icon: <Award className="w-6 h-6" />, value: "5+", label: "Years" },
  { icon: <TrendingUp className="w-6 h-6" />, value: "99%", label: "Satisfaction" },
];

export default function AboutPage() {
  return (
    <div>
      <section className="pt-32 pb-20 px-6" style={{ background: "linear-gradient(135deg, #0f0f23, #1a1a3e)" }}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl font-bold mb-6">Our Story</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">Founded with a vision to make technology accessible, TechSpark Solutions has been delivering exceptional software solutions since 2020.</p>
          </motion.div>
        </div>
      </section>
      <section className="py-24 px-6" style={{ background: "#0a0a0a" }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-300 leading-relaxed mb-8">We believe in clean code, modern architecture, and user-centric design. Every project we take on is an opportunity to push boundaries.</p>
        </div>
      </section>
      <section className="py-24 px-6 border-y border-white/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center p-6">
                <div className="flex justify-center mb-3" style={{ color: "#6366f1" }}>{s.icon}</div>
                <div className="text-4xl font-bold mb-1">{s.value}</div>
                <div className="text-gray-400 text-sm">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}