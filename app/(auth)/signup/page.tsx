import NextLink from "next/link";

import { ArrowUpRightIcon } from "lucide-react";

import { Card, Flex, Heading, Link, Text } from "@radix-ui/themes";

import { APP_NAME } from "@/app/_lib/constants";

import { SignUpForm } from "@/app/_features/authentication";

export default async function SignUp() {
  return (
    <main>
      <Card size="3" variant="ghost">
        <Heading weight="bold" mb="5" align="center">
          Create your {APP_NAME} account
        </Heading>
        <SignUpForm />
        <Text as="div" weight="medium" align="center" my="5" color="gray">
          Already have an account?&nbsp;
          <Link underline="hover" color="blue" asChild>
            <Flex display="inline-flex" align="center" gap="1" asChild>
              <NextLink href="#">
                Sign in <ArrowUpRightIcon size={15} />
              </NextLink>
            </Flex>
          </Link>
        </Text>
      </Card>
    </main>
  );
}
