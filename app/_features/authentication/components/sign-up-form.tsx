"use client";

import { useState } from "react";

import { useFormState } from "react-dom";

import { Flex, Text, TextField } from "@radix-ui/themes";

import { CircleUserRoundIcon, KeyRoundIcon } from "lucide-react";

import formStyles from "@/public/styles/form.module.css";

import {
  authenticate,
  ErrorCallout,
  SubmitButton,
} from "@/app/_features/authentication";

export default function SignUpForm() {
  const [errorMessage, signUpAction] = useFormState(authenticate, undefined);

  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  return (
    <Flex direction="column" gap="3" asChild>
      <form action={signUpAction}>
        {errorMessage && <ErrorCallout message={errorMessage} />}
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
            value={emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
            required
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
            value={passwordValue}
            onChange={(e) => setPasswordValue(e.target.value)}
            required
          >
            <TextField.Slot>
              <KeyRoundIcon size={15} />
            </TextField.Slot>
          </TextField.Root>
        </Flex>
        <SubmitButton disabled={!emailValue || !passwordValue}>
          Sign Up
        </SubmitButton>
      </form>
    </Flex>
  );
}
