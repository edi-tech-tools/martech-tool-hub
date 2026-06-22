import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_POSTS } from "@/data/blog-posts";
import { Calendar, Clock, User, ArrowLeft, Tag, ArrowRight } from "lucide-react";

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.title} — MarTech Tools Insights`,
    description: post.excerpt,
  };
}

function renderContent(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    if (trimmed.startsWith("## ")) {
      elements.push(
        <h2 key={i} className="text-xl md:text-2xl font-bold text-[#f5e8ea] mt-10 mb-4 tracking-tight">
          {trimmed.replace(/^##\s+/, "")}
        </h2>
      );
      i++;
      continue;
    }
    if (trimmed.startsWith("### ")) {
      elements.push(
        <h3 key={i} className="text-lg font-bold text-[#f5e8ea] mt-8 mb-3">
          {trimmed.replace(/^###\s+/, "")}
        </h3>
      );
      i++;
      continue;
    }
    if (trimmed.startsWith("---")) {
      elements.push(<hr key={i} className="my-8 border-[rgba(180,60,80,0.15)]" />);
      i++;
      continue;
    }
    if (trimmed.startsWith("**") && trimmed.endsWith("**") && trimmed.length > 6) {
      elements.push(
        <p key={i} className="text-sm font-semibold text-[#d4b8bd] mt-6 mb-2">
          {trimmed.replace(/^\*\*/, "").replace(/\*\*$/, "")}
        </p>
      );
      i++;
      continue;
    }
    if (trimmed.startsWith("*") && trimmed.includes("**")) {
      const parts = trimmed.split(/\*\*(.*?)\*\*/g);
      elements.push(
        <ul key={i} className="list-disc pl-5 space-y-1.5 my-4">
          <li className="text-sm text-[#a08088] leading-relaxed">
            {parts.map((part, idx) =>
              part.startsWith("*") ? null :
              idx % 2 === 1 ? <strong key={idx} className="text-[#d4b8bd]">{part}</strong> : part
            )}
          </li>
        </ul>
      );
      i++;
      continue;
    }
    if (trimmed.startsWith("- ")) {
      const items: React.ReactNode[] = [];
      while (i < lines.length && lines[i].trim().startsWith("- ")) {
        const li = lines[i].trim().replace(/^- /, "");
        const parts = li.split(/\*\*(.*?)\*\*/g);
        items.push(
          <li key={i} className="text-sm text-[#a08088] leading-relaxed">
            {parts.map((part, idx) =>
              idx % 2 === 1 ? <strong key={idx} className="text-[#d4b8bd]">{part}</strong> : part
            )}
          </li>
        );
        i++;
      }
      elements.push(
        <ul key={`ul-${i}`} className="list-disc pl-5 space-y-1.5 my-4">
          {items}
        </ul>
      );
      continue;
    }
    if (trimmed.startsWith("|")) {
      const rows: string[][] = [];
      while (i < lines.length && lines[i].trim().startsWith("|")) {
        rows.push(lines[i].trim().split("|").filter(Boolean).map((c) => c.trim()));
        i++;
      }
      if (rows.length > 0) {
        const hasDivider = rows.some((r) => r.every((c) => c.startsWith("---")));
        const dataRows = rows.filter((r) => !r.every((c) => c.startsWith("---")));

        if (dataRows.length > 0) {
          const headerRow = dataRows[0];
          const bodyRows = dataRows.slice(1);

          elements.push(
            <div key={`table-${i}`} className="overflow-x-auto my-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-[rgba(180,60,80,0.2)]">
                    {headerRow.map((h, hidx) => (
                      <th key={hidx} className="text-left py-3 px-3 text-[#f5e8ea] font-semibold text-xs uppercase tracking-wider first:pl-0 last:pr-0">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {bodyRows.map((row, ridx) => (
                    <tr key={ridx} className="border-b border-[rgba(180,60,80,0.06)]">
                      {row.map((cell, cidx) => (
                        <td key={cidx} className="py-2.5 px-3 text-[#a08088] text-xs first:pl-0 last:pr-0">
                          {cidx === 0 ? <span className="text-[#d4b8bd] font-medium">{cell}</span> : cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }
      }
      continue;
    }
    if (trimmed === "") {
      i++;
      continue;
    }

    const parts = trimmed.split(/\*\*(.*?)\*\*/g);
    elements.push(
      <p key={i} className="text-sm text-[#a08088] leading-relaxed my-3">
        {parts.map((part, idx) =>
          idx % 2 === 1 ? <strong key={idx} className="text-[#d4b8bd]">{part}</strong> : part
        )}
      </p>
    );
    i++;
  }

  return elements;
}

function getRelatedPosts(currentSlug: string) {
  const current = BLOG_POSTS.find((p) => p.slug === currentSlug);
  if (!current) return [];
  return BLOG_POSTS.filter(
    (p) => p.slug !== currentSlug && p.category === current.category
  ).slice(0, 3);
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const relatedPosts = getRelatedPosts(slug);

  return (
    <div className="relative min-h-screen bg-[#120a0c]">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[10%] right-[-5%] w-[35%] h-[35%] rounded-full bg-[#a0304e]/[0.03] blur-[100px]" />
      </div>

      <article className="pt-28 pb-20 px-6">
        {/* Back link */}
        <div className="max-w-[800px] mx-auto mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs text-[#a08088] hover:text-[#d4b8bd] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Insights
          </Link>
        </div>

        {/* Header */}
        <div className="max-w-[800px] mx-auto mb-12">
          <div className="flex items-center gap-3 text-[10px] text-[#695058] font-mono uppercase tracking-wider mb-4">
            <span className="text-[#d4607a] bg-[rgba(160,48,78,0.12)] px-2.5 py-1 rounded-md">
              {post.category}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {post.readTime} min read
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-[#f5e8ea] tracking-tight leading-[1.1] mb-6">
            {post.title}
          </h1>

          <p className="text-sm text-[#a08088] leading-relaxed mb-8">
            {post.excerpt}
          </p>

          <div className="flex items-center gap-4 pb-8 border-b border-[rgba(180,60,80,0.12)]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#a0304e]/20 border border-[rgba(180,60,80,0.2)] flex items-center justify-center">
                <User className="w-4 h-4 text-[#d4607a]" />
              </div>
              <div>
                <div className="text-sm font-medium text-[#f5e8ea]">{post.author}</div>
                <div className="text-[10px] text-[#a08088]">{post.authorRole}</div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#695058]">
              <Calendar className="w-3.5 h-3.5" />
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-[800px] mx-auto mb-16">
          <div className="prose-custom">
            {renderContent(post.content)}
          </div>
        </div>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="max-w-[800px] mx-auto mb-16 pb-8 border-b border-[rgba(180,60,80,0.12)]">
            <div className="flex items-center gap-2 flex-wrap">
              <Tag className="w-3.5 h-3.5 text-[#a08088]" />
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] text-[#a08088] bg-[rgba(160,48,78,0.08)] border border-[rgba(180,60,80,0.15)] px-2.5 py-1 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="max-w-[800px] mx-auto">
            <h3 className="text-base font-bold text-[#f5e8ea] mb-6">Related Insights</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedPosts.map((rp) => (
                <Link key={rp.slug} href={`/blog/${rp.slug}`} className="group">
                  <div className="rounded-xl border border-[rgba(180,60,80,0.12)] bg-[#1a1013] p-5 hover:border-[rgba(180,60,80,0.3)] transition-all h-full">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-[#a08088] mb-2">{rp.category}</div>
                    <h4 className="text-sm font-semibold text-[#f5e8ea] mb-2 line-clamp-2 group-hover:text-[#d4607a] transition-colors">
                      {rp.title}
                    </h4>
                    <div className="flex items-center justify-between mt-3">
                      <span className="text-[10px] text-[#695058]">{rp.readTime} min read</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#d4607a] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  );
}
