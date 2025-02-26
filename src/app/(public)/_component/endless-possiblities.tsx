import React from "react";
import SectionHeading from "./section-heading";
import { BentoHero } from "./bento-features";

type Props = {};

export default function EndlessPossibilities({}: Props) {
  return (
    <section id="possibilities" className="py-20">
      <div className="container px-4">
        <SectionHeading
          title="Endless Possibilities"
          subtitle="Slide offers a range of features to help you engage with your audience like never before."
        />
        <BentoHero />
      </div>
    </section>
  );
}
