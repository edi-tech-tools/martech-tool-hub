"use client";

import { useState, useMemo } from "react";
import {
  Search,
  Star,
  ArrowRight,
  BookOpen,
  Layers,
  Sparkles,
  Calendar,
  TrendingUp,
  ChevronRight,
  BarChart3,
  Award,
  Zap,
  Users,
  Database,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";
import { ALL_TOOLS } from "@/data/tools";
import { BLOG_POSTS } from "@/data/blog-posts";

const CATEGORIES = Array.from(new Set(ALL_TOOLS.map((t) => t.category)));

function slugify(category: string) {
  return category.toLowerCase().replace(/\s+/g, "-");
}

function StarRating({ rating, size = "sm" }: { rating: number; size?: "sm" | "xs" }) {
  const starSize = size === "sm" ? "w-4 h-4" : "w-3 h-3";
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`${starSize} ${
            star <= Math.round(rating)
              ? "text-[#F59E0B] fill-[#F59E0B]"
              : "text-[#2A3A5C]"
          }`}
        />
      ))}
    </div>
  );
}

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredTools = ALL_TOOLS.filter((tool) => {
    const matchesSearch =
      tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || tool.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Trending tools: top 8 by rating (MarTech exclusive — trending ranking table)
  const trendingTools = useMemo(
    () => [...ALL_TOOLS].sort((a, b) => b.rating - a.rating).slice(0, 8),
    []
  );

  // Latest blog posts
  const latestPosts = useMemo(
    () =>
      [...BLOG_POSTS]
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 3),
    []
  );

  // Top 4 categories by tool count
  const topCategories = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const t of ALL_TOOLS) {
      counts[t.category] = (counts[t.category] || 0) + 1;
    }
    return Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 4)
      .map(([cat]) => cat);
  }, []);

  // Category stats for bottom strip
  const categoryStats = useMemo(() => {
    const stats: Record<string, { count: number; avgRating: number }> = {};
    for (const t of ALL_TOOLS) {
      if (!stats[t.category]) stats[t.category] = { count: 0, avgRating: 0 };
      stats[t.category].count++;
      stats[t.category].avgRating += t.rating;
    }
    for (const key of Object.keys(stats)) {
      stats[key].avgRating = Math.round((stats[key].avgRating / stats[key].count) * 10) / 10;
    }
    return Object.entries(stats).sort((a, b) => b[1].count - a[1].count);
  }, []);

  return (
    <div className="relative">
      {/* ========== HERO ========== */}
      <section className="relative pt-16 pb-16 md:pt-20 md:pb-20 px-6">
        <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0F1A2E] border border-[#1E3A5F] mb-8">
            <Database className="w-4 h-4 text-[#00E5FF]" />
            <span className="text-sm font-medium text-[#00E5FF]">
              {ALL_TOOLS.length} MarTech Tools Analyzed
            </span>
            <span className="mx-2 text-[#1E3A5F]">|</span>
            <span className="text-sm font-medium text-[#F59E0B]">
              {BLOG_POSTS.length} Market Reports
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-[#E8F0FE] tracking-tight leading-[1.05] mb-6 max-w-3xl">
            Your Marketing Technology Stack,{" "}
            <span
              className="bg-gradient-to-r from-[#1E90FF] to-[#00E5FF] bg-clip-text text-transparent"
              style={{ textShadow: "0 0 40px rgba(30,144,255,0.3)" }}
            >
              Analyzed
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-[#8099B8] max-w-2xl mb-10 leading-relaxed">
            Data-driven MarTech tool reviews, competitive rankings, and market
            analysis. Compare 76 marketing platforms and build your ideal tech stack.
          </p>

          {/* Search Bar */}
          <div className="w-full max-w-[640px] flex items-center relative">
            <div className="w-full flex items-center rounded-full border border-[#1E3A5F] bg-[#0F1A2E] transition-all duration-300 focus-within:border-[#1E90FF] focus-within:shadow-[0_0_20px_rgba(30,144,255,0.15)]">
              <Search className="ml-5 w-5 h-5 text-[#5A6E8A] flex-shrink-0" />
              <input
                type="search"
                placeholder="Search tools, categories, or features..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 py-4 px-3 bg-transparent text-[#E8F0FE] placeholder:text-[#5A6E8A] outline-none text-base"
              />
              <Link
                href={filteredTools.length > 0 ? `/tools/${filteredTools[0].id}` : "/"}
                className="mr-2 px-6 py-2.5 bg-[#1E90FF] hover:bg-[#1873CC] text-white text-sm font-medium rounded-full transition-colors flex-shrink-0"
              >
                Search
              </Link>
            </div>
          </div>

          {/* Category Pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-2 max-w-2xl">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-3.5 py-1.5 rounded-full border text-sm transition-colors ${
                !selectedCategory
                  ? "bg-[#1E90FF] text-white border-[#1E90FF]"
                  : "bg-[#0F1A2E] text-[#8099B8] border-[#1E3A5F] hover:text-[#E8F0FE] hover:border-[#2A5080]"
              }`}
            >
              All
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(selectedCategory === cat ? null : cat)}
                className={`px-3.5 py-1.5 rounded-full border text-sm transition-colors ${
                  selectedCategory === cat
                    ? "bg-[#1E90FF] text-white border-[#1E90FF]"
                    : "bg-[#0F1A2E] text-[#8099B8] border-[#1E3A5F] hover:text-[#E8F0FE] hover:border-[#2A5080]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ========== TRENDING TOOLS RANKING TABLE (MarTech exclusive — G2/Capterra style leaderboard) ========== */}
      <section className="relative pb-16 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1E90FF]/20 to-[#00E5FF]/20 flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-[#00E5FF]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#E8F0FE]">
                  📊 MarTech Trend Ranking
                </h2>
                <p className="text-sm text-[#8099B8]">
                  Top-rated marketing tools by market score
                </p>
              </div>
            </div>
            <Link
              href={`/category/${slugify(CATEGORIES[0])}`}
              className="hidden md:flex items-center gap-1 text-sm text-[#1E90FF] hover:text-[#00E5FF] transition-colors"
            >
              View Full Rankings <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Ranking Table */}
          <div className="overflow-x-auto rounded-xl border border-[#1E3A5F] bg-[#0F1A2E]">
            <table className="w-full min-w-[700px]">
              <thead>
                <tr className="border-b border-[#1E3A5F] bg-[#152240]">
                  <th className="py-3.5 px-5 text-left text-xs font-semibold uppercase tracking-wider text-[#5A6E8A] w-12">
                    Rank
                  </th>
                  <th className="py-3.5 px-4 text-left text-xs font-semibold uppercase tracking-wider text-[#5A6E8A]">
                    Tool
                  </th>
                  <th className="py-3.5 px-4 text-left text-xs font-semibold uppercase tracking-wider text-[#5A6E8A] hidden sm:table-cell">
                    Category
                  </th>
                  <th className="py-3.5 px-4 text-left text-xs font-semibold uppercase tracking-wider text-[#5A6E8A]">
                    Rating
                  </th>
                  <th className="py-3.5 px-4 text-right text-xs font-semibold uppercase tracking-wider text-[#5A6E8A] hidden md:table-cell">
                    Pricing
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1E3A5F]/60">
                {trendingTools.map((tool, idx) => {
                  const Icon = tool.icon;
                  return (
                    <tr
                      key={`rank-${tool.id}`}
                      className="group hover:bg-[#152240] transition-colors cursor-pointer"
                      onClick={() => (window.location.href = `/tools/${tool.id}`)}
                    >
                      <td className="py-3.5 px-5">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                            idx === 0
                              ? "bg-[#F59E0B] text-[#0A0E17]"
                              : idx === 1
                              ? "bg-[#8099B8]/30 text-[#8099B8]"
                              : idx === 2
                              ? "bg-[#CD7F32]/30 text-[#CD7F32]"
                              : "bg-[#0A0E17] text-[#5A6E8A] border border-[#1E3A5F]"
                          }`}
                        >
                          {idx + 1}
                        </div>
                      </td>
                      <td className="py-3.5 px-4">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-lg bg-[#0A0E17] border border-[#1E3A5F] flex items-center justify-center group-hover:border-[#1E90FF] transition-colors shrink-0">
                            <Icon className="w-4.5 h-4.5 text-[#1E90FF]" />
                          </div>
                          <div>
                            <span className="font-semibold text-[#E8F0FE] group-hover:text-[#1E90FF] transition-colors text-sm">
                              {tool.name}
                            </span>
                            <span className="block sm:hidden text-[10px] text-[#5A6E8A] mt-0.5">
                              {tool.category}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="py-3.5 px-4 hidden sm:table-cell">
                        <span className="inline-block text-[11px] font-medium text-[#00E5FF] bg-[#0A0E17] border border-[#1E3A5F] px-2.5 py-0.5 rounded-full">
                          {tool.category}
                        </span>
                      </td>
                      <td className="py-3.5 px-4">
                        <div className="flex items-center gap-2">
                          <StarRating rating={tool.rating} size="xs" />
                          <span className="text-sm font-semibold text-[#E8F0FE]">
                            {tool.rating}
                          </span>
                        </div>
                      </td>
                      <td className="py-3.5 px-4 text-right hidden md:table-cell">
                        <span className="text-sm text-[#8099B8]">{tool.pricing}</span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Mobile View All */}
          <div className="mt-6 text-center md:hidden">
            <Link
              href={`/category/${slugify(CATEGORIES[0])}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0F1A2E] border border-[#1E3A5F] rounded-full text-sm text-[#1E90FF] hover:text-[#00E5FF] transition-colors"
            >
              View Full Rankings <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========== CATEGORY DIVISIONS (G2-style — 4 categories, 4 tools each) ========== */}
      {topCategories.map((cat) => {
        const categoryTools = ALL_TOOLS.filter((t) => t.category === cat).slice(0, 4);
        return (
          <section key={cat} className="relative pb-16 px-6">
            <div className="max-w-[1200px] mx-auto">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-bold text-[#E8F0FE]">{cat}</h2>
                  <span className="text-xs text-[#5A6E8A] bg-[#0F1A2E] border border-[#1E3A5F] px-2 py-0.5 rounded-full">
                    {ALL_TOOLS.filter((t) => t.category === cat).length} tools
                  </span>
                </div>
                <Link
                  href={`/category/${slugify(cat)}`}
                  className="flex items-center gap-1 text-sm text-[#1E90FF] hover:text-[#00E5FF] transition-colors"
                >
                  View All <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {categoryTools.map((tool) => {
                  const Icon = tool.icon;
                  return (
                    <Link
                      href={`/tools/${tool.id}`}
                      key={`${cat}-${tool.id}`}
                      className="group bg-[#0F1A2E] border border-[#1E3A5F] rounded-xl p-4 hover:border-[#1E90FF] transition-all hover:shadow-[0_0_20px_rgba(30,144,255,0.08)]"
                    >
                      <div className="flex items-center gap-3 mb-2.5">
                        <div className="w-8 h-8 rounded-lg bg-[#0A0E17] border border-[#1E3A5F] flex items-center justify-center group-hover:border-[#1E90FF] transition-colors shrink-0">
                          <Icon className="w-4 h-4 text-[#1E90FF]" />
                        </div>
                        <h3 className="font-semibold text-[#E8F0FE] text-sm truncate group-hover:text-[#1E90FF] transition-colors">
                          {tool.name}
                        </h3>
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <StarRating rating={tool.rating} size="xs" />
                        <span className="text-xs font-medium text-[#8099B8]">
                          {tool.rating}
                        </span>
                      </div>
                      <p className="text-xs text-[#5A6E8A] leading-relaxed line-clamp-1">
                        {tool.description}
                      </p>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}

      {/* ========== ALL TOOLS GRID ========== */}
      <section className="relative pb-20 px-6" id="all-tools">
        <div className="max-w-[1200px] mx-auto">
          {/* Section Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-[2rem] font-bold text-[#E8F0FE] tracking-tight">
                {selectedCategory ? `${selectedCategory} Tools` : "All MarTech Tools"}
              </h2>
              <p className="text-[#8099B8] mt-1 text-base">
                {filteredTools.length} tool{filteredTools.length !== 1 ? "s" : ""} found
              </p>
            </div>
            {/* Filter dropdown area could go here */}
          </div>

          {/* Grid */}
          {filteredTools.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredTools.map((tool) => {
                const Icon = tool.icon;
                return (
                  <Link href={`/tools/${tool.id}`} key={tool.id} className="group">
                    <article className="bg-[#0F1A2E] border border-[#1E3A5F] rounded-xl p-4 hover:border-[#1E90FF] transition-all hover:shadow-[0_0_20px_rgba(30,144,255,0.08)] h-full flex flex-col">
                      {/* Top row: icon + rating */}
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2.5">
                          <div className="w-9 h-9 rounded-lg bg-[#0A0E17] border border-[#1E3A5F] flex items-center justify-center group-hover:border-[#1E90FF] transition-colors shrink-0">
                            <Icon className="w-4.5 h-4.5 text-[#1E90FF]" />
                          </div>
                          <div>
                            <h3 className="text-sm font-bold text-[#E8F0FE] group-hover:text-[#1E90FF] transition-colors leading-tight">
                              {tool.name}
                            </h3>
                            <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-[#00E5FF] mt-0.5">
                              {tool.category}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 bg-[#0A0E17] px-2 py-1 rounded-md border border-[#1E3A5F] shrink-0">
                          <Star className="w-3 h-3 text-[#F59E0B] fill-[#F59E0B]" />
                          <span className="text-xs font-semibold text-[#E8F0FE]">
                            {tool.rating}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-xs text-[#8099B8] leading-relaxed line-clamp-2 mb-3 flex-grow">
                        {tool.description}
                      </p>

                      {/* Bottom row */}
                      <div className="flex items-center justify-between pt-3 border-t border-[#1E3A5F]">
                        <span className="text-[11px] text-[#5A6E8A]">
                          {tool.reviewCount.toLocaleString()} reviews
                        </span>
                        <span className="text-xs text-[#1E90FF] font-medium group-hover:text-[#00E5FF] transition-colors flex items-center gap-1">
                          Compare <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </article>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-lg text-[#8099B8]">No tools found matching your search.</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory(null);
                }}
                className="mt-4 px-5 py-2 text-sm font-medium text-white bg-[#1E90FF] rounded-lg hover:bg-[#1873CC] transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ========== LATEST MARKET REPORTS / BLOG ========== */}
      <section className="relative pb-20 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1E90FF]/20 to-[#00E5FF]/20 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-[#00E5FF]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#E8F0FE]">Market Reports & Analysis</h2>
                <p className="text-sm text-[#8099B8]">
                  Data-driven MarTech comparisons and buying guides
                </p>
              </div>
            </div>
            <Link
              href="/blog"
              className="hidden md:flex items-center gap-1 text-sm text-[#1E90FF] hover:text-[#00E5FF] transition-colors"
            >
              View All Reports <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                <article className="bg-[#0F1A2E] border border-[#1E3A5F] rounded-xl p-6 hover:border-[#1E90FF] transition-all h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#00E5FF] bg-[#0A0E17] border border-[#1E3A5F] px-2.5 py-1 rounded-md">
                      {post.category}
                    </span>
                    <span className="text-xs text-[#5A6E8A]">{post.readTime} min read</span>
                  </div>
                  <h3 className="font-bold text-[#E8F0FE] mb-3 group-hover:text-[#1E90FF] transition-colors leading-snug line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-[#8099B8] leading-relaxed flex-grow line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 mt-4 pt-4 border-t border-[#1E3A5F] text-xs text-[#5A6E8A]">
                    <Calendar className="w-3.5 h-3.5" />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                    <span className="mx-1">·</span>
                    {post.author}
                  </div>
                </article>
              </Link>
            ))}
          </div>

          <div className="mt-6 text-center md:hidden">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0F1A2E] border border-[#1E3A5F] rounded-full text-sm text-[#1E90FF] hover:text-[#00E5FF] transition-colors"
            >
              View All Reports <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========== MARKET STATISTICS ========== */}
      <section className="relative pb-20 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="bg-gradient-to-r from-[#0F1A2E] via-[#152240] to-[#0F1A2E] border border-[#1E3A5F] rounded-2xl p-8 md:p-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-3xl md:text-4xl font-extrabold text-[#E8F0FE]">
                  {ALL_TOOLS.length}
                </p>
                <p className="text-sm text-[#8099B8] mt-1">Tools Reviewed</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-extrabold text-[#E8F0FE]">
                  {BLOG_POSTS.length}
                </p>
                <p className="text-sm text-[#8099B8] mt-1">Market Reports</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-extrabold text-[#E8F0FE]">
                  {CATEGORIES.length}
                </p>
                <p className="text-sm text-[#8099B8] mt-1">Categories</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-extrabold text-[#E8F0FE]">
                  {ALL_TOOLS.reduce((sum, t) => sum + t.reviewCount, 0).toLocaleString()}
                </p>
                <p className="text-sm text-[#8099B8] mt-1">Total Reviews</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
