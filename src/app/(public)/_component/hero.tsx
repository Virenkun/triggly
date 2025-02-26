import React from "react";
import { motion } from "framer-motion";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { BRAND } from "@/constants/common";
import { useRouter } from "next/navigation";

type Props = {};

export default function Hero({}: Props) {
  const router = useRouter();
  return (
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
  );
}
