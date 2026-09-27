"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Quote } from "lucide-react";
import { BIRTHDAY_DATA } from "@/data/birthday";
import { SafeImage } from "@/components/ui/SafeImage";

export const FavoriteMomentsSection: React.FC = () => {
  const moments = BIRTHDAY_DATA.favoriteMoments;

  return (
    <section
      id="chapter-favorite-moments"
      className="relative px-6 py-28 bg-[#08070B] overflow-hidden"
    >
      {/* Ambient background lighting */}
      <div className="absolute right-10 top-1/4 w-[600px] h-[600px] rounded-full bg-[#721124]/10 blur-[180px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-display font-medium text-white mb-4"
          >
            Our Favorite Moments
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm sm:text-base font-serif text-white/60 max-w-lg mx-auto"
          >
            Frames etched into eternity. If my memory were a cinema, these scenes would play forever.
          </motion.p>
        </div>

        {/* Cinematic Filmstrip Moments (Alternating Layouts) */}
        <div className="space-y-24">
          {moments.map((moment, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={moment.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Photo Side */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`lg:col-span-7 ${
                    isEven ? "" : "lg:order-2"
                  }`}
                >
                  <div className="relative aspect-[16/10] rounded-3xl overflow-hidden glass-panel border border-[#D4AF37]/30 shadow-2xl group">
                    <SafeImage
                      src={moment.image}
                      alt={moment.title}
                      fill
                      className="object-cover group-hover:scale-106 transition-transform duration-1000 ease-out"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#08070B] via-transparent to-transparent opacity-80" />
                  </div>
                </motion.div>

                {/* Narrative Side */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.15 }}
                  className={`lg:col-span-5 flex flex-col text-left space-y-6 ${
                    isEven ? "" : "lg:order-1"
                  }`}
                >
                  <div>
                    <span className="text-xs font-mono text-[#D4AF37] tracking-widest uppercase block mb-2">
                      Scene 0{index + 1}
                    </span>

                    <h3 className="text-2xl sm:text-3xl font-display font-medium text-white mb-3">
                      {moment.title}
                    </h3>
                  </div>

                  <p className="text-base sm:text-lg font-serif text-white/80 leading-relaxed">
                    {moment.story}
                  </p>

                  <div className="p-5 rounded-2xl glass-panel-gold border-l-2 border-[#F4ACB7]">
                    <p className="text-sm font-serif italic text-[#FDFBF7] leading-relaxed">
                      {moment.accentQuote}
                    </p>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};