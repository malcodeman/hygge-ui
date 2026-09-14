import { Collapsible as ArkCollapsible } from "@ark-ui/react";
import { cn } from "./cn";

export function CollapsibleRoot(props: ArkCollapsible.RootProps) {
  return <ArkCollapsible.Root {...props} />;
}

export function CollapsibleTrigger(props: ArkCollapsible.TriggerProps) {
  const { className, ...rest } = props;

  return (
    <ArkCollapsible.Trigger
      {...rest}
      className={cn(
        "data-disabled:cursor-not-allowed data-disabled:opacity-50",
        className,
      )}
    />
  );
}

export function CollapsibleContent(props: ArkCollapsible.ContentProps) {
  return <ArkCollapsible.Content {...props} />;
}
