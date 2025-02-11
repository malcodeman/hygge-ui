import { Clipboard as ArkClipboard } from "@ark-ui/react";
import { LuCheck, LuClipboardCopy } from "react-icons/lu";
import { cn } from "@/app/lib/cn";
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
        <ArkClipboard.Label
          className={cn("text-sm font-semibold text-[#21201C]")}
        >
          {label}
        </ArkClipboard.Label>
      ) : null}
      <ArkClipboard.Control className={cn("flex gap-2")}>
        <ArkClipboard.Input asChild>
          <Input />
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
