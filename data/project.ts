export const project = {
  ministry: "Government of India",
  department: "Ministry of Home Affairs",
  force: "Sashastra Seema Bal (SSB)",
  name: "SSB Suraksha",
  tagline: "AI-Based Fake Identity & Document Screening System",
  event: "Smart India Hackathon 2026",
  problemStatementId: "SIH26188",
  heroHeadline: "SSB Suraksha",
  heroSub:
    "AI-powered identity & document screening for faster, safer and evidence-driven verification.",
  heroStatement:
    "An offline-first screening system that helps SSB officers detect suspicious documents, verify identity, and make faster evidence-based decisions.",
  ctaPrimary: "Explore the System",
  ctaSecondary: "View Architecture",
  disclaimer:
    "Developed as a solution to problem statement SIH26188, issued by the Ministry of Home Affairs for Smart India Hackathon 2026. This is an independent hackathon submission and does not imply endorsement by the Government of India, the Ministry of Home Affairs, or the Sashastra Seema Bal.",
} as const;

export const principles = [
  {
    key: "offline",
    title: "Offline-First",
    description: "Core screening runs without dependency on internet connectivity.",
  },
  {
    key: "fast",
    title: "Fast",
    description: "Screens a document and face in seconds, not minutes.",
  },
  {
    key: "evidence",
    title: "Evidence-Driven",
    description: "Every decision is backed by visible, traceable evidence.",
  },
  {
    key: "modular",
    title: "Modular",
    description: "Each AI component can be upgraded independently.",
  },
  {
    key: "officer",
    title: "Officer-in-the-Loop",
    description: "The system assists judgment; it does not replace it.",
  },
] as const;
