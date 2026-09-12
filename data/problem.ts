export type ProblemItem = {
  key: string;
  title: string;
  consequence: string;
  description: string;
};

export const problems: ProblemItem[] = [
  {
    key: "fake-document",
    title: "Fake Document",
    consequence: "Forged identity / entry risk",
    description:
      "Entirely fabricated documents designed to imitate genuine government-issued formats.",
  },
  {
    key: "manipulated-document",
    title: "Manipulated Document",
    consequence: "Hidden alterations",
    description:
      "Genuine documents with altered photographs, text, stamps or signatures that are hard to detect visually.",
  },
  {
    key: "document-person-mismatch",
    title: "Document–Person Mismatch",
    consequence: "Identity fraud",
    description:
      "A genuine document that belongs to someone else, presented by a different individual.",
  },
  {
    key: "multiple-identities",
    title: "Multiple Identities",
    consequence: "Repeated identity misuse",
    description:
      "The same individual holding or using more than one identity across separate documents.",
  },
];

export const operationalConstraints = [
  {
    key: "manual-effort",
    title: "Manual verification effort",
    description:
      "Screening relies heavily on the visual judgement and experience of individual officers.",
  },
  {
    key: "time",
    title: "Time-consuming screening",
    description:
      "Careful manual checks are slow at posts that process a high volume of individuals.",
  },
  {
    key: "consistency",
    title: "Need for consistent evidence",
    description:
      "Decisions should be backed by repeatable, recorded evidence rather than judgement alone.",
  },
  {
    key: "connectivity",
    title: "Low-connectivity environments",
    description:
      "Many border and frontier posts operate with unreliable or absent internet access.",
  },
];
