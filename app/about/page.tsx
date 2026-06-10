import type { Metadata } from "next";
import Link from "next/link";
import { BarChart3, MapPin, Linkedin, Twitter, Globe, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Studio — Clever Co.",
  description:
    "Clever Co. is a Business Intelligence studio based in Leeds, UK. We analyse marketing technology through a data-driven lens to help teams build smarter stacks.",
};

const TEAM = [
  {
    name: "Henry Nielsen",
    role: "CEO & Lead Analyst",
    bio: "Founder of Clever Co. with 15+ years in marketing analytics and BI. Previously led data strategy at a FTSE 250 company. Henry ensures every review is rooted in rigorous data analysis, not vendor influence.",
    initials: "HN",
  },
  {
    name: "Mia Garcia",
    role: "CTO & Data Architect",
    bio: "Mia architects our data pipelines and analytics infrastructure. With a background in data engineering and a passion for making complex data accessible, she ensures our benchmarks are reproducible and trustworthy.",
    initials: "MG",
  },
  {
    name: "Addison Peters",
    role: "Full-Stack Engineer",
    bio: "Addison builds the tools and platforms that power our research — from automated data collection to interactive comparison dashboards. He brings technical depth to every analysis we publish.",
    initials: "AP",
  },
  {
    name: "Claude Scherer",
    role: "Product Manager",
    bio: "Claude translates data into narratives that matter. He manages our editorial calendar, coordinates research priorities, and ensures every insight we publish answers a real question marketers face.",
    initials: "CS",
  },
];

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-[#120a0c]">
      {/* Decorative background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[10%] left-[-5%] w-[40%] h-[40%] rounded-full bg-[#a0304e]/[0.03] blur-[100px]" />
        <div className="absolute bottom-[20%] right-[-5%] w-[35%] h-[35%] rounded-full bg-[#6b1d30]/[0.04] blur-[80px]" />
      </div>

      <div className="pt-28 pb-20 px-6">
        <div className="max-w-[900px] mx-auto">
          {/* ═══ HERO ═══ */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(180,60,80,0.2)] bg-[rgba(160,48,78,0.08)] mb-6">
              <MapPin className="w-3.5 h-3.5 text-[#d4607a]" />
              <span className="text-[10px] font-mono tracking-[0.15em] text-[#d4607a] uppercase">
                Leeds, United Kingdom
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-[#f5e8ea] tracking-tight mb-5 leading-[1.1]">
              MarTech Intelligence,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4607a] to-[#c9a84c]">
                Built on Data
              </span>
            </h1>
            <p className="text-base text-[#a08088] max-w-2xl mx-auto leading-relaxed">
              Clever Co. is a Business Intelligence studio based in Leeds, UK. We don&apos;t just
              list marketing tools — we analyse them. Every review on this site is grounded in
              data: pricing benchmarks, feature comparisons, integration analysis, and
              real-world performance metrics drawn from public sources and our own research.
            </p>
          </div>

          {/* ═══ STUDIO STORY ═══ */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-6 bg-[#a0304e] rounded-full" />
              <h2 className="text-lg font-bold text-[#f5e8ea] tracking-tight">Our Story</h2>
            </div>

            <div className="space-y-5 text-sm text-[#a08088] leading-relaxed">
              <p>
                Clever Co. was founded in 2023 by Henry Nielsen, a data analyst who had spent
                over a decade watching marketing teams make technology decisions based on vendor
                hype rather than hard evidence. The problem wasn&apos;t a lack of tools — it was a
                lack of objective, data-driven analysis about which tools actually deliver.
              </p>
              <p>
                Based in Leeds — one of the UK&apos;s fastest-growing tech hubs outside London —
                we built Clever Co. around a simple premise: apply Business Intelligence
                methodologies to MarTech evaluation. Instead of subjective star ratings and
                sponsored placements, we dig into the data that matters: feature parity,
                total cost of ownership, integration depth, API quality, and verified user
                outcomes from across the industry.
              </p>
              <p>
                Our team of four brings together expertise in data engineering, analytics,
                full-stack development, and product management. We don&apos;t accept payment for
                listings or reviews. Every tool in our directory is included because it
                represents a legitimate option in its category, evaluated through the same
                rigorous framework.
              </p>
              <p>
                Today, we maintain the most data-rich independent MarTech directory available —
                covering {">"}80 tools across 15+ categories, with pricing, feature
                comparisons, integration maps, and analyst notes on every page. Our insights
                are read by marketing ops teams, CMOs, and technology buyers across the UK
                and Europe.
              </p>
            </div>
          </div>

          {/* ═══ TEAM ═══ */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-6 bg-[#c9a84c] rounded-full" />
              <h2 className="text-lg font-bold text-[#f5e8ea] tracking-tight">The Team</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {TEAM.map((member) => (
                <div
                  key={member.name}
                  className="rounded-xl border border-[rgba(180,60,80,0.12)] bg-[#1a1013] p-6 hover:border-[rgba(180,60,80,0.25)] transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#a0304e]/20 border border-[rgba(180,60,80,0.2)] flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold text-[#d4607a]">{member.initials}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-semibold text-[#f5e8ea]">{member.name}</h3>
                      <p className="text-[10px] font-mono tracking-wider uppercase text-[#d4607a] mt-0.5">{member.role}</p>
                    </div>
                  </div>
                  <p className="text-xs text-[#a08088] leading-relaxed mt-4">
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ═══ METHODOLOGY ═══ */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-6 bg-[#d4607a] rounded-full" />
              <h2 className="text-lg font-bold text-[#f5e8ea] tracking-tight">How We Analyse</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  title: "Data Collection",
                  desc: "We aggregate pricing, feature lists, and specifications from official vendor documentation, verified user reviews, and industry benchmarks.",
                },
                {
                  title: "Comparative Analysis",
                  desc: "Tools are evaluated against consistent criteria within their category. We map features, integration ecosystems, and total cost of ownership side by side.",
                },
                {
                  title: "Independent Publishing",
                  desc: "No sponsored content, no paid placements, no vendor influence. Our reviews are funded entirely by our own research time and published without editorial interference.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-[rgba(180,60,80,0.12)] bg-[#1a1013] p-5"
                >
                  <h3 className="text-sm font-semibold text-[#f5e8ea] mb-2">{item.title}</h3>
                  <p className="text-xs text-[#a08088] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ═══ CTA ═══ */}
          <div className="text-center rounded-2xl border border-[rgba(180,60,80,0.15)] bg-[#1a1013] p-10">
            <BarChart3 className="w-8 h-8 text-[#d4607a] mx-auto mb-4" />
            <h2 className="text-xl font-bold text-[#f5e8ea] mb-3">
              Have a data question?
            </h2>
            <p className="text-sm text-[#a08088] max-w-md mx-auto mb-6">
              Whether you&apos;re evaluating tools for a stack refresh or want to suggest a
              tool we should analyse, we&apos;d love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-6 py-3 bg-[#a0304e] hover:bg-[#b8385a] text-[#f5e8ea] text-sm font-medium rounded-xl transition-colors"
              >
                Get in Touch
              </Link>
              <a
                href="mailto:hello@cleverco-analytics.com"
                className="px-6 py-3 border border-[rgba(180,60,80,0.25)] hover:border-[rgba(180,60,80,0.4)] text-[#a08088] hover:text-[#d4b8bd] text-sm font-medium rounded-xl transition-all"
              >
                hello@cleverco-analytics.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
