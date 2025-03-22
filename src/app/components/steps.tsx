import { Steps as ArkSteps } from "@ark-ui/react";
import { cn } from "../lib/cn";

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
        "flex w-full flex-grow-1 gap-2 [&>[data-part=item]:last-of-type]:flex-initial [&>[data-part=item]:last-of-type>[data-part=separator]]:hidden",
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
      className={cn("flex flex-grow-1 items-center gap-2", className)}
    >
      <ArkSteps.Trigger className="flex items-center gap-2">
        <ArkSteps.Indicator className="flex size-8 items-center justify-center rounded-full border border-[#E9E8E6] text-sm font-semibold text-[#63635E] transition-colors data-[current]:border-[#21201C] data-[current]:bg-[#21201C] data-[current]:text-white dark:border-[#2a2a28] dark:text-[#b5b3ad] dark:data-[current]:bg-[#eeeeec] dark:data-[current]:text-[#191918]">
          {index + 1}
        </ArkSteps.Indicator>
        <span className="text-sm text-[#63635E]">{title}</span>
      </ArkSteps.Trigger>
      <ArkSteps.Separator className="h-[1px] flex-grow-1 bg-[#cfceca] dark:bg-[#494844]" />
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
