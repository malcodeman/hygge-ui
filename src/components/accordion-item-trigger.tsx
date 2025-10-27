"use client";
import {
  Accordion as ArkAccordion,
  useAccordionItemContext,
} from "@ark-ui/react";
import { cn } from "./cn";
import { LuChevronDown } from "react-icons/lu";

export function AccordionItemTrigger(props: ArkAccordion.ItemTriggerProps) {
  const { className, children, ...rest } = props;
  const { expanded, disabled } = useAccordionItemContext();

  return (
    <ArkAccordion.ItemTrigger
      {...rest}
      className={cn(
        "text-fg-default flex w-full items-center justify-between gap-3 py-4 text-left text-base font-semibold",
        className,
        disabled ? "cursor-not-allowed" : "cursor-pointer",
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
