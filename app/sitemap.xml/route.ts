import { MetadataRoute } from "next";

const BLOG_SLUGS = [
  "martech-stack-8-essential-tools-2026",
  "hubspot-saas-growth-signals-2026",
    "ai-marketing-stack-2026",
    "salesforce-vs-hubspot-2026",
    "email-marketing-tools-comparison-2026",
    "seo-tools-guide-2026",
    "social-media-management-tools-2026",
    "abm-platforms-2026-6sense-demandbase-terminus-comparison",
    "marketing-automation-comparison-2026-hubspot-marketo-activecampaign-brevo",
    "marketing-automation-trends-2026",
    "marTech-stack-consolidation-2026",
    "cdp-vs-data-warehouse-vs-reverse-etl-2026",
    "martech-reference-sites-2026-martechtoday-g2-techcrunch",
    "ai-agents-martech-2026-hubspot-breeze-salesforce-agentforce-adobe-genstudio",
    "marketing-automation-2026-hubspot-marketo-activecampaign",
    "content-marketing-tools-2026-canva-adobe-express-visme",
] as const;

const TOOL_SLUGS = [
  "6sense",
    "activecampaign",
    "adroll",
    "ahrefs",
    "amplitude",
    "aprimo",
    "brandfolder",
    "brevo",
    "buffer",
    "bynder",
    "campaign-monitor",
    "canto",
    "canva",
    "constant-contact",
    "contentful",
    "contentsquare",
    "crazy-egg",
    "creatoriq",
    "demandbase",
    "domo",
    "emarsys",
    "freshsales",
    "google-ads",
    "google-analytics",
    "hootsuite",
    "hotjar",
    "hubspot",
    "hubspot-cms",
    "influencity",
    "kissmetrics",
    "linkedin-campaign-manager",
    "looker",
    "lucky-orange",
    "mailchimp",
    "mailerlite",
    "marketo",
    "mixpanel",
    "monday-com",
    "moz",
    "optimizely",
    "pardot",
    "pipedrive",
    "salesforce",
    "segment",
    "semrush",
    "sendgrid",
    "sprout-social",
    "tableau",
    "tealium",
    "terminus",
    "traackr",
    "unbounce",
    "upfluence",
    "vwo",
    "wordstream",
    "wrike",
    "zoho-crm",
    "zoominfo",
] as const;

const CATEGORY_SLUGS = [
  "abm",
    "analytics-and-bi",
    "cdp-and-data",
    "content-marketing",
    "crm-and-sales",
    "cro-and-testing",
    "dam",
    "email-marketing",
    "influencer-marketing",
    "marketing-analytics",
    "marketing-automation",
    "ppc-and-advertising",
    "seo",
    "social-media-management",
] as const;

export async function GET() {
  const baseUrl = "https://martech-tools.net";

  const urls: string[] = [];

  urls.push(`<url><loc>${baseUrl}</loc><changefreq>weekly</changefreq><priority>1.0</priority></url>`);
  urls.push(`<url><loc>${baseUrl}/blog</loc><changefreq>weekly</changefreq><priority>0.9</priority></url>`);
  urls.push(`<url><loc>${baseUrl}/about</loc><changefreq>monthly</changefreq><priority>0.5</priority></url>`);
  urls.push(`<url><loc>${baseUrl}/contact</loc><changefreq>monthly</changefreq><priority>0.4</priority></url>`);
  urls.push(`<url><loc>${baseUrl}/faq</loc><changefreq>monthly</changefreq><priority>0.6</priority></url>`);
  urls.push(`<url><loc>${baseUrl}/privacy</loc><changefreq>yearly</changefreq><priority>0.3</priority></url>`);
  urls.push(`<url><loc>${baseUrl}/terms</loc><changefreq>yearly</changefreq><priority>0.3</priority></url>`);
  urls.push(`<url><loc>${baseUrl}/disclosure</loc><changefreq>yearly</changefreq><priority>0.3</priority></url>`);

  for (const slug of CATEGORY_SLUGS) {
    urls.push(`<url><loc>${baseUrl}/category/${slug}</loc><changefreq>weekly</changefreq><priority>0.7</priority></url>`);
  }

  for (const slug of BLOG_SLUGS) {
    urls.push(`<url><loc>${baseUrl}/blog/${slug}</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>`);
  }

  for (const slug of TOOL_SLUGS) {
    urls.push(`<url><loc>${baseUrl}/tools/${slug}</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>`);
  }

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>`;

  return new Response(sitemap, {
    headers: { "Content-Type": "application/xml" },
  });
}
