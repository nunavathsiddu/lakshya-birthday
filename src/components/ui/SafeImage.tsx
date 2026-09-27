"use client";

import React, { useState } from "react";
import Image, { ImageProps } from "next/image";

interface SafeImageProps extends Omit<ImageProps, "onError"> {
  fallbackSrc?: string;
  containerClassName?: string;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  className = "",
  containerClassName = "",
  fallbackSrc,
  fill,
  width,
  height,
  priority = false,
  sizes,
  style,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className={`relative overflow-hidden ${
        fill ? "absolute inset-0 w-full h-full" : ""
      } ${containerClassName}`}
      style={!fill && width && height ? { width, height } : undefined}
    >
      {/* Loading shimmer */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-tr from-[#161120] via-[#24172f] to-[#161120] animate-pulse z-0" />
      )}

      {hasError ? (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#0d0a14] via-[#1a1025] to-[#0d0a14]"
          style={style}
        >
          <div className="w-20 h-20 rounded-full border border-[#d4af37]/30 flex items-center justify-center mb-4">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="w-8 h-8 text-[#d4af37]/50"
            >
              <path
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                fill="currentColor"
              />
            </svg>
          </div>

          <span className="text-[#d4af37]/40 text-xs tracking-[0.3em] uppercase font-light">
            Lakshya
          </span>

          <span className="text-[#f4acb7]/30 text-[10px] tracking-widest mt-1">
            cherished memory
          </span>
        </div>
      ) : (
        <Image
          src={src}
          alt={alt || "Romantic memory"}
          fill={fill}
          width={!fill ? width : undefined}
          height={!fill ? height : undefined}
          priority={priority}
          sizes={
            sizes ||
            "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          }
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`!object-contain object-center transition-all duration-700 ease-out ${
            isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
          } ${className}`}
          style={style}
          {...props}
        />
      )}
    </div>
  );
};