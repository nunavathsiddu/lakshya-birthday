"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Calendar, Heart, ChevronRight } from "lucide-react";
import { BIRTHDAY_DATA } from "@/data/birthday";
import { SafeImage } from "@/components/ui/SafeImage";
import { TimelineMilestone } from "@/types";

export const TimelineSection: React.FC = () => {
  const milestones = BIRTHDAY_DATA.timeline;
  const [activeMilestone, setActiveMilestone] = useState<TimelineMilestone>(milestones[0]);

  return (
    <section
      id="chapter-story"
      className="relative min-h-screen flex flex-col justify-center px-6 py-28 bg-[#0A0810] overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute left-1/4 bottom-10 w-[600px] h-[600px] rounded-full bg-[#721124]/10 blur-[180px] pointer-events-none" />

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
            The Chapters of Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm sm:text-base font-serif text-white/60 max-w-lg mx-auto"
          >
            An interactive timeline of moments that turned two separate paths into one beautiful
            journey.
          </motion.p>
        </div>

        {/* Interactive Milestone Tabs / Track */}
        <div className="relative mb-12">
          {/* Horizontal Track line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent -translate-y-1/2 z-0" />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4 relative z-10">
            {milestones.map((item) => {
              const isActive = activeMilestone.id === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveMilestone(item)}
                  className={`p-4 rounded-2xl transition-all duration-300 text-left flex flex-col justify-between group ${
                    isActive
                      ? "glass-panel-gold border-[#D4AF37] shadow-lg shadow-[#D4AF37]/15 scale-105"
                      : "glass-panel border-white/10 hover:border-white/30 hover:bg-white/5"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-xs font-mono tracking-wider ${
                        isActive ? "text-[#D4AF37] font-bold" : "text-white/40"
                      }`}
                    >
                      {item.step}
                    </span>
                    <Heart
                      className={`w-3.5 h-3.5 transition-colors ${
                        isActive ? "text-[#F4ACB7] fill-current" : "text-white/20"
                      }`}
                    />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-white/50 block mb-0.5">
                      {item.date}
                    </span>
                    <p
                      className={`font-serif text-sm font-medium leading-tight ${
                        isActive ? "text-white" : "text-white/70"
                      }`}
                    >
                      {item.title}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Milestone Deep Story Card */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeMilestone.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 rounded-3xl glass-panel-gold border border-[#D4AF37]/30 shadow-2xl"
            >
              {/* Photo */}
              <div className="lg:col-span-5">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-white/10">
                  <SafeImage
                    src={activeMilestone.image}
                    alt={activeMilestone.imageAlt}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                </div>
              </div>

              {/* Story Narrative */}
              <div className="lg:col-span-7 flex flex-col text-left space-y-4">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#721124]/40 border border-[#F4ACB7]/30 text-xs font-mono text-[#F4ACB7]">
                    <Calendar className="w-3 h-3" />
                    {activeMilestone.date}
                  </span>
                  <span className="text-xs font-mono text-white/40">
                    Step {activeMilestone.step} of 06
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-display font-medium text-white">
                  {activeMilestone.title}
                </h3>
                <p className="text-xs font-mono uppercase tracking-widest text-[#D4AF37]">
                  {activeMilestone.subtitle}
                </p>

                <p className="text-base sm:text-lg font-serif text-white/80 leading-relaxed">
                  {activeMilestone.story}
                </p>

                {activeMilestone.quote && (
                  <div className="pt-2 border-t border-white/10">
                    <p className="font-serif italic text-sm sm:text-base text-[#F5E6C8]">
                      &ldquo;{activeMilestone.quote}&rdquo;
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

