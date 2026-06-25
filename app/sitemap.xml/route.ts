import { MetadataRoute } from "next";

const BLOG_SLUGS = [
  "ai-agents-martech-revolution-2026",
  "cdp-vs-dmp-vs-data-warehouse-2026",
  "ai-marketing-stack-2026",
  "marketing-automation-2026-hubspot-marketo-activecampaign",
  "content-marketing-tools-2026-canva-adobe-express-visme",
  "martech-stack-8-essential-tools-2026",
  "dam-tools-2026-brandfolder-vs-bynder-vs-widen-vs-adobe-aem",
  "marketing-automation-platforms-comparison-2026",
  "abm-platforms-2026-6sense-demandbase-terminus-zoominfo-comparison",
  "multi-channel-marketing-attribution-models-2026-comparison",
  "seo-ai-search-martech-2026",
  "segment-vs-mparticle-vs-tealium-cdp-comparison-2026",
  "conversational-marketing-2026-chatbots-live-chat-lead-generation",
  "cdp-vs-dmp-comparison-2026",
  "email-marketing-2026-constant-contact-vs-campaign-monitor-vs-mailerlite",
  "composable-martech-stack-2026",
  "hubspot-vs-salesforce-marketing-cloud-2026",
  "privacy-first-martech-stack-2026",
  "tealium-cdp-2026-enterprise-review",
  "marketing-attribution-ruler-analytics-review",
  "social-media-management-tools-smb-2026",
  "build-integrated-marketing-tech-stack-2026-lessons",
  "ai-powered-cdp-vs-traditional-cdp-2026",
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
