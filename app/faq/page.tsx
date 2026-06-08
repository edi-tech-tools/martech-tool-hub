"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is MarTech (Marketing Technology)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MarTech, short for Marketing Technology, refers to the software platforms, tools, and technologies that marketers use to plan, execute, measure, and optimize their marketing campaigns and strategies. The MarTech landscape includes everything from email marketing platforms and CRM systems to analytics tools, content management systems, advertising platforms, and AI-powered personalization engines. As of 2026, there are over 14,000 MarTech solutions across more than 50 categories.",
      },
    },
    {
      "@type": "Question",
      name: "What are the main categories in a marketing technology stack?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A modern marketing technology stack typically includes: CRM (Customer Relationship Management), Email Marketing platforms, Marketing Automation, Analytics and BI tools, SEO platforms, Social Media Management tools, Content Management Systems (CMS), Advertising and Programmatic platforms, Customer Data Platforms (CDP), Digital Asset Management (DAM), ABM (Account-Based Marketing) platforms, and increasingly AI-powered tools for content generation, personalization, and predictive analytics. Most businesses use 10-30+ tools in their MarTech stack depending on size and industry.",
      },
    },
    {
      "@type": "Question",
      name: "How do I build an effective MarTech stack?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Building an effective MarTech stack starts with defining your marketing goals and mapping them to required capabilities. Start with foundational tools (CRM, email marketing, analytics), then add specialized tools as needs grow. Key principles: prioritize integrations between tools to avoid data silos, start with all-in-one platforms if you are a small team, scale with best-of-breed as you grow, audit your stack quarterly to remove unused tools, and ensure your team has the skills to actually use each tool you adopt. The goal is a coherent stack, not the largest one.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between Marketing Automation, CRM, and CDP?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CRM (Customer Relationship Management) manages your existing customer interactions, pipeline, and sales data. Marketing Automation focuses on executing, automating, and measuring marketing campaigns across channels like email, social, and ads. CDP (Customer Data Platform) unifies customer data from multiple sources into a single, persistent customer profile for segmentation and activation. In practice: CRM manages relationships, Marketing Automation manages campaigns, and CDP manages unified customer data. Many modern platforms blur these lines, but understanding the core distinction helps avoid overbuying.",
      },
    },
    {
      "@type": "Question",
      name: "What are the best email marketing tools for 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Top email marketing tools in 2026 include Mailchimp (best for small businesses and ease of use), HubSpot (best for integrated CRM plus email), ActiveCampaign (best for automation capabilities), ConvertKit (best for creators and publishers), Brevo/Sendinblue (best for transactional emails), and Klaviyo (best for e-commerce). For enterprise, Salesforce Marketing Cloud and Oracle Eloqua remain dominant. The right choice depends on your list size, automation needs, budget, and integration requirements with your existing stack.",
      },
    },
    {
      "@type": "Question",
      name: "How do I choose the right SEO tools for my business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Choosing the right SEO tool depends on your specific needs. For comprehensive SEO platforms, Ahrefs, Semrush, and Moz are the top contenders. Ahrefs excels at backlink analysis and keyword research, Semrush is strongest for competitive analysis and PPC integration, and Moz offers solid beginner-friendly features. For technical SEO, Screaming Frog and Sitebulb are essential. For local SEO, BrightLocal and Whitespark lead the market. Start with one comprehensive tool (Ahrefs or Semrush) and add specialized tools as your SEO program matures.",
      },
    },
    {
      "@type": "Question",
      name: "How do social media management tools compare?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Social media management tools vary by features and target audience. Hootsuite is the most established with broad platform support. Buffer is simplest for small teams focused on scheduling. Sprout Social offers the best social listening and analytics. Later is strongest for visual content and Instagram. Agorapulse excels at community management and reporting. Sendible is great for agencies managing multiple clients. Key factors to compare: supported platforms, scheduling capabilities, analytics depth, social listening, team collaboration, and price per user.",
      },
    },
    {
      "@type": "Question",
      name: "What is ABM (Account-Based Marketing) and who needs it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Account-Based Marketing (ABM) is a B2B strategy where marketing and sales teams coordinate to target specific high-value accounts with personalized campaigns, rather than casting a wide net. ABM platforms like Demandbase, 6sense, Terminus, and Madison Logic help identify target accounts, orchestrate personalized multi-channel campaigns, and measure account-level engagement. ABM is ideal for B2B companies with high average contract values ($50K+), long sales cycles, and a clear Ideal Customer Profile.",
      },
    },
    {
      "@type": "Question",
      name: "What marketing analytics tools should I consider?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Marketing analytics tools range from all-in-one platforms to specialized solutions. Google Analytics 4 remains the standard for web analytics. Adobe Analytics offers enterprise-grade capabilities. Mixpanel and Amplitude are best for product analytics. HubSpot and Salesforce provide integrated marketing analytics with their CRM platforms. For attribution modeling, Northbeam and Rockerbox lead the category. For dashboards, Looker (Google), Tableau, and Power BI are top choices. Most teams use 2-3 analytics tools that work together for a complete picture.",
      },
    },
    {
      "@type": "Question",
      name: "What content marketing tools are recommended?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Content marketing tools span creation, management, and distribution. For content planning and strategy, CoSchedule and Airtable are popular. For content creation, Canva (design), Jasper and Copy.ai (AI writing), and Grammarly (editing) are widely used. For CMS, WordPress, Contentful, and Webflow lead. For content distribution, tools like BuzzSumo, Quuu, and Outbrain help. For content analytics, Google Search Console, Ahrefs, and ContentKing provide SEO performance data. The key is building a workflow that connects planning, creation, publishing, and measurement.",
      },
    },
    {
      "@type": "Question",
      name: "What are influencer marketing platforms and how do they work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Influencer marketing platforms help brands discover, vet, manage, and measure influencer partnerships. Top platforms include Aspire, Upfluence, CreatorIQ, Grin, and LTK (formerly rewardStyle). These platforms provide databases of influencers across Instagram, TikTok, YouTube, and other channels, with analytics on audience demographics, engagement rates, and past campaign performance. They also facilitate campaign management, content approvals, payment processing, and ROI measurement.",
      },
    },
    {
      "@type": "Question",
      name: "What is Digital Asset Management (DAM) and why does it matter?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Digital Asset Management (DAM) is a system that stores, organizes, and manages digital assets like images, videos, documents, and brand files in a centralized, searchable repository. DAM tools like Bynder, Widen, Canto, Brandfolder, and Cloudinary help marketing teams maintain brand consistency, reduce time searching for assets, control versioning, manage rights and permissions, and streamline content distribution across channels. For any team producing significant volumes of marketing content, a DAM is essential infrastructure.",
      },
    },
    {
      "@type": "Question",
      name: "How much should a business budget for MarTech tools?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MarTech budgets vary by company size and industry. Small businesses typically spend 2-8% of revenue on marketing technology. Mid-market companies ($10M-$100M revenue) often spend $50K-$500K annually on MarTech. Enterprise organizations can spend $500K-$5M+ per year. A typical breakdown: 30% on foundational tools (CRM, CMS, Email), 25% on advertising and analytics, 20% on marketing automation and CDP, 15% on content and SEO tools, and 10% on specialized tools. Always include implementation, training, and integration costs in your budget.",
      },
    },
    {
      "@type": "Question",
      name: "How is AI transforming marketing technology?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI is revolutionizing MarTech across every category. Key applications include: AI-powered content generation (Jasper, Copy.ai, ChatGPT for marketing), predictive analytics and lead scoring (6sense, Salesforce Einstein), personalization engines (Dynamic Yield, Adobe Target), chatbots and conversational AI (Intercom, Drift, Zendesk AI), automated ad optimization (Google Performance Max, Meta Advantage+), sentiment analysis, SEO content optimization (SurferSEO, Frase), and generative AI for images and video. By 2026, AI features are becoming table stakes in most MarTech categories.",
      },
    },
    {
      "@type": "Question",
      name: "Open-source vs commercial MarTech tools: which is better?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The choice between open-source and commercial MarTech depends on your team technical capabilities. Open-source tools (like Mautic for marketing automation, Matomo for analytics, WordPress for CMS, SuiteCRM for CRM) offer lower upfront costs and full customization, but require technical expertise for setup and maintenance. Commercial tools provide polished UX, customer support, regular updates, and out-of-box integrations at a recurring cost. For most marketing teams without dedicated engineering support, commercial tools deliver faster time-to-value. Hybrid approaches are increasingly common.",
      },
    },
    {
      "@type": "Question",
      name: "What are the biggest trends in MarTech for 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Key MarTech trends in 2026 include: AI copilots embedded in every major platform (HubSpot Breeze, Salesforce Agentforce, Adobe GenStudio), consolidation of best-of-breed stacks into integrated platforms, the rise of composable MarTech architectures, privacy-first analytics and cookieless targeting solutions, real-time CDP and data activation becoming standard, no-code automation tools empowering non-technical marketers, and vertical-specific MarTech solutions outpacing horizontal ones.",
      },
    },
  ],
};

const FAQ_ITEMS = [
  {
    question: "What is MarTech (Marketing Technology)?",
    answer:
      "MarTech, short for Marketing Technology, refers to the software platforms, tools, and technologies that marketers use to plan, execute, measure, and optimize their marketing campaigns and strategies. The MarTech landscape includes everything from email marketing platforms and CRM systems to analytics tools, content management systems, advertising platforms, and AI-powered personalization engines. As of 2026, there are over 14,000 MarTech solutions across more than 50 categories.",
  },
  {
    question: "What are the main categories in a marketing technology stack?",
    answer:
      "A modern marketing technology stack typically includes: CRM (Customer Relationship Management), Email Marketing platforms, Marketing Automation, Analytics and BI tools, SEO platforms, Social Media Management tools, Content Management Systems (CMS), Advertising and Programmatic platforms, Customer Data Platforms (CDP), Digital Asset Management (DAM), ABM (Account-Based Marketing) platforms, and increasingly AI-powered tools for content generation, personalization, and predictive analytics. Most businesses use 10-30+ tools in their MarTech stack depending on size and industry.",
  },
  {
    question: "How do I build an effective MarTech stack?",
    answer:
      "Building an effective MarTech stack starts with defining your marketing goals and mapping them to required capabilities. Start with foundational tools (CRM, email marketing, analytics), then add specialized tools as needs grow. Key principles: prioritize integrations between tools to avoid data silos, start with all-in-one platforms if you are a small team, scale with best-of-breed as you grow, audit your stack quarterly to remove unused tools, and ensure your team has the skills to actually use each tool you adopt. The goal is a coherent stack, not the largest one.",
  },
  {
    question: "What is the difference between Marketing Automation, CRM, and CDP?",
    answer:
      "CRM (Customer Relationship Management) manages your existing customer interactions, pipeline, and sales data. Marketing Automation focuses on executing, automating, and measuring marketing campaigns across channels like email, social, and ads. CDP (Customer Data Platform) unifies customer data from multiple sources into a single, persistent customer profile for segmentation and activation. In practice: CRM manages relationships, Marketing Automation manages campaigns, and CDP manages unified customer data. Many modern platforms blur these lines, but understanding the core distinction helps avoid overbuying.",
  },
  {
    question: "What are the best email marketing tools for 2026?",
    answer:
      "Top email marketing tools in 2026 include Mailchimp (best for small businesses and ease of use), HubSpot (best for integrated CRM plus email), ActiveCampaign (best for automation capabilities), ConvertKit (best for creators and publishers), Brevo/Sendinblue (best for transactional emails), and Klaviyo (best for e-commerce). For enterprise, Salesforce Marketing Cloud and Oracle Eloqua remain dominant. The right choice depends on your list size, automation needs, budget, and integration requirements with your existing stack.",
  },
  {
    question: "How do I choose the right SEO tools for my business?",
    answer:
      "Choosing the right SEO tool depends on your specific needs. For comprehensive SEO platforms, Ahrefs, Semrush, and Moz are the top contenders. Ahrefs excels at backlink analysis and keyword research, Semrush is strongest for competitive analysis and PPC integration, and Moz offers solid beginner-friendly features. For technical SEO, Screaming Frog and Sitebulb are essential. For local SEO, BrightLocal and Whitespark lead the market. Start with one comprehensive tool (Ahrefs or Semrush) and add specialized tools as your SEO program matures.",
  },
  {
    question: "How do social media management tools compare?",
    answer:
      "Social media management tools vary by features and target audience. Hootsuite is the most established with broad platform support. Buffer is simplest for small teams focused on scheduling. Sprout Social offers the best social listening and analytics. Later is strongest for visual content and Instagram. Agorapulse excels at community management and reporting. Sendible is great for agencies managing multiple clients. Key factors to compare: supported platforms, scheduling capabilities, analytics depth, social listening, team collaboration, and price per user.",
  },
  {
    question: "What is ABM (Account-Based Marketing) and who needs it?",
    answer:
      "Account-Based Marketing (ABM) is a B2B strategy where marketing and sales teams coordinate to target specific high-value accounts with personalized campaigns, rather than casting a wide net. ABM platforms like Demandbase, 6sense, Terminus, and Madison Logic help identify target accounts, orchestrate personalized multi-channel campaigns, and measure account-level engagement. ABM is ideal for B2B companies with high average contract values ($50K+), long sales cycles, and a clear Ideal Customer Profile.",
  },
  {
    question: "What marketing analytics tools should I consider?",
    answer:
      "Marketing analytics tools range from all-in-one platforms to specialized solutions. Google Analytics 4 remains the standard for web analytics. Adobe Analytics offers enterprise-grade capabilities. Mixpanel and Amplitude are best for product analytics. HubSpot and Salesforce provide integrated marketing analytics with their CRM platforms. For attribution modeling, Northbeam and Rockerbox lead the category. For dashboards, Looker (Google), Tableau, and Power BI are top choices. Most teams use 2-3 analytics tools that work together for a complete picture.",
  },
  {
    question: "What content marketing tools are recommended?",
    answer:
      "Content marketing tools span creation, management, and distribution. For content planning and strategy, CoSchedule and Airtable are popular. For content creation, Canva (design), Jasper and Copy.ai (AI writing), and Grammarly (editing) are widely used. For CMS, WordPress, Contentful, and Webflow lead. For content distribution, tools like BuzzSumo, Quuu, and Outbrain help. For content analytics, Google Search Console, Ahrefs, and ContentKing provide SEO performance data. The key is building a workflow that connects planning, creation, publishing, and measurement.",
  },
  {
    question: "What are influencer marketing platforms and how do they work?",
    answer:
      "Influencer marketing platforms help brands discover, vet, manage, and measure influencer partnerships. Top platforms include Aspire, Upfluence, CreatorIQ, Grin, and LTK (formerly rewardStyle). These platforms provide databases of influencers across Instagram, TikTok, YouTube, and other channels, with analytics on audience demographics, engagement rates, and past campaign performance. They also facilitate campaign management, content approvals, payment processing, and ROI measurement.",
  },
  {
    question: "What is Digital Asset Management (DAM) and why does it matter?",
    answer:
      "Digital Asset Management (DAM) is a system that stores, organizes, and manages digital assets like images, videos, documents, and brand files in a centralized, searchable repository. DAM tools like Bynder, Widen, Canto, Brandfolder, and Cloudinary help marketing teams maintain brand consistency, reduce time searching for assets, control versioning, manage rights and permissions, and streamline content distribution across channels. For any team producing significant volumes of marketing content, a DAM is essential infrastructure.",
  },
  {
    question: "How much should a business budget for MarTech tools?",
    answer:
      "MarTech budgets vary by company size and industry. Small businesses typically spend 2-8% of revenue on marketing technology. Mid-market companies ($10M-$100M revenue) often spend $50K-$500K annually on MarTech. Enterprise organizations can spend $500K-$5M+ per year. A typical breakdown: 30% on foundational tools (CRM, CMS, Email), 25% on advertising and analytics, 20% on marketing automation and CDP, 15% on content and SEO tools, and 10% on specialized tools. Always include implementation, training, and integration costs in your budget.",
  },
  {
    question: "How is AI transforming marketing technology?",
    answer:
      "AI is revolutionizing MarTech across every category. Key applications include: AI-powered content generation (Jasper, Copy.ai, ChatGPT for marketing), predictive analytics and lead scoring (6sense, Salesforce Einstein), personalization engines (Dynamic Yield, Adobe Target), chatbots and conversational AI (Intercom, Drift, Zendesk AI), automated ad optimization (Google Performance Max, Meta Advantage+), sentiment analysis, SEO content optimization (SurferSEO, Frase), and generative AI for images and video. By 2026, AI features are becoming table stakes in most MarTech categories.",
  },
  {
    question: "Open-source vs commercial MarTech tools: which is better?",
    answer:
      "The choice between open-source and commercial MarTech depends on your team technical capabilities. Open-source tools (like Mautic for marketing automation, Matomo for analytics, WordPress for CMS, SuiteCRM for CRM) offer lower upfront costs and full customization, but require technical expertise for setup and maintenance. Commercial tools provide polished UX, customer support, regular updates, and out-of-box integrations at a recurring cost. For most marketing teams without dedicated engineering support, commercial tools deliver faster time-to-value. Hybrid approaches are increasingly common.",
  },
  {
    question: "What are the biggest trends in MarTech for 2026?",
    answer:
      "Key MarTech trends in 2026 include: AI copilots embedded in every major platform (HubSpot Breeze, Salesforce Agentforce, Adobe GenStudio), consolidation of best-of-breed stacks into integrated platforms, the rise of composable MarTech architectures, privacy-first analytics and cookieless targeting solutions, real-time CDP and data activation becoming standard, no-code automation tools empowering non-technical marketers, and vertical-specific MarTech solutions outpacing horizontal ones.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      <div className="relative pt-32 pb-20 px-6">
        <div className="max-w-[800px] mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#3B82F6] bg-[#162440] px-3 py-1.5 rounded-md mb-4">
              FAQ
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-[#F0F4F8] tracking-tight mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-[#8BA3BE] max-w-xl mx-auto leading-relaxed">
              Everything you need to know about MarTech — from building your stack
              to choosing the right tools and understanding industry trends.
            </p>
          </div>

          <div className="space-y-3">
            {FAQ_ITEMS.map((item, index) => (
              <div
                key={index}
                className="bg-[#0F1D32] border border-[#1E3A5F] rounded-xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-[#162440] transition-colors"
                  aria-expanded={openIndex === index}
                >
                  <span className="text-[#F0F4F8] font-medium pr-4">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#3B82F6] flex-shrink-0 transition-transform duration-200 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-5 pb-5 text-[#8BA3BE] leading-relaxed text-sm border-t border-[#1E3A5F] pt-4">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-[#8BA3BE] text-sm">
              Still have questions?{" "}
              <a
                href="/contact"
                className="text-[#3B82F6] hover:underline font-medium"
              >
                Contact our team
              </a>{" "}
              and we will get back to you within 24 hours.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
