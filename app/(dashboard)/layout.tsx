import { Box, Flex } from "@radix-ui/themes";

import Navbar from "@/app/_ui/navbar";

import Sidebar from "@/app/_ui/sidebar";

type Props = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: Props) {
  return (
    <Flex height="100vh" width="100%" direction="row">
      <Sidebar />
      <Box width="inherit">
        <Navbar />
        {children}
      </Box>
    </Flex>
  );
}
