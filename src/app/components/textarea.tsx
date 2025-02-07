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
        className,
        "min-h-8 rounded-sm border border-[#E9E8E6] bg-[#f9f9f8] p-2 text-sm font-semibold text-[#21201C] placeholder:text-[#21201C]/50 focus:outline-2 focus:-outline-offset-1 focus:outline-[#21201C] disabled:cursor-not-allowed disabled:opacity-50 data-[invalid]:border-[#fd5454] data-[invalid]:focus:outline-[#fd5454]",
      )}
    />
  );
}
