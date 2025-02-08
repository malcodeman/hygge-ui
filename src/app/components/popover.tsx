import { Popover as ArkPopover } from "@ark-ui/react";
import { LuX } from "react-icons/lu";
import { cn } from "@/app/lib/cn";
import { Button } from "./button";

export function PopoverRoot(props: ArkPopover.RootProps) {
  return <ArkPopover.Root {...props} />;
}

export function PopoverTrigger(props: ArkPopover.TriggerProps) {
  return <ArkPopover.Trigger {...props} />;
}

type PopoverContentProps = {
  showArrow?: boolean;
  showCloseTrigger?: boolean;
} & ArkPopover.ContentProps;

export function PopoverContent(props: PopoverContentProps) {
  const {
    showArrow = false,
    showCloseTrigger = false,
    className,
    children,
    ...rest
  } = props;

  return (
    <ArkPopover.Positioner>
      <ArkPopover.Content
        {...rest}
        className={cn(
          "relative max-w-xs rounded-lg border border-[#E9E8E6] bg-white shadow-2xs",
          className,
        )}
      >
        {showArrow ? (
          <ArkPopover.Arrow>
            <ArkPopover.ArrowTip className="border-t border-l border-[#E9E8E6]" />
          </ArkPopover.Arrow>
        ) : null}
        {children}
        {showCloseTrigger ? (
          <ArkPopover.CloseTrigger
            asChild
            className={cn("absolute top-1 right-1 cursor-pointer", className)}
          >
            <Button variant="ghost">
              <LuX size={16} />
            </Button>
          </ArkPopover.CloseTrigger>
        ) : null}
      </ArkPopover.Content>
    </ArkPopover.Positioner>
  );
}

export function PopoverTitle(props: ArkPopover.TitleProps) {
  const { className, ...rest } = props;

  return (
    <ArkPopover.Title
      {...rest}
      className={cn("text-xs font-semibold text-[#21201C]", className)}
    />
  );
}

export function PopoverDescription(props: ArkPopover.DescriptionProps) {
  const { className, ...rest } = props;

  return (
    <ArkPopover.Description
      {...rest}
      className={cn("text-xs font-semibold text-[#63635E]", className)}
    />
  );
}

export function PopoverHeader(props: React.ComponentPropsWithoutRef<"header">) {
  const { className, ...rest } = props;

  return <header {...rest} className={cn(className, "p-4 pb-2")} />;
}

export function PopoverBody(props: React.ComponentPropsWithoutRef<"div">) {
  const { className, ...rest } = props;

  return <div {...rest} className={cn(className, "p-4 pt-2")} />;
}

export function PopoverFooter(props: React.ComponentPropsWithoutRef<"footer">) {
  const { className, ...rest } = props;

  return (
    <footer
      {...rest}
      className={cn(
        className,
        "flex justify-between rounded-b-lg border-t border-t-[#E9E8E6] bg-[#f9f9f8] p-2",
      )}
    />
  );
}

export function PopoverCloseTrigger(props: ArkPopover.CloseTriggerProps) {
  return <ArkPopover.CloseTrigger {...props}></ArkPopover.CloseTrigger>;
}
