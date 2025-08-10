import { Button } from "@/components/button";
import { Card } from "@/components/card";
import { CodeBlock } from "@/components/code-block";
import { PageHeader } from "app/components/page-header";
import { CODE_BLOCKS } from "app/constants";

const CODE_EXAMPLES = [
  {
    code: `import { Button } from "@/components/button";

function Example() {
  return <Button>Click me</Button>;
}
`,
  },
];

function AlertPage() {
  return (
    <>
      <PageHeader
        className="mb-6"
        title="Button"
        description="Used to trigger an action or event."
        githubLink="https://github.com/malcodeman/hygge-ui/blob/main/src/components/button.tsx"
      />
      <Card className="mb-6">
        <Button>Click me</Button>
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

export default AlertPage;
