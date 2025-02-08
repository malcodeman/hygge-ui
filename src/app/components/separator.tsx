import { cn } from "@/app/lib/cn";

type Props = {
  colorPalette?: "gray" | "orange" | "teal" | "green" | "red";
  variant?: "solid" | "dashed" | "dotted";
  orientation?: "horizontal" | "vertical";
} & React.ComponentPropsWithoutRef<"div">;

export function Separator(props: Props) {
  const {
    colorPalette = "gray",
    variant = "solid",
    orientation = "horizontal",
    className,
    ...rest
  } = props;

  return (
    <div
      {...rest}
      className={cn(className, {
        "w-full border-t": orientation === "horizontal",
        "h-full border-l": orientation === "vertical",
        "border-solid": variant === "solid",
        "border-dashed": variant === "dashed",
        "border-dotted": variant === "dotted",
        "border-[#E9E8E6]": colorPalette === "gray",
        "border-[#ffedd5]": colorPalette === "orange",
        "border-[#ccfbf1]": colorPalette === "teal",
        "border-[#dcfce7]": colorPalette === "green",
        "border-[#fee2e2]": colorPalette === "red",
      })}
    />
  );
}
