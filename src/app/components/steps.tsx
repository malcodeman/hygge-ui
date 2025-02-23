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
      <ArkSteps.Trigger className={cn("flex items-center gap-2")}>
        <ArkSteps.Indicator
          className={cn(
            "flex size-8 items-center justify-center rounded-full border border-[#E9E8E6] text-sm font-semibold text-[#63635E] transition-colors data-[current]:border-[#21201C] data-[current]:bg-[#21201C] data-[current]:text-white",
          )}
        >
          {index + 1}
        </ArkSteps.Indicator>
        <span className={cn("text-sm text-[#63635E]")}>{title}</span>
      </ArkSteps.Trigger>
      <ArkSteps.Separator className={cn("h-[1px] flex-grow-1 bg-[#E9E8E6]")} />
    </ArkSteps.Item>
  );
}

export function StepsContent(props: ArkSteps.ContentProps) {
  const { className, ...rest } = props;

  return <ArkSteps.Content {...rest} className={cn("flex gap-2", className)} />;
}

export function StepsCompletedContent(props: ArkSteps.CompletedContentProps) {
  const { className, ...rest } = props;

  return (
    <ArkSteps.CompletedContent
      {...rest}
      className={cn("flex gap-2", className)}
    />
  );
}

export function StepsPrevTrigger(props: ArkSteps.PrevTriggerProps) {
  return <ArkSteps.PrevTrigger {...props} />;
}

export function StepsNextTrigger(props: ArkSteps.NextTriggerProps) {
  return <ArkSteps.NextTrigger {...props} />;
}
