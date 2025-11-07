import { Checkbox as ArkCheckbox } from "@ark-ui/react";
import { LuCheck } from "react-icons/lu";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "./cn";

const checkboxVariants = cva(undefined, {
  variants: {
    size: {
      sm: "h-4 w-4",
      md: "h-5 w-5",
      lg: "h-6 w-6",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

type Props = VariantProps<typeof checkboxVariants> & {
  label?: React.ReactNode;
  labelPlacement?: "start" | "end";
} & ArkCheckbox.RootProps;

export function Checkbox({
  size,
  label,
  labelPlacement = "end",
  className,
  ...rest
}: Props) {
  return (
    <ArkCheckbox.Root
      {...rest}
      className={cn(
        "inline-flex cursor-pointer items-center gap-2 data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 data-[readonly]:cursor-default",
        className,
      )}
    >
      {label && labelPlacement === "start" ? (
        <ArkCheckbox.Label className="text-fg-default text-sm/6 font-semibold">
          {label}
        </ArkCheckbox.Label>
      ) : null}
      <ArkCheckbox.Control
        className={cn(
          checkboxVariants({ size }),
          "border-border-subtle inline-flex flex-shrink-0 items-center justify-center rounded-sm border transition-colors",
          "data-[state=checked]:border-[#21201C] data-[state=checked]:bg-[#21201C] dark:data-[state=checked]:border-[#eeeeec] dark:data-[state=checked]:bg-[#eeeeec]",
          "data-[invalid]:border-[#dc2626] data-[state=checked]:data-[invalid]:border-[#dc2626] data-[state=checked]:data-[invalid]:bg-[#dc2626]",
        )}
      >
        <ArkCheckbox.Indicator
          className={cn(
            "text-white dark:text-[#21201C]",
            "data-[invalid]:bg-[#dc2626] dark:data-[invalid]:text-white",
          )}
        >
          <LuCheck size={16} />
        </ArkCheckbox.Indicator>
      </ArkCheckbox.Control>
      {label && labelPlacement === "end" ? (
        <ArkCheckbox.Label className="text-fg-default text-sm/6 font-semibold">
          {label}
        </ArkCheckbox.Label>
      ) : null}
      <ArkCheckbox.HiddenInput />
    </ArkCheckbox.Root>
  );
}
