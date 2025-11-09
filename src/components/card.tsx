import { cn } from "./cn";

export function Card(props: React.ComponentPropsWithoutRef<"div">) {
  const { className, children, ...rest } = props;

  return (
    <div
      {...rest}
      className={cn(
        "border-border-subtle flex flex-col rounded-lg border bg-white dark:bg-[#191918]",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function CardHeader(props: React.ComponentPropsWithoutRef<"div">) {
  const { className, children, ...rest } = props;

  return (
    <div {...rest} className={cn("flex flex-col gap-1 px-4 pt-4", className)}>
      {children}
    </div>
  );
}

export function CardBody(props: React.ComponentPropsWithoutRef<"div">) {
  const { className, children, ...rest } = props;

  return (
    <div {...rest} className={cn("flex flex-col p-4", className)}>
      {children}
    </div>
  );
}

export function CardFooter(props: React.ComponentPropsWithoutRef<"div">) {
  const { className, children, ...rest } = props;

  return (
    <div
      {...rest}
      className={cn("flex items-center gap-2 px-4 pb-4", className)}
    >
      {children}
    </div>
  );
}
