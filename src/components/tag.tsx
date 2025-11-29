import { cva, VariantProps } from "class-variance-authority";
import { cn } from "./cn";

const tagVariants = cva(
  "border-border-subtle inline-flex items-center justify-center gap-2 rounded-sm border px-2",
  {
    variants: {
      colorPalette: {
        gray: `bg-[#efeeec] text-[#21201C] dark:bg-[#232322] dark:text-[#eeeeec]`,
        orange: `bg-[#ffedd5] text-[#92310a] dark:bg-[#3b1106] dark:text-[#fdba74]`,
        teal: `bg-[#ccfbf1] text-[#0c5d56] dark:bg-[#032726] dark:text-[#5eead4]`,
        green: `bg-[#dcfce7] text-[#116932] dark:bg-[#042713] dark:text-[#86efac]`,
        red: `bg-[#fee2e2] text-[#991919] dark:bg-[#300c0c] dark:text-[#fca5a5]`,
      },
      size: {
        xs: "px-1 text-xs",
        sm: "px-2 text-sm",
        md: "px-2 text-base",
        lg: "px-3 text-lg",
        xl: "px-3 text-xl",
      },
    },
    defaultVariants: {
      colorPalette: "gray",
      size: "md",
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
