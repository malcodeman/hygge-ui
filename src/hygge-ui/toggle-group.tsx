import { ToggleGroup as ArkToggleGroup } from "@ark-ui/react";
import { cn } from "./cn";

export function ToggleGroupRoot(props: ArkToggleGroup.RootProps) {
  const { className, ...rest } = props;

  return <ArkToggleGroup.Root {...rest} className={cn("flex", className)} />;
}

export function ToggleGroupItem(props: ArkToggleGroup.ItemProps) {
  const { className, ...rest } = props;

  return <ArkToggleGroup.Item {...rest} className={cn(className)} />;
}
