import {
  ComboboxContent,
  ComboboxInput,
  ComboboxItem,
  ComboboxLabel,
  ComboboxRoot,
} from "@/components/combobox";
import { useFilter, useListCollection } from "@ark-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "app/components/page-header";
import { PagePreviewCodeTabs } from "app/components/page-preview-code-tabs";

export const Route = createFileRoute("/docs/components/combobox")({
  component: ComboboxPage,
  head: () => ({
    meta: [
      {
        title: "Combobox | Hygge UI",
      },
    ],
  }),
});

const frameworks = [
  { label: "React", value: "react" },
  { label: "Solid", value: "solid" },
  { label: "Vue", value: "vue" },
  { label: "Angular", value: "angular" },
  { label: "Svelte", value: "svelte" },
  { label: "Preact", value: "preact" },
  { label: "Qwik", value: "qwik" },
  { label: "Lit", value: "lit" },
  { label: "Alpine.js", value: "alpinejs" },
  { label: "Ember", value: "ember" },
  { label: "Next.js", value: "nextjs" },
];

function ComboboxPage() {
  const { contains } = useFilter({ sensitivity: "base" });
  const { collection, filter } = useListCollection({
    initialItems: frameworks,
    filter: contains,
  });

  return (
    <>
      <PageHeader
        title="Combobox"
        description="A versatile input component that combines a text input with a listbox, allowing users to filter a list of options and select single or multiple values."
        githubLink="https://github.com/malcodeman/hygge-ui/blob/main/src/components/combobox.tsx"
        className="mb-2"
      />
      <PagePreviewCodeTabs
        preview={
          <ComboboxRoot
            collection={collection}
            onInputValueChange={(e) => filter(e.inputValue)}
          >
            <ComboboxLabel>Select framework</ComboboxLabel>
            <ComboboxInput placeholder="Type to search" />
            <ComboboxContent>
              {collection.items.map((item) => (
                <ComboboxItem key={item.value} item={item.value}>
                  {item.label}
                </ComboboxItem>
              ))}
            </ComboboxContent>
          </ComboboxRoot>
        }
        code={`<ComboboxRoot
  collection={collection}
  onInputValueChange={(e) => filter(e.inputValue)}
>
  <ComboboxLabel>Select framework</ComboboxLabel>
  <ComboboxInput placeholder="Type to search" />
  <ComboboxContent>
    {collection.items.map((item) => (
      <ComboboxItem key={item.value} item={item.value}>
        {item.label}
      </ComboboxItem>
    ))}
  </ComboboxContent>
</ComboboxRoot>`}
      />
    </>
  );
}
