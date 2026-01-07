import { Field } from "@/components/field";
import { Heading } from "@/components/heading";
import { PinInput } from "@/components/pin-input";
import { Code, Text } from "@/components/text";
import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "app/components/page-header";
import { PagePreviewCodeTabs } from "app/components/page-preview-code-tabs";

export const Route = createFileRoute("/docs/components/pin-input")({
  component: PinInputPage,
  head: () => ({
    meta: [
      {
        title: "Pin Input | Hygge UI",
      },
    ],
  }),
});

function PinInputPage() {
  return (
    <>
      <PageHeader
        title="Pin Input"
        description="Used to capture a pin code or otp from the user."
        githubLink="https://github.com/malcodeman/hygge-ui/blob/main/src/components/pin-input.tsx"
        className="mb-2"
        verified
      />
      <PagePreviewCodeTabs preview={<PinInput />} code={`<PinInput />`} />
      <Heading level={2} className="mt-10 mb-2">
        Examples
      </Heading>
      <Heading level={3} size="lg" className="mb-2">
        Sizes
      </Heading>
      <Text className="mb-2">
        Use the <Code>size</Code> prop to change the size of the pin input.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <div className="flex flex-col gap-2">
            <PinInput size="xs" />
            <PinInput size="sm" />
            <PinInput size="md" />
            <PinInput size="lg" />
            <PinInput size="xl" />
          </div>
        }
        code={`<div className="flex flex-col gap-2">
  <PinInput size="xs" />
  <PinInput size="sm" />
  <PinInput size="md" />
  <PinInput size="lg" />
  <PinInput size="xl" />
</div>`}
      />
      <Text>
        The pin input sizes are mapped to the <Code>Input</Code> component
        sizes.
      </Text>
      <Heading level={3} size="lg" className="mt-10 mb-2">
        One time code
      </Heading>
      <Text className="mb-2">
        Pass the <Code>otp</Code> prop to the <Code>PinInput</Code> component to
        make the pin input component behave like a one-time code input. This
        helps improve the user experience when entering OTP codes.
      </Text>
      <PagePreviewCodeTabs
        preview={<PinInput otp />}
        code={`<PinInput otp />`}
      />
      <Heading level={3} size="lg" className="mt-10 mb-2">
        Mask
      </Heading>
      <Text className="mb-2">
        Pass the <Code>mask</Code> prop to the <Code>PinInput</Code> component
        to obscure the entered pin code.
      </Text>
      <PagePreviewCodeTabs
        preview={<PinInput mask />}
        code={`<PinInput mask />`}
      />
      <Heading level={3} size="lg" className="mt-10 mb-2">
        Placeholder
      </Heading>
      <Text className="mb-2">
        Pass the <Code>placeholder</Code> prop to the <Code>PinInput</Code>{" "}
        component to add a placeholder to the pin input.
      </Text>
      <PagePreviewCodeTabs
        preview={<PinInput placeholder="🥳" />}
        code={`<PinInput placeholder="🥳" />`}
      />
      <Heading level={3} size="lg" className="mt-10 mb-2">
        Field
      </Heading>
      <Text className="mb-2">
        Here's an example of how to compose the <Code>Field</Code> and the{" "}
        <Code>PinInput</Code> components.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <Field label="Enter otp">
            <PinInput />
          </Field>
        }
        code={`<Field label="Enter otp">
  <PinInput />
</Field>`}
      />
      <Heading level={3} size="lg" className="mt-10 mb-2">
        Alphanumeric
      </Heading>
      <Text className="mb-2">
        Pass the <Code>type</Code> prop to the <Code>PinInput</Code> component
        to allow the user to enter alphanumeric characters. Values can be either{" "}
        <Code>alphanumeric</Code>, <Code>numeric</Code>, or{" "}
        <Code>alphabetic</Code>.
      </Text>
      <PagePreviewCodeTabs
        preview={<PinInput type="alphanumeric" />}
        code={`<PinInput type="alphanumeric" />`}
      />
    </>
  );
}
