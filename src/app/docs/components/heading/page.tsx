import { Card } from "@/components/card";
import { CodeBlock } from "@/components/code-block";
import { Heading } from "@/components/heading";
import { PageHeader } from "app/components/page-header";
import { CODE_BLOCKS } from "app/constants";

const CODE_EXAMPLES = [
  {
    code: `import { Heading } from "@/components/heading";

function Example() {
  return (
    <Heading>The quick brown fox jumps over the lazy dog</Heading>
  );
}
`,
  },
];

function HeadingPage() {
  return (
    <>
      <PageHeader
        className="mb-6"
        title="Heading"
        description="Used to render semantic HTML heading elements."
        githubLink="https://github.com/malcodeman/hygge-ui/blob/main/src/components/heading.tsx"
      />
      <Card className="mb-6">
        <Heading>The quick brown fox jumps over the lazy dog</Heading>
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

export default HeadingPage;
