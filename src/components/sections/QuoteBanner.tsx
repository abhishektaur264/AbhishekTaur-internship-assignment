"use client";

import React from "react";
import { therapistProfile } from "@/data/profileContent";
import { Quote } from "lucide-react";

export const QuoteBanner: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-sage-900 text-ivory relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-sage-800/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-terracotta-900/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        <div className="inline-flex p-3 rounded-full bg-sage-800/80 border border-sage-700/60 text-terracotta-400">
          <Quote className="w-6 h-6" />
        </div>

        <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-4.5xl leading-relaxed text-ivory font-normal">
          &ldquo;{therapistProfile.pullQuote.quote}&rdquo;
        </blockquote>

        <div className="space-y-1">
          <p className="font-serif text-lg font-medium text-terracotta-300">
            {therapistProfile.pullQuote.author}
          </p>
          <p className="text-xs uppercase tracking-widest text-sage-300">
            {therapistProfile.pullQuote.role}
          </p>
        </div>
      </div>
    </section>
  );
};
