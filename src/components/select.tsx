import { Select as ArkSelect, CollectionItem } from "@ark-ui/react";
import { LuCheck, LuChevronDown } from "react-icons/lu";
import { cn } from "./cn";
import { createContext, useContext } from "react";

type Variant = "subtle" | "outline";

const SelectContext = createContext<{ variant: Variant }>({
  variant: "subtle",
});

type SelectRootProps = {
  variant?: Variant;
} & ArkSelect.RootProps<CollectionItem>;

export function SelectRoot(props: SelectRootProps) {
  const { variant = "subtle", className, positioning, ...rest } = props;

  return (
    <SelectContext.Provider value={{ variant }}>
      <ArkSelect.Root
        {...rest}
        positioning={{ sameWidth: true, ...positioning }}
        className={cn("flex flex-col gap-1", className)}
      />
    </SelectContext.Provider>
  );
}

export function SelectLabel(props: ArkSelect.LabelProps) {
  const { className, ...rest } = props;

  return (
    <ArkSelect.Label
      {...rest}
      className={cn(
        "text-sm font-semibold text-[#21201C] dark:text-[#eeeeec]",
        className,
      )}
    />
  );
}

export function SelectTrigger(props: ArkSelect.TriggerProps) {
  const { className, children, ...rest } = props;
  const { variant } = useContext(SelectContext);

  return (
    <ArkSelect.Control>
      <ArkSelect.Trigger
        {...rest}
        className={cn(
          "inline-flex w-full cursor-pointer items-center justify-between rounded-sm border p-2 text-sm font-semibold focus:outline-2 focus:-outline-offset-1 disabled:cursor-not-allowed disabled:opacity-50",
          "text-[#21201C] focus:outline-[#21201C] data-invalid:border-[#fd5454] data-invalid:focus:outline-[#fd5454] dark:text-[#eeeeec] dark:focus:outline-[#eeeeec]",
          {
            "border-transparent bg-[#f1f0ef] dark:bg-[#2a2a28]":
              variant === "subtle",
            "border-[#cfceca] dark:border-[#494844]": variant === "outline",
          },
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
          "border-border-subtle bg-bg-default z-50 max-h-96 overflow-y-auto rounded-lg border p-2 shadow-2xs",
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
        "flex cursor-pointer items-center justify-between gap-1 rounded-sm p-2 text-sm font-medium transition-colors",
        "text-[#63635E] hover:bg-[#f1f0ef] hover:text-[#21201C] data-highlighted:bg-[#f1f0ef] data-highlighted:text-[#21201C] dark:text-[#b5b3ad] dark:hover:bg-[#2a2a28] dark:hover:text-[#eeeeec] dark:data-highlighted:bg-[#2a2a28] dark:data-highlighted:text-[#eeeeec]",
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
