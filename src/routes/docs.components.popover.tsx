import { Button } from "@/components/button";
import { Field } from "@/components/field";
import { Heading } from "@/components/heading";
import { Input } from "@/components/input";
import {
  PopoverContent,
  PopoverDescription,
  PopoverRoot,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/popover";
import { Code, Text } from "@/components/text";
import { Textarea } from "@/components/textarea";
import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "app/components/page-header";
import { PagePreviewCodeTabs } from "app/components/page-preview-code-tabs";

export const Route = createFileRoute("/docs/components/popover")({
  component: PopoverPage,
  head: () => ({
    meta: [
      {
        title: "Popover | Hygge UI",
      },
    ],
  }),
});

function PopoverPage() {
  return (
    <>
      <PageHeader
        title="Popover"
        description="Used to show detailed information inside a pop-up."
        githubLink="https://github.com/malcodeman/hygge-ui/blob/main/src/components/popover.tsx"
        className="mb-2"
        verified
      />
      <PagePreviewCodeTabs
        preview={
          <PopoverRoot>
            <PopoverTrigger asChild>
              <Button variant="outline" size="sm">
                Click me
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverTitle>Naruto Form</PopoverTitle>
              <PopoverDescription className="my-4">
                Naruto is a Japanese manga series written and illustrated by
                Masashi Kishimoto.
              </PopoverDescription>
              <Input placeholder="Your fav. character" size="sm" />
            </PopoverContent>
          </PopoverRoot>
        }
        code={`<PopoverRoot>
  <PopoverTrigger asChild>
    <Button variant="outline" size="sm">
      Click me
    </Button>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverTitle>Naruto Form</PopoverTitle>
    <PopoverDescription className="my-4">
      Naruto is a Japanese manga series written and illustrated by
      Masashi Kishimoto.
    </PopoverDescription>
    <Input placeholder="Your fav. character" size="sm" />
  </PopoverContent>
</PopoverRoot>`}
      />
      <Heading level={2} className="mt-10 mb-2">
        Examples
      </Heading>
      <Heading level={3} size="lg" className="mb-2">
        Arrow
      </Heading>
      <Text className="mb-2">
        Use the <Code>showArrow</Code> prop to show an arrow on the popover.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <PopoverRoot showArrow>
            <PopoverTrigger asChild>
              <Button variant="outline" size="sm">
                Click me
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverTitle>Naruto Form</PopoverTitle>
              <PopoverDescription>
                Naruto is a Japanese manga series written and illustrated by
                Masashi Kishimoto.
              </PopoverDescription>
            </PopoverContent>
          </PopoverRoot>
        }
        code={`<PopoverRoot showArrow>
  <PopoverTrigger asChild>
    <Button variant="outline" size="sm">
      Click me
    </Button>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverTitle>Naruto Form</PopoverTitle>
    <PopoverDescription>
      Naruto is a Japanese manga series written and illustrated by
      Masashi Kishimoto.
    </PopoverDescription>
  </PopoverContent>
</PopoverRoot>`}
      />
      <Heading level={3} size="lg" className="mt-10 mb-2">
        Lazy Mount
      </Heading>
      <Text className="mb-2">
        Use the <Code>lazyMounted</Code> and/or <Code>unmountOnExit</Code> prop
        to defer the mounting of the popover content until it's opened.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <PopoverRoot lazyMount unmountOnExit>
            <PopoverTrigger asChild>
              <Button variant="outline" size="sm">
                Click me
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverTitle>Naruto Form</PopoverTitle>
              <PopoverDescription>
                Naruto is a Japanese manga series written and illustrated by
                Masashi Kishimoto.
              </PopoverDescription>
            </PopoverContent>
          </PopoverRoot>
        }
        code={`<PopoverRoot lazyMount unmountOnExit>
  <PopoverTrigger asChild>
    <Button variant="outline" size="sm">
      Click me
    </Button>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverTitle>Naruto Form</PopoverTitle>
    <PopoverDescription>
      Naruto is a Japanese manga series written and illustrated by
      Masashi Kishimoto.
    </PopoverDescription>
  </PopoverContent>
</PopoverRoot>`}
      />
      <Heading level={3} size="lg" className="mt-10 mb-2">
        Placement
      </Heading>
      <Text className="mb-2">
        Use the <Code>positioning.placement</Code> prop to configure the
        underlying floating-ui positioning logic.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <PopoverRoot positioning={{ placement: "bottom-end" }}>
            <PopoverTrigger asChild>
              <Button variant="outline" size="sm">
                Click me
              </Button>
            </PopoverTrigger>
            <PopoverContent>Some content</PopoverContent>
          </PopoverRoot>
        }
        code={`<PopoverRoot positioning={{ placement: "bottom-end" }}>
  <PopoverTrigger asChild>
    <Button variant="outline" size="sm">
      Click me
    </Button>
  </PopoverTrigger>
  <PopoverContent>Some content</PopoverContent>
</PopoverRoot>`}
      />
      <Heading level={3} size="lg" className="mt-10 mb-2">
        Offset
      </Heading>
      <Text className="mb-2">
        Use the <Code>positioning.offset</Code> prop to configure the underlying
        floating-ui positioning logic.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <PopoverRoot positioning={{ offset: { crossAxis: 0, mainAxis: 0 } }}>
            <PopoverTrigger asChild>
              <Button variant="outline" size="sm">
                Click me
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              This popover has a custom offset from its trigger
            </PopoverContent>
          </PopoverRoot>
        }
        code={`<PopoverRoot positioning={{ offset: { crossAxis: 0, mainAxis: 0 } }}>
  <PopoverTrigger asChild>
    <Button variant="outline" size="sm">
      Click me
    </Button>
  </PopoverTrigger>
  <PopoverContent>
    This popover has a custom offset from its trigger
  </PopoverContent>
</PopoverRoot>`}
      />
      <Heading level={3} size="lg" className="mt-10 mb-2">
        Same Width
      </Heading>
      <Text className="mb-2">
        Use the <Code>positioning.sameWidth</Code> prop to make the popover
        content the same width as the trigger.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <PopoverRoot positioning={{ sameWidth: true }}>
            <PopoverTrigger asChild>
              <Button variant="outline" size="sm" className="min-w-xs">
                Click me
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              This popover has a custom offset from its trigger
            </PopoverContent>
          </PopoverRoot>
        }
        code={`<PopoverRoot positioning={{ sameWidth: true }}>
  <PopoverTrigger asChild>
    <Button variant="outline" size="sm" className="min-w-xs">
      Click me
    </Button>
  </PopoverTrigger>
  <PopoverContent>
    This popover has a custom offset from its trigger
  </PopoverContent>
</PopoverRoot>`}
      />
      <Heading level={3} size="lg" className="mt-10 mb-2">
        Nested Popover
      </Heading>
      <Text className="mb-2">
        When nesting floating elements like popover, select, menu, inside of the
        popover, avoid portalling them to the document's body.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <PopoverRoot>
            <PopoverTrigger asChild>
              <Button variant="outline" size="sm">
                Click me
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <Text className="mb-4">
                Naruto is a Japanese manga series written and illustrated by
                Masashi Kishimoto.
              </Text>
              <PopoverRoot>
                <PopoverTrigger asChild>
                  <Button variant="outline" size="xs">
                    Open Nested Popover
                  </Button>
                </PopoverTrigger>
                <PopoverContent>Some nested popover content</PopoverContent>
              </PopoverRoot>
            </PopoverContent>
          </PopoverRoot>
        }
        code={`<PopoverRoot>
  <PopoverTrigger asChild>
    <Button variant="outline" size="sm">
      Click me
    </Button>
  </PopoverTrigger>
  <PopoverContent>
    <Text className="mb-4">
      Naruto is a Japanese manga series written and illustrated by
      Masashi Kishimoto.
    </Text>
    <PopoverRoot>
      <PopoverTrigger asChild>
        <Button variant="outline" size="xs">
          Open Nested Popover
        </Button>
      </PopoverTrigger>
      <PopoverContent>Some nested popover content</PopoverContent>
    </PopoverRoot>
  </PopoverContent>
</PopoverRoot>`}
      />
      <Heading level={3} size="lg" className="mt-10 mb-2">
        Form
      </Heading>
      <Text className="mb-2">
        Here&apos;s an example of a popover with a form inside.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <PopoverRoot>
            <PopoverTrigger asChild>
              <Button variant="outline" size="sm">
                Click me
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <div className="flex flex-col gap-4">
                <Field label="Width">
                  <Input placeholder="40px" />
                </Field>
                <Field label="Height">
                  <Input placeholder="32px" />
                </Field>
                <Field label="Comments">
                  <Textarea placeholder="Start typing..." />
                </Field>
              </div>
            </PopoverContent>
          </PopoverRoot>
        }
        code={`<PopoverRoot>
  <PopoverTrigger asChild>
    <Button variant="outline" size="sm">
      Click me
    </Button>
  </PopoverTrigger>
  <PopoverContent>
    <div className="flex flex-col gap-4">
      <Field label="Width">
        <Input placeholder="40px" />
      </Field>
      <Field label="Height">
        <Input placeholder="32px" />
      </Field>
      <Field label="Comments">
        <Textarea placeholder="Start typing..." />
      </Field>
    </div>
  </PopoverContent>
</PopoverRoot>`}
      />
    </>
  );
}
