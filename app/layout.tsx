import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://valutedkicks.com"),
  title: {
    default: "Valuted News | Global Headlines Updated Hourly",
    template: "%s | Valuted News",
  },
  description:
    "Valuted News delivers real-time global headlines across business, technology, sports, health, science and more.",
  verification: {
    google: "Ibog2p_EheZizdxb2gk08XlWf7mC_do5gmXQriAkLVA",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}`import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Valued News",
  description: "Real-Time Global Headlines Updated Hourly",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black">

        {children}

        {/* Adstra Script */}
        <Script
          src="https://pl28749930.effectivegatecpm.com/30/b2/dd/30b2ddd5841c7a135d3feff4ba662b42.js"
          strategy="afterInteractive"
        />

      </body>
    </html>
  );
}
