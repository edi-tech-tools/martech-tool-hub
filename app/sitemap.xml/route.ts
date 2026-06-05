import { MetadataRoute } from "next";

const BLOG_SLUGS = [
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
];

const TOOL_SLUGS = [
  "mailchimp",
  "salesforce",
  "semrush",
  "hubspot",
  "google-analytics",
  "hootsuite",
  "canva",
  "ahrefs",
  "constant-contact",
  "hotjar",
  "marketo",
  "google-ads",
  "optimizely",
  "monday-com",
  "wrike",
  "segment",
  "demandbase",
  "upfluence",
  "brandfolder",
  "tableau",
  "activecampaign",
  "brevo",
  "pardot",
  "moz",
  "sprout-social",
  "buffer",
  "wordstream",
  "unbounce",
  "vwo",
  "tealium",
  "mixpanel",
  "amplitude",
  "looker",
  "domo",
  "kissmetrics",
  "hubspot-cms",
  "contentful",
  "bynder",
  "canto",
  "aprimo",
  "6sense",
  "terminus",
  "zoominfo",
  "influencity",
  "traackr",
  "creatoriq",
  "campaign-monitor",
  "mailerlite",
  "sendgrid",
  "emarsys",
  "zoho-crm",
  "pipedrive",
  "freshsales",
  "adroll",
  "linkedin-campaign-manager",
  "contentsquare",
  "lucky-orange",
  "crazy-egg",
];

export async function GET() {
  const baseUrl = "https://martech-tools.net";
  
  const urls: string[] = [];
  
  // Static pages
  urls.push(`<url><loc>${baseUrl}</loc><changefreq>weekly</changefreq><priority>1.0</priority></url>`);
  urls.push(`<url><loc>${baseUrl}/blog</loc><changefreq>weekly</changefreq><priority>0.9</priority></url>`);
  urls.push(`<url><loc>${baseUrl}/about</loc><changefreq>monthly</changefreq><priority>0.5</priority></url>`);
  urls.push(`<url><loc>${baseUrl}/contact</loc><changefreq>monthly</changefreq><priority>0.4</priority></url>`);
  urls.push(`<url><loc>${baseUrl}/faq</loc><changefreq>monthly</changefreq><priority>0.6</priority></url>`);
  urls.push(`<url><loc>${baseUrl}/privacy</loc><changefreq>yearly</changefreq><priority>0.3</priority></url>`);
  urls.push(`<url><loc>${baseUrl}/terms</loc><changefreq>yearly</changefreq><priority>0.3</priority></url>`);
  
  // Blog pages
  for (const slug of BLOG_SLUGS) {
    urls.push(`<url><loc>${baseUrl}/blog/${slug}</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>`);
  }
  
  // Tool pages
  for (const slug of TOOL_SLUGS) {
    urls.push(`<url><loc>${baseUrl}/tools/${slug}</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>`);
  }
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>`;
  
  return new Response(sitemap, {
    headers: { "Content-Type": "application/xml" },
  });
}