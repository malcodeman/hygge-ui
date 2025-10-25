import { Card } from "@/components/card";
import { CodeBlock } from "@/components/code-block";
import { Input } from "@/components/input";
import { PageHeader } from "app/components/page-header";
import { CODE_BLOCKS } from "app/constants";

const CODE_EXAMPLES = [
  {
    code: `import { Input } from "@/components/input";

function Example() {
  return (
      <Input placeholder="Enter your email" />
  );
}
`,
  },
];

function InputPage() {
  return (
    <>
      <PageHeader
        className="mb-6"
        title="Input"
        description="Used to get user input in a text field."
        githubLink="https://github.com/malcodeman/hygge-ui/blob/main/src/components/input.tsx"
      />
      <Card className="mb-6">
        <Input placeholder="Enter your email" />
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

export default InputPage;
