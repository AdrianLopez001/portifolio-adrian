import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin — Adrian Lopes Portfolio",
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
