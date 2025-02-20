import React from "react";

type Props = {
  title: String;
  subtitle?: String;
};

export default function SectionHeading({ title, subtitle }: Props) {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
        {title}
      </h2>
      <p className="max-w-[900px] text-gray-400">{subtitle}</p>
    </div>
  );
}
