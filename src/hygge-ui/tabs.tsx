import { Tabs as ArkTabs } from "@ark-ui/react";
import { createContext, useContext } from "react";
import { cn } from "./cn";

type Variant = "line" | "subtle" | "plain";

const TabsContext = createContext<{ variant: Variant }>({
  variant: "line",
});

type TabsRootProps = {
  variant?: Variant;
} & ArkTabs.RootProps;

export function TabsRoot(props: TabsRootProps) {
  const { variant = "line", ...rest } = props;

  return (
    <TabsContext.Provider value={{ variant }}>
      <ArkTabs.Root {...rest} />
    </TabsContext.Provider>
  );
}

export function TabsList(props: ArkTabs.ListProps) {
  const { className, children, ...rest } = props;
  const { variant } = useContext(TabsContext);

  return (
    <ArkTabs.List
      {...rest}
      className={cn(
        "relative flex gap-4",
        {
          "shadow-[inset_0_-1px_0_#cfceca] dark:shadow-[inset_0_-1px_0_#494844]":
            variant === "line",
        },
        className,
      )}
    >
      {children}
      {variant === "line" ? (
        <ArkTabs.Indicator className="bg-fg-default bottom-0 h-0.5 w-(--width)" />
      ) : null}
    </ArkTabs.List>
  );
}

export function TabsTrigger(props: ArkTabs.TriggerProps) {
  const { className, ...rest } = props;
  const { variant } = useContext(TabsContext);

  return (
    <ArkTabs.Trigger
      {...rest}
      className={cn(
        "data-selected:text-fg-default text-fg-muted flex cursor-pointer items-center gap-2 p-2 text-sm font-medium transition-colors data-disabled:cursor-not-allowed data-disabled:opacity-50",
        {
          "rounded-sm data-selected:bg-[#21201c]/8 dark:data-selected:bg-[#eeeeec]/8":
            variant === "subtle",
        },
        className,
      )}
    />
  );
}

export function TabsContent(props: ArkTabs.ContentProps) {
  const { className, ...rest } = props;

  return <ArkTabs.Content {...rest} className={cn("pt-4", className)} />;
}
