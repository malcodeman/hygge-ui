import { LuCheck, LuX } from "react-icons/lu";
import { Heading } from "@/components/heading";
import { Tag } from "@/components/tag";
import { Code, Text } from "@/components/text";
import { PageHeader } from "app/components/page-header";
import { PagePreviewCodeTabs } from "app/components/page-preview-code-tabs";
import { Avatar } from "@/components/avatar";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/docs/components/tag")({
  component: TagPage,
});

function TagPage() {
  return (
    <>
      <PageHeader
        title="Tag"
        description="Used for categorizing or labeling content."
        githubLink="https://github.com/malcodeman/hygge-ui/blob/main/src/components/tag.tsx"
        className="mb-2"
        verified
      />
      <PagePreviewCodeTabs
        preview={
          <div className="flex gap-2">
            <Tag>Plain Tag</Tag>
            <Tag>
              Closable Tag <LuX />
            </Tag>
          </div>
        }
        code={`<div className="flex gap-2">
  <Tag>Plain Tag</Tag>
  <Tag>Closable Tag</Tag>
</div>`}
      />
      <Heading level={2} className="mt-10 mb-2">
        Examples
      </Heading>
      <Heading level={3} size="lg" className="mb-2">
        Sizes
      </Heading>
      <Text className="mb-2">
        Use the <Code>size</Code> prop to change the size of the tag.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <Tag size="xs">Extra Small</Tag>
              <Tag size="xs">
                Extra Small <LuX />
              </Tag>
              <Tag size="xs">
                Extra Small <LuCheck />
              </Tag>
            </div>
            <div className="flex gap-2">
              <Tag size="sm">Small</Tag>
              <Tag size="sm">
                Small <LuX />
              </Tag>
              <Tag size="sm">
                Small <LuCheck />
              </Tag>
            </div>
            <div className="flex gap-2">
              <Tag size="md">Medium</Tag>
              <Tag size="md">
                Medium <LuX />
              </Tag>
              <Tag size="md">
                Medium <LuCheck />
              </Tag>
            </div>
            <div className="flex gap-2">
              <Tag size="lg">Large</Tag>
              <Tag size="lg">
                Large <LuX />
              </Tag>
              <Tag size="lg">
                Large <LuCheck />
              </Tag>
            </div>
            <div className="flex gap-2">
              <Tag size="xl">Extra Large</Tag>
              <Tag size="xl">
                Extra Large <LuX />
              </Tag>
              <Tag size="xl">
                Extra Large <LuCheck />
              </Tag>
            </div>
          </div>
        }
        code={`<div className="flex flex-col gap-2">
  <div className="flex gap-2">
    <Tag size="xs">Extra Small</Tag>
    <Tag size="xs">Extra Small <LuX /></Tag>
    <Tag size="xs">Extra Small <LuCheck /></Tag>
  </div>
  <div className="flex gap-2">
    <Tag size="sm">Small</Tag>
    <Tag size="sm">Small <LuX /></Tag>
    <Tag size="sm">Small <LuCheck /></Tag>
  </div>
  <div className="flex gap-2">
    <Tag size="md">Medium</Tag>
    <Tag size="md">Medium <LuX /></Tag>
    <Tag size="md">Medium <LuCheck /></Tag>
  </div>
  <div className="flex gap-2">
    <Tag size="lg">Large</Tag>
    <Tag size="lg">Large <LuX /></Tag>
    <Tag size="lg">Large <LuCheck /></Tag>
  </div>
  <div className="flex gap-2">
    <Tag size="xl">Extra Large</Tag>
    <Tag size="xl">Extra Large <LuX /></Tag>
    <Tag size="xl">Extra Large <LuCheck /></Tag>
  </div>
</div>`}
      />
      <Heading level={3} size="lg" className="mt-10 mb-2">
        Colors
      </Heading>
      <Text className="mb-2">
        Use the <Code>colorPalette</Code> prop to change the color of the tag.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <div className="grid grid-cols-[8ch_auto_auto_auto] items-center gap-2">
            <Text>gray</Text>
            <Tag colorPalette="gray">Content</Tag>
            <Tag colorPalette="gray">
              Content <LuX />
            </Tag>
            <Tag colorPalette="gray">
              Content <LuCheck />
            </Tag>
            <Text>orange</Text>
            <Tag colorPalette="orange">Content</Tag>
            <Tag colorPalette="orange">
              Content <LuX />
            </Tag>
            <Tag colorPalette="orange">
              Content <LuCheck />
            </Tag>
            <Text>teal</Text>
            <Tag colorPalette="teal">Content</Tag>
            <Tag colorPalette="teal">
              Content <LuX />
            </Tag>
            <Tag colorPalette="teal">
              Content <LuCheck />
            </Tag>
            <Text>green</Text>
            <Tag colorPalette="green">Content</Tag>
            <Tag colorPalette="green">
              Content <LuX />
            </Tag>
            <Tag colorPalette="green">
              Content <LuCheck />
            </Tag>
            <Text>red</Text>
            <Tag colorPalette="red">Content</Tag>
            <Tag colorPalette="red">
              Content <LuX />
            </Tag>
            <Tag colorPalette="red">
              Content <LuCheck />
            </Tag>
          </div>
        }
        code={`<div className="grid grid-cols-[8ch_auto_auto_auto] items-center gap-2">
  <Text>gray</Text>
  <Tag colorPalette="gray">Content</Tag>
  <Tag colorPalette="gray">Content <LuX /></Tag>
  <Tag colorPalette="gray">Content <LuCheck /></Tag>
  <Text>orange</Text>
  <Tag colorPalette="orange">Content</Tag>
  <Tag colorPalette="orange">Content <LuX /></Tag>
  <Tag colorPalette="orange">Content <LuCheck /></Tag>
  <Text>teal</Text>
  <Tag colorPalette="teal">Content</Tag>
  <Tag colorPalette="teal">Content <LuX /></Tag>
  <Tag colorPalette="teal">Content <LuCheck /></Tag>
  <Text>green</Text>
  <Tag colorPalette="green">Content</Tag>
  <Tag colorPalette="green">Content <LuX /></Tag>
  <Tag colorPalette="green">Content <LuCheck /></Tag>
  <Text>red</Text>
  <Tag colorPalette="red">Content</Tag>
  <Tag colorPalette="red">Content <LuX /></Tag>
  <Tag colorPalette="red">Content <LuCheck /></Tag>
</div>`}
      />
      <Heading level={3} size="lg" className="mt-10 mb-2">
        Avatar
      </Heading>
      <Text className="mb-2">
        The tag component has been designed to work well with the{" "}
        <Code>Avatar</Code> component.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <div className="flex items-center gap-2">
            <Tag size="xs" className="rounded-full">
              <Avatar src="https://i.pravatar.cc/300?u=1" size="xs" />
              Emily xs
            </Tag>
            <Tag size="sm" className="rounded-full">
              <Avatar src="https://i.pravatar.cc/300?u=1" size="sm" />
              Emily sm
            </Tag>
            <Tag size="md" className="rounded-full">
              <Avatar src="https://i.pravatar.cc/300?u=1" size="md" />
              Emily md
            </Tag>
            <Tag size="lg" className="rounded-full">
              <Avatar src="https://i.pravatar.cc/300?u=1" size="lg" />
              Emily lg
            </Tag>
            <Tag size="xl" className="rounded-full">
              <Avatar src="https://i.pravatar.cc/300?u=1" size="xl" />
              Emily xl
            </Tag>
          </div>
        }
        code={`<div className="flex items-center gap-2">
  <Tag size="xs" className="rounded-full">
    <Avatar src="https://i.pravatar.cc/300?u=1" size="xs" />
    Emily xs
  </Tag>
  <Tag size="sm" className="rounded-full">
    <Avatar src="https://i.pravatar.cc/300?u=1" size="sm" />
    Emily sm
  </Tag>
  <Tag size="md" className="rounded-full">
    <Avatar src="https://i.pravatar.cc/300?u=1" size="md" />
    Emily md
  </Tag>
  <Tag size="lg" className="rounded-full">
    <Avatar src="https://i.pravatar.cc/300?u=1" size="lg" />
    Emily lg
  </Tag>
  <Tag size="xl" className="rounded-full">
    <Avatar src="https://i.pravatar.cc/300?u=1" size="xl" />
    Emily xl
  </Tag>
</div>`}
      />
    </>
  );
}
