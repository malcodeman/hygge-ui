import { cn } from "../lib/cn";

export function Text(props: React.ComponentPropsWithoutRef<"p">) {
  const { className, ...rest } = props;

  return (
    <p
      {...rest}
      className={cn(className, "text-sm/6 text-[#63635e] dark:text-[#b5b3ad]")}
    />
  );
}

export function Strong(props: React.ComponentPropsWithoutRef<"strong">) {
  const { className, ...rest } = props;

  return (
    <strong
      {...rest}
      className={cn(
        className,
        "font-medium text-[#21201C] dark:text-[#eeeeec]",
      )}
    />
  );
}
