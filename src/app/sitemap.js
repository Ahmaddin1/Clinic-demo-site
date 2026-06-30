// PLACEHOLDER -- update baseUrl to the real production domain before client handoff
const baseUrl = "https://www.dentalavenue.pk";

export default function sitemap() {
  const routes = [
    { url: "/", priority: 1.0, changeFrequency: "weekly" },
    { url: "/services", priority: 0.9, changeFrequency: "monthly" },
    { url: "/services/scaling-polishing", priority: 0.8, changeFrequency: "monthly" },
    { url: "/services/root-canal", priority: 0.8, changeFrequency: "monthly" },
    { url: "/services/tooth-extraction", priority: 0.8, changeFrequency: "monthly" },
    { url: "/services/braces-orthodontics", priority: 0.8, changeFrequency: "monthly" },
    { url: "/services/dental-implants", priority: 0.8, changeFrequency: "monthly" },
    { url: "/services/teeth-whitening", priority: 0.8, changeFrequency: "monthly" },
    { url: "/about", priority: 0.7, changeFrequency: "monthly" },
    { url: "/gallery", priority: 0.6, changeFrequency: "monthly" },
    { url: "/blog", priority: 0.7, changeFrequency: "weekly" },
    { url: "/blog/how-often-should-you-visit-the-dentist", priority: 0.6, changeFrequency: "monthly" },
    { url: "/contact", priority: 0.9, changeFrequency: "monthly" },
    { url: "/faq", priority: 0.6, changeFrequency: "monthly" },
  ];

  return routes.map(({ url, priority, changeFrequency }) => ({
    url: `${baseUrl}${url}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
