import { Tooltip as ArkTooltip } from "@ark-ui/react";
import { cn } from "@/app/lib/cn";

type Props = {
  content?: React.ReactNode;
  showArrow?: boolean;
} & ArkTooltip.RootProps;

export function Tooltip(props: Props) {
  const { content, showArrow = false, children, ...rest } = props;

  return (
    <ArkTooltip.Root openDelay={0} {...rest}>
      <ArkTooltip.Trigger asChild>{children}</ArkTooltip.Trigger>
      {content ? (
        <ArkTooltip.Positioner>
          <ArkTooltip.Content
            className={cn(
              "max-w-xs rounded-lg bg-[#21201C] p-2 text-xs font-semibold text-white shadow-2xs",
            )}
          >
            {showArrow ? (
              <ArkTooltip.Arrow>
                <ArkTooltip.ArrowTip />
              </ArkTooltip.Arrow>
            ) : null}
            {content}
          </ArkTooltip.Content>
        </ArkTooltip.Positioner>
      ) : null}
    </ArkTooltip.Root>
  );
}
