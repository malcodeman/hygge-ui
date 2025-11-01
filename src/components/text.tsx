import Link from "next/link";
import { cn } from "./cn";

export function Text(props: React.ComponentPropsWithoutRef<"p">) {
  const { className, ...rest } = props;

  return <p {...rest} className={cn("text-fg-muted text-sm/6", className)} />;
}

export function Strong(props: React.ComponentPropsWithoutRef<"strong">) {
  const { className, ...rest } = props;

  return (
    <strong
      {...rest}
      className={cn("text-fg-default text-sm/6 font-medium", className)}
    />
  );
}

export function TextLink(props: React.ComponentPropsWithoutRef<typeof Link>) {
  const { className, ...rest } = props;

  return (
    <Link
      {...rest}
      className={cn(
        "text-fg-muted hover:text-fg-default text-sm/6 underline transition-colors",
        className,
      )}
    />
  );
}
