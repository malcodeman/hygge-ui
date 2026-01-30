import { Progress as ArkProgress } from "@ark-ui/react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "./cn";

const progressCircleVariants = cva("[--thickness:4px]", {
  variants: {
    size: {
      xs: "[--size:24px]",
      sm: "[--size:32px]",
      md: "[--size:40px]",
      lg: "[--size:48px]",
      xl: "[--size:64px]",
    },
  },
  defaultVariants: {
    size: "md",
  },
});
const progressRangeVariants = cva("transition-all", {
  variants: {
    colorPalette: {
      gray: "stroke-[#21201C] dark:stroke-[#eeeeec]",
      orange: "stroke-[#ea580c] dark:stroke-[#f97316]",
      teal: "stroke-[#0d9488] dark:stroke-[#0d9488]",
      green: "stroke-[#16a34a] dark:stroke-[#16a34a]",
      red: "stroke-[#dc2626] dark:stroke-[#dc2626]",
    },
  },
  defaultVariants: {
    colorPalette: "gray",
  },
});

type Props = ArkProgress.RootProps & {
  showValueText?: boolean;
} & VariantProps<typeof progressCircleVariants> &
  VariantProps<typeof progressRangeVariants>;

export function ProgressCircle(props: Props) {
  const { showValueText, size, colorPalette, value, className, ...rest } =
    props;

  return (
    <ArkProgress.Root
      value={value}
      className={cn(
        "relative inline-flex",
        {
          "animate-pulse": value === null,
        },
        className,
      )}
      {...rest}
    >
      <ArkProgress.Circle className={progressCircleVariants({ size })}>
        <ArkProgress.CircleTrack className="stroke-[#E9E8E6] dark:stroke-[#31312e]" />
        <ArkProgress.CircleRange
          className={progressRangeVariants({ colorPalette })}
        />
      </ArkProgress.Circle>
      {showValueText ? (
        <div className="absolute start-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <ArkProgress.ValueText className="text-fg-muted text-sm/6 font-semibold" />
        </div>
      ) : null}
    </ArkProgress.Root>
  );
}
