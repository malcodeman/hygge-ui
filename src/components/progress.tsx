import { Progress as ArkProgress } from "@ark-ui/react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "./cn";

const progressTrackVariants = cva(
  "w-full overflow-hidden rounded-xs bg-[#E9E8E6] dark:bg-[#31312e]",
  {
    variants: {
      size: {
        xs: "h-1.5",
        sm: "h-2",
        md: "h-2.5",
        lg: "h-3",
        xl: "h-3.5",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);
const progressRangeVariants = cva("h-full bg-[#eb5e41] transition-all", {
  variants: {
    colorPalette: {
      gray: "bg-[#21201C] dark:bg-[#eeeeec]",
      orange: "bg-[#ea580c] dark:bg-[#f97316]",
      teal: "bg-[#0d9488] dark:bg-[#0d9488]",
      green: "bg-[#16a34a] dark:bg-[#16a34a]",
      red: "bg-[#dc2626] dark:bg-[#dc2626]",
    },
  },
  defaultVariants: {
    colorPalette: "gray",
  },
});

type Props = ArkProgress.RootProps & {
  label?: React.ReactNode;
  showValueText?: boolean;
} & VariantProps<typeof progressTrackVariants> &
  VariantProps<typeof progressRangeVariants>;

export function Progress(props: Props) {
  const {
    label,
    showValueText,
    size,
    colorPalette,
    value,
    className,
    ...rest
  } = props;

  return (
    <ArkProgress.Root
      value={value}
      className={cn(
        "flex w-full flex-col gap-1",
        {
          "animate-pulse": value === null,
        },
        className,
      )}
      {...rest}
    >
      {label ? (
        <ArkProgress.Label
          className={cn("text-fg-default text-sm/6 font-semibold")}
        >
          {label}
        </ArkProgress.Label>
      ) : null}
      <ArkProgress.Track className={progressTrackVariants({ size })}>
        <ArkProgress.Range
          className={cn(progressRangeVariants({ colorPalette }), className)}
        />
      </ArkProgress.Track>
      {showValueText ? (
        <ArkProgress.ValueText
          className={cn("text-fg-muted text-sm/6 font-semibold")}
        />
      ) : null}
    </ArkProgress.Root>
  );
}

export function ProgressLabel(props: ArkProgress.LabelProps) {
  const { className, ...rest } = props;

  return (
    <ArkProgress.Label
      className={cn(
        "inline-flex items-center gap-1 text-sm font-semibold text-[#21201C] dark:text-[#eeeeec]",
        className,
      )}
      {...rest}
    />
  );
}

export function ProgressValueText(props: ArkProgress.ValueTextProps) {
  const { className, ...rest } = props;

  return (
    <ArkProgress.ValueText
      className={cn(
        "text-sm font-semibold text-[#63635E] dark:text-[#b5b3ad]",
        className,
      )}
      {...rest}
    />
  );
}

export function ProgressTrack(props: ArkProgress.TrackProps) {
  const { className, ...rest } = props;

  return (
    <ArkProgress.Track
      className={cn(
        "h-2 w-full overflow-hidden rounded-sm bg-[#E9E8E6] dark:bg-[#31312e]",
        className,
      )}
      {...rest}
    />
  );
}

export function ProgressRange(props: ArkProgress.RangeProps) {
  const { className, ...rest } = props;

  return (
    <ArkProgress.Range
      className={cn("h-full bg-[#eb5e41] transition-all", className)}
      {...rest}
    />
  );
}

export function ProgressCircle(props: ArkProgress.CircleProps) {
  return <ArkProgress.Circle {...props} />;
}

export function ProgressCircleTrack(props: ArkProgress.CircleTrackProps) {
  const { className, ...rest } = props;

  return (
    <ArkProgress.CircleTrack
      className={cn("stroke-[#E9E8E6] dark:stroke-[#31312e]", className)}
      {...rest}
    />
  );
}

export function ProgressCircleRange(props: ArkProgress.CircleRangeProps) {
  const { className, ...rest } = props;

  return (
    <ArkProgress.CircleRange
      className={cn("stroke-[#eb5e41] transition-all", className)}
      {...rest}
    />
  );
}
