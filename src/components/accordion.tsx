import { Accordion as ArkAccordion } from "@ark-ui/react";
import { cn } from "./cn";
import { AccordionItemTrigger } from "./accordion-item-trigger";

export function AccordionRoot(props: ArkAccordion.RootProps) {
  return <ArkAccordion.Root {...props} />;
}

export function AccordionItem(props: ArkAccordion.ItemProps) {
  return (
    <ArkAccordion.Item
      {...props}
      className="border-b border-[#E9E8E6] data-[disabled]:opacity-50 dark:border-[#2a2a28]"
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
