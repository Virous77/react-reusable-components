const sitemap = async () => {
  const URL = "https://ui.reetesh.in";

  const restUrls = [
    {
      url: `${URL}/`,
      lastModified: new Date(),
      priority: 1.0,
      changeFrequency: "weekly",
    },
  ];

  return [...restUrls];
};

export default sitemap;
