import { LaptopMinimalIcon, MoonIcon, SunIcon } from "lucide-react";

import type { ThemeItem } from "@/app/_lib/definitions";

export const getThemeItems = (): ThemeItem[] => {
  return [
    {
      id: "theme-item-0",
      label: "system",
      icon: LaptopMinimalIcon,
    },
    {
      id: "theme-item-1",
      label: "light",
      icon: SunIcon,
    },
    {
      id: "theme-item-2",
      label: "dark",
      icon: MoonIcon,
    },
  ];
};
