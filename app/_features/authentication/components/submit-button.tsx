"use client";

import { useFormStatus } from "react-dom";

import { Box, Button } from "@radix-ui/themes";

type Props = {
  children: React.ReactNode;
  disabled: boolean;
};

export default function SubmitButton({ children, disabled }: Props) {
  const { pending } = useFormStatus();
  const isDisabled = pending ? pending : disabled;

  return (
    <Box width="100%" asChild>
      <Button
        type="submit"
        aria-disabled={isDisabled}
        size="3"
        radius="large"
        disabled={isDisabled}
      >
        {children}
      </Button>
    </Box>
  );
}
