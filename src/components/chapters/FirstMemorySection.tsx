"use client";

import React from "react";
import { motion } from "framer-motion";
import { BIRTHDAY_DATA } from "@/data/birthday";
import { SafeImage } from "@/components/ui/SafeImage";

export const FirstMemorySection: React.FC = () => {
  const memory = BIRTHDAY_DATA.firstMemory;

  return (
    <section
      id="chapter-first-memory"
      className="relative min-h-screen flex items-center justify-center px-6 py-28 bg-[#08070B] overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute right-0 top-1/3 w-[500px] h-[500px] rounded-full bg-[#721124]/15 blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-display font-medium text-white"
          >
            The First Memory
          </motion.h2>
        </div>

        {/* Cinematic Card Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Large Cinematic Image Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="relative aspect-[16/10] sm:aspect-[16/9] rounded-3xl overflow-hidden glass-panel border border-[#D4AF37]/30 shadow-2xl group">
              <SafeImage
                src={memory.image}
                alt={memory.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-1000"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#08070B] via-black/20 to-transparent" />
            </div>
          </motion.div>

          {/* Story Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col text-left space-y-6"
          >
            <div>
              <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-widest block mb-2">
                Genesis of Us
              </span>

              <h3 className="text-2xl sm:text-3xl font-display font-medium text-white mb-4">
                {memory.title}
              </h3>
            </div>

            <p className="text-base sm:text-lg font-serif text-white/80 leading-relaxed">
              {memory.story}
            </p>

            {/* Emotional Quote Block */}
            <div className="p-5 rounded-2xl glass-panel-gold border-l-2 border-[#D4AF37]">
              <p className="text-sm sm:text-base font-serif italic text-[#FDFBF7] leading-relaxed">
                {memory.quote}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};