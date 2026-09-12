"use client";

import React from "react";
import { ArrowRight, Phone, Mail, Clock } from "lucide-react";
import { therapistProfile } from "@/data/profileContent";

interface FinalCtaProps {
  onOpenConsultation: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaProps> = ({ onOpenConsultation }) => {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-ivory to-ivory-dark relative overflow-hidden">
      {/* Background Decorative Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-sage-200/40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] rounded-full border border-terracotta-200/30 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        
        <div className="space-y-3">
          <span className="text-xs uppercase font-semibold tracking-widest text-terracotta-600">
            {therapistProfile.finalCta.eyebrow}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-5.5xl text-sage-900 font-normal leading-tight">
            {therapistProfile.finalCta.heading}
          </h2>
          <p className="text-base sm:text-lg text-charcoal-muted max-w-2xl mx-auto leading-relaxed">
            {therapistProfile.finalCta.description}
          </p>
        </div>

        {/* CTA Button */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenConsultation}
            id="final-cta-consultation-btn"
            className="inline-flex items-center px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-wider text-white bg-sage-800 hover:bg-sage-900 transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>{therapistProfile.finalCta.buttonText}</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>

        <p className="text-xs uppercase tracking-widest text-charcoal-light font-medium">
          {therapistProfile.finalCta.subtext}
        </p>

        {/* Quick Contact Micro-Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-10 border-t border-sand max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-xs text-charcoal-muted">
            <Phone className="w-4 h-4 text-terracotta-600" />
            <span>{therapistProfile.phone}</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-xs text-charcoal-muted">
            <Mail className="w-4 h-4 text-sage-600" />
            <span>{therapistProfile.email}</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-xs text-charcoal-muted">
            <Clock className="w-4 h-4 text-terracotta-600" />
            <span>Mon–Fri Sessions</span>
          </div>
        </div>

      </div>
    </section>
  );
};
