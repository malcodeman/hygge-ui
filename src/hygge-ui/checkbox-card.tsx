import { Checkbox as ArkCheckbox } from "@ark-ui/react";
import { LuCheck } from "react-icons/lu";
import { cn } from "./cn";

type Props = {
  label?: React.ReactNode;
  description?: React.ReactNode;
} & ArkCheckbox.RootProps;

export function CheckboxCard(props: Props) {
  const { label, description, className, ...rest } = props;
  const hasContent = label || description;

  return (
    <ArkCheckbox.Root
      {...rest}
      className={cn(
        "border-border-subtle flex w-full cursor-pointer justify-between gap-2 rounded-sm border p-2 transition-colors data-disabled:cursor-not-allowed data-disabled:opacity-50 data-readonly:cursor-default",
        "data-[state=checked]:border-[#21201C] dark:data-[state=checked]:border-[#eeeeec]",
        "data-invalid:border-[#dc2626] data-[state=checked]:data-invalid:border-[#dc2626]",
        className,
      )}
    >
      {hasContent ? (
        <div className="flex flex-col">
          <ArkCheckbox.Label className="text-fg-default text-sm/6 font-semibold">
            {label}
          </ArkCheckbox.Label>
          {description ? (
            <p className="text-fg-muted text-sm/6">{description}</p>
          ) : null}
        </div>
      ) : null}
      <ArkCheckbox.Control
        className={cn(
          "border-border-subtle inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-sm border transition-colors",
          "data-[state=checked]:border-[#21201C] data-[state=checked]:bg-[#21201C] dark:data-[state=checked]:border-[#eeeeec] dark:data-[state=checked]:bg-[#eeeeec]",
          "data-invalid:border-[#dc2626] data-[state=checked]:data-invalid:border-[#dc2626] data-[state=checked]:data-invalid:bg-[#dc2626]",
        )}
      >
        <ArkCheckbox.Indicator
          className={cn(
            "text-white dark:text-[#21201C]",
            "data-invalid:bg-[#dc2626] dark:data-invalid:text-white",
          )}
        >
          <LuCheck size={16} />
        </ArkCheckbox.Indicator>
      </ArkCheckbox.Control>
      <ArkCheckbox.HiddenInput />
    </ArkCheckbox.Root>
  );
}
