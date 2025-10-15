import { ChartPieIcon, HexagonIcon, TriangleAlertIcon } from "lucide-react";

import type { NavItem } from "@/app/_lib/definitions";

export const getNavigationItems = (): NavItem[] => {
  return [
    {
      id: "nav-item-0",
      label: "Monitors",
      href: "/dashboard/monitors",
      icon: HexagonIcon,
    },
    {
      id: "nav-item-1",
      label: "Incidents",
      href: "#",
      icon: TriangleAlertIcon,
    },
    {
      id: "nav-item-2",
      label: "Analytics",
      href: "#",
      icon: ChartPieIcon,
    },
  ];
};
