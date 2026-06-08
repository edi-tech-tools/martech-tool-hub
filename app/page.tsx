"use client";

import { MotionProvider, m } from '@/lib/motion';
import { Reveal, StaggerReveal } from '@/components/motion/reveal';
import { LiquidGlass } from '@/components/motion/liquid-glass';
import { GradientMesh } from '@/components/motion/gradient-mesh';
import { Magnetic } from '@/components/motion/magnetic';
import { useMemo } from 'react';
import Link from 'next/link';
import { ALL_TOOLS } from '@/data/tools';
import { BLOG_POSTS } from '@/data/blog-posts';

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
    <MotionProvider>
      <div className="relative min-h-screen">
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-[#09090b]" />
          <GradientMesh colors={['#00bcd4', '#a78bfa', '#f472b6']} intensity={0.05} />
        </div>

        {/* ═══ HERO ═══ */}
        <section className="pt-28 pb-12 text-center px-6">
          <Reveal y={12} blur>
            <p className="text-[10px] font-mono tracking-[0.3em] text-[#708094] mb-5 uppercase">
              {ALL_TOOLS.length} marketing tools reviewed
            </p>
          </Reveal>

          <Reveal delay={0.1} y={16} blur>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-dm-sans)] font-bold text-[#e6eefc] mb-4 tracking-tight leading-[1.05]">
              Build Your Ideal<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00bcd4] to-[#a78bfa]">Marketing Stack</span>
            </h1>
          </Reveal>

          <Reveal delay={0.3} y={12}>
            <p className="text-base text-[#9bb1d0] max-w-lg mx-auto leading-relaxed">
              Compare {ALL_TOOLS.length} marketing technology tools across {cats.length} categories. Side-by-side reviews, pricing, and expert insights.
            </p>
          </Reveal>

          <Reveal delay={0.5} y={12}>
            <div className="flex justify-center gap-3 mt-8">
              <Magnetic>
                <Link
                  href="/tools"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#00bcd4]/10 border border-[#00bcd4]/30 text-sm font-medium text-[#00bcd4] hover:bg-[#00bcd4]/20 transition-all"
                >
                  Browse Tools
                </Link>
              </Magnetic>
              <Magnetic>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-sm font-medium text-[#e6eefc] hover:bg-white/[0.08] transition-all"
                >
                  Latest Reviews
                </Link>
              </Magnetic>
            </div>
          </Reveal>
        </section>

        {/* ═══ CATEGORIES ═══ */}
        <section className="pb-16 px-6 max-w-5xl mx-auto">
          <Reveal y={12}>
            <p className="text-[10px] font-mono tracking-[0.25em] text-[#708094] mb-6 uppercase text-center">
              Categories
            </p>
          </Reveal>

          <StaggerReveal className="grid md:grid-cols-2 lg:grid-cols-3 gap-3" stagger={0.06}>
            {cats.map(([name, d]) => (
              <Reveal key={name} y={20}>
                <Link href={`/category/${name.toLowerCase().replace(/\s+/g, '-')}`}>
                  <LiquidGlass intensity="standard" tint="#00bcd4" glow tilt tiltIntensity={5}
                    className="rounded-xl border border-white/[0.06] hover:border-white/[0.14] transition-colors block"
                  >
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 rounded-full bg-[#00bcd4]" style={{ boxShadow: '0 0 12px #00bcd460' }} />
                        <h3 className="text-sm font-semibold text-[#e6eefc]">{name}</h3>
                      </div>
                      <p className="text-xs text-[#9bb1d0]">{d.count} tools</p>
                    </div>
                  </LiquidGlass>
                </Link>
              </Reveal>
            ))}
          </StaggerReveal>
        </section>

        {/* ═══ TOP PICKS ═══ */}
        <section className="pb-16 px-6 max-w-5xl mx-auto">
          <Reveal y={12}>
            <p className="text-[10px] font-mono tracking-[0.25em] text-[#708094] mb-6 uppercase text-center">
              Top Rated Tools
            </p>
          </Reveal>

          <StaggerReveal className="grid md:grid-cols-2 lg:grid-cols-3 gap-3" stagger={0.06}>
            {topPicks.map((t) => (
              <Reveal key={t.id} y={20}>
                <Link href={`/tools/${t.id}`}>
                  <LiquidGlass intensity="subtle" tint="#a78bfa" glow={false} tilt tiltIntensity={4}
                    className="rounded-xl border border-white/[0.06] hover:border-white/[0.14] transition-colors block"
                  >
                    <div className="p-5">
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <h3 className="text-sm font-semibold text-[#e6eefc] truncate">{t.name}</h3>
                        <span className="text-xs text-[#fbbf24] flex-shrink-0">★ {t.rating}</span>
                      </div>
                      <p className="text-xs text-[#9bb1d0] line-clamp-2">{t.description}</p>
                      <div className="text-[10px] text-[#708094] mt-2 font-mono">{t.category}</div>
                    </div>
                  </LiquidGlass>
                </Link>
              </Reveal>
            ))}
          </StaggerReveal>
        </section>

        {/* ═══ BLOG ═══ */}
        <section className="pb-24 px-6 max-w-5xl mx-auto">
          <Reveal y={12}>
            <p className="text-[10px] font-mono tracking-[0.25em] text-[#708094] mb-6 uppercase text-center">
              Latest Reviews
            </p>
          </Reveal>

          <StaggerReveal className="grid md:grid-cols-3 gap-3" stagger={0.06}>
            {posts.map((p) => (
              <Reveal key={p.slug} y={20}>
                <Link href={`/blog/${p.slug}`}>
                  <LiquidGlass intensity="subtle" tint="#f472b6" glow={false} tilt={false}
                    className="rounded-xl border border-white/[0.06] hover:border-white/[0.14] transition-colors block h-full"
                  >
                    <div className="p-5 flex flex-col h-full">
                      <div className="text-[10px] font-mono tracking-wider uppercase text-[#708094] mb-2">{p.category || 'Review'}</div>
                      <h3 className="text-sm font-semibold text-[#e6eefc] mb-2 line-clamp-2 leading-snug">{p.title}</h3>
                      <p className="text-xs text-[#9bb1d0] flex-grow line-clamp-2">{p.excerpt}</p>
                      <div className="text-[10px] text-[#52525b] mt-3 pt-2 border-t border-white/[0.06]">
                        {p.readTime} min read
                      </div>
                    </div>
                  </LiquidGlass>
                </Link>
              </Reveal>
            ))}
          </StaggerReveal>
        </section>
      </div>
    </MotionProvider>
  );
}
