export type TechGroup = {
  id: string;
  title: string;
  items: string[];
};

export const techStack: TechGroup[] = [
  {
    id: "frontend",
    title: "Frontend",
    items: ["React Native", "TypeScript"],
  },
  {
    id: "backend",
    title: "Backend / AI",
    items: ["Python", "ONNX Runtime", "PaddleOCR", "PyTorch"],
  },
  {
    id: "models",
    title: "Models",
    items: ["YOLOv12", "PP-OCRv5", "SCRFD", "ArcFace R50", "DINOv2", "PatchCore", "LightGBM"],
  },
  {
    id: "storage",
    title: "Storage",
    items: ["Local on-device database", "Offline sync queue"],
  },
  {
    id: "deployment",
    title: "Deployment",
    items: ["Edge / Android", "Local inference", "Online synchronisation"],
  },
];

export type ModelInfo = {
  id: string;
  name: string;
  role: string;
  status: "live" | "development";
};

export const modelRegistry: ModelInfo[] = [
  { id: "yolov12", name: "YOLOv12", role: "Document detection & localisation", status: "live" },
  { id: "ppocr", name: "PP-OCRv5", role: "Optical character recognition", status: "live" },
  { id: "scrfd", name: "SCRFD", role: "Face detection & 5-point alignment", status: "live" },
  { id: "arcface", name: "ArcFace R50", role: "512-D face embedding", status: "live" },
  { id: "dinov2", name: "DINOv2 ViT-B/14", role: "Document tamper forensics", status: "development" },
  { id: "patchcore", name: "PatchCore", role: "Unknown anomaly detection", status: "development" },
  { id: "lightgbm", name: "LightGBM", role: "Evidence fusion & risk scoring", status: "live" },
];
