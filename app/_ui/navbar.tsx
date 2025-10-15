"use client";

import {
  Box,
  Container,
  Flex,
  IconButton,
  Separator,
  Tooltip,
} from "@radix-ui/themes";

import { useEffect, useState } from "react";

import { TextAlignJustifyIcon as MenuIcon, XIcon } from "lucide-react";

import { HEADER_HEIGHT } from "@/app/_lib/constants";

import useObserver from "@/app/_hooks/use-observer";

import MobileNavigation from "@/app/_ui/mobile-navigation";

function NavbarContainer({ children }: { children: React.ReactNode }) {
  return (
    <Box position="sticky" top="0">
      {children}
    </Box>
  );
}

export default function Navbar() {
  const headerHeight = `${HEADER_HEIGHT}px`;
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);
  const tooltipContent = isNavigationOpen
    ? "Close navigation"
    : "Open navigation";

  const [containerRef, isVisible] = useObserver();

  useEffect(() => {
    if (!isVisible && isNavigationOpen) {
      setIsNavigationOpen(false);
    }
  }, [isNavigationOpen, isVisible]);

  return (
    <NavbarContainer>
      <Flex
        width="100%"
        height={headerHeight}
        align="center"
        px="4"
        style={{
          backgroundColor: "var(--color-background)",
        }}
      >
        <Container>
          <Flex justify="end">
            <Box
              display={{
                sm: "none",
              }}
            >
              <Tooltip content={tooltipContent}>
                <IconButton
                  variant="ghost"
                  color="gray"
                  onClick={() => setIsNavigationOpen((prevState) => !prevState)}
                  style={{
                    margin: 0,
                    width: "20px",
                    height: "20px",
                  }}
                  aria-label={tooltipContent}
                  ref={containerRef}
                >
                  {isNavigationOpen ? (
                    <XIcon size={15} />
                  ) : (
                    <MenuIcon size={15} />
                  )}
                </IconButton>
              </Tooltip>
            </Box>
          </Flex>
        </Container>
      </Flex>
      <Separator
        size="4"
        style={{
          backgroundColor: "var(--gray-4)",
        }}
      />
      {isNavigationOpen && <MobileNavigation />}
    </NavbarContainer>
  );
}
