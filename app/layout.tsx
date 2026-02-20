import "./globals.css";
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
