import { Combobox as ArkCombobox, CollectionItem } from "@ark-ui/react";
import { LuCheck, LuChevronDown } from "react-icons/lu";
import { cn } from "@/app/lib/cn";
import { Input } from "./input";

export function ComboboxRoot(props: ArkCombobox.RootProps<CollectionItem>) {
  const { positioning, className, ...rest } = props;

  return (
    <ArkCombobox.Root
      {...rest}
      positioning={{ ...positioning, sameWidth: true }}
      openOnClick
      className={cn("flex flex-col gap-1", className)}
    />
  );
}

export function ComboboxLabel(props: ArkCombobox.LabelProps) {
  const { className, ...rest } = props;

  return (
    <ArkCombobox.Label
      {...rest}
      className={cn("text-sm font-semibold text-[#21201C]", className)}
    />
  );
}

export function ComboboxInput(props: ArkCombobox.InputProps) {
  return (
    <ArkCombobox.Control className="relative">
      <ArkCombobox.Input {...props} asChild>
        <Input />
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
          "z-50 max-h-96 overflow-y-auto rounded-lg border border-[#E9E8E6] bg-white p-1.5 shadow-2xs",
          className,
        )}
      />
    </ArkCombobox.Positioner>
  );
}

export function ComboboxItemGroup(props: ArkCombobox.ItemGroupProps) {
  const { className, title, children, ...rest } = props;

  return (
    <ArkCombobox.ItemGroup
      {...rest}
      className={cn("flex flex-col gap-1", className)}
    >
      {title ? (
        <ArkCombobox.ItemGroupLabel className="px-2 py-1.5 text-sm font-semibold text-[#21201C]">
          {title}
        </ArkCombobox.ItemGroupLabel>
      ) : null}
      {children}
    </ArkCombobox.ItemGroup>
  );
}

export function ComboboxItem(props: ArkCombobox.ItemProps) {
  const { className, children, ...rest } = props;

  return (
    <ArkCombobox.Item
      {...rest}
      className={cn(
        "flex cursor-pointer items-center justify-between gap-1 rounded-sm px-2 py-1.5 text-sm font-semibold text-[#63635E] transition-colors hover:bg-[#EFEEEC] hover:text-[#21201C] data-[highlighted]:bg-[#EFEEEC] data-[highlighted]:text-[#21201C]",
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
