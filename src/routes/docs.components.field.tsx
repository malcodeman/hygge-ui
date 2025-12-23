import { Field } from "@/components/field";
import { Input } from "@/components/input";
import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "app/components/page-header";
import { PagePreviewCodeTabs } from "app/components/page-preview-code-tabs";

export const Route = createFileRoute("/docs/components/field")({
  component: FieldPage,
});

function FieldPage() {
  return (
    <>
      <PageHeader
        title="Field"
        description="Used to add labels, help text, and error messages to form fields."
        githubLink="https://github.com/malcodeman/hygge-ui/blob/main/src/components/field.tsx"
        className="mb-2"
      />
      <PagePreviewCodeTabs
        preview={
          <Field label="Email">
            <Input placeholder="me@example.com" />
          </Field>
        }
        code={`<Field label="Email">
  <Input placeholder="me@example.com" />
</Field>`}
      />
    </>
  );
}

export default FieldPage;
