import Link from "next/link";
import { cn } from "./cn";

export function TextLink(props: React.ComponentPropsWithoutRef<typeof Link>) {
  const { className, href, ...rest } = props;

  return (
    <Link
      {...rest}
      href={href}
      className={cn(
        "text-fg-muted hover:text-fg text-sm/6 underline transition-colors",
        className,
      )}
    />
  );
}
