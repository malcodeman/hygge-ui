"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "../lib/cn";

export function TextLink(props: React.ComponentPropsWithoutRef<typeof Link>) {
  const { className, href, ...rest } = props;
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      {...rest}
      href={href}
      className={cn(
        "text-sm/6 transition-colors",
        isActive
          ? "text-[#eb5e41]"
          : "text-[#63635e] hover:text-[#21201c] dark:text-[#b5b3ad] dark:hover:text-[#eeeeec]",
        className,
      )}
    />
  );
}
