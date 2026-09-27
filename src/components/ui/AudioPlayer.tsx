"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { Volume2, VolumeX, Play, Pause, Music, Sparkles } from "lucide-react";
import { BIRTHDAY_DATA } from "@/data/birthday";

export const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isSynthesizerMode, setIsSynthesizerMode] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTimeStr, setCurrentTimeStr] = useState("0:00");
  const [durationStr, setDurationStr] = useState("0:00");
  const [isExpanded, setIsExpanded] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const synthCtxRef = useRef<AudioContext | null>(null);
  const synthIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Romantic ambient chord progression in F# Major / D# Minor (Warm, ethereal, cinematic)
  // Chord notes in Hz
  const CHORDS = [
    [185.0, 233.08, 277.18, 369.99], // F#maj
    [155.56, 185.0, 233.08, 277.18], // D#m7
    [123.47, 185.0, 233.08, 293.66], // Bmaj7
    [138.59, 174.61, 207.65, 277.18], // C#sus4
  ];

  const playSynthesizerNote = useCallback(
    (frequencies: number[], audioCtx: AudioContext) => {
      const now = audioCtx.currentTime;
      frequencies.forEach((freq, idx) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        const filter = audioCtx.createBiquadFilter();

        osc.type = idx % 2 === 0 ? "sine" : "triangle";
        osc.frequency.setValueAtTime(freq, now);

        filter.type = "lowpass";
        filter.frequency.setValueAtTime(650 + idx * 80, now);

        gain.gain.setValueAtTime(0.001, now);
        gain.gain.exponentialRampToValueAtTime(0.045 / (idx + 1), now + 0.8);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 5.5);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(audioCtx.destination);

        osc.start(now);
        osc.stop(now + 6.0);
      });
    },
    []
  );

  const startSynthesizer = useCallback(() => {
    try {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!synthCtxRef.current) {
        synthCtxRef.current = new AudioCtx();
      }
      if (synthCtxRef.current.state === "suspended") {
        synthCtxRef.current.resume();
      }

      let chordIdx = 0;
      playSynthesizerNote(CHORDS[0], synthCtxRef.current);

      if (synthIntervalRef.current) clearInterval(synthIntervalRef.current);
      synthIntervalRef.current = setInterval(() => {
        if (!synthCtxRef.current) return;
        chordIdx = (chordIdx + 1) % CHORDS.length;
        playSynthesizerNote(CHORDS[chordIdx], synthCtxRef.current);
      }, 5000);

      setIsSynthesizerMode(true);
      setIsPlaying(true);
      setDurationStr("Ambient");
    } catch {
      console.warn("Web Audio API not supported");
    }
  }, [CHORDS, playSynthesizerNote]);

  const stopSynthesizer = useCallback(() => {
    if (synthIntervalRef.current) {
      clearInterval(synthIntervalRef.current);
      synthIntervalRef.current = null;
    }
    if (synthCtxRef.current && synthCtxRef.current.state === "running") {
      synthCtxRef.current.suspend();
    }
    setIsPlaying(false);
  }, []);

  const formatTime = (secs: number) => {
    if (isNaN(secs)) return "0:00";
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  const togglePlay = useCallback(() => {
    if (isPlaying) {
      if (isSynthesizerMode) {
        stopSynthesizer();
      } else if (audioRef.current) {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    } else {
      if (audioRef.current && !isSynthesizerMode) {
        audioRef.current
          .play()
          .then(() => setIsPlaying(true))
          .catch(() => {
            // Audio file not found or browser blocked -> switch to synthesizer
            startSynthesizer();
          });
      } else {
        startSynthesizer();
      }
    }
  }, [isPlaying, isSynthesizerMode, stopSynthesizer, startSynthesizer]);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!audioRef.current || isSynthesizerMode) return;
    const target = parseFloat(e.target.value);
    audioRef.current.currentTime = (target / 100) * (audioRef.current.duration || 1);
    setProgress(target);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => {
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100);
        setCurrentTimeStr(formatTime(audio.currentTime));
      }
    };

    const handleLoadedMetadata = () => {
      if (audio.duration) {
        setDurationStr(formatTime(audio.duration));
      }
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setProgress(0);
    };

    const handleError = () => {
      // Graceful fallback to synthetic ambient soundscape
      console.log("Custom MP3 not found. Falling back to romantic ambient synthesizer.");
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("error", handleError);

    const handleExternalToggle = () => {
      togglePlay();
    };
    window.addEventListener("toggle-romantic-music", handleExternalToggle);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener("error", handleError);
      window.removeEventListener("toggle-romantic-music", handleExternalToggle);
      if (synthIntervalRef.current) clearInterval(synthIntervalRef.current);
    };
  }, [togglePlay]);

  // Broadcast state to other components
  useEffect(() => {
    window.dispatchEvent(
      new CustomEvent("romantic-music-state", {
        detail: { isPlaying, isSynthesizerMode },
      })
    );
  }, [isPlaying, isSynthesizerMode]);

  return (
    <>
      <audio
  ref={audioRef}
  src="/audio/i-think-they-call-this-love.mp3"
  preload="metadata"
/>

      {/* Floating Audio Dock */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative">
          {/* Expanded Controls Popover */}
          {isExpanded && (
            <div className="absolute bottom-16 right-0 w-72 p-4 rounded-2xl glass-panel-gold shadow-2xl border border-[#D4AF37]/30 text-white backdrop-blur-xl animate-in fade-in zoom-in-95 duration-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#721124] to-[#D4AF37] flex items-center justify-center shadow-lg">
                  <Music className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-[#D4AF37] font-medium tracking-wider uppercase truncate">
                    {isSynthesizerMode ? "Ambient Soundscape" : BIRTHDAY_DATA.audio.artist}
                  </p>
                  <p className="text-sm font-serif font-semibold text-white truncate">
                    {isSynthesizerMode ? "Romantic Piano Lullaby" : BIRTHDAY_DATA.audio.title}
                  </p>
                </div>
              </div>

              {!isSynthesizerMode ? (
                <>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={progress}
                    onChange={handleSeek}
                    className="w-full h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#D4AF37]"
                  />
                  <div className="flex justify-between text-[10px] text-white/60 mt-1 font-mono">
                    <span>{currentTimeStr}</span>
                    <span>{durationStr}</span>
                  </div>
                </>
              ) : (
                <div className="flex items-center gap-2 px-2 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-[#F4ACB7]">
                  <Sparkles className="w-3.5 h-3.5 animate-spin" />
                  <span>Synthesizing live romantic Rhodes chords</span>
                </div>
              )}

              <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/10">
                <button
                  onClick={toggleMute}
                  className="p-2 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors"
                  title={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <button
                  onClick={togglePlay}
                  className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37] text-[#08070B] font-semibold text-xs hover:bg-[#F5E6C8] transition-all shadow-md"
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-3.5 h-3.5 fill-current" />
                      <span>Pause</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>Play Song</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

          {/* Collapsed Luxury Pill Button */}
          <div className="flex items-center gap-2 p-1.5 pl-3 pr-2 rounded-full glass-panel border border-[#D4AF37]/30 shadow-xl hover:border-[#D4AF37]/60 transition-all duration-300">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-2.5 text-left focus:outline-none"
            >
              {/* Animated Waveform indicator */}
              <div className="flex items-end gap-0.5 h-4 w-4">
                <span
                  className={`w-0.5 bg-[#D4AF37] rounded-full transition-all duration-300 ${
                    isPlaying ? "h-4 animate-pulse" : "h-1.5"
                  }`}
                />
                <span
                  className={`w-0.5 bg-[#F4ACB7] rounded-full transition-all duration-300 ${
                    isPlaying ? "h-3 animate-pulse delay-75" : "h-2.5"
                  }`}
                />
                <span
                  className={`w-0.5 bg-[#D4AF37] rounded-full transition-all duration-300 ${
                    isPlaying ? "h-4 animate-pulse delay-150" : "h-1"
                  }`}
                />
              </div>
              <span className="text-xs font-serif tracking-wide text-white/90 hidden sm:inline">
                {isPlaying ? "Our Melody Playing" : "Play Our Song"}
              </span>
            </button>

            <button
              onClick={togglePlay}
              className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#721124] to-[#D4AF37] text-white flex items-center justify-center hover:scale-105 transition-transform shadow-md focus:outline-none"
              aria-label={isPlaying ? "Pause audio" : "Play audio"}
            >
              {isPlaying ? (
                <Pause className="w-3.5 h-3.5 fill-current" />
              ) : (
                <Play className="w-3.5 h-3.5 fill-current translate-x-0.5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
