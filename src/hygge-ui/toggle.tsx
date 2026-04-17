import { Toggle as ArkToggle } from "@ark-ui/react";
import { type VariantProps } from "class-variance-authority";
import { buttonVariants } from "./button";
import { cn } from "./cn";

type ToggleProps = ArkToggle.RootProps &
  Pick<VariantProps<typeof buttonVariants>, "size">;

export function Toggle(props: ToggleProps) {
  const { className, size, ...rest } = props;

  return (
    <ArkToggle.Root
      {...rest}
      className={cn(
        buttonVariants({ variant: "outline", size }),
        "data-[state=on]:border-transparent data-[state=on]:bg-[#21201c] data-[state=on]:text-white data-[state=on]:not-disabled:hover:bg-[#21201c]/88",
        "data-[state=on]:dark:bg-[#eeeeec] data-[state=on]:dark:text-[#21201c] data-[state=on]:not-disabled:dark:hover:bg-[#eeeeec]/88",
        className,
      )}
    />
  );
}
