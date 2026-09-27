"use client";

import React, { useState, useEffect } from "react";
import { Heart, Compass, X, Sparkles, ChevronRight } from "lucide-react";
import { BIRTHDAY_DATA } from "@/data/birthday";

export const CHAPTERS = [
  { id: "chapter-secret", num: "01", title: "The Secret" },
  { id: "chapter-countdown", num: "02", title: "The Countdown" },
  { id: "chapter-her-name", num: "03", title: "Her Name" },
  { id: "chapter-first-memory", num: "04", title: "The First Memory" },
  { id: "chapter-story", num: "05", title: "Our Story" },
  { id: "chapter-gallery", num: "06", title: "Memory Gallery" },
  { id: "chapter-reasons", num: "07", title: "Little Things I Love" },
  { id: "chapter-favorite-moments", num: "08", title: "Favorite Moments" },
  { id: "chapter-open-when", num: "09", title: "Open When..." },
  { id: "chapter-letter", num: "10", title: "The Letter" },
  { id: "chapter-music", num: "11", title: "Our Melody" },
  { id: "chapter-constellation", num: "12", title: "Our Constellation" },
  { id: "chapter-future", num: "13", title: "The Future" },
  { id: "chapter-promise", num: "14", title: "The Promise" },
  { id: "chapter-surprise", num: "15", title: "The Final Surprise" },
  { id: "chapter-celebration", num: "16", title: "Birthday Celebration" },
  { id: "chapter-last-page", num: "17", title: "The Last Page" },
];

interface FloatingNavProps {
  onHeartSecretTrigger: () => void;
  heartTapCount: number;
}

export const FloatingNav: React.FC<FloatingNavProps> = ({
  onHeartSecretTrigger,
  heartTapCount,
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeChapter, setActiveChapter] = useState(CHAPTERS[0]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [heartPulsing, setHeartPulsing] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      setScrollProgress(scrolled);

      // Determine active chapter based on scroll position
      const scrollY = window.scrollY + window.innerHeight * 0.4;
      for (let i = CHAPTERS.length - 1; i >= 0; i--) {
        const el = document.getElementById(CHAPTERS[i].id);
        if (el && el.offsetTop <= scrollY) {
          setActiveChapter(CHAPTERS[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleHeartClick = () => {
    setHeartPulsing(true);
    setTimeout(() => setHeartPulsing(false), 500);
    onHeartSecretTrigger();
  };

  const scrollToChapter = (id: string) => {
    setIsMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Top Thin Golden Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-[2px] bg-white/5 z-50 pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-[#D4AF37] via-[#F4ACB7] to-[#721124] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Minimalist HUD Pill */}
      <nav
        aria-label="Story Navigation"
        className="fixed top-5 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2 p-1.5 pl-4 pr-2 rounded-full glass-panel border border-[#D4AF37]/20 shadow-2xl backdrop-blur-xl"
      >
        {/* Active Chapter Label */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className="flex items-center gap-2 text-left hover:opacity-80 transition-opacity focus:outline-none"
        >
          <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase">
            {activeChapter.num}
          </span>
          <span className="text-xs font-serif tracking-wide text-white/90 truncate max-w-[130px] sm:max-w-[200px]">
            {activeChapter.title}
          </span>
        </button>

        <div className="w-[1px] h-3.5 bg-white/15" />

        {/* Chapter Navigator Drawer Trigger */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className="p-1.5 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors focus:outline-none"
          title="Open Chapter Index"
          aria-label="Open Chapter Index"
        >
          <Compass className="w-4 h-4 text-[#D4AF37]" />
        </button>

        {/* Secret Easter Egg Heart Trigger */}
        <button
          onClick={handleHeartClick}
          className={`relative p-1.5 rounded-full hover:bg-white/10 transition-colors focus:outline-none ${
            heartPulsing ? "scale-125 text-[#F4ACB7]" : "text-white/60 hover:text-[#F4ACB7]"
          }`}
          title="Secret: Tap me multiple times"
          aria-label="Secret Love Note Trigger"
        >
          <Heart className={`w-4 h-4 ${heartTapCount > 0 ? "fill-[#721124] text-[#F4ACB7]" : ""}`} />
          {heartTapCount > 0 && heartTapCount < BIRTHDAY_DATA.easterEggs.heartTapsNeeded && (
            <span className="absolute -top-1 -right-1 flex h-3 w-3 items-center justify-center rounded-full bg-[#721124] text-[8px] font-mono text-white">
              {heartTapCount}
            </span>
          )}
        </button>
      </nav>

      {/* Cinematic Chapter Drawer Modal */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-xl max-h-[85vh] overflow-hidden rounded-3xl glass-panel-gold border border-[#D4AF37]/30 p-6 sm:p-8 flex flex-col shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div>
                <p className="text-xs font-mono text-[#D4AF37] tracking-widest uppercase">
                  Story Index
                </p>
                <h3 className="text-xl sm:text-2xl font-serif text-white font-medium">
                  Lakshya&apos;s Chapters
                </h3>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chapter List */}
            <div className="overflow-y-auto py-4 space-y-1.5 pr-2">
              {CHAPTERS.map((ch) => {
                const isActive = activeChapter.id === ch.id;
                return (
                  <button
                    key={ch.id}
                    onClick={() => scrollToChapter(ch.id)}
                    className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-200 group text-left ${
                      isActive
                        ? "bg-gradient-to-r from-[#721124]/40 to-[#D4AF37]/20 border border-[#D4AF37]/40 text-white"
                        : "hover:bg-white/5 text-white/70 hover:text-white"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`text-xs font-mono w-6 ${
                          isActive ? "text-[#D4AF37] font-bold" : "text-white/40"
                        }`}
                      >
                        {ch.num}
                      </span>
                      <span className="font-serif text-base group-hover:translate-x-1 transition-transform">
                        {ch.title}
                      </span>
                    </div>
                    <ChevronRight
                      className={`w-4 h-4 transition-all ${
                        isActive
                          ? "text-[#D4AF37] opacity-100"
                          : "text-white/20 group-hover:text-white/60 opacity-0 group-hover:opacity-100"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Drawer Footer */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/40">
              <span className="flex items-center gap-1.5 text-[#F4ACB7]">
                <Sparkles className="w-3.5 h-3.5" />
                Crafted with love for Lakshya
              </span>
              <span>October 23</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
