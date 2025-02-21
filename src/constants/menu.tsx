import {
  AutomationColor,
  AutomationDuoToneWhite,
  HomeColor,
  HomeDuoToneBlue,
  HomeDuoToneWhite,
  RocketColor,
  RocketDuoToneBlue,
  RocketDuoToneWhite,
  SettingsColor,
  SettingsDuoToneWhite,
} from "@/icons";
import { v4 as uuid } from "uuid";

export type FieldProps = {
  label: string;
  id: string;
};

type SideBarProps = {
  icon: React.ReactNode;
  iconActive: React.ReactNode;
} & FieldProps;

export const SIDEBAR_MENU: SideBarProps[] = [
  {
    id: uuid(),
    label: "home",
    icon: <HomeDuoToneWhite />,
    iconActive: <HomeColor />,
  },
  {
    id: uuid(),
    label: "automations",
    icon: <AutomationDuoToneWhite />,
    iconActive: <AutomationColor />,
  },
  {
    id: uuid(),
    label: "integrations",
    icon: <RocketDuoToneWhite />,
    iconActive: <RocketColor />,
  },
  {
    id: uuid(),
    label: "settings",
    icon: <SettingsDuoToneWhite />,
    iconActive: <SettingsColor />,
  },
];
