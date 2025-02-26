import React from "react";
import { FeaturesSection } from "./feature-section";

type Props = {};

export default function Features({}: Props) {
  return (
    <section id="features" className="py-20">
      <div className="container px-4">
        <FeaturesSection />
      </div>
    </section>
  );
}
