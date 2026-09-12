export type FlowStep = {
  id: string;
  label: string;
  sublabel?: string;
  development?: boolean;
};

// ---------- Document Verification ----------
export const documentMainFlow: FlowStep[] = [
  { id: "image", label: "Document Image" },
  { id: "detect", label: "YOLOv12", sublabel: "Document detection" },
  { id: "rotate", label: "Rotation" },
  { id: "crop", label: "Cropping" },
  { id: "perspective", label: "Perspective Correction" },
  { id: "ocr", label: "PP-OCRv5", sublabel: "Text extraction" },
  { id: "json", label: "Structured JSON" },
];

export const mrzBranch: FlowStep[] = [
  { id: "mrz-scan", label: "MRZ" },
  { id: "mrz-decode", label: "Decode" },
  { id: "mrz-json", label: "JSON" },
  { id: "mrz-cross", label: "Cross-check" },
];

export const qrBranch: FlowStep[] = [
  { id: "qr-scan", label: "QR" },
  { id: "qr-scan2", label: "Scan" },
  { id: "qr-decode", label: "Decode" },
  { id: "qr-json", label: "JSON" },
  { id: "qr-cross", label: "Cross-check" },
];

// ---------- Face Verification ----------
export const faceFlowLeft: FlowStep[] = [
  { id: "doc-portrait", label: "Document Portrait" },
  { id: "doc-embed", label: "Embedding" },
];

export const faceFlowRight: FlowStep[] = [
  { id: "live-photo", label: "Live Photograph" },
  { id: "live-embed", label: "Embedding" },
];

export const faceFlowSteps: FlowStep[] = [
  { id: "detect", label: "Face Detection", sublabel: "SCRFD" },
  { id: "align", label: "5-Point Alignment" },
  { id: "resize", label: "112 × 112" },
  { id: "embed", label: "ArcFace R50" },
  { id: "vector", label: "512-D Normalised Embedding" },
];

export const faceFlowTail: FlowStep[] = [
  { id: "similarity", label: "Cosine Similarity" },
  { id: "threshold", label: "Threshold" },
  { id: "outcome", label: "Match / No Match" },
];

// ---------- Document Forensics (DINOv2) ----------
export const forensicsFlow: FlowStep[] = [
  { id: "corrected", label: "Corrected Document" },
  { id: "dinov2", label: "DINOv2 ViT-B/14" },
  { id: "classify", label: "Forensic Classification" },
  { id: "type", label: "Tamper Type" },
  { id: "region", label: "Suspicious Region" },
];

export const forensicsExamples = [
  "Photo replacement",
  "Text manipulation",
  "Copy-paste / splicing",
  "Stamp / signature manipulation",
];

// ---------- Anomaly Detection (PatchCore) ----------
export const anomalyComparison = [
  { id: "known", label: "Known Tampering", target: "DINOv2" },
  { id: "unknown", label: "Unknown Anomaly", target: "PatchCore" },
];

// ---------- Evidence Fusion ----------
export const fusionInputs = [
  { id: "detection", label: "Document Detection", status: "live" as const },
  { id: "ocr", label: "OCR / MRZ", status: "live" as const },
  { id: "validation", label: "Validation", status: "live" as const },
  { id: "face", label: "Face Verification", status: "live" as const },
  { id: "dinov2", label: "DINOv2", status: "development" as const },
  { id: "patchcore", label: "PatchCore", status: "development" as const },
];

export const riskBands = [
  { id: "low", label: "Low", color: "low" as const, description: "Evidence consistent; no significant concerns raised." },
  { id: "review", label: "Review", color: "review" as const, description: "Some evidence is inconclusive or conflicting; officer review recommended." },
  { id: "high", label: "High", color: "high" as const, description: "Multiple signals indicate likely fraud or tampering." },
];

// ---------- End-to-End Data Flow ----------
export const dataFlowSteps: FlowStep[] = [
  { id: "capture", label: "Capture", sublabel: "Document image" },
  { id: "detect-correct", label: "Detection / Correction" },
  { id: "read", label: "OCR / MRZ / QR" },
  { id: "structured", label: "Structured Evidence" },
  { id: "validate", label: "Validation" },
  { id: "face-evidence", label: "Face Embedding + Similarity" },
  { id: "forensic-evidence", label: "Forensic Evidence", development: true },
  { id: "anomaly-evidence", label: "Anomaly Evidence", development: true },
  { id: "fusion", label: "Risk Fusion" },
  { id: "package", label: "Evidence Package" },
  { id: "decision", label: "Officer Decision" },
  { id: "record", label: "Case Record" },
];

// ---------- Deployment ----------
export const offlineStack: FlowStep[] = [
  { id: "camera", label: "Camera" },
  { id: "edge", label: "Edge Device" },
  { id: "local-ai", label: "Local AI Pipeline" },
  { id: "local-db", label: "Local Case Database" },
  { id: "officer", label: "Officer Decision" },
];

export const onlineStack: FlowStep[] = [
  { id: "internet", label: "Internet Available" },
  { id: "sync", label: "Sync / Update" },
  { id: "central", label: "Central System / Analytics" },
];

export const offlineCapabilities = [
  "Screening",
  "AI inference",
  "Validation",
  "Evidence generation",
  "Case storage",
];

export const onlineCapabilities = [
  "Synchronisation",
  "Model / rule updates",
  "Central analytics",
  "Investigation workflows",
];
