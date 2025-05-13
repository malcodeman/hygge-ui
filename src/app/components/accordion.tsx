import { Accordion as ArkAccordion } from "@ark-ui/react";
import { cn } from "@/app/lib/cn";
import { LuChevronDown } from "react-icons/lu";

export function AccordionRoot(props: ArkAccordion.RootProps) {
  const { className, ...rest } = props;

  return (
    <ArkAccordion.Root
      {...rest}
      className={cn(
        "border-t border-[#E9E8E6] dark:border-[#2a2a28]",
        className,
      )}
    />
  );
}

export function AccordionItem(props: ArkAccordion.ItemProps) {
  return (
    <ArkAccordion.Item
      {...props}
      className="border-b border-[#E9E8E6] dark:border-[#2a2a28]"
    />
  );
}

export function AccordionItemTrigger(props: ArkAccordion.ItemTriggerProps) {
  const { className, children, ...rest } = props;

  return (
    <ArkAccordion.ItemTrigger
      {...rest}
      className={cn(
        "flex w-full cursor-pointer items-center justify-between gap-3 py-4 text-left text-lg font-semibold text-[#21201C] dark:text-[#eeeeec]",
        className,
      )}
    >
      {children}
      <ArkAccordion.ItemIndicator>
        <LuChevronDown size={16} />
      </ArkAccordion.ItemIndicator>
    </ArkAccordion.ItemTrigger>
  );
}

export function AccordionItemContent(props: ArkAccordion.ItemContentProps) {
  const { className, ...rest } = props;

  return (
    <ArkAccordion.ItemContent
      {...rest}
      className={cn("pr-4 pb-4 text-[#63635e] dark:text-[#b5b3ad]", className)}
    />
  );
}
