import { Avatar } from "@/components/avatar";
import { Heading } from "@/components/heading";
import { Rating } from "@/components/rating";
import { Code, Text } from "@/components/text";
import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "app/components/page-header";
import { PagePreviewCodeTabs } from "app/components/page-preview-code-tabs";

export const Route = createFileRoute("/docs/components/rating")({
  component: RatingPage,
});

function RatingPage() {
  return (
    <>
      <PageHeader
        title="Rating"
        description="Used to show reviews and ratings in a visual format."
        githubLink="https://github.com/malcodeman/hygge-ui/blob/main/src/components/rating.tsx"
        className="mb-2"
        verified
      />
      <PagePreviewCodeTabs preview={<Rating />} code={`<Rating />`} />
      <Heading level={2} className="mt-10 mb-2">
        Examples
      </Heading>
      <Heading level={3} size="lg" className="mb-2">
        Basic
      </Heading>
      <PagePreviewCodeTabs
        preview={<Rating count={5} defaultValue={3} />}
        code={`<Rating count={5} defaultValue={3} />`}
      />
      <Heading level={3} size="lg" className="mt-10 mb-2">
        Sizes
      </Heading>
      <Text className="mb-2">
        Use the <Code>size</Code> prop to change the size of the rating
        component.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <div className="flex flex-col gap-2">
            <Rating size="xs" />
            <Rating size="sm" />
            <Rating size="md" />
            <Rating size="lg" />
            <Rating size="xl" />
          </div>
        }
        code={`<div className="flex flex-col gap-2">
  <Rating size="xs" />
  <Rating size="sm" />
  <Rating size="md" />
  <Rating size="lg" />
  <Rating size="xl" />
</div>`}
      />
      <Heading level={3} size="lg" className="mt-10 mb-2">
        ReadOnly
      </Heading>
      <Text className="mb-2">
        Use the <Code>readOnly</Code> prop to make the rating component
        read-only.
      </Text>
      <PagePreviewCodeTabs
        preview={<Rating readOnly count={5} defaultValue={3} />}
        code={`<Rating readOnly count={5} defaultValue={3} />`}
      />
      <Heading level={3} size="lg" className="mt-10 mb-2">
        Label
      </Heading>
      <Text className="mb-2">
        Use the <Code>label</Code> prop to add a label to the rating component.
      </Text>
      <PagePreviewCodeTabs
        preview={<Rating label="Rating" count={5} defaultValue={3} />}
        code={`<Rating label="Rating" count={5} defaultValue={3} />`}
      />
      <Heading level={3} size="lg" className="mt-10 mb-2">
        Label Position
      </Heading>
      <Text className="mb-2">
        Here&apos;s an example of how to change the label position to the right.
      </Text>
      <PagePreviewCodeTabs
        preview={<Rating label="Rating" labelPlacement="end" />}
        code={`<Rating label="Rating" labelPlacement="end" />`}
      />
      <Heading level={3} size="lg" className="mt-10 mb-2">
        Half Start
      </Heading>
      <Text className="mb-2">
        Use the <Code>allowHalf</Code> prop to allow half-star ratings.
      </Text>
      <PagePreviewCodeTabs
        preview={<Rating allowHalf count={5} defaultValue={3.5} />}
        code={`<Rating allowHalf count={5} defaultValue={3.5} />`}
      />
      <Heading level={3} size="lg" className="mt-10 mb-2">
        Color
      </Heading>
      <Text className="mb-2">
        Use the <Code>colorPalette</Code> prop to change the color of the
        rating.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <div className="grid grid-cols-[8ch_1fr] items-center gap-y-2">
            <Text>gray</Text>
            <Rating colorPalette="gray" count={5} defaultValue={3} />
            <Text>orange</Text>
            <Rating colorPalette="orange" count={5} defaultValue={3} />
            <Text>teal</Text>
            <Rating colorPalette="teal" count={5} defaultValue={3} />
            <Text>green</Text>
            <Rating colorPalette="green" count={5} defaultValue={3} />
            <Text>red</Text>
            <Rating colorPalette="red" count={5} defaultValue={3} />
          </div>
        }
        code={`<div className="grid grid-cols-[8ch_1fr] items-center gap-y-2">
  <Text>gray</Text>
  <Rating colorPalette="gray" count={5} defaultValue={3} />
  <Text>orange</Text>
  <Rating colorPalette="orange" count={5} defaultValue={3} />
  <Text>teal</Text>
  <Rating colorPalette="teal" count={5} defaultValue={3} />
  <Text>green</Text>
  <Rating colorPalette="green" count={5} defaultValue={3} />
  <Text>red</Text>
  <Rating colorPalette="red" count={5} defaultValue={3} />
</div>`}
      />
      <Heading level={3} size="lg" className="mt-10 mb-2">
        Testimonial
      </Heading>
      <Text className="mb-2">
        Use the rating component to show testimonials.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <div className="flex max-w-sm flex-col gap-2">
            <Rating count={5} defaultValue={5} readOnly colorPalette="orange" />
            <Text className="text-fg-default">
              Amer is a great software engineer. He is very professional and
              knowledgeable.
            </Text>
            <div className="flex items-center gap-2">
              <Avatar
                src="https://randomuser.me/api/portraits/men/70.jpg"
                size="md"
              />
              <div>
                <Text className="text-fg-default">Matthew Jones</Text>
                <Text>CTO, Company</Text>
              </div>
            </div>
          </div>
        }
        code={`<div className="flex max-w-sm flex-col gap-2">
  <Rating count={5} defaultValue={5} readOnly colorPalette="orange" />
  <Text className="text-fg-default">
    Amer is a great software engineer. He is very professional and knowledgeable.
  </Text>
  <div className="flex items-center gap-2">
    <Avatar
      src="https://randomuser.me/api/portraits/men/70.jpg"
      size="md"
    />
    <div>
      <Text className="text-fg-default">Matthew Jones</Text>
      <Text>CTO, Company</Text>
    </div>
  </div>
</div>`}
      />
    </>
  );
}
