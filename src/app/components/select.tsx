import { Select as ArkSelect, CollectionItem } from "@ark-ui/react";
import { LuCheck, LuChevronDown } from "react-icons/lu";
import { cn } from "@/app/lib/cn";

export function SelectRoot(props: ArkSelect.RootProps<CollectionItem>) {
  const { className, positioning, ...rest } = props;

  return (
    <ArkSelect.Root
      {...rest}
      positioning={{ sameWidth: true, ...positioning }}
      className={cn("flex flex-col gap-1", className)}
    />
  );
}

export function SelectLabel(props: ArkSelect.LabelProps) {
  const { className, ...rest } = props;

  return (
    <ArkSelect.Label
      {...rest}
      className={cn("text-sm font-semibold text-[#21201C]", className)}
    />
  );
}

export function SelectTrigger(props: ArkSelect.TriggerProps) {
  const { className, children, ...rest } = props;

  return (
    <ArkSelect.Control>
      <ArkSelect.Trigger
        {...rest}
        className={cn(
          "inline-flex w-full cursor-pointer items-center justify-between rounded-sm border border-[#E9E8E6] bg-[#f9f9f8] p-2 text-sm font-semibold text-[#21201C] focus:outline-2 focus:-outline-offset-1 focus:outline-[#21201C] disabled:cursor-not-allowed disabled:opacity-50 data-[invalid]:border-[#fd5454] data-[invalid]:focus:outline-[#fd5454] data-[placeholder-shown]:text-[#21201C]/50",
          className,
        )}
      >
        {children}
        <ArkSelect.Indicator>
          <LuChevronDown size={16} />
        </ArkSelect.Indicator>
      </ArkSelect.Trigger>
    </ArkSelect.Control>
  );
}

export function SelectValueText(props: ArkSelect.ValueTextProps) {
  return <ArkSelect.ValueText {...props} />;
}

export function SelectContent(props: ArkSelect.ContentProps) {
  const { className, ...rest } = props;

  return (
    <ArkSelect.Positioner>
      <ArkSelect.Content
        {...rest}
        className={cn(
          "z-50 max-h-96 rounded-lg border border-[#E9E8E6] bg-white p-2 shadow-2xs",
          className,
        )}
      />
    </ArkSelect.Positioner>
  );
}

export function SelectItem(props: ArkSelect.ItemProps) {
  const { className, children, ...rest } = props;

  return (
    <ArkSelect.Item
      {...rest}
      className={cn(
        "flex cursor-pointer items-center justify-between gap-1 rounded-sm p-2 text-sm font-semibold text-[#63635E] transition-colors hover:bg-[#EFEEEC] hover:text-[#21201C] data-[highlighted]:bg-[#EFEEEC] data-[highlighted]:text-[#21201C]",
        className,
      )}
    >
      <ArkSelect.ItemText>{children}</ArkSelect.ItemText>
      <ArkSelect.ItemIndicator>
        <LuCheck size={16} />
      </ArkSelect.ItemIndicator>
    </ArkSelect.Item>
  );
}
