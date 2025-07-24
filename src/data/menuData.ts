export interface MenuItem {
  label: string;
  href: string;
  slug: string;
}

export interface MenuSection {
  title: string;
  slug: string;
  items: MenuItem[];
}

export const menuData: MenuSection[] = [
  {
    title: "AI",
    slug: "ai",
    items: [
      { label: "Custom Models", href: "/ai/custom-models", slug: "custom-models" },
      { label: "Conversational, NLP and RAGs", href: "/ai/conversational-nlp-rags", slug: "conversational-nlp-rags" },
      { label: "Computer vision, OCR", href: "/ai/computer-vision-ocr", slug: "computer-vision-ocr" },
      { label: "Customer service & Sales automation", href: "/ai/customer-service-sales-automation", slug: "customer-service-sales-automation" },
      { label: "Chat with your company data", href: "/ai/chat-company-data", slug: "chat-company-data" },
      { label: "Ethics", href: "/ai/ethics", slug: "ethics" },
    ],
  },
  {
    title: "Services",
    slug: "services",
    items: [
      { label: "Cloud", href: "/services/cloud", slug: "cloud" },
      { label: "Data & Analytics", href: "/services/data-analytics", slug: "data-analytics" },
      { label: "Enterprise Solution", href: "/services/enterprise-solution", slug: "enterprise-solution" },
      { label: "App / Web / Game development", href: "/services/app-web-game-development", slug: "app-web-game-development" },
      { label: "IOT & Digital Engineering", href: "/services/iot-digital-engineering", slug: "iot-digital-engineering" },
      { label: "Business automation", href: "/services/business-automation", slug: "business-automation" },
      { label: "Quick MVP", href: "/services/quick-mvp", slug: "quick-mvp" },
    ],
  },
  {
    title: "Products",
    slug: "products",
    items: [
      { label: "Health cycle", href: "/products/health-cycle", slug: "health-cycle" },
      { label: "Dcycle", href: "/products/dcycle", slug: "dcycle" },
      { label: "Fincycle", href: "/products/fincycle", slug: "fincycle" },
      { label: "Visioncycle", href: "/products/visioncycle", slug: "visioncycle" },
      { label: "Mentalli", href: "/products/mentalli", slug: "mentalli" },
    ],
  },
  {
    title: "Industries",
    slug: "industries",
    items: [
      { label: "Government", href: "/industries/government", slug: "government" },
      { label: "Finance", href: "/industries/finance", slug: "finance" },
      { label: "Banking", href: "/industries/banking", slug: "banking" },
      { label: "Health", href: "/industries/health", slug: "health" },
      { label: "Logistics", href: "/industries/logistics", slug: "logistics" },
      { label: "Energy", href: "/industries/energy", slug: "energy" },
      { label: "Retail", href: "/industries/retail", slug: "retail" },
      { label: "Telecommunication", href: "/industries/telecommunication", slug: "telecommunication" },
    ],
  },
  {
    title: "About Us",
    slug: "about",
    items: [
      { label: "Philosophy", href: "/about/philosophy", slug: "philosophy" },
      { label: "People", href: "/about/people", slug: "people" },
      { label: "Life at Xcycle", href: "/about/life-at-xcycle", slug: "life-at-xcycle" },
      { label: "Research", href: "/about/research", slug: "research" },
      { label: "Press", href: "/about/press", slug: "press" },
      { label: "Podcast/events/social", href: "/about/podcast-events-social", slug: "podcast-events-social" },
      { label: "Events", href: "/about/events", slug: "events" },
    ],
  },
]; 