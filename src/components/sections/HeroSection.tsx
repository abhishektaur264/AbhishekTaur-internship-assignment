"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, ShieldCheck, MapPin, Sparkles } from "lucide-react";
import { therapistProfile } from "@/data/profileContent";

interface HeroSectionProps {
  onOpenConsultation: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-ivory-light via-ivory to-ivory-dark">
      {/* Decorative ambient subtle background gradients */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-sage-100/60 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-terracotta-100/40 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sage-100/80 border border-sage-200/80 text-sage-900 text-xs font-semibold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-sage-600 animate-pulse" />
              <span>{therapistProfile.hero.eyebrow}</span>
            </div>

            {/* SEO Keyword-Rich Primary H1 */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.15] text-sage-900 tracking-tight">
              Therapy for{" "}
              <span className="italic font-serif text-terracotta-600">Anxiety, Trauma</span>, and{" "}
              <span className="italic font-serif text-sage-800">Burnout</span> in Santa Monica
            </h1>

            {/* Warm, Grounded Subtext */}
            <p className="text-base sm:text-lg text-charcoal-muted max-w-2xl leading-relaxed font-normal">
              {therapistProfile.hero.subtitle}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 w-full sm:w-auto">
              <button
                onClick={onOpenConsultation}
                id="hero-book-consultation-btn"
                className="inline-flex items-center justify-center px-7 py-4 rounded-full text-sm font-semibold uppercase tracking-wider text-white bg-sage-800 hover:bg-sage-900 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>{therapistProfile.hero.primaryCta}</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>

              <a
                href="#specialties"
                className="inline-flex items-center justify-center px-6 py-4 rounded-full text-sm font-semibold uppercase tracking-wider text-sage-900 bg-sand/60 hover:bg-sand transition-all border border-sand-dark/40"
              >
                <span>{therapistProfile.hero.secondaryCta}</span>
              </a>
            </div>

            {/* Trust Signals / Practice Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-sand/70 w-full">
              <div className="flex items-center gap-2.5 text-xs text-charcoal-muted">
                <div className="p-1.5 rounded-full bg-sage-100 text-sage-800">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>Santa Monica Office • 123th St 45 W</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-charcoal-muted">
                <div className="p-1.5 rounded-full bg-terracotta-100 text-terracotta-700">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span>Licensed California Psychologist • PsyD</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Sanctuary */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative halo */}
              <div className="absolute -inset-2 rounded-[2.5rem] bg-gradient-to-tr from-sand via-sage-100 to-terracotta-100 opacity-70 blur-xs -z-10" />

              {/* Main arched / rounded image container */}
              <div className="relative rounded-[2.2rem] overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] bg-sand">
                <Image
                  src="/images/hero-sanctuary.jpg"
                  alt="Dr. Maya Reynolds Santa Monica Therapy Sanctuary - calm seating area with natural sunlight"
                  fill
                  priority
                  className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent" />

                {/* Overlay floating badge */}
                <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-lg border border-sand/80 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-sage-600 shrink-0">
                      <Image
                        src="/images/maya-reynolds.png"
                        alt="Dr. Maya Reynolds, PsyD"
                        fill
                        sizes="48px"
                        className="object-cover object-top"
                      />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-charcoal leading-tight">
                        Dr. Maya Reynolds, PsyD
                      </p>
                      <p className="text-[11px] text-charcoal-muted">
                        In-Person & CA Telehealth
                      </p>
                    </div>
                  </div>
                  <span className="inline-flex items-center text-[10px] font-medium text-sage-800 bg-sage-50 px-2 py-1 rounded-full border border-sage-200">
                    <Sparkles className="w-3 h-3 mr-1 text-terracotta-500" />
                    Accepting New Clients
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
