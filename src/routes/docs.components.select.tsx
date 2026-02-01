import {
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "hygge-ui/select";
import { createListCollection } from "@ark-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "app/components/page-header";
import { PagePreviewCodeTabs } from "app/components/page-preview-code-tabs";

export const Route = createFileRoute("/docs/components/select")({
  component: SelectPage,
  head: () => ({
    meta: [
      {
        title: "Select | Hygge UI",
      },
    ],
  }),
});

function SelectPage() {
  const frameworks = createListCollection({
    items: [
      { label: "React.js", value: "react" },
      { label: "Vue.js", value: "vue" },
      { label: "Angular", value: "angular" },
      { label: "Svelte", value: "svelte" },
    ],
  });

  return (
    <>
      <PageHeader
        title="Select"
        description="Used to pick a value from predefined options."
        githubLink="https://github.com/malcodeman/hygge-ui/blob/main/src/components/select.tsx"
        className="mb-2"
      />
      <PagePreviewCodeTabs
        preview={
          <SelectRoot collection={frameworks}>
            <SelectLabel>Select framework</SelectLabel>
            <SelectTrigger>
              <SelectValueText placeholder="Select framework" />
            </SelectTrigger>
            <SelectContent>
              {frameworks.items.map((item) => (
                <SelectItem key={item.value} item={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </SelectRoot>
        }
        code={`<SelectRoot collection={frameworks}>
  <SelectLabel>Select framework</SelectLabel>
  <SelectTrigger>
    <SelectValueText placeholder="Select framework" />
  </SelectTrigger>
  <SelectContent>
    {frameworks.items.map((item) => (
      <SelectItem key={item.value} item={item.value}>
        {item.label}
      </SelectItem>
    ))}
  </SelectContent>
</SelectRoot>`}
      />
    </>
  );
}
