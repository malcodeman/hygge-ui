import { Heading } from "@/components/heading";
import { Progress } from "@/components/progress";
import { Code, Text } from "@/components/text";
import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "app/components/page-header";
import { PagePreviewCodeTabs } from "app/components/page-preview-code-tabs";

export const Route = createFileRoute("/docs/components/progress")({
  component: ProgressPage,
  head: () => ({
    meta: [
      {
        title: "Progress | Hygge UI",
      },
    ],
  }),
});

function ProgressPage() {
  return (
    <>
      <PageHeader
        title="Progress"
        description="Used to display the progress status for a task."
        githubLink="https://github.com/malcodeman/hygge-ui/blob/main/src/components/progress.tsx"
        className="mb-2"
        verified
      />
      <PagePreviewCodeTabs
        preview={<Progress value={50} className="max-w-xs" />}
        code={`<Progress value={50} className="max-w-xs" />`}
      />
      <Heading level={2} className="mt-10 mb-2">
        Examples
      </Heading>
      <Heading level={3} size="lg" className="mb-2">
        Sizes
      </Heading>
      <Text className="mb-2">
        Use the <Code>size</Code> prop to change the size of the progress bar.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <div className="flex max-w-xs flex-col gap-2">
            <Progress size="xs" value={50} />
            <Progress size="sm" value={50} />
            <Progress size="md" value={50} />
            <Progress size="lg" value={50} />
            <Progress size="xl" value={50} />
          </div>
        }
        code={`<div className="flex max-w-xs flex-col gap-2">
  <Progress size="xs" value={50} />
  <Progress size="sm" value={50} />
  <Progress size="md" value={50} />
  <Progress size="lg" value={50} />
  <Progress size="xl" value={50} />
</div>`}
      />
      <Heading level={3} size="lg" className="mt-10 mb-2">
        Color
      </Heading>
      <Text className="mb-2">
        Use the <Code>colorPalette</Code> prop to change the color of the
        progress bar.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <div className="grid grid-cols-[8ch_1fr] items-center gap-y-2">
            <Text>gray</Text>
            <Progress colorPalette="gray" value={50} className="w-32" />
            <Text>orange</Text>
            <Progress colorPalette="orange" value={50} className="w-32" />
            <Text>teal</Text>
            <Progress colorPalette="teal" value={50} className="w-32" />
            <Text>green</Text>
            <Progress colorPalette="green" value={50} className="w-32" />
            <Text>red</Text>
            <Progress colorPalette="red" value={50} className="w-32" />
          </div>
        }
        code={`<div className="grid grid-cols-[8ch_1fr] items-center gap-y-2">
  <Text>gray</Text>
  <Progress colorPalette="gray" value={50} className="w-32" />
  <Text>orange</Text>
  <Progress colorPalette="orange" value={50} className="w-32" />
  <Text>teal</Text>
  <Progress colorPalette="teal" value={50} className="w-32" />
  <Text>green</Text>
  <Progress colorPalette="green" value={50} className="w-32" />
  <Text>red</Text>
  <Progress colorPalette="red" value={50} className="w-32" />
</div>`}
      />
      <Heading level={3} size="lg" className="mt-10 mb-2">
        Label
      </Heading>
      <Text className="mb-2">
        Use the <Code>label</Code> prop to add a label to the progress bar.
      </Text>
      <PagePreviewCodeTabs
        preview={<Progress label="Usage" value={40} className="max-w-xs" />}
        code={`<Progress label="Usage" value={40} className="max-w-xs" />`}
      />
      <Heading level={3} size="lg" className="mt-10 mb-2">
        Value Text
      </Heading>
      <Text className="mb-2">
        Use the <Code>showValueText</Code> prop to add a value text to the
        progress bar.
      </Text>
      <PagePreviewCodeTabs
        preview={<Progress showValueText value={40} className="max-w-xs" />}
        code={`<Progress showValueText value={40} className="max-w-xs" />`}
      />
      <Heading level={3} size="lg" className="mt-10 mb-2">
        Indeterminate
      </Heading>
      <Text className="mb-2">
        Set the value to <Code>null</Code> to show an indeterminate progress
        bar.
      </Text>
      <PagePreviewCodeTabs
        preview={<Progress value={null} className="max-w-xs" />}
        code={`<Progress value={null} className="max-w-xs" />`}
      />
    </>
  );
}
