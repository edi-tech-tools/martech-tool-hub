import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://martech-tools.net"),
  title: {
    default: "MarTech Tools — Marketing Technology Stack Reviews",
    template: "%s — MarTech Tools",
  },
  description:
    "Expert reviews of the best marketing technology tools. Compare MarTech solutions, read in-depth analyses, and build your ideal marketing stack.",
  keywords: [
    "MarTech", "marketing technology", "marketing tools",
    "marketing stack", "CRM reviews", "email marketing",
    "analytics tools", "SEO tools", "marketing automation",
  ],
  verification: {
    google: "T5bb4mZivi0CfaYYRiKZLSNIWmhvAX6_RVgDEyonTGo",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "MarTech Tools",
    title: "MarTech Tools — Marketing Technology Stack Reviews",
    description: "Expert reviews of the best marketing technology tools.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
