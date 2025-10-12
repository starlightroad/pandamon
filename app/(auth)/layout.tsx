import { Box, Container } from "@radix-ui/themes";

type Props = {
  children: React.ReactNode;
};

export default function AuthLayout({ children }: Props) {
  return (
    <Box py="8">
      <Container size="1" px="4">
        {children}
      </Container>
    </Box>
  );
}
