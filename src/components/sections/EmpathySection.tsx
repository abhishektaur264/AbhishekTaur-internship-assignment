"use client";

import React from "react";
import { therapistProfile } from "@/data/profileContent";
import { CheckCircle2 } from "lucide-react";

export const EmpathySection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-ivory-light border-y border-sand/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <span className="text-xs uppercase font-semibold tracking-widest text-terracotta-600">
            A Safe Space to Exhale
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-sage-900 font-normal leading-tight">
            {therapistProfile.empathy.heading}
          </h2>
          <div className="w-16 h-0.5 bg-terracotta-500 mx-auto mt-4" />
        </div>

        {/* 2-Column Empathy Narrative */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 text-charcoal-muted leading-relaxed">
          <div className="space-y-5">
            <p className="text-lg font-serif text-sage-900 leading-snug">
              {therapistProfile.empathy.lead}
            </p>
            <p className="text-base">
              {therapistProfile.empathy.paragraph1}
            </p>
          </div>

          <div className="space-y-6">
            <p className="text-base">
              {therapistProfile.empathy.paragraph2}
            </p>
            
            <div className="bg-sand/40 rounded-2xl p-6 border border-sand-dark/30 space-y-3">
              <h4 className="text-xs uppercase font-bold tracking-wider text-sage-800">
                In therapy, we gently address:
              </h4>
              <ul className="space-y-2 text-sm text-charcoal">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-terracotta-600 shrink-0 mt-0.5" />
                  <span>The internal burden of feeling you always have to hold it all together.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-terracotta-600 shrink-0 mt-0.5" />
                  <span>Physical tension, sleep disruptions, and racing thoughts.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-terracotta-600 shrink-0 mt-0.5" />
                  <span>Lingering past experiences that quietly influence your sense of safety.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
