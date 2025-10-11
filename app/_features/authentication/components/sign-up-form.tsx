"use client";

import { useState } from "react";

import { useFormState } from "react-dom";

import { Flex, IconButton, Text, TextField } from "@radix-ui/themes";

import {
  CircleUserRoundIcon,
  EyeIcon,
  EyeOffIcon,
  KeyRoundIcon,
} from "lucide-react";

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
  const [showPassword, setShowPassword] = useState(false);

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
            type={showPassword ? "text" : "password"}
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
            <TextField.Slot>
              <IconButton
                type="button"
                variant="ghost"
                color="gray"
                size="1"
                onClick={() => setShowPassword((prevState) => !prevState)}
              >
                {showPassword ? (
                  <EyeIcon size={15} />
                ) : (
                  <EyeOffIcon size={15} />
                )}
              </IconButton>
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
