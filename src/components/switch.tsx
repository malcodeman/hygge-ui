import { Switch as ArkSwitch } from "@ark-ui/react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "./cn";

const switchControlVariants = cva(
  "inline-flex items-center rounded-full bg-[#E9E8E6] p-0.5 transition-colors dark:bg-[#31312E]",
  {
    variants: {
      colorPalette: {
        gray: `data-[state=checked]:bg-[#21201C] dark:data-[state=checked]:bg-[#eeeeec]`,
        orange: `data-[state=checked]:bg-[#eb5e41]`,
        teal: `data-[state=checked]:bg-[#0d9488]`,
        green: `data-[state=checked]:bg-[#38a169]`,
        red: `data-[state=checked]:bg-[#fd5454]`,
      },
      size: {
        xs: "w-6",
        sm: "w-8",
        md: "w-10",
        lg: "w-12",
        xl: "w-14",
      },
    },
    defaultVariants: {
      colorPalette: "gray",
      size: "md",
    },
  },
);
const switchThumbVariants = cva(
  "rounded-full bg-white shadow-2xs transition-transform dark:bg-[#191918]",
  {
    variants: {
      size: {
        xs: "size-3 data-[state=checked]:translate-x-2",
        sm: "size-4 data-[state=checked]:translate-x-3",
        md: "size-5 data-[state=checked]:translate-x-4",
        lg: "size-6 data-[state=checked]:translate-x-5",
        xl: "size-7 data-[state=checked]:translate-x-6",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

type Props = VariantProps<typeof switchControlVariants> & {
  label?: React.ReactNode;
  labelPlacement?: "start" | "end";
} & ArkSwitch.RootProps;

export function Switch(props: Props) {
  const {
    label,
    labelPlacement = "end",
    size,
    colorPalette,
    className,
    ...rest
  } = props;

  return (
    <ArkSwitch.Root
      {...rest}
      className={cn(
        "inline-flex cursor-pointer items-center gap-2 data-disabled:cursor-not-allowed data-disabled:opacity-50 data-readonly:cursor-default",
        className,
      )}
    >
      {label && labelPlacement === "start" ? (
        <ArkSwitch.Label className="text-fg-default text-sm/6 font-semibold">
          {label}
        </ArkSwitch.Label>
      ) : null}
      <ArkSwitch.Control
        className={cn(
          switchControlVariants({ colorPalette, size }),
          "data-invalid:outline-2 data-invalid:outline-[#fd5454]",
        )}
      >
        <ArkSwitch.Thumb className={switchThumbVariants({ size })} />
      </ArkSwitch.Control>
      <ArkSwitch.HiddenInput />
      {label && labelPlacement === "end" ? (
        <ArkSwitch.Label className="text-fg-default text-sm/6 font-semibold">
          {label}
        </ArkSwitch.Label>
      ) : null}
    </ArkSwitch.Root>
  );
}
