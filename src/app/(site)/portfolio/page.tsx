import type { Metadata } from "next";
import { Gallery } from "@/components/Gallery";
import { PortfolioInterest } from "@/components/PortfolioInterest";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Portfolio — portraits, events, travel, and street photography by George Barakat, Toronto.",
};

export default function PortfolioPage() {
  return (
    <div className="py-12 md:py-16">
      <Gallery variant="portfolio" />
      <PortfolioInterest />
    </div>
  );
}
