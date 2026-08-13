import { createContext, useContext } from "react";
import { ToggleGroup as ArkToggleGroup } from "@ark-ui/react";
import { type VariantProps } from "class-variance-authority";
import { buttonVariants } from "./button";
import { cn } from "./cn";

type ToggleGroupContextType = Pick<VariantProps<typeof buttonVariants>, "size">;

const ToggleGroupContext = createContext<ToggleGroupContextType>({
  size: "md",
});

type ToggleGroupRootProps = ArkToggleGroup.RootProps & ToggleGroupContextType;

export function ToggleGroupRoot(props: ToggleGroupRootProps) {
  const { size, className, ...rest } = props;

  return (
    <ToggleGroupContext.Provider value={{ size }}>
      <ArkToggleGroup.Root
        {...rest}
        className={cn(
          "isolate inline-flex items-center [&>*:first-child]:rounded-r-none [&>*:last-child]:rounded-l-none [&>*:not(:first-child)]:-ml-px [&>*:not(:first-child):not(:last-child)]:rounded-none",
          className,
        )}
      />
    </ToggleGroupContext.Provider>
  );
}

type ToggleGroupItemProps = ArkToggleGroup.ItemProps & ToggleGroupContextType;

export function ToggleGroupItem(props: ToggleGroupItemProps) {
  const context = useContext(ToggleGroupContext);
  const { size = context.size, className, ...rest } = props;

  return (
    <ArkToggleGroup.Item
      {...rest}
      className={cn(
        buttonVariants({ variant: "outline", size }),
        "data-[state=on]:z-10 data-[state=on]:border-transparent data-[state=on]:bg-[#21201c] data-[state=on]:text-white data-[state=on]:not-disabled:hover:bg-[#21201c]/88",
        "data-[state=on]:dark:bg-[#eeeeec] data-[state=on]:dark:text-[#21201c] data-[state=on]:not-disabled:dark:hover:bg-[#eeeeec]/88",
        className,
      )}
    />
  );
}
