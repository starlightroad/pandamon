import type { LucideIcon } from "lucide-react";

export type SidebarItem = {
  id: string;
  label: string;
  href: string;
  icon: LucideIcon;
};

export type ThemeItem = {
  id: string;
  label: "system" | "light" | "dark";
  icon: LucideIcon;
};
