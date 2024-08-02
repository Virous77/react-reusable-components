import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/lib/provider/theme-provider";
import { commonMetaData } from "@/utils";

const inter = Inter({ subsets: ["latin"] });

export const generateMetadata = async () => {
  const metaData = commonMetaData({
    name: "React Reusable Components",
    desc: "A collection of reusable components for React. Built with Next.js and and Tailwind CSS on top of shadcn.",
    image: "https://avatars.githubusercontent.com/u/101452588?v=4",
    url: "/",
    keywords: ["tailwindcss", "shadcn", "components"],
  });
  return {
    ...metaData,
  };
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
