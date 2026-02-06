import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "app/components/page-header";
import { PagePreviewCodeTabs } from "app/components/page-preview-code-tabs";
import {
  CarouselControl,
  CarouselIndicator,
  CarouselIndicatorGroup,
  CarouselIndicators,
  CarouselItem,
  CarouselItemGroup,
  CarouselNextTrigger,
  CarouselPrevTrigger,
  CarouselRoot,
} from "hygge-ui/carousel";
import { Heading } from "hygge-ui/heading";
import { Code, Text } from "hygge-ui/text";
import { LuClock, LuMouse, LuMoveHorizontal } from "react-icons/lu";

export const Route = createFileRoute("/docs/components/carousel")({
  component: CarouselPage,
  head: () => ({
    meta: [
      {
        title: "Carousel | Hygge UI",
      },
    ],
  }),
});

function CarouselPage() {
  const images = [
    { src: "https://picsum.photos/seed/1/500/300", alt: "Nature landscape" },
    { src: "https://picsum.photos/seed/2/500/300", alt: "City skyline" },
    { src: "https://picsum.photos/seed/3/500/300", alt: "Mountain view" },
    { src: "https://picsum.photos/seed/4/500/300", alt: "Ocean sunset" },
    { src: "https://picsum.photos/seed/5/500/300", alt: "Forest path" },
  ];

  return (
    <>
      <PageHeader
        title="Carousel"
        description="Used to cycle through a series of visual content within a container."
        githubLink="https://github.com/malcodeman/hygge-ui/blob/main/src/hygge-ui/carousel.tsx"
        className="mb-2"
        verified
      />
      <PagePreviewCodeTabs
        preview={
          <CarouselRoot slideCount={images.length}>
            <CarouselItemGroup>
              {images.map((image, index) => (
                <CarouselItem key={index} index={index}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover"
                  />
                </CarouselItem>
              ))}
            </CarouselItemGroup>
            <CarouselControl>
              <CarouselPrevTrigger />
              <CarouselIndicators />
              <CarouselNextTrigger />
            </CarouselControl>
          </CarouselRoot>
        }
        code={`<CarouselRoot slideCount={images.length}>
  <CarouselItemGroup>
    {images.map((image, index) => (
      <CarouselItem key={index} index={index}>
        <img
          src={image.src}
          alt={image.alt}
          className="h-full w-full object-cover"
        />
      </CarouselItem>
    ))}
  </CarouselItemGroup>
  <CarouselControl>
    <CarouselPrevTrigger />
    <CarouselIndicatorGroup>
      {images.map((_, index) => (
        <CarouselIndicator key={index} index={index} />
      ))}
    </CarouselIndicatorGroup>
    <CarouselNextTrigger />
  </CarouselControl>
</CarouselRoot>`}
      />
      <Heading level={2} className="mt-10 mb-2">
        Examples
      </Heading>
      <Heading level={3} size="lg" className="mb-2">
        Indicators
      </Heading>
      <Text className="mb-2">
        Use the <Code>CarouselIndicators</Code> component to render visual
        indicators that help users track the progress of the carousel and jump
        to specific slides.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <CarouselRoot slideCount={images.length}>
            <CarouselItemGroup>
              {images.map((image, index) => (
                <CarouselItem key={index} index={index}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover"
                  />
                </CarouselItem>
              ))}
            </CarouselItemGroup>
            <CarouselControl>
              <CarouselIndicators />
            </CarouselControl>
          </CarouselRoot>
        }
        code={`<CarouselRoot slideCount={images.length}>
  <CarouselItemGroup>
    {images.map((image, index) => (
      <CarouselItem key={index} index={index}>
        <img
          src={image.src}
          alt={image.alt}
          className="h-full w-full object-cover"
        />
      </CarouselItem>
    ))}
  </CarouselItemGroup>
  <CarouselControl>
    <CarouselIndicators />
  </CarouselControl>
</CarouselRoot>`}
      />
      <Heading level={3} size="lg" className="mt-10 mb-2">
        Thumbnail Indicators
      </Heading>
      <Text className="mb-2">
        Here&apos;s an example that uses an image thumbnail as a custom
        indicator.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <CarouselRoot slideCount={images.length}>
            <CarouselItemGroup>
              {images.map((image, index) => (
                <CarouselItem key={index} index={index}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover"
                  />
                </CarouselItem>
              ))}
            </CarouselItemGroup>
            <CarouselControl>
              <CarouselPrevTrigger />
              <CarouselIndicatorGroup>
                {images.map((item, index) => (
                  <CarouselIndicator
                    key={index}
                    index={index}
                    className="data-current:outline-2 data-current:outline-current"
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="aspect-video w-20 object-cover"
                    />
                  </CarouselIndicator>
                ))}
              </CarouselIndicatorGroup>
              <CarouselNextTrigger />
            </CarouselControl>
          </CarouselRoot>
        }
        code={`<CarouselRoot slideCount={images.length}>
  <CarouselItemGroup>
    {images.map((image, index) => (
      <CarouselItem key={index} index={index}>
        <img
          src={image.src}
          alt={image.alt}
          className="h-full w-full object-cover"
        />
      </CarouselItem>
    ))}
  </CarouselItemGroup>
  <CarouselControl>
    <CarouselPrevTrigger />
    <CarouselIndicatorGroup>
      {images.map((item, index) => (
        <CarouselIndicator
          key={index}
          index={index}
          className="data-current:outline-2 data-current:outline-current"
        >
          <img
            src={item.src}
            alt={item.alt}
            className="aspect-video w-20 object-cover"
          />
        </CarouselIndicator>
      ))}
    </CarouselIndicatorGroup>
    <CarouselNextTrigger />
  </CarouselControl>
</CarouselRoot>`}
      />
      <Heading level={3} size="lg" className="mt-10 mb-2">
        Spacing
      </Heading>
      <Text className="mb-2">
        Use the <Code>spacing</Code> prop to control the spacing between slides.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <CarouselRoot
            spacing="48px"
            slidesPerPage={1.5}
            slideCount={images.length}
          >
            <Text className="mb-2">Spacing: 48px</Text>
            <CarouselItemGroup>
              {images.map((image, index) => (
                <CarouselItem key={index} index={index}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover"
                  />
                </CarouselItem>
              ))}
            </CarouselItemGroup>
            <CarouselControl>
              <CarouselPrevTrigger />
              <CarouselIndicators />
              <CarouselNextTrigger />
            </CarouselControl>
          </CarouselRoot>
        }
        code={`<CarouselRoot
  spacing="48px"
  slidesPerPage={1.5}
  slideCount={images.length}
>
  <Text className="mb-2">Spacing: 48px</Text>
  <CarouselItemGroup>
    {images.map((image, index) => (
      <CarouselItem key={index} index={index}>
        <img
          src={image.src}
          alt={image.alt}
          className="h-full w-full object-cover"
        />
      </CarouselItem>
    ))}
  </CarouselItemGroup>
  <CarouselControl>
    <CarouselPrevTrigger />
    <CarouselIndicators />
    <CarouselNextTrigger />
  </CarouselControl>
</CarouselRoot>`}
      />
      <Heading level={3} size="lg" className="mt-10 mb-2">
        Vertical
      </Heading>
      <Text className="mb-2">
        Use the <Code>orientation</Code> prop to <Code>vertical</Code> to
        transform your carousel into a vertical slider.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <CarouselRoot
            orientation="vertical"
            slideCount={images.length}
            className="h-80"
          >
            <CarouselItemGroup>
              {images.map((image, index) => (
                <CarouselItem key={index} index={index}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover"
                  />
                </CarouselItem>
              ))}
            </CarouselItemGroup>
            <CarouselControl>
              <CarouselPrevTrigger />
              <CarouselIndicators />
              <CarouselNextTrigger />
            </CarouselControl>
          </CarouselRoot>
        }
        code={`<CarouselRoot
  orientation="vertical"
  slideCount={images.length}
  className="h-80"
>
  <CarouselItemGroup>
    {images.map((image, index) => (
      <CarouselItem key={index} index={index}>
        <img
          src={image.src}
          alt={image.alt}
          className="h-full w-full object-cover"
        />
      </CarouselItem>
    ))}
  </CarouselItemGroup>
  <CarouselControl>
    <CarouselPrevTrigger />
    <CarouselIndicators />
    <CarouselNextTrigger />
  </CarouselControl>
</CarouselRoot>`}
      />
      <Heading level={3} size="lg" className="mt-10 mb-2">
        Mose Drag
      </Heading>
      <Text className="mb-2">
        Use the <Code>allowMouseDrag</Code> prop to enable mouse dragging on the
        carousel.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <CarouselRoot allowMouseDrag slideCount={images.length}>
            <Text className="inline-flex items-center gap-2">
              <LuMouse size={16} /> <LuMoveHorizontal size={16} />
              Click and drag to change slides
            </Text>
            <CarouselItemGroup>
              {images.map((image, index) => (
                <CarouselItem key={index} index={index}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover"
                  />
                </CarouselItem>
              ))}
            </CarouselItemGroup>
            <CarouselControl>
              <CarouselPrevTrigger />
              <CarouselIndicators />
              <CarouselNextTrigger />
            </CarouselControl>
          </CarouselRoot>
        }
        code={`<CarouselRoot allowMouseDrag slideCount={images.length}>
  <Text className="inline-flex items-center gap-2">
    <LuMouse size={16} /> <LuMoveHorizontal size={16} />
    Click and drag to change slides
  </Text>
  <CarouselItemGroup>
    {images.map((image, index) => (
      <CarouselItem key={index} index={index}>
        <img
          src={image.src}
          alt={image.alt}
          className="h-full w-full object-cover"
        />
      </CarouselItem>
    ))}
  </CarouselItemGroup>
  <CarouselControl>
    <CarouselPrevTrigger />
    <CarouselIndicators />
    <CarouselNextTrigger />
  </CarouselControl>
</CarouselRoot>`}
      />
      <Heading level={3} size="lg" className="mt-10 mb-2">
        Autoplay
      </Heading>
      <Text className="mb-2">
        Pass the <Code>autoplay</Code> prop to the <Code>CarouselRoot</Code>{" "}
        component to make the carousel automatically move between slides.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <CarouselRoot autoplay={{ delay: 2000 }} slideCount={images.length}>
            <Text className="inline-flex items-center gap-2">
              <LuClock size={16} /> {"autoplay={{ delay: 2000 }}"} or{" "}
              {"autoplay={true}"}
            </Text>
            <CarouselItemGroup>
              {images.map((image, index) => (
                <CarouselItem key={index} index={index}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover"
                  />
                </CarouselItem>
              ))}
            </CarouselItemGroup>
            <CarouselControl>
              <CarouselPrevTrigger />
              <CarouselIndicators />
              <CarouselNextTrigger />
            </CarouselControl>
          </CarouselRoot>
        }
        code={`<CarouselRoot autoplay={{ delay: 2000 }} slideCount={images.length}>
  <Text className="inline-flex items-center gap-2">
    <LuClock size={16} /> {"autoplay={{ delay: 2000 }}"} or{" "}
    {"autoplay={true}"}
  </Text>
  <CarouselItemGroup>
    {images.map((image, index) => (
      <CarouselItem key={index} index={index}>
        <img
          src={image.src}
          alt={image.alt}
          className="h-full w-full object-cover"
        />
      </CarouselItem>
    ))}
  </CarouselItemGroup>
  <CarouselControl>
    <CarouselPrevTrigger />
    <CarouselIndicators />
    <CarouselNextTrigger />
  </CarouselControl>
</CarouselRoot>`}
      />
    </>
  );
}
