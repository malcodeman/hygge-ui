import { Heading } from "hygge-ui/heading";
import { RadioGroup, RadioGroupItem } from "hygge-ui/radio";
import { Code, Text } from "hygge-ui/text";
import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "app/components/page-header";
import { PagePreviewCodeTabs } from "app/components/page-preview-code-tabs";

export const Route = createFileRoute("/docs/components/radio")({
  component: RadioPage,
  head: () => ({
    meta: [{ title: "Radio | Hygge UI" }],
  }),
});

function RadioPage() {
  return (
    <>
      <PageHeader
        title="Radio"
        description="Used to select one option from several options."
        githubLink="https://github.com/malcodeman/hygge-ui/blob/main/src/components/radio.tsx"
        className="mb-2"
        verified
      />
      <PagePreviewCodeTabs
        preview={
          <RadioGroup label="Select an option">
            <div className="flex items-center gap-4">
              <RadioGroupItem value="1">Option 1</RadioGroupItem>
              <RadioGroupItem value="2">Option 2</RadioGroupItem>
              <RadioGroupItem value="3">Option 3</RadioGroupItem>
            </div>
          </RadioGroup>
        }
        code={`<RadioGroup label="Select an option">
  <div className="flex items-center gap-4">
    <RadioGroupItem value="1">Option 1</RadioGroupItem>
    <RadioGroupItem value="2">Option 2</RadioGroupItem>
    <RadioGroupItem value="3">Option 3</RadioGroupItem>
  </div>
</RadioGroup>`}
      />
      <Heading level={2} className="mt-10 mb-2">
        Examples
      </Heading>
      <Heading level={3} size="lg" className="mb-2">
        Sizes
      </Heading>
      <Text className="mb-2">
        Pass the <Code>size</Code> prop to the RadioGroup component to change
        the size of the radio component.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <div className="flex flex-col gap-4">
            <RadioGroup size="xs">
              <RadioGroupItem value="xs">Radio xs</RadioGroupItem>
            </RadioGroup>
            <RadioGroup size="sm">
              <RadioGroupItem value="sm">Radio sm</RadioGroupItem>
            </RadioGroup>
            <RadioGroup>
              <RadioGroupItem value="md">Radio md</RadioGroupItem>
            </RadioGroup>
            <RadioGroup size="lg">
              <RadioGroupItem value="lg">Radio lg</RadioGroupItem>
            </RadioGroup>
            <RadioGroup size="xl">
              <RadioGroupItem value="xl">Radio xl</RadioGroupItem>
            </RadioGroup>
          </div>
        }
        code={`<div className="flex flex-col gap-4">
  <RadioGroup size="xs">
    <RadioGroupItem value="xs">Radio xs</RadioGroupItem>
  </RadioGroup>
  <RadioGroup size="sm">
    <RadioGroupItem value="sm">Radio sm</RadioGroupItem>
  </RadioGroup>
  <RadioGroup>
    <RadioGroupItem value="md">Radio md</RadioGroupItem>
  </RadioGroup>
  <RadioGroup size="lg">
    <RadioGroupItem value="lg">Radio lg</RadioGroupItem>
  </RadioGroup>
  <RadioGroup size="xl">
    <RadioGroupItem value="xl">Radio xl</RadioGroupItem>
  </RadioGroup>
</div>`}
      />
      <Heading level={3} size="lg" className="mt-10 mb-2">
        States
      </Heading>
      <Text className="mb-2">
        Pass the <Code>disabled</Code> or <Code>invalid</Code> prop to the{" "}
        <Code>RadioGroup</Code> component to change the visual state of the
        radio.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <div className="flex flex-col gap-4">
            <RadioGroup disabled>
              <RadioGroupItem value="1">Disabled</RadioGroupItem>
            </RadioGroup>
            <RadioGroup value="2" disabled>
              <RadioGroupItem value="2">Disabled</RadioGroupItem>
            </RadioGroup>
            <RadioGroup readOnly>
              <RadioGroupItem value="3">Readonly</RadioGroupItem>
            </RadioGroup>
            <RadioGroup invalid>
              <RadioGroupItem value="4">Invalid</RadioGroupItem>
            </RadioGroup>
          </div>
        }
        code={`<div className="flex flex-col gap-4">
  <RadioGroup disabled>
    <RadioGroupItem value="1">Disabled</RadioGroupItem>
  </RadioGroup>
  <RadioGroup value="2" disabled>
    <RadioGroupItem value="2">Disabled</RadioGroupItem>
  </RadioGroup>
  <RadioGroup readOnly>
    <RadioGroupItem value="3">Readonly</RadioGroupItem>
  </RadioGroup>
  <RadioGroup invalid>
    <RadioGroupItem value="4">Invalid</RadioGroupItem>
  </RadioGroup>
</div>`}
      />
      <Heading level={3} size="lg" className="mt-10 mb-2">
        Color
      </Heading>
      <Text className="mb-2">
        Use the <Code>colorPalette</Code> prop to change the color of the radio.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <div className="grid grid-cols-[8ch_1fr] items-center gap-y-2">
            <Text>gray</Text>
            <RadioGroup colorPalette="gray" value="gray">
              <RadioGroupItem value="gray" />
            </RadioGroup>
            <Text>orange</Text>
            <RadioGroup colorPalette="orange" value="orange">
              <RadioGroupItem value="orange" />
            </RadioGroup>
            <Text>teal</Text>
            <RadioGroup colorPalette="teal" value="teal">
              <RadioGroupItem value="teal" />
            </RadioGroup>
            <Text>green</Text>
            <RadioGroup colorPalette="green" value="green">
              <RadioGroupItem value="green" />
            </RadioGroup>
            <Text>red</Text>
            <RadioGroup colorPalette="red" value="red">
              <RadioGroupItem value="red" />
            </RadioGroup>
          </div>
        }
        code={`<div className="grid grid-cols-[8ch_1fr] items-center gap-y-2">
  <Text>gray</Text>
  <RadioGroup colorPalette="gray" value="gray">
    <RadioGroupItem value="gray" />
  </RadioGroup>
  <Text>orange</Text>
  <RadioGroup colorPalette="orange" value="orange">
    <RadioGroupItem value="orange" />
  </RadioGroup>
  <Text>teal</Text>
  <RadioGroup colorPalette="teal" value="teal">
    <RadioGroupItem value="teal" />
  </RadioGroup>
  <Text>green</Text>
  <RadioGroup colorPalette="green" value="green">
    <RadioGroupItem value="green" />
  </RadioGroup>
  <Text>red</Text>
  <RadioGroup colorPalette="red" value="red">
    <RadioGroupItem value="red" />
  </RadioGroup>
</div>`}
      />
    </>
  );
}
