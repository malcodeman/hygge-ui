import { Steps as ArkSteps } from "@ark-ui/react";
import { cn } from "./cn";

export function StepsRoot(props: ArkSteps.RootProps) {
  const { className, ...rest } = props;

  return (
    <ArkSteps.Root
      {...rest}
      className={cn("flex w-full flex-col gap-4", className)}
    />
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

export function StepsItem(props: ArkSteps.ItemProps) {
  const { className, index, title, ...rest } = props;

  return (
    <ArkSteps.Item
      {...rest}
      index={index}
      className={cn("flex grow items-center gap-2", className)}
    >
      <ArkSteps.Trigger className="flex items-center gap-2 focus:outline-2 focus:-outline-offset-1">
        <ArkSteps.Indicator className="border-border-subtle text-fg-muted flex size-8 items-center justify-center rounded-full border text-sm font-semibold transition-colors data-current:border-[#21201C] data-current:bg-[#21201C] data-current:text-white dark:data-current:bg-[#eeeeec] dark:data-current:text-[#191918]">
          {index + 1}
        </ArkSteps.Indicator>
        <span className="text-fg-muted text-sm">{title}</span>
      </ArkSteps.Trigger>
      <ArkSteps.Separator className="h-px grow bg-[#cfceca] dark:bg-[#494844]" />
    </ArkSteps.Item>
  );
}

export function StepsContent(props: ArkSteps.ContentProps) {
  const { className, ...rest } = props;

  return (
    <ArkSteps.Content
      {...rest}
      className={cn("focus:outline-2 focus:-outline-offset-1", className)}
    />
  );
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
