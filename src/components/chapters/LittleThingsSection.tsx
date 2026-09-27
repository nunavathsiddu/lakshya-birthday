"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Heart, CheckCircle2 } from "lucide-react";
import { BIRTHDAY_DATA } from "@/data/birthday";
import { LoveReason } from "@/types";

export const LittleThingsSection: React.FC = () => {
  const reasons = BIRTHDAY_DATA.reasons;
  const [revealedIds, setRevealedIds] = useState<number[]>([]);
  const [selectedReason, setSelectedReason] = useState<LoveReason | null>(null);

  const toggleReveal = (id: number) => {
    if (revealedIds.includes(id)) {
      setRevealedIds(revealedIds.filter((item) => item !== id));
    } else {
      setRevealedIds([...revealedIds, id]);
    }
  };

  const revealAll = () => {
    setRevealedIds(reasons.map((r) => r.id));
  };

  return (
    <section
      id="chapter-reasons"
      className="relative min-h-screen px-6 py-28 bg-[#09070D] overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute left-1/3 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#721124]/12 blur-[170px] pointer-events-none" />

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
            Little Things I Love About You
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm sm:text-base font-serif text-white/60 max-w-xl mx-auto mb-6"
          >
            A million reasons why my heart chose you, captured in the quiet details of who you are.
          </motion.p>

          <button
            onClick={revealAll}
            className="px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-xs text-[#D4AF37] transition-all font-mono tracking-wider"
          >
            Reveal All Reasons ✨
          </button>
        </div>

        {/* Floating Interactive Reason Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item, index) => {
            const isRevealed = revealedIds.includes(item.id);

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.05 * index }}
                onClick={() => {
                  toggleReveal(item.id);
                  setSelectedReason(item);
                }}
                className={`group relative p-6 rounded-3xl cursor-pointer transition-all duration-500 flex flex-col justify-between min-h-[260px] ${
                  isRevealed
                    ? "glass-panel-gold border-[#D4AF37]/50 shadow-2xl scale-[1.02]"
                    : "glass-panel border-white/10 hover:border-[#F4ACB7]/40 hover:bg-white/5"
                }`}
              >
                {/* Top Card Header */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono tracking-widest text-[#D4AF37]">
                      {item.number}
                    </span>
                    <span
                      className={`p-1.5 rounded-full transition-colors ${
                        isRevealed ? "bg-[#721124] text-white" : "bg-white/5 text-white/30"
                      }`}
                    >
                      <Heart className="w-3.5 h-3.5 fill-current" />
                    </span>
                  </div>

                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#F4ACB7] block mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-xl font-medium text-white mb-3">
                    {item.title}
                  </h3>
                </div>

                {/* Card Body / Description */}
                <div>
                  <p
                    className={`text-xs font-light text-white/70 leading-relaxed transition-all duration-300 ${
                      isRevealed ? "opacity-100 line-clamp-none" : "opacity-40 line-clamp-2"
                    }`}
                  >
                    {item.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                    <span className="text-[11px] font-serif italic text-[#D4AF37]">
                      {item.tagline}
                    </span>
                    <span className="text-[10px] font-mono text-white/30 group-hover:text-white/60">
                      {isRevealed ? "Expanded" : "Tap to open"}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

