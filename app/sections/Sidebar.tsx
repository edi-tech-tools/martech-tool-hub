"use client";
import { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Sparkles,
  ChevronDown,
  ChevronRight,
  Folder,
  BookOpen,
  FileText,
  Star,
  Layers,
} from "lucide-react";
import Link from "next/link";
import { ALL_TOOLS } from "@/data/tools";
import { BLOG_POSTS } from "@/data/blog-posts";

const CATEGORIES = Array.from(new Set(ALL_TOOLS.map((t) => t.category))).sort();

export default function Sidebar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set()
  );

  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return CATEGORIES;
    const q = searchQuery.toLowerCase();
    return CATEGORIES.filter((cat) => cat.toLowerCase().includes(q));
  }, [searchQuery]);

  const matchingTools = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase();
    return ALL_TOOLS.filter(
      (t) =>
        t.name.toLowerCase().includes(q) ||
        t.category.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  const recentArticles = useMemo(
    () =>
      [...BLOG_POSTS]
        .sort(
          (a, b) =>
            new Date(b.date).getTime() - new Date(a.date).getTime()
        )
        .slice(0, 5),
    []
  );

  const toggleCategory = useCallback((cat: string) => {
    setExpandedCategories((prev) => {
      const next = new Set(prev);
      if (next.has(cat)) {
        next.delete(cat);
      } else {
        next.add(cat);
      }
      return next;
    });
  }, []);

  const toolsForCategory = useCallback(
    (cat: string) =>
      ALL_TOOLS.filter((t) => t.category === cat).slice(0, 5),
    []
  );

  return (
    <aside className="fixed left-0 top-0 bottom-0 w-64 z-50 flex flex-col bg-[#0A1628]/95 backdrop-blur-xl border-r border-[#1E3A5F]/50">
      <div className="px-5 pt-6 pb-4 border-b border-[#1E3A5F]/30">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#E94560] to-[#FF6B81] flex items-center justify-center shadow-glow-sm">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <span className="text-base font-bold text-[#F0F4F8] group-hover:text-[#E94560] transition-colors">
            MarTech Tools Hub
          </span>
        </Link>
      </div>

      <div className="px-4 pt-4 pb-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#4A6380]" />
          <input
            type="text"
            placeholder="Search tools..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-sm bg-[#0F1D32] border border-[#1E3A5F] rounded-lg text-[#F0F4F8] placeholder:text-[#4A6380] outline-none focus:border-[#E94560] transition-colors"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto overflow-x-hidden px-4 pb-4 scrollbar-thin">
        {searchQuery.trim() && (
          <div className="mb-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#4A6380] mb-2">
              Search Results ({matchingTools.length})
            </p>
            <div className="space-y-1">
              {matchingTools.slice(0, 8).map((tool) => (
                <Link
                  key={tool.id}
                  href={`/tools/${tool.id}`}
                  className="flex items-center gap-2 px-2.5 py-2 rounded-lg text-sm text-[#8BA3BE] hover:text-[#F0F4F8] hover:bg-[#162440] transition-all"
                >
                  <div className="w-6 h-6 rounded bg-[#162440] flex items-center justify-center shrink-0">
                    <tool.icon className="w-3.5 h-3.5 text-[#E94560]" />
                  </div>
                  <span className="truncate">{tool.name}</span>
                </Link>
              ))}
              {matchingTools.length > 8 && (
                <p className="text-xs text-[#4A6380] px-2.5 py-1">
                  +{matchingTools.length - 8} more...
                </p>
              )}
            </div>
          </div>
        )}

        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <Layers className="w-4 h-4 text-[#E94560]" />
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#4A6380]">
              Categories
            </h3>
          </div>
          <div className="space-y-0.5">
            {!searchQuery.trim() && (
              <Link
                href="/"
                className="flex items-center gap-2 px-2.5 py-2 rounded-lg text-sm text-[#8BA3BE] hover:text-[#F0F4F8] hover:bg-[#162440] transition-all"
              >
                <Layers className="w-4 h-4 text-[#E94560]" />
                <span>All Tools</span>
              </Link>
            )}
            {filteredCategories.map((cat) => {
              const isExpanded = expandedCategories.has(cat);
              const tools = toolsForCategory(cat);
              return (
                <div key={cat}>
                  <button
                    onClick={() => toggleCategory(cat)}
                    className="w-full flex items-center gap-2 px-2.5 py-2 rounded-lg text-sm text-[#8BA3BE] hover:text-[#F0F4F8] hover:bg-[#162440] transition-all group"
                  >
                    {isExpanded ? (
                      <ChevronDown className="w-3.5 h-3.5 shrink-0 text-[#4A6380]" />
                    ) : (
                      <ChevronRight className="w-3.5 h-3.5 shrink-0 text-[#4A6380]" />
                    )}
                    <Folder className="w-4 h-4 shrink-0 text-[#4A6380] group-hover:text-[#E94560] transition-colors" />
                    <span className="truncate">{cat}</span>
                    <span className="ml-auto text-xs text-[#4A6380]">
                      {ALL_TOOLS.filter((t) => t.category === cat).length}
                    </span>
                  </button>
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="ml-5 pl-2 border-l border-[#1E3A5F]/50 space-y-0.5 mt-0.5">
                          {tools.map((tool) => (
                            <Link
                              key={tool.id}
                              href={`/tools/${tool.id}`}
                              className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-sm text-[#8BA3BE] hover:text-[#F0F4F8] hover:bg-[#162440] transition-all"
                            >
                              <div className="w-4 h-4 rounded bg-[#162440] flex items-center justify-center shrink-0">
                                <tool.icon className="w-2.5 h-2.5 text-[#E94560]" />
                              </div>
                              <span className="truncate">{tool.name}</span>
                              <span className="ml-auto flex items-center gap-0.5 text-[10px] text-[#E94560]">
                                <Star className="w-2.5 h-2.5 fill-[#E94560]" />
                                {tool.rating}
                              </span>
                            </Link>
                          ))}
                          {ALL_TOOLS.filter((t) => t.category === cat).length >
                            5 && (
                            <Link
                              href={`/?category=${encodeURIComponent(cat)}`}
                              className="block px-2.5 py-1.5 text-xs text-[#E94560] hover:text-[#FF6B81] transition-colors"
                            >
                              View all...
                            </Link>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <BookOpen className="w-4 h-4 text-[#E94560]" />
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#4A6380]">
              Recent Articles
            </h3>
          </div>
          <div className="space-y-1">
            {recentArticles.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="flex items-start gap-2.5 px-2.5 py-2 rounded-lg text-sm text-[#8BA3BE] hover:text-[#F0F4F8] hover:bg-[#162440] transition-all group"
              >
                <FileText className="w-4 h-4 mt-0.5 shrink-0 text-[#4A6380] group-hover:text-[#E94560] transition-colors" />
                <div className="min-w-0">
                  <p className="text-sm leading-snug line-clamp-2">
                    {post.title}
                  </p>
                  <p className="text-[10px] text-[#4A6380] mt-0.5">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="px-5 py-4 border-t border-[#1E3A5F]/30">
        <p className="text-[10px] text-[#4A6380] leading-relaxed">
          &copy; {new Date().getFullYear()} MarTech Tools Hub.
          <br />
          All rights reserved.
        </p>
      </div>
    </aside>
  );
}
