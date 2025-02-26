import React from "react";
import SectionHeading from "./section-heading";
import { OrbitingCirclesDemo } from "./integration-circle";

type Props = {};

export default function IntegrationOrbit({}: Props) {
  return (
    <section>
      <div className="px-4 mt-32">
        <SectionHeading
          title="Seamless Integrations"
          subtitle="Connect with your favorite platforms and tools to supercharge your social media presence"
        />
        <OrbitingCirclesDemo />
      </div>
    </section>
  );
}
