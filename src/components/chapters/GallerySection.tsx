"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Heart,
} from "lucide-react";
import { BIRTHDAY_DATA } from "@/data/birthday";
import { SafeImage } from "@/components/ui/SafeImage";
import { GalleryPhoto } from "@/types";

export const GallerySection: React.FC = () => {
  const allPhotos = BIRTHDAY_DATA.gallery;
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);

  const filteredPhotos =
    activeFilter === "all"
      ? allPhotos
      : allPhotos.filter((p) => p.tag === activeFilter);

  const filterOptions = [
    { id: "all", label: "All Memories" },
    { id: "favorites", label: "Favorites" },
    { id: "candid", label: "Candid Laughter" },
    { id: "adventures", label: "Adventures" },
    { id: "moments", label: "Quiet Moments" },
  ];

  const handleNextPhoto = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!selectedPhoto) return;

    const currentIndex = filteredPhotos.findIndex(
      (p) => p.id === selectedPhoto.id
    );

    const nextIndex = (currentIndex + 1) % filteredPhotos.length;
    setSelectedPhoto(filteredPhotos[nextIndex]);
  };

  const handlePrevPhoto = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!selectedPhoto) return;

    const currentIndex = filteredPhotos.findIndex(
      (p) => p.id === selectedPhoto.id
    );

    const prevIndex =
      (currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length;

    setSelectedPhoto(filteredPhotos[prevIndex]);
  };

  // Keyboard accessibility
  React.useEffect(() => {
    if (!selectedPhoto) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedPhoto(null);
      } else if (e.key === "ArrowRight") {
        handleNextPhoto();
      } else if (e.key === "ArrowLeft") {
        handlePrevPhoto();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedPhoto, filteredPhotos]);

  return (
    <section
      id="chapter-gallery"
      className="relative min-h-screen px-6 py-28 bg-[#08070B] overflow-hidden"
    >
      {/* Background ambient blur */}
      <div className="absolute right-1/4 top-1/4 w-[500px] h-[500px] rounded-full bg-[#D4AF37]/5 blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-display font-medium text-white mb-4"
          >
            Memory Gallery
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm sm:text-base font-serif text-white/60 max-w-lg mx-auto mb-8"
          >
            Snapshots of grace, smiles that stop time, and frames I could
            admire forever.
          </motion.p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {filterOptions.map((opt) => {
              const isSelected = activeFilter === opt.id;

              return (
                <button
                  key={opt.id}
                  onClick={() => setActiveFilter(opt.id)}
                  className={`px-4 py-2 rounded-full text-xs font-medium tracking-wider transition-all duration-300 ${
                    isSelected
                      ? "bg-[#D4AF37] text-[#08070B] shadow-lg shadow-[#D4AF37]/20"
                      : "bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Masonry / Responsive Curated Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {filteredPhotos.map((photo, index) => {
            const aspectClass =
              photo.aspectRatio === "portrait"
                ? "aspect-[3/4]"
                : photo.aspectRatio === "landscape"
                ? "aspect-[16/10]"
                : "aspect-square";

            return (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.05 * index }}
                onClick={() => setSelectedPhoto(photo)}
                className="break-inside-avoid group relative rounded-2xl overflow-hidden glass-panel border border-white/10 hover:border-[#D4AF37]/50 shadow-xl cursor-pointer transition-all duration-500 hover:-translate-y-1.5"
              >
                <div
                  className={`relative w-full ${aspectClass} overflow-hidden`}
                >
                  <SafeImage
                    src={photo.image}
                    alt={photo.title}
                    fill
                    className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#08070B] via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Hover overlay removed.
                      Photo remains clean with only the image and hover effect. */}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-xl"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-6 right-6 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={handlePrevPhoto}
              className="absolute left-4 sm:left-8 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleNextPhoto}
              className="absolute right-4 sm:right-8 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Next photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Lightbox Content Card */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[90vh] w-full rounded-3xl overflow-hidden glass-panel-gold border border-[#D4AF37]/30 flex flex-col md:flex-row shadow-2xl"
            >
              {/* Image side */}
              <div className="relative md:w-3/5 h-72 md:h-auto min-h-[300px]">
                <SafeImage
                  src={selectedPhoto.image}
                  alt={selectedPhoto.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Text / Note side */}
              <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between text-left bg-[#0A0810]/80">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-wider">
                      {selectedPhoto.date}
                    </span>

                    <Heart className="w-4 h-4 text-[#F4ACB7] fill-current" />
                  </div>

                  <h3 className="text-2xl font-display font-medium text-white mb-2">
                    {selectedPhoto.title}
                  </h3>

                  <p className="text-sm font-light text-white/60 mb-6">
                    {selectedPhoto.subtitle}
                  </p>

                  {selectedPhoto.note && (
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <p className="font-serif italic text-sm text-[#FDFBF7] leading-relaxed">
                        &ldquo;{selectedPhoto.note}&rdquo;
                      </p>
                    </div>
                  )}
                </div>

                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs text-white/40">
                  <span>Lakshya&apos;s Memory Archive</span>
                  <span className="capitalize">{selectedPhoto.tag}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};