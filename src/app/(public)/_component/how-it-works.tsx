import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { steps } from "@/constants/common";

type Props = {};

export default function HowItWorks({}: Props) {
  return (
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
              <p className="text-gray-400 max-w-xs mt-2">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
