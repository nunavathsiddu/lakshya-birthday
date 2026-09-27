"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles, Disc3, Heart, Headphones, Play, Pause } from "lucide-react";
import { BIRTHDAY_DATA } from "@/data/birthday";

export const MusicSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const handleState = (e: Event) => {
      const customEvent = e as CustomEvent<{ isPlaying: boolean }>;
      if (customEvent.detail) {
        setIsPlaying(customEvent.detail.isPlaying);
      }
    };

    window.addEventListener("romantic-music-state", handleState);
    return () => window.removeEventListener("romantic-music-state", handleState);
  }, []);

  const handleToggle = () => {
    window.dispatchEvent(new CustomEvent("toggle-romantic-music"));
  };

  return (
    <section
      id="chapter-music"
      className="relative min-h-screen flex items-center justify-center px-6 py-28 bg-[#09070E] overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-[#D4AF37]/8 blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto w-full text-center">
        {/* Header */}
        

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl sm:text-5xl font-display font-medium text-white mb-4"
        >
          Our Soundtrack
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm sm:text-base font-serif text-white/60 max-w-lg mx-auto mb-14"
        >
          A melody picked specifically for this moment. Let the rhythm play softly while you explore.
        </motion.p>

        {/* Vinyl Disc & Acoustic Lounge Display */}
        <div className="relative max-w-2xl mx-auto p-8 sm:p-12 rounded-3xl glass-panel-gold border border-[#D4AF37]/30 shadow-2xl flex flex-col items-center">
          {/* Animated Vinyl Record Graphic */}
          <div
            onClick={handleToggle}
            className="relative mb-8 group cursor-pointer"
            role="button"
            tabIndex={0}
            aria-label={isPlaying ? "Pause music" : "Play music"}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleToggle();
              }
            }}
          >
            <div
              className={`w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-[#120E18] border-4 border-[#D4AF37]/40 flex items-center justify-center shadow-2xl relative overflow-hidden transition-transform duration-500 group-hover:scale-105 ${
                isPlaying ? "animate-[spin_10s_linear_infinite]" : ""
              }`}
            >
              {/* Vinyl Grooves */}
              <div className="absolute inset-4 rounded-full border border-white/5" />
              <div className="absolute inset-8 rounded-full border border-white/5" />
              <div className="absolute inset-12 rounded-full border border-white/10" />
              <div className="absolute inset-16 rounded-full border border-white/5" />

              {/* Center Label */}
              <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#721124] to-[#A4133C] border-2 border-[#D4AF37] flex items-center justify-center p-2 text-center shadow-inner group-hover:scale-110 transition-transform">
                {isPlaying ? (
                  <Pause className="w-8 h-8 text-[#FDFBF7]" />
                ) : (
                  <Play className="w-8 h-8 text-[#FDFBF7] translate-x-0.5" />
                )}
              </div>
            </div>

            {/* Glowing Accent Ring */}
            <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-[#D4AF37]/20 via-[#F4ACB7]/20 to-[#721124]/20 blur-xl opacity-60 pointer-events-none" />
          </div>

          {/* Track Info */}
          <div className="mb-6">
            <span className="text-[11px] font-mono tracking-widest text-[#D4AF37] uppercase block mb-1">
              Currently Selected
            </span>
            <h3 className="text-2xl font-serif font-semibold text-white">
              {BIRTHDAY_DATA.audio.title}
            </h3>
            <p className="text-sm text-white/50 font-light mt-1">
              {BIRTHDAY_DATA.audio.artist}
            </p>
          </div>

          {/* Main Action Button */}
          <button
            onClick={handleToggle}
            className="mb-8 px-8 py-3 rounded-full bg-gradient-to-r from-[#721124] via-[#A4133C] to-[#D4AF37] text-white font-serif text-sm font-medium hover:scale-105 transition-all shadow-xl shadow-[#721124]/30 flex items-center gap-2.5"
          >
            {isPlaying ? (
              <>
                <Pause className="w-4 h-4 fill-current" />
                <span>Pause Melody</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-current" />
                <span>Play Our Melody</span>
              </>
            )}
          </button>

          {/* Audio Visualizer Waves Simulation */}
          <div className="flex items-center justify-center gap-1.5 h-10 w-full max-w-xs mb-8">
            {[40, 75, 55, 90, 60, 85, 45, 95, 70, 50, 80, 65, 90, 45, 70].map((h, i) => (
              <span
                key={i}
                className={`w-1.5 bg-gradient-to-t from-[#721124] to-[#D4AF37] rounded-full transition-all ${
                  isPlaying ? "animate-pulse" : "h-1 opacity-30"
                }`}
                style={
                  isPlaying
                    ? {
                        height: `${h}%`,
                        animationDuration: `${0.8 + (i % 5) * 0.2}s`,
                        animationDelay: `${i * 0.08}s`,
                      }
                    : { height: "4px" }
                }
              />
            ))}
          </div>

          {/* User Prompt */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-white/70">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <Headphones className="w-4 h-4 text-[#F4ACB7]" />
              <span>Floating bottom player also available anytime</span>
            </div>
            <div className="flex items-center gap-1.5 text-[#D4AF37]">
              <Heart className="w-3.5 h-3.5 fill-current" />
              <span>Or let the live ambient piano serenade you</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

