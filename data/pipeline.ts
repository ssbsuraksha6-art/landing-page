export type StageStatus = "live" | "development";

export type SystemStage = {
  id: string;
  index: number;
  title: string;
  short: string;
  detail: string;
  status: StageStatus;
};

export const systemStages: SystemStage[] = [
  {
    id: "capture",
    index: 1,
    title: "Document Capture",
    short: "Officer captures the document image (and live photograph) on-device.",
    detail:
      "The officer captures a photograph of the identity document, and where required, a live photograph of the individual, directly on the screening device. No specialised scanner hardware is required.",
    status: "live",
  },
  {
    id: "detection",
    index: 2,
    title: "Document Detection",
    short: "Locates the document boundary within the captured frame.",
    detail:
      "A YOLOv12-based detector locates the document within the frame and isolates it from background clutter, regardless of orientation.",
    status: "live",
  },
  {
    id: "correction",
    index: 3,
    title: "Perspective Correction",
    short: "Straightens rotation and skew for a clean, front-facing crop.",
    detail:
      "The detected document is rotated, cropped and perspective-corrected into a clean, front-facing rectangular image suitable for reading.",
    status: "live",
  },
  {
    id: "ocr",
    index: 4,
    title: "OCR + MRZ / QR",
    short: "Reads printed text, and decodes MRZ / QR where present.",
    detail:
      "PP-OCRv5 extracts printed fields into structured data. Where present, the Machine-Readable Zone (MRZ) and QR code are independently decoded as additional machine-readable evidence.",
    status: "live",
  },
  {
    id: "validation",
    index: 5,
    title: "Rule & Data Validation",
    short: "Cross-checks OCR, MRZ and QR fields for internal consistency.",
    detail:
      "Deterministic rules validate field formats, checksums and cross-source consistency between OCR, MRZ and QR data, flagging mismatches.",
    status: "live",
  },
  {
    id: "face",
    index: 6,
    title: "Face Verification",
    short: "Confirms the document portrait matches the live photograph.",
    detail:
      "The document portrait and a live photograph are compared using SCRFD detection and ArcFace R50 embeddings to produce a 1:1 similarity score.",
    status: "live",
  },
  {
    id: "forensics",
    index: 7,
    title: "Document Forensics",
    short: "Detects known manipulation types and localises the region.",
    detail:
      "A DINOv2 ViT-B/14 based forensic classifier is planned to identify known manipulation types such as photo replacement or text tampering, and localise the suspicious region.",
    status: "development",
  },
  {
    id: "anomaly",
    index: 8,
    title: "Unknown Anomaly Detection",
    short: "Flags visual irregularities that do not match known patterns.",
    detail:
      "A PatchCore-based anomaly detector is planned to flag documents that deviate from expected visual patterns, even for manipulation types not seen during training.",
    status: "development",
  },
  {
    id: "fusion",
    index: 9,
    title: "Evidence Fusion / Risk",
    short: "Combines every evidence signal into a single, explainable risk score.",
    detail:
      "A LightGBM fusion model combines detection, OCR/validation, face similarity, and forensic/anomaly evidence into a single risk score with visible contributing factors.",
    status: "live",
  },
  {
    id: "decision",
    index: 10,
    title: "Officer Decision",
    short: "The SSB officer reviews evidence and makes the final call.",
    detail:
      "The officer reviews the risk score and its underlying evidence, then makes the final operational decision. The system supports judgement; it does not replace it.",
    status: "live",
  },
];
