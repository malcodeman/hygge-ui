import { Checkbox as ArkCheckbox } from "@ark-ui/react";
import { LuCheck } from "react-icons/lu";
import { cn } from "@/app/lib/cn";

type Props = {
  colorPalette?: "gray" | "orange" | "teal" | "green" | "red";
  label?: React.ReactNode;
} & ArkCheckbox.RootProps;

export function Checkbox(props: Props) {
  const { colorPalette = "gray", label, ...rest } = props;

  return (
    <ArkCheckbox.Root
      {...rest}
      className={cn("inline-flex items-center gap-1")}
    >
      <ArkCheckbox.Control
        className={cn(
          "inline-flex h-5 w-5 flex-shrink-0 cursor-pointer items-center justify-center rounded-xs border border-[#E9E8E6] transition-colors data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50",
          {
            "data-[state=checked]:border-[#21201C] data-[state=checked]:bg-[#21201C]":
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
      >
        <ArkCheckbox.Indicator className="text-white">
          <LuCheck size={16} />
        </ArkCheckbox.Indicator>
      </ArkCheckbox.Control>
      {label ? (
        <ArkCheckbox.Label
          className={cn("text-sm font-semibold text-[#21201C]")}
        >
          {label}
        </ArkCheckbox.Label>
      ) : null}
      <ArkCheckbox.HiddenInput />
    </ArkCheckbox.Root>
  );
}
