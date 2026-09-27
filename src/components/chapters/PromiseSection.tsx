"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ShieldCheck } from "lucide-react";
import { BIRTHDAY_DATA } from "@/data/birthday";

export const PromiseSection: React.FC = () => {
  const promise = BIRTHDAY_DATA.promise;

  return (
    <section
      id="chapter-promise"
      className="relative min-h-screen flex items-center justify-center px-6 py-32 bg-[#060509] overflow-hidden text-center"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#721124]/10 blur-[200px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto w-full">
        {/* Eyebrow badge */}
        

        {/* Big Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-display font-medium text-white mb-14"
        >
          <span className="gold-gradient-text">{promise.headline}</span>
        </motion.h2>

        {/* High-impact Promise Lines (Minimalist typography) */}
        <div className="space-y-6 sm:space-y-8 max-w-2xl mx-auto mb-16">
          {promise.lines.map((line, idx) => (
            <motion.p
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.12 * idx }}
              className="text-lg sm:text-2xl font-serif text-white/85 leading-relaxed tracking-wide italic"
            >
              &ldquo;{line}&rdquo;
            </motion.p>
          ))}
        </div>

        {/* Closing Oath */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.7 }}
          className="pt-8 border-t border-white/10 max-w-xs mx-auto"
        >
          <p className="font-mono text-xs uppercase tracking-widest text-[#F4ACB7]">
            {promise.closing}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

