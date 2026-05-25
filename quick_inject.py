#!/usr/bin/env python3
import subprocess

ts_path = "/home/edi/martech-tool-hub/app/data/tools.ts"
with open(ts_path, 'r') as f:
    content = f.read()

test_entry = '''  {
    id: "hubspot-crm",
    name: "HubSpot CRM",
    category: "CRM & Sales",
    rating: 4.5,
    reviewCount: 28500,
    icon: MousePointerClick,
    description: "All-in-one CRM platform for marketing, sales, and service.",
    longDescription: `HubSpot CRM connects marketing, sales, and service on a single data layer.`,
    pros: ["Free tier supports unlimited contacts", "Breeze AI predictive lead scoring"],
    cons: ["Cost escalates quickly", "Enterprise features locked behind $5K/mo pricing"],
    pricing: "Free - $2,700/mo",
    pricingDetail: `Free (unlimited contacts) | Starter $20/mo | Professional $1,800/mo | Enterprise $5,000/mo+`,
    features: ["Contact Management", "AI Lead Scoring", "Workflow Automation"],
    useCase: `Best for growing B2B companies.`,
    scoreBreakdown: { features: 94, reviews: 88, momentum: 91, popularity: 97 },
    websiteUrl: "https://www.hubspot.com",
  },'''

old = "export const ALL_TOOLS: Tool[] = [];"
new = f"export const ALL_TOOLS: Tool[] = [\n{test_entry}\n];"

if old in content:
    content = content.replace(old, new)
    with open(ts_path, 'w') as f:
        f.write(content)
    r = subprocess.run(['grep', '-c', 'id:', ts_path], capture_output=True, text=True)
    print(f"✅ 注入成功，工具数: {r.stdout.strip()}")
else:
    print("❌ 匹配失败")
    # Find exact version
    for i, line in enumerate(content.split('\n')):
        if 'ALL_TOOLS' in line:
            print(f"  行{i+1}: '{repr(line)}'")
