"use client";

import {
  Avatar,
  Box,
  Button,
  DropdownMenu,
  Flex,
  Separator,
  Skeleton,
  Text,
} from "@radix-ui/themes";

import {
  ChevronDown,
  ChevronUpIcon,
  CircleUserRoundIcon,
  LogOutIcon,
  PaletteIcon,
  SettingsIcon,
} from "lucide-react";

import { useState } from "react";

import { useTheme } from "next-themes";

import { capitalize } from "@/app/_lib/utils";

import { getThemeItems } from "@/app/_data/theme-item";

import { client, signOutUser } from "@/app/_features/authentication";

const themeItems = getThemeItems();

export default function UserMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const { data, isPending } = client.useSession();

  const userFullName = data?.user.name || data?.user.email || "";
  const borderRadius = "var(--radius-5)";

  const onSignOut = async () => {
    await signOutUser();
  };

  return (
    <Box>
      <Box p="2">
        <DropdownMenu.Root open={isOpen} onOpenChange={setIsOpen}>
          <DropdownMenu.Trigger>
            <Flex py="2" justify="between" width="100%" asChild>
              <Button
                color="gray"
                variant="ghost"
                style={{
                  margin: 0,
                  width: "calc(100% - 16px)",
                  borderRadius,
                }}
              >
                <Flex align="center" width="calc(100% - 19px)">
                  <Avatar
                    fallback={userFullName[0]}
                    size="1"
                    variant="solid"
                    color="amber"
                    radius="full"
                  />
                  <Text as="p" ml="2" weight="medium" truncate>
                    {isPending ? (
                      <Skeleton>Lorem ipsum dolor</Skeleton>
                    ) : (
                      userFullName
                    )}
                  </Text>
                </Flex>
                {isOpen ? (
                  <ChevronUpIcon size={15} />
                ) : (
                  <ChevronDown size={15} />
                )}
              </Button>
            </Flex>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content variant="soft" style={{ width: "224px" }}>
            <DropdownMenu.Item disabled>
              <CircleUserRoundIcon size={15} />
              Account
            </DropdownMenu.Item>
            <DropdownMenu.Sub>
              <DropdownMenu.SubTrigger>
                <PaletteIcon size={15} />
                Theme
              </DropdownMenu.SubTrigger>
              <DropdownMenu.SubContent style={{ width: "128px" }}>
                {themeItems.map((themeItem) => {
                  return (
                    <DropdownMenu.CheckboxItem
                      key={themeItem.id}
                      checked={themeItem.label === theme}
                      onCheckedChange={() => setTheme(themeItem.label)}
                    >
                      <themeItem.icon size={15} />
                      {capitalize(themeItem.label)}
                    </DropdownMenu.CheckboxItem>
                  );
                })}
              </DropdownMenu.SubContent>
            </DropdownMenu.Sub>
            <DropdownMenu.Item disabled>
              <SettingsIcon size={15} />
              Settings
            </DropdownMenu.Item>
            <DropdownMenu.Separator
              style={{
                marginLeft: "-8px",
                marginRight: "-8px",
              }}
            />
            <DropdownMenu.Item onClick={onSignOut}>
              <LogOutIcon size={15} />
              Sign Out
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </Box>
      <Separator size="4" style={{ backgroundColor: "var(--gray-4)" }} />
    </Box>
  );
}
