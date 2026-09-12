"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, Calendar } from "lucide-react";
import { therapistProfile } from "@/data/profileContent";

interface HeaderProps {
  onOpenConsultation: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Who We Help", href: "#who-we-help" },
    { name: "Specialties", href: "#specialties" },
    { name: "Our Office", href: "#office" },
    { name: "FAQs", href: "#faqs" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-ivory/95 backdrop-blur-md shadow-xs border-b border-sand/60 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Therapist Identity */}
          <Link href="/" className="group flex flex-col">
            <span className="font-serif text-xl sm:text-2xl font-semibold tracking-tight text-sage-900 group-hover:text-sage-700 transition-colors">
              Dr. Maya Reynolds
            </span>
            <span className="text-xs uppercase tracking-widest text-charcoal-light font-medium -mt-0.5">
              PsyD • Licensed Clinical Psychologist
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-charcoal-muted hover:text-sage-800 transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-terracotta-500 hover:after:w-full after:transition-all after:duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTA Button */}
          <div className="hidden sm:flex items-center space-x-4">
            <button
              onClick={onOpenConsultation}
              id="header-consultation-btn"
              className="inline-flex items-center px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-sage-800 hover:bg-sage-900 transition-all shadow-xs hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
            >
              <Calendar className="w-3.5 h-3.5 mr-2" />
              Book a Free Consultation
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 rounded-lg text-sage-900 hover:bg-sand/40 focus:outline-none focus:ring-2 focus:ring-sage-600"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-ivory/98 backdrop-blur-xl border-b border-sand px-6 py-6 shadow-xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-charcoal hover:text-sage-800 py-2 border-b border-sand/40 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full text-center py-3 px-5 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-sage-800 hover:bg-sage-900 shadow-sm"
              >
                Book a Free Consultation
              </button>
              <div className="text-center text-xs text-charcoal-light flex items-center justify-center gap-1.5 pt-2">
                <Phone className="w-3.5 h-3.5 text-terracotta-500" />
                <span>{therapistProfile.phone}</span>
                <span className="mx-1">•</span>
                <span>Santa Monica, CA</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
