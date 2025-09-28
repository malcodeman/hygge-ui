import { Card } from "@/components/card";
import { CodeBlock } from "@/components/code-block";
import { PageHeader } from "app/components/page-header";
import { CODE_BLOCKS } from "app/constants";

const CODE_EXAMPLES = [
  {
    code: `import { Card } from "@/components/card";

function Example() {
  return <Card>Card content</Card>;
}
`,
  },
];

function CardPage() {
  return (
    <>
      <PageHeader
        className="mb-6"
        title="Card"
        description="Used to display content related to a single subject."
        githubLink="https://github.com/malcodeman/hygge-ui/blob/main/src/components/card.tsx"
      />
      <Card className="mb-6">
        <Card>Card content</Card>
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

export default CardPage;
