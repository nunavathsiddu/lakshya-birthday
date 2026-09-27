"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Heart, ArrowDown } from "lucide-react";
import { BIRTHDAY_DATA } from "@/data/birthday";

interface FinalSurpriseProps {
  onTriggerClimax: () => void;
}

export const FinalSurpriseSection: React.FC<FinalSurpriseProps> = ({ onTriggerClimax }) => {
  const surprise = BIRTHDAY_DATA.surpriseReveal;

  const handleRevealClick = () => {
    onTriggerClimax();
    const celebrationEl = document.getElementById("chapter-celebration");
    if (celebrationEl) {
      celebrationEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="chapter-surprise"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-32 bg-[#050407] text-center overflow-hidden"
    >
      {/* Intense dark background with subtle pulse */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#721124]/15 blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
        {/* Subtle Chapter Marker */}
        

        {/* Slow Fading Suspense Text 1 */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="text-2xl sm:text-4xl font-display font-light text-white/80 mb-6 tracking-wide"
        >
          {surprise.preText}
        </motion.p>

        {/* Slow Fading Suspense Text 2 */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, delay: 1.2 }}
          className="text-3xl sm:text-5xl md:text-6xl font-display font-medium text-white mb-12"
        >
          {surprise.highlightText}
        </motion.h3>

        {/* Mystery Heart Reveal Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 2.0 }}
          className="flex flex-col items-center"
        >
          <button
            onClick={handleRevealClick}
            className="group relative px-10 py-5 rounded-full bg-gradient-to-r from-[#721124] via-[#A4133C] to-[#D4AF37] text-white font-serif text-lg sm:text-xl font-medium shadow-2xl shadow-[#721124]/50 hover:shadow-[#D4AF37]/40 hover:scale-105 transition-all duration-300 flex items-center gap-3"
          >
            <Heart className="w-5 h-5 fill-current text-white animate-pulse" />
            <span>Open The Grand Surprise</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </button>
          <span className="text-xs font-mono text-white/40 tracking-wider uppercase mt-4">
            Tap to trigger the celebration
          </span>
        </motion.div>
      </div>
    </section>
  );
};

