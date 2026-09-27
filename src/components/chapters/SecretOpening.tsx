"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";
import { BIRTHDAY_DATA } from "@/data/birthday";

export const SecretOpening: React.FC = () => {
  const handleEnter = () => {
    const nextSection = document.getElementById("chapter-countdown");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="chapter-secret"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 text-center overflow-hidden bg-[#08070B]"
    >
      {/* Soft central ambient glow */}
      <div className="absolute w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-gradient-to-tr from-[#721124]/20 via-[#D4AF37]/10 to-transparent blur-[120px] pointer-events-none" />

      <div className="relative z-20 max-w-2xl mx-auto flex flex-col items-center">
        {/* Subtle eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono tracking-widest text-[#D4AF37] uppercase mb-8"
        >
          <Sparkles className="w-3 h-3 text-[#F4ACB7]" />
          <span>{BIRTHDAY_DATA.secretOpening.eyebrow}</span>
        </motion.div>

        {/* Teaser line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.8 }}
          className="text-base sm:text-xl font-serif text-white/70 italic tracking-wide mb-6"
        >
          &ldquo;{BIRTHDAY_DATA.secretOpening.teaserTitle}&rdquo;
        </motion.p>

        {/* Her Name reveal */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.8, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-7xl md:text-8xl font-display font-medium tracking-tight mb-8"
        >
          <span className="gold-gradient-text">{BIRTHDAY_DATA.recipient.name}</span>
        </motion.h1>

        {/* Subtitle / invitation line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6, delay: 2.4 }}
          className="text-sm sm:text-base font-light text-white/50 tracking-widest uppercase mb-12 max-w-md"
        >
          Your story begins here.
        </motion.p>

        {/* Enter Journey Button */}
        <motion.button
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 3.0 }}
          onClick={handleEnter}
          className="group relative px-8 py-3.5 rounded-full bg-gradient-to-r from-[#721124]/60 to-[#A4133C]/60 hover:from-[#721124] hover:to-[#A4133C] border border-[#F4ACB7]/30 text-white text-sm font-medium tracking-wide shadow-xl hover:shadow-[#721124]/40 transition-all duration-300 flex items-center gap-3"
        >
          <span>{BIRTHDAY_DATA.secretOpening.invitation}</span>
          <ChevronDown className="w-4 h-4 text-[#F4ACB7] group-hover:translate-y-1 transition-transform" />
        </motion.button>

        {/* Subtle subtext hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 3.4 }}
          className="text-xs text-white/30 font-light mt-6"
        >
          {BIRTHDAY_DATA.secretOpening.subtext}
        </motion.p>
      </div>

      {/* Floating scroll indicator at bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.6, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 3.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-[10px] uppercase font-mono tracking-widest text-white/40">Scroll</span>
        <div className="w-4 h-7 rounded-full border border-white/20 flex items-start justify-center p-1">
          <div className="w-1 h-1.5 rounded-full bg-[#D4AF37]" />
        </div>
      </motion.div>
    </section>
  );
};

