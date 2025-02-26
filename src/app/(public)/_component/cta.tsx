import { RainbowButton } from "@/components/magicui/rainbow-button";
import { BRAND } from "@/constants/common";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

export default function CTA({}: Props) {
  const router = useRouter();
  return (
    <section id="contact" className="pt-2 pb-10 mb-10 text-white">
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
  );
}
