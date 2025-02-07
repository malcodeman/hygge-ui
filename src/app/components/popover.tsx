import { Popover as ArkPopover } from "@ark-ui/react";
import { LuX } from "react-icons/lu";
import { cn } from "@/app/lib/cn";

export function PopoverRoot(props: ArkPopover.RootProps) {
  return <ArkPopover.Root {...props} />;
}

export function PopoverTrigger(props: ArkPopover.TriggerProps) {
  return <ArkPopover.Trigger {...props} />;
}

export function PopoverContent(
  props: { showArrow?: boolean } & ArkPopover.ContentProps,
) {
  const { showArrow, className, children, ...rest } = props;

  return (
    <ArkPopover.Positioner>
      <ArkPopover.Content
        {...rest}
        className={cn(
          "max-w-xs rounded-lg border border-[#E9E8E6] bg-white p-2 shadow-2xs",
          className,
        )}
      >
        {showArrow ? (
          <ArkPopover.Arrow>
            <ArkPopover.ArrowTip className="border-t border-l border-[#E9E8E6]" />
          </ArkPopover.Arrow>
        ) : null}
        {children}
      </ArkPopover.Content>
    </ArkPopover.Positioner>
  );
}

export function PopoverTitle(props: ArkPopover.TitleProps) {
  const { className, ...rest } = props;

  return (
    <ArkPopover.Title
      {...rest}
      className={cn("text-sm font-semibold text-[#21201C]", className)}
    />
  );
}

export function PopoverDescription(props: ArkPopover.DescriptionProps) {
  const { className, ...rest } = props;

  return (
    <ArkPopover.Description
      {...rest}
      className={cn("text-sm font-semibold text-[#63635E]", className)}
    />
  );
}

export function PopoverCloseTrigger(props: ArkPopover.CloseTriggerProps) {
  const { className, ...rest } = props;

  return (
    <ArkPopover.CloseTrigger
      {...rest}
      className={cn("absolute top-1 right-1 cursor-pointer", className)}
    >
      <LuX size={16} />
    </ArkPopover.CloseTrigger>
  );
}
