import { Dialog as ArkDialog, Portal } from "@ark-ui/react";
import { LuX } from "react-icons/lu";
import { cn } from "./cn";
import { Button } from "./button";

export function DialogRoot(props: ArkDialog.RootProps) {
  return <ArkDialog.Root {...props} />;
}

export function DialogTrigger(props: ArkDialog.TriggerProps) {
  return <ArkDialog.Trigger {...props} />;
}

type DialogContentProps = {
  showCloseTrigger?: boolean;
} & ArkDialog.ContentProps;

export function DialogContent(props: DialogContentProps) {
  const { showCloseTrigger = false, className, children, ...rest } = props;

  return (
    <Portal>
      <ArkDialog.Backdrop
        className={cn(
          "fixed top-0 left-0 z-50 h-dvh w-screen bg-white/80 blur-xs dark:bg-black/80",
        )}
      />
      <ArkDialog.Positioner
        className={cn(
          "fixed top-0 left-0 z-50 flex h-dvh w-screen items-center justify-center",
        )}
      >
        <ArkDialog.Content
          {...rest}
          className={cn(
            "relative w-full max-w-lg rounded-lg bg-white shadow-[0_0_0_1px_#E9E8E6] dark:bg-[#191918] dark:shadow-[0_0_0_1px_#2a2a28]",
            className,
          )}
        >
          {children}
          {showCloseTrigger ? (
            <ArkDialog.CloseTrigger
              asChild
              className="absolute top-1 right-1 cursor-pointer"
            >
              <Button variant="ghost">
                <LuX size={16} />
              </Button>
            </ArkDialog.CloseTrigger>
          ) : null}
        </ArkDialog.Content>
      </ArkDialog.Positioner>
    </Portal>
  );
}

export function DialogTitle(props: ArkDialog.TitleProps) {
  const { className, ...rest } = props;

  return (
    <ArkDialog.Title
      {...rest}
      className={cn(
        "text-2xl font-semibold text-[#21201C] dark:text-[#eeeeec]",
        className,
      )}
    />
  );
}

export function DialogDescription(props: ArkDialog.DescriptionProps) {
  const { className, ...rest } = props;

  return (
    <ArkDialog.Description
      {...rest}
      className={cn(
        "text-sm font-semibold text-[#63635E] dark:text-[#b5b3ad]",
        className,
      )}
    />
  );
}

export function DialogHeader(props: React.ComponentPropsWithoutRef<"header">) {
  const { className, ...rest } = props;

  return <header {...rest} className={cn("p-4 pb-2", className)} />;
}

export function DialogBody(props: React.ComponentPropsWithoutRef<"div">) {
  const { className, ...rest } = props;

  return <div {...rest} className={cn("p-4 pt-2", className)} />;
}

export function DialogFooter(props: React.ComponentPropsWithoutRef<"footer">) {
  const { className, ...rest } = props;

  return (
    <footer
      {...rest}
      className={cn(
        "flex justify-between rounded-b-lg border-t border-t-[#E9E8E6] bg-[#f9f9f8] p-4 dark:border-t-[#2a2a28] dark:bg-[#222221]",
        className,
      )}
    />
  );
}

export function DialogCloseTrigger(props: ArkDialog.CloseTriggerProps) {
  return <ArkDialog.CloseTrigger {...props} />;
}
