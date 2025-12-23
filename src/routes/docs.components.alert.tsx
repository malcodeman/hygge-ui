import { Alert } from "@/components/alert";
import { Heading } from "@/components/heading";
import { Code, Text } from "@/components/text";
import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "app/components/page-header";
import { PagePreviewCodeTabs } from "app/components/page-preview-code-tabs";

export const Route = createFileRoute("/docs/components/alert")({
  component: AlertPage,
});

function AlertPage() {
  return (
    <>
      <PageHeader
        title="Alert"
        description="Used to communicate a state that affects a system, feature or page."
        githubLink="https://github.com/malcodeman/hygge-ui/blob/main/src/components/alert.tsx"
        className="mb-2"
        verified
      />
      <PagePreviewCodeTabs
        preview={<Alert title="This is the alert title" />}
        code={`<Alert title="This is the alert title" />`}
      />
      <Heading level={2} className="mt-10 mb-2">
        Examples
      </Heading>
      <Heading level={3} size="lg" className="mb-2">
        Description
      </Heading>
      <Text className="mb-2">
        Use the <Code>description</Code> prop to provide additional context to
        the alert.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <Alert
            status="error"
            showIndicator
            title="Invalid Fields"
            description="Your form has some errors. Please fix them and try again."
          />
        }
        code={`<Alert
  status="error"
  showIndicator
  title="Invalid Fields"
  description="Your form has some errors. Please fix them and try again."
/>`}
      />
      <Heading level={3} size="lg" className="mt-10 mb-2">
        Status
      </Heading>
      <Text className="mb-2">
        Change the status of the alerts by passing the <Code>status</Code> prop.
        This affects the color scheme and icon used. Alert supports{" "}
        <Code>error</Code>, <Code>success</Code>, <Code>warning</Code>, and{" "}
        <Code>info</Code> statuses.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <div className="flex flex-col gap-2">
            <Alert
              status="error"
              showIndicator
              description="There was an error processing your request"
            />
            <Alert
              status="info"
              showIndicator
              description="Hygge UI is going live on August 30th. Get ready!"
            />
            <Alert
              status="warning"
              showIndicator
              description="Seems your account is about expire, upgrade now"
            />
            <Alert
              status="success"
              showIndicator
              description="Data uploaded to the server. Fire on!"
            />
          </div>
        }
        code={`<div className="flex flex-col gap-2">
  <Alert
    status="error"
    showIndicator
    description="There was an error processing your request"
  />
  <Alert
    status="info"
    showIndicator
    description="Hygge UI is going live on August 30th. Get ready!"
  />
  <Alert
    status="warning"
    showIndicator
    description="Seems your account is about expire, upgrade now"
  />
  <Alert
    status="success"
    showIndicator
    description="Data uploaded to the server. Fire on!"
  />
</div>`}
      />
    </>
  );
}

export default AlertPage;
