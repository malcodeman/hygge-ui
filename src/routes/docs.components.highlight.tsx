import { Heading } from "@/components/heading";
import { Highlight } from "@/components/highlight";
import { Code, Text } from "@/components/text";
import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "app/components/page-header";
import { PagePreviewCodeTabs } from "app/components/page-preview-code-tabs";

export const Route = createFileRoute("/docs/components/highlight")({
  component: HighlightPage,
});

function HighlightPage() {
  return (
    <>
      <PageHeader
        title="Highlight"
        description="Used to highlight substrings of a text."
        githubLink="https://github.com/malcodeman/hygge-ui/blob/main/src/components/highlight.tsx"
        className="mb-2"
        verified
      />
      <PagePreviewCodeTabs
        preview={
          <Text>
            <Highlight
              query="spotlight"
              text="With the Highlight component, you can spotlight words."
            />
          </Text>
        }
        code={`<Text>
  <Highlight
    query="spotlight"
    text="With the Highlight component, you can spotlight words."
  />
</Text>`}
      />
      <Heading level={2} className="mt-10 mb-2">
        Examples
      </Heading>
      <Heading level={3} size="lg" className="mb-2">
        Multiple
      </Heading>
      <Text className="mb-2">
        Pass an array of strings to the <Code>query</Code> prop to highlight
        multiple substrings.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <Heading>
            <Highlight
              query={["spotlight", "emphasize", "accentuate"]}
              text="With the Highlight component, you can spotlight, emphasize and accentuate words."
              colorPalette="teal"
            />
          </Heading>
        }
        code={`<Heading>
  <Highlight
    query={["spotlight", "emphasize", "accentuate"]}
    text="With the Highlight component, you can spotlight, emphasize and accentuate words."
    colorPalette="teal"
  />
</Heading>`}
      />
      <Heading level={3} size="lg" className="mt-10 mb-2">
        Color
      </Heading>
      <Text className="mb-2">
        Use the <Code>colorPalette</Code> prop to change the color of the
        highlighted text.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <div className="grid grid-cols-[8ch_1fr] items-center gap-y-2">
            <Text>gray</Text>
            <Text>
              <Highlight
                query="highlighted"
                text="This is some highlighted text."
                colorPalette="gray"
              />
            </Text>
            <Text>orange</Text>
            <Text>
              <Highlight
                query="highlighted"
                text="This is some highlighted text."
                colorPalette="orange"
              />
            </Text>
            <Text>teal</Text>
            <Text>
              <Highlight
                query="highlighted"
                text="This is some highlighted text."
                colorPalette="teal"
              />
            </Text>
            <Text>green</Text>
            <Text>
              <Highlight
                query="highlighted"
                text="This is some highlighted text."
                colorPalette="green"
              />
            </Text>
            <Text>red</Text>
            <Text>
              <Highlight
                query="highlighted"
                text="This is some highlighted text."
                colorPalette="red"
              />
            </Text>
          </div>
        }
        code={`<div className="grid grid-cols-[8ch_1fr] items-center gap-y-2">
  <Text>gray</Text>
  <Text>
    <Highlight
      query="highlighted"
      text="This is some highlighted text."
      colorPalette="gray"
    />
  </Text>
  <Text>orange</Text>
  <Text>
    <Highlight
      query="highlighted"
      text="This is some highlighted text."
      colorPalette="orange"
    />
  </Text>
  <Text>teal</Text>
  <Text>
    <Highlight
      query="highlighted"
      text="This is some highlighted text."
      colorPalette="teal"
    />
  </Text>
  <Text>green</Text>
  <Text>
    <Highlight
      query="highlighted"
      text="This is some highlighted text."
      colorPalette="green"
    />
  </Text>
  <Text>red</Text>
  <Text>
    <Highlight
      query="highlighted"
      text="This is some highlighted text."
      colorPalette="red"
    />
  </Text>
</div>`}
      />
    </>
  );
}
