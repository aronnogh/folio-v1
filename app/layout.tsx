import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Syne } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const syne = Syne({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Aronno Ghosh | A Dreamer",

  description:
    "Electronics & Electrical Engineer, Software Developer, Researcher",

  generator: "Next.js",
  applicationName: "Aronno Ghosh",

  keywords: [
    "freelance",
    "developer",
    "freelance developer",
    "backend developer",
    "full stack developer",
    "full-stack developer",
    "fullstack developer",
    "fullStack developer",
    "cross platform app developer",
    "frontend",
    "backend",
    "fullstack",
    "full stack",
    "cross platform app",
    "react",
    "vite",
    "nextjs",
    "creative",
    "creative developer",
    "creative engineer",
    "tech",
    "bangladesh",
    "india",
    "europe",
    "usa",
    "australia",
    "software",
    "software developer",
    "portfolio",
    "frontend developer portfolio",
    "backend developer portfolio",
    "full stack developer portfolio",
    "cross platform app developer portfolio",
    "creative developer portfolio",
  ],

  openGraph: {
    title: "Aronno Ghosh | A Dreamer",
    description:
      "Frontend Engineer and Web Designer, currently at Kora. Focused on interfaces and experiences, working remotely from Lagos, Nigeria.",
    url: "https://www.victorwilliams.me/",
    siteName: "www.victorwilliams.me",
    images: [
      {
        url: "https://user-images.githubusercontent.com/84178696/228620835-e3cc5c9b-72fc-4f54-a628-407ef7b650f5.png",
        width: 1200,
        height: 630,
        alt: "Victor Williams — Frontend Engineer",
      },
    ],
    locale: "en-US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Victor Williams — Frontend Engineer",
    description:
      "Electronics & Electrical Engineer, Software Developer, Researcher",
    creator: "koushik ghosh (aronno)",
    creatorId: "aronno647433",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  category: "technology"
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${syne.className} scroll-smooth scrollbar-thin scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}

export const viewport = {
  colorScheme: "dark"
};
