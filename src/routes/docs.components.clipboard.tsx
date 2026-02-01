import { Clipboard } from "hygge-ui/clipboard";
import { Heading } from "hygge-ui/heading";
import { Code, Text } from "hygge-ui/text";
import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "app/components/page-header";
import { PagePreviewCodeTabs } from "app/components/page-preview-code-tabs";

export const Route = createFileRoute("/docs/components/clipboard")({
  component: ClipboardPage,
  head: () => ({
    meta: [
      {
        title: "Clipboard | Hygge UI",
      },
    ],
  }),
});

function ClipboardPage() {
  return (
    <>
      <PageHeader
        title="Clipboard"
        description="Used to copy text to the clipboard."
        githubLink="https://github.com/malcodeman/hygge-ui/blob/main/src/components/clipboard.tsx"
        className="mb-2"
        verified
      />
      <PagePreviewCodeTabs
        preview={
          <Clipboard label="Copy this link" value="https://www.hygge-ui.com" />
        }
        code={`<Clipboard value="https://www.hygge-ui.com" />`}
      />
      <Heading level={2} className="mt-10 mb-2">
        Examples
      </Heading>
      <Heading level={3} size="lg" className="mb-2">
        Timeout
      </Heading>
      <Text className="mb-2">
        Use the <Code>timeout</Code> prop to change the duration of the copy
        message.
      </Text>
      <PagePreviewCodeTabs
        preview={<Clipboard value="https://www.hygge-ui.com" timeout={1000} />}
        code={`<Clipboard value="https://www.hygge-ui.com" timeout={1000} />`}
      />
    </>
  );
}
