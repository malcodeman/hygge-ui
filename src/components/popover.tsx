import { Popover as ArkPopover } from "@ark-ui/react";
import { LuX } from "react-icons/lu";
import { createContext, useContext } from "react";
import { cn } from "./cn";
import { Button } from "./button";

const PopoverContext = createContext<{ showArrow: boolean }>({
  showArrow: false,
});

type PopoverRootProps = {
  showArrow?: boolean;
} & ArkPopover.RootProps;

export function PopoverRoot(props: PopoverRootProps) {
  const { showArrow = false, ...rest } = props;

  return (
    <PopoverContext.Provider value={{ showArrow }}>
      <ArkPopover.Root {...rest} />
    </PopoverContext.Provider>
  );
}

export function PopoverTrigger(props: ArkPopover.TriggerProps) {
  return <ArkPopover.Trigger {...props} />;
}

type PopoverContentProps = {
  showCloseTrigger?: boolean;
} & ArkPopover.ContentProps;

export function PopoverContent(props: PopoverContentProps) {
  const { showCloseTrigger = false, className, children, ...rest } = props;
  const { showArrow } = useContext(PopoverContext);

  return (
    <ArkPopover.Positioner>
      <ArkPopover.Content
        {...rest}
        className={cn(
          "border-border-subtle relative z-50 max-w-xs rounded-lg border bg-white p-2 shadow-2xs dark:bg-[#191918]",
          className,
        )}
      >
        {showArrow ? (
          <ArkPopover.Arrow>
            <ArkPopover.ArrowTip className="border-border-subtle border-t border-l" />
          </ArkPopover.Arrow>
        ) : null}
        {children}
        {showCloseTrigger ? (
          <ArkPopover.CloseTrigger
            asChild
            className={cn("absolute top-1 right-1 cursor-pointer", className)}
          >
            <Button variant="ghost" size="xs">
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
      className={cn("text-fg-default text-sm/6 font-semibold", className)}
    />
  );
}

export function PopoverDescription(props: ArkPopover.DescriptionProps) {
  const { className, ...rest } = props;

  return (
    <ArkPopover.Description
      {...rest}
      className={cn("text-fg-muted text-sm/6 font-medium", className)}
    />
  );
}

export function PopoverCloseTrigger(props: ArkPopover.CloseTriggerProps) {
  return <ArkPopover.CloseTrigger {...props}></ArkPopover.CloseTrigger>;
}
