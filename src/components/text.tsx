import { cn } from "./cn";

export function Text(props: React.ComponentPropsWithoutRef<"p">) {
  const { className, ...rest } = props;

  return <p {...rest} className={cn(className, "text-fg-muted text-sm/6")} />;
}

export function Strong(props: React.ComponentPropsWithoutRef<"strong">) {
  const { className, ...rest } = props;

  return <strong {...rest} className={cn(className, "text-fg font-medium")} />;
}
