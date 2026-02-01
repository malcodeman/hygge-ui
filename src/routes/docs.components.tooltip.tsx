import { Avatar } from "hygge-ui/avatar";
import { Button } from "hygge-ui/button";
import { Checkbox } from "hygge-ui/checkbox";
import { Heading } from "hygge-ui/heading";
import { Code, Text } from "hygge-ui/text";
import { Tooltip } from "hygge-ui/tooltip";
import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "app/components/page-header";
import { PagePreviewCodeTabs } from "app/components/page-preview-code-tabs";
import { useId } from "react";

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
  const avatarId = useId();
  const checkboxId = useId();

  return (
    <>
      <PageHeader
        title="Tooltip"
        description="Used to display additional information when a user hovers over an element."
        githubLink="https://github.com/malcodeman/hygge-ui/blob/main/src/components/tooltip.tsx"
        className="mb-2"
        verified
      />
      <PagePreviewCodeTabs
        preview={
          <Tooltip content="This is the tooltip content">
            <Button variant="outline" size="sm">
              Hover me
            </Button>
          </Tooltip>
        }
        code={`<Tooltip content="This is the tooltip content">
  <Button variant="outline" size="sm">
    Hover me
  </Button>
</Tooltip>`}
      />
      <Heading level={2} className="mt-10 mb-2">
        Examples
      </Heading>
      <Heading level={3} size="lg" className="mb-2">
        Arrow
      </Heading>
      <Text className="mb-2">
        Use the <Code>showArrow</Code> prop to show an arrow on the tooltip.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <Tooltip showArrow content="This is the tooltip content">
            <Button variant="outline" size="sm">
              Hover me
            </Button>
          </Tooltip>
        }
        code={`<Tooltip showArrow content="This is the tooltip content">
  <Button variant="outline" size="sm">
    Hover me
  </Button>
</Tooltip>`}
      />
      <Heading level={3} size="lg" className="mt-10 mb-2">
        Placement
      </Heading>
      <Text className="mb-2">
        Use the <Code>positioning.placement</Code> prop to change the position
        of the tooltip.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <Tooltip
            positioning={{ placement: "right-end" }}
            content="This is the tooltip content"
          >
            <Button variant="outline" size="sm">
              Hover me
            </Button>
          </Tooltip>
        }
        code={`<Tooltip
  positioning={{ placement: "right-end" }}
  content="This is the tooltip content"
>
  <Button variant="outline" size="sm">
    Hover me
  </Button>
</Tooltip>`}
      />
      <Heading level={3} size="lg" className="mt-10 mb-2">
        Offset
      </Heading>
      <Text className="mb-2">
        Use the <Code>positioning.offset</Code> prop to change the offset of the
        tooltip.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <Tooltip
            positioning={{ offset: { mainAxis: 4, crossAxis: 4 } }}
            content="This is the tooltip content"
          >
            <Button variant="outline" size="sm">
              Hover me
            </Button>
          </Tooltip>
        }
        code={`<Tooltip
  positioning={{ offset: { mainAxis: 4, crossAxis: 4 } }}
  content="This is the tooltip content"
>
  <Button variant="outline" size="sm">
    Hover me
  </Button>
</Tooltip>`}
      />
      <Heading level={3} size="lg" className="mt-10 mb-2">
        Delay
      </Heading>
      <Text className="mb-2">
        Use the <Code>openDelay</Code> and <Code>closeDelay</Code> prop to
        change the delay of the tooltip.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <Tooltip
            openDelay={500}
            closeDelay={100}
            content="This is the tooltip content"
          >
            <Button variant="outline" size="sm">
              Delay (open: 500ms, close: 100ms)
            </Button>
          </Tooltip>
        }
        code={`<Tooltip
  openDelay={500}
  closeDelay={100}
  content="This is the tooltip content"
>
  <Button variant="outline" size="sm">
    Delay (open: 500ms, close: 100ms)
  </Button>
</Tooltip>`}
      />
      <Heading level={3} size="lg" className="mt-10 mb-2">
        Interactive
      </Heading>
      <Text className="mb-2">
        Use the <Code>interactive</Code> prop to keep the tooltip open when
        interacting with its content.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <Tooltip interactive content="This is the tooltip content">
            <Button variant="outline" size="sm">
              Hover me
            </Button>
          </Tooltip>
        }
        code={`<Tooltip interactive content="This is the tooltip content">
  <Button variant="outline" size="sm">
    Hover me
  </Button>
</Tooltip>`}
      />
      <Heading level={3} size="lg" className="mt-10 mb-2">
        Disable
      </Heading>
      <Text className="mb-2">
        Use the <Code>disabled</Code> prop to disable the tooltip. When
        disabled, the tooltip will not be shown.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <Tooltip disabled content="This is the tooltip content">
            <Button variant="outline" size="sm">
              Hover me
            </Button>
          </Tooltip>
        }
        code={`<Tooltip disabled content="This is the tooltip content">
  <Button variant="outline" size="sm">
    Hover me
  </Button>
</Tooltip>`}
      />
      <Heading level={3} size="lg" className="mt-10 mb-2">
        With Avatar
      </Heading>
      <Text className="mb-2">
        Here&apos;s an example of how to use the <Code>Tooltip</Code>
        with an
        <Code>Avatar</Code> component.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <Tooltip
            ids={{ trigger: avatarId }}
            content="Segun Adebayo is online"
          >
            <Avatar
              ids={{ root: avatarId }}
              src="https://bit.ly/sage-adebayo"
            />
          </Tooltip>
        }
        code={`<Tooltip
  ids={{ trigger: avatarId }}
  content="Segun Adebayo is online"
>
  <Avatar
    ids={{ root: avatarId }}
    src="https://bit.ly/sage-adebayo"
  />
</Tooltip>`}
      />
      <Heading level={3} size="lg" className="mt-10 mb-2">
        With Checkbox
      </Heading>
      <Text className="mb-2">
        Here&apos;s an example of how to use the <Code>Tooltip</Code>
        with a<Code>Checkbox</Code> component.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <Tooltip
            ids={{ trigger: checkboxId }}
            content="This is the tooltip content"
          >
            <Checkbox ids={{ root: checkboxId }} label="Welcome" />
          </Tooltip>
        }
        code={`<Tooltip
  ids={{ trigger: checkboxId }}
  content="This is the tooltip content"
>
  <Checkbox ids={{ root: checkboxId }} label="Welcome" />
</Tooltip>`}
      />
    </>
  );
}
