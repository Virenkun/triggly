"use client";

import { MessageCircle, Zap, Target, Bot, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { Marquee } from "@/components/magicui/marquee";
import { FeaturesSection } from "./feature-section";
import Header from "./header";
import PricingCards from "./pricing-card";
import { FaPlug, FaCogs, FaComments } from "react-icons/fa";
import { BentoHero } from "./bento-features";
import { BRAND } from "@/constants/common";
import SectionHeading from "./section-heading";

export default function HomeClient() {
  const router = useRouter();
  const plans = [
    {
      name: "Free Plan",
      description: "Perfect for getting started",
      price: "$0",
      features: [
        "Boost engagement with target responses",
        "Automate comment replies to enhance audience interaction",
        "Turn followers into customers with targeted messaging",
      ],
      cta: "Get Started",
    },
    {
      name: "Smart AI Plan",
      description: "Advanced features for power users",
      price: "$99",
      features: [
        "All features from Free Plan",
        "AI-powered response generation",
        "Advanced analytics and insights",
        "Priority customer support",
        "Custom branding options",
      ],
      cta: "Upgrade Now",
    },
  ];

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
              Transform Your{" "}
              <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center  font-bold leading-none tracking-tighter text-transparent">
                Social Media
              </span>{" "}
              {`Engagement with ${BRAND}`}
            </h1>

            <p className="mt-6 text-lg text-blue-200">
              Slide revolutionizes how you connect with your audience on
              Instagram. Automate responses and boost engagement effortlessly,
              turning interactions into valuable business opportunities.
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
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-60 md:h-96 w-full mt-12"
          >
            <Image
              src="/Ig-creators.png"
              alt="Community members"
              fill
              className="object-cover rounded-xl shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      <section id="features" className="py-20">
        <div className="container px-4">
          <FeaturesSection />
        </div>
      </section>

      <section id="how-it-works" className="py-24 bg-dark-900">
        <div className="container mx-auto px-6 lg:px-16 text-white text-center">
          <SectionHeading
            title="How It Works"
            subtitle="Slide is designed to make your life easier. Here's how it works in three simple steps."
          />
          <div className="flex flex-col md:flex-row justify-center items-center gap-12 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex flex-col items-center text-center"
              >
                <div
                  className={`w-16 h-16 flex items-center justify-center rounded-2xl text-2xl text-white shadow-xl ${step.bgColor}`}
                >
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mt-4 text-gray-100">
                  {step.title}
                </h3>
                <p className="text-gray-400 max-w-xs mt-2">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20">
        <div className="container px-4">
          <SectionHeading
            title="Choose Your Plan"
            subtitle="Select the perfect plan to boost your Instagram engagement"
          />
          <PricingCards />
        </div>
      </section>

      <section id="pricing" className="py-20">
        <div className="container px-4">
          <SectionHeading
            title="Endless Possibilities"
            subtitle="Slide offers a range of features to help you engage with your audience like never before."
          />
          <BentoHero />
        </div>
      </section>

      <section id="testimonials" className="py-20">
        <div className="px-4">
          <SectionHeading
            title=" Testimonials"
            subtitle={`Hear what our customers have to say about ${BRAND}.`}
          />
          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
            <Marquee pauseOnHover className="[--duration:20s]">
              <div className="grid grid-cols-1 md:grid-cols-4">
                {testimonials.map((testimonial, index) => (
                  <div className="h-80" key={index}>
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      className="mx-6 "
                    >
                      <div className="relative inline-block">
                        {/* Down Rectangle Gradient */}
                        <div className="absolute -bottom-4 left-48 -translate-x-1/2 w-full h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-md opacity-40 blur-xl"></div>

                        <div className="relative py-8 px-6 bg-white/10 backdrop-blur-lg border border-white/20 text-white rounded-lg max-w-sm shadow-lg">
                          <div className="flex items-center gap-4">
                            <Image
                              src={testimonial.avatar || "/placeholder.svg"}
                              alt={testimonial.name}
                              width={48}
                              height={48}
                              className="rounded-full"
                            />
                            <div>
                              <h3 className="text-lg font-semibold">
                                {testimonial.name}
                              </h3>
                              <p className="text-sm text-gray-300">
                                {testimonial.role}
                              </p>
                            </div>
                            <div className="self-end flex-1">
                              <span className="font-gravitas text-gray-200 text-5xl">
                                ”
                              </span>
                            </div>
                          </div>

                          <p className="mt-3 text-sm text-gray-200">
                            {testimonial.content}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </Marquee>
          </div>
        </div>
      </section>

      <section id="contact" className="pt-2 pb-10 text-white">
        <div className="container px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-4">
              Ready to Transform Your Social Media Engagement?
            </h2>
            <p className="mb-8 text-xl">
              Get started with {BRAND} today and watch your audience grow!
            </p>
            <RainbowButton
              onClick={() => {
                router.push("/dashboard");
              }}
            >
              Start Your Free Trial <ArrowRight className="ml-2 h-4 w-4" />
            </RainbowButton>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-12">
        <div className="container px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#features" className="hover:text-blue-400">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="hover:text-blue-400">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-400">
                    API
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-blue-400">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-400">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-400">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-blue-400">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-400">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-400">
                    Help Center
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-blue-400">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-400">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-400">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>&copy; {new Date().getFullYear()} Slide. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

const steps = [
  {
    icon: <FaPlug />,
    title: "Integrate Your Account",
    description:
      "Connect your Instagram account to Slide and unlock powerful automation features.",
    bgColor: "bg-purple-500",
  },
  {
    icon: <FaCogs />,
    title: "Create Automations",
    description:
      "Set up triggers for comments or DMs, and define your response strategy.",
    bgColor: "bg-blue-500",
  },
  {
    icon: <FaComments />,
    title: "Engage Automatically",
    description:
      "Let Slide handle interactions with predefined messages or AI-powered responses.",
    bgColor: "bg-pink-500",
  },
];
