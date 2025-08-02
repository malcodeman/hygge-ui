"use client";
import { Highlight as ArkHighlight, HighlightProps } from "@ark-ui/react";
import { cn } from "./cn";

type Props = {
  colorPalette?: "gray" | "orange" | "teal" | "green" | "red";
} & HighlightProps;

export function Highlight(props: Props) {
  const { colorPalette = "gray", className, ...rest } = props;

  return (
    <ArkHighlight
      {...rest}
      className={cn(
        "rounded-sm p-1",
        {
          "bg-[#EFEEEC] text-[#21201C] dark:bg-[#232322] dark:text-[#eeeeec]":
            colorPalette === "gray",
          "bg-[#ffedd5] text-[#92310a] dark:bg-[#3b1106] dark:text-[#fdba74]":
            colorPalette === "orange",
          "bg-[#ccfbf1] text-[#0c5d56] dark:bg-[#032726] dark:text-[#5eead4]":
            colorPalette === "teal",
          "bg-[#dcfce7] text-[#116932] dark:bg-[#042713] dark:text-[#86efac]":
            colorPalette === "green",
          "bg-[#fee2e2] text-[#991919] dark:bg-[#300c0c] dark:text-[#fca5a5]":
            colorPalette === "red",
        },
        className,
      )}
    />
  );
}
