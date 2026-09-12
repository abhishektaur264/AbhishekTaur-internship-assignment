"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, ChevronDown, CheckCircle2 } from "lucide-react";
import { therapistProfile, ServiceItem } from "@/data/profileContent";

interface ServicesGridProps {
  onOpenConsultation: () => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ onOpenConsultation }) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="specialties" className="py-20 md:py-28 bg-ivory-light border-b border-sand/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase font-semibold tracking-widest text-terracotta-600">
            Tailored Psychological Services
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-sage-900 font-normal">
            Our Specialties Include…
          </h2>
          <p className="text-base text-charcoal-muted">
            Evidence-based, depth-oriented therapy designed to help you regain emotional balance, process past burdens, and thrive in daily life.
          </p>
        </div>

        {/* 3-Column Services Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {therapistProfile.services.map((service: ServiceItem) => {
            const isExpanded = expandedId === service.id;

            return (
              <div
                key={service.id}
                className="group bg-white rounded-2xl overflow-hidden border border-sand shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
              >
                <div>
                  {/* Card Image */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-sand">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-block text-[11px] font-semibold uppercase tracking-wider text-sage-900 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full border border-sand shadow-2xs">
                        {service.tag}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-7 space-y-4">
                    <h3 className="font-serif text-2xl text-sage-900 font-normal group-hover:text-sage-700 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-sm text-charcoal-muted leading-relaxed">
                      {service.shortDesc}
                    </p>

                    {/* Expandable Clinical Scope */}
                    {isExpanded && (
                      <div className="pt-3 space-y-3 animate-in fade-in duration-200 text-xs text-charcoal-muted border-t border-sand/60">
                        <p className="leading-relaxed font-normal">{service.fullDesc}</p>
                        <div className="space-y-1.5 pt-1">
                          <p className="font-semibold uppercase tracking-wider text-[10px] text-sage-900">
                            Key Focus Areas:
                          </p>
                          <div className="grid grid-cols-2 gap-1.5">
                            {service.keywords.map((kw) => (
                              <div key={kw} className="flex items-center gap-1.5 text-charcoal">
                                <CheckCircle2 className="w-3 h-3 text-terracotta-600 shrink-0" />
                                <span>{kw}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-7 pt-0 flex items-center justify-between border-t border-sand/40 mt-4">
                  <button
                    onClick={() => toggleExpand(service.id)}
                    className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-charcoal hover:text-sage-800 transition-colors"
                  >
                    <span>{isExpanded ? "Show Less" : "Learn More"}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 ml-1 transition-transform duration-200 ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <button
                    onClick={onOpenConsultation}
                    className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-terracotta-600 hover:text-terracotta-700 transition-colors"
                  >
                    <span>Book Session</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
