import {
  Toaster as ArkToaster,
  Toast as ArkToast,
  createToaster,
} from "@ark-ui/react";
import {
  LuCircleAlert,
  LuCircleCheck,
  LuInfo,
  LuLoaderCircle,
  LuX,
} from "react-icons/lu";
import { Button } from "./button";

export const toaster = createToaster({
  placement: "bottom-end",
  overlap: true,
  gap: 16,
  max: 21,
});

export function Toaster() {
  function renderIcon(
    type: "success" | "error" | "loading" | "info" | (string & {}) | undefined,
  ) {
    switch (type) {
      case "success":
        return (
          <LuCircleCheck
            size={16}
            className="text-[#116932] dark:text-[#86efac]"
          />
        );
      case "error":
        return (
          <LuCircleAlert
            size={16}
            className="text-[#991919] dark:text-[#fca5a5]"
          />
        );
      case "loading":
        return <LuLoaderCircle size={16} className="animate-spin" />;
      case "info":
        return (
          <LuInfo size={16} className="text-[#173da6] dark:text-[#a3cfff]" />
        );
      default:
        return null;
    }
  }

  return (
    <ArkToaster toaster={toaster}>
      {(toast) => (
        <ArkToast.Root
          key={toast.id}
          className="border-border-subtle bg-bg-default z-(--z-index) max-w-lg min-w-2xs translate-x-(--x) translate-y-(--y) scale-(--scale) rounded-lg border p-2 opacity-(--opacity) shadow-2xs transition-transform"
        >
          <div className="flex items-start gap-2">
            <div>{renderIcon(toast.type)}</div>
            <div>
              {toast.title ? (
                <ArkToast.Title className="text-fg-default text-sm font-semibold">
                  {toast.title}
                </ArkToast.Title>
              ) : null}
              {toast.description ? (
                <ArkToast.Description className="text-fg-muted text-sm font-medium">
                  {toast.description}
                </ArkToast.Description>
              ) : null}
              {toast.action ? (
                <ArkToast.ActionTrigger asChild className="mt-2">
                  <Button variant="outline">{toast.action?.label}</Button>
                </ArkToast.ActionTrigger>
              ) : null}
            </div>
            <ArkToast.CloseTrigger asChild className="ml-auto cursor-pointer">
              <Button variant="ghost" size="xs">
                <LuX size={16} />
              </Button>
            </ArkToast.CloseTrigger>
          </div>
        </ArkToast.Root>
      )}
    </ArkToaster>
  );
}
