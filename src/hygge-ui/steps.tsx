import { Steps as ArkSteps } from "@ark-ui/react";
import { createContext, useContext } from "react";
import { cva } from "class-variance-authority";
import { cn } from "./cn";

const indicatorVariants = cva(
  "border-border-subtle text-fg-muted flex items-center justify-center rounded-full border font-semibold transition-colors data-current:border-[#21201C] data-current:bg-[#21201C] data-current:text-white dark:data-current:bg-[#eeeeec] dark:data-current:text-[#191918]",
  {
    variants: {
      size: {
        xs: "size-6 text-xs",
        sm: "size-8 text-xs",
        md: "size-10 text-sm",
        lg: "size-11 text-base",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);
const titleVariants = cva("text-fg-default", {
  variants: {
    size: {
      xs: "text-xs",
      sm: "text-xs",
      md: "text-sm",
      lg: "text-base",
      xl: "text-lg",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

type Size = "xs" | "sm" | "md" | "lg";
type StepsRootProps = {
  size?: Size;
} & ArkSteps.RootProps;

const StepsContext = createContext<{ size: Size }>({
  size: "md",
});

export function StepsRoot(props: StepsRootProps) {
  const { className, size = "md", ...rest } = props;

  return (
    <StepsContext.Provider value={{ size }}>
      <ArkSteps.Root
        {...rest}
        className={cn("flex w-full flex-col gap-4", className)}
      />
    </StepsContext.Provider>
  );
}

export function StepsList(props: ArkSteps.ListProps) {
  const { className, ...rest } = props;

  return (
    <ArkSteps.List
      {...rest}
      className={cn(
        "flex w-full grow gap-2 [&>[data-part=item]:last-of-type]:flex-initial [&>[data-part=item]:last-of-type>[data-part=separator]]:hidden",
        className,
      )}
    />
  );
}

type StepsItemProps = ArkSteps.ItemProps & {
  icon?: React.ReactNode;
};

export function StepsItem(props: StepsItemProps) {
  const { className, index, title, icon, ...rest } = props;
  const { size } = useContext(StepsContext);

  return (
    <ArkSteps.Item
      {...rest}
      index={index}
      className={cn("flex grow items-center gap-2", className)}
    >
      <ArkSteps.Trigger className="flex items-center gap-2 focus:outline-2 focus:-outline-offset-1">
        <ArkSteps.Indicator className={indicatorVariants({ size })}>
          {icon ? icon : index + 1}
        </ArkSteps.Indicator>
        {title ? (
          <span className={cn(titleVariants({ size }))}>{title}</span>
        ) : null}
      </ArkSteps.Trigger>
      <ArkSteps.Separator className="h-px grow bg-[#cfceca] dark:bg-[#494844]" />
    </ArkSteps.Item>
  );
}

export function StepsContent(props: ArkSteps.ContentProps) {
  return <ArkSteps.Content {...props} />;
}

export function StepsCompletedContent(props: ArkSteps.CompletedContentProps) {
  return <ArkSteps.CompletedContent {...props} />;
}

export function StepsPrevTrigger(props: ArkSteps.PrevTriggerProps) {
  return <ArkSteps.PrevTrigger {...props} />;
}

export function StepsNextTrigger(props: ArkSteps.NextTriggerProps) {
  return <ArkSteps.NextTrigger {...props} />;
}
