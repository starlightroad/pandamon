"use client";

import NextLink from "next/link";

import { usePathname } from "next/navigation";

import { Box, Button, Flex, Separator, Text } from "@radix-ui/themes";

import type { NavItem } from "@/app/_lib/definitions";

import { getNavigationItems } from "@/app/_data/nav-item";

import ThemeSwitcher from "@/app/_ui/mobile-theme-switcher";

const mobileItems = getNavigationItems();

const subMobileItems: Omit<NavItem, "icon">[] = [
  {
    id: "sub-mobile-nav-item-0",
    label: "Account",
    href: "/account",
  },
  {
    id: "sub-mobile-nav-item-1",
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
          {mobileItems.map((mobileItem) => {
            const keyId = mobileItem.id.replace("nav", "mobile-nav");
            const activeItem = pathname.startsWith(mobileItem.href);
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
                    <NextLink href={mobileItem.href}>
                      <Text weight="medium">{mobileItem.label}</Text>
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
          {subMobileItems.map((subMobileItem) => {
            const activeItem = pathname.startsWith(subMobileItem.href);
            const backgroundColor = activeItem ? "var(--accent-a3)" : undefined;
            const borderRadius = "var(--radius-5)";

            return (
              <li key={subMobileItem.id}>
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
                    <NextLink href={subMobileItem.href}>
                      <Text weight="medium">{subMobileItem.label}</Text>
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
