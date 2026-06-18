import type { MetadataRoute } from "next";

const siteUrl = "https://khanalcwani.com";

const routes = [
  "",
  "/about",
  "/work",
  "/now",
  "/learning",
  "/writing",
  "/media",
  "/contact",
  "/blog/i-started-my-cookie-jar-h2hj34v24kjb34",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/blog/") ? 0.8 : 0.7,
  }));
}
