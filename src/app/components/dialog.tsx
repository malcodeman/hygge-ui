import { Dialog as ArkDialog } from "@ark-ui/react";
import { LuX } from "react-icons/lu";
import { cn } from "@/app/lib/cn";
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
    <>
      <ArkDialog.Backdrop
        className={cn(
          "fixed top-0 left-0 z-50 h-dvh w-screen bg-white/80 blur-xs",
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
            className,
            "relative max-w-lg min-w-sm rounded-lg border border-[#E9E8E6] bg-white shadow-xs",
          )}
        >
          {children}
          {showCloseTrigger ? (
            <ArkDialog.CloseTrigger
              asChild
              className={cn(className, "absolute top-1 right-1 cursor-pointer")}
            >
              <Button variant="ghost">
                <LuX size={16} />
              </Button>
            </ArkDialog.CloseTrigger>
          ) : null}
        </ArkDialog.Content>
      </ArkDialog.Positioner>
    </>
  );
}

export function DialogTitle(props: ArkDialog.TitleProps) {
  const { className, ...rest } = props;

  return (
    <ArkDialog.Title
      {...rest}
      className={cn(className, "text-2xl font-semibold text-[#21201C]")}
    />
  );
}

export function DialogDescription(props: ArkDialog.DescriptionProps) {
  const { className, ...rest } = props;

  return (
    <ArkDialog.Description
      {...rest}
      className={cn(className, "text-sm font-semibold text-[#63635E]")}
    />
  );
}

export function DialogHeader(props: React.ComponentPropsWithoutRef<"header">) {
  const { className, ...rest } = props;

  return <header {...rest} className={cn(className, "p-4 pb-2")} />;
}

export function DialogBody(props: React.ComponentPropsWithoutRef<"div">) {
  const { className, ...rest } = props;

  return <div {...rest} className={cn(className, "p-4 pt-2")} />;
}

export function DialogFooter(props: React.ComponentPropsWithoutRef<"footer">) {
  const { className, ...rest } = props;

  return (
    <footer
      {...rest}
      className={cn(
        className,
        "flex justify-between rounded-b-lg border-t border-t-[#E9E8E6] bg-[#f9f9f8] p-2",
      )}
    />
  );
}

export function DialogCloseTrigger(props: ArkDialog.CloseTriggerProps) {
  return <ArkDialog.CloseTrigger {...props} />;
}
