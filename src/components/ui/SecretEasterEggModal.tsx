"use client";

import React, { useState } from "react";
import { Heart, Sparkles, X, ChevronRight } from "lucide-react";
import { BIRTHDAY_DATA } from "@/data/birthday";

interface SecretEasterEggModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SecretEasterEggModal: React.FC<SecretEasterEggModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [currentNoteIndex, setCurrentNoteIndex] = useState(0);
  const notes = BIRTHDAY_DATA.easterEggs.hiddenNotes;

  React.useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-300">
      <div className="relative w-full max-w-lg rounded-3xl glass-panel-gold border border-[#F4ACB7]/40 p-6 sm:p-8 text-white shadow-2xl text-center">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Secret Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#721124]/50 border border-[#F4ACB7]/30 text-xs font-mono text-[#F4ACB7] mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>Secret Love Note Unlocked</span>
        </div>

        {/* Floating Heart Icon */}
        <div className="mx-auto w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#721124] via-[#A4133C] to-[#D4AF37] flex items-center justify-center shadow-lg shadow-[#721124]/40 mb-4 animate-bounce">
          <Heart className="w-7 h-7 text-white fill-current" />
        </div>

        <h3 className="text-2xl font-serif font-bold text-white mb-3">
          You Found My Secret Heart
        </h3>

        <div className="min-h-[120px] flex items-center justify-center p-4 rounded-2xl bg-white/5 border border-white/10 mb-6">
          <p className="text-base sm:text-lg font-serif italic text-[#FDFBF7] leading-relaxed">
            &ldquo;{notes[currentNoteIndex]}&rdquo;
          </p>
        </div>

        {/* Note Pagination & Next button */}
        <div className="flex items-center justify-between pt-2 border-t border-white/10">
          <span className="text-xs text-white/50 font-mono">
            Note {currentNoteIndex + 1} of {notes.length}
          </span>
          <div className="flex gap-2">
            {currentNoteIndex < notes.length - 1 ? (
              <button
                onClick={() => setCurrentNoteIndex((prev) => prev + 1)}
                className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#D4AF37] text-[#08070B] text-xs font-semibold hover:bg-[#F5E6C8] transition-all"
              >
                <span>Next Note</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                onClick={onClose}
                className="px-5 py-2 rounded-full bg-[#721124] text-white text-xs font-semibold hover:bg-[#A4133C] transition-all"
              >
                Keep Exploring
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
