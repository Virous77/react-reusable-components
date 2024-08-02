import { MetadataRoute } from "next";

const robots = (): MetadataRoute.Robots => {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    host: "https://ui.reetesh.in",
    sitemap: "https://ui.reetesh.in/sitemap.xml",
  };
};

export default robots;
