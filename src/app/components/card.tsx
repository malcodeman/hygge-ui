import { cn } from "@/app/lib/cn";

export function Card(props: React.ComponentPropsWithoutRef<"div">) {
  const { className, children, ...rest } = props;

  return (
    <div
      {...rest}
      className={cn(
        className,
        "rounded-lg border border-[#E9E8E6] bg-[#f9f9f8] p-2",
      )}
    >
      {children}
    </div>
  );
}
