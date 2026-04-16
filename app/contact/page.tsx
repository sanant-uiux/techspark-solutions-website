"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <div>
      <section className="pt-32 pb-20 px-6" style={{ background: "linear-gradient(135deg, #0f0f23, #1a1a3e)" }}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl text-gray-400">We would love to hear about your project.</p>
          </motion.div>
        </div>
      </section>
      <section className="py-24 px-6" style={{ background: "#0a0a0a" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4"><div className="p-3 rounded-xl" style={{ background: "rgba(99,102,241,0.1)" }}><Mail className="w-5 h-5" style={{ color: "#6366f1" }} /></div><div><p className="font-medium">Email</p><p className="text-gray-400">hello@techspark.dev</p></div></div>
              <div className="flex items-start gap-4"><div className="p-3 rounded-xl" style={{ background: "rgba(99,102,241,0.1)" }}><Phone className="w-5 h-5" style={{ color: "#6366f1" }} /></div><div><p className="font-medium">Phone</p><p className="text-gray-400">+91 98765 43210</p></div></div>
              <div className="flex items-start gap-4"><div className="p-3 rounded-xl" style={{ background: "rgba(99,102,241,0.1)" }}><MapPin className="w-5 h-5" style={{ color: "#6366f1" }} /></div><div><p className="font-medium">Office</p><p className="text-gray-400">Mumbai, India</p></div></div>
            </div>
          </div>
          <div>
            {submitted ? (
              <div className="p-8 rounded-2xl border border-green-500/20 bg-green-500/5 text-center"><h3 className="text-xl font-bold text-green-400 mb-2">Message Sent!</h3><p className="text-gray-400">We will get back to you within 24 hours.</p></div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
                <div className="grid grid-cols-2 gap-4"><input required placeholder="First Name" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-indigo-500 outline-none text-sm" /><input required placeholder="Last Name" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-indigo-500 outline-none text-sm" /></div>
                <input required type="email" placeholder="Email" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-indigo-500 outline-none text-sm" />
                <textarea required rows={5} placeholder="Your message..." className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-indigo-500 outline-none text-sm resize-none" />
                <button type="submit" className="inline-flex items-center gap-2 px-8 py-3 rounded-xl text-white font-semibold hover:scale-105 transition-transform" style={{ background: "#6366f1" }}>Send Message <Send className="w-4 h-4" /></button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}