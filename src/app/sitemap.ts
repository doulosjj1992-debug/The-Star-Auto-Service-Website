import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.thestarautoservice.com";
  return [
    { url: `${base}/`, priority: 1.0 },
  ];
}
