import { Tooltip as ArkTooltip } from "@ark-ui/react";

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
          <ArkTooltip.Content className="z-50 max-w-xs rounded-lg bg-[#191918] p-2 text-xs font-semibold text-[#eeeeec] shadow-2xs dark:bg-white dark:text-[#21201C]">
            {showArrow ? (
              <ArkTooltip.Arrow className="[--arrow-background:#191918] [--arrow-size:8px] dark:[--arrow-background:white]">
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
