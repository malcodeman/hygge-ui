import { CodeBlock } from "@/components/code-block";
import { Heading } from "@/components/heading";
import { Code, Text } from "@/components/text";
import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "app/components/page-header";
import { PagePreviewCodeTabs } from "app/components/page-preview-code-tabs";

export const Route = createFileRoute("/docs/components/code-block")({
  component: CodeBlockPage,
  head: () => ({
    meta: [
      {
        title: "Code Block | Hygge UI",
      },
    ],
  }),
});

function CodeBlockPage() {
  return (
    <>
      <PageHeader
        title="Code Block"
        description="Used to display and highlight dynamic code blocks."
        githubLink="https://github.com/malcodeman/hygge-ui/blob/main/src/components/code-block.tsx"
        className="mb-2"
      />
      <PagePreviewCodeTabs
        preview={
          <CodeBlock
            code={`<div class="container">
  <h1>Hello, world!</h1>
</div>`}
            language="html"
          />
        }
        code={`<CodeBlock
  code={\`<div class="container">
  <h1>Hello, world!</h1>
</div>\`}
  language="html"
/>`}
      />
      <Heading level={2} className="mt-10 mb-2">
        Examples
      </Heading>
      <Heading level={3} size="lg" className="mb-2">
        Copy Button
      </Heading>
      <Text className="mb-2">
        Use the <Code>copyButton</Code> prop to add a copy button to the code
        block component.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <CodeBlock
            code={`<div class="container">
  <h1>Hello, world!</h1>
</div>`}
            language="html"
            copyButton
          />
        }
        code={`<CodeBlock
  code={\`<div class="container">
  <h1>Hello, world!</h1>
</div>\`}
  language="html"
  copyButton
/>`}
      />
    </>
  );
}
