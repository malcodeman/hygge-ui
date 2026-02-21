import {
  Accordion as ArkAccordion,
  useAccordionItemContext,
} from "@ark-ui/react";
import { LuChevronDown } from "react-icons/lu";
import { cn } from "./cn";

export function AccordionRoot(props: ArkAccordion.RootProps) {
  const { className, ...rest } = props;

  return <ArkAccordion.Root {...rest} className={cn("w-full", className)} />;
}

export function AccordionItem(props: ArkAccordion.ItemProps) {
  return (
    <ArkAccordion.Item
      {...props}
      className="border-border-subtle border-b data-disabled:opacity-50"
    />
  );
}

export function AccordionItemTrigger(props: ArkAccordion.ItemTriggerProps) {
  const { className, children, ...rest } = props;
  const { expanded, disabled } = useAccordionItemContext();

  return (
    <ArkAccordion.ItemTrigger
      {...rest}
      className={cn(
        "text-fg-default focus-visible:outline-fg-default flex w-full items-center justify-between gap-3 py-4 text-left text-base font-semibold focus-visible:outline-2 focus-visible:-outline-offset-1",
        disabled ? "cursor-not-allowed" : "cursor-pointer",
        className,
      )}
    >
      {children}
      <ArkAccordion.ItemIndicator>
        <LuChevronDown
          size={16}
          className={cn("transition-transform duration-200", {
            "rotate-180": expanded,
          })}
        />
      </ArkAccordion.ItemIndicator>
    </ArkAccordion.ItemTrigger>
  );
}

export function AccordionItemContent(props: ArkAccordion.ItemContentProps) {
  const { className, ...rest } = props;

  return (
    <ArkAccordion.ItemContent
      {...rest}
      className={cn("text-fg-muted pr-4 pb-4 text-sm/6", className)}
    />
  );
}
