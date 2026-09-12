"use client";

import React, { useState } from "react";
import Script from "next/script";
import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { EmpathySection } from "@/components/sections/EmpathySection";
import { WhoWeHelpSection } from "@/components/sections/WhoWeHelpSection";
import { QuoteBanner } from "@/components/sections/QuoteBanner";
import { ExpertisePills } from "@/components/sections/ExpertisePills";
import { ApproachSection } from "@/components/sections/ApproachSection";
import { VisualBreakSection } from "@/components/sections/VisualBreakSection";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { OfficeSection } from "@/components/sections/OfficeSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { Footer } from "@/components/layout/Footer";
import { ConsultationModal } from "@/components/modals/ConsultationModal";
import { therapistProfile } from "@/data/profileContent";

export default function HomePage() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const openConsultation = () => setIsConsultationOpen(true);
  const closeConsultation = () => setIsConsultationOpen(false);

  // Structured Schema.org JSON-LD data for Local SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "PsychologicalClinic",
    "name": "Dr. Maya Reynolds, PsyD - Licensed Clinical Psychologist",
    "image": "https://www.mayareynoldspsyd.com/images/maya-reynolds.png",
    "description":
      "Licensed Clinical Psychologist in Santa Monica, CA specializing in therapy for anxiety, trauma (EMDR), and burnout for high-achieving adults and professionals.",
    "telephone": therapistProfile.phone,
    "email": therapistProfile.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123th Street 45 W",
      "addressLocality": "Santa Monica",
      "addressRegion": "CA",
      "postalCode": "90401",
      "addressCountry": "US",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "34.0195",
      "longitude": "-118.4912",
    },
    "areaServed": [
      { "@type": "City", "name": "Santa Monica" },
      { "@type": "City", "name": "Los Angeles" },
      { "@type": "AdministrativeArea", "name": "California" },
    ],
    "medicalSpecialty": "ClinicalPsychology",
    "availableService": [
      {
        "@type": "MedicalTherapy",
        "name": "Anxiety and Panic Disorders Therapy",
      },
      {
        "@type": "MedicalTherapy",
        "name": "EMDR Trauma Therapy",
      },
      {
        "@type": "MedicalTherapy",
        "name": "Burnout and Perfectionism Counseling",
      },
    ],
    "priceRange": "$$$",
  };

  return (
    <>
      {/* Schema.org Structured Data */}
      <Script
        id="structured-data"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Main Page Layout */}
      <Header onOpenConsultation={openConsultation} />

      <main className="flex-1">
        {/* Section 1: Hero */}
        <HeroSection onOpenConsultation={openConsultation} />

        {/* Section 2: Empathy & Understanding */}
        <EmpathySection />

        {/* Section 3: Who We Help (3-card grid) */}
        <WhoWeHelpSection onOpenConsultation={openConsultation} />

        {/* Section 4: Therapeutic Quote Callout Banner */}
        <QuoteBanner />

        {/* Section 5: Modalities & Expertise Pills */}
        <ExpertisePills />

        {/* Section 6: How We Work / About Dr. Maya Reynolds */}
        <ApproachSection onOpenConsultation={openConsultation} />

        {/* Section 7: Panoramic Visual Break */}
        <VisualBreakSection />

        {/* Section 8: Core Services (3 items with descriptions) */}
        <ServicesGrid onOpenConsultation={openConsultation} />

        {/* Section 9: Custom "Our Office" Section (Rubric Part 3) */}
        <OfficeSection onOpenConsultation={openConsultation} />

        {/* Section 10: FAQs */}
        <FaqSection />

        {/* Section 11: Final Call to Action */}
        <FinalCtaSection onOpenConsultation={openConsultation} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Consultation Modal */}
      <ConsultationModal isOpen={isConsultationOpen} onClose={closeConsultation} />
    </>
  );
}
