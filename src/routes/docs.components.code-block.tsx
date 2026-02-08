import { CodeBlock } from "hygge-ui/code-block";
import { Heading } from "hygge-ui/heading";
import { Code, Text } from "hygge-ui/text";
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
        verified
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
        Sizes
      </Heading>
      <Text className="mb-2">
        Use the <Code>size</Code> prop to change the size of the code block
        component.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <div className="flex flex-col gap-2">
            <div>
              <Text>size - xs</Text>
              <CodeBlock
                size="xs"
                code={`<div class="container">
  <h1>Hello, world!</h1>
</div>`}
                language="html"
              />
            </div>
            <div>
              <Text>size - sm</Text>
              <CodeBlock
                size="sm"
                code={`<div class="container">
  <h1>Hello, world!</h1>
</div>`}
                language="html"
              />
            </div>
            <div>
              <Text>size - md</Text>
              <CodeBlock
                size="md"
                code={`<div class="container">
  <h1>Hello, world!</h1>
</div>`}
                language="html"
              />
            </div>
            <div>
              <Text>size - lg</Text>
              <CodeBlock
                size="lg"
                code={`<div class="container">
  <h1>Hello, world!</h1>
</div>`}
                language="html"
              />
            </div>
            <div>
              <Text>size - xl</Text>
              <CodeBlock
                size="xl"
                code={`<div class="container">
  <h1>Hello, world!</h1>
</div>`}
                language="html"
              />
            </div>
          </div>
        }
        code={`<div className="flex flex-col gap-2">
  <div>
    <Text>size - xs</Text>
    <CodeBlock
      size="xs"
      code={\`<div class="container">
  <h1>Hello, world!</h1>
</div>\`}
      language="html"
    />
  </div>
  <div>
    <Text>size - sm</Text>
    <CodeBlock
      size="sm"
      code={\`<div class="container">
  <h1>Hello, world!</h1>
</div>\`}
      language="html"
    />
  </div>
  <div>
    <Text>size - md</Text>
    <CodeBlock
      size="md"
      code={\`<div class="container">
  <h1>Hello, world!</h1>
</div>\`}
      language="html"
    />
  </div>
  <div>
    <Text>size - lg</Text>
    <CodeBlock
      size="lg"
      code={\`<div class="container">
  <h1>Hello, world!</h1>
</div>\`}
      language="html"
    />
  </div>
  <div>
    <Text>size - xl</Text>
    <CodeBlock
      size="xl"
      code={\`<div class="container">
  <h1>Hello, world!</h1>
</div>\`}
      language="html"
    />
  </div>
</div>`}
      />
      <Heading level={3} size="lg" className="mt-10 mb-2">
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
