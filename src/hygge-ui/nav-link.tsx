import { Link, useMatchRoute } from "@tanstack/react-router";
import { cn } from "./cn";

export function NavLink(props: React.ComponentPropsWithoutRef<typeof Link>) {
  const { className, href, ...rest } = props;
  const matchRoute = useMatchRoute();
  const isActive = matchRoute({
    to: href,
    fuzzy: false,
  });

  return (
    <Link
      {...rest}
      to={href}
      className={cn(
        "focus-visible:outline-fg-default text-sm/6 transition-colors focus-visible:outline-2 focus-visible:-outline-offset-1",
        isActive ? "text-[#eb5e41]" : "text-fg-muted hover:text-fg-default",
        className,
      )}
    />
  );
}
