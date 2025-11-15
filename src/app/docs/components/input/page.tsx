import { Field } from "@/components/field";
import { Heading } from "@/components/heading";
import { Input } from "@/components/input";
import { Code, Text } from "@/components/text";
import { PageHeader } from "app/components/page-header";
import { PagePreviewCodeTabs } from "app/components/page-preview-code-tabs";

function InputPage() {
  return (
    <>
      <PageHeader
        title="Input"
        description="Used to get user input in a text field."
        githubLink="https://github.com/malcodeman/hygge-ui/blob/main/src/components/input.tsx"
        className="mb-2"
        verified
      />
      <PagePreviewCodeTabs
        preview={<Input placeholder="Enter your email" />}
        code={`<Input placeholder="Enter your email" />`}
      />
      <Heading level={2} className="mt-10 mb-2">
        Examples
      </Heading>
      <Heading level={3} size="lg" className="mb-2">
        Variants
      </Heading>
      <Text className="mb-2">
        Use the <Code>variant</Code> prop to change the visual style of the
        input.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <div className="flex flex-col gap-2">
            <Input variant="subtle" placeholder="Subtle" />
            <Input variant="outline" placeholder="Outline" />
          </div>
        }
        code={`<div className="flex flex-col gap-2">
  <Input variant="subtle" placeholder="Subtle" />
  <Input variant="outline" placeholder="Outline" />
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
            <Input placeholder="size (xs)" size="xs" />
            <Input placeholder="size (sm)" size="sm" />
            <Input placeholder="size (md)" size="md" />
            <Input placeholder="size (lg)" size="lg" />
            <Input placeholder="size (xl)" size="xl" />
          </div>
        }
        code={`<div className="flex flex-col gap-2">
  <Input placeholder="size (xs)" size="xs" />
  <Input placeholder="size (sm)" size="sm" />
  <Input placeholder="size (md)" size="md" />
  <Input placeholder="size (lg)" size="lg" />
  <Input placeholder="size (xl)" size="xl" />
</div>`}
      />
      <Heading level={3} size="lg" className="mt-10 mb-2">
        Helper Text
      </Heading>
      <Text className="mb-2">
        Pair the input with the <Code>Field</Code> component to add helper text.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <div className="flex gap-10">
            <Field
              required
              label="Email"
              helperText="We'll never share your email."
            >
              <Input placeholder="Enter your email" />
            </Field>
            <Field
              required
              label="Email"
              helperText="We'll never share your email."
            >
              <Input placeholder="Enter your email" variant="outline" />
            </Field>
          </div>
        }
        code={`<div className="flex gap-10">
  <Field required label="Email" helperText="We'll never share your email.">
    <Input placeholder="Enter your email" />
  </Field>
  <Field required label="Email" helperText="We'll never share your email.">
    <Input placeholder="Enter your email" variant="outline" />
  </Field>
</div>`}
      />
      <Heading level={3} size="lg" className="mt-10 mb-2">
        Error Text
      </Heading>
      <Text className="mb-2">
        Pair the input with the <Code>Field</Code> component to add error text.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <div className="flex gap-10">
            <Field invalid label="Email" helperText="This field is required.">
              <Input placeholder="Enter your email" />
            </Field>
            <Field invalid label="Email" helperText="This field is required.">
              <Input placeholder="Enter your email" variant="outline" />
            </Field>
          </div>
        }
        code={`<div className="flex gap-10">
  <Field invalid label="Email" helperText="This field is required.">
    <Input placeholder="Enter your email" />
  </Field>
  <Field invalid label="Email" helperText="This field is required.">
    <Input placeholder="Enter your email" variant="outline" />
  </Field>
</div>`}
      />
      <Heading level={3} size="lg" className="mt-10 mb-2">
        Field
      </Heading>
      <Text className="mb-2">
        Compose the input with the <Code>Field</Code> component to add a label,
        helper text, and error text.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <div className="flex gap-10">
            <Field required label="Email">
              <Input placeholder="me@example.com" />
            </Field>
            <Field required label="Email">
              <Input placeholder="me@example.com" variant="outline" />
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
        Use the <Code>disabled</Code> prop to disable the input.
      </Text>
      <PagePreviewCodeTabs
        preview={<Input disabled placeholder="disabled" />}
        code={`<Input disabled placeholder="disabled" />`}
      />
    </>
  );
}

export default InputPage;
