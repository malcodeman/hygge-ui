import { RadioGroup as ArkRadioGroup } from "@ark-ui/react";
import { createContext, useContext } from "react";
import { cva } from "class-variance-authority";
import { cn } from "./cn";

type ColorPalette = "gray" | "orange" | "teal" | "green" | "red";
type Size = "xs" | "sm" | "md" | "lg" | "xl";

const RadioCardContext = createContext<{
  colorPalette: ColorPalette;
  size: Size;
}>({
  colorPalette: "gray",
  size: "md",
});

type RadioCardGroupProps = {
  colorPalette?: ColorPalette;
  size?: Size;
} & ArkRadioGroup.RootProps;

export function RadioCardGroup(props: RadioCardGroupProps) {
  const {
    colorPalette = "gray",
    size = "md",
    className,
    children,
    ...rest
  } = props;

  return (
    <RadioCardContext.Provider value={{ colorPalette, size }}>
      <ArkRadioGroup.Root
        {...rest}
        className={cn("flex flex-col gap-2", className)}
      >
        <div className="flex items-stretch gap-2">{children}</div>
      </ArkRadioGroup.Root>
    </RadioCardContext.Provider>
  );
}

const radioGroupItemVariants = cva(
  "border-border-subtle flex grow cursor-pointer justify-between gap-2 rounded-sm border transition-colors data-disabled:cursor-not-allowed data-disabled:opacity-50 data-invalid:border-[#fd5454] data-[state=checked]:data-invalid:border-[#fd5454]",
  {
    variants: {
      color: {
        gray: "data-[state=checked]:border-[#21201C] dark:data-[state=checked]:border-[#eeeeec]",
        orange: "data-[state=checked]:border-[#eb5e41]",
        teal: "data-[state=checked]:border-[#0d9488]",
        green: "data-[state=checked]:border-[#38a169]",
        red: "data-[state=checked]:border-[#fd5454]",
      },
      size: {
        xs: "p-1",
        sm: "p-2",
        md: "p-2",
        lg: "p-3",
        xl: "p-3",
      },
    },
    defaultVariants: {
      color: "gray",
      size: "md",
    },
  },
);
const radioGroupItemControlVariants = cva(
  "border-border-subtle shrink-0 rounded-full border transition-colors",
  {
    variants: {
      color: {
        gray: "data-[state=checked]:border-[#21201C] data-[state=checked]:bg-[#21201C] dark:data-[state=checked]:border-[#eeeeec] dark:data-[state=checked]:bg-[#eeeeec]",
        orange:
          "data-[state=checked]:border-[#eb5e41] data-[state=checked]:bg-[#eb5e41]",
        teal: "data-[state=checked]:border-[#0d9488] data-[state=checked]:bg-[#0d9488]",
        green:
          "data-[state=checked]:border-[#38a169] data-[state=checked]:bg-[#38a169]",
        red: "data-[state=checked]:border-[#fd5454] data-[state=checked]:bg-[#fd5454]",
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
      color: "gray",
      size: "md",
    },
  },
);

type RadioCardProps = {
  label?: React.ReactNode;
  description?: React.ReactNode;
  icon?: React.ReactNode;
} & ArkRadioGroup.ItemProps;

export function RadioCard(props: RadioCardProps) {
  const { label, description, icon, className, ...rest } = props;
  const { colorPalette, size } = useContext(RadioCardContext);
  const hasContent = label || description || icon;

  return (
    <ArkRadioGroup.Item
      {...rest}
      className={cn(
        radioGroupItemVariants({ color: colorPalette, size }),
        description || icon ? "items-start" : "items-center",
        className,
      )}
    >
      {hasContent ? (
        <div className="flex flex-col">
          {icon ? <div className="mb-2">{icon}</div> : null}
          {label ? (
            <ArkRadioGroup.ItemText className="text-fg-default text-sm/6 font-semibold">
              {label}
            </ArkRadioGroup.ItemText>
          ) : null}
          {description ? (
            <p className="text-fg-muted text-sm/6">{description}</p>
          ) : null}
        </div>
      ) : null}
      <ArkRadioGroup.ItemControl
        className={cn(
          radioGroupItemControlVariants({ color: colorPalette, size }),
        )}
      />
      <ArkRadioGroup.ItemHiddenInput />
    </ArkRadioGroup.Item>
  );
}
