import { RadioGroup as ArkRadioGroup } from "@ark-ui/react";
import { cn } from "./cn";
import { createContext, useContext } from "react";

type ColorPalette = "gray" | "orange" | "teal" | "green" | "red";

const RadioCardContext = createContext<{ colorPalette: ColorPalette }>({
  colorPalette: "gray",
});

type RadioCardGroupProps = {
  colorPalette?: "gray" | "orange" | "teal" | "green" | "red";
} & ArkRadioGroup.RootProps;

export function RadioCardGroup(props: RadioCardGroupProps) {
  const { colorPalette = "gray", className, ...rest } = props;

  return (
    <RadioCardContext.Provider value={{ colorPalette }}>
      <ArkRadioGroup.Root
        {...rest}
        className={cn("flex flex-col gap-2", className)}
      />
    </RadioCardContext.Provider>
  );
}

type RadioCardProps = {
  label?: React.ReactNode;
  description?: React.ReactNode;
} & ArkRadioGroup.ItemProps;

export function RadioCard(props: RadioCardProps) {
  const { label, description, className, ...rest } = props;
  const { colorPalette } = useContext(RadioCardContext);
  const hasContent = label || description;

  return (
    <ArkRadioGroup.Item
      {...rest}
      className={cn(
        "flex cursor-pointer justify-between gap-2 rounded-sm border border-[#E9E8E6] p-2 transition-colors data-disabled:cursor-not-allowed data-disabled:opacity-50 dark:border-[#2a2a28]",
        {
          "data-[state=checked]:border-[#21201C]": colorPalette === "gray",
          "data-[state=checked]:border-[#eb5e41]": colorPalette === "orange",
          "data-[state=checked]:border-[#0d9488]": colorPalette === "teal",
          "data-[state=checked]:border-[#38a169]": colorPalette === "green",
          "data-[state=checked]:border-[#fd5454]": colorPalette === "red",
        },
        className,
      )}
    >
      {hasContent ? (
        <div className="flex flex-col">
          {label ? (
            <ArkRadioGroup.ItemText className="text-sm font-semibold text-[#21201C] dark:text-[#eeeeec]">
              {label}
            </ArkRadioGroup.ItemText>
          ) : null}
          {description ? (
            <p className="text-sm text-[#63635E] dark:text-[#b5b3ad]">
              {description}
            </p>
          ) : null}
        </div>
      ) : null}
      <ArkRadioGroup.ItemControl
        className={cn(
          "size-5 shrink-0 rounded-full border border-[#E9E8E6] transition-colors dark:border-[#2a2a28]",
          {
            "data-[state=checked]:border-[#21201C] data-[state=checked]:bg-[#21201C] dark:data-[state=checked]:border-[#eeeeec] dark:data-[state=checked]:bg-[#eeeeec]":
              colorPalette === "gray",
            "data-[state=checked]:border-[#eb5e41] data-[state=checked]:bg-[#eb5e41]":
              colorPalette === "orange",
            "data-[state=checked]:border-[#0d9488] data-[state=checked]:bg-[#0d9488]":
              colorPalette === "teal",
            "data-[state=checked]:border-[#38a169] data-[state=checked]:bg-[#38a169]":
              colorPalette === "green",
            "data-[state=checked]:border-[#fd5454] data-[state=checked]:bg-[#fd5454]":
              colorPalette === "red",
          },
        )}
      />
      <ArkRadioGroup.ItemHiddenInput />
    </ArkRadioGroup.Item>
  );
}
