import { QrCode as ArkQrCode } from "@ark-ui/react";
import { cva, type VariantProps } from "class-variance-authority";
import { LuLoaderCircle } from "react-icons/lu";
import { cn } from "./cn";

const qrCodeVariants = cva("flex flex-col gap-2", {
  variants: {
    size: {
      "2xs": "size-10",
      xs: "size-16",
      sm: "size-20",
      md: "size-32",
      lg: "size-40",
      xl: "size-52",
      "2xl": "size-60",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

type Props = ArkQrCode.RootProps & {
  overlay?: React.ReactNode;
  loading?: boolean;
  fill?: string;
} & VariantProps<typeof qrCodeVariants>;

export function QrCode(props: Props) {
  const { overlay, loading, fill, size, className, children, ...rest } = props;

  return (
    <ArkQrCode.Root
      className={cn("flex w-fit flex-col gap-2", className)}
      {...rest}
    >
      <div className="relative">
        <ArkQrCode.Frame
          className={cn("dark:fill-white", qrCodeVariants({ size }))}
          style={{ fill }}
        >
          <ArkQrCode.Pattern />
        </ArkQrCode.Frame>
        {loading ? (
          <div className="absolute inset-0 flex items-center justify-center bg-white/88 dark:bg-black/88">
            <LuLoaderCircle size={16} className="animate-spin" />
          </div>
        ) : null}
        {overlay && !loading ? (
          <ArkQrCode.Overlay className="h-6 w-6 rounded-full outline-2 outline-white dark:outline-[#191918]">
            {overlay}
          </ArkQrCode.Overlay>
        ) : null}
      </div>
      {children}
    </ArkQrCode.Root>
  );
}

export function QrCodeDownloadTrigger(props: ArkQrCode.DownloadTriggerProps) {
  return <ArkQrCode.DownloadTrigger {...props} />;
}
