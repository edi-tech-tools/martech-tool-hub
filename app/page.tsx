"use client";

import { useMemo } from "react";
import Link from "next/link";
import { ALL_TOOLS } from "@/data/tools";
import { BLOG_POSTS } from "@/data/blog-posts";
import { ArrowRight, BarChart3, Database, TrendingUp, PieChart, Sparkles, Target, Users } from "lucide-react";

export default function HomePage() {
  const cats = useMemo(() => {
    const m = new Map<string, { count: number }>();
    for (const t of ALL_TOOLS) {
      if (!m.has(t.category)) m.set(t.category, { count: 0 });
      m.get(t.category)!.count++;
    }
    return [...m.entries()].sort((a, b) => b[1].count - a[1].count);
  }, []);

  const topPicks = useMemo(() => [...ALL_TOOLS].sort((a, b) => b.rating - a.rating).slice(0, 6), []);

  const posts = useMemo(
    () => [...BLOG_POSTS].sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 3),
    []
  );

  return (
    <div className="relative min-h-screen bg-[#120a0c]">
      {/* Decorative background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-[#a0304e]/[0.03] blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#6b1d30]/[0.04] blur-[100px]" />
      </div>

      {/* ═══ HERO ═══ */}
      <section className="pt-28 pb-16 text-center px-6">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(180,60,80,0.2)] bg-[rgba(160,48,78,0.08)] mb-6">
            <BarChart3 className="w-3.5 h-3.5 text-[#d4607a]" />
            <span className="text-[10px] font-mono tracking-[0.15em] text-[#d4607a] uppercase">
              Business Intelligence · Leeds, UK
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-dm-sans)] font-bold text-[#f5e8ea] mb-5 tracking-tight leading-[1.05]">
            MarTech Intelligence,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4607a] via-[#c9a84c] to-[#d4607a]">
              Data-Led &amp; Unbiased
            </span>
          </h1>

          <p className="text-base text-[#a08088] max-w-2xl mx-auto leading-relaxed mb-8">
            We analyse {ALL_TOOLS.length} marketing technology tools through a Business Intelligence lens —
            hard data, real benchmarks, and actionable insights from our Leeds studio.
          </p>

          <div className="flex justify-center gap-4">
            <Link
              href="/tools"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#a0304e] text-sm font-medium text-[#f5e8ea] hover:bg-[#b8385a] transition-all shadow-lg shadow-[#a0304e]/20"
            >
              Browse Tools
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[rgba(180,60,80,0.25)] text-sm font-medium text-[#d4b8bd] hover:bg-[rgba(180,60,80,0.1)] transition-all"
            >
              Meet the Studio
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ STATS BAR ═══ */}
      <section className="pb-16 px-6 max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[rgba(180,60,80,0.1)] rounded-2xl overflow-hidden border border-[rgba(180,60,80,0.1)]">
          {[
            { label: "Tools Reviewed", value: ALL_TOOLS.length, icon: Database },
            { label: "Categories", value: cats.length, icon: PieChart },
            { label: "Analysts", value: 4, icon: Users },
            { label: "Data Points", value: "2,400+", icon: TrendingUp },
          ].map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="bg-[#1a1013] p-6 text-center">
                <Icon className="w-5 h-5 text-[#d4607a] mx-auto mb-2" />
                <div className="text-xl md:text-2xl font-bold text-[#f5e8ea]">{stat.value}</div>
                <div className="text-[10px] font-mono tracking-wider uppercase text-[#a08088] mt-1">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ═══ CATEGORIES ═══ */}
      <section className="pb-16 px-6 max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-1 h-6 bg-[#a0304e] rounded-full" />
          <p className="text-[10px] font-mono tracking-[0.25em] text-[#a08088] uppercase">
            Categories
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {cats.map(([name, d]) => (
            <Link key={name} href={`/category/${name.toLowerCase().replace(/\s+/g, '-')}`}>
              <div className="rounded-xl border border-[rgba(180,60,80,0.12)] bg-[#1a1013] p-5 hover:border-[rgba(180,60,80,0.3)] hover:bg-[rgba(160,48,78,0.06)] transition-all group">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-[#d4607a]" style={{ boxShadow: '0 0 12px #d4607a40' }} />
                  <h3 className="text-sm font-semibold text-[#f5e8ea] group-hover:text-[#d4607a] transition-colors">{name}</h3>
                </div>
                <p className="text-xs text-[#a08088]">{d.count} tools</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ═══ TOP PICKS ═══ */}
      <section className="pb-16 px-6 max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-1 h-6 bg-[#c9a84c] rounded-full" />
          <p className="text-[10px] font-mono tracking-[0.25em] text-[#a08088] uppercase">
            Top Rated
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {topPicks.map((t) => (
            <Link key={t.id} href={`/tools/${t.id}`}>
              <div className="rounded-xl border border-[rgba(180,60,80,0.12)] bg-[#1a1013] p-5 hover:border-[rgba(180,60,80,0.3)] transition-all group h-full">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="text-sm font-semibold text-[#f5e8ea] truncate group-hover:text-[#c9a84c] transition-colors">{t.name}</h3>
                  <span className="text-xs text-[#c9a84c] flex-shrink-0">★ {t.rating}</span>
                </div>
                <p className="text-xs text-[#a08088] line-clamp-2">{t.description}</p>
                <div className="text-[10px] text-[#695058] mt-3 font-mono">{t.category}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ═══ INSIGHTS (BLOG) ═══ */}
      <section className="pb-24 px-6 max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-1 h-6 bg-[#d4607a] rounded-full" />
          <p className="text-[10px] font-mono tracking-[0.25em] text-[#a08088] uppercase">
            Latest Insights
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {posts.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`}>
              <div className="rounded-xl border border-[rgba(180,60,80,0.12)] bg-[#1a1013] hover:border-[rgba(180,60,80,0.3)] transition-all h-full flex flex-col">
                <div className="p-5 flex flex-col h-full">
                  <div className="text-[10px] font-mono tracking-wider uppercase text-[#a08088] mb-2">
                    {p.category || 'Analysis'}
                  </div>
                  <h3 className="text-sm font-semibold text-[#f5e8ea] mb-2 line-clamp-2 leading-snug hover:text-[#d4607a] transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-xs text-[#a08088] flex-grow line-clamp-2">{p.excerpt}</p>
                  <div className="flex items-center justify-between mt-3 pt-3 border-t border-[rgba(180,60,80,0.08)]">
                    <span className="text-[10px] text-[#695058]">{p.author}</span>
                    <span className="text-[10px] text-[#695058]">{p.readTime} min read</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-medium text-[#d4607a] hover:text-[#f5e8ea] transition-colors"
          >
            View All Insights <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
