import type { LucideIcon } from "lucide-react";

export type NavItem = {
  id: string;
  label: string;
  href: string;
  icon: LucideIcon;
};

export type ThemeItem = Omit<NavItem, "label" | "href"> & {
  label: "system" | "light" | "dark";
};
