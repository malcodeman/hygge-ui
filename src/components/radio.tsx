import { RadioGroup as ArkRadioGroup } from "@ark-ui/react";
import { cn } from "./cn";
import { createContext, useContext } from "react";

type ColorPalette = "gray" | "orange" | "teal" | "green" | "red";

const RadioContext = createContext<{ colorPalette: ColorPalette }>({
  colorPalette: "gray",
});

type Props = {
  colorPalette?: "gray" | "orange" | "teal" | "green" | "red";
} & ArkRadioGroup.RootProps;

export function RadioGroup(props: Props) {
  const { colorPalette = "gray", className, ...rest } = props;

  return (
    <RadioContext.Provider value={{ colorPalette }}>
      <ArkRadioGroup.Root
        {...rest}
        className={cn("flex flex-col gap-1", className)}
      />
    </RadioContext.Provider>
  );
}

export function RadioGroupLabel(props: ArkRadioGroup.LabelProps) {
  const { className, ...rest } = props;

  return (
    <ArkRadioGroup.Label
      {...rest}
      className={cn(
        "text-sm font-semibold text-[#21201C] dark:text-[#eeeeec]",
        className,
      )}
    />
  );
}

export function RadioGroupItem(props: ArkRadioGroup.ItemProps) {
  const { className, children, ...rest } = props;
  const { colorPalette } = useContext(RadioContext);

  return (
    <ArkRadioGroup.Item
      {...rest}
      className="flex cursor-pointer items-center gap-2 data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50"
    >
      <ArkRadioGroup.ItemControl
        className={cn(
          "size-5 rounded-full border border-[#E9E8E6] transition-colors dark:border-[#2a2a28]",
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
          className,
        )}
      />
      <ArkRadioGroup.ItemText>{children}</ArkRadioGroup.ItemText>
      <ArkRadioGroup.ItemHiddenInput />
    </ArkRadioGroup.Item>
  );
}
