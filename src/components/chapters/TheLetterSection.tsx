"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Heart } from "lucide-react";
import { BIRTHDAY_DATA } from "@/data/birthday";

export const TheLetterSection: React.FC = () => {
  const letter = BIRTHDAY_DATA.letter;

  return (
    <section
      id="chapter-letter"
      className="relative min-h-screen flex items-center justify-center px-6 py-32 bg-[#07060A] overflow-hidden"
    >
      {/* Subtle paper-glow backdrop lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#721124]/10 blur-[180px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-12">
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-display font-medium text-white mb-2"
          >
            A Letter To Lakshya
          </motion.h2>
          <p className="text-xs font-mono tracking-widest text-white/40 uppercase">
            Written from the deepest chambers of my heart
          </p>
        </div>

        {/* Parchment / Editorial Letter Board */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative p-8 sm:p-14 md:p-16 rounded-3xl glass-panel-gold border border-[#D4AF37]/35 shadow-2xl shadow-black/80"
        >
          {/* Subtle Vintage corner ornaments */}
          <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-[#D4AF37]/40 rounded-tl-xl pointer-events-none" />
          <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-[#D4AF37]/40 rounded-tr-xl pointer-events-none" />
          <div className="absolute bottom-6 left-6 w-8 h-8 border-b-2 border-l-2 border-[#D4AF37]/40 rounded-bl-xl pointer-events-none" />
          <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-[#D4AF37]/40 rounded-br-xl pointer-events-none" />

          {/* Salutation */}
          <div className="mb-8">
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-white tracking-wide">
              {letter.salutation}
            </h3>
            <div className="w-16 h-[1.5px] bg-[#D4AF37] mt-3" />
          </div>

          {/* Body Paragraphs revealed sequentially */}
          <div className="space-y-6 font-serif text-base sm:text-lg text-white/85 leading-relaxed sm:leading-loose">
            {letter.paragraphs.map((paragraph, idx) => (
              <motion.p
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.15 * idx }}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          {/* Closing & Wax Seal */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
            className="pt-10 mt-10 border-t border-white/10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6"
          >
            <div>
              <p className="text-sm font-serif italic text-white/60 mb-2">
                {letter.closing}
              </p>
              <p className="font-handwriting text-3xl sm:text-4xl text-[#D4AF37]">
                {letter.signature}
              </p>
            </div>

            {/* Embossed Wax Seal */}
            <div className="flex items-center gap-3">
              <div className="relative w-14 h-14 rounded-full bg-gradient-to-tr from-[#721124] to-[#A4133C] border-2 border-[#D4AF37]/60 flex items-center justify-center shadow-xl shadow-[#721124]/50">
                <Heart className="w-6 h-6 text-[#FDFBF7] fill-current" />
                <div className="absolute inset-0 rounded-full border border-white/20 animate-ping opacity-20" />
              </div>
              <div className="text-left">
                <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase block">
                  Official Wax Seal
                </span>
                <span className="text-xs font-serif text-white/80">
                  Sealed for Lakshya · Oct 23
                </span>
              </div>
            </div>
          </motion.div>

          {/* Postscript */}
          {letter.postscript && (
            <div className="mt-8 pt-4 border-t border-white/5 text-center">
              <p className="text-xs sm:text-sm font-serif italic text-[#F4ACB7]/80">
                {letter.postscript}
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

