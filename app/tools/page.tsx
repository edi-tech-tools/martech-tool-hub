"use client";

import { useMemo } from "react";
import Link from "next/link";
import { ALL_TOOLS } from "@/data/tools";
import { ArrowRight, ChevronRight, Star, Sparkles } from "lucide-react";

function slugify(category: string) {
  return category.toLowerCase().replace(/\s+/g, "-");
}

export default function ToolsPage() {
  const categories = useMemo(() => {
    const m = new Map<string, { count: number; bestSlug: string }>();
    for (const t of ALL_TOOLS) {
      if (!m.has(t.category)) {
        m.set(t.category, {
          count: 0,
          bestSlug: slugify(t.category),
        });
      }
      m.get(t.category)!.count++;
    }
    return [...m.entries()].map(([name, data]) => ({ name, ...data }));
  }, []);

  const featuredTools = useMemo(
    () => [...ALL_TOOLS].sort((a, b) => b.rating - a.rating).slice(0, 12),
    []
  );

  return (
    <div className="relative min-h-screen bg-[#120a0c] pt-32 pb-20 px-6">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[10%] right-[-5%] w-[35%] h-[35%] rounded-full bg-[#a0304e]/[0.03] blur-[100px]" />
        <div className="absolute bottom-[20%] left-[-5%] w-[30%] h-[30%] rounded-full bg-[#6b1d30]/[0.04] blur-[80px]" />
      </div>
      <div className="max-w-[1100px] mx-auto">
        <nav className="flex items-center gap-2 text-sm text-[#695058] mb-8">
          <Link href="/" className="hover:text-[#d4607a] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#a08088]">All MarTech Tools</span>
        </nav>

        <header className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#3B82F6]/20 to-[#22D3EE]/20 flex items-center justify-center">
              <Sparkles className="w-7 h-7 text-[#d4607a]" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-[#f5e8ea] tracking-tight">
                All MarTech Tools
              </h1>
              <p className="text-base text-[#a08088] mt-1">
                Browse our complete collection of {ALL_TOOLS.length} marketing tools across {categories.length} categories.
              </p>
            </div>
          </div>
        </header>

        {/* Categories Index */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-[#f5e8ea] mb-6">
            Browse by Category
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                href={`/best/${cat.bestSlug}`}
                className="group bg-[#1a1013] border border-[rgba(180,60,80,0.15)] rounded-xl p-5 card-hover"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-[#f5e8ea] group-hover:text-[#d4607a] transition-colors">
                    {cat.name}
                  </h3>
                  <ArrowRight className="w-4 h-4 text-[#695058] group-hover:text-[#d4607a] transition-colors" />
                </div>
                <p className="text-sm text-[#695058]">
                  {cat.count} tool{cat.count !== 1 ? "s" : ""}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured / Top-Rated Tools */}
        <section>
          <h2 className="text-2xl font-bold text-[#f5e8ea] mb-6 flex items-center gap-2">
            <Star className="w-6 h-6 text-[#d4607a]" />
            Top-Rated Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredTools.map((tool) => {
              const Icon = tool.icon;
              return (
                <Link
                  key={tool.id}
                  href={`/tools/${tool.id}`}
                  className="group bg-[#1a1013] border border-[rgba(180,60,80,0.15)] rounded-xl p-6 card-hover"
                >
                  <div className="flex items-start gap-4 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-[rgba(160,48,78,0.12)] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5 text-[#d4607a]" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-bold text-[#f5e8ea] group-hover:text-[#d4607a] transition-colors truncate">
                        {tool.name}
                      </h3>
                      <div className="flex items-center gap-1 mt-1">
                        <Star className="w-3.5 h-3.5 text-[#F59E0B] fill-[#F59E0B]" />
                        <span className="text-xs font-bold text-[#f5e8ea]">
                          {tool.rating}
                        </span>
                        <span className="text-xs text-[#695058]">
                          ({tool.reviewCount.toLocaleString()})
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[#a08088] leading-relaxed line-clamp-2 mb-2">
                    {tool.description}
                  </p>
                  <div className="flex items-center justify-between pt-3 border-t border-[rgba(180,60,80,0.15)]">
                    <span className="text-xs text-[#695058]">
                      {tool.category}
                    </span>
                    <span className="text-xs text-[#d4607a] font-medium">
                      {tool.pricing}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
