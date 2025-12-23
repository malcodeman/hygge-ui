import { Heading } from "@/components/heading";
import { PinInput } from "@/components/pin-input";
import { Code, Text } from "@/components/text";
import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "app/components/page-header";
import { PagePreviewCodeTabs } from "app/components/page-preview-code-tabs";

export const Route = createFileRoute("/docs/components/pin-input")({
  component: PinInputPage,
});

function PinInputPage() {
  return (
    <>
      <PageHeader
        title="Pin Input"
        description="Used to capture a pin code or otp from the user."
        githubLink="https://github.com/malcodeman/hygge-ui/blob/main/src/components/pin-input.tsx"
        className="mb-2"
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
    </>
  );
}

export default PinInputPage;
