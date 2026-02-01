import { Heading } from "hygge-ui/heading";
import { PasswordInput } from "hygge-ui/password-input";
import { Code, Text } from "hygge-ui/text";
import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "app/components/page-header";
import { PagePreviewCodeTabs } from "app/components/page-preview-code-tabs";

export const Route = createFileRoute("/docs/components/password-input")({
  component: PasswordInputPage,
  head: () => ({
    meta: [
      {
        title: "Password Input | Hygge UI",
      },
    ],
  }),
});

function PasswordInputPage() {
  return (
    <>
      <PageHeader
        title="Password Input"
        description="Used to collect passwords."
        githubLink="https://github.com/malcodeman/hygge-ui/blob/main/src/components/password-input.tsx"
        className="mb-2"
        verified
      />
      <PagePreviewCodeTabs
        preview={<PasswordInput />}
        code={`<PasswordInput />`}
      />
      <Heading level={2} className="mt-10 mb-2">
        Examples
      </Heading>
      <Heading level={3} size="lg" className="mb-2">
        Sizes
      </Heading>
      <Text className="mb-2">
        Use the <Code>size</Code> prop to change the size of the input.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <div className="flex flex-col gap-2">
            <PasswordInput size="xs" />
            <PasswordInput size="sm" />
            <PasswordInput size="md" />
            <PasswordInput size="lg" />
            <PasswordInput size="xl" />
          </div>
        }
        code={`<div className="flex flex-col gap-2">
  <PasswordInput size="xs" />
  <PasswordInput size="sm" />
  <PasswordInput size="md" />
  <PasswordInput size="lg" />
  <PasswordInput size="xl" />
</div>`}
      />
      <Text>
        The password input sizes are mapped to the <Code>Input</Code> component
        sizes.
      </Text>
    </>
  );
}
