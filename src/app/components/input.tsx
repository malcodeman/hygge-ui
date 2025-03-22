import { Field } from "@ark-ui/react";
import { cn } from "@/app/lib/cn";

type Variant = "subtle" | "outline";
type Props = {
  variant?: Variant;
  className?: string | undefined;
} & React.ComponentPropsWithRef<"input">;

export function Input(props: Props) {
  const { variant = "subtle", className, ...rest } = props;

  return (
    <Field.Input
      {...rest}
      className={cn(
        "w-full rounded-sm border bg-transparent p-2 text-sm font-semibold focus:outline-2 focus:-outline-offset-1 disabled:cursor-not-allowed disabled:opacity-50",
        "text-[#21201C] placeholder:text-[#21201C]/50 focus:outline-[#21201C] data-[invalid]:border-[#fd5454] data-[invalid]:focus:outline-[#fd5454] dark:text-[#eeeeec] dark:placeholder:text-[#eeeeec]/50 dark:focus:outline-[#eeeeec]",
        {
          "border-transparent bg-[#f1f0ef] dark:bg-[#2a2a28]":
            variant === "subtle",
          "border-[#cfceca] dark:border-[#494844]": variant === "outline",
        },
        className,
      )}
    />
  );
}
