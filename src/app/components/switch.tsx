import { Switch as ArkSwitch } from "@ark-ui/react";
import { cn } from "@/app/lib/cn";

type Props = {
  colorPalette?: "gray" | "orange" | "teal" | "green" | "red";
  label?: React.ReactNode;
} & ArkSwitch.RootProps;

export function Switch(props: Props) {
  const { colorPalette = "gray", label, className, ...rest } = props;

  return (
    <ArkSwitch.Root
      {...rest}
      className={cn("flex items-center gap-1", className)}
    >
      <ArkSwitch.Control
        className={cn(
          "inline-flex w-10 cursor-pointer items-center rounded-full bg-[#E9E8E6] p-0.5 transition-colors data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50",
          {
            "data-[state=checked]:bg-[#21201C]": colorPalette === "gray",
            "data-[state=checked]:bg-[#eb5e41]": colorPalette === "orange",
            "data-[state=checked]:bg-[#0d9488]": colorPalette === "teal",
            "data-[state=checked]:bg-[#38a169]": colorPalette === "green",
            "data-[state=checked]:bg-[#fd5454]": colorPalette === "red",
          },
        )}
      >
        <ArkSwitch.Thumb
          className={cn(
            "size-4 rounded-full bg-white shadow-2xs transition-transform data-[state=checked]:translate-x-5",
          )}
        />
      </ArkSwitch.Control>
      {label ? (
        <ArkSwitch.Label className={cn("text-sm font-semibold text-[#21201C]")}>
          {label}
        </ArkSwitch.Label>
      ) : null}
      <ArkSwitch.HiddenInput />
    </ArkSwitch.Root>
  );
}
