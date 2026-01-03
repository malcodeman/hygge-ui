import { Button } from "@/components/button";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/menu";
import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "app/components/page-header";
import { PagePreviewCodeTabs } from "app/components/page-preview-code-tabs";

export const Route = createFileRoute("/docs/components/menu")({
  component: MenuPage,
  head: () => ({
    meta: [
      {
        title: "Menu | Hygge UI",
      },
    ],
  }),
});

function MenuPage() {
  return (
    <>
      <PageHeader
        title="Menu"
        description="Used to create an accessible dropdown menu"
        githubLink="https://github.com/malcodeman/hygge-ui/blob/main/src/components/menu.tsx"
        className="mb-2"
      />
      <PagePreviewCodeTabs
        preview={
          <div>
            <MenuRoot positioning={{ placement: "bottom" }}>
              <MenuTrigger asChild>
                <Button variant="outline" size="sm">
                  Open
                </Button>
              </MenuTrigger>
              <MenuContent>
                <MenuItem value="new-txt">New Text File</MenuItem>
                <MenuItem value="new-file">New File...</MenuItem>
                <MenuItem value="new-win">New Window</MenuItem>
                <MenuItem value="open-file">Open File...</MenuItem>
                <MenuItem value="export">Export</MenuItem>
              </MenuContent>
            </MenuRoot>
          </div>
        }
        code={`<div>
  <MenuRoot positioning={{ placement: "bottom" }}>
    <MenuTrigger asChild>
      <Button variant="outline" size="sm">
        Open
      </Button>
    </MenuTrigger>
    <MenuContent>
      <MenuItem value="new-txt">New Text File</MenuItem>
      <MenuItem value="new-file">New File...</MenuItem>
      <MenuItem value="new-win">New Window</MenuItem>
      <MenuItem value="open-file">Open File...</MenuItem>
      <MenuItem value="export">Export</MenuItem>
    </MenuContent>
  </MenuRoot>
</div>`}
      />
    </>
  );
}
