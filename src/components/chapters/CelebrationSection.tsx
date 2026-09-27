"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { Sparkles, Heart, Flame, FlameKindling, Gift } from "lucide-react";
import { BIRTHDAY_DATA } from "@/data/birthday";
import { SafeImage } from "@/components/ui/SafeImage";

export const CelebrationSection: React.FC = () => {
  const [candlesBlown, setCandlesBlown] = useState(false);
  const surprise = BIRTHDAY_DATA.surpriseReveal;

  const triggerLuxuryConfetti = () => {
    const colors = ["#D4AF37", "#F4ACB7", "#FFCAD4", "#721124", "#FFFDF9"];

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors,
      disableForReducedMotion: true,
    });

    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors,
      });
      confetti({
        particleCount: 50,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors,
      });
    }, 250);
  };

  const handleBlowCandles = () => {
    setCandlesBlown(true);
    triggerLuxuryConfetti();
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          triggerLuxuryConfetti();
        }
      },
      { threshold: 0.5 }
    );

    const el = document.getElementById("chapter-celebration");
    if (el) observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="chapter-celebration"
      className="relative min-h-screen px-6 py-28 bg-[#09070F] overflow-hidden text-center flex flex-col items-center justify-center"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-gradient-to-tr from-[#721124]/30 via-[#D4AF37]/20 to-[#F4ACB7]/10 blur-[180px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto w-full">

        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, type: "spring" }}
          className="text-4xl sm:text-6xl md:text-8xl font-display font-bold tracking-tight mb-6"
        >
          <span className="gold-gradient-text">{surprise.climaxHeadline}</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-xl font-serif text-white/80 max-w-2xl mx-auto leading-relaxed mb-12"
        >
          {surprise.message}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative max-w-md mx-auto p-8 rounded-3xl glass-panel-gold border border-[#D4AF37]/40 shadow-2xl mb-12 flex flex-col items-center"
        >
          <div className="relative mb-6">
            <div className="w-8 h-20 bg-gradient-to-b from-[#FFFDF9] to-[#F5E6C8] rounded-t-lg shadow-md relative flex flex-col items-center">
              <div className="w-1 h-3 bg-[#4A0E1C] -top-3 absolute" />

              <AnimatePresence>
                {!candlesBlown ? (
                  <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{
                      scale: [1, 1.15, 0.95, 1.1, 1],
                      rotate: [-2, 3, -1, 2, 0],
                    }}
                    transition={{ repeat: Infinity, duration: 1.8 }}
                    exit={{ opacity: 0, scale: 0 }}
                    className="absolute -top-10 flex items-center justify-center cursor-pointer"
                    onClick={handleBlowCandles}
                  >
                    <div className="w-7 h-10 rounded-full bg-gradient-to-t from-[#D4AF37] via-[#FFCAD4] to-white blur-[1px] shadow-lg shadow-orange-400/80" />
                    <Flame className="w-6 h-6 text-white fill-current absolute" />
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 0 }}
                    animate={{ opacity: [0, 0.8, 0], y: -20 }}
                    transition={{ duration: 2 }}
                    className="absolute -top-6 text-white/40 font-mono text-[10px]"
                  >
                    ~ smoke ~
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="text-center">
            {!candlesBlown ? (
              <>
                <h4 className="text-lg font-serif font-medium text-white mb-2">
                  Make a Birthday Wish
                </h4>

                <p className="text-xs text-white/60 mb-5 max-w-xs">
                  {surprise.candlePrompt}
                </p>

                <button
                  onClick={handleBlowCandles}
                  className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#721124] to-[#D4AF37] text-white font-medium text-xs hover:scale-105 transition-transform flex items-center gap-2 shadow-lg shadow-[#721124]/40"
                >
                  <FlameKindling className="w-4 h-4" />
                  <span>Blow Out Candle</span>
                </button>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-3"
              >
                <div className="inline-flex items-center gap-1.5 text-[#F4ACB7] text-xs font-mono">
                  <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Wish Made</span>
                </div>

                <p className="text-sm font-serif italic text-[#FDFBF7] leading-relaxed">
                  {surprise.candleBlownMessage}
                </p>

                <button
                  onClick={triggerLuxuryConfetti}
                  className="px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-xs text-[#D4AF37] transition-colors"
                >
                  Celebrate Again 🎉
                </button>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Celebration Portrait Duo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">

          {/* Today Is Yours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="aspect-[4/3] rounded-3xl overflow-hidden glass-panel border border-[#D4AF37]/30 relative shadow-xl"
          >
            <SafeImage
              src={BIRTHDAY_DATA.images.lakshya}
              alt="Lakshya celebrating"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

            <span className="absolute bottom-4 left-4 text-xs font-mono text-[#D4AF37] uppercase tracking-wider">
              Today Is Yours
            </span>
          </motion.div>

          {/* Forever With You */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="aspect-[4/3] rounded-3xl overflow-hidden glass-panel border border-[#F4ACB7]/30 relative shadow-xl"
          >
            <SafeImage
              src={BIRTHDAY_DATA.images.couple03}
              alt="Together always"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

            <span className="absolute bottom-4 left-4 text-xs font-mono text-[#F4ACB7] uppercase tracking-wider">
              Forever With You
            </span>
          </motion.div>

        </div>
      </div>
    </section>
  );
};