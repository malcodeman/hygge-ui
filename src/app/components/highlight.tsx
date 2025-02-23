import { Highlight as ArkHighlight, HighlightProps } from "@ark-ui/react";
import { cn } from "@/app/lib/cn";

type Props = {
  colorPalette?: "gray" | "orange" | "teal" | "green" | "red";
} & HighlightProps;

export function Highlight(props: Props) {
  const { colorPalette = "gray", className, ...rest } = props;

  return (
    <ArkHighlight
      {...rest}
      className={cn("rounded-sm p-1", className, {
        "bg-[#EFEEEC] text-[#21201C]": colorPalette === "gray",
        "bg-[#ffedd5] text-[#92310a]": colorPalette === "orange",
        "bg-[#ccfbf1] text-[#0c5d56]": colorPalette === "teal",
        "bg-[#dcfce7] text-[#116932]": colorPalette === "green",
        "bg-[#fee2e2] text-[#991919]": colorPalette === "red",
      })}
    />
  );
}
