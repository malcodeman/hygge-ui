import { Card } from "@/components/card";
import { CheckboxCard } from "@/components/checkbox-card";
import { CodeBlock } from "@/components/code-block";
import { PageHeader } from "app/components/page-header";
import { CODE_BLOCKS } from "app/constants";

const CODE_EXAMPLES = [
  {
    code: `import { CheckboxCard } from "@/components/checkbox-card";

function Example() {
  return <CheckboxCard label="Next.js" />;
}
`,
  },
];

function CheckboxCardPage() {
  return (
    <>
      <PageHeader
        className="mb-6"
        title="Checkbox Card"
        description="Used to select or deselect options displayed within cards."
        githubLink="https://github.com/malcodeman/hygge-ui/blob/main/src/components/checkbox-card.tsx"
      />
      <Card className="mb-6">
        <CheckboxCard label="Next.js" />
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

export default CheckboxCardPage;
