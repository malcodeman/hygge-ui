import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "./cn";

const tagVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-sm border",
  {
    variants: {
      colorPalette: {
        gray: "text-fg-default border-border-default bg-[#efeeec] dark:bg-[#232322]",
        orange:
          "border-[#f97316] bg-[#ffedd5] text-[#92310a] dark:border-[#fb923c] dark:bg-[#3b1106] dark:text-[#fdba74]",
        teal: "border-[#14b8a6] bg-[#ccfbf1] text-[#0c5d56] dark:border-[#2dd4bf] dark:bg-[#032726] dark:text-[#5eead4]",
        green:
          "border-[#22c55e] bg-[#dcfce7] text-[#116932] dark:border-[#4ade80] dark:bg-[#042713] dark:text-[#86efac]",
        red: "border-[#ef4444] bg-[#fee2e2] text-[#991919] dark:border-[#f87171] dark:bg-[#300c0c] dark:text-[#fca5a5]",
      },
      size: {
        xs: "px-1 py-0.5 text-xs",
        sm: "px-2 py-1 text-sm",
        md: "px-2 py-1 text-base",
        lg: "px-3 py-1.5 text-lg",
        xl: "px-3 py-1.5 text-xl",
      },
    },
    defaultVariants: {
      colorPalette: "gray",
      size: "xs",
    },
  },
);

type Props = VariantProps<typeof tagVariants> &
  React.ComponentPropsWithoutRef<"div">;

export function Tag(props: Props) {
  const { colorPalette, size, className, ...rest } = props;

  return (
    <div
      {...rest}
      className={cn(tagVariants({ colorPalette, size }), className)}
    />
  );
}
