import { Heading } from "@/components/heading";
import { Tag } from "@/components/tag";
import { Code, Text } from "@/components/text";
import { PageHeader } from "app/components/page-header";
import { PagePreviewCodeTabs } from "app/components/page-preview-code-tabs";

function TagPage() {
  return (
    <>
      <PageHeader
        title="Tag"
        description="Used for categorizing or labeling content."
        githubLink="https://github.com/malcodeman/hygge-ui/blob/main/src/components/tag.tsx"
        className="mb-2"
      />
      <PagePreviewCodeTabs
        preview={
          <div className="flex gap-2">
            <Tag>Plain Tag</Tag>
            <Tag>Closable Tag</Tag>
          </div>
        }
        code={`<div className="flex gap-2">
  <Tag>Plain Tag</Tag>
  <Tag>Closable Tag</Tag>
</div>`}
      />
      <Heading level={2} className="mt-10 mb-2">
        Examples
      </Heading>
      <Heading level={3} size="lg" className="mb-2">
        Sizes
      </Heading>
      <Text className="mb-2">
        Use the <Code>size</Code> prop to change the size of the tag.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <div className="flex flex-col gap-2">
            <Tag size="xs">Extra Small</Tag>
            <Tag size="sm">Small</Tag>
            <Tag size="md">Medium</Tag>
            <Tag size="lg">Large</Tag>
            <Tag size="xl">Extra Large</Tag>
          </div>
        }
        code={`<div className="flex flex-col gap-2">
  <Tag size="xs">Extra Small</Tag>
  <Tag size="sm">Small</Tag>
  <Tag size="md">Medium</Tag>
  <Tag size="lg">Large</Tag>
  <Tag size="xl">Extra Large</Tag>
</div>`}
      />
    </>
  );
}

export default TagPage;
