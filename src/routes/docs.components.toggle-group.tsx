import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "app/components/page-header";
import { PagePreviewCodeTabs } from "app/components/page-preview-code-tabs";
import { Heading } from "hygge-ui/heading";
import { Code, Text } from "hygge-ui/text";
import { ToggleGroupItem, ToggleGroupRoot } from "hygge-ui/toggle-group";
import {
  LuAlignCenter,
  LuAlignLeft,
  LuAlignRight,
  LuAlignJustify,
  LuBold,
  LuItalic,
  LuUnderline,
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
        verified
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
      <Heading level={2} className="mt-10 mb-2">
        Examples
      </Heading>
      <Heading level={3} size="lg" className="mb-2">
        Sizes
      </Heading>
      <Text className="mb-2">
        Use the <Code>size</Code> prop to change the size of the toggle group.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <div className="flex flex-col items-start gap-2">
            <ToggleGroupRoot size="xs">
              <ToggleGroupItem value="left">
                <LuAlignLeft size={16} />
              </ToggleGroupItem>
              <ToggleGroupItem value="center">
                <LuAlignCenter size={16} />
              </ToggleGroupItem>
              <ToggleGroupItem value="right">
                <LuAlignRight size={16} />
              </ToggleGroupItem>
            </ToggleGroupRoot>
            <ToggleGroupRoot size="sm">
              <ToggleGroupItem value="left">
                <LuAlignLeft size={16} />
              </ToggleGroupItem>
              <ToggleGroupItem value="center">
                <LuAlignCenter size={16} />
              </ToggleGroupItem>
              <ToggleGroupItem value="right">
                <LuAlignRight size={16} />
              </ToggleGroupItem>
            </ToggleGroupRoot>
            <ToggleGroupRoot size="md">
              <ToggleGroupItem value="left">
                <LuAlignLeft size={16} />
              </ToggleGroupItem>
              <ToggleGroupItem value="center">
                <LuAlignCenter size={16} />
              </ToggleGroupItem>
              <ToggleGroupItem value="right">
                <LuAlignRight size={16} />
              </ToggleGroupItem>
            </ToggleGroupRoot>
            <ToggleGroupRoot size="lg">
              <ToggleGroupItem value="left">
                <LuAlignLeft size={16} />
              </ToggleGroupItem>
              <ToggleGroupItem value="center">
                <LuAlignCenter size={16} />
              </ToggleGroupItem>
              <ToggleGroupItem value="right">
                <LuAlignRight size={16} />
              </ToggleGroupItem>
            </ToggleGroupRoot>
            <ToggleGroupRoot size="xl">
              <ToggleGroupItem value="left">
                <LuAlignLeft size={16} />
              </ToggleGroupItem>
              <ToggleGroupItem value="center">
                <LuAlignCenter size={16} />
              </ToggleGroupItem>
              <ToggleGroupItem value="right">
                <LuAlignRight size={16} />
              </ToggleGroupItem>
            </ToggleGroupRoot>
          </div>
        }
        code={`<div className="flex flex-col items-start gap-2">
  <ToggleGroupRoot size="xs">
    <ToggleGroupItem value="left">
      <LuAlignLeft size={16} />
    </ToggleGroupItem>
    <ToggleGroupItem value="center">
      <LuAlignCenter size={16} />
    </ToggleGroupItem>
    <ToggleGroupItem value="right">
      <LuAlignRight size={16} />
    </ToggleGroupItem>
  </ToggleGroupRoot>
  <ToggleGroupRoot size="sm">
    <ToggleGroupItem value="left">
      <LuAlignLeft size={16} />
    </ToggleGroupItem>
    <ToggleGroupItem value="center">
      <LuAlignCenter size={16} />
    </ToggleGroupItem>
    <ToggleGroupItem value="right">
      <LuAlignRight size={16} />
    </ToggleGroupItem>
  </ToggleGroupRoot>
  <ToggleGroupRoot size="md">
    <ToggleGroupItem value="left">
      <LuAlignLeft size={16} />
    </ToggleGroupItem>
    <ToggleGroupItem value="center">
      <LuAlignCenter size={16} />
    </ToggleGroupItem>
    <ToggleGroupItem value="right">
      <LuAlignRight size={16} />
    </ToggleGroupItem>
  </ToggleGroupRoot>
  <ToggleGroupRoot size="lg">
    <ToggleGroupItem value="left">
      <LuAlignLeft size={16} />
    </ToggleGroupItem>
    <ToggleGroupItem value="center">
      <LuAlignCenter size={16} />
    </ToggleGroupItem>
    <ToggleGroupItem value="right">
      <LuAlignRight size={16} />
    </ToggleGroupItem>
  </ToggleGroupRoot>
  <ToggleGroupRoot size="xl">
    <ToggleGroupItem value="left">
      <LuAlignLeft size={16} />
    </ToggleGroupItem>
    <ToggleGroupItem value="center">
      <LuAlignCenter size={16} />
    </ToggleGroupItem>
    <ToggleGroupItem value="right">
      <LuAlignRight size={16} />
    </ToggleGroupItem>
  </ToggleGroupRoot>
</div>`}
      />
      <Heading level={3} size="lg" className="mt-10 mb-2">
        Disabled
      </Heading>
      <Text className="mb-2">
        Use the <Code>disabled</Code> prop to disable the toggle group.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <ToggleGroupRoot disabled>
            <ToggleGroupItem value="left">
              <LuAlignLeft size={16} />
            </ToggleGroupItem>
            <ToggleGroupItem value="center">
              <LuAlignCenter size={16} />
            </ToggleGroupItem>
            <ToggleGroupItem value="right">
              <LuAlignRight size={16} />
            </ToggleGroupItem>
          </ToggleGroupRoot>
        }
        code={`<ToggleGroupRoot disabled>
  <ToggleGroupItem value="left">
    <LuAlignLeft size={16} />
  </ToggleGroupItem>
  <ToggleGroupItem value="center">
    <LuAlignCenter size={16} />
  </ToggleGroupItem>
  <ToggleGroupItem value="right">
    <LuAlignRight size={16} />
  </ToggleGroupItem>
</ToggleGroupRoot>`}
      />
      <Heading level={3} size="lg" className="mt-10 mb-2">
        Multiple
      </Heading>
      <Text className="mb-2">
        Use the <Code>multiple</Code> prop to allow multiple selections.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <ToggleGroupRoot multiple>
            <ToggleGroupItem value="bold">
              <LuBold size={16} />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic">
              <LuItalic size={16} />
            </ToggleGroupItem>
            <ToggleGroupItem value="underline">
              <LuUnderline size={16} />
            </ToggleGroupItem>
          </ToggleGroupRoot>
        }
        code={`<ToggleGroupRoot multiple>
  <ToggleGroupItem value="bold">
    <LuBold size={16} />
  </ToggleGroupItem>
  <ToggleGroupItem value="italic">
    <LuItalic size={16} />
  </ToggleGroupItem>
  <ToggleGroupItem value="underline">
    <LuUnderline size={16} />
  </ToggleGroupItem>
</ToggleGroupRoot>`}
      />
    </>
  );
}
