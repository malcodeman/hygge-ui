import { Checkbox as ArkCheckbox } from "@ark-ui/react";
import { LuCheck } from "react-icons/lu";
import { cn } from "@/app/lib/cn";

type Props = {
  colorPalette?: "gray" | "orange" | "teal" | "green" | "red";
  label?: React.ReactNode;
  description?: React.ReactNode;
} & ArkCheckbox.RootProps;

export function CheckboxCard(props: Props) {
  const {
    colorPalette = "gray",
    label,
    description,
    className,
    ...rest
  } = props;
  const hasContent = label || description;

  return (
    <ArkCheckbox.Root
      {...rest}
      className={cn(
        "flex cursor-pointer justify-between gap-2 rounded-sm border border-[#E9E8E6] p-2 transition-colors data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 dark:border-[#2a2a28]",
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
          <ArkCheckbox.Label className="text-sm font-semibold text-[#21201C] dark:text-[#eeeeec]">
            {label}
          </ArkCheckbox.Label>
          {description ? (
            <p className="text-sm text-[#63635E] dark:text-[#b5b3ad]">
              {description}
            </p>
          ) : null}
        </div>
      ) : null}
      <ArkCheckbox.Control
        className={cn(
          "inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-xs border border-[#E9E8E6] transition-colors",
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
      <ArkCheckbox.HiddenInput />
    </ArkCheckbox.Root>
  );
}
