import { Accordion as ArkAccordion } from "@ark-ui/react";
import { cn } from "./cn";
import { AccordionItemTrigger } from "./accordion-item-trigger";

export function AccordionRoot(props: ArkAccordion.RootProps) {
  const { className, ...rest } = props;

  return <ArkAccordion.Root {...rest} className={cn("w-full", className)} />;
}

export function AccordionItem(props: ArkAccordion.ItemProps) {
  return (
    <ArkAccordion.Item
      {...props}
      className="border-border-subtle border-b data-[disabled]:opacity-50"
    />
  );
}

export { AccordionItemTrigger };

export function AccordionItemContent(props: ArkAccordion.ItemContentProps) {
  const { className, ...rest } = props;

  return (
    <ArkAccordion.ItemContent
      {...rest}
      className={cn("text-fg-muted pr-4 pb-4 text-sm/6", className)}
    />
  );
}
