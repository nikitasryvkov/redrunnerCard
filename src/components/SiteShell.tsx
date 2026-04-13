import { type ReactNode } from "react";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";

export default function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="page-shell min-h-screen bg-transparent text-fog">
      <SiteHeader />
      {children}
      <SiteFooter />
    </div>
  );
}
