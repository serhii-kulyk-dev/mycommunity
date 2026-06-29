import type { MetadataRoute } from "next";

export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://mycommunity-erp.com";
  return [
    { url: base,                        lastModified: new Date(), changeFrequency: "daily",   priority: 1.0 },
    { url: `${base}/prices`,            lastModified: new Date(), changeFrequency: "weekly",  priority: 0.8 },
    { url: `${base}/integrations`,      lastModified: new Date(), changeFrequency: "weekly",  priority: 0.7 },
    { url: `${base}/about`,             lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/privacy`,           lastModified: new Date(), changeFrequency: "yearly",  priority: 0.3 },
    { url: `${base}/terms`,             lastModified: new Date(), changeFrequency: "yearly",  priority: 0.3 },
  ];
}
