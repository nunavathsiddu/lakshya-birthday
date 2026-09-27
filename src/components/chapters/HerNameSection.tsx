"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { BIRTHDAY_DATA } from "@/data/birthday";
import { SafeImage } from "@/components/ui/SafeImage";

export const HerNameSection: React.FC = () => {
  const letters = BIRTHDAY_DATA.recipient.name.split("");

  return (
    <section
      id="chapter-her-name"
      className="relative min-h-screen flex items-center justify-center px-6 py-28 bg-[#09080E] overflow-hidden"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#721124]/20 via-[#D4AF37]/10 to-transparent blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* LEFT — PORTRAIT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="lg:col-span-5 flex justify-center"
        >
          <div className="relative w-full max-w-sm sm:max-w-md aspect-[3/4] rounded-3xl overflow-hidden glass-panel-gold border border-[#D4AF37]/30 shadow-2xl p-2 group">
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              {/* YOUR ACTUAL LAKSHYA IMAGE */}
              <SafeImage
                src="/images/lakshya.jpg"
                alt={BIRTHDAY_DATA.recipient.name}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 420px"
                className="object-contain transition-transform duration-1000 group-hover:scale-[1.02]"
              />

              {/* Bottom Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#08070B] via-transparent to-transparent opacity-80 pointer-events-none" />
            </div>

            {/* Corner Decorations */}
            <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-[#D4AF37] opacity-60" />

            <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-[#F4ACB7] opacity-60" />
          </div>
        </motion.div>

        {/* RIGHT — TEXT */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Meaning */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.1,
            }}
            className="text-xs sm:text-sm font-mono tracking-widest text-[#F4ACB7] uppercase mb-2 flex items-center gap-2"
          >
            <Heart className="w-3.5 h-3.5 fill-current" />

            <span>{BIRTHDAY_DATA.recipient.meaningOfName}</span>
          </motion.p>

          {/* Name */}
          <div className="flex flex-wrap gap-x-1 sm:gap-x-2 text-5xl sm:text-7xl md:text-8xl font-display font-bold tracking-tight mb-8">
            {letters.map((letter, idx) => (
              <motion.span
                key={idx}
                initial={{
                  opacity: 0,
                  y: 25,
                  rotate: -2,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  rotate: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: 0.08 * idx,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="gold-gradient-text inline-block hover:scale-110 hover:-translate-y-2 transition-transform duration-300 cursor-default"
              >
                {letter}
              </motion.span>
            ))}
          </div>

          {/* Description */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.4,
            }}
            className="space-y-4 max-w-xl"
          >
            <p className="text-lg sm:text-xl font-serif text-white/90 leading-relaxed italic">
              &ldquo;
              {BIRTHDAY_DATA.recipient.heroGreeting}
              &rdquo;
            </p>

            <p className="text-sm sm:text-base font-light text-white/60 leading-relaxed">
              They say names carry destiny. But your name carries warmth,
              safety, gentle laughter, and a quiet grace that turns any
              chaotic day into stillness. Just hearing your name spoken aloud
              reminds me of how extraordinarily lucky I am to walk through
              this life beside you.
            </p>

            <div className="pt-4 flex items-center gap-4">
              <div className="w-12 h-[1px] bg-[#D4AF37]/50" />

              <span className="text-xs font-handwriting text-[#F4ACB7] text-xl">
                {BIRTHDAY_DATA.recipient.nameSubtitle}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};