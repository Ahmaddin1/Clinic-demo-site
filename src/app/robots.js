// PLACEHOLDER -- update baseUrl to the real production domain before client handoff
const baseUrl = "https://www.dentalavenue.pk";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
