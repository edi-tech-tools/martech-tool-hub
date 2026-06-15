import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Affiliate Disclosure — Martech Tools LLC",
  description:
    "Martech Tools LLC's affiliate disclosure policy. We believe in complete transparency about how our studio operates.",
};

export default function DisclosurePage() {
  return (
    <div className="relative min-h-screen bg-[#120a0c] pt-28 pb-20 px-6">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[10%] left-[-5%] w-[30%] h-[30%] rounded-full bg-[#a0304e]/[0.03] blur-[100px]" />
      </div>

      <div className="max-w-[800px] mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(180,60,80,0.2)] bg-[rgba(160,48,78,0.08)] mb-6">
            <span className="text-[10px] font-mono tracking-[0.15em] text-[#d4607a] uppercase">Legal</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#f5e8ea] tracking-tight mb-3">
            Affiliate Disclosure
          </h1>
          <p className="text-sm text-[#a08088]">
            Last updated: May 2026
          </p>
        </div>

        <div className="space-y-6 text-sm text-[#a08088] leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-[#f5e8ea] mb-3">Transparency First</h2>
            <p>
              Martech Tools LLC is committed to complete transparency. This Affiliate Disclosure
              explains how we may earn compensation through links on our website.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#f5e8ea] mb-3">Affiliate Links</h2>
            <p>
              Some of the links on this site are affiliate links. If you click on a link and
              make a purchase or sign up for a service, we may receive a commission at no
              additional cost to you.
            </p>
            <p className="mt-3">
              These commissions help fund our independent research and the time our analysts
              spend producing data-driven reviews.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#f5e8ea] mb-3">No Impact on Analysis</h2>
            <p>
              Our tool reviews, ratings, and recommendations are never influenced by
              affiliate relationships. We evaluate tools based on publicly available data,
              feature analysis, and verified user feedback — not commercial arrangements.
              If a tool appears on this site, it is because it represents a legitimate
              option in its category.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#f5e8ea] mb-3">Questions</h2>
            <p>
              If you have any questions about our affiliate relationships or this
              disclosure, please contact us at{" "}
              <a href="mailto:hello@cleverco-analytics.com" className="text-[#d4607a] hover:underline">
                hello@cleverco-analytics.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
