import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Star Auto Service – Auto Repair in Richardson, TX",
  description: "ASE-certified auto repair in Richardson, TX. Battery service, oil changes, electrical diagnostics, engine replacement, tire rotation, and HVAC. Call (972) 231-2886.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
