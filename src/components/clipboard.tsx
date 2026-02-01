import { Clipboard as ArkClipboard } from "@ark-ui/react";
import { LuCheck, LuClipboardCopy } from "react-icons/lu";
import { Input } from "./input";
import { Button } from "./button";

type Props = {
  label?: React.ReactNode;
} & ArkClipboard.RootProps;

export function Clipboard(props: Props) {
  const { label, ...rest } = props;

  return (
    <ArkClipboard.Root {...rest}>
      {label ? (
        <ArkClipboard.Label className="text-fg-default text-sm/6 font-semibold">
          {label}
        </ArkClipboard.Label>
      ) : null}
      <ArkClipboard.Control className="flex gap-2">
        <ArkClipboard.Input asChild>
          <Input variant="outline" />
        </ArkClipboard.Input>
        <ArkClipboard.Trigger asChild>
          <Button variant="outline">
            <ArkClipboard.Indicator copied={<LuCheck size={16} />}>
              <LuClipboardCopy size={16} />
            </ArkClipboard.Indicator>
          </Button>
        </ArkClipboard.Trigger>
      </ArkClipboard.Control>
    </ArkClipboard.Root>
  );
}
