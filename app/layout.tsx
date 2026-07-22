import type { Metadata } from "next";
import "../styles/styles.scss";
import { cn } from "@/lib/utils";
import { Header } from "@/components/organisms/layouts/header";
import { Footer } from "@/components/organisms/layouts/footer";

const interVariable = "--font-sans";
const geistSansVariable = "--font-geist-sans";
const geistMonoVariable = "--font-geist-mono";

export const metadata: Metadata = {
  title: "Insight AI",
  description: "AI Powered Real Estate Analytics",
  viewport: "width=device-width, initial-scale=1",
  authors: [{ name: "Vy Doan", url: "https://github.com/giavyit" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "layout-html",
        geistSansVariable,
        geistMonoVariable,
        interVariable,
      )}
      suppressHydrationWarning
    >
      <body className="layout-body" suppressHydrationWarning>
        <Header />
        <main className="flex-1 z-0">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
