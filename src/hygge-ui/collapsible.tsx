import { Collapsible as ArkCollapsible } from "@ark-ui/react";

export function CollapsibleRoot(props: ArkCollapsible.RootProps) {
  return <ArkCollapsible.Root {...props} />;
}

export function CollapsibleTrigger(props: ArkCollapsible.TriggerProps) {
  return <ArkCollapsible.Trigger {...props} />;
}

export function CollapsibleContent(props: ArkCollapsible.ContentProps) {
  return <ArkCollapsible.Content {...props} />;
}
