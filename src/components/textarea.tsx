import { Field } from "@ark-ui/react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "./cn";

const textareaVariants = cva(
  "text-fg-default w-full rounded-sm border bg-transparent transition-colors placeholder:text-[#21201C]/50 focus:outline-2 focus:-outline-offset-1 focus:outline-[#21201C] disabled:cursor-not-allowed disabled:opacity-50 data-[invalid]:border-[#fd5454] data-[invalid]:focus:outline-[#fd5454] dark:placeholder:text-[#eeeeec]/50 dark:focus:outline-[#eeeeec]",
  {
    variants: {
      variant: {
        subtle: "border-transparent bg-[#21201c]/8 dark:bg-[#eeeeec]/8",
        outline: "border-border-default",
      },
      size: {
        xs: "min-h-8 p-1 text-xs",
        sm: "min-h-9 p-2 text-sm",
        md: "min-h-10 p-2 text-sm",
        lg: "min-h-11 p-3 text-base",
        xl: "min-h-12 p-3 text-base",
      },
    },
    defaultVariants: {
      variant: "subtle",
      size: "md",
    },
  },
);

type Props = React.ComponentPropsWithRef<"textarea"> &
  VariantProps<typeof textareaVariants>;

export function Textarea(props: Props) {
  const { variant, size, className, ...rest } = props;

  return (
    <Field.Textarea
      {...rest}
      className={cn(textareaVariants({ variant, size }), className)}
    />
  );
}
