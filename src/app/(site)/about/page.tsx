import type { Metadata } from "next";
import { AboutContent } from "@/components/AboutContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet George Barakat — Toronto photographer for portraits, events, travel, and street.",
};

export default function AboutPage() {
  return <AboutContent />;
}
