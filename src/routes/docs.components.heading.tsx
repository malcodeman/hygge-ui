import { Button } from "@/components/button";
import { Heading } from "@/components/heading";
import { Highlight } from "@/components/highlight";
import { Code, Text } from "@/components/text";
import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "app/components/page-header";
import { PagePreviewCodeTabs } from "app/components/page-preview-code-tabs";
import { LuArrowRight } from "react-icons/lu";

export const Route = createFileRoute("/docs/components/heading")({
  component: HeadingPage,
});

function HeadingPage() {
  return (
    <>
      <PageHeader
        title="Heading"
        description="Used to render semantic HTML heading elements."
        githubLink="https://github.com/malcodeman/hygge-ui/blob/main/src/components/heading.tsx"
        className="mb-2"
        verified
      />
      <PagePreviewCodeTabs
        preview={<Heading>The quick brown fox jumps over the lazy dog</Heading>}
        code={`<Heading>The quick brown fox jumps over the lazy dog</Heading>`}
      />
      <Heading level={2} className="mt-10 mb-2">
        Examples
      </Heading>
      <Heading level={3} size="lg" className="mb-2">
        Sizes
      </Heading>
      <Text className="mb-2">
        Use the <Code>size</Code> prop to change the size of the heading
        component.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <div className="flex flex-col gap-2">
            <Heading size="sm">Heading (sm)</Heading>
            <Heading size="base">Heading (base)</Heading>
            <Heading size="lg">Heading (lg)</Heading>
            <Heading size="xl">Heading (xl)</Heading>
            <Heading size="2xl">Heading (2xl)</Heading>
            <Heading size="3xl">Heading (3xl)</Heading>
            <Heading size="4xl">Heading (4xl)</Heading>
            <Heading size="5xl">Heading (5xl)</Heading>
            <Heading size="6xl">Heading (6xl)</Heading>
          </div>
        }
        code={`<div className="flex flex-col gap-2">
  <Heading size="sm">Heading (sm)</Heading>
  <Heading size="base">Heading (base)</Heading>
  <Heading size="lg">Heading (lg)</Heading>
  <Heading size="xl">Heading (xl)</Heading>
  <Heading size="2xl">Heading (2xl)</Heading>
  <Heading size="3xl">Heading (3xl)</Heading>
  <Heading size="4xl">Heading (4xl)</Heading>
  <Heading size="5xl">Heading (5xl)</Heading>
  <Heading size="6xl">Heading (6xl)</Heading>
</div>`}
      />
      <Heading level={3} size="lg" className="mt-10 mb-2">
        Highlight
      </Heading>
      <Text className="mb-2">
        Compose the <Code>Heading</Code> component with the{" "}
        <Code>Highlight</Code> component to highlight text.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <div>
            <Heading size="3xl">
              <Highlight
                query="with speed"
                text="Create accessible React apps with speed"
                colorPalette="teal"
              />
            </Heading>
            <Text>
              Hygge UI is a simple, modular and accessible component library
              that gives you the building blocks you need.
            </Text>
          </div>
        }
        code={`<div>
  <Heading size="3xl">
    <Highlight
      query="with speed"
      text="Create accessible React apps with speed"
      colorPalette="teal"
    />
  </Heading>
  <Text>
    Hygge UI is a simple, modular and accessible component library that gives
    you the building blocks you need.
  </Text>
</div>`}
      />
      <Heading level={3} size="lg" className="mt-10 mb-2">
        Composition
      </Heading>
      <Text className="mb-2">
        Use the <Code>Heading</Code> component to compose other components.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <div>
            <Heading size="2xl">Modern payments for Stores</Heading>
            <Text className="mb-2">
              PayMe helps startups get paid by anyone, anywhere in the world
            </Text>
            <Button>
              Create account <LuArrowRight size={16} />
            </Button>
          </div>
        }
        code={`<div>
  <Heading size="2xl">Modern payments for Stores</Heading>
  <Text className="mb-2">
    PayMe helps startups get paid by anyone, anywhere in the world
  </Text>
  <Button>
    Create account <LuArrowRight size={16} />
  </Button>
</div>`}
      />
    </>
  );
}

export default HeadingPage;
