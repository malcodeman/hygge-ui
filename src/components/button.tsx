import { LuLoaderCircle } from "react-icons/lu";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "./cn";

const buttonVariants = cva(
  "inline-flex cursor-pointer items-center justify-center gap-1 rounded-sm border px-2 text-sm/6 font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        solid:
          "border-transparent bg-[#21201c] text-white not-disabled:hover:bg-[#21201c]/88 dark:bg-[#eeeeec] dark:text-[#21201c] not-disabled:dark:hover:bg-[#eeeeec]/88",
        subtle:
          "text-fg-default border-transparent bg-[#21201c]/4 not-disabled:hover:bg-[#21201c]/8 dark:bg-[#eeeeec]/4 dark:not-disabled:hover:bg-[#eeeeec]/8",
        outline:
          "border-border-default text-fg-default not-disabled:hover:bg-[#21201c]/4 not-disabled:hover:dark:bg-[#eeeeec]/4",
        ghost:
          "text-fg-default border-transparent not-disabled:hover:bg-[#21201c]/8 not-disabled:hover:dark:bg-[#eeeeec]/8",
      },
      size: {
        xs: "h-8 min-w-8",
        sm: "h-9 min-w-9",
        md: "h-10 min-w-10",
        lg: "h-11 min-w-11",
        xl: "h-12 min-w-12",
      },
    },
    defaultVariants: {
      variant: "solid",
      size: "md",
    },
  },
);

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    loading?: boolean;
    loadingText?: string;
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    spinnerPlacement?: "start" | "end";
  };

export function Button({
  loading,
  loadingText,
  variant,
  size,
  spinnerPlacement,
  className,
  children,
  disabled,
  ...rest
}: Props) {
  return (
    <button
      {...rest}
      disabled={disabled || loading}
      className={cn(buttonVariants({ variant, size }), className)}
    >
      {loading ? (
        <>
          {spinnerPlacement === "start" && (
            <LuLoaderCircle size={16} className="animate-spin" />
          )}
          {loadingText ?? children}
          {spinnerPlacement === "end" && (
            <LuLoaderCircle size={16} className="animate-spin" />
          )}
        </>
      ) : (
        children
      )}
    </button>
  );
}
