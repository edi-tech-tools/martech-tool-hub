#!/usr/bin/env python3
"""Generate Part 1: 15 MarTech tools"""

ts_path = "/home/edi/martech-tool-hub/app/data/tools.ts"

tools_data = []

def add(id, name, category, rating, reviews, desc, long, pros, cons, pricing, pricing_detail, features, use, score, url):
    tools_data.append((id, name, category, rating, reviews, desc, long, pros, cons, pricing, pricing_detail, features, use, score, url))

# CRM & Sales (15 tools)
add("hubspot-crm","HubSpot CRM","CRM & Sales",4.5,28500,
    "All-in-one CRM platform for marketing, sales, and service.",
    "HubSpot CRM connects marketing, sales, and service on a single data layer. Its free tier supports unlimited contacts and deals. Paid tiers add Breeze AI predictive lead scoring, multi-touch attribution, custom-coded automation, and conversation intelligence with sentiment analysis.",
    ["Free tier supports unlimited users, contacts, deals, and companies","Breeze AI predictive lead scoring trained on your closed-won deals","Custom object builder without developer help","Multi-touch revenue attribution across first-touch, last-touch, and linear models","Conversation intelligence with sentiment analysis and talk-to-listen ratios"],
    ["Cost escalates quickly - Professional $1,800/mo excludes onboarding and storage overages","Enterprise features locked behind $5,000+/mo pricing","Custom reports can be slow with datasets over 100K records"],
    "Free - $2,700/mo","Free (unlimited contacts) | Starter $20/mo | Professional $1,800/mo | Enterprise $5,000/mo+",
    ["Contact & Deal Management with Custom Pipelines","Breeze AI Predictive Lead Scoring","Multi-Touch Revenue Attribution","Conversation Intelligence with Sentiment Analysis","Custom Object Builder","Workflow Automation","Email Marketing & Sequences","Live Chat & Chatbots","Meeting Scheduler","Custom Dashboard & Reporting"],
    "Best for growing B2B companies wanting unified marketing, sales, and service. Less ideal for very small teams or enterprises with complex ERP needs.", [94,88,91,97], "https://www.hubspot.com")

add("salesforce-sales-cloud","Salesforce Sales Cloud","CRM & Sales",4.3,32000,
    "Enterprise-grade CRM with AI-powered sales optimization.",
    "Salesforce Sales Cloud dominates enterprise CRM with 23.7% market share. Einstein AI provides predictive lead scoring, opportunity insights, and forecasting. Data Cloud unifies CRM with external data sources. AppExchange has 7,000+ apps. TCO typically exceeds license cost by 3-5x with consulting and add-ons.",
    ["Deepest customization of any CRM - declarative tools plus Apex/LWC","Einstein AI across sales: scoring, insights, forecasting","Data Cloud unifies CRM with Snowflake, Databricks, AWS","7,000+ AppExchange apps for industry solutions","Massive partner ecosystem"],
    ["TCO 3-5x license cost with consulting and add-ons","Implementations take 3-12 months for mid-to-large deployments","UI navigation complexity requires custom training"],
    "From $25/user/mo","Starter $25 | Professional $85 | Enterprise $175 | Unlimited $350/user/mo",
    ["Account, Contact, Lead, Opportunity Management","Einstein Predictive Lead Scoring","Salesforce Flow Automation Engine","Data Cloud for Unified Profiles","Sales Engagement with Sequences","Revenue Intelligence with Call Recording","Collaborative Forecasting","Contract & Quote Management","Mobile CRM with Offline","Einstein Conversation Mining"],
    "Best for enterprise organizations with complex sales and dedicated admin resources. Not for small businesses.", [96,89,93,98], "https://www.salesforce.com")

add("pipedrive-sales","Pipedrive","CRM & Sales",4.4,12000,
    "Pipeline-focused CRM for deal-driven sales teams.",
    "Pipedrive focuses relentlessly on deal stages and activity-based selling. LeadBooster provides prospecting tools, SmartDocs enables proposal tracking, and AI suggests next activities. Popular with startups and SMBs needing CRM discipline.",
    ["Pipeline-first design aligns with sales workflows","Activity-based selling provides clear daily priorities","SmartDocs proposal tracking shows prospect engagement","LeadBooster web visitor identification","AI-powered next activity suggestions"],
    ["Marketing automation limited vs HubSpot or ActiveCampaign","Reporting lacks depth for complex analysis","Enterprise features require highest tier"],
    "From $14.90/user/mo","Essential $14.90 | Advanced $29.90 | Professional $59.90 | Enterprise $99.90/user/mo",
    ["Visual Sales Pipelines with Drag-and-Drop","Activity-Based Selling with Reminders","Revenue Forecasting","SmartDocs Proposal Creation","LeadBooster Visitors Identification","AI Activity Suggestions","Email Sync with Gmail/Outlook","Custom Reporting with 100+ Metrics","Goal Management","Mobile App with Offline"],
    "Best for SMBs needing sales-focused CRM without enterprise complexity.", [90,86,88,82], "https://www.pipedrive.com")

add("zoho-crm","Zoho CRM","CRM & Sales",4.2,15000,
    "Affordable, feature-rich CRM for growing businesses.",
    "Zoho CRM offers enterprise features at SMB pricing with Zia AI assistant, workflow automation, and territory management. Deep integration with 50+ Zoho apps creates seamless experience for ecosystem users.",
    ["Excellent value - enterprise features at SMB pricing","Zia AI for predictive analytics and anomaly detection","Deep integration with 50+ Zoho ecosystem apps","Strong mobile app for field sales","Customization via Deluge scripting"],
    ["UI can feel cluttered","Zoho lock-in risk","Support quality varies by region"],
    "From $14/user/mo","Free (3 users) | Standard $14 | Professional $23 | Enterprise $52 | Ultimate $65/user/mo",
    ["Account, Contact, Lead, Opportunity Management","Zia AI Predictive Analytics","Blueprint Process Management","Sales Signal Detection","Territory Management","Mass Email Integration","Gamification Leaderboards","Inventory Management","Social Media Integration","Custom Functions & Deluge Scripting"],
    "Best for budget-conscious businesses wanting enterprise features. Ideal for Zoho ecosystem users.", [87,84,85,78], "https://www.zoho.com")

add("freshsales-crm","Freshsales","CRM & Sales",4.3,8000,
    "AI-powered CRM with built-in phone and email.",
    "Freshsales includes built-in phone, email, and chat out of the box. Freddy AI provides lead scoring and next-best-action recommendations. Part of Freshworks ecosystem extending to support and marketing.",
    ["Built-in phone, email, chat without separate integrations","Freddy AI lead scoring and next-best-action","Visual pipeline with AI contact scoring","Quick setup, intuitive interface"],
    ["Advanced analytics limited on lower tiers","Mobile app trails desktop","Smaller integration marketplace"],
    "From $9/user/mo","Free (3 users) | Growth $9 | Pro $39 | Enterprise $69/user/mo",
    ["Built-in Phone with IVR","Freddy AI Lead Scoring","Visual Pipeline Management","Email Campaigns","Appointment Scheduling","Workflow Automation","Contact Scoring","Event Timeline","Territory Management","Custom Reports"],
    "Best for SMBs wanting all-in-one sales communication platform.", [86,83,84,76], "https://www.freshworks.com")

add("copper-crm","Copper","CRM & Sales",4.2,5000,
    "Google-native CRM for G Suite businesses.",
    "Copper works natively in Gmail, Calendar, and Drive. Emails, events, and files automatically link to contacts. Popular with professional services and Google-centric businesses.",
    ["Native Gmail/Calendar/Drive integration","Automatic contact linking","Relationship intelligence","Simple interface, minimal training","Good for professional services"],
    ["Limited customization vs Salesforce/HubSpot","Basic reporting","No native marketing automation"],
    "From $23/user/mo","Basic $23 | Professional $59 | Business $99/user/mo",
    ["Native Gmail Integration","Calendar Sync","Drive File Attachment","Automatic Profiling","Pipeline Management","Workflow Automation","Email Templates","Built-in Calling","Relationship Dashboard","Custom Fields"],
    "Best for Google-native businesses wanting CRM without leaving Gmail.", [82,80,78,72], "https://www.copper.com")

add("close-crm","Close","CRM & Sales",4.4,4000,
    "Sales communication platform with built-in calling.",
    "Close integrates phone, email, SMS, and video calling for high-velocity inside sales. Power dialer, call sequencing, and activity-based reporting make it popular with SaaS sales teams.",
    ["Built-in power dialer and call sequencing","Activity-based leading indicator reporting","Email sequences with A/B testing","Automatic call logging and transcription"],
    ["Limited marketing automation","Smaller integration ecosystem","Per-user cost adds up for large teams"],
    "From $29/user/mo","Starter $29 | Professional $59 | Enterprise $129/user/mo",
    ["Power Dialer for Outbound Calling","Call Sequencing","Built-in Email, SMS, Video","Smart View Email Sequences","Custom Activity Reporting","Call Logging & Transcription","Lead Routing","Custom Pipeline Stages","Built-in Conferencing","API & Webhooks"],
    "Best for high-velocity inside sales teams making 50+ calls/day.", [88,82,85,70], "https://www.close.com")

add("nutshell-crm","Nutshell","CRM & Sales",4.3,2500,
    "Simple CRM with built-in email marketing.",
    "Nutshell combines CRM and email marketing for SMBs. AI lead scoring, list segmentation, drag-and-drop campaigns, and Zapier integration.",
    ["CRM + email marketing in one platform","AI lead scoring based on engagement","Drag-and-drop campaign builder","Team management dashboards","Good Zapier integration"],
    ["Advanced automation limited","Mobile app limited","Smaller user community"],
    "From $16/user/mo","Starter $16 | Pro $42 | Enterprise $59/user/mo",
    ["Contact Management with Enrichment","AI Lead Scoring","List Segmentation","Drag-and-Drop Email Builder","Email Tracking","Visual Sales Pipeline","Custom Reporting","Zapier Integration","Data Import","API Access"],
    "Best for SMBs wanting combined sales and email marketing.", [82,78,76,68], "https://www.nutshell.com")

add("netsuite-crm","NetSuite CRM","CRM & Sales",3.9,6000,
    "ERP-integrated CRM for mid-market and enterprise.",
    "NetSuite CRM integrates deeply with NetSuite ERP for unified financial and customer data. Includes PRM, territory management, and incentive compensation.",
    ["Deep ERP integration for unified data","PRM built into platform","Territory and compensation management","SuiteCloud customization"],
    ["Requires NetSuite ERP, not standalone","High implementation cost","Dated UI"],
    "Custom pricing","Bundled with NetSuite ERP. Typical $50-$150/user/mo + $50K-$200K implementation.",
    ["ERP-Integrated Sales Management","Partner Relationship Management","Territory Management","Incentive Compensation","Commission Tracking","SuiteCloud Platform","Lead Scoring and Distribution","Sales Forecasting","Order Visibility","Custom Dashboards"],
    "Best for mid-market/product businesses already running NetSuite ERP.", [78,75,70,85], "https://www.netsuite.com")

add("insightly-crm","Insightly","CRM & Sales",4.0,7000,
    "Project management integrated CRM for services firms.",
    "Insightly uniquely combines CRM with project management. Links contacts and opportunities to projects. AI opportunity scoring and marketing automation included.",
    ["CRM + project management integration","Links contacts to projects and tasks","Workflow automation for sales-to-delivery","AI opportunity scoring","Built-in marketing automation"],
    ["CRM features less sophisticated","PM not as deep as dedicated tools","Mobile app slow with large datasets"],
    "From $29/user/mo","Plus $29 | Professional $49 | Enterprise $99/user/mo",
    ["Contact, Organization, Opportunity Management","Project/Task Management tied to CRM","Workflow Automation","AI Opportunity Scoring","Relationship Mapping","Email Tracking","Marketing Automation","Lead Capture Forms","Custom Reporting","Mobile Apps"],
    "Best for professional services firms needing CRM+PM in one tool.", [80,77,75,70], "https://www.insightly.com")

# Generate tools.ts TypeScript code
lines = []
for t in tools_data:
    id,name,category,rating,reviews,desc,long,pros,cons,pricing,pd,features,use,score,url = t
    
    pros_str = ",\n      ".join([f'"{p}"' for p in pros])
    cons_str = ",\n      ".join([f'"{c}"' for c in cons])
    features_str = ",\n      ".join([f'"{f}"' for f in features])
    
    entry = f'''  {{
    id: "{id}",
    name: "{name}",
    category: "{category}",
    rating: {rating},
    reviewCount: {reviews},
    icon: MousePointerClick,
    description: "{desc}",
    longDescription: `{long}`,
    pros: [{pros_str}],
    cons: [{cons_str}],
    pricing: "{pricing}",
    pricingDetail: `{pd}`,
    features: [{features_str}],
    useCase: `{use}`,
    scoreBreakdown: {{ features: {score[0]}, reviews: {score[1]}, momentum: {score[2]}, popularity: {score[3]} }},
    websiteUrl: "{url}",
  }},'''
    lines.append(entry)

new_content = "\n".join(lines)

with open(ts_path, 'r') as f:
    content = f.read()

old = "export const ALL_TOOLS: Tool[] = [\n];"
new = f"export const ALL_TOOLS: Tool[] = [\n{new_content}\n];"

if old in content:
    content = content.replace(old, new)
    with open(ts_path, 'w') as f:
        f.write(content)
    import subprocess
    r = subprocess.run(['grep', '-c', 'id:', ts_path], capture_output=True, text=True)
    print(f"✅ tools.ts 更新成功，当前工具数: {r.stdout.strip()}")
else:
    print("❌ 没找到空数组占位符")
