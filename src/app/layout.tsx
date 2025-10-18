import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Star Auto Service – Auto Repair in Richardson, TX",
  description: "ASE-certified auto repair in Richardson, TX. Battery service, oil changes, electrical diagnostics, engine replacement, tire rotation, and HVAC. Call (972) 231-2886.",
  keywords: ["auto repair", "Richardson TX", "car service", "ASE certified", "oil change", "battery service", "HVAC repair"],
  authors: [{ name: "The Star Auto Service" }],
  openGraph: {
    type: "website",
    title: "The Star Auto Service – Auto Repair in Richardson, TX",
    description: "Expert auto repair with integrity. Bilingual service. Call (972) 231-2886.",
    url: "https://thestarautoservice.com/",
    siteName: "The Star Auto Service",
    images: [
      {
        url: "https://thestarautoservice.com/assets/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The Star Auto Service – Richardson auto repair",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Star Auto Service – Auto Repair in Richardson, TX",
    description: "Expert auto repair with integrity. Bilingual service.",
    images: ["https://thestarautoservice.com/assets/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
