import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "app/components/page-header";
import { PagePreviewCodeTabs } from "app/components/page-preview-code-tabs";
import {
  CarouselControl,
  CarouselIndicator,
  CarouselIndicatorGroup,
  CarouselItem,
  CarouselItemGroup,
  CarouselNextTrigger,
  CarouselPrevTrigger,
  CarouselRoot,
} from "hygge-ui/carousel";

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
      />
      <PagePreviewCodeTabs
        preview={
          <CarouselRoot slideCount={images.length}>
            <CarouselControl>
              <CarouselPrevTrigger />
              <CarouselItemGroup>
                {images.map((image, index) => (
                  <CarouselItem key={index} index={index}>
                    <img src={image.src} alt={image.alt} />
                  </CarouselItem>
                ))}
              </CarouselItemGroup>
              <CarouselNextTrigger />
            </CarouselControl>
            <CarouselIndicatorGroup>
              {images.map((_, index) => (
                <CarouselIndicator key={index} index={index} />
              ))}
            </CarouselIndicatorGroup>
          </CarouselRoot>
        }
        code={`<CarouselRoot slideCount={images.length}>
  <CarouselControl>
    <CarouselPrevTrigger />
    <CarouselItemGroup>
      {images.map((image, index) => (
        <CarouselItem key={index} index={index}>
          <img src={image.src} alt={image.alt} />
        </CarouselItem>
      ))}
    </CarouselItemGroup>
    <CarouselNextTrigger />
  </CarouselControl>
  <CarouselIndicatorGroup>
    {images.map((_, index) => (
      <CarouselIndicator key={index} index={index} />
    ))}
  </CarouselIndicatorGroup>
</CarouselRoot>`}
      />
    </>
  );
}
