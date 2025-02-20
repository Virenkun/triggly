import {
  InstagramDuoToneBlue,
  SalesForceDuoToneBlue,
  InstagramColor,
  WhatsApp,
  TikTok,
  FaceBook,
  Telegram,
} from "@/icons";

type Props = {
  title: string;
  icon: React.ReactNode;
  description: string;
  strategy: "INSTAGRAM" | "CRM" | "WHATSAPP";
};

export const INTEGRATION_CARDS: Props[] = [
  {
    title: "Connect Instagram",
    description: "Integrate your account to an instagram user",
    icon: <InstagramColor />,
    strategy: "INSTAGRAM",
  },
  {
    title: "Connect Salesforce",
    description: "Integrate your account to a Connect Salesforce user",
    icon: <SalesForceDuoToneBlue />,
    strategy: "CRM",
  },
  {
    title: "Connect WhatsApp",
    description: "Integrate your account to a Connect WhatsApp user",
    icon: <WhatsApp />,
    strategy: "WHATSAPP",
  },
  {
    title: "Connect TikTok",
    description: "Integrate your account to a Connect TikTok user",
    icon: <TikTok />,
    strategy: "CRM",
  },
  {
    title: "Connect Facebook",
    description: "Integrate your account to a Connect Facebook user",
    icon: <FaceBook />,
    strategy: "INSTAGRAM",
  },
  {
    title: "Connect Telegram",
    description: "Integrate your account to a Connect Telegram user",
    icon: <Telegram />,
    strategy: "INSTAGRAM",
  },
];
