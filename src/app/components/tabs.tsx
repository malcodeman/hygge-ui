import { Tabs as ArkTabs } from "@ark-ui/react";
import { cn } from "@/app/lib/cn";

export function TabsRoot(props: ArkTabs.RootProps) {
  return <ArkTabs.Root {...props} />;
}

export function TabsList(props: ArkTabs.ListProps) {
  const { className, children, ...rest } = props;

  return (
    <ArkTabs.List
      {...rest}
      className={cn(
        "relative flex gap-4 shadow-[inset_0_-1px_0_#E9E8E6]",
        className,
      )}
    >
      {children}
      <ArkTabs.Indicator className="bottom-0 h-0.5 w-[var(--width)] bg-[#21201c]" />
    </ArkTabs.List>
  );
}

export function TabsTrigger(props: ArkTabs.TriggerProps) {
  const { className, ...rest } = props;

  return (
    <ArkTabs.Trigger
      {...rest}
      className={cn(
        "inline-flex cursor-pointer items-center justify-center gap-1 p-2 pt-0 text-sm font-semibold text-[#63635E] transition-colors data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 data-[selected]:text-[#21201C]",
        className,
      )}
    />
  );
}

export function TabsContent(props: ArkTabs.ContentProps) {
  const { className, ...rest } = props;

  return <ArkTabs.Content {...rest} className={cn("pt-4", className)} />;
}
