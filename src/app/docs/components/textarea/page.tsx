import { Heading } from "@/components/heading";
import { Code, Text } from "@/components/text";
import { Textarea } from "@/components/textarea";
import { PageHeader } from "app/components/page-header";
import { PagePreviewCodeTabs } from "app/components/page-preview-code-tabs";

function TextareaPage() {
  return (
    <>
      <PageHeader
        title="Textarea"
        description="Used to enter multiple lines of text."
        githubLink="https://github.com/malcodeman/hygge-ui/blob/main/src/components/textarea.tsx"
        className="mb-2"
        verified
      />
      <PagePreviewCodeTabs
        preview={<Textarea placeholder="Comment..." />}
        code={`<Textarea placeholder="Comment..." />`}
      />
      <Heading level={2} className="mt-10 mb-2">
        Examples
      </Heading>
      <Heading level={3} size="lg" className="mb-2">
        Variants
      </Heading>
      <Text className="mb-2">
        Use the <Code>variant</Code> prop to change the appearance of the
        textarea.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <div className="flex flex-col gap-2">
            <Textarea variant="subtle" placeholder="Subtle" />
            <Textarea variant="outline" placeholder="Outline" />
          </div>
        }
        code={`<div className="flex flex-col gap-2">
  <Textarea variant="subtle" placeholder="Subtle" />
  <Textarea variant="outline" placeholder="Outline" />
</div>`}
      />
      <Heading level={3} size="lg" className="mt-10 mb-2">
        Sizes
      </Heading>
      <Text className="mb-2">
        Use the <Code>size</Code> prop to change the size of the input.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <div className="flex flex-col gap-2">
            <Textarea placeholder="size (xs)" size="xs" />
            <Textarea placeholder="size (sm)" size="sm" />
            <Textarea placeholder="size (md)" size="md" />
            <Textarea placeholder="size (lg)" size="lg" />
            <Textarea placeholder="size (xl)" size="xl" />
          </div>
        }
        code={`<div className="flex flex-col gap-2">
  <Textarea placeholder="size (xs)" size="xs" />
  <Textarea placeholder="size (sm)" size="sm" />
  <Textarea placeholder="size (md)" size="md" />
  <Textarea placeholder="size (lg)" size="lg" />
  <Textarea placeholder="size (xl)" size="xl" />
</div>`}
      />
    </>
  );
}

export default TextareaPage;
