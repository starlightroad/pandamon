"use client";

import { useTheme } from "next-themes";

import { useEffect, useState } from "react";

import { LaptopMinimalIcon, MoonIcon, SunIcon } from "lucide-react";

import {
  Badge,
  Box,
  Flex,
  IconButton,
  Skeleton,
  Tooltip,
} from "@radix-ui/themes";

import type { ThemeItem } from "@/app/_lib/definitions";

import { capitalize } from "@/app/_lib/utils";

const themeItems: ThemeItem[] = [
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

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Skeleton width="64px" height="32px" />;
  }

  return (
    <Flex display="inline-flex" py="2" gap="2" asChild>
      <Badge variant="surface" radius="full" size="1" color="gray">
        {themeItems.map((themeItem) => {
          const label = `${capitalize(themeItem.label)} theme`;
          const ariaLabel = `Set theme to ${themeItem.label}`;

          return (
            <Box key={themeItem.id}>
              <Tooltip content={label}>
                <IconButton
                  type="button"
                  size="1"
                  radius="full"
                  color="gray"
                  variant={theme === themeItem.label ? "soft" : "ghost"}
                  highContrast
                  style={{
                    margin: 0,
                  }}
                  onClick={() => setTheme(themeItem.label)}
                  aria-label={ariaLabel}
                >
                  <themeItem.icon size={15} />
                </IconButton>
              </Tooltip>
            </Box>
          );
        })}
      </Badge>
    </Flex>
  );
}
