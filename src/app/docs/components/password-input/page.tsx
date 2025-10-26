import { Card } from "@/components/card";
import { CodeBlock } from "@/components/code-block";
import { PasswordInput } from "@/components/password-input";
import { PageHeader } from "app/components/page-header";
import { CODE_BLOCKS } from "app/constants";

const CODE_EXAMPLES = [
  {
    code: `import { PasswordInput } from "@/components/password-input";

function Example() {
  return (
      <PasswordInput />
  );
}
`,
  },
];

function PasswordInputPage() {
  return (
    <>
      <PageHeader
        className="mb-6"
        title="Password Input"
        description="Used to collect passwords."
        githubLink="https://github.com/malcodeman/hygge-ui/blob/main/src/components/password-input.tsx"
      />
      <Card className="mb-6">
        <PasswordInput />
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

export default PasswordInputPage;
