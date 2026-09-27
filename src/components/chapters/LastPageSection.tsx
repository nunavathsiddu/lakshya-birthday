"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, RotateCcw, Heart } from "lucide-react";
import { BIRTHDAY_DATA } from "@/data/birthday";

export const LastPageSection: React.FC = () => {
  const last = BIRTHDAY_DATA.lastPage;

  const handleReplay = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="chapter-last-page"
      className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 py-32 bg-[#060509] text-center overflow-hidden border-t border-white/5"
    >
      {/* Soft starlight glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#721124]/10 blur-[180px] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
        {/* Section Marker */}
        

        {/* Poetic Closing Quote */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1 }}
          className="text-2xl sm:text-3xl md:text-4xl font-serif italic text-white/90 leading-relaxed mb-6"
        >
          {last.quote}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xs font-mono tracking-widest text-[#D4AF37] uppercase mb-8"
        >
          {last.author}
        </motion.p>

        <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent mb-8" />

        {/* Final Peaceful Salutation */}
        <motion.h3
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-3xl sm:text-5xl font-display font-medium text-white mb-6"
        >
          Happy Birthday, <span className="gold-gradient-text">{BIRTHDAY_DATA.recipient.name}</span>.
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-sm sm:text-base font-light text-white/60 max-w-lg mx-auto leading-relaxed mb-12"
        >
          {last.finalNote}
        </motion.p>

        {/* Replay Button */}
        <motion.button
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          onClick={handleReplay}
          className="group px-7 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white/80 hover:text-white text-xs font-mono tracking-widest uppercase transition-all duration-300 flex items-center gap-2.5 shadow-lg"
        >
          <RotateCcw className="w-3.5 h-3.5 group-hover:-rotate-90 transition-transform duration-500 text-[#D4AF37]" />
          <span>{last.replayText}</span>
        </motion.button>

        {/* Gentle Footer Tag */}
        <div className="mt-16 pt-8 border-t border-white/5 w-full flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-white/30 gap-2">
          <span>Crafted with infinite care for Lakshya</span>
          <span className="flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-[#721124] fill-current" /> on October 23
          </span>
        </div>
      </div>
    </footer>
  );
};

