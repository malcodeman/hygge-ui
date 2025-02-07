import { Clipboard as ArkClipboard } from "@ark-ui/react";
import { LuCheck, LuClipboardCopy } from "react-icons/lu";
import { cn } from "@/app/lib/cn";

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
        <ArkClipboard.Input
          className={cn(
            "rounded-sm border border-[#E9E8E6] bg-[#f9f9f8] p-2 text-sm font-semibold text-[#21201C] focus:outline-2 focus:-outline-offset-1 focus:outline-[#21201C]",
          )}
        />
        <ArkClipboard.Trigger
          className={cn(
            "cursor-pointer rounded-sm border border-[#E9E8E6] p-2 text-[#63635E] transition-colors hover:bg-[#EFEEEC] hover:text-[#21201C]",
          )}
        >
          <ArkClipboard.Indicator copied={<LuCheck size={16} />}>
            <LuClipboardCopy size={16} />
          </ArkClipboard.Indicator>
        </ArkClipboard.Trigger>
      </ArkClipboard.Control>
    </ArkClipboard.Root>
  );
}
