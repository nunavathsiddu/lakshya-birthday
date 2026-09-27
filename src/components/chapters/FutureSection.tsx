"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Sunset,
  Coffee,
  Compass,
  Home,
  Heart,
} from "lucide-react";
import { BIRTHDAY_DATA } from "@/data/birthday";

export const FutureSection: React.FC = () => {
  const dreams = BIRTHDAY_DATA.futureDreams;

  const getDreamIcon = (iconName: string) => {
    switch (iconName) {
      case "Sunset":
        return <Sunset className="w-5 h-5 text-[#E07A5F]" />;
      case "Coffee":
        return <Coffee className="w-5 h-5 text-[#D4AF37]" />;
      case "Compass":
        return <Compass className="w-5 h-5 text-[#F4ACB7]" />;
      case "Home":
        return <Home className="w-5 h-5 text-[#A7C957]" />;
      case "Heart":
        return <Heart className="w-5 h-5 text-[#E63946]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#F3C969]" />;
    }
  };

  return (
    <section
      id="chapter-future"
      className="relative min-h-screen px-6 py-28 bg-[#08070B] overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute left-1/3 top-1/3 w-[600px] h-[600px] rounded-full bg-[#721124]/10 blur-[180px] pointer-events-none" />

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
            Our Tomorrow
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm sm:text-base font-serif text-white/60 max-w-lg mx-auto"
          >
            As breathtaking as our past has been, the best days of our lives are still quietly waiting
            to be lived.
          </motion.p>
        </div>

        {/* Future Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dreams.map((dream, index) => (
            <motion.div
              key={dream.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.08 * index }}
              className="group p-6 sm:p-8 rounded-3xl glass-panel border border-white/10 hover:border-[#D4AF37]/50 shadow-xl flex flex-col justify-between transition-all duration-500 hover:-translate-y-1.5"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                    {getDreamIcon(dream.icon)}
                  </div>
                  <span className="text-xs font-mono tracking-widest text-white/40">
                    {dream.number}
                  </span>
                </div>

                <h3 className="text-xl font-serif font-semibold text-white mb-3 group-hover:text-[#F5E6C8] transition-colors">
                  {dream.title}
                </h3>
                <p className="text-sm font-light text-white/70 leading-relaxed mb-6">
                  {dream.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center gap-2">
                <Heart className="w-3 h-3 text-[#F4ACB7] fill-current" />
                <span className="text-xs font-serif italic text-[#D4AF37]">
                  {dream.wish}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

