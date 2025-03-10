import { PinInput as ArkPinInput } from "@ark-ui/react";
import { cn } from "@/app/lib/cn";
import { Input } from "./input";

type Props = {
  label?: React.ReactNode;
  count?: number;
} & ArkPinInput.RootProps;

export function PinInput(props: Props) {
  const { className, label, count = 4, ...rest } = props;

  return (
    <ArkPinInput.Root
      className={cn("flex flex-col gap-1", className)}
      {...rest}
    >
      {label ? (
        <ArkPinInput.Label className="text-sm font-semibold text-[#21201C]">
          {label}
        </ArkPinInput.Label>
      ) : null}
      <ArkPinInput.Control className="flex gap-2">
        {Array.from({ length: count }).map((_, index) => (
          <ArkPinInput.Input key={index} index={index} asChild>
            <Input />
          </ArkPinInput.Input>
        ))}
      </ArkPinInput.Control>
      <ArkPinInput.HiddenInput />
    </ArkPinInput.Root>
  );
}
