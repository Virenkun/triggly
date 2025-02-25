import { FaCogs, FaComments, FaPlug } from "react-icons/fa";

export const BRAND = "Triggly";

export const steps = [
  {
    icon: <FaPlug />,
    title: "Integrate Your Account",
    description:
      "Connect your Instagram account to Slide and unlock powerful automation features.",
    bgColor: "bg-purple-500",
  },
  {
    icon: <FaCogs />,
    title: "Create Automations",
    description:
      "Set up triggers for comments or DMs, and define your response strategy.",
    bgColor: "bg-blue-500",
  },
  {
    icon: <FaComments />,
    title: "Engage Automatically",
    description:
      "Let Slide handle interactions with predefined messages or AI-powered responses.",
    bgColor: "bg-pink-500",
  },
];
