import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.aenatechnologies.com",
      lastModified: new Date(),
    },
  ];
}