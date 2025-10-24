import { Card } from "@/components/card";
import { CodeBlock } from "@/components/code-block";
import { Highlight } from "@/components/highlight";
import { PageHeader } from "app/components/page-header";
import { CODE_BLOCKS } from "app/constants";

const CODE_EXAMPLES = [
  {
    code: `import { Highlight } from "@/components/highlight";

function Example() {
  return (
     <Highlight
        query="spotlight"
        text="With the Highlight component, you can spotlight words."
    />
  );
}
`,
  },
];

function HighlightPage() {
  return (
    <>
      <PageHeader
        className="mb-6"
        title="Highlight"
        description="Used to highlight substrings of a text."
        githubLink="https://github.com/malcodeman/hygge-ui/blob/main/src/components/highlight.tsx"
      />
      <Card className="mb-6">
        <Highlight
          query="spotlight"
          text="With the Highlight component, you can spotlight words."
        />
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

export default HighlightPage;
