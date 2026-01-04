import { QrCode as ArkQrCode } from "@ark-ui/react";
import { cva, VariantProps } from "class-variance-authority";
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

type Props = ArkQrCode.RootProps & VariantProps<typeof qrCodeVariants>;

export function QrCode(props: Props) {
  const { size, className, children, ...rest } = props;

  return (
    <ArkQrCode.Root
      className={cn(qrCodeVariants({ size }), className)}
      {...rest}
    >
      <ArkQrCode.Frame className="bg-white">
        <ArkQrCode.Pattern />
      </ArkQrCode.Frame>
      {children}
    </ArkQrCode.Root>
  );
}

export function QrCodeDownloadTrigger(props: ArkQrCode.DownloadTriggerProps) {
  return <ArkQrCode.DownloadTrigger {...props} />;
}
