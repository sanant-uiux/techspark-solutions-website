"use client";

import { motion } from "framer-motion";
import { Target, Award, Users, TrendingUp, Heart, Lightbulb, Eye, Handshake } from "lucide-react";

const stats = [
  { icon: <Target className="w-5 h-5" />, value: "50+", label: "Projects Delivered" },
  { icon: <Users className="w-5 h-5" />, value: "30+", label: "Happy Clients" },
  { icon: <Award className="w-5 h-5" />, value: "8+", label: "Industries Served" },
  { icon: <TrendingUp className="w-5 h-5" />, value: "99%", label: "Client Retention" },
];

const values = [
  { icon: <Lightbulb className="w-6 h-6" />, title: "Innovation First", desc: "We stay ahead of the curve, adopting cutting-edge technologies to deliver solutions that future-proof your business." },
  { icon: <Heart className="w-6 h-6" />, title: "Craft & Quality", desc: "Every line of code, every pixel is crafted with care. We take pride in delivering work that exceeds expectations." },
  { icon: <Eye className="w-6 h-6" />, title: "Transparency", desc: "Open communication, honest timelines, and clear pricing. No surprises, no hidden costs, just honest partnership." },
  { icon: <Handshake className="w-6 h-6" />, title: "Client Success", desc: "Your success is our success. We measure our work not by lines of code, but by the impact on your business." },
];

const timeline = [
  { year: "2020", title: "Founded", desc: "Started with a team of 3 passionate developers in Mumbai." },
  { year: "2021", title: "First Major Client", desc: "Delivered a fintech platform serving 100K+ users." },
  { year: "2023", title: "AI Division", desc: "Launched our AI & Machine Learning practice." },
  { year: "2024", title: "50 Projects", desc: "Crossed 50 successfully delivered projects milestone." },
  { year: "2025", title: "Global Reach", desc: "Expanded to serve clients across 4 countries." },
];

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="hero-gradient pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <p className="text-indigo-400 text-sm font-medium uppercase tracking-wider mb-4">About Us</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              We Are <span className="gradient-text">TechSpark</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              A team of passionate engineers, designers, and strategists building digital products that make a real difference. Founded in 2020 with a mission to make world-class technology accessible to every business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-dark border-y border-white/5 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.1 }} className="text-center">
                <div className="flex justify-center mb-3 text-indigo-400">{s.icon}</div>
                <div className="text-3xl font-bold mb-1">{s.value}</div>
                <div className="text-gray-500 text-sm">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-dark py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              We exist to democratize access to world-class software development. Too many great business ideas fail because of poor technology execution. We are here to change that.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Every project we take on is treated as our own. We do not just write code — we understand your business, your users, and your goals. Then we build technology that serves all three.
            </p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.1 }}>
            <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              To be the most trusted technology partner for ambitious businesses worldwide. We envision a future where every company, regardless of size, has access to premium software solutions.
            </p>
            <p className="text-gray-400 leading-relaxed">
              We are building a company where the best engineers want to work, the best clients want to partner, and the best ideas come to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="section-darker py-24 px-6 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-2xl mb-16">
            <p className="text-indigo-400 text-sm font-medium uppercase tracking-wider mb-3">Our Values</p>
            <h2 className="text-4xl font-bold">What Drives Us</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.1 }} className="glass rounded-2xl p-8">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-4">{v.icon}</div>
                <h3 className="text-lg font-bold mb-2">{v.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-dark py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-16">
            <p className="text-indigo-400 text-sm font-medium uppercase tracking-wider mb-3">Our Journey</p>
            <h2 className="text-4xl font-bold">The TechSpark Story</h2>
          </motion.div>
          <div className="space-y-8">
            {timeline.map((t, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.1 }} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 text-xs font-bold shrink-0">{t.year}</div>
                  {i < timeline.length - 1 && <div className="w-px h-full bg-white/5 mt-2" />}
                </div>
                <div className="pb-8">
                  <h3 className="font-bold mb-1">{t.title}</h3>
                  <p className="text-gray-400 text-sm">{t.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}