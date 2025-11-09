import { CheckboxCard } from "@/components/checkbox-card";
import { Heading } from "@/components/heading";
import { Code, Text } from "@/components/text";
import { PageHeader } from "app/components/page-header";
import { PagePreviewCodeTabs } from "app/components/page-preview-code-tabs";

function CheckboxCardPage() {
  return (
    <>
      <PageHeader
        title="Checkbox Card"
        description="Used to select or deselect options displayed within cards."
        githubLink="https://github.com/malcodeman/hygge-ui/blob/main/src/components/checkbox-card.tsx"
        className="mb-2"
        verified
      />
      <PagePreviewCodeTabs
        preview={<CheckboxCard label="Next.js" />}
        code={`<CheckboxCard label="Next.js" />`}
      />
      <Heading level={2} className="mt-10 mb-2">
        Examples
      </Heading>
      <Heading level={3} size="lg" className="mb-2">
        Description
      </Heading>
      <Text className="mb-2">
        Use the <Code>description</Code> prop to add a description to the
        checkbox card.
      </Text>
      <PagePreviewCodeTabs
        preview={<CheckboxCard label="Next.js" description="Best for apps" />}
        code={`<CheckboxCard label="Next.js" description="Best for apps" />`}
      />
      <Heading level={3} size="lg" className="mt-10 mb-2">
        States
      </Heading>
      <Text className="mb-2">
        Pass the <Code>disabled</Code> or <Code>invalid</Code> prop to the{" "}
        <Code>Checkbox</Code> component to change the visual state of the
        checkbox.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <div className="flex max-w-sm flex-col gap-2">
            <CheckboxCard label="Disabled" disabled />
            <CheckboxCard label="Disabled" defaultChecked disabled />
            <CheckboxCard label="Readonly" readOnly />
            <CheckboxCard label="Invalid" invalid />
          </div>
        }
        code={`<div className="flex max-w-sm flex-col gap-2">
  <CheckboxCard label="Disabled" disabled />
  <CheckboxCard label="Disabled" defaultChecked disabled />
  <CheckboxCard label="Readonly" readOnly />
  <CheckboxCard label="Invalid" invalid />
</div>`}
      />
    </>
  );
}

export default CheckboxCardPage;
