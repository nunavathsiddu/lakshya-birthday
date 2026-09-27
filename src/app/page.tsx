"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { BackgroundEffects } from "@/components/ui/BackgroundEffects";
import { AudioPlayer } from "@/components/ui/AudioPlayer";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { SecretEasterEggModal } from "@/components/ui/SecretEasterEggModal";

// 17 Progressive Storytelling Chapters
import { SecretOpening } from "@/components/chapters/SecretOpening";
import { CountdownSection } from "@/components/chapters/CountdownSection";
import { HerNameSection } from "@/components/chapters/HerNameSection";
import { FirstMemorySection } from "@/components/chapters/FirstMemorySection";
import { TimelineSection } from "@/components/chapters/TimelineSection";
import { GallerySection } from "@/components/chapters/GallerySection";
import { LittleThingsSection } from "@/components/chapters/LittleThingsSection";
import { FavoriteMomentsSection } from "@/components/chapters/FavoriteMomentsSection";
import { OpenWhenSection } from "@/components/chapters/OpenWhenSection";
import { TheLetterSection } from "@/components/chapters/TheLetterSection";
import { MusicSection } from "@/components/chapters/MusicSection";
import { ConstellationSection } from "@/components/chapters/ConstellationSection";
import { FutureSection } from "@/components/chapters/FutureSection";
import { PromiseSection } from "@/components/chapters/PromiseSection";
import { FinalSurpriseSection } from "@/components/chapters/FinalSurpriseSection";
import { CelebrationSection } from "@/components/chapters/CelebrationSection";
import { LastPageSection } from "@/components/chapters/LastPageSection";

import { BIRTHDAY_DATA } from "@/data/birthday";

export default function BirthdayExperiencePage() {
  const [heartTapCount, setHeartTapCount] = useState(0);
  const [isEasterEggOpen, setIsEasterEggOpen] = useState(false);

  const handleHeartSecretTrigger = () => {
    const nextCount = heartTapCount + 1;
    setHeartTapCount(nextCount);

    if (nextCount >= BIRTHDAY_DATA.easterEggs.heartTapsNeeded) {
      setIsEasterEggOpen(true);
      setHeartTapCount(0); // reset after unlock
    }
  };

  const handleTriggerClimax = () => {
    // Grand celebration confetti burst
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 },
      colors: ["#D4AF37", "#F4ACB7", "#FFCAD4", "#721124", "#FFFFFF"],
    });
  };

  return (
    <main className="relative min-h-screen bg-[#08070B] text-[#FDFBF7] selection:bg-[#721124] selection:text-white">
      {/* Visual Ambient Atmosphere: Film Grain & Stardust Particles */}
      <BackgroundEffects />

      {/* Floating HUD Navigation */}
      <FloatingNav
        onHeartSecretTrigger={handleHeartSecretTrigger}
        heartTapCount={heartTapCount}
      />

      {/* Persistent Floating Luxury Audio Player */}
      <AudioPlayer />

      {/* Secret Love Note Modal */}
      <SecretEasterEggModal
        isOpen={isEasterEggOpen}
        onClose={() => setIsEasterEggOpen(false)}
      />

      {/* The 17 Progressive Romantic Experiences */}
      <article className="relative z-20">
        {/* 01 — THE SECRET */}
        <SecretOpening />

        {/* 02 — THE COUNTDOWN */}
        <CountdownSection />

        {/* 03 — HER NAME */}
        <HerNameSection />

        {/* 04 — THE FIRST MEMORY */}
        <FirstMemorySection />

        {/* 05 — OUR STORY */}
        <TimelineSection />

        {/* 06 — MEMORY GALLERY */}
        <GallerySection />

        {/* 07 — LITTLE THINGS I LOVE ABOUT YOU */}
        <LittleThingsSection />

        {/* 08 — OUR FAVORITE MOMENTS */}
        <FavoriteMomentsSection />

        {/* 09 — OPEN WHEN... */}
        <OpenWhenSection />

        {/* 10 — THE LETTER */}
        <TheLetterSection />

        {/* 11 — MUSIC EXPERIENCE */}
        <MusicSection />

        {/* 12 — OUR CONSTELLATION */}
        <ConstellationSection />

        {/* 13 — THE FUTURE */}
        <FutureSection />

        {/* 14 — THE PROMISE */}
        <PromiseSection />

        {/* 15 — THE FINAL SURPRISE */}
        <FinalSurpriseSection onTriggerClimax={handleTriggerClimax} />

        {/* 16 — BIRTHDAY CELEBRATION */}
        <CelebrationSection />

        {/* 17 — THE LAST PAGE */}
        <LastPageSection />
      </article>
    </main>
  );
}
