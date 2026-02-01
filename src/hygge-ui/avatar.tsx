import { Avatar as ArkAvatar } from "@ark-ui/react";
import { cn } from "./cn";

type Props = {
  initials?: string;
  src?: string;
  alt?: string;
  size?: "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  square?: boolean;
} & ArkAvatar.RootProps;

export function Avatar(props: Props) {
  const {
    initials,
    src,
    alt,
    size = "xs",
    square = false,
    className,
    ...rest
  } = props;

  return (
    <ArkAvatar.Root
      {...rest}
      className={cn(
        "flex items-center justify-center overflow-hidden border text-sm/6 font-semibold uppercase",
        "text-fg-default border-border-subtle bg-[#f9f9f8] dark:bg-[#222221]",
        {
          "size-6": size === "2xs",
          "size-8": size === "xs",
          "size-9": size === "sm",
          "size-10": size === "md",
          "size-11": size === "lg",
          "size-12": size === "xl",
          "size-16": size === "2xl",
        },
        square ? "rounded-sm" : "rounded-full",
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
