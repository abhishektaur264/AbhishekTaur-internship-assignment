"use client";

import React, { useState } from "react";
import { X, CheckCircle, Calendar, Clock, MapPin, Laptop } from "lucide-react";
import { therapistProfile } from "@/data/profileContent";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    sessionType: "in-person",
    primaryFocus: "anxiety",
    message: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-ivory rounded-3xl p-6 sm:p-8 border border-sand shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={resetAndClose}
          aria-label="Close consultation modal"
          className="absolute top-5 right-5 p-2 rounded-full text-charcoal-muted hover:bg-sand/60 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div className="space-y-6">
            <div className="space-y-1 pr-6">
              <span className="text-[11px] uppercase tracking-widest font-semibold text-terracotta-600">
                15-Minute Free Consultation
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-sage-900 font-normal">
                Connect with Dr. Maya Reynolds
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-muted">
                A relaxed, confidential conversation to discuss your needs and see if we are a good mutual fit.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-1.5">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Jordan Miller"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-sand bg-white text-sm focus:ring-2 focus:ring-sage-600 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jordan@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-sand bg-white text-sm focus:ring-2 focus:ring-sage-600 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(310) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-sand bg-white text-sm focus:ring-2 focus:ring-sage-600 focus:outline-none"
                  />
                </div>
              </div>

              {/* Session Preference */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-1.5">
                  Session Format Preference
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, sessionType: "in-person" })}
                    className={`p-3 rounded-xl border text-left text-xs transition-all flex items-center gap-2 ${
                      formData.sessionType === "in-person"
                        ? "border-sage-700 bg-sage-50 text-sage-900 font-semibold"
                        : "border-sand bg-white text-charcoal-muted"
                    }`}
                  >
                    <MapPin className="w-4 h-4 text-terracotta-600 shrink-0" />
                    <span>In-Person (Santa Monica)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, sessionType: "telehealth" })}
                    className={`p-3 rounded-xl border text-left text-xs transition-all flex items-center gap-2 ${
                      formData.sessionType === "telehealth"
                        ? "border-sage-700 bg-sage-50 text-sage-900 font-semibold"
                        : "border-sand bg-white text-charcoal-muted"
                    }`}
                  >
                    <Laptop className="w-4 h-4 text-sage-600 shrink-0" />
                    <span>Telehealth (California)</span>
                  </button>
                </div>
              </div>

              {/* Primary Focus Area */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-1.5">
                  Primary Area of Support
                </label>
                <select
                  value={formData.primaryFocus}
                  onChange={(e) => setFormData({ ...formData, primaryFocus: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-sand bg-white text-sm focus:ring-2 focus:ring-sage-600 focus:outline-none text-charcoal"
                >
                  <option value="anxiety">Anxiety & Panic Disorders</option>
                  <option value="trauma">Trauma & EMDR Therapy</option>
                  <option value="burnout">Burnout & Perfectionism</option>
                  <option value="general">Stress & High Internal Pressure</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-1.5">
                  Brief Note / Preferred Time of Day (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Share anything you would like Dr. Reynolds to know ahead of the consultation..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2 rounded-xl border border-sand bg-white text-sm focus:ring-2 focus:ring-sage-600 focus:outline-none resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-sage-800 hover:bg-sage-900 transition-all shadow-md"
                >
                  Request 15-Minute Free Consultation
                </button>
              </div>

              <p className="text-[10px] text-center text-charcoal-light">
                Confidential inquiry. Dr. Reynolds typically responds within 24 business hours.
              </p>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-sage-100 text-sage-800 flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl text-sage-900 font-normal">
              Thank You, {formData.name}
            </h3>
            <p className="text-sm text-charcoal-muted max-w-sm mx-auto leading-relaxed">
              Your consultation request has been received. Dr. Maya Reynolds will reach out to <strong>{formData.email}</strong> shortly to confirm your consultation time.
            </p>
            <div className="pt-4">
              <button
                onClick={resetAndClose}
                className="px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-sage-800 hover:bg-sage-900"
              >
                Back to Website
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
