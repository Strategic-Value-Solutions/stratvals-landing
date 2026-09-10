import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://stratvals.com";
  const now = new Date();

  const coreRoutes = [
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/services", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/contact-us", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/case-studies", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/blog", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/our-partners", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/news-events", priority: 0.7, changeFrequency: "weekly" as const },
  ];

  const serviceSlugs = [
    "product-road-mapping-engineering",
    "strategic-program-management",
    "technology-transformation",
    "enterprise-architecture",
    "cloud-secdevops",
  ];

  const caseStudySlugs = [
    "legal-services-marketplace",
    "robotic-automation-food-manufacturing",
    "norrbrook-apparel-ecommerce",
  ];

  const blogSlugs = [
    "a-complete-guide-to-enterprise-application-development",
    "from-legacy-systems-to-digital-excellence-the-tech-transformation-journey",
    "maximizing-roi-with-agile-program-governance",
    "building-scalable-cloud-architecture-on-aws-and-azure",
    "what-c-suite-leaders-get-wrong-about-digital-transformation",
    "product-road-mapping-in-complex-regulated-industries",
  ];

  const newsSlugs = [
    "strategic-value-solutions-announces-strategic-partnership-with-bytes-technolab",
    "strategic-value-solutions-announces-strategic-partnership-with-pennsylvania-state-university-great-valley",
    "stratvals-expands-executive-advisory-practice",
  ];

  const routes: MetadataRoute.Sitemap = [
    ...coreRoutes.map((route) => ({
      url: `${baseUrl}${route.path}`,
      lastModified: now,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...serviceSlugs.map((slug) => ({
      url: `${baseUrl}/service/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...caseStudySlugs.map((slug) => ({
      url: `${baseUrl}/case-studies/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...blogSlugs.map((slug) => ({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...newsSlugs.map((slug) => ({
      url: `${baseUrl}/news-events/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];

  return routes;
}
