"use client";

import { useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Star,
  CheckCircle,
  XCircle,
  ExternalLink,
  DollarSign,
  TrendingUp,
  Users,
  Shield,
  BarChart3,
  Quote,
  Layers,
  Sparkles,
} from "lucide-react";
import { TOOL_MAP, ALL_TOOLS } from "@/data/tools";
import { softwareSchema } from "@/lib/schema";

function ScoreBar({ label, score, color }: { label: string; score: number; color: string }) {
  const pct = Math.min(score, 100);
  return (
    <div className="flex items-center gap-3">
      <span className="text-xs text-[#a08088] w-20 shrink-0">{label}</span>
      <div className="flex-1 h-2 bg-[rgba(180,60,80,0.12)] rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{ width: `${pct}%`, backgroundColor: color }}
        />
      </div>
      <span className="text-xs font-bold text-[#f5e8ea] w-8 text-right">{score}%</span>
    </div>
  );
}

export default function ToolDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const tool = TOOL_MAP.get(slug);
  const schemaInjected = useRef(false);

  useEffect(() => {
    if (!tool || schemaInjected.current) return;
    schemaInjected.current = true;

    const scripts: HTMLScriptElement[] = [];

    const software = softwareSchema(
      tool.name,
      tool.category,
      tool.rating,
      tool.reviewCount,
      tool.pricing || '0.00',
      'USD'
    );
    const s1 = document.createElement('script');
    s1.type = 'application/ld+json';
    s1.textContent = JSON.stringify(software);
    document.head.appendChild(s1);
    scripts.push(s1);

    return () => {
      scripts.forEach(s => {
        if (document.head.contains(s)) document.head.removeChild(s);
      });
    };
  }, [tool]);

  if (!tool) {
    return (
      <div className="relative min-h-screen bg-[#120a0c] pt-32 px-6 text-center">
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute top-[10%] right-[-5%] w-[35%] h-[35%] rounded-full bg-[#a0304e]/[0.03] blur-[100px]" />
        </div>
        <h1 className="text-3xl font-bold text-[#f5e8ea] mb-4">
          Tool Not Found
        </h1>
        <p className="text-[#a08088] mb-8">
          The tool you are looking for does not exist or has been removed.
        </p>
        <Link
          href="/"
          className="inline-flex items-center text-[#d4607a] hover:text-[#f5e8ea] transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Clever Co.
        </Link>
      </div>
    );
  }

  const Icon = tool.icon;

  const relatedTools = ALL_TOOLS.filter(
    (t) => t.category === tool.category && t.id !== tool.id
  ).slice(0, 4);

  const alternativeNames = (tool.alternatives || [])
    .map((altId) => {
      const alt = ALL_TOOLS.find((t) => t.id === altId);
      return alt ? alt.name : null;
    })
    .filter(Boolean) as string[];

  const scores = tool.scoreBreakdown || {
    features: 90,
    reviews: 88,
    momentum: 85,
    popularity: 87,
  };

  return (
    <div className="relative min-h-screen bg-[#120a0c] pt-28 pb-20 px-6">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[10%] right-[-5%] w-[35%] h-[35%] rounded-full bg-[#a0304e]/[0.03] blur-[100px]" />
      </div>
      <div className="max-w-4xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center text-[#a08088] hover:text-[#d4607a] transition-colors mb-8 text-sm"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Clever Co.
        </Link>

        <header className="mb-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-xl bg-[#1a1013] border border-[rgba(180,60,80,0.15)] flex items-center justify-center">
              <Icon className="w-7 h-7 text-[#d4607a]" />
            </div>
            <div>
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-[rgba(160,48,78,0.12)] text-[#d4607a] text-xs font-bold rounded-full uppercase tracking-wider border border-[rgba(180,60,80,0.2)]">
                  {tool.category}
                </span>
                <div className="flex items-center text-[#c9a84c] font-bold text-sm">
                  <Star className="w-4 h-4 fill-[#c9a84c] mr-1" />{" "}
                  {tool.rating}/5
                  <span className="text-[#695058] font-normal ml-1">
                    ({tool.reviewCount.toLocaleString()} reviews)
                  </span>
                </div>
              </div>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#f5e8ea] mb-4 tracking-tight">
            {tool.name}
          </h1>
          <p className="text-base md:text-lg text-[#a08088] leading-relaxed">
            {tool.longDescription}
          </p>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <div className="rounded-xl border border-[rgba(180,60,80,0.12)] bg-[#1a1013] p-4">
            <DollarSign className="w-5 h-5 text-[#d4607a] mb-2" />
            <p className="text-[10px] text-[#695058] uppercase tracking-wider mb-1">
              Starting Price
            </p>
            <p className="text-sm font-bold text-[#f5e8ea]">{tool.pricing}</p>
          </div>
          <div className="rounded-xl border border-[rgba(180,60,80,0.12)] bg-[#1a1013] p-4">
            <Star className="w-5 h-5 text-[#c9a84c] mb-2" />
            <p className="text-[10px] text-[#695058] uppercase tracking-wider mb-1">
              Rating
            </p>
            <p className="text-sm font-bold text-[#f5e8ea]">
              {tool.rating}/5
            </p>
          </div>
          <div className="rounded-xl border border-[rgba(180,60,80,0.12)] bg-[#1a1013] p-4">
            <Users className="w-5 h-5 text-[#d4607a] mb-2" />
            <p className="text-[10px] text-[#695058] uppercase tracking-wider mb-1">
              Reviews
            </p>
            <p className="text-sm font-bold text-[#f5e8ea]">
              {tool.reviewCount.toLocaleString()}
            </p>
          </div>
          <div className="rounded-xl border border-[rgba(180,60,80,0.12)] bg-[#1a1013] p-4">
            <Shield className="w-5 h-5 text-[#d4607a] mb-2" />
            <p className="text-[10px] text-[#695058] uppercase tracking-wider mb-1">
              Category
            </p>
            <p className="text-sm font-bold text-[#f5e8ea]">{tool.category}</p>
          </div>
        </div>

        <div className="rounded-xl border border-[rgba(180,60,80,0.12)] bg-[#1a1013] p-6 mb-10">
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-bold text-[#f5e8ea] flex items-center text-base">
              <BarChart3 className="w-5 h-5 mr-2 text-[#d4607a]" /> SW Score
            </h2>
            <span className="text-[10px] text-[#695058]">Powered by verified reviews & data</span>
          </div>
          <div className="space-y-3">
            <ScoreBar label="Features" score={scores.features} color="#d4607a" />
            <ScoreBar label="Reviews" score={scores.reviews} color="#c9a84c" />
            <ScoreBar label="Momentum" score={scores.momentum} color="#a0304e" />
            <ScoreBar label="Popularity" score={scores.popularity} color="#d4607a" />
          </div>
          <div className="mt-4 pt-4 border-t border-[rgba(180,60,80,0.12)] flex items-center justify-between text-[10px] text-[#695058]">
            <span>Overall rating based on user reviews and product data</span>
            <span className="font-bold text-[#d4607a]">
              Avg: {((scores.features + scores.reviews + scores.momentum + scores.popularity) / 4).toFixed(0)}%
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="rounded-xl border border-[rgba(180,60,80,0.12)] bg-[#1a1013] p-6">
            <h3 className="font-bold text-[#4ade80] mb-4 flex items-center text-base">
              <CheckCircle className="w-5 h-5 mr-2" /> Key Advantages
            </h3>
            <ul className="space-y-3">
              {tool.pros.map((pro, i) => (
                <li
                  key={i}
                  className="flex items-start text-sm text-[#a08088]"
                >
                  <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                  {pro}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-[rgba(180,60,80,0.12)] bg-[#1a1013] p-6">
            <h3 className="font-bold text-[#f87171] mb-4 flex items-center text-base">
              <XCircle className="w-5 h-5 mr-2" /> Potential Drawbacks
            </h3>
            <ul className="space-y-3">
              {tool.cons.map((con, i) => (
                <li
                  key={i}
                  className="flex items-start text-sm text-[#a08088]"
                >
                  <XCircle className="w-4 h-4 mr-2 mt-0.5 text-red-500 flex-shrink-0" />
                  {con}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-[#f5e8ea] mb-6 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-[#d4607a]" />
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {tool.features.map((feature, i) => (
              <div
                key={i}
                className="rounded-lg border border-[rgba(180,60,80,0.12)] bg-[#1a1013] px-4 py-3 text-sm text-[#a08088] hover:text-[#f5e8ea] hover:border-[rgba(180,60,80,0.3)] transition-all flex items-center gap-3"
              >
                <CheckCircle className="w-4 h-4 text-[#d4607a] flex-shrink-0" />
                {feature}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-[rgba(180,60,80,0.12)] bg-[#1a1013] p-6 mb-10">
          <h3 className="font-bold text-[#f5e8ea] mb-3 flex items-center text-base">
            <Users className="w-5 h-5 mr-2 text-[#d4607a]" /> Best For
          </h3>
          <p className="text-sm text-[#a08088] leading-relaxed">
            {tool.useCase}
          </p>
        </div>

        {tool.userQuotes && tool.userQuotes.length > 0 && (
          <div className="mb-10">
            <h2 className="text-xl font-bold text-[#f5e8ea] mb-6 flex items-center gap-2">
              <Quote className="w-5 h-5 text-[#d4607a]" />
              What Users Say
            </h2>
            <div className="grid gap-4">
              {tool.userQuotes.map((q, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-[rgba(180,60,80,0.12)] bg-[#1a1013] p-6 relative"
                >
                  <Sparkles className="w-5 h-5 text-[#d4607a] opacity-20 absolute top-4 right-4" />
                  <p className="text-sm text-[#a08088] leading-relaxed italic mb-4">
                    &ldquo;{q.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-2 text-xs text-[#695058]">
                    <div className="w-8 h-8 rounded-full bg-[rgba(160,48,78,0.15)] flex items-center justify-center text-[#d4607a] font-bold">
                      {q.role.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium text-[#f5e8ea]">{q.role}</p>
                      <p>{q.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {alternativeNames.length > 0 && (
          <div className="mb-10">
            <h2 className="text-xl font-bold text-[#f5e8ea] mb-6 flex items-center gap-2">
              <Layers className="w-5 h-5 text-[#d4607a]" />
              Alternatives Considered
            </h2>
            <div className="flex flex-wrap gap-3">
              {alternativeNames.map((name, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-[rgba(160,48,78,0.08)] border border-[rgba(180,60,80,0.15)] rounded-full text-xs text-[#a08088]"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        )}

        {relatedTools.length > 0 && (
          <div className="mb-10">
            <h2 className="text-xl font-bold text-[#f5e8ea] mb-6 flex items-center gap-2">
              <Shield className="w-5 h-5 text-[#d4607a]" />
              More {tool.category} Tools
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {relatedTools.map((rt) => {
                const RtIcon = rt.icon;
                return (
                  <Link
                    key={rt.id}
                    href={`/tools/${rt.id}`}
                    className="group rounded-xl border border-[rgba(180,60,80,0.12)] bg-[#1a1013] p-5 hover:border-[rgba(180,60,80,0.3)] transition-all"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[rgba(160,48,78,0.1)] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        <RtIcon className="w-5 h-5 text-[#d4607a]" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-sm font-bold text-[#f5e8ea] group-hover:text-[#d4607a] transition-colors">
                          {rt.name}
                        </h3>
                        <p className="text-xs text-[#695058] mt-0.5">
                          {rt.description}
                        </p>
                        <div className="flex items-center gap-1 mt-1.5">
                          <Star className="w-3 h-3 text-[#c9a84c] fill-[#c9a84c]" />
                          <span className="text-xs text-[#c9a84c] font-semibold">{rt.rating}</span>
                          <span className="text-xs text-[#695058]">({rt.reviewCount.toLocaleString()})</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        <div className="rounded-2xl border border-[rgba(180,60,80,0.15)] bg-gradient-to-r from-[#1a1013] to-[#1a1013] p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-xl font-bold text-[#f5e8ea] mb-2">
              Ready to scale with {tool.name}?
            </h2>
            <p className="text-sm text-[#a08088]">{tool.pricingDetail}</p>
          </div>
          <a
            href={tool.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#a0304e] hover:bg-[#b8385a] text-[#f5e8ea] px-8 py-3 rounded-xl font-medium transition-all flex items-center whitespace-nowrap text-sm"
          >
            Visit Official Website{" "}
            <ExternalLink className="ml-2 w-4 h-4" />
          </a>
        </div>

        <div className="mt-10 p-8 border border-dashed border-[rgba(180,60,80,0.12)] rounded-lg text-center text-[#695058] italic bg-[#1a1013]/50">
          [AdSense In-Article Ad]
        </div>

        <div className="mt-6 text-center">
          <p className="text-xs text-[#695058]">
            When you purchase through links on our site, we may earn an affiliate commission.{' '}
            <Link href="/disclosure" className="text-[#d4607a] hover:underline">
              Learn more
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
