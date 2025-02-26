"use client";

import { MessageCircle, Zap, Target, Bot } from "lucide-react";
import Header from "./header";
import Footer from "./footer";
import Testimonials from "./testimonials";
import CTA from "./cta";
import HowItWorks from "./how-it-works";
import Pricing from "./pricing";
import EndlessPossibilities from "./endless-possiblities";
import Features from "./features";
import IntegrationOrbit from "./integration-orbit";
import Hero from "./hero";
import PhotoGrid from "./photo-grid";

export default function HomeClient() {
  const features = [
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "Automated Responses",
      description: "Set up custom triggers and responses for comments and DMs.",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Smart AI Conversations",
      description: "Let AI handle complex conversations based on your prompts.",
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Targeted Engagement",
      description:
        "Engage with your audience using specific keywords and phrases.",
    },
    {
      icon: <Bot className="h-6 w-6" />,
      title: "24/7 Availability",
      description: "Never miss an opportunity to connect with your followers.",
    },
  ];

  return (
    <main className="bg-gray-950">
      <Header />
      <Hero />
      <PhotoGrid />
      <IntegrationOrbit />
      <Features />
      <HowItWorks />
      <Pricing />
      <EndlessPossibilities />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
