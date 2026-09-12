export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  tag: string;
  keywords: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const therapistProfile = {
  name: "Dr. Maya Reynolds, PsyD",
  title: "Licensed Clinical Psychologist",
  location: "Santa Monica, California",
  address: "123th Street 45 W, Santa Monica, CA 90401",
  telehealthScope: "Available securely across all of California",
  phone: "(310) 555-0194",
  email: "care@mayareynoldspsyd.com",
  
  hero: {
    eyebrow: "IN-PERSON IN SANTA MONICA & SECURE TELEHEALTH ACROSS CALIFORNIA",
    title: "Therapy for Anxiety, Trauma, and Burnout in Santa Monica",
    subtitle:
      "A warm, collaborative, and grounded therapeutic space for thoughtful, high-achieving adults who feel functional on the outside but quietly exhausted, overwhelmed, or stuck in overthinking.",
    primaryCta: "Book a Free Consultation",
    secondaryCta: "Explore Specialties",
  },

  empathy: {
    heading: "You don't have to carry the quiet weight of overthinking alone.",
    lead:
      "Many of the people I work with are high-achieving, thoughtful, and deeply self-aware. Yet beneath the surface, they're exhausted from constantly bracing for what might go wrong.",
    paragraph1:
      "Clients frequently come to me feeling 'functional' on the outside while quietly battling persistent worry, physical tension, interrupted sleep, or an internal pressure to keep everything together. Others are navigating the lingering weight of earlier life experiences that continue to challenge their relationships, self-confidence, or sense of safety.",
    paragraph2:
      "First and foremost, what you are experiencing is real, valid, and deserving of dedicated support. Together, we slow down the pace, listen to what your body and mind are signaling, and create sustainable ways of living and working that feel authentically grounded.",
  },

  whoWeHelp: [
    {
      title: "High-Achieving Adults",
      desc: "Professionals, entrepreneurs, and creatives who seem capable and composed outwardly, but internally struggle with exhaustion, perfectionism, and severe overthinking.",
      highlight: "Overcoming Internal Pressure",
    },
    {
      title: "Trauma & EMDR Recovery",
      desc: "Individuals navigating single-incident trauma or complex, long-standing childhood and relational patterns that continue to disrupt their sense of safety in daily life.",
      highlight: "Grounded Nervous System Safety",
    },
    {
      title: "Burnout & Chronic Stress",
      desc: "Those who have spent years pushing through chronic tension and stress, now seeking a restorative space to reconnect with themselves and establish healthy boundaries.",
      highlight: "Sustainable Renewal",
    },
  ],

  pullQuote: {
    quote:
      "Therapy works best when you feel respected, understood, and actively involved in the process. My goal is not just symptom relief, but cultivating deep insight, resilience, and a grounded relationship with yourself over time.",
    author: "Dr. Maya Reynolds, PsyD",
    role: "Licensed Clinical Psychologist • Santa Monica, CA",
  },

  modalities: [
    "Cognitive Behavioral Therapy (CBT)",
    "EMDR Therapy",
    "Mindfulness-Based Practices",
    "Body-Oriented / Somatic Techniques",
    "Trauma-Informed Care",
    "Relational Insight",
    "Paced Nervous System Regulation",
    "Stress & Burnout Recovery",
  ],

  about: {
    eyebrow: "ABOUT DR. MAYA REYNOLDS",
    heading: "A grounded, depth-oriented approach combining practical tools with meaningful insight.",
    bio1:
      "I’m a licensed clinical psychologist based in Santa Monica, California, offering therapy for adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences. Sessions are structured enough to feel supportive and purposeful, while always leaving ample space for reflection, depth, and genuine collaboration.",
    bio2:
      "I integrate evidence-based methods—such as Cognitive Behavioral Therapy (CBT), EMDR, mindfulness, and somatic body-oriented techniques—to help you understand both the emotional and physiological sides of what you are experiencing. My trauma approach is paced carefully, emphasizing stability and practical regulation you can carry into your daily life.",
    bio3:
      "Having spent years supporting professionals and creatives in fast-paced environments, I understand how easily chronic stress disconnects us from what matters most. Therapy is a welcoming space to slow down, rediscover your footing, and cultivate lasting resilience.",
    credentials: [
      "PsyD in Clinical Psychology",
      "Licensed Clinical Psychologist (California)",
      "EMDR Trained Practitioner",
      "Integrative CBT & Somatic Specialist",
    ],
  },

  services: [
    {
      id: "anxiety-panic",
      title: "Anxiety & Panic Disorders",
      tag: "Regulate & Restore",
      shortDesc:
        "Understand the physiological and emotional roots of chronic worry, physical tension, panic sensations, and sleeplessness with integrative CBT and somatic tools.",
      fullDesc:
        "Quiet the relentless cycle of overthinking. We focus on identifying triggers, regulating your autonomic nervous system, and shifting cognitive thought patterns so you feel safe and present in your body.",
      image: "/images/service-anxiety.jpg",
      keywords: ["Panic Attacks", "Constant Worry", "Sleep Disruption", "Somatic Calming"],
    },
    {
      id: "trauma-emdr",
      title: "Trauma & EMDR Therapy",
      tag: "Paced Healing",
      shortDesc:
        "Carefully paced reprocessing for single-incident trauma and complex, long-standing developmental or relational experiences that affect your sense of safety.",
      fullDesc:
        "Trauma work is anchored in safety and stabilization first. Using EMDR (Eye Movement Desensitization and Reprocessing), we help your brain reprocess distressing memories so past experiences stop dictating your present.",
      image: "/images/service-trauma.jpg",
      keywords: ["EMDR Reprocessing", "Single-Event Trauma", "Relational Patterns", "Emotional Safety"],
    },
    {
      id: "burnout-perfectionism",
      title: "Burnout & Perfectionism",
      tag: "Sustainable Living",
      shortDesc:
        "Support for entrepreneurs, creatives, and high-achieving professionals carrying excessive internal pressure and disconnecting from their vitality.",
      fullDesc:
        "When years of pushing through stress leave you feeling depleted and disconnected from yourself, therapy offers a space to slow down, dismantle perfectionistic expectations, and rebuild sustainable life rhythms.",
      image: "/images/service-burnout.jpg",
      keywords: ["High Internal Pressure", "Executive Exhaustion", "Boundary Restoration", "Self-Connection"],
    },
  ],

  office: {
    heading: "A Calm Space for Healing",
    eyebrow: "OUR SANTA MONICA PRACTICE",
    description:
      "My Santa Monica office is a quiet, private sanctuary intentionally designed to feel calm, grounding, and restorative. Filled with natural coastal light and organized in a comfortable, uncluttered environment, clients frequently share that the space itself helps them feel more at ease the moment they walk through the door.",
    address: "123th Street 45 W, Santa Monica, CA 90401",
    features: [
      {
        title: "Quiet, Confidential Sanctuary",
        desc: "Strictly private, acoustically isolated environment where you can speak with complete vulnerability and peace of mind.",
      },
      {
        title: "Grounding Natural Light",
        desc: "Sunlit therapy room featuring comfortable natural linen furnishings, organic greenery, and serene architectural simplicity.",
      },
      {
        title: "Flexible In-Person & Telehealth",
        desc: "Conveniently located in Santa Monica for in-person sessions, with secure telehealth options available throughout California.",
      },
    ],
    images: [
      {
        src: "/images/office-1.jpeg",
        alt: "Dr. Maya Reynolds' Santa Monica therapy office with comfortable seating and natural lighting",
        caption: "Main Therapy Seating Corner — Santa Monica",
      },
      {
        src: "/images/office-2.jpeg",
        alt: "Spacious, uncluttered counseling room with warm daylight and open library shelving",
        caption: "Calming Library & Reflection Area",
      },
    ],
  },

  faqs: [
    {
      question: "What can I expect in an initial consultation?",
      answer:
        "Our initial free 15-minute consultation is an opportunity to connect, discuss what brings you to therapy, and explore how my approach aligns with your goals. It is a no-pressure conversation to ensure we are a genuine mutual fit before beginning our work together.",
    },
    {
      question: "Do you offer in-person sessions, virtual therapy, or both?",
      answer:
        "I offer both in-person therapy at my private office in Santa Monica, California (123th Street 45 W), as well as secure, encrypted telehealth sessions for clients residing anywhere across the state of California.",
    },
    {
      question: "What therapeutic modalities do you utilize in sessions?",
      answer:
        "I take an integrative, evidence-based approach combining Cognitive Behavioral Therapy (CBT), EMDR (Eye Movement Desensitization and Reprocessing), mindfulness-based practices, and body-oriented somatic techniques. Every treatment plan is tailored to your unique history and nervous system needs.",
    },
    {
      question: "How do you approach trauma and EMDR work?",
      answer:
        "Trauma work is never rushed. We begin with thorough stabilization, safety-building, and nervous system regulation tools so that you feel fully supported before any reprocessing begins. EMDR helps rework how painful memories are stored in the brain without retraumatizing you.",
    },
    {
      question: "Who is your practice best suited for?",
      answer:
        "I primarily work with high-achieving adults, professionals, creatives, and entrepreneurs who are thoughtful and self-aware, but struggling internally with anxiety, chronic overthinking, high internal pressure, or unresolved past experiences.",
    },
  ],

  finalCta: {
    eyebrow: "TAKE THE FIRST STEP",
    heading: "Find a therapist who is the right fit for you.",
    description:
      "Beginning therapy is a courageous decision. Whether you are looking for relief from chronic worry or seeking a deeper, transformative understanding of yourself, I invite you to reach out.",
    buttonText: "Book a Free Consultation",
    subtext: "Sessions available in Santa Monica, CA & via secure Telehealth statewide.",
  },
};
