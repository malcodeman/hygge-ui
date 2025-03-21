import { Progress as ArkProgress } from "@ark-ui/react";
import { cn } from "@/app/lib/cn";

export function ProgressRoot(props: ArkProgress.RootProps) {
  const { className, ...rest } = props;

  return (
    <ArkProgress.Root
      className={cn("flex w-full flex-col gap-1", className)}
      {...rest}
    />
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
