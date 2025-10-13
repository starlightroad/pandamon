"use client";

import { Theme } from "@radix-ui/themes";

import { ThemeProvider as NextThemesProvider } from "next-themes";

type Props = {
  children: React.ReactNode;
};

export default function ThemeProvider({ children }: Props) {
  return (
    <NextThemesProvider attribute="class">
      <Theme accentColor="amber">{children}</Theme>
    </NextThemesProvider>
  );
}
