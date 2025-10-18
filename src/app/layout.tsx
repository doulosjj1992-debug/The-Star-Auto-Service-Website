import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Star Auto Service | Richardson, TX",
  description:
    "Full-service auto repair in Richardson, TX. Brakes, tires, diagnostics, AC, alignments, inspections. Honest pricing and warranties.",
  metadataBase: new URL("https://www.thestarautoservice.com"),
  openGraph: {
    title: "The Star Auto Service | Richardson, TX",
    description:
      "Trusted local mechanic serving Richardson, Plano, and North Dallas.",
    url: "https://www.thestarautoservice.com",
    siteName: "The Star Auto Service",
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.thestarautoservice.com" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="container">
            <a className="brand" href="/">The Star Auto Service</a>
            <nav className="nav">
              <a href="#services">Services</a>
              <a href="tel:+19722312886">Call (972) 231-2886</a>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=900+E+Belt+Line+Rd,+Richardson,+TX+75081"
                rel="nofollow noopener"
                target="_blank"
              >
                Directions
              </a>
            </nav>
          </div>
        </header>
        {children}
        <footer className="site-footer">
          <div className="container">© {new Date().getFullYear()} The Star Auto Service</div>
        </footer>
      </body>
    </html>
  );
}
