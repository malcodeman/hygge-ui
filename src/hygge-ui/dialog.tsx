import { Dialog as ArkDialog, Portal } from "@ark-ui/react";
import { createContext, useContext } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { LuX } from "react-icons/lu";
import { cn } from "./cn";
import { Button } from "./button";

const dialogContentVariants = cva(
  "bg-bg-default relative w-full rounded-lg shadow-[0_0_0_1px_#E9E8E6] dark:shadow-[0_0_0_1px_#2a2a28]",
  {
    variants: {
      size: {
        xs: "max-w-sm",
        sm: "max-w-md",
        md: "max-w-md",
        lg: "max-w-lg",
        xl: "max-w-xl",
        cover: "max-h-[calc(100dvh-2rem)] max-w-[calc(100vw-2rem)]",
        full: "h-dvh w-screen max-w-screen rounded-none!",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

const DialogContext = createContext<VariantProps<typeof dialogContentVariants>>(
  {
    size: "md",
  },
);

type DialogRootProps = VariantProps<typeof dialogContentVariants> &
  ArkDialog.RootProps;

export function DialogRoot(props: DialogRootProps) {
  const { size, ...rest } = props;

  return (
    <DialogContext.Provider value={{ size }}>
      <ArkDialog.Root {...rest} />
    </DialogContext.Provider>
  );
}

export function DialogTrigger(props: ArkDialog.TriggerProps) {
  return <ArkDialog.Trigger {...props} />;
}

type DialogContentProps = {
  showCloseTrigger?: boolean;
} & ArkDialog.ContentProps;

export function DialogContent(props: DialogContentProps) {
  const { showCloseTrigger = false, className, children, ...rest } = props;
  const { size } = useContext(DialogContext);

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
          className={cn(dialogContentVariants({ size }), className)}
        >
          {children}
          {showCloseTrigger ? (
            <ArkDialog.CloseTrigger
              asChild
              className="absolute top-1 right-1 cursor-pointer"
            >
              <Button variant="ghost" size="xs">
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
      className={cn("text-fg-default text-2xl font-semibold", className)}
    />
  );
}

export function DialogDescription(props: ArkDialog.DescriptionProps) {
  const { className, ...rest } = props;

  return (
    <ArkDialog.Description
      {...rest}
      className={cn("text-fg-muted text-sm/6", className)}
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
        "border-t-border-subtle flex justify-between rounded-b-lg border-t bg-[#f9f9f8] p-4 dark:bg-[#222221]",
        className,
      )}
    />
  );
}

export function DialogCloseTrigger(props: ArkDialog.CloseTriggerProps) {
  return <ArkDialog.CloseTrigger {...props} />;
}
