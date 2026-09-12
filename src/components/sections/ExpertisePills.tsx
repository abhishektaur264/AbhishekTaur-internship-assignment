"use client";

import React from "react";
import { therapistProfile } from "@/data/profileContent";
import { Sparkles } from "lucide-react";

export const ExpertisePills: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-ivory-light border-b border-sand/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        <div className="space-y-2">
          <span className="text-xs uppercase font-semibold tracking-widest text-terracotta-600">
            Integrative Clinical Modalities
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-sage-900 font-normal">
            Our Areas of Expertise
          </h2>
        </div>

        {/* Tag / Pill Cloud */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-4xl mx-auto">
          {therapistProfile.modalities.map((item) => (
            <div
              key={item}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-sand shadow-2xs hover:border-terracotta-400 hover:shadow-xs transition-all text-xs sm:text-sm font-medium text-charcoal hover:text-sage-900 cursor-default"
            >
              <Sparkles className="w-3.5 h-3.5 text-terracotta-500" />
              <span>{item}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
