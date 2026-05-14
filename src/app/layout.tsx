import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CarouselAI - Self-Hosted AI Carousel Generator",
  description:
    "CarouselAI is a self-hosted, open-source carousel generator powered by your choice of AI provider. Run it locally. Own your content pipeline. Free forever.",
  openGraph: {
    title: "CarouselAI - Self-Hosted AI Carousel Generator",
    description:
      "Self-hosted, open-source AI carousel generator. Run it locally. Own your content pipeline.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CarouselAI",
    description:
      "Self-hosted, open-source AI carousel generator. Run it locally. Own your content pipeline.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-[#f5f5f5]">
        {children}
      </body>
    </html>
  );
}
