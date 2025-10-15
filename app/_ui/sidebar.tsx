"use client";

import NextLink from "next/link";

import { usePathname } from "next/navigation";

import { Box, Button, Flex, Text } from "@radix-ui/themes";

import { ChartPieIcon, HexagonIcon, TriangleAlertIcon } from "lucide-react";

import { SIDEBAR_WIDTH } from "@/app/_lib/constants";

import type { SidebarItem } from "@/app/_lib/definitions";

import UserMenu from "@/app/_ui/user-menu";

const sidebarItems: SidebarItem[] = [
  {
    id: "sidebar-item-0",
    label: "Monitors",
    href: "/dashboard/monitors",
    icon: HexagonIcon,
  },
  {
    id: "sidebar-item-1",
    label: "Incidents",
    href: "#",
    icon: TriangleAlertIcon,
  },
  {
    id: "sidebar-item-2",
    label: "Analytics",
    href: "#",
    icon: ChartPieIcon,
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const sidebarWidth = `${SIDEBAR_WIDTH}px`;

  return (
    <Box
      width={sidebarWidth}
      display={{
        initial: "none",
        sm: "block",
      }}
      style={{
        borderRight: "1px solid var(--gray-4)",
      }}
    >
      <UserMenu />
      <Flex direction="column" gap="1" p="2" asChild>
        <ul
          style={{
            listStyleType: "none",
          }}
        >
          {sidebarItems.map((sidebarItem) => {
            const activeItem = pathname.startsWith(sidebarItem.href);
            const backgroundColor = activeItem ? "var(--accent-a3)" : undefined;
            const borderRadius = "var(--radius-5)";

            return (
              <li key={sidebarItem.id}>
                <Flex
                  px="3"
                  py="2"
                  justify="start"
                  gap="2"
                  width="100%"
                  style={{
                    backgroundColor,
                    borderRadius,
                  }}
                  asChild
                >
                  <Button
                    variant="ghost"
                    color="gray"
                    asChild
                    style={{
                      margin: 0,
                      width: "calc(100% - 24px)",
                    }}
                  >
                    <NextLink href={sidebarItem.href}>
                      <sidebarItem.icon size={15} />
                      <Text weight="medium">{sidebarItem.label}</Text>
                    </NextLink>
                  </Button>
                </Flex>
              </li>
            );
          })}
        </ul>
      </Flex>
    </Box>
  );
}
