import { Card } from "@/components/card";
import { Checkbox } from "@/components/checkbox";
import { CodeBlock } from "@/components/code-block";
import { PageHeader } from "app/components/page-header";
import { CODE_BLOCKS } from "app/constants";

const CODE_EXAMPLES = [
  {
    code: `import { Checkbox } from "@/components/checkbox";

function Example() {
  return <Checkbox label="Accept terms and conditions" />;
}
`,
  },
];

function CheckboxPage() {
  return (
    <>
      <PageHeader
        className="mb-6"
        title="Checkbox"
        description="Used in forms when a user needs to select multiple values from several options."
        githubLink="https://github.com/malcodeman/hygge-ui/blob/main/src/components/checkbox.tsx"
      />
      <Card className="mb-6">
        <Checkbox label="Accept terms and conditions" />
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

export default CheckboxPage;
