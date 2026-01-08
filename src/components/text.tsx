import { Link } from "@tanstack/react-router";
import { LuExternalLink } from "react-icons/lu";
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

export function ExternalLink(props: React.ComponentPropsWithoutRef<"a">) {
  const { className, children, ...rest } = props;

  return (
    <a
      {...rest}
      className={cn(
        "text-fg-muted hover:text-fg-default inline-flex items-center gap-2 text-sm/6 underline transition-colors",
        className,
      )}
      target="_blank"
    >
      {children}
      <LuExternalLink size={16} />
    </a>
  );
}

export function Code({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"code">) {
  return (
    <code
      {...props}
      className={cn(
        className,
        "border-border-subtle rounded-sm border px-1 text-sm/6",
      )}
    />
  );
}
