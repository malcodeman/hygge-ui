import { Heading } from "hygge-ui/heading";
import { ProgressCircle } from "hygge-ui/progress-circle";
import { Code, Text } from "hygge-ui/text";
import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "app/components/page-header";
import { PagePreviewCodeTabs } from "app/components/page-preview-code-tabs";

export const Route = createFileRoute("/docs/components/progress-circle")({
  component: ProgressCirclePage,
  head: () => ({
    meta: [
      {
        title: "Progress Circle | Hygge UI",
      },
    ],
  }),
});

function ProgressCirclePage() {
  return (
    <>
      <PageHeader
        title="Progress Circle"
        description="Used to display a task's progress in a circular form."
        githubLink="https://github.com/malcodeman/hygge-ui/blob/main/src/components/progress-circle.tsx"
        className="mb-2"
        verified
      />
      <PagePreviewCodeTabs
        preview={<ProgressCircle value={75} />}
        code={`<ProgressCircle value={75} />`}
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
          <div className="flex items-center gap-10">
            <ProgressCircle size="xs" value={30} />
            <ProgressCircle size="sm" value={30} />
            <ProgressCircle size="md" value={30} />
            <ProgressCircle size="lg" value={30} />
            <ProgressCircle size="xl" value={30} />
          </div>
        }
        code={`<div className="flex items-center gap-10">
  <ProgressCircle size="xs" value={30} />
  <ProgressCircle size="sm" value={30} />
  <ProgressCircle size="md" value={30} />
  <ProgressCircle size="lg" value={30} />
  <ProgressCircle size="xl" value={30} />
</div>`}
      />
      <Heading level={3} size="lg" className="mt-10 mb-2">
        Color
      </Heading>
      <Text className="mb-2">
        Use the <Code>colorPalette</Code> prop to change the color of the
        progress circle.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <div className="grid grid-cols-[8ch_1fr] items-center gap-y-2">
            <Text>gray</Text>
            <ProgressCircle colorPalette="gray" value={30} />
            <Text>orange</Text>
            <ProgressCircle colorPalette="orange" value={30} />
            <Text>teal</Text>
            <ProgressCircle colorPalette="teal" value={30} />
            <Text>green</Text>
            <ProgressCircle colorPalette="green" value={30} />
            <Text>red</Text>
            <ProgressCircle colorPalette="red" value={30} />
          </div>
        }
        code={`<div className="grid grid-cols-[8ch_1fr] items-center gap-y-2">
  <Text>gray</Text>
  <ProgressCircle colorPalette="gray" value={30} />
  <Text>orange</Text>
  <ProgressCircle colorPalette="orange" value={30} />
  <Text>teal</Text>
  <ProgressCircle colorPalette="teal" value={30} />
  <Text>green</Text>
  <ProgressCircle colorPalette="green" value={30} />
  <Text>red</Text>
  <ProgressCircle colorPalette="red" value={30} />
</div>`}
      />
      <Heading level={3} size="lg" className="mt-10 mb-2">
        Value Text
      </Heading>
      <Text className="mb-2">
        Use the <Code>showValueText</Code> prop to add a value text to the
        progress bar.
      </Text>
      <PagePreviewCodeTabs
        preview={<ProgressCircle showValueText value={5} />}
        code={`<ProgressCircle showValueText value={5} />`}
      />
      <Heading level={3} size="lg" className="mt-10 mb-2">
        Indeterminate
      </Heading>
      <Text className="mb-2">
        Set the value to <Code>null</Code> to show an indeterminate progress
        bar.
      </Text>
      <PagePreviewCodeTabs
        preview={<ProgressCircle value={null} />}
        code={`<ProgressCircle value={null} />`}
      />
    </>
  );
}
