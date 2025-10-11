import { InfoIcon } from "lucide-react";

import { Callout } from "@radix-ui/themes";

export default function ErrorCallout({ message }: { message: string }) {
  return (
    <Callout.Root color="red" size="1">
      <Callout.Icon>
        <InfoIcon size={15} />
      </Callout.Icon>
      <Callout.Text>{message}</Callout.Text>
    </Callout.Root>
  );
}
