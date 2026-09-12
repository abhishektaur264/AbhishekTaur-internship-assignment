"use client";

import React from "react";
import { ArrowRight, Compass, Shield, HeartHandshake } from "lucide-react";
import { therapistProfile } from "@/data/profileContent";

interface WhoWeHelpProps {
  onOpenConsultation: () => void;
}

export const WhoWeHelpSection: React.FC<WhoWeHelpProps> = ({ onOpenConsultation }) => {
  const icons = [
    <Compass key="compass" className="w-6 h-6 text-terracotta-600" />,
    <Shield key="shield" className="w-6 h-6 text-sage-600" />,
    <HeartHandshake key="heart" className="w-6 h-6 text-terracotta-600" />,
  ];

  return (
    <section id="who-we-help" className="py-20 md:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase font-semibold tracking-widest text-terracotta-600">
            Dedicated Client Focus
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-sage-900 font-normal">
            Who We Help
          </h2>
          <p className="text-base text-charcoal-muted">
            Specialized psychological care tailored to individuals navigating the unique pressures of fast-paced professional and creative lives.
          </p>
        </div>

        {/* 3-Column Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {therapistProfile.whoWeHelp.map((item, index) => (
            <div
              key={item.title}
              className="group bg-white rounded-2xl p-8 border border-sand shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Decorative top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sage-600 to-terracotta-500 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-ivory flex items-center justify-center border border-sand">
                  {icons[index]}
                </div>
                
                <span className="inline-block text-[11px] font-semibold uppercase tracking-wider text-sage-800 bg-sage-50 px-2.5 py-1 rounded-md">
                  {item.highlight}
                </span>

                <h3 className="font-serif text-2xl text-sage-900 font-normal group-hover:text-sage-700 transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-charcoal-muted leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-sand/50">
                <button
                  onClick={onOpenConsultation}
                  className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-sage-900 group-hover:text-terracotta-600 transition-colors"
                >
                  <span>Inquire for care</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
