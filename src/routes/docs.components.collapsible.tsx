import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "app/components/page-header";
import { PagePreviewCodeTabs } from "app/components/page-preview-code-tabs";
import {
  CollapsibleContent,
  CollapsibleRoot,
  CollapsibleTrigger,
} from "hygge-ui/collapsible";

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
    </>
  );
}
