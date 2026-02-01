import { Highlight as ArkHighlight, HighlightProps } from "@ark-ui/react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "./cn";

const highlightVariants = cva("rounded-sm p-1", {
  variants: {
    colorPalette: {
      gray: "text-fg-default bg-[#EFEEEC] dark:bg-[#232322]",
      orange:
        "bg-[#ffedd5] text-[#92310a] dark:bg-[#3b1106] dark:text-[#fdba74]",
      teal: "bg-[#ccfbf1] text-[#0c5d56] dark:bg-[#032726] dark:text-[#5eead4]",
      green:
        "bg-[#dcfce7] text-[#116932] dark:bg-[#042713] dark:text-[#86efac]",
      red: "bg-[#fee2e2] text-[#991919] dark:bg-[#300c0c] dark:text-[#fca5a5]",
    },
  },
  defaultVariants: {
    colorPalette: "gray",
  },
});

type Props = VariantProps<typeof highlightVariants> & HighlightProps;

export function Highlight(props: Props) {
  const { className, colorPalette, ...rest } = props;

  return (
    <ArkHighlight
      {...rest}
      className={cn(highlightVariants({ colorPalette }), className)}
    />
  );
}
