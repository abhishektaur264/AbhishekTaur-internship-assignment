"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { therapistProfile, FaqItem } from "@/data/profileContent";

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-20 md:py-28 bg-ivory-light border-b border-sand/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <span className="text-xs uppercase font-semibold tracking-widest text-terracotta-600">
            Clear Answers & Guidance
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-sage-900 font-normal">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-charcoal-muted max-w-xl mx-auto">
            Everything you need to know about starting therapy with Dr. Maya Reynolds in Santa Monica or via telehealth.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {therapistProfile.faqs.map((faq: FaqItem, idx: number) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-sand overflow-hidden transition-all duration-200 shadow-2xs"
              >
                <button
                  onClick={() => toggleIndex(idx)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 hover:bg-sand/10 transition-colors focus:outline-none focus:ring-2 focus:ring-sage-600 focus:ring-inset"
                >
                  <span className="font-serif text-lg sm:text-xl text-sage-900 font-medium">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border border-sand transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-sage-50 text-sage-800" : "bg-ivory text-charcoal-muted"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-7 pb-6 pt-1 text-sm sm:text-base text-charcoal-muted leading-relaxed border-t border-sand/40 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
