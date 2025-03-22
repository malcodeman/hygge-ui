import { Menu as ArkMenu } from "@ark-ui/react";
import { cn } from "@/app/lib/cn";

export function MenuRoot(props: ArkMenu.RootProps) {
  return <ArkMenu.Root {...props} />;
}

export function MenuTrigger(props: ArkMenu.TriggerProps) {
  return <ArkMenu.Trigger {...props} />;
}

type MenuContentProps = {
  showArrow?: boolean;
} & ArkMenu.ContentProps;

export function MenuContent(props: MenuContentProps) {
  const { showArrow, className, children, ...rest } = props;

  return (
    <ArkMenu.Positioner>
      <ArkMenu.Content
        {...rest}
        className={cn(
          "z-50 max-w-xs rounded-lg border border-[#E9E8E6] bg-white p-1.5 shadow-2xs dark:border-[#2a2a28] dark:bg-[#191918]",
          className,
        )}
      >
        {showArrow ? (
          <ArkMenu.Arrow>
            <ArkMenu.ArrowTip className="border-t border-l border-[#E9E8E6] dark:border-[#2a2a28]" />
          </ArkMenu.Arrow>
        ) : null}
        {children}
      </ArkMenu.Content>
    </ArkMenu.Positioner>
  );
}

export function MenuItemGroup(props: ArkMenu.ItemGroupProps) {
  const { className, title, children, ...rest } = props;

  return (
    <ArkMenu.ItemGroup
      {...rest}
      className={cn("flex flex-col gap-1", className)}
    >
      {title ? (
        <ArkMenu.ItemGroupLabel className="px-2 py-1.5 text-sm font-semibold">
          {title}
        </ArkMenu.ItemGroupLabel>
      ) : null}
      {children}
    </ArkMenu.ItemGroup>
  );
}

export function MenuItem(props: ArkMenu.ItemProps) {
  const { className, ...rest } = props;

  return (
    <ArkMenu.Item
      {...rest}
      className={cn(
        "flex cursor-pointer items-center gap-1 rounded-sm px-2 py-1.5 text-sm font-medium transition-colors data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 data-[disabled]:hover:bg-transparent",
        "text-[#63635E] hover:bg-[#f1f0ef] hover:text-[#21201C] data-[highlighted]:bg-[#f1f0ef] data-[highlighted]:text-[#21201C] dark:text-[#b5b3ad] dark:hover:bg-[#2a2a28] dark:hover:text-[#eeeeec] dark:data-[highlighted]:bg-[#2a2a28] dark:data-[highlighted]:text-[#eeeeec]",
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
      className={cn(
        "-mx-1.5 my-1 border-[#E9E8E6] dark:border-[#2a2a28]",
        className,
      )}
    />
  );
}
