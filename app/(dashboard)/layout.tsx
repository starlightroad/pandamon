import { Flex } from "@radix-ui/themes";

import Sidebar from "@/app/_ui/sidebar";

type Props = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: Props) {
  return (
    <Flex height="100vh" direction="row">
      <Sidebar />
      {children}
    </Flex>
  );
}
