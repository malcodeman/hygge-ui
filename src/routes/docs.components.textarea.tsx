import { Field } from "@/components/field";
import { Heading } from "@/components/heading";
import { Code, Text } from "@/components/text";
import { Textarea } from "@/components/textarea";
import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "app/components/page-header";
import { PagePreviewCodeTabs } from "app/components/page-preview-code-tabs";

export const Route = createFileRoute("/docs/components/textarea")({
  component: TextareaPage,
});

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
      <Heading level={3} size="lg" className="mt-10 mb-2">
        Helper Text
      </Heading>
      <Text className="mb-2">
        Pair the textarea with the <Code>Field</Code> component to add helper
        text.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <div className="flex gap-10">
            <Field required label="Comment" helperText="Max 500 characters.">
              <Textarea placeholder="Start typing..." />
            </Field>
            <Field required label="Comment" helperText="Max 500 characters.">
              <Textarea placeholder="Start typing..." variant="outline" />
            </Field>
          </div>
        }
        code={`<div className="flex gap-10">
  <Field required label="Comment" helperText="Max 500 characters.">
    <Textarea placeholder="Start typing..." />
  </Field>
  <Field required label="Comment" helperText="Max 500 characters.">
    <Textarea placeholder="Start typing..." variant="outline" />
  </Field>
</div>`}
      />
      <Heading level={3} size="lg" className="mt-10 mb-2">
        Error Text
      </Heading>
      <Text className="mb-2">
        Pair the textarea with the <Code>Field</Code> component to add error
        text.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <div className="flex gap-10">
            <Field invalid label="Comment" helperText="Field is required.">
              <Textarea placeholder="Start typing..." />
            </Field>
            <Field invalid label="Comment" helperText="Field is required.">
              <Textarea placeholder="Start typing..." variant="outline" />
            </Field>
          </div>
        }
        code={`<div className="flex gap-10">
  <Field invalid label="Comment" helperText="Field is required.">
    <Textarea placeholder="Start typing..." />
  </Field>
  <Field invalid label="Comment" helperText="Field is required.">
    <Textarea placeholder="Start typing..." variant="outline" />
  </Field>
</div>`}
      />
      <Heading level={3} size="lg" className="mt-10 mb-2">
        Field
      </Heading>
      <Text className="mb-2">
        Compose the textarea with the <Code>Field</Code> component to add a
        label, helper text, and error text.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <div className="flex gap-10">
            <Field required label="Email">
              <Textarea placeholder="me@example.com" />
            </Field>
            <Field required label="Email">
              <Textarea placeholder="me@example.com" variant="outline" />
            </Field>
          </div>
        }
        code={`<div className="flex gap-10">
  <Field required label="Email">
    <Input placeholder="me@example.com" />
  </Field>
  <Field required label="Email">
    <Input placeholder="me@example.com" variant="outline" />
  </Field>
</div>`}
      />
      <Heading level={3} size="lg" className="mt-10 mb-2">
        Disabled
      </Heading>
      <Text className="mb-2">
        Use the <Code>disabled</Code> prop to disable the textarea.
      </Text>
      <PagePreviewCodeTabs
        preview={<Textarea disabled placeholder="disabled" />}
        code={`<Textarea disabled placeholder="disabled" />`}
      />
    </>
  );
}

export default TextareaPage;
