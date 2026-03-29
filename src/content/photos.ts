export type PhotoCategory = "Portraits" | "Events" | "Travel" | "Street";

export type Photo = {
  id: string;
  title: string;
  /** Esther-style category line under the title */
  subtitle?: string;
  year?: string;
  category: PhotoCategory;
  src: string;
  alt: string;
  location?: string;
};

// Replace with your own images (local `public/` or CDN). Unsplash placeholders.
export const photos: Photo[] = [
  {
    id: "p-001",
    title: "Portrait Study",
    subtitle: "Portrait photography",
    year: "2025",
    category: "Portraits",
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1800&q=80",
    alt: "Portrait with dramatic lighting",
  },
  {
    id: "p-002",
    title: "Window Light",
    subtitle: "Editorial portrait",
    year: "2025",
    category: "Portraits",
    src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1800&q=80",
    alt: "Portrait by a window",
  },
  {
    id: "e-001",
    title: "Crowd Pulse",
    subtitle: "Event photography",
    year: "2024",
    category: "Events",
    src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1800&q=80",
    alt: "Event crowd with lights",
  },
  {
    id: "e-002",
    title: "On Stage",
    subtitle: "Live performance",
    year: "2024",
    category: "Events",
    src: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1800&q=80",
    alt: "Live performance on stage",
  },
  {
    id: "t-001",
    title: "Coastal Morning",
    subtitle: "Travel photography",
    year: "2023",
    category: "Travel",
    src: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1800&q=80",
    alt: "Coastal landscape at sunrise",
  },
  {
    id: "t-002",
    title: "City Layers",
    subtitle: "Urban travel",
    year: "2023",
    category: "Travel",
    src: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1800&q=80",
    alt: "City scene with depth and layers",
  },
  {
    id: "s-001",
    title: "Crosswalk Moment",
    subtitle: "Street photography",
    year: "2022",
    category: "Street",
    src: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=1800&q=80",
    alt: "Street crosswalk with motion",
  },
  {
    id: "s-002",
    title: "Neon Corner",
    subtitle: "Night street",
    year: "2022",
    category: "Street",
    src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1800&q=80",
    alt: "Neon-lit street corner at night",
  },
];

export const categories: PhotoCategory[] = [
  "Portraits",
  "Events",
  "Travel",
  "Street",
];
