import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "app/components/page-header";
import { PagePreviewCodeTabs } from "app/components/page-preview-code-tabs";
import { ToggleGroupItem, ToggleGroupRoot } from "hygge-ui/toggle-group";
import {
  LuAlignCenter,
  LuAlignLeft,
  LuAlignRight,
  LuAlignJustify,
} from "react-icons/lu";

export const Route = createFileRoute("/docs/components/toggle-group")({
  component: ToggleGroupPage,
});

function ToggleGroupPage() {
  return (
    <>
      <PageHeader
        title="Toggle Group"
        description="A set of two-state buttons that can be toggled on or off."
        githubLink="https://github.com/malcodeman/hygge-ui/blob/main/src/hygge-ui/toggle-group.tsx"
        className="mb-2"
      />
      <PagePreviewCodeTabs
        preview={
          <ToggleGroupRoot>
            <ToggleGroupItem value="left">
              <LuAlignLeft size={16} />
            </ToggleGroupItem>
            <ToggleGroupItem value="center">
              <LuAlignCenter size={16} />
            </ToggleGroupItem>
            <ToggleGroupItem value="right">
              <LuAlignRight size={16} />
            </ToggleGroupItem>
            <ToggleGroupItem value="justify">
              <LuAlignJustify size={16} />
            </ToggleGroupItem>
          </ToggleGroupRoot>
        }
        code={`<ToggleGroupRoot>
  <ToggleGroupItem value="left">
    <LuAlignLeft size={16} />
  </ToggleGroupItem>
  <ToggleGroupItem value="center">
    <LuAlignCenter size={16} />
  </ToggleGroupItem>
  <ToggleGroupItem value="right">
    <LuAlignRight size={16} />
  </ToggleGroupItem>
  <ToggleGroupItem value="justify">
    <LuAlignJustify size={16} />
  </ToggleGroupItem>
</ToggleGroupRoot>`}
      />
    </>
  );
}
