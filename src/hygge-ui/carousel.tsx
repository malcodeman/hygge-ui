import { Carousel as ArkCarousel, useCarouselContext } from "@ark-ui/react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { cn } from "./cn";
import { Button } from "./button";

export function CarouselRoot(props: ArkCarousel.RootProps) {
  const { className, ...rest } = props;

  return (
    <ArkCarousel.Root
      {...rest}
      className={cn(
        "relative flex w-full max-w-lg flex-col gap-2 data-[orientation=vertical]:flex-row",
        className,
      )}
    />
  );
}

export function CarouselControl(props: ArkCarousel.ControlProps) {
  const { className, ...rest } = props;

  return (
    <ArkCarousel.Control
      {...rest}
      className={cn(
        "flex items-center justify-center gap-2 data-[orientation=vertical]:flex-col data-[orientation=vertical]:justify-between",
        className,
      )}
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
  const { className, ...rest } = props;

  return (
    <ArkCarousel.PrevTrigger
      {...rest}
      asChild
      className={cn(
        "disabled:cursor-not-allowed disabled:opacity-50 data-[orientation=vertical]:rotate-90",
        className,
      )}
    >
      <Button variant="ghost" size="xs">
        <LuChevronLeft size={16} />
      </Button>
    </ArkCarousel.PrevTrigger>
  );
}

export function CarouselNextTrigger(props: ArkCarousel.NextTriggerProps) {
  const { className, ...rest } = props;

  return (
    <ArkCarousel.NextTrigger
      {...rest}
      asChild
      className={cn(
        "disabled:cursor-not-allowed disabled:opacity-50 data-[orientation=vertical]:rotate-90",
        className,
      )}
    >
      <Button variant="ghost" size="xs">
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
      className={cn(
        "flex justify-center gap-2 data-[orientation=vertical]:flex-col",
        className,
      )}
    />
  );
}

export function CarouselIndicator(props: ArkCarousel.IndicatorProps) {
  const { className, ...rest } = props;

  return (
    <ArkCarousel.Indicator
      {...rest}
      className={cn("cursor-pointer", className)}
    />
  );
}

export function CarouselIndicators(props: ArkCarousel.IndicatorGroupProps) {
  const { pageSnapPoints } = useCarouselContext();

  return (
    <CarouselIndicatorGroup {...props}>
      {pageSnapPoints.map((_, index) => (
        <CarouselIndicator
          key={index}
          index={index}
          className="size-2.5 rounded-full bg-[#E9E8E6] data-current:bg-[#21201C] dark:bg-[#31312e] dark:data-current:bg-[#eeeeec]"
        />
      ))}
    </CarouselIndicatorGroup>
  );
}
