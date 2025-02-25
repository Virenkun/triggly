import React from "react";
import SectionHeading from "./section-heading";
import PricingCards from "./pricing-card";

type Props = {};

export default function Pricing({}: Props) {
  return (
    <section id="pricing" className="py-20">
      <div className="container px-4">
        <SectionHeading
          title="Choose Your Plan"
          subtitle="Select the perfect plan to boost your Instagram engagement"
        />
        <PricingCards />
      </div>
    </section>
  );
}
