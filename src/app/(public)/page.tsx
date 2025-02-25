import type { Metadata } from "next";
import HomeClient from "./_component/home-client";

export const metadata: Metadata = {
  keywords: [
    "Instagram automation",
    "Instagram engagement",
    "AI Instagram responses",
    "Instagram marketing",
    "Instagram tools",
  ],
  openGraph: {
    title: "Triggly - Transform Your Instagram Engagement",
    description:
      "Triggly revolutionizes how you connect with your audience on Instagram. Automate responses and boost engagement effortlessly.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Triggly - Transform Your Instagram Engagement",
    description:
      "Triggly revolutionizes how you connect with your audience on Instagram. Automate responses and boost engagement effortlessly.",
  },
};

export default function HomePage() {
  return <HomeClient />;
}
