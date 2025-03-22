"use client";
import {
  Toaster as ArkToaster,
  Toast as ArkToast,
  createToaster,
} from "@ark-ui/react";
import { LuX } from "react-icons/lu";
import { Button } from "./button";

export const toaster = createToaster({
  placement: "bottom-end",
  overlap: true,
  gap: 16,
  max: 21,
});

export function Toaster() {
  return (
    <ArkToaster toaster={toaster}>
      {(toast) => (
        <ArkToast.Root
          key={toast.id}
          className="z-[var(--z-index)] max-w-lg min-w-2xs translate-x-[var(--x)] translate-y-[var(--y)] scale-[var(--scale)] rounded-lg border border-[#E9E8E6] bg-white p-2 opacity-[var(--opacity)] shadow-2xs transition-transform dark:border-[#2a2a28] dark:bg-[#191918]"
        >
          {toast.title ? (
            <ArkToast.Title className="text-sm font-semibold text-[#21201C] dark:text-[#eeeeec]">
              {toast.title}
            </ArkToast.Title>
          ) : null}
          {toast.description ? (
            <ArkToast.Description className="text-sm font-medium text-[#63635E] dark:text-[#b5b3ad]">
              {toast.description}
            </ArkToast.Description>
          ) : null}
          {toast.action ? (
            <ArkToast.ActionTrigger asChild className="mt-2">
              <Button variant="ghost">{toast.action?.label}</Button>
            </ArkToast.ActionTrigger>
          ) : null}
          <ArkToast.CloseTrigger
            asChild
            className="absolute top-1 right-1 cursor-pointer"
          >
            <Button variant="ghost">
              <LuX size={16} />
            </Button>
          </ArkToast.CloseTrigger>
        </ArkToast.Root>
      )}
    </ArkToaster>
  );
}
