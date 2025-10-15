"use client";

import NextLink from "next/link";

import { usePathname } from "next/navigation";

import { Box, Button, Flex, Separator, Text } from "@radix-ui/themes";

import { ChartPieIcon, HexagonIcon, TriangleAlertIcon } from "lucide-react";

import type { NavItem } from "@/app/_lib/definitions";

import ThemeSwitcher from "@/app/_ui/mobile-theme-switcher";

const sidebarItems: NavItem[] = [
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

const mobileMenuItems: Omit<NavItem, "icon">[] = [
  {
    id: "mobile-menu-item-3",
    label: "Account",
    href: "/account",
  },
  {
    id: "mobile-menu-item-4",
    label: "Settings",
    href: "/settings",
  },
];

export default function MobileNavigation() {
  const pathname = usePathname();

  return (
    <Box
      px="4"
      width="100%"
      height="100%"
      position="fixed"
      display={{
        sm: "none",
      }}
      style={{
        backgroundColor: "var(--color-background)",
      }}
    >
      <Flex direction="column" gap="1" py="3" asChild>
        <ul
          style={{
            listStyleType: "none",
          }}
        >
          {sidebarItems.map((sidebarItem) => {
            const keyId = sidebarItem.id.replace("sidebar", "mobile-menu");
            const activeItem = pathname.startsWith(sidebarItem.href);
            const backgroundColor = activeItem ? "var(--accent-a3)" : undefined;
            const borderRadius = "var(--radius-5)";

            return (
              <li key={keyId}>
                <Flex width="100%" px="3" py="2" justify="start" asChild>
                  <Button
                    type="button"
                    variant="ghost"
                    color="gray"
                    style={{
                      margin: 0,
                      width: "calc(100% - 24px)",
                      backgroundColor,
                      borderRadius,
                    }}
                    size="3"
                    asChild
                  >
                    <NextLink href={sidebarItem.href}>
                      <Text weight="medium">{sidebarItem.label}</Text>
                    </NextLink>
                  </Button>
                </Flex>
              </li>
            );
          })}
        </ul>
      </Flex>
      <Separator
        my="4"
        size="4"
        style={{
          backgroundColor: "var(--gray-4)",
        }}
      />
      <Flex direction="column" gap="1" py="3" asChild>
        <ul
          style={{
            listStyleType: "none",
          }}
        >
          {mobileMenuItems.map((sidebarItem) => {
            const key = sidebarItem.id.replace("sidebar", "mobile-menu");
            const activeItem = pathname.startsWith(sidebarItem.href);
            const backgroundColor = activeItem ? "var(--accent-a3)" : undefined;
            const borderRadius = "var(--radius-5)";

            return (
              <li key={key}>
                <Flex justify="start" px="3" py="2" width="100%" asChild>
                  <Button
                    type="button"
                    variant="ghost"
                    color="gray"
                    style={{
                      margin: 0,
                      width: "calc(100% - 24px)",
                      backgroundColor,
                      borderRadius,
                    }}
                    size="3"
                    asChild
                  >
                    <NextLink href={sidebarItem.href}>
                      <Text weight="medium">{sidebarItem.label}</Text>
                    </NextLink>
                  </Button>
                </Flex>
              </li>
            );
          })}
        </ul>
      </Flex>
      <Separator
        my="4"
        size="4"
        style={{
          backgroundColor: "var(--gray-4)",
        }}
      />
      <Box width="100%" mt="3" asChild>
        <Button
          type="button"
          size="3"
          style={{
            borderRadius: "var(--radius-5)",
          }}
        >
          Sign Out
        </Button>
      </Box>
      <Flex width="100%" py="4" justify="center">
        <ThemeSwitcher />
      </Flex>
    </Box>
  );
}
