import {
  ComboboxContent,
  ComboboxInput,
  ComboboxItem,
  ComboboxItemGroup,
  ComboboxItemGroupLabel,
  ComboboxLabel,
  ComboboxRoot,
} from "hygge-ui/combobox";
import { useFilter, useListCollection } from "@ark-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "app/components/page-header";
import { PagePreviewCodeTabs } from "app/components/page-preview-code-tabs";
import { Heading } from "hygge-ui/heading";
import { Code, Text } from "hygge-ui/text";
import { Field } from "hygge-ui/field";

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
  const { collection: collection1, filter: filter1 } = useListCollection({
    initialItems: frameworks,
    filter: contains,
  });
  const { collection: collection2, filter: filter2 } = useListCollection({
    initialItems: frameworks,
    filter: contains,
  });
  const { collection: collection3, filter: filter3 } = useListCollection({
    initialItems: frameworks,
    filter: contains,
  });
  const { collection: collection4, filter: filter4 } = useListCollection({
    initialItems: frameworks,
    filter: contains,
  });
  const { collection: collection5, filter: filter5 } = useListCollection({
    initialItems: frameworks,
    filter: contains,
  });
  const { collection: collection6, filter: filter6 } = useListCollection({
    initialItems: frameworks,
    filter: contains,
  });
  const { collection: collection7, filter: filter7 } = useListCollection({
    initialItems: frameworks,
    filter: contains,
  });
  const { collection: collection8, filter: filter8 } = useListCollection({
    initialItems: frameworks,
    filter: contains,
  });
  const { collection: collection9, filter: filter9 } = useListCollection({
    initialItems: frameworks,
    filter: contains,
  });
  const { collection: collection10, filter: filter10 } = useListCollection({
    initialItems: frameworks,
    filter: contains,
  });
  const { collection: collection11, filter: filter11 } = useListCollection({
    initialItems: frameworks,
    filter: contains,
  });
  const { collection: collection12, filter: filter12 } = useListCollection({
    initialItems: frameworks,
    filter: contains,
  });
  const { collection: collection13, filter: filter13 } = useListCollection({
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
        verified
      />
      <PagePreviewCodeTabs
        preview={
          <ComboboxRoot
            collection={collection1}
            onInputValueChange={(e) => filter1(e.inputValue)}
            className="max-w-xs"
          >
            <ComboboxLabel>Select framework</ComboboxLabel>
            <ComboboxInput placeholder="Type to search" />
            <ComboboxContent>
              {collection1.items.map((item) => (
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
  className="max-w-xs"
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
      <Heading level={2} className="mt-10 mb-2">
        Examples
      </Heading>
      <Heading level={3} size="lg" className="mb-2">
        Variants
      </Heading>
      <Text className="mb-2">
        Use the <Code>variant</Code> prop to change the style of the select
        component.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <div className="flex max-w-xs flex-col gap-2">
            <ComboboxRoot
              variant="subtle"
              collection={collection2}
              onInputValueChange={(e) => filter2(e.inputValue)}
            >
              <ComboboxLabel>Select framework</ComboboxLabel>
              <ComboboxInput placeholder="Type to search" />
              <ComboboxContent>
                {collection2.items.map((item) => (
                  <ComboboxItem key={item.value} item={item.value}>
                    {item.label}
                  </ComboboxItem>
                ))}
              </ComboboxContent>
            </ComboboxRoot>
            <ComboboxRoot
              variant="outline"
              collection={collection3}
              onInputValueChange={(e) => filter3(e.inputValue)}
            >
              <ComboboxLabel>Select framework</ComboboxLabel>
              <ComboboxInput placeholder="Type to search" />
              <ComboboxContent>
                {collection3.items.map((item) => (
                  <ComboboxItem key={item.value} item={item.value}>
                    {item.label}
                  </ComboboxItem>
                ))}
              </ComboboxContent>
            </ComboboxRoot>
          </div>
        }
        code={`<div className="flex max-w-xs flex-col gap-2">
  <ComboboxRoot
    variant="subtle"
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
  <ComboboxRoot
    variant="outline"
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
</div>`}
      />
      <Heading level={3} size="lg" className="mt-10 mb-2">
        Sizes
      </Heading>
      <Text className="mb-2">
        Use the <Code>size</Code> prop to change the size of the combobox
        component.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <div className="flex max-w-xs flex-col gap-2">
            <ComboboxRoot
              collection={collection8}
              onInputValueChange={(e) => filter8(e.inputValue)}
              size="xs"
            >
              <ComboboxLabel>Select framework</ComboboxLabel>
              <ComboboxInput placeholder="Type to search" />
              <ComboboxContent>
                {collection8.items.map((item) => (
                  <ComboboxItem key={item.value} item={item.value}>
                    {item.label}
                  </ComboboxItem>
                ))}
              </ComboboxContent>
            </ComboboxRoot>
            <ComboboxRoot
              collection={collection9}
              onInputValueChange={(e) => filter9(e.inputValue)}
              size="sm"
            >
              <ComboboxLabel>Select framework</ComboboxLabel>
              <ComboboxInput placeholder="Type to search" />
              <ComboboxContent>
                {collection9.items.map((item) => (
                  <ComboboxItem key={item.value} item={item.value}>
                    {item.label}
                  </ComboboxItem>
                ))}
              </ComboboxContent>
            </ComboboxRoot>
            <ComboboxRoot
              collection={collection10}
              onInputValueChange={(e) => filter10(e.inputValue)}
              size="md"
            >
              <ComboboxLabel>Select framework</ComboboxLabel>
              <ComboboxInput placeholder="Type to search" />
              <ComboboxContent>
                {collection10.items.map((item) => (
                  <ComboboxItem key={item.value} item={item.value}>
                    {item.label}
                  </ComboboxItem>
                ))}
              </ComboboxContent>
            </ComboboxRoot>
            <ComboboxRoot
              collection={collection11}
              onInputValueChange={(e) => filter11(e.inputValue)}
              size="lg"
            >
              <ComboboxLabel>Select framework</ComboboxLabel>
              <ComboboxInput placeholder="Type to search" />
              <ComboboxContent>
                {collection11.items.map((item) => (
                  <ComboboxItem key={item.value} item={item.value}>
                    {item.label}
                  </ComboboxItem>
                ))}
              </ComboboxContent>
            </ComboboxRoot>
            <ComboboxRoot
              collection={collection12}
              onInputValueChange={(e) => filter12(e.inputValue)}
              size="xl"
            >
              <ComboboxLabel>Select framework</ComboboxLabel>
              <ComboboxInput placeholder="Type to search" />
              <ComboboxContent>
                {collection12.items.map((item) => (
                  <ComboboxItem key={item.value} item={item.value}>
                    {item.label}
                  </ComboboxItem>
                ))}
              </ComboboxContent>
            </ComboboxRoot>
          </div>
        }
        code={`<div className="flex max-w-xs flex-col gap-2">
  <ComboboxRoot
    collection={collection}
    onInputValueChange={(e) => filter(e.inputValue)}
    size="xs"
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
  <ComboboxRoot
    collection={collection}
    onInputValueChange={(e) => filter(e.inputValue)}
    size="sm"
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
  <ComboboxRoot
    collection={collection}
    onInputValueChange={(e) => filter(e.inputValue)}
    size="md"
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
  <ComboboxRoot
    collection={collection}
    onInputValueChange={(e) => filter(e.inputValue)}
    size="lg"
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
  <ComboboxRoot
    collection={collection}
    onInputValueChange={(e) => filter(e.inputValue)}
    size="xl"
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
</div>`}
      />
      <Heading level={3} size="lg" className="mt-10 mb-2">
        Option Group
      </Heading>
      <Text className="mb-2">
        Use the <Code>ComboboxItemGroup</Code> component to group combobox
        options.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <ComboboxRoot
            collection={collection4}
            onInputValueChange={(e) => filter4(e.inputValue)}
            className="max-w-xs"
          >
            <ComboboxLabel>Select framework</ComboboxLabel>
            <ComboboxInput placeholder="Type to search" />
            <ComboboxContent>
              <ComboboxItemGroup>
                <ComboboxItemGroupLabel>
                  Popular Frameworks
                </ComboboxItemGroupLabel>
                <ComboboxItem item="react">React</ComboboxItem>
                <ComboboxItem item="vue">Vue</ComboboxItem>
                <ComboboxItem item="angular">Angular</ComboboxItem>
              </ComboboxItemGroup>
              <ComboboxItemGroup>
                <ComboboxItemGroupLabel>
                  Other Frameworks
                </ComboboxItemGroupLabel>
                <ComboboxItem item="svelte">Svelte</ComboboxItem>
                <ComboboxItem item="solid">Solid</ComboboxItem>
              </ComboboxItemGroup>
            </ComboboxContent>
          </ComboboxRoot>
        }
        code={`<ComboboxRoot
  collection={collection}
  onInputValueChange={(e) => filter(e.inputValue)}
  className="max-w-xs"
>
  <ComboboxLabel>Select framework</ComboboxLabel>
  <ComboboxInput placeholder="Type to search" />
  <ComboboxContent>
    <ComboboxItemGroup>
      <ComboboxItemGroupLabel>Popular Frameworks</ComboboxItemGroupLabel>
      <ComboboxItem item="react">React</ComboboxItem>
      <ComboboxItem item="vue">Vue</ComboboxItem>
      <ComboboxItem item="angular">Angular</ComboboxItem>
    </ComboboxItemGroup>
    <ComboboxItemGroup>
      <ComboboxItemGroupLabel>Other Frameworks</ComboboxItemGroupLabel>
      <ComboboxItem item="svelte">Svelte</ComboboxItem>
      <ComboboxItem item="solid">Solid</ComboboxItem>
    </ComboboxItemGroup>
  </ComboboxContent>
</ComboboxRoot>`}
      />
      <Heading level={3} size="lg" className="mt-10 mb-2">
        Disabled
      </Heading>
      <Text className="mb-2">
        Use the <Code>disabled</Code> prop to disable combobox component.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <ComboboxRoot
            disabled
            collection={collection5}
            onInputValueChange={(e) => filter5(e.inputValue)}
            className="max-w-xs"
          >
            <ComboboxLabel>Select framework</ComboboxLabel>
            <ComboboxInput placeholder="Type to search" />
            <ComboboxContent>
              {collection5.items.map((item) => (
                <ComboboxItem key={item.value} item={item.value}>
                  {item.label}
                </ComboboxItem>
              ))}
            </ComboboxContent>
          </ComboboxRoot>
        }
        code={`<ComboboxRoot
  disabled
  collection={collection}
  onInputValueChange={(e) => filter(e.inputValue)}
  className="max-w-xs"
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
      <Heading level={3} size="lg" className="mt-10 mb-2">
        Invalid
      </Heading>
      <Text className="mb-2">
        Here&apos;s an example of how to compose the <Code>Combobox</Code>{" "}
        component with the <Code>Field</Code> component to display an error
        state.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <Field
            invalid
            label="Select framework"
            errorText="This is an error"
            className="max-w-xs"
          >
            <ComboboxRoot
              collection={collection6}
              onInputValueChange={(e) => filter6(e.inputValue)}
            >
              <ComboboxInput placeholder="Type to search" />
              <ComboboxContent>
                {collection6.items.map((item) => (
                  <ComboboxItem key={item.value} item={item.value}>
                    {item.label}
                  </ComboboxItem>
                ))}
              </ComboboxContent>
            </ComboboxRoot>
          </Field>
        }
        code={`<Field
  invalid
  label="Select framework"
  errorText="This is an error"
  className="max-w-xs"
>
  <ComboboxRoot
    collection={collection}
    onInputValueChange={(e) => filter(e.inputValue)}
  >
    <ComboboxInput placeholder="Type to search" />
    <ComboboxContent>
      {collection.items.map((item) => (
        <ComboboxItem key={item.value} item={item.value}>
          {item.label}
        </ComboboxItem>
      ))}
    </ComboboxContent>
  </ComboboxRoot>
</Field>`}
      />
      <Heading level={3} size="lg" className="mt-10 mb-2">
        Multiple
      </Heading>
      <Text className="mb-2">
        Use the <Code>multiple</Code> prop to allow multiple selections.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <ComboboxRoot
            multiple
            collection={collection7}
            onInputValueChange={(e) => filter7(e.inputValue)}
            className="max-w-xs"
          >
            <ComboboxLabel>Select framework</ComboboxLabel>
            <ComboboxInput placeholder="Type to search" />
            <ComboboxContent>
              {collection7.items.map((item) => (
                <ComboboxItem key={item.value} item={item.value}>
                  {item.label}
                </ComboboxItem>
              ))}
            </ComboboxContent>
          </ComboboxRoot>
        }
        code={`<ComboboxRoot
  multiple
  collection={collection}
  onInputValueChange={(e) => filter(e.inputValue)}
  className="max-w-xs"
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
      <Heading level={3} size="lg" className="mt-10 mb-2">
        Positioning
      </Heading>
      <Text className="mb-2">
        Use the <Code>positioning</Code> prop to control the underlying{" "}
        <Code>floating-ui</Code> options of the combobox component.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <ComboboxRoot
            positioning={{ placement: "top", flip: false }}
            collection={collection13}
            onInputValueChange={(e) => filter13(e.inputValue)}
            className="max-w-xs"
          >
            <ComboboxLabel>Select framework</ComboboxLabel>
            <ComboboxInput placeholder="Type to search" />
            <ComboboxContent>
              {collection13.items.map((item) => (
                <ComboboxItem key={item.value} item={item.value}>
                  {item.label}
                </ComboboxItem>
              ))}
            </ComboboxContent>
          </ComboboxRoot>
        }
        code={`<ComboboxRoot
  positioning={{ placement: "top", flip: false }}
  collection={collection}
  onInputValueChange={(e) => filter(e.inputValue)}
  className="max-w-xs"
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
