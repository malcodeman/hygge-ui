import React, { createContext, useContext } from "react";
import { LuLoaderCircle } from "react-icons/lu";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "./cn";

const buttonVariants = cva(
  "inline-flex cursor-pointer items-center justify-center rounded-sm border font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        solid:
          "border-transparent bg-[#21201c] text-white not-disabled:hover:bg-[#21201c]/88 dark:bg-[#eeeeec] dark:text-[#21201c] not-disabled:dark:hover:bg-[#eeeeec]/88",
        subtle:
          "text-fg-default border-transparent bg-[#21201c]/8 not-disabled:hover:bg-[#21201c]/16 dark:bg-[#eeeeec]/8 dark:not-disabled:hover:bg-[#eeeeec]/16",
        outline:
          "border-border-default text-fg-default not-disabled:hover:bg-[#21201c]/8 not-disabled:hover:dark:bg-[#eeeeec]/8",
        ghost:
          "text-fg-default border-transparent not-disabled:hover:bg-[#21201c]/8 not-disabled:hover:dark:bg-[#eeeeec]/8",
        destructive:
          "border-transparent bg-[#dc2626] text-white not-disabled:hover:bg-[#dc2626]/88 dark:bg-[#dc2626]",
      },
      size: {
        xs: "h-8 min-w-8 gap-1 px-1 text-xs",
        sm: "h-9 min-w-9 gap-2 px-2 text-sm",
        md: "h-10 min-w-10 gap-2 px-2 text-sm",
        lg: "h-11 min-w-11 gap-3 px-3 text-base",
        xl: "h-12 min-w-12 gap-3 px-3 text-base",
      },
    },
    defaultVariants: {
      variant: "solid",
      size: "md",
    },
  },
);
const ButtonGroupContext = createContext<VariantProps<typeof buttonVariants>>({
  variant: "solid",
  size: "md",
});

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    loading?: boolean;
    loadingText?: string;
    spinnerPlacement?: "start" | "end";
  };

export function Button({
  loading,
  loadingText,
  spinnerPlacement = "start",
  className,
  children,
  disabled,
  ...rest
}: ButtonProps) {
  const groupContext = useContext(ButtonGroupContext);
  const variant = rest.variant ?? groupContext.variant;
  const size = rest.size ?? groupContext.size;

  return (
    <button
      {...rest}
      disabled={disabled || loading}
      className={cn(buttonVariants({ variant, size }), className)}
    >
      {loading ? (
        <>
          {spinnerPlacement === "start" ? (
            <LuLoaderCircle size={16} className="animate-spin" />
          ) : null}
          {loadingText ?? children}
          {spinnerPlacement === "end" ? (
            <LuLoaderCircle size={16} className="animate-spin" />
          ) : null}
        </>
      ) : (
        children
      )}
    </button>
  );
}

type ButtonGroupProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof buttonVariants> & {
    attached?: boolean;
  };

export function ButtonGroup(props: ButtonGroupProps) {
  const { attached, variant, size, className, ...rest } = props;

  return (
    <ButtonGroupContext.Provider value={{ variant, size }}>
      <div
        {...rest}
        className={cn(
          "isolate inline-flex items-center",
          {
            "gap-2": !attached,
            "[&>*:first-child]:rounded-r-none [&>*:last-child]:rounded-l-none [&>*:not(:first-child)]:-ml-px [&>*:not(:first-child):not(:last-child)]:rounded-none":
              attached,
          },
          className,
        )}
      />
    </ButtonGroupContext.Provider>
  );
}
