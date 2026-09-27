"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Star, X, Calendar, Heart } from "lucide-react";
import { BIRTHDAY_DATA } from "@/data/birthday";
import { ConstellationStar } from "@/types";
import { SafeImage } from "@/components/ui/SafeImage";

export const ConstellationSection: React.FC = () => {
  const { stars, subtitle, description } = BIRTHDAY_DATA.constellation;
  const [selectedStar, setSelectedStar] = useState<ConstellationStar | null>(null);

  return (
    <section
      id="chapter-constellation"
      className="relative min-h-screen px-6 py-28 bg-[#07050B] overflow-hidden"
    >
      {/* Deep Space Background Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-[#721124]/10 blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] rounded-full bg-[#D4AF37]/5 blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-display font-medium text-white mb-4"
          >
            Our Constellation
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm sm:text-base font-serif text-white/60 max-w-lg mx-auto"
          >
            {description} Tap any glowing star to reveal the memory it holds.
          </motion.p>
        </div>

        {/* Celestial Star Map Box */}
        <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] max-h-[620px] rounded-3xl glass-panel-gold border border-[#D4AF37]/30 shadow-2xl p-4 sm:p-8 overflow-hidden">
          {/* Subtle Celestial Grid Lines */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

          {/* SVG Connecting Constellation Lines */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            {stars.map((star) =>
              (star.connections || []).map((targetId) => {
                const targetStar = stars.find((s) => s.id === targetId);
                if (!targetStar) return null;

                return (
                  <line
                    key={`${star.id}-${targetId}`}
                    x1={`${star.x}%`}
                    y1={`${star.y}%`}
                    x2={`${targetStar.x}%`}
                    y2={`${targetStar.y}%`}
                    stroke="rgba(212, 175, 55, 0.35)"
                    strokeWidth="0.4"
                    strokeDasharray="1 1"
                  />
                );
              })
            )}
          </svg>

          {/* Interactive Stars */}
          {stars.map((star) => {
            const isSelected = selectedStar?.id === star.id;

            return (
              <div
                key={star.id}
                style={{
                  left: `${star.x}%`,
                  top: `${star.y}%`,
                }}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-10"
              >
                <button
                  onClick={() => setSelectedStar(star)}
                  className="group relative flex items-center justify-center focus:outline-none"
                  aria-label={`Open star memory: ${star.name}`}
                >
                  {/* Glowing halo */}
                  <div
                    className={`absolute -inset-3 rounded-full transition-all duration-500 pointer-events-none ${
                      isSelected
                        ? "bg-[#F4ACB7]/40 scale-150 blur-md"
                        : "bg-[#D4AF37]/20 group-hover:bg-[#D4AF37]/40 group-hover:scale-125 blur-sm"
                    }`}
                  />

                  {/* Core Star */}
                  <div
                    className={`relative rounded-full flex items-center justify-center transition-all duration-300 ${
                      star.brightness === 3
                        ? "w-7 h-7 bg-gradient-to-tr from-[#D4AF37] to-white text-[#08070B] shadow-lg shadow-[#D4AF37]/60"
                        : star.brightness === 2
                        ? "w-6 h-6 bg-gradient-to-tr from-[#F4ACB7] to-white text-[#08070B] shadow-md shadow-[#F4ACB7]/50"
                        : "w-5 h-5 bg-white text-[#08070B]"
                    } group-hover:scale-125`}
                  >
                    <Star className="w-3.5 h-3.5 fill-current" />
                  </div>
                </button>
              </div>
            );
          })}

          {/* Prompt instruction footer */}
          <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-[11px] font-mono text-white/40 pointer-events-none">
            <span>Tap any star to inspect memory</span>
            <span>Constellation of Lakshya</span>
          </div>
        </div>
      </div>

      {/* Star Memory Modal */}
      <AnimatePresence>
        {selectedStar && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedStar(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-lg w-full rounded-3xl glass-panel-gold border border-[#D4AF37]/40 p-6 sm:p-8 text-left shadow-2xl"
            >
              <button
                onClick={() => setSelectedStar(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Close star popup"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Star Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#721124] to-[#D4AF37] flex items-center justify-center text-white shadow-lg">
                  <Star className="w-6 h-6 fill-current" />
                </div>

                <div>
                  <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase block">
                    Celestial Memory
                  </span>

                  <h3 className="text-xl sm:text-2xl font-display font-medium text-white">
                    {selectedStar.name}
                  </h3>
                </div>
              </div>

              {/* Photo if available */}
              {selectedStar.image && (
                <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-5 border border-white/10 shadow-lg">
                  <SafeImage
                    src={selectedStar.image}
                    alt={selectedStar.title}
                    fill
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
              )}

              <div className="flex items-center gap-2 mb-3">
                <Calendar className="w-3.5 h-3.5 text-[#F4ACB7]" />
                <span className="text-xs font-mono text-[#F4ACB7]">
                  {selectedStar.date}
                </span>
              </div>

              <h4 className="text-lg font-serif text-white font-medium mb-2">
                {selectedStar.title}
              </h4>

              <p className="text-sm font-serif text-white/80 leading-relaxed mb-6">
                {selectedStar.story}
              </p>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/50 font-mono">
                <span className="flex items-center gap-1 text-[#D4AF37]">
                  <Heart className="w-3.5 h-3.5 fill-current" />
                  Eternal in our sky
                </span>

                <button
                  onClick={() => setSelectedStar(null)}
                  className="px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  Close Star
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};