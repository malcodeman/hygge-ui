import { Field } from "@ark-ui/react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "./cn";

const inputVariants = cva(
  "text-fg-default w-full rounded-sm border bg-transparent transition-colors placeholder:text-[#21201C]/50 focus:outline-2 focus:-outline-offset-1 focus:outline-[#21201C] disabled:cursor-not-allowed disabled:opacity-50 data-invalid:border-[#fd5454] data-invalid:focus:outline-[#fd5454] dark:placeholder:text-[#eeeeec]/50 dark:focus:outline-[#eeeeec]",
  {
    variants: {
      variant: {
        subtle: "border-transparent bg-[#21201c]/8 dark:bg-[#eeeeec]/8",
        outline: "border-border-default",
      },
      size: {
        xs: "h-8 px-1 text-xs",
        sm: "h-9 px-2 text-sm",
        md: "h-10 px-2 text-sm",
        lg: "h-11 px-3 text-base",
        xl: "h-12 px-3 text-base",
      },
    },
    defaultVariants: {
      variant: "subtle",
      size: "md",
    },
  },
);

type Props = Omit<React.ComponentPropsWithRef<"input">, "size"> &
  VariantProps<typeof inputVariants>;

export function Input(props: Props) {
  const { variant, size, className, ...rest } = props;

  return (
    <Field.Input
      {...rest}
      className={cn(inputVariants({ variant, size }), className)}
    />
  );
}
