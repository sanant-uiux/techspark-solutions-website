"use client";

import { motion } from "framer-motion";
import { ArrowRight, Globe, Smartphone, Cloud, Brain, CheckCircle2, Star, ArrowUpRight, Sparkles, Shield, Rocket, Users } from "lucide-react";

const services = [
  { icon: <Globe className="w-6 h-6" />, title: "Web Development", desc: "High-performance web apps built with Next.js, React, and modern frameworks. From landing pages to complex SaaS platforms.", tech: ["Next.js", "React", "TypeScript"] },
  { icon: <Smartphone className="w-6 h-6" />, title: "Mobile Apps", desc: "Native and cross-platform mobile applications for iOS and Android that users love.", tech: ["React Native", "Flutter", "Swift"] },
  { icon: <Cloud className="w-6 h-6" />, title: "Cloud & DevOps", desc: "Scalable cloud infrastructure, CI/CD pipelines, and containerized deployments on AWS, GCP, and Azure.", tech: ["AWS", "Docker", "Kubernetes"] },
  { icon: <Brain className="w-6 h-6" />, title: "AI & ML Solutions", desc: "Intelligent automation, NLP, computer vision, and custom AI models integrated into your products.", tech: ["Python", "TensorFlow", "OpenAI"] },
];

const stats = [
  { value: "50+", label: "Projects Delivered", icon: <Rocket className="w-5 h-5" /> },
  { value: "30+", label: "Happy Clients", icon: <Users className="w-5 h-5" /> },
  { value: "99%", label: "Client Satisfaction", icon: <Star className="w-5 h-5" /> },
  { value: "24/7", label: "Support Available", icon: <Shield className="w-5 h-5" /> },
];

const testimonials = [
  { name: "Priya Sharma", role: "CEO, FinFlow", text: "TechSpark transformed our entire digital infrastructure. Our platform handles 10x more traffic with zero downtime. Absolutely exceptional team.", rating: 5 },
  { name: "Rahul Mehta", role: "CTO, EduNova", text: "The AI recommendation engine they built increased our user engagement by 340%. They truly understand both technology and business.", rating: 5 },
  { name: "Ananya Desai", role: "Founder, HealthPulse", text: "From concept to launch in 8 weeks. The quality of code and design exceeded all expectations. Our go-to development partner.", rating: 5 },
];

const process_steps = [
  { step: "01", title: "Discovery", desc: "We dive deep into your business goals, target audience, and technical requirements to craft a strategic roadmap." },
  { step: "02", title: "Design", desc: "Our designers create intuitive, pixel-perfect interfaces that align with your brand and delight your users." },
  { step: "03", title: "Develop", desc: "Clean, scalable code built with modern tech stack. Agile sprints with regular demos and feedback loops." },
  { step: "04", title: "Deploy & Scale", desc: "Launch with confidence on robust cloud infrastructure. Ongoing support, monitoring, and optimization." },
];

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

export default function HomePage() {
  return (
    <div>
      {/* ===== HERO ===== */}
      <section className="hero-gradient min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZyIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxjaXJjbGUgY3g9IjEwMCIgY3k9IjEwMCIgcj0iMC41IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCBmaWxsPSJ1cmwoI2cpIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIi8+PC9zdmc+')] opacity-40" />
        <div className="max-w-7xl mx-auto px-6 pt-24 pb-20 relative z-10">
          <div className="max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-indigo-400 text-sm mb-8">
                <Sparkles className="w-4 h-4" /> Trusted by 30+ Companies Worldwide
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight mb-8"
            >
              We Build
              <br />
              <span className="gradient-text">Digital Products</span>
              <br />
              That Matter
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-400 max-w-xl mb-10 leading-relaxed"
            >
              From startups to enterprises, we craft high-performance web apps, mobile experiences, and AI-powered solutions that transform businesses and delight users.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 rounded-xl text-base font-semibold transition-all hover:shadow-xl hover:shadow-indigo-500/25 hover:-translate-y-0.5">
                Start Your Project <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#services" className="inline-flex items-center justify-center gap-2 px-8 py-4 glass rounded-xl text-base font-semibold hover:bg-white/5 transition-all">
                Explore Services
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="section-dark border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.1 }} className="text-center">
                <div className="flex justify-center mb-3 text-indigo-400">{s.icon}</div>
                <div className="text-3xl md:text-4xl font-bold mb-1">{s.value}</div>
                <div className="text-gray-500 text-sm">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section id="services" className="section-dark py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-2xl mb-16">
            <p className="text-indigo-400 text-sm font-medium uppercase tracking-wider mb-3">What We Do</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Services That Drive Results</h2>
            <p className="text-gray-400 text-lg">End-to-end digital solutions built with cutting-edge technology and battle-tested methodologies.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                transition={{ delay: i * 0.1 }}
                className="group glass rounded-2xl p-8 hover:border-indigo-500/30 transition-all duration-300 hover:glow"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-5 group-hover:bg-indigo-500/20 transition-colors">
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  {s.title}
                  <ArrowUpRight className="w-4 h-4 text-gray-600 group-hover:text-indigo-400 transition-colors" />
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{s.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {s.tech.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-md bg-white/5 text-gray-500 text-xs">{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="section-darker py-24 md:py-32 px-6 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-2xl mb-16">
            <p className="text-indigo-400 text-sm font-medium uppercase tracking-wider mb-3">Our Process</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">How We Work</h2>
            <p className="text-gray-400 text-lg">A proven 4-step methodology that ensures every project is delivered on time, on budget, and beyond expectations.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {process_steps.map((p, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                transition={{ delay: i * 0.15 }}
                className="relative"
              >
                <div className="text-6xl font-black text-white/[0.03] mb-4">{p.step}</div>
                <h3 className="text-lg font-bold mb-2 -mt-8">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
                {i < 3 && <div className="hidden md:block absolute top-8 -right-3 w-6 h-px bg-white/10" />}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="section-dark py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-2xl mb-16">
            <p className="text-indigo-400 text-sm font-medium uppercase tracking-wider mb-3">Testimonials</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Clients Say</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-8"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold text-sm">
                    {t.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <p className="font-medium text-sm">{t.name}</p>
                    <p className="text-gray-500 text-xs">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="relative py-24 md:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-purple-600/10 to-transparent" />
        <div className="absolute inset-0 section-darker" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }} />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Build Something <span className="gradient-text">Extraordinary</span>?</h2>
            <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">Let us turn your vision into a world-class digital product. Free consultation, no strings attached.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 rounded-xl font-semibold transition-all hover:shadow-xl hover:shadow-indigo-500/25 hover:-translate-y-0.5">
                Get Free Consultation <ArrowRight className="w-5 h-5" />
              </a>
            </div>
            <div className="flex items-center justify-center gap-6 mt-8 text-sm text-gray-500">
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Free Consultation</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> No Commitment</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Fast Response</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}