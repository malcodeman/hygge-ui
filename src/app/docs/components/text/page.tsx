import { Card } from "@/components/card";
import { CodeBlock } from "@/components/code-block";
import { Heading } from "@/components/heading";
import { Highlight } from "@/components/highlight";
import { Strong, Text, TextLink } from "@/components/text";
import { CODE_BLOCKS } from "app/constants";

function TextPage() {
  return (
    <>
      <Heading>Text</Heading>
      <Text className="mb-6">
        For all the lorem ipsum in your Figma designs that you're definitely
        going to replace with real copy before launch.
      </Text>
      <Card className="mb-6">
        <Text>
          This feature is only available to users on the{" "}
          <Strong>Business Plan</Strong>. To upgrade, visit your{" "}
          <TextLink href="#">billing settings</TextLink>.
        </Text>
      </Card>
      <CodeBlock
        className="mb-6"
        theme={CODE_BLOCKS.THEME}
        language={CODE_BLOCKS.LANGUAGE}
        code={`import { Strong, Text, TextLink } from '@/components/text'

function Example() {
  return (
    <Text>
      This feature is only available to users on the <Strong>Business Plan</Strong>. To upgrade, visit your{' '}
      <TextLink href="#">billing settings</TextLink>.
    </Text>
  )
}
`}
      />
      <Heading level={2} className="mb-2">
        Examples
      </Heading>
      <Heading level={3}>Basic example</Heading>
      <Text className="mb-6">
        Use the <Highlight query="Text" text="Text" /> component for any custom
        paragraph text that should match the style of the text built in to your
        other components:
      </Text>
      <Card className="mb-6">
        <Text>
          Deleting your account is permanent, and your data will not be able to
          be recovered.
        </Text>
      </Card>
      <CodeBlock
        className="mb-6"
        theme={CODE_BLOCKS.THEME}
        language={CODE_BLOCKS.LANGUAGE}
        code={`import { Text } from '@/components/text'

function Example() {
  return <Text>Deleting your account is permanent, and your data will not be able to be recovered.</Text>
}
`}
      />
      <Text className="mb-6">
        Paragraphs using <Highlight query="Text" text="Text" /> are responsive
        and automatically adapt to dark mode.
      </Text>
      <Heading level={3}>With link</Heading>
      <Text className="mb-6">
        Use the <Highlight query="TextLink" text="TextLink" /> component for any
        links within a <Highlight query="Text" text="Text" /> component:
      </Text>
      <Card className="mb-6">
        <Text>
          Deleting your account is permanent, and your data will not be able to
          be recovered. If you still want to use this account in the future,
          learn about <TextLink href="#">pausing your subscription</TextLink>{" "}
          instead.
        </Text>
      </Card>
      <CodeBlock
        className="mb-6"
        theme={CODE_BLOCKS.THEME}
        language={CODE_BLOCKS.LANGUAGE}
        code={`import { Text, TextLink } from '@/components/text'

function Example() {
  return (
    <Text>
      Deleting your account is permanent, and your data will not be able to be recovered. If you still want to use this
      account in the future, learn about <TextLink href="#">pausing your subscription</TextLink> instead.
    </Text>
  )
}`}
      />
      <Heading level={3}>With strong</Heading>
      <Text className="mb-6">
        Use the <Highlight query="Strong" text="Strong" /> component for any
        text you want to emphasize within a{" "}
        <Highlight query="Text" text="Text" /> component:
      </Text>
      <Card className="mb-6">
        <Text>
          Deleting your account is permanent, and{" "}
          <Strong>your account data cannot be recovered</Strong>.
        </Text>
      </Card>
      <CodeBlock
        theme={CODE_BLOCKS.THEME}
        language={CODE_BLOCKS.LANGUAGE}
        code={`import { Strong, Text } from '@/components/text'

function Example() {
  return (
    <Text>
      Deleting your account is permanent, and <Strong>your account data cannot be recovered</Strong>.
    </Text>
  )
}`}
      />
    </>
  );
}

export default TextPage;
