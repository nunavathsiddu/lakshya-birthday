"use client";

import React, { useEffect, useRef } from "react";

export const BackgroundEffects: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Particle system: gentle floating stardust
    const particleCount = Math.min(Math.floor(window.innerWidth / 25), 45);
    const particles: Array<{
      x: number;
      y: number;
      radius: number;
      alpha: number;
      speedY: number;
      speedX: number;
      color: string;
      pulseSpeed: number;
    }> = [];

    const colors = ["#D4AF37", "#F4ACB7", "#FFCAD4", "#E6C280", "#FFFFFF"];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.6 + 0.4,
        alpha: Math.random() * 0.7 + 0.2,
        speedY: -(Math.random() * 0.25 + 0.05),
        speedX: (Math.random() - 0.5) * 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        pulseSpeed: Math.random() * 0.02 + 0.005,
      });
    }

    // Cursor sparks
    const cursorSparks: Array<{
      x: number;
      y: number;
      size: number;
      alpha: number;
      color: string;
      vx: number;
      vy: number;
    }> = [];

    const handleMouseMove = (e: MouseEvent) => {
      // Add a couple stardust sparks
      if (Math.random() > 0.4) {
        cursorSparks.push({
          x: e.clientX,
          y: e.clientY,
          size: Math.random() * 2 + 1,
          alpha: 0.8,
          color: colors[Math.floor(Math.random() * colors.length)],
          vx: (Math.random() - 0.5) * 1.2,
          vy: (Math.random() - 0.5) * 1.2 - 0.4,
        });
        if (cursorSparks.length > 25) {
          cursorSparks.shift();
        }
      }
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    let t = 0;
    const render = () => {
      t += 0.01;
      ctx.clearRect(0, 0, width, height);

      // Render floating stardust
      particles.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX;
        p.alpha = 0.3 + 0.4 * Math.sin(t * p.pulseSpeed * 100);

        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0.1, Math.min(1, p.alpha));
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.restore();
      });

      // Render cursor sparks
      for (let i = cursorSparks.length - 1; i >= 0; i--) {
        const s = cursorSparks[i];
        s.x += s.vx;
        s.y += s.vy;
        s.alpha -= 0.025;
        s.size *= 0.96;

        if (s.alpha <= 0) {
          cursorSparks.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fillStyle = s.color;
        ctx.globalAlpha = s.alpha;
        ctx.shadowBlur = 10;
        ctx.shadowColor = s.color;
        ctx.fill();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* 35mm film grain overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-30 film-grain"
        aria-hidden="true"
      />

      {/* Ambient stardust canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-10 opacity-70"
        aria-hidden="true"
      />

      {/* Atmospheric radial glowing gradients */}
      <div
        className="fixed top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-[#721124]/10 blur-[140px] pointer-events-none z-0"
        aria-hidden="true"
      />
      <div
        className="fixed bottom-1/4 right-1/4 w-[700px] h-[700px] rounded-full bg-[#D4AF37]/5 blur-[160px] pointer-events-none z-0"
        aria-hidden="true"
      />
      <div
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#3d0814]/10 blur-[180px] pointer-events-none z-0"
        aria-hidden="true"
      />
    </>
  );
};
