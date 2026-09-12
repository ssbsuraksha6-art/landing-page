export const workingComponents: string[] = [
  "Document detection",
  "Perspective correction",
  "PP-OCRv5 text extraction",
  "MRZ processing",
  "QR processing",
  "Rule & data validation",
  "SCRFD face detection",
  "ArcFace R50 face verification",
  "Evidence fusion (risk scoring)",
  "Offline-first app workflow",
];

export const developmentComponents: string[] = [
  "DINOv2 document forensics",
  "PatchCore anomaly detection",
  "Full on-device inference optimisation",
];

export const maturityPath = [
  { key: "prototype", title: "Prototype", description: "Core workflow validated end to end." },
  {
    key: "integration",
    title: "Real Model Integration",
    description: "Pretrained detection, OCR and face models wired into the pipeline.",
  },
  {
    key: "validation",
    title: "Real-World Validation",
    description: "Testing against varied documents and field conditions.",
  },
  {
    key: "calibration",
    title: "Threshold Calibration",
    description: "Tuning similarity and risk thresholds against labelled cases.",
  },
  {
    key: "optimisation",
    title: "On-Device Optimisation",
    description: "Compressing and accelerating models for edge hardware.",
  },
  {
    key: "deployment",
    title: "Field Deployment",
    description: "Rollout to screening posts with sync and monitoring in place.",
  },
] as const;
