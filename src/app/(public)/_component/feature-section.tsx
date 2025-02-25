import { BRAND } from "@/constants/common";
import { cn } from "@/lib/utils";
import {
  IconAdjustmentsAlt,
  IconChartLine,
  IconCloud,
  IconCurrencyDollar,
  IconHeart,
  IconHelp,
  IconShieldLock,
  IconWand,
} from "@tabler/icons-react";

export function FeaturesSection() {
  const features = [
    {
      title: "Designed for Mental Wellness",
      description:
        "Crafted with care to support your emotional and mental health journey.",
      icon: <IconHeart />,
    },
    {
      title: "Personalized Therapy Experience",
      description:
        "Get recommendations and guidance tailored to your unique needs.",
      icon: <IconAdjustmentsAlt />,
    },
    {
      title: "Affordable and Accessible",
      description:
        "High-quality mental health support at a price everyone can afford.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Available Anytime, Anywhere",
      description:
        "Access Euphonia’s services 24/7 from the comfort of your home.",
      icon: <IconCloud />,
    },
    {
      title: "Secure and Private",
      description:
        "Your data and conversations are protected with end-to-end encryption.",
      icon: <IconShieldLock />,
    },
    {
      title: "Real-Time Assistance",
      description:
        "Engage with our AI therapists in real time for instant support.",
      icon: <IconHelp />,
    },
    {
      title: "Progress Tracking",
      description:
        "Monitor your growth and milestones as you work on your mental wellness.",
      icon: <IconChartLine />,
    },
    {
      title: "And More to Explore",
      description:
        "A comprehensive suite of features to make your wellness journey smoother.",
      icon: <IconWand />,
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          Powerful Features
        </h2>
        <p className="max-w-[900px] text-gray-400">
          Discover the features that make {BRAND} the perfect companion for your
          social media journey.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-2 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-lg font-[600] text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-md text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10 font-[500]">
        {description}
      </p>
    </div>
  );
};
