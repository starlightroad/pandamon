import NextLink from "next/link";

import { ArrowUpRightIcon } from "lucide-react";

import { Avatar, Card, Flex, Heading, Link, Text } from "@radix-ui/themes";

import { AuthForm, signInUser } from "@/app/_features/authentication";

export default async function SignIn() {
  return (
    <main>
      <Card size="3" variant="ghost">
        <Flex align="center" justify="center" mb="3">
          <Avatar fallback="P" radius="full" />
        </Flex>
        <Heading weight="bold" mb="5" align="center">
          Sign in to your account
        </Heading>
        <AuthForm type="signin" actionHandler={signInUser} />
        <Text as="div" weight="medium" align="center" my="5" color="gray">
          No account?&nbsp;
          <Link underline="hover" color="blue" asChild>
            <Flex display="inline-flex" align="center" gap="1" asChild>
              <NextLink href="/signup">
                Sign up <ArrowUpRightIcon size={15} />
              </NextLink>
            </Flex>
          </Link>
        </Text>
      </Card>
    </main>
  );
}
