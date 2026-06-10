import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL("https://martech-tools.net"),
  title: {
    default: "Clever Co. — MarTech Intelligence from Leeds",
    template: "%s — Clever Co.",
  },
  description:
    "Clever Co. provides Business Intelligence-driven MarTech reviews and data-led marketing technology insights from our Leeds studio.",
  keywords: [
    "MarTech", "marketing technology", "Business Intelligence",
    "marketing stack", "CRM reviews", "marketing analytics",
    "data-driven marketing", "Clever Co", "Leeds",
  ],
  verification: {
    google: "T5bb4mZivi0CfaYYRiKZLSNIWmhvAX6_RVgDEyonTGo",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Clever Co. — MarTech Intelligence",
    title: "Clever Co. — MarTech Intelligence from Leeds",
    description: "Data-led MarTech reviews from our Business Intelligence studio in Leeds, UK.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased bg-[#120a0c]">
        {/* ═══ HEADER ═══ */}
        <header className="fixed top-0 left-0 right-0 z-50">
          <div className="absolute inset-0 bg-[#120a0c]/80 backdrop-blur-xl border-b border-[rgba(180,60,80,0.12)]" />
          <nav className="relative max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 group">
              <span className="w-7 h-7 rounded-full bg-[#a0304e] flex items-center justify-center">
                <span className="text-xs font-bold text-[#f5e8ea]">CC</span>
              </span>
              <span className="text-sm font-semibold text-[#f5e8ea] tracking-tight">
                Clever<span className="text-[#d4607a]">Co</span>
              </span>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-xs font-medium text-[#d4b8bd] hover:text-[#f5e8ea] tracking-wider uppercase transition-colors">Home</Link>
              <Link href="/tools" className="text-xs font-medium text-[#d4b8bd] hover:text-[#f5e8ea] tracking-wider uppercase transition-colors">Tools</Link>
              <Link href="/blog" className="text-xs font-medium text-[#d4b8bd] hover:text-[#f5e8ea] tracking-wider uppercase transition-colors">Insights</Link>
              <Link href="/about" className="text-xs font-medium text-[#d4b8bd] hover:text-[#f5e8ea] tracking-wider uppercase transition-colors">Studio</Link>
              <Link href="/contact" className="text-xs font-medium text-[#d4b8bd] hover:text-[#f5e8ea] tracking-wider uppercase transition-colors">Connect</Link>
            </div>
            <Link
              href="/contact"
              className="md:hidden text-xs font-semibold text-[#d4607a] border border-[rgba(180,60,80,0.3)] px-4 py-1.5 rounded-lg hover:bg-[rgba(180,60,80,0.1)] transition-all"
            >
              Connect
            </Link>
          </nav>
        </header>

        <main className="pt-16">
          {children}
        </main>

        {/* ═══ FOOTER ═══ */}
        <footer className="border-t border-[rgba(180,60,80,0.12)] bg-[#120a0c]">
          <div className="max-w-6xl mx-auto px-6 py-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
              <div className="md:col-span-1">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#a0304e] flex items-center justify-center">
                    <span className="text-xs font-bold text-[#f5e8ea]">CC</span>
                  </span>
                  <span className="text-sm font-semibold text-[#f5e8ea]">Clever<span className="text-[#d4607a]">Co</span></span>
                </div>
                <p className="text-xs text-[#a08088] leading-relaxed max-w-xs">
                  Data-driven MarTech intelligence from our studio in Leeds, UK.
                  We analyse marketing technology so you can build smarter stacks.
                </p>
              </div>
              <div>
                <h4 className="text-xs font-semibold text-[#f5e8ea] uppercase tracking-wider mb-4">Explore</h4>
                <ul className="space-y-2.5">
                  <li><Link href="/tools" className="text-xs text-[#a08088] hover:text-[#d4b8bd] transition-colors">Tool Reviews</Link></li>
                  <li><Link href="/blog" className="text-xs text-[#a08088] hover:text-[#d4b8bd] transition-colors">Latest Insights</Link></li>
                  <li><Link href="/category" className="text-xs text-[#a08088] hover:text-[#d4b8bd] transition-colors">Categories</Link></li>
                  <li><Link href="/faq" className="text-xs text-[#a08088] hover:text-[#d4b8bd] transition-colors">FAQ</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-semibold text-[#f5e8ea] uppercase tracking-wider mb-4">Studio</h4>
                <ul className="space-y-2.5">
                  <li><Link href="/about" className="text-xs text-[#a08088] hover:text-[#d4b8bd] transition-colors">Our Team</Link></li>
                  <li><Link href="/about" className="text-xs text-[#a08088] hover:text-[#d4b8bd] transition-colors">Methodology</Link></li>
                  <li><Link href="/contact" className="text-xs text-[#a08088] hover:text-[#d4b8bd] transition-colors">Contact Us</Link></li>
                  <li><Link href="/disclosure" className="text-xs text-[#a08088] hover:text-[#d4b8bd] transition-colors">Disclosure</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-semibold text-[#f5e8ea] uppercase tracking-wider mb-4">Legal</h4>
                <ul className="space-y-2.5">
                  <li><Link href="/privacy" className="text-xs text-[#a08088] hover:text-[#d4b8bd] transition-colors">Privacy Policy</Link></li>
                  <li><Link href="/terms" className="text-xs text-[#a08088] hover:text-[#d4b8bd] transition-colors">Terms of Use</Link></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-[rgba(180,60,80,0.1)] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-[10px] text-[#a08088]">
                &copy; {new Date().getFullYear()} Clever Co. Studio, Leeds, UK. All rights reserved.
              </p>
              <p className="text-[10px] text-[#695058]">
                MarTech intelligence for data-driven marketers.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
