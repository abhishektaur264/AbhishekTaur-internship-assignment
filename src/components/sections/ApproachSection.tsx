"use client";

import React from "react";
import Image from "next/image";
import { therapistProfile } from "@/data/profileContent";
import { CheckCircle2, ArrowRight } from "lucide-react";

interface ApproachProps {
  onOpenConsultation: () => void;
}

export const ApproachSection: React.FC<ApproachProps> = ({ onOpenConsultation }) => {
  return (
    <section id="about" className="py-20 md:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Authentic Headshot & Credentials */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Subtle background frame */}
              <div className="absolute -inset-3 bg-sage-200/50 rounded-3xl -rotate-1 -z-10" />

              {/* Main Photo Frame */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white aspect-[3/4] bg-sand">
                <Image
                  src="/images/maya-reynolds.png"
                  alt="Dr. Maya Reynolds, PsyD - Licensed Clinical Psychologist in Santa Monica"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                />
              </div>

              {/* Verified Credentials Box */}
              <div className="mt-6 bg-white rounded-xl p-5 border border-sand shadow-sm space-y-2.5">
                <h4 className="text-xs uppercase font-bold tracking-wider text-sage-900">
                  Clinical Credentials & Specializations
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-charcoal-muted">
                  {therapistProfile.about.credentials.map((cred) => (
                    <div key={cred} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sage-600 shrink-0" />
                      <span>{cred}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Narrative & Modalities */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            
            <div className="space-y-2">
              <span className="text-xs uppercase font-semibold tracking-widest text-terracotta-600">
                {therapistProfile.about.eyebrow}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-4.5xl text-sage-900 font-normal leading-tight">
                {therapistProfile.about.heading}
              </h2>
            </div>

            <div className="space-y-4 text-charcoal-muted leading-relaxed text-base sm:text-lg font-normal">
              <p>{therapistProfile.about.bio1}</p>
              <p>{therapistProfile.about.bio2}</p>
              <p>{therapistProfile.about.bio3}</p>
            </div>

            {/* Approach Highlights */}
            <div className="pt-2">
              <div className="p-5 rounded-xl bg-sand/30 border border-sand-dark/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase font-bold tracking-wider text-sage-900">
                    Grounded • Collaborative • Structured
                  </p>
                  <p className="text-xs text-charcoal-muted mt-0.5">
                    Combining evidence-based CBT & EMDR with body-oriented somatic pacing.
                  </p>
                </div>
                <button
                  onClick={onOpenConsultation}
                  className="inline-flex items-center px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-sage-800 hover:bg-sage-900 transition-all shadow-xs shrink-0"
                >
                  <span>Connect with Dr. Reynolds</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
