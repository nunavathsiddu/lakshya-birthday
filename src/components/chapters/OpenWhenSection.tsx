"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Mail,
  X,
  Heart,
  CloudRain,
  Compass,
  Shield,
  HeartHandshake,
} from "lucide-react";
import { BIRTHDAY_DATA } from "@/data/birthday";
import { OpenWhenLetter } from "@/types";

export const OpenWhenSection: React.FC = () => {
  const letters = BIRTHDAY_DATA.openWhen;
  const [selectedLetter, setSelectedLetter] = useState<OpenWhenLetter | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "CloudRain":
        return <CloudRain className="w-5 h-5 text-[#93C5FD]" />;
      case "Compass":
        return <Compass className="w-5 h-5 text-[#F4ACB7]" />;
      case "Sparkles":
        return <Sparkles className="w-5 h-5 text-[#F3C969]" />;
      case "Shield":
        return <Shield className="w-5 h-5 text-[#C084FC]" />;
      default:
        return <HeartHandshake className="w-5 h-5 text-[#F87171]" />;
    }
  };

  // Keyboard accessibility
  React.useEffect(() => {
    if (!selectedLetter) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedLetter(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedLetter]);

  return (
    <section
      id="chapter-open-when"
      className="relative min-h-screen px-6 py-28 bg-[#09080E] overflow-hidden"
    >
      {/* Ambient background lighting */}
      <div className="absolute left-1/4 bottom-1/4 w-[600px] h-[600px] rounded-full bg-[#721124]/12 blur-[170px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-16">
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-display font-medium text-white mb-4"
          >
            Open When…
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm sm:text-base font-serif text-white/60 max-w-xl mx-auto"
          >
            Envelopes sealed with care for whatever tomorrow brings. Whenever you need my words,
            open these.
          </motion.p>
        </div>

        {/* 5 Interactive Envelope Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {letters.map((letter, index) => (
            <motion.div
              key={letter.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.08 * index }}
              onClick={() => setSelectedLetter(letter)}
              className="group relative p-6 sm:p-7 rounded-3xl glass-panel border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 shadow-xl cursor-pointer transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between min-h-[240px]"
            >
              {/* Envelope flap aesthetic simulation */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-gradient-to-b from-[#D4AF37]/20 to-transparent rounded-b-xl border-b border-x border-[#D4AF37]/30 pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                    {getIcon(letter.iconName)}
                  </div>
                  {/* Wax Seal aesthetic */}
                  <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#721124] to-[#A4133C] border border-[#F4ACB7]/40 flex items-center justify-center shadow-md">
                    <Heart className="w-3 h-3 text-white fill-current" />
                  </div>
                </div>

                <h3 className="font-display text-xl text-white font-medium mb-2 group-hover:text-[#F5E6C8] transition-colors">
                  {letter.title}
                </h3>
                <p className="text-xs text-white/50 font-mono uppercase tracking-wider mb-4">
                  {letter.tagline}
                </p>
                <p className="text-xs font-serif italic text-white/70 line-clamp-2">
                  &ldquo;{letter.previewSnippet}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#D4AF37]">
                <span className="inline-flex items-center gap-1.5 font-medium">
                  <Mail className="w-3.5 h-3.5" />
                  Break Wax Seal
                </span>
                <span className="text-[10px] font-mono text-white/30 group-hover:text-white/70">
                  Tap to read
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Unfolded Letter Modal */}
      <AnimatePresence>
        {selectedLetter && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedLetter(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full rounded-3xl glass-panel-gold border border-[#D4AF37]/40 p-6 sm:p-10 text-left shadow-2xl my-8"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedLetter(null)}
                className="absolute top-6 right-6 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Close letter"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Envelope Header / Seal */}
              <div className="flex items-center gap-3 pb-6 mb-6 border-b border-white/10">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#721124] to-[#D4AF37] flex items-center justify-center shadow-lg">
                  {getIcon(selectedLetter.iconName)}
                </div>
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase block">
                    Unsealed with Love
                  </span>
                  <h3 className="text-xl sm:text-2xl font-display font-semibold text-white">
                    {selectedLetter.title}
                  </h3>
                </div>
              </div>

              {/* Letter Paragraphs */}
              <div className="space-y-4 font-serif text-base sm:text-lg text-white/85 leading-relaxed">
                {selectedLetter.letterContent.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {/* Signature & Wax Seal */}
              <div className="pt-8 mt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <p className="text-sm font-serif italic text-white/60">
                    {selectedLetter.signature}
                  </p>
                  <p className="font-handwriting text-2xl sm:text-3xl text-[#D4AF37]">
                    Always & Forever
                  </p>
                </div>
                {selectedLetter.postScript && (
                  <p className="text-xs font-serif text-[#F4ACB7] italic max-w-xs">
                    {selectedLetter.postScript}
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

