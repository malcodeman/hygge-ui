import { QrCode as ArkQrCode } from "@ark-ui/react";
import { cn } from "@/app/lib/cn";

export function QrCode(props: ArkQrCode.RootProps) {
  const { className, children, ...rest } = props;

  return (
    <ArkQrCode.Root className={cn("flex flex-col gap-2", className)} {...rest}>
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
