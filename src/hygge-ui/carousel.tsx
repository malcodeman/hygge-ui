import { Carousel as ArkCarousel } from "@ark-ui/react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { cn } from "./cn";
import { Button } from "./button";

export function CarouselRoot(props: ArkCarousel.RootProps) {
  const { className, ...rest } = props;

  return (
    <ArkCarousel.Root
      {...rest}
      className={cn("relative flex w-full max-w-lg flex-col gap-2", className)}
    />
  );
}

export function CarouselControl(props: ArkCarousel.ControlProps) {
  const { className, ...rest } = props;

  return (
    <ArkCarousel.Control
      {...rest}
      className={cn("flex items-center justify-between gap-2", className)}
    />
  );
}

export function CarouselItemGroup(props: ArkCarousel.ItemGroupProps) {
  return <ArkCarousel.ItemGroup {...props} />;
}

export function CarouselItem(props: ArkCarousel.ItemProps) {
  return <ArkCarousel.Item {...props} />;
}

export function CarouselPrevTrigger(props: ArkCarousel.PrevTriggerProps) {
  return (
    <ArkCarousel.PrevTrigger {...props}>
      <Button variant="outline">
        <LuChevronLeft size={16} />
      </Button>
    </ArkCarousel.PrevTrigger>
  );
}

export function CarouselNextTrigger(props: ArkCarousel.NextTriggerProps) {
  return (
    <ArkCarousel.NextTrigger {...props}>
      <Button variant="outline">
        <LuChevronRight size={16} />
      </Button>
    </ArkCarousel.NextTrigger>
  );
}

export function CarouselIndicatorGroup(props: ArkCarousel.IndicatorGroupProps) {
  const { className, ...rest } = props;

  return (
    <ArkCarousel.IndicatorGroup
      {...rest}
      className={cn("flex justify-center gap-1", className)}
    />
  );
}

export function CarouselIndicator(props: ArkCarousel.IndicatorProps) {
  const { className, ...rest } = props;

  return (
    <ArkCarousel.Indicator
      {...rest}
      className={cn(
        "size-2.5 cursor-pointer rounded-full bg-[#E9E8E6] data-current:bg-[#21201C] dark:bg-[#31312e] dark:data-current:bg-[#eeeeec]",
        className,
      )}
    />
  );
}
