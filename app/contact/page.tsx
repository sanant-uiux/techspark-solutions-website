"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Clock, MessageSquare, CheckCircle2 } from "lucide-react";

const contactInfo = [
  { icon: <Mail className="w-5 h-5" />, label: "Email Us", value: "hello@techspark.dev", desc: "We reply within 4 hours" },
  { icon: <Phone className="w-5 h-5" />, label: "Call Us", value: "+91 98765 43210", desc: "Mon-Fri, 9AM-7PM IST" },
  { icon: <MapPin className="w-5 h-5" />, label: "Visit Us", value: "Mumbai, Maharashtra", desc: "India" },
  { icon: <Clock className="w-5 h-5" />, label: "Response Time", value: "Under 4 Hours", desc: "For all inquiries" },
];

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div>
      {/* Hero */}
      <section className="hero-gradient pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <p className="text-indigo-400 text-sm font-medium uppercase tracking-wider mb-4">Contact</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Let&apos;s Build Something <span className="gradient-text">Great Together</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Have a project idea? Need technical consultation? Or just want to say hello? We are here for it all.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="section-dark border-y border-white/5 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {contactInfo.map((c, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.1 }} className="glass rounded-xl p-6 text-center">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center mx-auto mb-3">{c.icon}</div>
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">{c.label}</p>
                <p className="font-semibold text-sm mb-1">{c.value}</p>
                <p className="text-xs text-gray-600">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-dark py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left - Info */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl font-bold mb-6">Tell Us About Your Project</h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              Whether you have a detailed spec or just a rough idea, we are happy to discuss. Every great product starts with a conversation.
            </p>

            <div className="space-y-4">
              {[
                "Free 30-minute consultation call",
                "Detailed project estimate within 48 hours",
                "NDA available upon request",
                "Flexible engagement models",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-gray-400">
                  <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-12 glass rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <MessageSquare className="w-5 h-5 text-indigo-400" />
                <span className="font-semibold text-sm">Prefer a quick chat?</span>
              </div>
              <p className="text-gray-400 text-sm">Drop us an email at <span className="text-indigo-400">hello@techspark.dev</span> and we will set up a call within 24 hours.</p>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.1 }}>
            {submitted ? (
              <div className="glass rounded-2xl p-12 text-center glow">
                <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Message Sent!</h3>
                <p className="text-gray-400">Thank you for reaching out. We will review your message and get back to you within 4 hours during business hours.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-1.5">First Name *</label>
                    <input required className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-indigo-500 outline-none text-sm transition-colors" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1.5">Last Name *</label>
                    <input required className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-indigo-500 outline-none text-sm transition-colors" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1.5">Email *</label>
                  <input required type="email" className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-indigo-500 outline-none text-sm transition-colors" placeholder="john@company.com" />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1.5">Company</label>
                  <input className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-indigo-500 outline-none text-sm transition-colors" placeholder="Your company name" />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1.5">Budget Range</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-indigo-500 outline-none text-sm text-gray-400 transition-colors">
                    <option value="">Select budget range</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k+">$50,000+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1.5">Project Details *</label>
                  <textarea required rows={5} className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-indigo-500 outline-none text-sm resize-none transition-colors" placeholder="Tell us about your project, goals, timeline, and any specific requirements..." />
                </div>
                <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 rounded-xl font-semibold transition-all hover:shadow-xl hover:shadow-indigo-500/25">
                  Send Message <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}