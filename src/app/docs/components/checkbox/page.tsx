import { Button } from "@/components/button";
import { Checkbox } from "@/components/checkbox";
import { Field } from "@/components/field";
import { Heading } from "@/components/heading";
import { Input } from "@/components/input";
import { Code, Text } from "@/components/text";
import { PageHeader } from "app/components/page-header";
import { PagePreviewCodeTabs } from "app/components/page-preview-code-tabs";

function CheckboxPage() {
  return (
    <>
      <PageHeader
        title="Checkbox"
        description="Used in forms when a user needs to select multiple values from several options."
        githubLink="https://github.com/malcodeman/hygge-ui/blob/main/src/components/checkbox.tsx"
        className="mb-2"
        verified
      />
      <PagePreviewCodeTabs
        preview={<Checkbox label="Accept terms and conditions" />}
        code={`<Checkbox label="Accept terms and conditions" />`}
      />
      <Heading level={2} className="mt-10 mb-2">
        Examples
      </Heading>
      <Heading level={3} size="lg" className="mb-2">
        Sizes
      </Heading>
      <Text className="mb-2">
        Pass the <Code>size</Code> prop to the <Code>Checkbox</Code> component
        to change the size of the checkbox.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <div className="flex flex-col gap-2">
            <Checkbox size="sm" label="Checkbox sm" />
            <Checkbox size="md" label="Checkbox md" />
            <Checkbox size="lg" label="Checkbox lg" />
          </div>
        }
        code={`<div className="flex flex-col gap-2">
  <Checkbox size="sm" label="Checkbox sm" />
  <Checkbox size="md" label="Checkbox md" />
  <Checkbox size="lg" label="Checkbox lg" />
</div>`}
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
          <div className="flex flex-col gap-2">
            <Checkbox label="Disabled" disabled />
            <Checkbox label="Disabled" defaultChecked disabled />
            <Checkbox label="Readonly" readOnly />
            <Checkbox label="Invalid" invalid />
          </div>
        }
        code={`<div className="flex flex-col gap-2">
  <Checkbox label="Disabled" disabled />
  <Checkbox label="Disabled" defaultChecked disabled />
  <Checkbox label="Readonly" readOnly />
  <Checkbox label="Invalid" invalid />
</div>`}
      />
      <Heading level={3} size="lg" className="mt-10 mb-2">
        Label Position
      </Heading>
      <Text className="mb-2">
        Here&apos;s an example of how to change the label position to the right.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <Checkbox
            label="Accept terms and conditions"
            labelPlacement="start"
          />
        }
        code={`<Checkbox label="Accept terms and conditions" labelPlacement="start" />`}
      />
      <Heading level={3} size="lg" className="mt-10 mb-2">
        Composition
      </Heading>
      <Text className="mb-2">
        Here&apos;s an example of how to compose a checkbox with a field
        component.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <div className="flex w-full max-w-xs flex-col items-start gap-2">
            <Field label="Username">
              <Input placeholder="username" />
            </Field>
            <Field label="Password">
              <Input placeholder="password" />
            </Field>
            <Checkbox label="Remember me" />
            <Button>Submit</Button>
          </div>
        }
        code={`<div className="flex w-full max-w-xs flex-col items-start gap-2">
  <Field label="Username">
    <Input placeholder="username" />
  </Field>
  <Field label="Password">
    <Input placeholder="password" />
  </Field>
  <Checkbox label="Remember me" />
  <Button>Submit</Button>
</div>`}
      />
    </>
  );
}

export default CheckboxPage;
