import {
  Select as ArkSelect,
  CollectionItem,
  useSelectContext,
} from "@ark-ui/react";
import { LuCheck, LuChevronDown } from "react-icons/lu";
import { cn } from "./cn";
import { createContext, useContext } from "react";
import { cva } from "class-variance-authority";

type Variant = "subtle" | "outline";
type Size = "xs" | "sm" | "md" | "lg" | "xl";

const SelectContext = createContext<{ variant: Variant; size: Size }>({
  variant: "subtle",
  size: "md",
});

type SelectRootProps = {
  variant?: Variant;
  size?: Size;
} & ArkSelect.RootProps<CollectionItem>;

export function SelectRoot(props: SelectRootProps) {
  const {
    variant = "subtle",
    size = "md",
    className,
    positioning,
    ...rest
  } = props;

  return (
    <SelectContext.Provider value={{ variant, size }}>
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
  const { disabled } = useSelectContext();

  return (
    <ArkSelect.Label
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

const selectTriggerVariants = cva(
  "text-fg-default inline-flex w-full cursor-pointer items-center justify-between rounded-sm border p-2 text-sm font-semibold focus:outline-2 focus:-outline-offset-1 focus:outline-[#21201C] disabled:cursor-not-allowed disabled:opacity-50 data-invalid:border-[#fd5454] data-invalid:focus:outline-[#fd5454] dark:focus:outline-[#eeeeec]",
  {
    variants: {
      variant: {
        subtle: "border-transparent bg-[#f1f0ef] dark:bg-[#2a2a28]",
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

export function SelectTrigger(props: ArkSelect.TriggerProps) {
  const { className, children, ...rest } = props;
  const { variant, size } = useContext(SelectContext);

  return (
    <ArkSelect.Control>
      <ArkSelect.Trigger
        {...rest}
        className={cn(selectTriggerVariants({ variant, size }), className)}
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
        "text-fg-muted hover:bg-[#f1f0ef] hover:text-[#21201C] data-highlighted:bg-[#f1f0ef] data-highlighted:text-[#21201C] dark:hover:bg-[#2a2a28] dark:hover:text-[#eeeeec] dark:data-highlighted:bg-[#2a2a28] dark:data-highlighted:text-[#eeeeec]",
        className,
      )}
    >
      {children}
      <ArkSelect.ItemIndicator>
        <LuCheck size={16} />
      </ArkSelect.ItemIndicator>
    </ArkSelect.Item>
  );
}
export function SelectItemText(props: ArkSelect.ItemTextProps) {
  return <ArkSelect.ItemText {...props} />;
}

export function SelectItemGroup(props: ArkSelect.ItemGroupProps) {
  const { className, ...rest } = props;

  return (
    <ArkSelect.ItemGroup
      {...rest}
      className={cn("mb-1 last:mb-0", className)}
    />
  );
}

export function SelectItemGroupLabel(props: ArkSelect.ItemGroupLabelProps) {
  const { className, ...rest } = props;

  return (
    <ArkSelect.ItemGroupLabel
      {...rest}
      className={cn("text-fg-default px-2 text-sm/6 font-semibold", className)}
    />
  );
}
