import type { Metadata } from "next";
import Link from "next/link";
import { BLOG_POSTS } from "@/data/blog-posts";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Insights — MarTech Tools",
  description:
    "Data-driven MarTech insights, comparisons, and strategies from the MarTech Tools studio in Leeds. BI-grounded analysis of marketing technology tools.",
};

const CATEGORIES = Array.from(new Set(BLOG_POSTS.map((post) => post.category)));

export default function BlogPage() {
  const sortedPosts = [...BLOG_POSTS].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="relative min-h-screen bg-[#120a0c] pt-28 pb-20 px-6">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[10%] left-[-5%] w-[40%] h-[40%] rounded-full bg-[#a0304e]/[0.03] blur-[100px]" />
      </div>

      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(180,60,80,0.2)] bg-[rgba(160,48,78,0.08)] mb-6">
            <span className="text-[10px] font-mono tracking-[0.15em] text-[#d4607a] uppercase">Insights</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-[#f5e8ea] tracking-tight mb-3">
            MarTech <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4607a] to-[#c9a84c]">Intelligence</span>
          </h1>
          <p className="text-base text-[#a08088] max-w-2xl mx-auto leading-relaxed">
            Data-driven comparisons, benchmarks, and analysis from the MarTech Tools studio.
            Every insight grounded in Business Intelligence methodology.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {["All", ...CATEGORIES].map((cat) => (
            <a
              key={cat}
              href={cat === "All" ? "/blog" : `/blog?category=${cat}`}
              className="px-3.5 py-1.5 rounded-full border border-[rgba(180,60,80,0.2)] bg-[#1a1013] text-xs text-[#a08088] hover:text-[#f5e8ea] hover:border-[rgba(180,60,80,0.4)] transition-colors"
            >
              {cat}
            </a>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sortedPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group"
            >
              <article className="rounded-xl border border-[rgba(180,60,80,0.12)] bg-[#1a1013] p-6 hover:border-[rgba(180,60,80,0.3)] transition-all h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#d4607a] bg-[rgba(160,48,78,0.12)] px-2.5 py-1 rounded-md">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-[10px] text-[#695058]">
                    <Clock className="w-3 h-3" />
                    {post.readTime} min read
                  </div>
                </div>

                <h2 className="text-base font-bold text-[#f5e8ea] mb-3 group-hover:text-[#d4607a] transition-colors leading-snug">
                  {post.title}
                </h2>

                <p className="text-xs text-[#a08088] mb-4 leading-relaxed flex-grow line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-[rgba(180,60,80,0.08)]">
                  <div className="flex items-center gap-2 text-[10px] text-[#695058]">
                    <User className="w-3 h-3" />
                    {post.author}
                    <span className="mx-1">·</span>
                    <Calendar className="w-3 h-3" />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-[#d4607a] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
