import { cn } from "@/app/lib/cn";

export function Card(props: React.ComponentPropsWithoutRef<"div">) {
  const { className, children, ...rest } = props;

  return (
    <div
      {...rest}
      className={cn(
        "rounded-lg border border-[#e9e8e6] bg-white p-4 dark:border-[#2a2a28] dark:bg-[#191918]",
        className,
      )}
    >
      {children}
    </div>
  );
}
