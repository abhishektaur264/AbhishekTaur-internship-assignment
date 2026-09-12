"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, ShieldAlert, Heart } from "lucide-react";
import { therapistProfile } from "@/data/profileContent";

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-sage-900 text-ivory pt-16 pb-12 border-t border-sage-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-sage-800">
          
          {/* Col 1: Brand & Practice Bio (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div>
              <h3 className="font-serif text-2xl font-semibold tracking-tight text-ivory">
                Dr. Maya Reynolds, PsyD
              </h3>
              <p className="text-xs uppercase tracking-widest text-terracotta-300 font-medium mt-1">
                Licensed Clinical Psychologist • Santa Monica, CA
              </p>
            </div>
            <p className="text-xs sm:text-sm text-sage-200 leading-relaxed max-w-sm">
              Providing grounded, evidence-based therapy for anxiety, trauma, and burnout. Welcoming high-achieving adults in-person at our Santa Monica sanctuary and via secure telehealth across California.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-sage-300">
              <ShieldAlert className="w-4 h-4 text-terracotta-400 shrink-0" />
              <span>California Board of Psychology Licensed</span>
            </div>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-bold text-terracotta-300">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-sage-200">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Dr. Reynolds
                </a>
              </li>
              <li>
                <a href="#who-we-help" className="hover:text-white transition-colors">
                  Who We Help
                </a>
              </li>
              <li>
                <a href="#specialties" className="hover:text-white transition-colors">
                  Therapy Specialties & Modalities
                </a>
              </li>
              <li>
                <a href="#office" className="hover:text-white transition-colors">
                  Our Santa Monica Office
                </a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Practice Logistics & Contact (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-bold text-terracotta-300">
              Santa Monica Practice
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-sage-200">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-terracotta-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-white">{therapistProfile.address}</p>
                  <p className="text-xs text-sage-300 mt-0.5">
                    Private Suite • In-Person Sessions
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-terracotta-400 shrink-0" />
                <a href={`tel:${therapistProfile.phone}`} className="hover:text-white transition-colors">
                  {therapistProfile.phone}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-terracotta-400 shrink-0" />
                <a href={`mailto:${therapistProfile.email}`} className="hover:text-white transition-colors">
                  {therapistProfile.email}
                </a>
              </div>

              <div className="pt-2 text-[11px] text-sage-300 bg-sage-800/60 p-3 rounded-lg border border-sage-700/60">
                <strong>Telehealth Notice:</strong> Secure, encrypted video sessions available for clients located anywhere within California.
              </div>
            </div>
          </div>

        </div>

        {/* Legal Disclaimer & Copyright */}
        <div className="pt-8 space-y-4 text-center md:text-left text-[11px] text-sage-400">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p>
              &copy; {new Date().getFullYear()} Dr. Maya Reynolds, PsyD. All rights reserved. Fictional Therapist practice website built for Grow My Therapy assignment.
            </p>
            <div className="flex items-center space-x-6 text-[11px]">
              <a href="#contact" className="hover:text-sage-200 transition-colors">
                Privacy Policy
              </a>
              <a href="#contact" className="hover:text-sage-200 transition-colors">
                Terms of Service
              </a>
              <a href="#contact" className="hover:text-sage-200 transition-colors">
                Good Faith Estimate
              </a>
            </div>
          </div>

          <p className="text-[10px] text-sage-400 leading-normal max-w-4xl">
            <strong>Disclaimer:</strong> The information provided on this site is for educational and informational purposes only and does not constitute medical or psychological advice. If you are experiencing an acute mental health crisis, please call 988 or visit your nearest emergency room.
          </p>
        </div>

      </div>
    </footer>
  );
};
