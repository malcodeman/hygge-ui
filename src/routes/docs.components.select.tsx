import {
  SelectContent,
  SelectItem,
  SelectItemGroup,
  SelectItemGroupLabel,
  SelectItemText,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "hygge-ui/select";
import { createListCollection, useSelectContext } from "@ark-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "app/components/page-header";
import { PagePreviewCodeTabs } from "app/components/page-preview-code-tabs";
import { Heading } from "hygge-ui/heading";
import { Code, Text } from "hygge-ui/text";
import { Field } from "hygge-ui/field";
import { Avatar } from "hygge-ui/avatar";

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

function SelectValueMembers() {
  const select = useSelectContext();
  const items = select.selectedItems as Array<{
    name: string;
    avatar: string;
  }>;
  const { name, avatar } = items[0];

  return (
    <SelectValueText placeholder="Select member">
      <div className="flex items-center gap-1">
        <Avatar src={avatar} alt={name} size="xs" square />
        {name}
      </div>
    </SelectValueText>
  );
}

function SelectPage() {
  const frameworks = createListCollection({
    items: [
      { label: "React.js", value: "react" },
      { label: "Vue.js", value: "vue" },
      { label: "Angular", value: "angular" },
      { label: "Svelte", value: "svelte" },
    ],
  });
  const plans = createListCollection({
    items: [
      {
        label: "Basic Plan",
        value: "basic",
        description: "$9/month - Perfect for small projects",
      },
      {
        label: "Pro Plan",
        value: "pro",
        description: "$29/month - Advanced features",
      },
      {
        label: "Business Plan",
        value: "business",
        description: "$99/month - Enterprise-grade solutions",
      },
      {
        label: "Enterprise Plan",
        value: "enterprise",
        description: "Custom pricing - Tailored solutions",
      },
    ],
  });
  const members = createListCollection({
    items: [
      {
        name: "Jessica Jones",
        id: "jessica_jones",
        avatar:
          "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100",
      },
      {
        name: "Kenneth Johnson",
        id: "kenneth_johnson",
        avatar:
          "https://images.unsplash.com/photo-1523477800337-966dbabe060b?w=100",
      },
      {
        name: "Kate Wilson",
        id: "kate_wilson",
        avatar:
          "https://images.unsplash.com/photo-1609712409631-dbbb050746d1?w=100",
      },
    ],
    itemToString: (item) => item.name,
    itemToValue: (item) => item.id,
  });

  return (
    <>
      <PageHeader
        title="Select"
        description="Used to pick a value from predefined options."
        githubLink="https://github.com/malcodeman/hygge-ui/blob/main/src/components/select.tsx"
        className="mb-2"
        verified
      />
      <PagePreviewCodeTabs
        preview={
          <SelectRoot collection={frameworks} className="max-w-xs">
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
        code={`<SelectRoot collection={frameworks} className="max-w-xs">
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
            <SelectRoot collection={frameworks} variant="subtle">
              <SelectLabel>Select framework - subtle</SelectLabel>
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
            <SelectRoot collection={frameworks} variant="outline">
              <SelectLabel>Select framework - outline</SelectLabel>
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
          </div>
        }
        code={`<div className="flex max-w-xs flex-col gap-2">
  <SelectRoot collection={frameworks} variant="subtle">
    <SelectLabel>Select framework - subtle</SelectLabel>
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
  <SelectRoot collection={frameworks} variant="outline">
    <SelectLabel>Select framework - outline</SelectLabel>
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
</div>`}
      />
      <Heading level={3} size="lg" className="mt-10 mb-2">
        Size
      </Heading>
      <Text className="mb-2">
        Use the <Code>size</Code> prop to change the size of the select
        component.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <div className="flex max-w-xs flex-col gap-2">
            <SelectRoot collection={frameworks} size="xs">
              <SelectLabel>size - xs</SelectLabel>
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
            <SelectRoot collection={frameworks} size="sm">
              <SelectLabel>size - sm</SelectLabel>
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
            <SelectRoot collection={frameworks} size="md">
              <SelectLabel>size - md</SelectLabel>
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
            <SelectRoot collection={frameworks} size="lg">
              <SelectLabel>size - lg</SelectLabel>
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
            <SelectRoot collection={frameworks} size="xl">
              <SelectLabel>size - xl</SelectLabel>
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
          </div>
        }
        code={`<div className="flex max-w-xs flex-col gap-2">
  <SelectRoot collection={frameworks} size="xs">
    <SelectLabel>size - xs</SelectLabel>
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
  <SelectRoot collection={frameworks} size="sm">
    <SelectLabel>size - sm</SelectLabel>
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
  <SelectRoot collection={frameworks} size="md">
    <SelectLabel>size - md</SelectLabel>
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
  <SelectRoot collection={frameworks} size="lg">
    <SelectLabel>size - lg</SelectLabel>
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
  <SelectRoot collection={frameworks} size="xl">
    <SelectLabel>size - xl</SelectLabel>
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
</div>`}
      />
      <Heading level={3} size="lg" className="mt-10 mb-2">
        Option Group
      </Heading>
      <Text className="mb-2">
        Use the <Code>SelectItemGroup</Code> component to group select options.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <SelectRoot collection={frameworks} className="max-w-xs">
            <SelectLabel>Select framework</SelectLabel>
            <SelectTrigger>
              <SelectValueText placeholder="Select framework" />
            </SelectTrigger>
            <SelectContent>
              <SelectItemGroup>
                <SelectItemGroupLabel>Popular Frameworks</SelectItemGroupLabel>
                <SelectItem item="react">React.js</SelectItem>
                <SelectItem item="vue">Vue.js</SelectItem>
              </SelectItemGroup>
              <SelectItemGroup>
                <SelectItemGroupLabel>Other Frameworks</SelectItemGroupLabel>
                <SelectItem item="angular">Angular</SelectItem>
                <SelectItem item="svelte">Svelte</SelectItem>
              </SelectItemGroup>
            </SelectContent>
          </SelectRoot>
        }
        code={`<SelectRoot collection={frameworks} className="max-w-xs">
  <SelectLabel>Select framework</SelectLabel>
  <SelectTrigger>
    <SelectValueText placeholder="Select framework" />
  </SelectTrigger>
  <SelectContent>
    <SelectItemGroup>
      <SelectItemGroupLabel>Popular Frameworks</SelectItemGroupLabel>
      <SelectItem item="react">React.js</SelectItem>
      <SelectItem item="vue">Vue.js</SelectItem>
    </SelectItemGroup>
    <SelectItemGroup>
      <SelectItemGroupLabel>Other Frameworks</SelectItemGroupLabel>
      <SelectItem item="angular">Angular</SelectItem>
      <SelectItem item="svelte">Svelte</SelectItem>
    </SelectItemGroup>
  </SelectContent>
</SelectRoot>`}
      />
      <Heading level={3} size="lg" className="mt-10 mb-2">
        Disabled
      </Heading>
      <Text className="mb-2">
        Use the <Code>disabled</Code> prop to disable select component.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <SelectRoot disabled collection={frameworks} className="max-w-xs">
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
        code={`<SelectRoot disabled collection={frameworks} className="max-w-xs">
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
      <Heading level={3} size="lg" className="mt-10 mb-2">
        Invalid
      </Heading>
      <Text className="mb-2">
        Here&apos;s an example of how to compose the <Code>Select</Code>{" "}
        component with the
        <Code>Field</Code> component to display an error state.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <Field
            invalid
            label="Select framework"
            errorText="This is an error"
            className="max-w-xs"
          >
            <SelectRoot collection={frameworks}>
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
          </Field>
        }
        code={`<Field
  invalid
  label="Select framework"
  errorText="This is an error"
  className="max-w-xs"
>
  <SelectRoot collection={frameworks}>
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
          <SelectRoot multiple collection={frameworks} className="max-w-xs">
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
        code={`<SelectRoot multiple collection={frameworks} className="max-w-xs">
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
      <Heading level={3} size="lg" className="mt-10 mb-2">
        Positioning
      </Heading>
      <Text className="mb-2">
        Use the <Code>positioning</Code> prop to control the underlying{" "}
        <Code>floating-ui</Code> options of the select component.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <SelectRoot
            positioning={{ placement: "top", flip: false }}
            collection={frameworks}
            className="max-w-xs"
          >
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
        code={`<SelectRoot
  positioning={{ placement: "top", flip: false }}
  collection={frameworks}
  className="max-w-xs"
>
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
      <Heading level={3} size="lg" className="mt-10 mb-2">
        Item Description
      </Heading>
      <Text className="mb-2">
        Here&apos;s an example of how to render a description for each item.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <SelectRoot collection={plans} className="max-w-xs">
            <SelectLabel>Select plan</SelectLabel>
            <SelectTrigger>
              <SelectValueText placeholder="Select plan" />
            </SelectTrigger>
            <SelectContent>
              {plans.items.map((item) => (
                <SelectItem key={item.value} item={item.value}>
                  <div className="flex flex-col">
                    <SelectItemText className="text-fg-default">
                      {item.label}
                    </SelectItemText>
                    <span>{item.description}</span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </SelectRoot>
        }
        code={`<SelectRoot collection={plans} className="max-w-xs">
  <SelectLabel>Select plan</SelectLabel>
  <SelectTrigger>
    <SelectValueText placeholder="Select plan" />
  </SelectTrigger>
  <SelectContent>
    {plans.items.map((item) => (
      <SelectItem key={item.value} item={item.value}>
        <div className="flex flex-col">
          <SelectItemText className="text-fg-default">
            {item.label}
          </SelectItemText>
          <span>{item.description}</span>
        </div>
      </SelectItem>
    ))}
  </SelectContent>
</SelectRoot>`}
      />
      <Heading level={3} size="lg" className="mt-10 mb-2">
        Avatar Select
      </Heading>
      <Text className="mb-2">
        Here&apos;s an example of how to compose the <Code>Select</Code> and the{" "}
        <Code>Avatar</Code>.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <SelectRoot
            collection={members}
            defaultValue={["jessica_jones"]}
            className="max-w-xs"
          >
            <SelectLabel>Select member</SelectLabel>
            <SelectTrigger>
              <SelectValueMembers />
            </SelectTrigger>
            <SelectContent>
              {members.items.map((item) => (
                <SelectItem
                  key={item.id}
                  item={item.id}
                  className="justify-start"
                >
                  <Avatar src={item.avatar} alt={item.name} size="xs" square />
                  {item.name}
                </SelectItem>
              ))}
            </SelectContent>
          </SelectRoot>
        }
        code={`function SelectValueMembers() {
  const select = useSelectContext();
  const items = select.selectedItems as Array<{
    name: string;
    avatar: string;
  }>;
  const { name, avatar } = items[0];

  return (
    <SelectValueText placeholder="Select member">
      <div className="flex items-center gap-1">
        <Avatar src={avatar} alt={name} size="xs" square />
        {name}
      </div>
    </SelectValueText>
  );
}

<SelectRoot
  collection={members}
  defaultValue={["jessica_jones"]}
  className="max-w-xs"
>
  <SelectLabel>Select member</SelectLabel>
  <SelectTrigger>
    <SelectValueMembers />
  </SelectTrigger>
  <SelectContent>
    {members.items.map((item) => (
      <SelectItem
        key={item.id}
        item={item.id}
        className="justify-start"
      >
        <Avatar src={item.avatar} alt={item.name} size="xs" square />
        {item.name}
      </SelectItem>
    ))}
  </SelectContent>
</SelectRoot>`}
      />
    </>
  );
}
