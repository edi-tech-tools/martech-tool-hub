import Link from "next/link";
import { notFound } from "next/navigation";
import { Star, ArrowRight, BookOpen, Layers, ChevronRight } from "lucide-react";
import { ALL_TOOLS } from "@/data/tools";
import { BLOG_POSTS } from "@/data/blog-posts";

const ALL_CATEGORIES = Array.from(new Set(ALL_TOOLS.map((t) => t.category)));

function slugify(category: string) {
  return category.toLowerCase().replace(/\s+/g, "-");
}

function deslugify(slug: string): string | undefined {
  return ALL_CATEGORIES.find((c) => slugify(c) === slug);
}

const CATEGORY_DESCRIPTIONS: Record<string, string> = {
  "Marketing Automation": "Marketing automation platforms help businesses create, execute, and analyze multi-channel campaigns across email, social, and web. Compare the best marketing automation tools for your MarTech stack.",
  "CRM and Sales": "Customer Relationship Management (CRM) and sales software help teams manage leads, track deals, and automate sales processes. Find the right platform to accelerate your revenue operations.",
  SEO: "SEO tools empower marketers to improve organic search visibility through keyword research, backlink analysis, technical audits, and competitive intelligence. Compare the leading SEO platforms.",
  "Content Marketing": "Content marketing tools streamline the creation, distribution, and optimization of content assets. From AI-powered writing to CMS platforms, discover tools that amplify your content strategy.",
  "Email Marketing": "Email marketing platforms enable targeted, automated email campaigns with deliverability optimization, segmentation, and performance analytics. Compare the best solutions for your business.",
  "Analytics and BI": "Analytics and business intelligence tools transform raw data into actionable insights through visualization, cohort analysis, and predictive modeling. Find the right analytics platform.",
  "Social Media Management": "Social media management platforms centralize publishing, engagement, listening, and analytics across social networks. Compare tools to streamline your social strategy.",
  "CDP and Data": "Customer Data Platforms (CDPs) unify customer data from multiple sources into single, actionable profiles for personalized marketing and analytics. Compare the leading CDP solutions.",
  ABM: "Account-Based Marketing (ABM) platforms help B2B teams identify, engage, and convert high-value target accounts through coordinated multi-channel campaigns.",
  "Influencer Marketing": "Influencer marketing platforms enable brands to discover, manage, and measure creator partnerships at scale. Compare tools for influencer discovery, campaign management, and ROI tracking.",
  DAM: "Digital Asset Management (DAM) platforms centralize storage, organization, and distribution of brand assets while maintaining governance and brand consistency.",
  "Marketing Analytics": "Marketing analytics platforms provide cross-channel performance reporting, attribution modeling, and campaign ROI analysis to optimize marketing spend and strategy.",
  "PPC and Advertising": "PPC and advertising platforms manage paid search, display, social, and video ad campaigns with AI-powered bidding, audience targeting, and performance optimization.",
  "CRO and Testing": "Conversion Rate Optimization (CRO) and testing platforms enable data-driven experimentation through A/B testing, multivariate testing, personalization, and behavioral analytics.",
};

const CATEGORY_STATS = ALL_CATEGORIES.reduce(
  (acc, cat) => {
    const tools = ALL_TOOLS.filter((t) => t.category === cat);
    const avgRating =
      tools.reduce((sum, t) => sum + t.rating, 0) / tools.length;
    acc[cat] = {
      count: tools.length,
      avgRating: Math.round(avgRating * 10) / 10,
    };
    return acc;
  },
  {} as Record<string, { count: number; avgRating: number }>
);

export function generateStaticParams() {
  return ALL_CATEGORIES.map((cat) => ({
    slug: slugify(cat),
  }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const category = deslugify(params.slug);
  if (!category) {
    return { title: "Category Not Found" };
  }
  const stats = CATEGORY_STATS[category];
  return {
    title: `Best ${category} Tools in 2026 — ${stats.count} Tools Compared`,
    description:
      CATEGORY_DESCRIPTIONS[category] ||
      `Compare the best ${category} tools and software. Browse ${stats.count} tools with reviews, ratings, and pricing.`,
    keywords: [
      `best ${category.toLowerCase()} tools`,
      `${category.toLowerCase()} software`,
      `${category.toLowerCase()} platforms`,
      `${category.toLowerCase()} comparison`,
      `marTech ${category.toLowerCase()}`,
    ],
    openGraph: {
      title: `Best ${category} Tools in 2026 — ${stats.count} Tools Compared`,
      description: `Compare ${stats.count} top-rated ${category} tools. Read verified reviews, compare pricing, and find the perfect tool for your MarTech stack.`,
    },
  };
}

export default function CategoryPage({
  params,
}: {
  params: { slug: string };
}) {
  const category = deslugify(params.slug);
  if (!category) {
    notFound();
  }

  const tools = ALL_TOOLS.filter((t) => t.category === category);
  const relatedPosts = BLOG_POSTS.filter(
    (p) =>
      p.tags.some(
        (t) => t.toLowerCase().includes(category.toLowerCase())
      ) || p.category.toLowerCase().includes(category.toLowerCase())
  ).slice(0, 3);

  const stats = CATEGORY_STATS[category];
  const description =
    CATEGORY_DESCRIPTIONS[category] ||
    `Compare top ${category.toLowerCase()} tools for your marketing technology stack.`;

  return (
    <div className="relative pt-16 pb-20 px-6">
      <div className="max-w-[1200px] mx-auto">
        <nav className="flex items-center gap-2 text-sm text-[#4A6380] mb-8">
          <Link href="/" className="hover:text-[#3B82F6] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#8BA3BE]">{category} Tools</span>
        </nav>

        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-[#162440] flex items-center justify-center">
              <Layers className="w-6 h-6 text-[#3B82F6]" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-[#F0F4F8] tracking-tight">
                Best {category} Tools
              </h1>
              <p className="text-[#8BA3BE] mt-1 text-base">
                {stats.count} tool{stats.count !== 1 ? "s" : ""} ·{" "}
                <span className="inline-flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 text-[#F59E0B] fill-[#F59E0B]" />{" "}
                  Avg. {stats.avgRating}/5
                </span>
              </p>
            </div>
          </div>
          <p className="text-[#8BA3BE] leading-relaxed max-w-3xl text-base">
            {description}
          </p>
        </header>

        <div className="flex flex-wrap gap-3 mb-10">
          <Link
            href={`/best/${params.slug}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#3B82F6] hover:bg-[#2563EB] text-white text-sm font-medium rounded-full transition-colors"
          >
            View Best {category} Tools 2026 <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <section>
          <h2 className="text-2xl font-bold text-[#F0F4F8] mb-6">
            All {category} Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool) => {
              const Icon = tool.icon;
              return (
                <Link
                  href={`/tools/${tool.id}`}
                  key={tool.id}
                  className="group bg-[#0F1D32] border border-[#1E3A5F] rounded-xl p-6 card-hover"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-[#162440] flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                      <Icon className="w-6 h-6 text-[#3B82F6]" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-bold text-[#F0F4F8] group-hover:text-[#3B82F6] transition-colors truncate">
                        {tool.name}
                      </h3>
                      <div className="flex items-center gap-1 mt-1">
                        <Star className="w-3.5 h-3.5 text-[#F59E0B] fill-[#F59E0B]" />
                        <span className="text-xs font-bold text-[#F0F4F8]">
                          {tool.rating}
                        </span>
                        <span className="text-xs text-[#4A6380]">
                          ({tool.reviewCount.toLocaleString()} reviews)
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[#8BA3BE] leading-relaxed line-clamp-2 mb-4">
                    {tool.description}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-[#1E3A5F]">
                    <span className="text-xs text-[#4A6380]">{tool.pricing}</span>
                    <span className="text-sm text-[#3B82F6] font-semibold group-hover:text-[#22D3EE] transition-colors flex items-center">
                      View Details <ArrowRight className="ml-1 w-4 h-4" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {relatedPosts.length > 0 && (
          <section className="mt-16">
            <div className="flex items-center gap-2 mb-6">
              <BookOpen className="w-5 h-5 text-[#F59E0B]" />
              <h2 className="text-xl font-bold text-[#F0F4F8]">
                Related Guides
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {relatedPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-[#0F1D32] border border-[#1E3A5F] rounded-xl p-5 card-hover"
                >
                  <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-[#3B82F6] bg-[#162440] px-2 py-0.5 rounded mb-3">
                    {post.category}
                  </span>
                  <h3 className="font-bold text-[#F0F4F8] group-hover:text-[#3B82F6] transition-colors leading-snug line-clamp-2 mb-2">
                    {post.title}
                  </h3>
                  <p className="text-xs text-[#8BA3BE] line-clamp-2">
                    {post.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
