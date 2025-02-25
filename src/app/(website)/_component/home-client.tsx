"use client";

import { MessageCircle, Zap, Target, Bot } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { FeaturesSection } from "./feature-section";
import Header from "./header";
import PricingCards from "./pricing-card";
import { BentoHero } from "./bento-features";
import { BRAND } from "@/constants/common";
import SectionHeading from "./section-heading";
import { OrbitingCirclesDemo } from "./integration-circle";
import Footer from "./footer";
import Testimonials from "./testimonials";
import CTA from "./cta";
import HowItWorks from "./how-it-works";
import Pricing from "./pricing";

export default function HomeClient() {
  const router = useRouter();

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

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Fashion Influencer",
      content:
        "Slide has revolutionized how I interact with my followers. The AI responses are so natural, my engagement has skyrocketed!",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      name: "Mike Chen",
      role: "Tech Reviewer",
      content:
        "The automation features have saved me hours each week. Now I can focus on creating content while Slide handles the engagement.",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      name: "Mike Chen",
      role: "Tech Reviewer",
      content:
        "The automation features have saved me hours each week. Now I can focus on creating content while Slide handles the engagement.",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      name: "Mike Chen",
      role: "Tech Reviewer",
      content:
        "The automation features have saved me hours each week. Now I can focus on creating content while Slide handles the engagement.",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    },
  ];

  return (
    <main className="bg-gray-950">
      <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-sm">
        <Header />
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        <div className="relative container px-4 py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight leading-relaxed text-white sm:text-5xl md:text-6xl lg:text-8xl">
              Make Your{" "}
              <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center font-bold leading-none tracking-tighter text-transparent">
                Social Game
              </span>{" "}
              {`Unstoppable with ${BRAND}!`}
            </h1>

            <p className="mt-6 text-lg">
              Triggly makes Instagram magic happen! 🚀 Automate replies, spark
              conversations, and turn every interaction into a conversion.
            </p>

            <div className="mt-8 flex justify-center gap-4">
              <RainbowButton
                className="text-lg"
                onClick={() => {
                  router.push("/dashboard");
                }}
              >
                Get Started
              </RainbowButton>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl text-center px-4 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-16">
          <div className="w-full aspect-auto">
            <Image
              src="/vhuwan.jpeg"
              alt="Community members"
              height={200}
              width={200}
              className="w-full h-full object-cover rounded-xl rounded-br-[40px] md:rounded-br-[80px] shadow-2xl"
            />
          </div>
          <div className="w-full aspect-auto">
            <Image
              src="/carry.jpeg"
              alt="Community members"
              height={200}
              width={200}
              className="w-full h-full object-cover rounded-xl shadow-2xl rounded-br-[40px] rounded-tr-[40px] md:rounded-br-[80px] md:rounded-tr-[80px]"
            />
          </div>
          <div className="w-full aspect-auto">
            <Image
              src="/koli.jpeg"
              alt="Community members"
              height={200}
              width={200}
              className="w-full h-full object-cover rounded-xl shadow-2xl rounded-tl-[40px] md:rounded-tl-[80px]"
            />
          </div>
          <div className="w-full aspect-auto">
            <Image
              src="/Jimmy.jpeg"
              alt="Community members"
              height={200}
              width={200}
              className="w-full h-full object-cover rounded-xl shadow-2xl rounded-br-[50px] md:rounded-br-[100px]"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="px-4 mt-32">
          <SectionHeading
            title="Seamless Integrations"
            subtitle="Connect with your favorite platforms and tools to supercharge your social media presence"
          />
          <OrbitingCirclesDemo />
        </div>
      </section>

      <section id="features" className="py-20">
        <div className="container px-4">
          <FeaturesSection />
        </div>
      </section>

      <HowItWorks />
      <Pricing />
      <section id="possibilities" className="py-20">
        <div className="container px-4">
          <SectionHeading
            title="Endless Possibilities"
            subtitle="Slide offers a range of features to help you engage with your audience like never before."
          />
          <BentoHero />
        </div>
      </section>

      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
