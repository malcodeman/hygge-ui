import { Button } from "@/components/button";
import { Tooltip } from "@/components/tooltip";
import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "app/components/page-header";
import { PagePreviewCodeTabs } from "app/components/page-preview-code-tabs";

export const Route = createFileRoute("/docs/components/tooltip")({
  component: TooltipPage,
  head: () => ({
    meta: [
      {
        title: "Tooltip | Hygge UI",
      },
    ],
  }),
});

function TooltipPage() {
  return (
    <>
      <PageHeader
        title="Tooltip"
        description="Used to display additional information when a user hovers over an element."
        githubLink="https://github.com/malcodeman/hygge-ui/blob/main/src/components/tooltip.tsx"
        className="mb-2"
      />
      <PagePreviewCodeTabs
        preview={
          <div>
            <Tooltip content="This is the tooltip content">
              <Button variant="outline" size="sm">
                Hover me
              </Button>
            </Tooltip>
          </div>
        }
        code={`<div>
  <Tooltip content="This is the tooltip content">
    <Button variant="outline" size="sm">
      Hover me
    </Button>
  </Tooltip>
</div>`}
      />
    </>
  );
}
