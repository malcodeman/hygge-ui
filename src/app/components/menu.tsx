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
          "z-50 max-w-xs rounded-lg border border-[#E9E8E6] bg-white p-2 shadow-2xs",
          className,
        )}
      >
        {showArrow ? (
          <ArkMenu.Arrow>
            <ArkMenu.ArrowTip className="border-t border-l border-[#E9E8E6]" />
          </ArkMenu.Arrow>
        ) : null}
        {children}
      </ArkMenu.Content>
    </ArkMenu.Positioner>
  );
}

export function MenuItem(props: ArkMenu.ItemProps) {
  const { className, ...rest } = props;

  return (
    <ArkMenu.Item
      {...rest}
      className={cn(
        "flex cursor-pointer items-center rounded-sm p-2 text-sm font-semibold text-[#63635E] transition-colors hover:bg-[#EFEEEC] hover:text-[#21201C]",
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
      className={cn("my-1 border-[#E9E8E6]", className)}
    />
  );
}
