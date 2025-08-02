"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "./cn";

export function NavLink(props: React.ComponentPropsWithoutRef<typeof Link>) {
  const { className, href, ...rest } = props;
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      {...rest}
      href={href}
      className={cn(
        "text-sm/6 transition-colors",
        isActive ? "text-[#eb5e41]" : "text-fg-muted hover:text-fg",
        className,
      )}
    />
  );
}
