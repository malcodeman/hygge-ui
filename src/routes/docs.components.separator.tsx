import { Heading } from "@/components/heading";
import { Separator } from "@/components/separator";
import { Code, Text } from "@/components/text";
import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "app/components/page-header";
import { PagePreviewCodeTabs } from "app/components/page-preview-code-tabs";

export const Route = createFileRoute("/docs/components/separator")({
  component: SeparatorPage,
  head: () => ({
    meta: [
      {
        title: "Separator | Hygge UI",
      },
    ],
  }),
});

function SeparatorPage() {
  return (
    <>
      <PageHeader
        title="Separator"
        description="Used to visually separate content"
        githubLink="https://github.com/malcodeman/hygge-ui/blob/main/src/components/separator.tsx"
        className="mb-2"
        verified
      />
      <PagePreviewCodeTabs
        preview={
          <div>
            <Text>First</Text>
            <Separator />
            <Text>Second</Text>
            <Separator />
            <Text>Third</Text>
          </div>
        }
        code={`<div>
  <Text>First</Text>
  <Separator />
  <Text>Second</Text>
  <Separator />
  <Text>Third</Text>
</div>`}
      />

      <Heading level={2} className="mt-10 mb-2">
        Examples
      </Heading>

      <Heading level={3} size="lg" className="mb-2">
        Variants
      </Heading>
      <Text className="mb-2">
        Use the <Code>variant</Code> prop to change the appearance of the
        separator.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <div className="flex flex-col gap-2">
            <Separator variant="solid" />
            <Separator variant="dashed" />
            <Separator variant="dotted" />
          </div>
        }
        code={`<div className="flex flex-col gap-2">
  <Separator variant="solid" />
  <Separator variant="dashed" />
  <Separator variant="dotted" />
</div>`}
      />

      <Heading level={3} size="lg" className="mt-10 mb-2">
        Sizes
      </Heading>
      <Text className="mb-2">
        Use the <Code>size</Code> prop to change the size of the separator.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <div className="flex flex-col gap-2">
            <Separator size="xs" />
            <Separator size="sm" />
            <Separator size="md" />
            <Separator size="lg" />
          </div>
        }
        code={`<div className="flex flex-col gap-2">
  <Separator size="xs" />
  <Separator size="sm" />
  <Separator size="md" />
  <Separator size="lg" />
</div>`}
      />

      <Heading level={3} size="lg" className="mt-10 mb-2">
        Label
      </Heading>
      <Text className="mb-2">
        Use the <Code>label</Code> prop to add a label to the separator.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <div className="flex flex-col gap-2">
            <Separator label="Label (start)" labelPlacement="start" />
            <Separator label="Label (end)" labelPlacement="end" />
            <Separator label="Label (center)" labelPlacement="center" />
          </div>
        }
        code={`<div className="flex flex-col gap-2">
  <Separator label="Label (start)" labelPlacement="start" />
  <Separator label="Label (end)" labelPlacement="end" />
  <Separator label="Label (center)" labelPlacement="center" />
</div>`}
      />

      <Heading level={3} size="lg" className="mt-10 mb-2">
        Vertical
      </Heading>
      <Text className="mb-2">
        Use the <Code>orientation</Code> prop to change the orientation of the
        separator.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <div className="flex items-center gap-2">
            <Text>First</Text>
            <Separator orientation="vertical" className="h-4" />
            <Text>Second</Text>
          </div>
        }
        code={`<div className="flex items-center gap-2">
  <Text>First</Text>
  <Separator orientation="vertical" className="h-4" />
  <Text>Second</Text>
</div>`}
      />

      <Heading level={3} size="lg" className="mt-10 mb-2">
        Color
      </Heading>
      <Text className="mb-2">
        Use the <Code>colorPalette</Code> prop to change the color of the
        separator.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <div className="grid grid-cols-[8ch_1fr] items-center gap-y-2">
            <Text>gray</Text>
            <Separator colorPalette="gray" size="lg" />
            <Text>orange</Text>
            <Separator colorPalette="orange" size="lg" />
            <Text>teal</Text>
            <Separator colorPalette="teal" size="lg" />
            <Text>green</Text>
            <Separator colorPalette="green" size="lg" />
            <Text>red</Text>
            <Separator colorPalette="red" size="lg" />
          </div>
        }
        code={`<div className="grid grid-cols-[8ch_1fr] items-center gap-y-2">
  <Text>gray</Text>
  <Separator colorPalette="gray" size="lg" />
  <Text>orange</Text>
  <Separator colorPalette="orange" size="lg" />
  <Text>teal</Text>
  <Separator colorPalette="teal" size="lg" />
  <Text>green</Text>
  <Separator colorPalette="green" size="lg" />
  <Text>red</Text>
  <Separator colorPalette="red" size="lg" />
</div>`}
      />
    </>
  );
}
