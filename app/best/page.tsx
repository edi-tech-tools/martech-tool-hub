"use client";

import { useMemo } from "react";
import Link from "next/link";
import { ALL_TOOLS } from "@/data/tools";
import { ArrowRight, ChevronRight, Star, Sparkles } from "lucide-react";

function slugify(category: string) {
  return category.toLowerCase().replace(/\s+/g, "-");
}

export default function BestPage() {
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
    return [...m.entries()]
      .map(([name, data]) => ({ name, ...data }))
      .sort((a, b) => b.count - a.count);
  }, []);

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
          <span className="text-[#a08088]">Best Tools 2026</span>
        </nav>

        <header className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#3B82F6]/20 to-[#22D3EE]/20 flex items-center justify-center">
              <Sparkles className="w-7 h-7 text-[#d4607a]" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-[#f5e8ea] tracking-tight">
                Best MarTech Tools in 2026
              </h1>
              <p className="text-base text-[#a08088] mt-1">
                Expert-curated rankings and comparisons across {categories.length} marketing technology categories.
                Find the perfect tools for your stack.
              </p>
            </div>
          </div>
        </header>

        <section>
          <h2 className="text-2xl font-bold text-[#f5e8ea] mb-6">
            Browse Categories
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
                  {cat.count} tool{cat.count !== 1 ? "s" : ""} compared
                </p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
