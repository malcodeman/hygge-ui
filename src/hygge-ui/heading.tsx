import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "./cn";

const headingVariants = cva("text-fg-default font-semibold", {
  variants: {
    size: {
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
      "4xl": "text-4xl",
      "5xl": "text-5xl",
      "6xl": "text-6xl",
    },
  },
  defaultVariants: {
    size: "xl",
  },
});

type Props = React.ComponentPropsWithoutRef<
  "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
> &
  VariantProps<typeof headingVariants> & {
    level?: 1 | 2 | 3 | 4 | 5 | 6;
  };

export function Heading(props: Props) {
  const { level = 1, size, className, ...rest } = props;
  const Element: `h${typeof level}` = `h${level}`;

  return (
    <Element {...rest} className={cn(headingVariants({ size }), className)} />
  );
}
