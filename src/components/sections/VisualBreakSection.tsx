"use client";

import React from "react";
import Image from "next/image";

export const VisualBreakSection: React.FC = () => {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      {/* Background Image with Overlay */}
      <Image
        src="/images/coastal-banner.jpg"
        alt="Santa Monica coastal panorama at golden hour"
        fill
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-charcoal/50 backdrop-blur-[1px]" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        <span className="inline-block text-xs uppercase font-semibold tracking-widest text-terracotta-200 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20">
          The Therapeutic Journey
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-normal leading-tight">
          Honoring where you’ve been & helping shape where you’re headed.
        </h2>
        <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto font-light">
          A dedicated sanctuary in Santa Monica to slow down, process the past safely, and rediscover what a sustainable, fulfilling life looks like for you.
        </p>
      </div>
    </section>
  );
};
