"use client";

import React from "react";
import Image from "next/image";
import { MapPin, SunMedium, Shield, Laptop } from "lucide-react";
import { therapistProfile } from "@/data/profileContent";

interface OfficeSectionProps {
  onOpenConsultation: () => void;
}

export const OfficeSection: React.FC<OfficeSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section id="office" className="py-20 md:py-28 bg-ivory relative overflow-hidden">
      {/* Decorative ambient subtle background gradients */}
      <div className="absolute top-1/2 left-0 w-72 h-72 rounded-full bg-sand/50 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-sage-100/40 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase font-semibold tracking-widest text-terracotta-600">
            {therapistProfile.office.eyebrow}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-sage-900 font-normal">
            {therapistProfile.office.heading}
          </h2>
          <p className="text-base text-charcoal-muted leading-relaxed max-w-2xl mx-auto">
            {therapistProfile.office.description}
          </p>
        </div>

        {/* Real Office Images Grid (Taken directly from Dr. Maya Reynolds' Profile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {therapistProfile.office.images.map((img, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl overflow-hidden shadow-lg border border-sand bg-white flex flex-col"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-sand">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs uppercase font-semibold tracking-wider text-terracotta-200">
                    Santa Monica Practice
                  </p>
                  <p className="text-sm font-serif font-medium">{img.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Supporting Environmental & Practice Details */}
        <div className="bg-white rounded-2xl p-8 sm:p-10 border border-sand shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-sand">
            
            {/* Feature 1: Privacy & Quiet */}
            <div className="space-y-3 pt-6 md:pt-0 md:px-4 first:pt-0 first:px-0">
              <div className="w-10 h-10 rounded-lg bg-sage-50 text-sage-800 flex items-center justify-center border border-sage-200/60">
                <Shield className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-xl text-sage-900 font-normal">
                Quiet & Confidential
              </h4>
              <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                Designed to be a private, peaceful sanctuary where you can speak candidly without distractions or rushed transitions.
              </p>
            </div>

            {/* Feature 2: Natural Light & Uncluttered Space */}
            <div className="space-y-3 pt-6 md:pt-0 md:px-6">
              <div className="w-10 h-10 rounded-lg bg-terracotta-50 text-terracotta-700 flex items-center justify-center border border-terracotta-200/60">
                <SunMedium className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-xl text-sage-900 font-normal">
                Natural Light & Grounding
              </h4>
              <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                Soft California daylight, clean lines, and an uncluttered atmosphere help your nervous system decompress the moment you arrive.
              </p>
            </div>

            {/* Feature 3: In-Person + Telehealth Availability */}
            <div className="space-y-3 pt-6 md:pt-0 md:px-6">
              <div className="w-10 h-10 rounded-lg bg-sage-50 text-sage-800 flex items-center justify-center border border-sage-200/60">
                <Laptop className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-xl text-sage-900 font-normal">
                In-Person & Telehealth
              </h4>
              <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                Meet in person at 123th Street 45 W in Santa Monica, or connect via secure, HIPAA-compliant video from anywhere in California.
              </p>
            </div>

          </div>

          {/* Location Callout Banner */}
          <div className="mt-8 pt-8 border-t border-sand flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-xs sm:text-sm text-charcoal">
              <MapPin className="w-4 h-4 text-terracotta-600 shrink-0" />
              <span>
                <strong>Office Address:</strong> {therapistProfile.office.address}
              </span>
            </div>
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-sage-800 hover:bg-sage-900 transition-all shadow-xs"
            >
              Schedule In-Person or Virtual
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
