import { Card } from "@/components/card";
import { CodeBlock } from "@/components/code-block";
import { PageHeader } from "app/components/page-header";
import { CODE_BLOCKS } from "app/constants";

const CODE_EXAMPLES = [
  {
    code: `import { CodeBlock } from "@/components/code-block";

function Example() {
  return (
    <CodeBlock code="<h1>Hello, world!</h1>" language="html" />
  );
}
`,
  },
];

function CodeBlockPage() {
  return (
    <>
      <PageHeader
        className="mb-6"
        title="Code Block"
        description="Used to display and highlight dynamic code blocks."
        githubLink="https://github.com/malcodeman/hygge-ui/blob/main/src/components/code-block.tsx"
      />
      <Card className="mb-6">
        <CodeBlock code="<h1>Hello, world!</h1>" language="html" />
      </Card>
      <CodeBlock
        theme={CODE_BLOCKS.THEME}
        language={CODE_BLOCKS.LANGUAGE}
        code={CODE_EXAMPLES[0].code}
        copyButton={CODE_BLOCKS.COPY_BUTTON}
      />
    </>
  );
}

export default CodeBlockPage;
