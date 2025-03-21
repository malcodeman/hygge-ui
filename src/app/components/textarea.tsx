import { Field } from "@ark-ui/react";
import { cn } from "@/app/lib/cn";

type Props = {
  className?: string | undefined;
} & React.ComponentPropsWithRef<"textarea">;

export function Textarea(props: Props) {
  const { className, ...rest } = props;

  return (
    <Field.Textarea
      {...rest}
      className={cn(
        "min-h-8 rounded-sm border bg-transparent p-2 text-sm font-semibold focus:outline-2 focus:-outline-offset-1 disabled:cursor-not-allowed disabled:opacity-50",
        "border-[#cfceca] text-[#21201C] placeholder:text-[#21201C]/50 focus:outline-[#21201C] data-[invalid]:border-[#fd5454] data-[invalid]:focus:outline-[#fd5454] dark:border-[#494844] dark:text-[#eeeeec] dark:placeholder:text-[#eeeeec]/50 dark:focus:outline-[#eeeeec]",
        className,
      )}
    />
  );
}
