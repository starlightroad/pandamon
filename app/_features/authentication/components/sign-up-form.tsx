"use client";

import { CircleUserRoundIcon, KeyRoundIcon } from "lucide-react";

import { Box, Button, Flex, Text, TextField } from "@radix-ui/themes";

import formStyles from "@/public/styles/form.module.css";

export default function SignUpForm() {
  return (
    <Flex direction="column" gap="3" asChild>
      <form>
        <Flex direction="column">
          <Text as="label" htmlFor="email" className={formStyles["sr-only"]}>
            Email
          </Text>
          <TextField.Root
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            size="3"
            radius="large"
          >
            <TextField.Slot>
              <CircleUserRoundIcon size={15} />
            </TextField.Slot>
          </TextField.Root>
        </Flex>
        <Flex direction="column">
          <Text as="label" htmlFor="password" className={formStyles["sr-only"]}>
            Password
          </Text>
          <TextField.Root
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            size="3"
            radius="large"
          >
            <TextField.Slot>
              <KeyRoundIcon size={15} />
            </TextField.Slot>
          </TextField.Root>
        </Flex>
        <ActionButton />
      </form>
    </Flex>
  );
}

function ActionButton() {
  return (
    <Box width="100%" asChild>
      <Button size="3" radius="large" disabled>
        Sign Up
      </Button>
    </Box>
  );
}
