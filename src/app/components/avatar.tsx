import { Avatar as ArkAvatar } from "@ark-ui/react";
import { cn } from "@/app/lib/cn";

type Props = {
  initials?: string;
  src?: string | undefined;
  alt?: string | undefined;
  className?: string | undefined;
} & React.ComponentPropsWithoutRef<"div">;

export function Avatar(props: Props) {
  const { initials, src, alt, className, ...rest } = props;

  return (
    <ArkAvatar.Root
      {...rest}
      className={cn(
        className,
        "flex size-8 items-center justify-center overflow-hidden rounded-full border border-[#E9E8E6] bg-[#f9f9f8] text-sm font-semibold text-[#21201C]",
      )}
    >
      {initials ? <ArkAvatar.Fallback>{initials}</ArkAvatar.Fallback> : null}
      <ArkAvatar.Image
        src={src}
        alt={alt}
        className={cn("h-full w-full object-cover")}
      />
    </ArkAvatar.Root>
  );
}
