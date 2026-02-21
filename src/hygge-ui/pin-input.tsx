import { PinInput as ArkPinInput } from "@ark-ui/react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "./cn";
import { Input } from "./input";

const inputVariants = cva("text-center", {
  variants: {
    variant: {
      subtle: "",
      outline: "",
    },
    size: {
      xs: "w-8",
      sm: "w-9",
      md: "w-10",
      lg: "w-11",
      xl: "w-12",
    },
  },
  defaultVariants: {
    variant: "subtle",
    size: "md",
  },
});

type Props = {
  label?: React.ReactNode;
  count?: number;
} & ArkPinInput.RootProps &
  VariantProps<typeof inputVariants>;

export function PinInput(props: Props) {
  const { className, label, count = 4, size, variant, ...rest } = props;

  return (
    <ArkPinInput.Root
      {...rest}
      className={cn("flex flex-col gap-1", className)}
    >
      {label ? (
        <ArkPinInput.Label className="text-fg-default text-sm/6 font-semibold">
          {label}
        </ArkPinInput.Label>
      ) : null}
      <ArkPinInput.Control className="isolate inline-flex gap-2">
        {Array.from({ length: count }).map((_, index) => (
          <ArkPinInput.Input key={index} index={index} asChild>
            <Input
              size={size}
              variant={variant}
              className={cn(inputVariants({ size, variant }))}
            />
          </ArkPinInput.Input>
        ))}
      </ArkPinInput.Control>
      <ArkPinInput.HiddenInput />
    </ArkPinInput.Root>
  );
}
