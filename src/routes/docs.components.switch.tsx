import { Heading } from "hygge-ui/heading";
import { Switch } from "hygge-ui/switch";
import { Code, Text } from "hygge-ui/text";
import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "app/components/page-header";
import { PagePreviewCodeTabs } from "app/components/page-preview-code-tabs";

export const Route = createFileRoute("/docs/components/switch")({
  component: SwitchPage,
  head: () => ({
    meta: [
      {
        title: "Switch | Hygge UI",
      },
    ],
  }),
});

function SwitchPage() {
  return (
    <>
      <PageHeader
        title="Switch"
        description="Used to capture a binary state."
        githubLink="https://github.com/malcodeman/hygge-ui/blob/main/src/components/switch.tsx"
        className="mb-2"
        verified
      />
      <PagePreviewCodeTabs
        preview={<Switch label="Activate Hygge" />}
        code={`<Switch label="Activate Hygge" />`}
      />
      <Heading level={2} className="mt-10 mb-2">
        Examples
      </Heading>
      <Heading level={3} size="lg" className="mb-2">
        Sizes
      </Heading>
      <Text className="mb-2">
        Pass the <Code>size</Code> prop to the <Code>Switch</Code> component to
        change the size of the switch.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <div className="flex flex-col gap-2">
            <Switch size="xs" label="Switch xs" />
            <Switch size="sm" label="Switch sm" />
            <Switch size="md" label="Switch md" />
            <Switch size="lg" label="Switch lg" />
            <Switch size="xl" label="Switch xl" />
          </div>
        }
        code={`<div className="flex flex-col gap-2">
  <Switch size="xs" label="Switch xs" />
  <Switch size="sm" label="Switch sm" />
  <Switch size="md" label="Switch md" />
  <Switch size="lg" label="Switch lg" />
  <Switch size="xl" label="Switch xl" />
</div>`}
      />
      <Heading level={3} size="lg" className="mt-10 mb-2">
        States
      </Heading>
      <Text className="mb-2">
        Pass the <Code>disabled</Code> or <Code>invalid</Code> prop to the{" "}
        <Code>Switch</Code> component to change the visual state of the switch.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <div className="flex flex-col gap-2">
            <Switch label="Disabled" disabled />
            <Switch label="Disabled" defaultChecked disabled />
            <Switch label="Readonly" readOnly />
            <Switch label="Invalid" invalid />
          </div>
        }
        code={`<div className="flex flex-col gap-2">
  <Switch label="Disabled" disabled />
  <Switch label="Disabled" defaultChecked disabled />
  <Switch label="Readonly" readOnly />
  <Switch label="Invalid" invalid />
</div>`}
      />
      <Heading level={3} size="lg" className="mt-10 mb-2">
        Label Position
      </Heading>
      <Text className="mb-2">
        Here&apos;s an example of how to change the label position to the left.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <Switch label="Accept terms and conditions" labelPlacement="start" />
        }
        code={`<Switch label="Accept terms and conditions" labelPlacement="start" />`}
      />
      <Heading level={3} size="lg" className="mt-10 mb-2">
        Color
      </Heading>
      <Text className="mb-2">
        Use the <Code>colorPalette</Code> prop to change the color of the
        rating.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <div className="grid grid-cols-[8ch_1fr] items-center gap-y-2">
            <Text>gray</Text>
            <Switch colorPalette="gray" defaultChecked />
            <Text>orange</Text>
            <Switch colorPalette="orange" defaultChecked />
            <Text>teal</Text>
            <Switch colorPalette="teal" defaultChecked />
            <Text>green</Text>
            <Switch colorPalette="green" defaultChecked />
            <Text>red</Text>
            <Switch colorPalette="red" defaultChecked />
          </div>
        }
        code={`<div className="grid grid-cols-[8ch_1fr] items-center gap-y-2">
  <Text>gray</Text>
  <Switch colorPalette="gray" defaultChecked/>
  <Text>orange</Text>
  <Switch colorPalette="orange" defaultChecked/>
  <Text>teal</Text>
  <Switch colorPalette="teal" defaultChecked/>
  <Text>green</Text>
  <Switch colorPalette="green" defaultChecked/>
  <Text>red</Text>
  <Switch colorPalette="red" defaultChecked/>
</div>`}
      />
    </>
  );
}
