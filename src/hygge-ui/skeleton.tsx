import { cn } from "./cn";

type SkeletonProps = React.HTMLAttributes<HTMLDivElement>;

export function Skeleton(props: SkeletonProps) {
  const { className, ...rest } = props;

  return (
    <div
      {...rest}
      className={cn(
        "animate-pulse rounded-sm bg-[#21201c]/8 dark:bg-[#eeeeec]/8",
        className,
      )}
    />
  );
}

type SkeletonCircleProps = React.HTMLAttributes<HTMLDivElement>;

export function SkeletonCircle(props: SkeletonCircleProps) {
  const { className, ...rest } = props;

  return (
    <div
      {...rest}
      className={cn(
        "shrink-0 animate-pulse rounded-full bg-[#21201c]/8 dark:bg-[#eeeeec]/8",
        className,
      )}
    />
  );
}

type SkeletonTextProps = React.HTMLAttributes<HTMLDivElement> & {
  noOfLines?: number;
};

export function SkeletonText(props: SkeletonTextProps) {
  const { className, noOfLines = 3, ...rest } = props;

  return (
    <div {...rest} className={cn("flex w-full flex-col gap-1", className)}>
      {[...Array(noOfLines)].map((_, index) => {
        const isLastLine = index === noOfLines - 1;
        const applyMaxWidth = isLastLine && noOfLines > 1;

        return (
          <div
            key={index}
            className={cn(
              "h-4 w-full animate-pulse rounded-sm bg-[#21201c]/8 dark:bg-[#eeeeec]/8",
              {
                "max-w-[80%]": applyMaxWidth,
              },
            )}
          />
        );
      })}
    </div>
  );
}
