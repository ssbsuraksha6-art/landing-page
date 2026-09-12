export type DiagramSpec = {
  id: string;
  label: string;
  title: string;
  description: string;
};

export const diagramSpecs: DiagramSpec[] = [
  {
    id: "overall",
    label: "01 — System",
    title: "Overall Architecture",
    description:
      "The complete SSB Suraksha pipeline from capture to officer decision, spanning all AI components.",
  },
  {
    id: "document",
    label: "02 — Document",
    title: "Document Verification Architecture",
    description:
      "Detection, correction and OCR pipeline that converts a document photograph into structured data.",
  },
  {
    id: "ocr-mrz-qr",
    label: "03 — OCR",
    title: "OCR / MRZ / QR Architecture",
    description:
      "How printed text, machine-readable zone and QR payloads are extracted and cross-validated.",
  },
  {
    id: "face",
    label: "04 — Face",
    title: "Face Verification Architecture",
    description:
      "Detection, alignment and embedding pipeline used to compare a document portrait against a live photograph.",
  },
  {
    id: "dinov2",
    label: "05 — Forensics",
    title: "DINOv2 Forensics Architecture",
    description:
      "Planned tamper-classification and localisation pipeline for known manipulation types.",
  },
  {
    id: "patchcore",
    label: "06 — Anomaly",
    title: "PatchCore Anomaly Architecture",
    description: "Planned unsupervised anomaly-detection pipeline for unseen manipulation types.",
  },
  {
    id: "fusion",
    label: "07 — Fusion",
    title: "Risk Fusion Architecture",
    description:
      "How independent evidence signals are combined into a single, explainable risk score.",
  },
  {
    id: "dataflow",
    label: "08 — Data Flow",
    title: "End-to-End Data Flow",
    description: "The complete journey of a single screening case from capture to case record.",
  },
  {
    id: "deployment",
    label: "09 — Deployment",
    title: "Offline / Online Deployment Architecture",
    description:
      "The target on-device deployment topology, and how it synchronises with central systems.",
  },
];
