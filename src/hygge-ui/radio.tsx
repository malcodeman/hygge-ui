import { RadioGroup as ArkRadioGroup } from "@ark-ui/react";
import { createContext, useContext } from "react";
import { cva } from "class-variance-authority";
import { cn } from "./cn";

export const radioControlVariants = cva(
  "border-border-subtle shrink-0 rounded-full border transition-colors data-[state=checked]:outline-4 data-[state=checked]:-outline-offset-[5px]",
  {
    variants: {
      colorPalette: {
        gray: `outline-[#21201C] data-[state=checked]:border-[#21201C] data-[state=checked]:bg-white dark:outline-white dark:data-[state=checked]:border-white dark:data-[state=checked]:bg-[#21201C]`,
        orange: `outline-[#eb5e41] data-[state=checked]:border-[#eb5e41] data-[state=checked]:bg-white`,
        teal: `outline-[#0d9488] data-[state=checked]:border-[#0d9488] data-[state=checked]:bg-white`,
        green: `outline-[#38a169] data-[state=checked]:border-[#38a169] data-[state=checked]:bg-white`,
        red: `outline-[#fd5454] data-[state=checked]:border-[#fd5454] data-[state=checked]:bg-white`,
      },
      size: {
        xs: "size-3",
        sm: "size-4",
        md: "size-5",
        lg: "size-6",
        xl: "size-7",
      },
    },
    defaultVariants: {
      colorPalette: "gray",
      size: "md",
    },
  },
);

type ColorPalette = "gray" | "orange" | "teal" | "green" | "red";
type Size = "xs" | "sm" | "md" | "lg" | "xl";

const RadioContext = createContext<{
  colorPalette: ColorPalette;
  size: Size;
}>({
  colorPalette: "gray",
  size: "md",
});

type Props = {
  label?: React.ReactNode;
  colorPalette?: ColorPalette;
  size?: Size;
} & ArkRadioGroup.RootProps;

export function RadioGroup(props: Props) {
  const {
    label,
    colorPalette = "gray",
    size = "md",
    className,
    children,
    ...rest
  } = props;

  return (
    <RadioContext.Provider value={{ colorPalette, size }}>
      <ArkRadioGroup.Root
        {...rest}
        className={cn("flex flex-col gap-2", className)}
      >
        {label ? (
          <ArkRadioGroup.Label className="text-fg-default text-sm/6 font-semibold">
            {label}
          </ArkRadioGroup.Label>
        ) : null}
        {children}
      </ArkRadioGroup.Root>
    </RadioContext.Provider>
  );
}

export function RadioGroupItem(props: ArkRadioGroup.ItemProps) {
  const { className, children, ...rest } = props;
  const { colorPalette, size } = useContext(RadioContext);

  return (
    <ArkRadioGroup.Item
      {...rest}
      className="flex cursor-pointer items-center gap-2 data-disabled:cursor-not-allowed data-disabled:opacity-50 data-readonly:cursor-default"
    >
      <ArkRadioGroup.ItemControl
        className={cn(
          radioControlVariants({ colorPalette, size }),
          "data-invalid:border-[#fd5454] data-invalid:outline-[#fd5454] data-[state=checked]:data-invalid:border-[#fd5454] data-invalid:data-[state=checked]:bg-white",
          className,
        )}
      />
      <ArkRadioGroup.ItemText>{children}</ArkRadioGroup.ItemText>
      <ArkRadioGroup.ItemHiddenInput />
    </ArkRadioGroup.Item>
  );
}
