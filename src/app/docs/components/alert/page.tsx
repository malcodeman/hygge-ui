import { Alert } from "@/components/alert";
import { Card } from "@/components/card";
import { CodeBlock } from "@/components/code-block";
import { Heading } from "@/components/heading";
import { Text } from "@/components/text";
import { PageHeader } from "app/components/page-header";
import { CODE_BLOCKS } from "app/constants";

const CODE_EXAMPLES = [
  {
    code: `import { Alert } from "@/components/alert";

function Example() {
  return <Alert title="This is the alert title" />;
}
`,
  },
  {
    code: `import { Alert } from "@/components/alert";

function Example() {
  return (
    <Alert
      status="error"
      showIndicator
      title="Invalid Fields"
      description="Your form has some errors. Please fix them and try again."
    />
  );
}
`,
  },
  {
    code: `import { Alert } from "@/components/alert";

function Example() {
  return (
    <div className="flex flex-col gap-2">
      <Alert
        status="info"
        showIndicator
        title="Information"
        description="This is an informational alert."
      />
      <Alert
        status="warning"
        showIndicator
        title="Warning"
        description="This is a warning alert."
      />
      <Alert
        status="success"
        showIndicator
        title="Success"
        description="This is a success alert."
      />
      <Alert
        status="error"
        showIndicator
        title="Error"
        description="This is an error alert."
      />
    </div>
  );
}
`,
  },
];

function AlertPage() {
  return (
    <>
      <PageHeader
        className="mb-6"
        title="Alert"
        description="Used to communicate a state that affects a system, feature or page."
        githubLink="https://github.com/malcodeman/hygge-ui/blob/main/src/components/alert.tsx"
      />
      <Card className="mb-6">
        <Alert title="This is the alert title" />
      </Card>
      <CodeBlock
        className="mb-6"
        theme={CODE_BLOCKS.THEME}
        language={CODE_BLOCKS.LANGUAGE}
        code={CODE_EXAMPLES[0].code}
        copyButton={CODE_BLOCKS.COPY_BUTTON}
      />
      <Heading level={2} className="mb-2">
        Examples
      </Heading>
      <Heading level={3}>Description</Heading>
      <Text className="mb-6">
        Use the description prop to provide additional context to the alert:
      </Text>
      <Card className="mb-6">
        <Alert
          status="error"
          showIndicator
          title="Invalid Fields"
          description="Your form has some errors. Please fix them and try again."
        />
      </Card>
      <CodeBlock
        className="mb-6"
        theme={CODE_BLOCKS.THEME}
        language={CODE_BLOCKS.LANGUAGE}
        code={CODE_EXAMPLES[1].code}
        copyButton={CODE_BLOCKS.COPY_BUTTON}
      />
      <Heading level={3}>Status</Heading>
      <Text className="mb-6">
        Use the status prop to change the appearance of the alert:
      </Text>
      <Card className="mb-6">
        <div className="flex flex-col gap-2">
          <Alert
            status="info"
            showIndicator
            title="Information"
            description="This is an informational alert."
          />
          <Alert
            status="warning"
            showIndicator
            title="Warning"
            description="This is a warning alert."
          />
          <Alert
            status="success"
            showIndicator
            title="Success"
            description="This is a success alert."
          />
          <Alert
            status="error"
            showIndicator
            title="Error"
            description="This is an error alert."
          />
        </div>
      </Card>
      <CodeBlock
        className="mb-6"
        theme={CODE_BLOCKS.THEME}
        language={CODE_BLOCKS.LANGUAGE}
        code={CODE_EXAMPLES[2].code}
        copyButton={CODE_BLOCKS.COPY_BUTTON}
      />
    </>
  );
}

export default AlertPage;
