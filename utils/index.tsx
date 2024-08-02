export const commonMetaData = ({
  name,
  desc,
  image,
  url,
  keywords,
}: {
  name: string;
  desc: string;
  image: string;
  url: string;
  keywords: string[];
}) => {
  return {
    metadataBase: new URL("https://ui.reetesh.in"),
    title: name || "React Reusable Components",
    description: desc,
    authors: [
      {
        name: "Reetesh Kumar",
        url: "https://reetesh.in/",
      },
    ],
    twitter: {
      card: "summary_large_image",
      creator: "@imbitcoinb",
      images: image,
      title: name,
      description: desc,
    },
    robots: "index, follow",
    alternates: {
      canonical: `https://ui.reetesh.in${url}`,
      languages: {
        "en-US": "/",
      },
    },
    openGraph: {
      type: "website",
      url: `https://ui.reetesh.in${url}`,
      title: name,
      description: desc,
      siteName: "React Reusable Components",
      images: [
        {
          url: image,
        },
      ],
    },
    assets: image,
    keywords: ["nextjs", "react", "typescript", "javascript", ...keywords],
  };
};
