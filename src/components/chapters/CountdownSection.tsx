"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles, Gift, Heart, Calendar } from "lucide-react";
import { BIRTHDAY_DATA } from "@/data/birthday";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isBirthdayToday: boolean;
}

export const CountdownSection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isBirthdayToday: false,
  });
  const [previewBirthdayMode, setPreviewBirthdayMode] = useState(false);

  useEffect(() => {
    const calculateCountdown = () => {
      const now = new Date();
      const currentYear = now.getFullYear();

      // Target: October 23
      let targetDate = new Date(
        currentYear,
        BIRTHDAY_DATA.recipient.targetMonth - 1,
        BIRTHDAY_DATA.recipient.targetDay,
        0,
        0,
        0
      );

      // Check if today is the birthday
      const isToday =
        now.getMonth() === BIRTHDAY_DATA.recipient.targetMonth - 1 &&
        now.getDate() === BIRTHDAY_DATA.recipient.targetDay;

      // If the date has already passed this year and is not today, calculate to next year
      if (now.getTime() > targetDate.getTime() + 24 * 60 * 60 * 1000) {
        targetDate = new Date(
          currentYear + 1,
          BIRTHDAY_DATA.recipient.targetMonth - 1,
          BIRTHDAY_DATA.recipient.targetDay,
          0,
          0,
          0
        );
      }

      const diff = targetDate.getTime() - now.getTime();

      if (isToday || diff <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isBirthdayToday: true,
        });
      } else {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        setTimeLeft({
          days,
          hours,
          minutes,
          seconds,
          isBirthdayToday: false,
        });
      }
    };

    calculateCountdown();
    const interval = setInterval(calculateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const isCelebrationState = timeLeft.isBirthdayToday || previewBirthdayMode;

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section
      id="chapter-countdown"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24 bg-[#0B0910] text-center overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-[#721124]/15 blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto w-full">
        {/* Section Tag */}
        

        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl font-display font-medium text-white mb-4"
        >
          {isCelebrationState ? (
            <span className="rose-gradient-text">Today Is Lakshya&apos;s Day!</span>
          ) : (
            <span>
              Counting Down To <span className="gold-gradient-text">{BIRTHDAY_DATA.recipient.birthDate}</span>
            </span>
          )}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm sm:text-base font-serif text-white/60 max-w-xl mx-auto mb-12"
        >
          {isCelebrationState
            ? "The long-awaited moment has arrived. The universe celebrates the birth of someone truly irreplaceable."
            : "Every tick of the second hand brings us closer to the most special day of the year."}
        </motion.p>

        {/* Dynamic Countdown / Celebration Display */}
        {!isCelebrationState ? (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-3xl mx-auto mb-10">
            {timeUnits.map((unit, index) => (
              <motion.div
                key={unit.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="group relative p-6 sm:p-8 rounded-3xl glass-panel-gold border border-[#D4AF37]/20 shadow-xl flex flex-col items-center justify-center hover:border-[#D4AF37]/50 transition-all duration-300"
              >
                <span className="text-4xl sm:text-6xl font-display font-bold gold-gradient-text tabular-nums mb-2">
                  {String(unit.value).padStart(2, "0")}
                </span>
                <span className="text-xs font-mono uppercase tracking-widest text-white/50 group-hover:text-[#F4ACB7] transition-colors">
                  {unit.label}
                </span>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="p-8 sm:p-12 rounded-3xl glass-panel-gold border border-[#F4ACB7]/40 max-w-2xl mx-auto mb-10 text-center shadow-2xl relative overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#721124]/30 rounded-full blur-3xl pointer-events-none" />
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#721124] to-[#D4AF37] flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Gift className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-3">
              Happy Birthday, Lakshya!
            </h3>
            <p className="text-white/80 font-serif text-base sm:text-lg leading-relaxed mb-6">
              May every second of this day be drenched in laughter, surrounded by the people who
              adore you, and filled with memories as radiant as your heart.
            </p>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#D4AF37] tracking-wider uppercase">
              <Heart className="w-3.5 h-3.5 fill-current text-[#F4ACB7]" />
              <span>The celebration is officially in session</span>
            </div>
          </motion.div>
        )}

        {/* Live Preview Toggle Pill */}
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs text-white/50">
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>Status: {timeLeft.isBirthdayToday ? "Birthday Date Active" : "Countdown Running"}</span>
          <button
            onClick={() => setPreviewBirthdayMode(!previewBirthdayMode)}
            className="ml-2 px-2.5 py-0.5 rounded-full bg-white/10 hover:bg-white/20 text-[#F4ACB7] hover:text-white transition-colors text-[11px]"
          >
            {previewBirthdayMode ? "Show Live Countdown" : "Preview Celebration"}
          </button>
        </div>
      </div>
    </section>
  );
};

