import { Avatar as ArkAvatar } from "@ark-ui/react";
import { cn } from "./cn";

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
        "flex size-6 items-center justify-center overflow-hidden rounded-full border text-sm font-semibold",
        "border-[#E9E8E6] bg-[#f9f9f8] text-[#63635e] dark:border-[#2a2a28] dark:bg-[#222221] dark:text-[#b5b3ad]",
        className,
      )}
    >
      {initials ? <ArkAvatar.Fallback>{initials}</ArkAvatar.Fallback> : null}
      <ArkAvatar.Image
        src={src}
        alt={alt}
        className="h-full w-full object-cover"
      />
    </ArkAvatar.Root>
  );
}
