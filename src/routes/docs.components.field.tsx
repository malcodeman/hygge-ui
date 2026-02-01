import { Field } from "hygge-ui/field";
import { Heading } from "hygge-ui/heading";
import { Input } from "hygge-ui/input";
import { Code, Text } from "hygge-ui/text";
import { Textarea } from "hygge-ui/textarea";
import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "app/components/page-header";
import { PagePreviewCodeTabs } from "app/components/page-preview-code-tabs";

export const Route = createFileRoute("/docs/components/field")({
  component: FieldPage,
  head: () => ({
    meta: [
      {
        title: "Field | Hygge UI",
      },
    ],
  }),
});

function FieldPage() {
  return (
    <>
      <PageHeader
        title="Field"
        description="Used to add labels, help text, and error messages to form fields."
        githubLink="https://github.com/malcodeman/hygge-ui/blob/main/src/components/field.tsx"
        className="mb-2"
        verified
      />
      <PagePreviewCodeTabs
        preview={
          <Field label="Email">
            <Input placeholder="me@example.com" />
          </Field>
        }
        code={`<Field label="Email">
  <Input placeholder="me@example.com" />
</Field>`}
      />
      <Heading level={2} className="mt-10 mb-2">
        Examples
      </Heading>
      <Heading level={3} size="lg" className="mb-2">
        Error text
      </Heading>
      <Text className="mb-2">
        Pass the <Code>invalid</Code> and <Code>errorText</Code> prop to Field
        to indicate that the field is invalid.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <Field errorText="This is an error text" label="Email" invalid>
            <Input placeholder="me@example.com" />
          </Field>
        }
        code={`<Field errorText="This is an error text" label="Email" invalid>
  <Input placeholder="me@example.com" />
</Field>`}
      />
      <Heading level={3} size="lg" className="mt-10 mb-2">
        Helper text
      </Heading>
      <Text className="mb-2">
        Pass the <Code>helperText</Code> prop to Field to add helper text to the
        field.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <Field helperText="This is a helper text" label="Email">
            <Input placeholder="me@example.com" />
          </Field>
        }
        code={`<Field helperText="This is a helper text" label="Email">
  <Input placeholder="me@example.com" />
</Field>`}
      />
      <Heading level={3} size="lg" className="mt-10 mb-2">
        Disabled
      </Heading>
      <Text className="mb-2">
        Use the <Code>disabled</Code> prop to disable the field.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <Field label="Email" disabled>
            <Input placeholder="me@example.com" />
          </Field>
        }
        code={`<Field label="Email" disabled>
  <Input placeholder="me@example.com" />
</Field>`}
      />
      <Heading level={3} size="lg" className="mt-10 mb-2">
        Textarea
      </Heading>
      <Text className="mb-2">
        Here's how to use the field component with a textarea.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <Field label="Email">
            <Textarea placeholder="me@example.com" />
          </Field>
        }
        code={`<Field label="Email">
  <Textarea placeholder="me@example.com" />
</Field>`}
      />
    </>
  );
}
