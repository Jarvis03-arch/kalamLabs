export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://www.kalamlabs.io/sitemap.xml",
    host: "https://www.kalamlabs.io",
  };
}
