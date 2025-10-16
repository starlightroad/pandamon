"use client";

import NextLink from "next/link";

import { usePathname } from "next/navigation";

import { Box, Button, Flex, Text } from "@radix-ui/themes";

import { SIDEBAR_WIDTH } from "@/app/_lib/constants";

import UserMenu from "@/app/_ui/user-menu";

import { getNavigationItems } from "@/app/_data/nav-item";

const sidebarItems = getNavigationItems();

export default function Sidebar() {
  const pathname = usePathname();
  const sidebarWidth = `${SIDEBAR_WIDTH}px`;

  return (
    <Box
      width="100%"
      maxWidth={sidebarWidth}
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
