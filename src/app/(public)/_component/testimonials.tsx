import { motion } from "framer-motion";
import React from "react";
import SectionHeading from "./section-heading";
import { BRAND } from "@/constants/common";
import Image from "next/image";
import { Marquee } from "@/components/magicui/marquee";

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

type Props = {};

export default function Testimonials({}: Props) {
  return (
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
  );
}
