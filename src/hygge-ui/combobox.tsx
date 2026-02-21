import {
  Combobox as ArkCombobox,
  useComboboxContext,
  type CollectionItem,
} from "@ark-ui/react";
import { LuCheck, LuChevronDown } from "react-icons/lu";
import { cn } from "./cn";
import { Input } from "./input";
import { createContext, useContext } from "react";

type Variant = "subtle" | "outline";
type Size = "xs" | "sm" | "md" | "lg" | "xl";

const ComboboxContext = createContext<{ variant: Variant; size: Size }>({
  variant: "subtle",
  size: "md",
});

type ComboboxRootProps = {
  variant?: Variant;
  size?: Size;
} & ArkCombobox.RootProps<CollectionItem>;

export function ComboboxRoot(props: ComboboxRootProps) {
  const {
    variant = "subtle",
    size = "md",
    positioning,
    className,
    ...rest
  } = props;

  return (
    <ComboboxContext.Provider value={{ variant, size }}>
      <ArkCombobox.Root
        {...rest}
        positioning={{ sameWidth: true, ...positioning }}
        openOnClick
        className={cn("flex flex-col gap-1", className)}
      />
    </ComboboxContext.Provider>
  );
}

export function ComboboxLabel(props: ArkCombobox.LabelProps) {
  const { className, ...rest } = props;
  const { disabled } = useComboboxContext();

  return (
    <ArkCombobox.Label
      {...rest}
      className={cn(
        "text-fg-default text-sm/6 font-semibold",
        {
          "data-disabled:opacity-50": disabled,
        },
        className,
      )}
    />
  );
}

export function ComboboxInput(props: ArkCombobox.InputProps) {
  const { variant, size } = useContext(ComboboxContext);

  return (
    <ArkCombobox.Control className="relative">
      <ArkCombobox.Input {...props} asChild>
        <Input variant={variant} size={size} />
      </ArkCombobox.Input>
      <ArkCombobox.Trigger
        className={cn(
          "absolute top-0 right-0 bottom-0 cursor-pointer p-2 disabled:cursor-not-allowed disabled:opacity-50",
        )}
      >
        <LuChevronDown size={16} />
      </ArkCombobox.Trigger>
    </ArkCombobox.Control>
  );
}

export function ComboboxContent(props: ArkCombobox.ContentProps) {
  const { className, ...rest } = props;

  return (
    <ArkCombobox.Positioner>
      <ArkCombobox.Content
        {...rest}
        className={cn(
          "border-border-subtle bg-bg-default z-50 max-h-96 overflow-y-auto rounded-lg border p-2 shadow-2xs",
          className,
        )}
      />
    </ArkCombobox.Positioner>
  );
}

export function ComboboxItemGroup(props: ArkCombobox.ItemGroupProps) {
  const { className, ...rest } = props;

  return (
    <ArkCombobox.ItemGroup
      {...rest}
      className={cn("mb-1 last:mb-0", className)}
    />
  );
}

export function ComboboxItemGroupLabel(props: ArkCombobox.ItemGroupLabelProps) {
  const { className, ...rest } = props;

  return (
    <ArkCombobox.ItemGroupLabel
      {...rest}
      className={cn("text-fg-default px-2 text-sm/6 font-semibold", className)}
    />
  );
}

export function ComboboxItem(props: ArkCombobox.ItemProps) {
  const { className, children, ...rest } = props;

  return (
    <ArkCombobox.Item
      {...rest}
      className={cn(
        "flex cursor-pointer items-center justify-between gap-1 rounded-sm p-2 text-sm font-medium transition-colors",
        "text-fg-muted hover:bg-[#f1f0ef] hover:text-[#21201C] data-highlighted:bg-[#f1f0ef] data-highlighted:text-[#21201C] dark:hover:bg-[#2a2a28] dark:hover:text-[#eeeeec] dark:data-highlighted:bg-[#2a2a28] dark:data-highlighted:text-[#eeeeec]",
        className,
      )}
    >
      <ArkCombobox.ItemText>{children}</ArkCombobox.ItemText>
      <ArkCombobox.ItemIndicator>
        <LuCheck size={16} />
      </ArkCombobox.ItemIndicator>
    </ArkCombobox.Item>
  );
}
