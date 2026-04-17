import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "app/components/page-header";
import { PagePreviewCodeTabs } from "app/components/page-preview-code-tabs";
import { Heading } from "hygge-ui/heading";
import { Code, Text } from "hygge-ui/text";
import { Toggle } from "hygge-ui/toggle";
import { LuBold } from "react-icons/lu";

export const Route = createFileRoute("/docs/components/toggle")({
  component: TogglePage,
});

function TogglePage() {
  return (
    <>
      <PageHeader
        title="Toggle"
        description="A two-state button that can be toggled on or off."
        githubLink="https://github.com/malcodeman/hygge-ui/blob/main/src/hygge-ui/toggle.tsx"
        className="mb-2"
        verified
      />
      <PagePreviewCodeTabs
        preview={
          <Toggle>
            <LuBold size={16} />
          </Toggle>
        }
        code={`<Toggle>
  <LuBold size={16} />
</Toggle>`}
      />
      <Heading level={2} className="mt-10 mb-2">
        Examples
      </Heading>
      <Heading level={3} size="lg" className="mb-2">
        Sizes
      </Heading>
      <Text className="mb-2">
        Use the <Code>size</Code> prop to change the size of the toggle.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <div className="flex flex-wrap items-center gap-2">
            <Toggle size="xs">
              <LuBold size={16} />
            </Toggle>
            <Toggle size="sm">
              <LuBold size={16} />
            </Toggle>
            <Toggle size="md">
              <LuBold size={16} />
            </Toggle>
            <Toggle size="lg">
              <LuBold size={16} />
            </Toggle>
            <Toggle size="xl">
              <LuBold size={16} />
            </Toggle>
          </div>
        }
        code={`<div className="flex flex-wrap items-center gap-2">
  <Toggle size="xs">
    <LuBold size={16} />
  </Toggle>
  <Toggle size="sm">
    <LuBold size={16} />
  </Toggle>
  <Toggle size="md">
    <LuBold size={16} />
  </Toggle>
  <Toggle size="lg">
    <LuBold size={16} />
  </Toggle>
  <Toggle size="xl">
    <LuBold size={16} />
  </Toggle>
</div>`}
      />
      <Heading level={3} size="lg" className="mt-10 mb-2">
        Disabled
      </Heading>
      <Text className="mb-2">
        Use the <Code>disabled</Code> prop to disable the toggle.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <div className="flex gap-2">
            <Toggle disabled>
              <LuBold size={16} />
            </Toggle>
            <Toggle disabled pressed>
              <LuBold size={16} />
            </Toggle>
          </div>
        }
        code={`<div className="flex gap-2">
  <Toggle disabled>
    <LuBold size={16} />
  </Toggle>
  <Toggle disabled pressed>
    <LuBold size={16} />
  </Toggle>
</div>`}
      />
    </>
  );
}
