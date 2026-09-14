import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "app/components/page-header";
import { PagePreviewCodeTabs } from "app/components/page-preview-code-tabs";
import {
  CollapsibleContent,
  CollapsibleRoot,
  CollapsibleTrigger,
} from "hygge-ui/collapsible";
import { Heading } from "hygge-ui/heading";
import { Code, Text } from "hygge-ui/text";

export const Route = createFileRoute("/docs/components/collapsible")({
  component: CollapsiblePage,
  head: () => ({
    meta: [
      {
        title: "Collapsible | Hygge UI",
      },
    ],
  }),
});

function CollapsiblePage() {
  return (
    <>
      <PageHeader
        title="Collapsible"
        description="Used to expand and collapse additional content."
        githubLink="https://github.com/malcodeman/hygge-ui/blob/main/src/hygge-ui/collapsible.tsx"
        className="mb-2"
      />
      <PagePreviewCodeTabs
        preview={
          <CollapsibleRoot>
            <CollapsibleTrigger>Toggle</CollapsibleTrigger>
            <CollapsibleContent>Content</CollapsibleContent>
          </CollapsibleRoot>
        }
        code={`<CollapsibleRoot>
  <CollapsibleTrigger>Toggle</CollapsibleTrigger>
  <CollapsibleContent>Content</CollapsibleContent>
</CollapsibleRoot>`}
      />
      <Heading level={2} className="mt-10 mb-2">
        Examples
      </Heading>
      <Heading level={3} size="lg" className="mb-2">
        Initial Open
      </Heading>
      <Text className="mb-2">
        Use the <Code>defaultOpen</Code> prop to render the collapsible in an
        open state by default.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <CollapsibleRoot defaultOpen>
            <CollapsibleTrigger>Toggle</CollapsibleTrigger>
            <CollapsibleContent>Lorem ipsum</CollapsibleContent>
          </CollapsibleRoot>
        }
        code={`<CollapsibleRoot defaultOpen>
  <CollapsibleTrigger>Toggle</CollapsibleTrigger>
  <CollapsibleContent>Lorem ipsum</CollapsibleContent>
</CollapsibleRoot>`}
      />
      <Heading level={3} size="lg" className="mt-6 mb-2">
        Disabled
      </Heading>
      <Text className="mb-2">
        Use the <Code>disabled</Code> prop to prevent the collapsible from
        being toggled.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <CollapsibleRoot disabled>
            <CollapsibleTrigger>Toggle (Disabled)</CollapsibleTrigger>
            <CollapsibleContent>
              This content cannot be toggled because the collapsible is
              disabled using the <code>disabled</code> prop.
            </CollapsibleContent>
          </CollapsibleRoot>
        }
        code={`<CollapsibleRoot disabled>
  <CollapsibleTrigger>Toggle (Disabled)</CollapsibleTrigger>
  <CollapsibleContent>
    This content cannot be toggled because the collapsible is disabled using
    the <code>disabled</code> prop.
  </CollapsibleContent>
</CollapsibleRoot>`}
      />
    </>
  );
}
