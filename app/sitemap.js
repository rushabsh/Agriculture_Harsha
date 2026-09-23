export default function sitemap() {
  const baseUrl = "https://greenglobeagro.com";
  const routes = ["", "/about", "/products", "/industries", "/contact"];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
