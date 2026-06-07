import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Star,
  ArrowRight,
  CheckCircle,
  DollarSign,
  ChevronRight,
  Sparkles,
  HelpCircle,
} from "lucide-react";
import { ALL_TOOLS } from "@/data/tools";

const ALL_CATEGORIES = Array.from(new Set(ALL_TOOLS.map((t) => t.category)));

function slugify(category: string) {
  return category.toLowerCase().replace(/\s+/g, "-");
}

function deslugify(slug: string): string | undefined {
  return ALL_CATEGORIES.find((c) => slugify(c) === slug);
}

const BUYING_GUIDES: Record<string, string> = {
  "Marketing Automation":
    "When choosing a marketing automation platform, consider your primary channels, team size, and CRM integration needs. HubSpot excels for inbound marketing with its free CRM, while ActiveCampaign offers more sophisticated automation workflows. For enterprise needs, Marketo provides deep Salesforce integration. Key factors include AI-powered lead scoring, multi-channel journey orchestration, and scalability of contact tiers — pricing jumps can be significant as you grow.",
  "CRM and Sales":
    "The right CRM depends on your sales process complexity and team size. Salesforce offers the deepest customization for enterprise sales orgs, while HubSpot's free CRM is ideal for startups. Pipedrive excels at visual pipeline management for small teams. Evaluate AI-powered lead scoring, pipeline forecasting, mobile access, and API ecosystem. Consider total cost including per-user licensing and add-on modules.",
  SEO:
    "SEO tools vary in their core strengths. SEMrush provides the most comprehensive all-in-one toolkit with competitive intelligence and PPC data. Ahrefs has the best backlink index for link-building strategies. Moz Pro is more approachable for beginners. Consider your primary focus — technical audits, keyword research, content optimization, or competitive analysis — and choose accordingly.",
  "Content Marketing":
    "Content marketing platforms range from AI writing assistants to full-scale CMS solutions. Canva dominates visual content creation with its easy-to-use design tools. HubSpot CMS Hub offers deep CRM integration for personalized content. Contentful provides headless CMS flexibility for developers. Evaluate your team's technical skills, content volume, and distribution channels.",
  "Email Marketing":
    "Email marketing platforms should be evaluated on deliverability, automation depth, and scalability. Mailchimp leads for ease of use and generous free tier. Brevo offers strong value with email+SMS+chat in one platform. SendGrid is the developer choice for transactional email at scale. Compare pricing by contact count, not just monthly fee — the jump between tiers can be substantial.",
  "Analytics and BI":
    "Analytics needs vary from product analytics to enterprise BI. GA4 is free and essential for basic web analytics. Tableau offers unmatched visualization depth for enterprise reporting. Mixpanel and Amplitude excel at product analytics with behavioral cohorting. Consider your team's technical sophistication, data volume, and need for real-time vs. batch reporting.",
  "Social Media Management":
    "Social media management tools differ in their focus. Sprout Social leads for enterprise analytics and listening. Hootsuite offers the widest network support with robust approval workflows. Buffer prioritizes simplicity for small teams. Evaluate your social network mix, team size, approval workflow needs, and reporting requirements.",
  "CDP and Data":
    "Customer Data Platforms unify fragmented customer data into actionable profiles. Segment offers extensive integration libraries and developer-friendly tooling. Tealium provides enterprise-grade governance and tag management. ZoomInfo excels at B2B data enrichment. Consider your data sources, identity resolution needs, and privacy compliance requirements.",
  ABM:
    "Account-Based Marketing platforms help B2B teams focus on high-value accounts. Demandbase leads for enterprise ABM with AI-powered account scoring and ad buying. 6sense offers strong intent data for identifying in-market accounts. Terminus provides an intuitive interface for mid-market teams. Evaluate account data quality, channel orchestration, and sales-marketing alignment features.",
  "Influencer Marketing":
    "Influencer marketing platforms vary by focus. CreatorIQ offers enterprise-grade compliance and measurement. Traackr excels at relationship lifecycle management and advocacy. Upfluence provides strong e-commerce integrations with Shopify. Consider your campaign volume, creator discovery needs, and ROI measurement requirements.",
  DAM:
    "Digital Asset Management platforms centralize brand assets with governance. Brandfolder offers intuitive AI auto-tagging and sharing portals. Bynder provides strong Creative Cloud integration for creative teams. Canto emphasizes fast search and ease of adoption. Consider storage volume, user types, and integration with your creative workflow.",
  "Marketing Analytics":
    "Marketing analytics platforms help connect campaign spend to business outcomes. monday.com offers visual dashboards for campaign tracking. Wrike combines project management with performance reporting. Aprimo provides enterprise MRM with financial planning. Consider your need for attribution modeling, budget tracking, and executive reporting.",
  "PPC and Advertising":
    "PPC platforms span from self-serve ad networks to managed optimization tools. Google Ads provides the largest reach across search, display, and video. LinkedIn Campaign Manager offers unmatched B2B targeting. WordStream provides structured optimization workflows for agencies. Evaluate targeting precision, automation capabilities, and reporting depth.",
  "CRO and Testing":
    "Conversion optimization platforms combine A/B testing with behavioral insights. Optimizely leads for enterprise experimentation with feature flagging. VWO provides an all-in-one CRO suite with heatmaps and recordings. Unbounce excels at landing page optimization with AI-powered traffic routing. Consider your technical resources, test volume, and need for personalization.",
};

const FAQS: Record<string, { q: string; a: string }[]> = {
  "Marketing Automation": [
    {
      q: "What's the best marketing automation platform for small businesses?",
      a: "For small businesses, Mailchimp offers the best free tier (up to 500 contacts) with essential automation features. HubSpot Marketing Hub Starter ($18/mo) provides CRM integration that grows with you. ActiveCampaign offers more sophisticated automation at competitive pricing starting at $29/month.",
    },
    {
      q: "How much does enterprise marketing automation cost?",
      a: "Enterprise marketing automation ranges from $1,200/month (HubSpot Enterprise) to $10,000+/month (Salesforce Marketing Cloud). Costs depend on contact volume, channel breadth, and AI features. Most enterprise deployments require annual contracts and implementation services adding 20-50% to first-year costs.",
    },
    {
      q: "What features should I prioritize in marketing automation?",
      a: "Prioritize AI-powered lead scoring, multi-step journey builders, CRM integration depth, A/B testing, and comprehensive analytics. In 2026, platforms with strong AI features like predictive segmentation and content optimization provide significant competitive advantages.",
    },
  ],
  SEO: [
    {
      q: "SEMrush vs Ahrefs — which is better?",
      a: "SEMrush is better for all-in-one digital marketing (SEO + PPC + content + social), while Ahrefs excels specifically at backlink analysis and keyword research. SEMrush has a larger keyword database; Ahrefs has the most up-to-date backlink index. Many power users subscribe to both.",
    },
    {
      q: "What's the best free SEO tool?",
      a: "Google Search Console and Google Analytics 4 are essential free tools. For additional capabilities, SEMrush offers limited free access, and Ubersuggest provides basic keyword research at no cost. MozBar browser extension gives quick domain authority checks.",
    },
    {
      q: "How often should I run a technical SEO audit?",
      a: "Monthly for active sites, weekly for large e-commerce or content-heavy sites. Use tools like SEMrush Site Audit or Ahrefs Site Explorer to monitor technical health. After major site changes (redesigns, migrations, CMS updates), run an immediate audit.",
    },
  ],
  "Email Marketing": [
    {
      q: "What's the best email marketing platform for e-commerce?",
      a: "For e-commerce, Mailchimp offers strong Shopify/WooCommerce integrations and product recommendations. Klaviyo leads for mid-market e-commerce with deep purchase data integration. Omnisend provides excellent omnichannel automation for smaller stores.",
    },
    {
      q: "How important is email deliverability?",
      a: "Deliverability is the most critical factor — even the best-designed email is useless if it lands in spam. Look for platforms with dedicated IPs, authentication support (SPF, DKIM, DMARC), and transparent deliverability reporting. Mailchimp, Constant Contact, and SendGrid consistently rank highest.",
    },
    {
      q: "What's a good email open rate in 2026?",
      a: "Average open rates vary by industry: 21-25% for B2B, 15-20% for e-commerce, 25-30% for nonprofits. Click-through rates average 2.5-5%. Focus on list quality over size — a clean, engaged list of 10K outperforms a stale list of 50K every time.",
    },
  ],
  "Analytics and BI": [
    {
      q: "Is Google Analytics 4 good enough for most businesses?",
      a: "Yes, GA4 is sufficient for most SMBs and mid-market companies. It provides event-based tracking, machine learning insights, and free integration with Google Ads. However, enterprises needing advanced attribution, custom funnel analysis, or real-time dashboards may need GA4 360 ($150K/year) or a dedicated BI tool like Tableau.",
    },
    {
      q: "When should I upgrade from GA4 to a paid analytics platform?",
      a: "Consider upgrading when you need: (1) custom attribution modeling beyond GA4's data-driven model, (2) real-time data streaming with sub-minute latency, (3) A/B testing integration, (4) product analytics with behavioral cohorts, or (5) data volume exceeding GA4's free tier limits.",
    },
  ],
  "Social Media Management": [
    {
      q: "Hootsuite vs Sprout Social — which is better for agencies?",
      a: "Hootsuite is better for agencies managing many client accounts due to its wider network support, bulk scheduling, and approval workflows. Sprout Social is better for agencies focused on analytics and reporting, offering deeper insights and competitive benchmarking. Sprout's pricing is higher but its analytics justify the cost for data-driven teams.",
    },
  ],
};

function getDefaultBuyingGuide(category: string): string {
  return `When evaluating ${category.toLowerCase()} tools, consider your specific use case, team size, budget, and required integrations. Key evaluation criteria include feature completeness, ease of use, scalability, customer support, and total cost of ownership. Always take advantage of free trials to test with your actual workflows before committing.`;
}

function getDefaultFAQs(category: string): { q: string; a: string }[] {
  return [
    {
      q: `What is the best ${category.toLowerCase()} tool?`,
      a: `The best ${category.toLowerCase()} tool depends on your specific needs. Our rankings are based on verified user reviews, feature analysis, and expert evaluation. Compare the top-rated tools above to find the best fit for your organization.`,
    },
    {
      q: `How much does ${category.toLowerCase()} software cost?`,
      a: `Pricing varies widely from free tiers to enterprise plans. Most ${category.toLowerCase()} tools offer monthly or annual subscriptions with tiered pricing based on features and usage. See individual tool pages for detailed pricing information.`,
    },
    {
      q: `What features should I look for in ${category.toLowerCase()} tools?`,
      a: `Essential features include core ${category.toLowerCase()} capabilities, integration with your existing MarTech stack, reporting and analytics, security and compliance, and responsive customer support.`,
    },
  ];
}

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
  const tools = ALL_TOOLS.filter((t) => t.category === category).sort(
    (a, b) => b.rating - a.rating
  );
  return {
    title: `Best ${category} Tools in 2026 — Top ${Math.min(tools.length, 10)} Compared`,
    description: `Discover the best ${category.toLowerCase()} tools in 2026. Compare top-rated platforms with verified reviews, pricing, and expert recommendations. Find the perfect ${category.toLowerCase()} tool for your MarTech stack.`,
    keywords: [
      `best ${category.toLowerCase()} tools 2026`,
      `top ${category.toLowerCase()} tools`,
      `${category.toLowerCase()} comparison`,
      `${category.toLowerCase()} reviews`,
      `best ${category.toLowerCase()} platforms`,
    ],
    openGraph: {
      title: `Best ${category} Tools in 2026 — Top Picks & Comparison`,
      description: `Find the best ${category.toLowerCase()} tools for your MarTech stack. Expert comparisons, verified reviews, and detailed pricing for ${tools.length} leading ${category.toLowerCase()} platforms.`,
    },
  };
}

export default function BestCategoryPage({
  params,
}: {
  params: { slug: string };
}) {
  const category = deslugify(params.slug);
  if (!category) {
    notFound();
  }

  const tools = ALL_TOOLS.filter((t) => t.category === category).sort(
    (a, b) => b.rating - a.rating
  );
  const topTool = tools[0];
  const buyingGuide = BUYING_GUIDES[category] || getDefaultBuyingGuide(category);
  const faqs = FAQS[category] || getDefaultFAQs(category);

  return (
    <div className="relative pt-16 pb-20 px-6">
      <div className="max-w-[1200px] mx-auto">
        <nav className="flex items-center gap-2 text-sm text-[#4A6380] mb-8">
          <Link href="/" className="hover:text-[#3B82F6] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link
            href={`/category/${params.slug}`}
            className="hover:text-[#3B82F6] transition-colors"
          >
            {category}
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#8BA3BE]">Best {category} 2026</span>
        </nav>

        <header className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#3B82F6]/20 to-[#22D3EE]/20 flex items-center justify-center">
              <Sparkles className="w-7 h-7 text-[#22D3EE]" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-[#F0F4F8] tracking-tight">
                Best {category} Tools in 2026
              </h1>
              <p className="text-base text-[#8BA3BE] mt-1">
                Our expert picks for the top{" "}
                {tools.length > 10 ? "10" : tools.length} {category.toLowerCase()}{" "}
                platforms — compared with ratings, pricing, and key features.
              </p>
            </div>
          </div>

          {topTool && (
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#162440] border border-[#F59E0B]/30 rounded-full text-sm text-[#F59E0B]">
              <Star className="w-4 h-4 fill-[#F59E0B]" />
              Top Pick:{" "}
              <Link
                href={`/tools/${topTool.id}`}
                className="font-bold hover:text-[#F0F4F8] transition-colors underline underline-offset-2"
              >
                {topTool.name}
              </Link>
              <span className="text-[#4A6380]">— {topTool.rating}/5</span>
            </div>
          )}
        </header>

        <section className="mb-14">
          <h2 className="text-2xl font-bold text-[#F0F4F8] mb-6 flex items-center gap-2">
            <CheckCircle className="w-6 h-6 text-[#3B82F6]" />
            Head-to-Head Comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-[#1E3A5F]">
                  <th className="text-left py-3 px-4 text-[#8BA3BE] font-semibold">
                    Tool
                  </th>
                  <th className="text-left py-3 px-4 text-[#8BA3BE] font-semibold">
                    Rating
                  </th>
                  <th className="text-left py-3 px-4 text-[#8BA3BE] font-semibold hidden md:table-cell">
                    Pricing
                  </th>
                  <th className="text-left py-3 px-4 text-[#8BA3BE] font-semibold hidden lg:table-cell">
                    Reviews
                  </th>
                  <th className="text-right py-3 px-4 text-[#8BA3BE] font-semibold">
                    Details
                  </th>
                </tr>
              </thead>
              <tbody>
                {tools.slice(0, 10).map((tool, idx) => {
                  const Icon = tool.icon;
                  return (
                    <tr
                      key={tool.id}
                      className="border-b border-[#1E3A5F]/60 hover:bg-[#0F1D32]/80 transition-colors"
                    >
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-[#162440] flex items-center justify-center shrink-0">
                            <Icon className="w-4 h-4 text-[#3B82F6]" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-[#F0F4F8] whitespace-nowrap">
                                {tool.name}
                              </span>
                              {idx === 0 && (
                                <span className="text-[10px] font-bold bg-[#F59E0B]/20 text-[#F59E0B] px-1.5 py-0.5 rounded">
                                  #1
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-[#F59E0B] fill-[#F59E0B]" />
                          <span className="font-bold text-[#F0F4F8]">
                            {tool.rating}
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-[#8BA3BE] hidden md:table-cell">
                        <div className="flex items-center gap-1">
                          <DollarSign className="w-3.5 h-3.5 text-[#22D3EE]" />
                          <span>{tool.pricing}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-[#4A6380] hidden lg:table-cell">
                        {tool.reviewCount.toLocaleString()}
                      </td>
                      <td className="py-4 px-4 text-right">
                        <Link
                          href={`/tools/${tool.id}`}
                          className="inline-flex items-center gap-1 text-[#3B82F6] hover:text-[#22D3EE] transition-colors text-xs font-semibold"
                        >
                          Review <ArrowRight className="w-3 h-3" />
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold text-[#F0F4F8] mb-6">
            Detailed Reviews
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.slice(0, 6).map((tool, idx) => {
              const Icon = tool.icon;
              return (
                <Link
                  href={`/tools/${tool.id}`}
                  key={tool.id}
                  className="group bg-[#0F1D32] border border-[#1E3A5F] rounded-xl p-6 card-hover"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-lg bg-[#162440] flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6 text-[#3B82F6]" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#F59E0B] flex items-center justify-center text-[10px] font-bold text-black">
                        #{idx + 1}
                      </div>
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
                          ({tool.reviewCount.toLocaleString()})
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[#8BA3BE] leading-relaxed line-clamp-2 mb-3">
                    {tool.description}
                  </p>
                  <div className="text-xs text-[#22D3EE] font-medium mb-3">
                    {tool.pricing}
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-[#1E3A5F]">
                    <span className="text-xs text-[#4A6380] capitalize">
                      Best for: {tool.useCase.split(".")[0].slice(0, 50)}...
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="mb-14">
          <div className="bg-[#0F1D32] border border-[#1E3A5F] rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-[#F0F4F8] mb-4 flex items-center gap-2">
              <ArrowRight className="w-6 h-6 text-[#3B82F6]" />
              {category} Buying Guide
            </h2>
            <p className="text-[#8BA3BE] leading-relaxed text-base">
              {buyingGuide}
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-[#F0F4F8] mb-6 flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-[#3B82F6]" />
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="bg-[#0F1D32] border border-[#1E3A5F] rounded-xl group"
              >
                <summary className="px-6 py-4 cursor-pointer text-[#F0F4F8] font-semibold text-sm flex items-center justify-between group-open:text-[#22D3EE] transition-colors">
                  {faq.q}
                  <ChevronRight className="w-4 h-4 text-[#4A6380] group-open:rotate-90 transition-transform shrink-0 ml-4" />
                </summary>
                <div className="px-6 pb-4 text-sm text-[#8BA3BE] leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-[#162440] to-[#0F1D32] border border-[#1E3A5F] rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-xl font-bold text-[#F0F4F8] mb-2">
              Ready to find your perfect {category.toLowerCase()} tool?
            </h2>
            <p className="text-[#8BA3BE] text-sm">
              Browse all {tools.length} {category.toLowerCase()} solutions or dive into detailed reviews.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href={`/category/${params.slug}`}
              className="px-6 py-3 bg-[#0F1D32] border border-[#1E3A5F] text-[#F0F4F8] text-sm font-medium rounded-full hover:border-[#2A5080] transition-colors"
            >
              View All {category} Tools
            </Link>
            {topTool && (
              <Link
                href={`/tools/${topTool.id}`}
                className="px-6 py-3 bg-[#3B82F6] hover:bg-[#2563EB] text-white text-sm font-medium rounded-full transition-colors"
              >
                Read {topTool.name} Review
              </Link>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
