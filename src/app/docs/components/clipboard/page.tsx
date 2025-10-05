import { Card } from "@/components/card";
import { Clipboard } from "@/components/clipboard";
import { CodeBlock } from "@/components/code-block";
import { PageHeader } from "app/components/page-header";
import { CODE_BLOCKS } from "app/constants";

const CODE_EXAMPLES = [
  {
    code: `import { Clipboard } from "@/components/clipboard";

function Example() {
  return <Clipboard value="Copy" />;
}
`,
  },
];

function ClipboardPage() {
  return (
    <>
      <PageHeader
        className="mb-6"
        title="Clipboard"
        description="Used to copy text to the clipboard."
        githubLink="https://github.com/malcodeman/hygge-ui/blob/main/src/components/clipboard.tsx"
      />
      <Card className="mb-6">
        <Clipboard value="Copy" />
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

export default ClipboardPage;
