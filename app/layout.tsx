import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Sidebar from "./sections/Sidebar";
import Footer from "./sections/Footer";
import CookieBanner from "./components/CookieBanner";

const dmSans = localFont({
  src: [
    {
      path: "../public/fonts/DMSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/DMSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/DMSans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/DMSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://martech-tools-hub.com"),
  title: {
    default: "MarTech Tools Hub — Marketing Technology Stack Reviews",
    template: "%s — MarTech Tools Hub",
  },
  description:
    "Expert reviews of the best marketing technology tools. Compare MarTech solutions, read in-depth analyses, and build your ideal marketing stack.",
  keywords: [
    "MarTech",
    "marketing technology",
    "marketing tools",
    "marketing stack",
    "CRM reviews",
    "email marketing",
    "analytics tools",
    "SEO tools",
    "marketing automation",
  ],
  verification: {
    google: "T5bb4mZivi0CfaYYRiKZLSNIWmhvAX6_RVgDEyonTGo",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "MarTech Tools Hub",
    title: "MarTech Tools Hub — Marketing Technology Stack Reviews",
    description:
      "Expert reviews of the best marketing technology tools. Compare MarTech solutions, read in-depth analyses, and build your ideal marketing stack.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} min-h-screen antialiased font-sans`}>
        {/* Background Effects */}
        <div className="aurora-bg" />
        <div className="grid-pattern" />

        <div className="relative z-10 flex min-h-screen">
          {/* Fixed Left Sidebar */}
          <Sidebar />

          {/* Right Main Content Area */}
          <div className="flex-1 flex flex-col ml-64">
            <main className="flex-1">{children}</main>

            {/* Footer */}
            <Footer />
          </div>
        </div>

        {/* Cookie Consent Banner */}
        <CookieBanner />
      </body>
    </html>
  );
}
