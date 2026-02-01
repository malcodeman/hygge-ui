import { Menu as ArkMenu } from "@ark-ui/react";
import { createContext, useContext } from "react";
import { cn } from "./cn";

const MenuContext = createContext<{ showArrow: boolean }>({
  showArrow: false,
});

type MenuRootProps = {
  showArrow?: boolean;
} & ArkMenu.RootProps;

export function MenuRoot(props: MenuRootProps) {
  const { showArrow = false, ...rest } = props;

  return (
    <MenuContext.Provider value={{ showArrow }}>
      <ArkMenu.Root {...rest} />
    </MenuContext.Provider>
  );
}

export function MenuContextTrigger(props: ArkMenu.ContextTriggerProps) {
  return <ArkMenu.ContextTrigger {...props} />;
}

export function MenuTrigger(props: ArkMenu.TriggerProps) {
  return <ArkMenu.Trigger {...props} />;
}

export function MenuTriggerItem(props: ArkMenu.TriggerItemProps) {
  const { className, ...rest } = props;

  return (
    <ArkMenu.TriggerItem
      {...rest}
      className={cn(
        "flex cursor-pointer items-center gap-1 rounded-sm px-2 py-1.5 text-sm font-medium transition-colors data-disabled:cursor-not-allowed data-disabled:opacity-50 data-disabled:hover:bg-transparent",
        "text-fg-muted hover:bg-[#f1f0ef] hover:text-[#21201C] data-highlighted:bg-[#f1f0ef] data-highlighted:text-[#21201C] dark:hover:bg-[#2a2a28] dark:hover:text-[#eeeeec] dark:data-highlighted:bg-[#2a2a28] dark:data-highlighted:text-[#eeeeec]",
        className,
      )}
    />
  );
}

export function MenuContent(props: ArkMenu.ContentProps) {
  const { className, children, ...rest } = props;
  const { showArrow } = useContext(MenuContext);

  return (
    <ArkMenu.Positioner>
      <ArkMenu.Content
        {...rest}
        className={cn(
          "border-border-subtle bg-bg-default z-50 max-w-xs rounded-lg border p-1.5 shadow-2xs",
          className,
        )}
      >
        {showArrow ? (
          <ArkMenu.Arrow className="[--arrow-background:white] [--arrow-size:8px] dark:[--arrow-background:#191918]">
            <ArkMenu.ArrowTip className="border-border-subtle border-t border-l" />
          </ArkMenu.Arrow>
        ) : null}
        {children}
      </ArkMenu.Content>
    </ArkMenu.Positioner>
  );
}

export function MenuItemGroup(props: ArkMenu.ItemGroupProps) {
  return <ArkMenu.ItemGroup {...props} />;
}

export function MenuItemGroupLabel(props: ArkMenu.ItemGroupLabelProps) {
  const { className, ...rest } = props;

  return (
    <ArkMenu.ItemGroupLabel
      {...rest}
      className={cn("text-fg-default px-2 text-sm/6 font-semibold", className)}
    />
  );
}

export function MenuItem(props: ArkMenu.ItemProps) {
  const { className, ...rest } = props;

  return (
    <ArkMenu.Item
      {...rest}
      className={cn(
        "flex cursor-pointer items-center gap-1 rounded-sm px-2 py-1.5 text-sm font-medium transition-colors data-disabled:cursor-not-allowed data-disabled:opacity-50 data-disabled:hover:bg-transparent",
        "text-fg-muted hover:bg-[#f1f0ef] hover:text-[#21201C] data-highlighted:bg-[#f1f0ef] data-highlighted:text-[#21201C] dark:hover:bg-[#2a2a28] dark:hover:text-[#eeeeec] dark:data-highlighted:bg-[#2a2a28] dark:data-highlighted:text-[#eeeeec]",
        className,
      )}
    />
  );
}

export function MenuSeparator(props: ArkMenu.SeparatorProps) {
  const { className, ...rest } = props;

  return (
    <ArkMenu.Separator
      {...rest}
      className={cn("border-border-subtle -mx-1.5 my-1", className)}
    />
  );
}
