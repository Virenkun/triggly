import { InstagramColor, WhatsApp, TikTok, FaceBook, Telegram } from "@/icons";

type Props = {
  title: string;
  icon: React.ReactNode;
  description: string;
  strategy: "INSTAGRAM" | "CRM" | "WHATSAPP";
  isActive: boolean;
};

export const INTEGRATION_CARDS: Props[] = [
  {
    title: "Connect Instagram",
    description: "Integrate your account to an instagram user",
    icon: <InstagramColor />,
    strategy: "INSTAGRAM",
    isActive: true,
  },
  {
    title: "Connect WhatsApp",
    description: "Integrate your account to a Connect WhatsApp user",
    icon: <WhatsApp />,
    strategy: "WHATSAPP",
    isActive: false,
  },
  {
    title: "Connect TikTok",
    description: "Integrate your account to a Connect TikTok user",
    icon: <TikTok />,
    strategy: "CRM",
    isActive: false,
  },
  {
    title: "Connect Facebook",
    description: "Integrate your account to a Connect Facebook user",
    icon: <FaceBook />,
    strategy: "INSTAGRAM",
    isActive: false,
  },
  {
    title: "Connect Telegram",
    description: "Integrate your account to a Connect Telegram user",
    icon: <Telegram />,
    strategy: "INSTAGRAM",
    isActive: false,
  },
];
