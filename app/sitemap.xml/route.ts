import { MetadataRoute } from "next";

const BLOG_SLUGS = [
  "abm-platforms-2026-6sense-demandbase-terminus-zoominfo-comparison",
  "abm-vs-demand-generation-unified-b2b-strategy-2026",
  "ai-agents-martech-revolution-2026",
  "ai-marketing-stack-2026",
  "ai-personalization-engine-buying-guide-2026",
  "ai-powered-cdp-vs-traditional-cdp-2026",
  "build-integrated-marketing-tech-stack-2026-lessons",
  "cdp-vs-dmp-comparison-2026",
  "cdp-vs-dmp-vs-data-warehouse-2026",
  "composable-martech-stack-2026",
  "content-marketing-tools-2026-canva-adobe-express-visme",
  "content-syndication-tools-buying-guide-2026",
  "conversational-ai-platforms-buying-guide-2026",
  "conversational-marketing-2026-chatbots-live-chat-lead-generation",
  "dam-tools-2026-brandfolder-vs-bynder-vs-widen-vs-adobe-aem",
  "email-marketing-2026-constant-contact-vs-campaign-monitor-vs-mailerlite",
  "hubspot-vs-salesforce-marketing-cloud-2026",
  "marketing-analytics-bi-tools-comparison-2026",
  "marketing-analytics-tools-guide-2026-ga4-mixpanel-amplitude",
  "marketing-attribution-ruler-analytics-review",
  "marketing-automation-2026-hubspot-marketo-activecampaign",
  "marketing-automation-platforms-comparison-2026",
  "martech-stack-8-essential-tools-2026",
  "martech-stack-consolidation-2026",
  "multi-channel-marketing-attribution-models-2026-comparison",
  "privacy-first-martech-stack-2026",
  "segment-vs-mparticle-vs-tealium-cdp-comparison-2026",
  "seo-ai-search-martech-2026",
  "social-media-management-tools-smb-2026",
  "tealium-cdp-2026-enterprise-review",
  "top-rated-martech-tools-g2-2026",
  "video-marketing-platforms-2026-wistia-vimeo-brightcove-vidyard-comparison",
  "cdp-implementation-practical-guide-2026",
  "ppc-management-2026-google-ads-optimization",
  "influencer-marketing-platforms-2026-comparison",
  "ab-testing-platforms-2026-vwo-optimizely-abtasty-convert-adobe-target-comparison",
  "social-media-analytics-tools-2026-comparison",
  "ecm-2026-buyers-guide-contentful-wordpress-vip-strapi-aem",
  "marketing-attribution-2026-practical-guide",
  "marketing-automation-2026-hubspot-vs-marketo-vs-pardot-vs-activecampaign",
  "ai-personalization-engines-2026-comparison",
  "cdp-vs-data-warehouse-vs-data-lake-in-2026-how-we-chose-the-right-data-architecture-for-real-time-b2",
  "behavioral-analytics-tools-2026-hotjar-lucky-orange-crazy-egg-contentsquare-comparison",
  "email-marketing-2026-ai-personalization-mailchimp-constant-contact-brevo-klaviyo",
  "crm-2026-practical-guide-b2b-marketing-teams",
  "content-personalization-tools-2026-dynamic-experiences",
  "b2b-marketing-automation-in-2026-the-stack-the-strategy-and-the-new-playbook",
  "martech-stack-optimization-2026-playbook",
  "no-code-martech-2026-building-custom-stacks",
  "martech-tool-stack-audit-2026-optimizing-roi"
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
