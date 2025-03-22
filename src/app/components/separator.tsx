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
      className={cn(
        {
          "w-full border-t": orientation === "horizontal",
          "h-full border-l": orientation === "vertical",
          "border-solid": variant === "solid",
          "border-dashed": variant === "dashed",
          "border-dotted": variant === "dotted",
          "border-[#E9E8E6] dark:border-[#2a2a28]": colorPalette === "gray",
          "border-[#ffedd5] dark:border-[#3b1106]": colorPalette === "orange",
          "border-[#ccfbf1] dark:border-[#032726]": colorPalette === "teal",
          "border-[#dcfce7] dark:border-[#042713]": colorPalette === "green",
          "border-[#fee2e2] dark:border-[#300c0c]": colorPalette === "red",
        },
        className,
      )}
    />
  );
}
