import { Header } from "@/components/Header";
import { MainWithOffset } from "@/components/MainWithOffset";
import { SiteFooter } from "@/components/SiteFooter";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <MainWithOffset>{children}</MainWithOffset>
      <SiteFooter />
    </div>
  );
}
