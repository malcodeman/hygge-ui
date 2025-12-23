import { Heading } from "@/components/heading";
import { Code, Strong, Text, TextLink } from "@/components/text";
import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "app/components/page-header";
import { PagePreviewCodeTabs } from "app/components/page-preview-code-tabs";

export const Route = createFileRoute("/docs/components/text")({
  component: TextPage,
});

function TextPage() {
  return (
    <>
      <PageHeader
        title="Text"
        description="Used to render text and paragraphs within an interface."
        githubLink="https://github.com/malcodeman/hygge-ui/blob/main/src/components/text.tsx"
        className="mb-2"
        verified
      />
      <PagePreviewCodeTabs
        preview={
          <Text>
            This feature is only available to users on the{" "}
            <Strong>Business Plan</Strong>. To upgrade, visit your{" "}
            <TextLink href="#">billing settings</TextLink>.
          </Text>
        }
        code={`<Text>
  This feature is only available to users on the{" "}
  <Strong>Business Plan</Strong>. To upgrade, visit your{" "}
  <TextLink href="#">billing settings</TextLink>.
</Text>`}
      />
      <Heading level={2} className="mt-10 mb-2">
        Examples
      </Heading>
      <Heading level={3} size="lg" className="mb-2">
        Basic example
      </Heading>
      <Text className="mb-2">
        Use the <Code>Text</Code> component for any custom paragraph text that
        should match the style of the text built in to your other components.
      </Text>
      <PagePreviewCodeTabs
        className="mb-2"
        preview={
          <Text>
            Deleting your account is permanent, and your data will not be able
            to be recovered.
          </Text>
        }
        code={`<Text>
  Deleting your account is permanent, and your data will not be able to be recovered.
</Text>`}
      />
      <Text>
        Paragraphs using <Code>Text</Code> are responsive and automatically
        adapt and automatically adapt to dark mode.
      </Text>
      <Heading level={3} size="lg" className="mt-10 mb-2">
        With link
      </Heading>
      <Text className="mb-2">
        Use the <Code>TextLink</Code> component for any links within a{" "}
        <Code>Text</Code> component.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <Text>
            Deleting your account is permanent, and your data will not be able
            to be recovered. If you still want to use this account in the
            future, learn about{" "}
            <TextLink href="#">pausing your subscription</TextLink> instead.
          </Text>
        }
        code={`<Text>
  Deleting your account is permanent, and your data will not be able to be recovered. If you still want to use this account in the future, learn about <TextLink href="#">pausing your subscription</TextLink> instead.
</Text>`}
      />
      <Heading level={3} size="lg" className="mt-10 mb-2">
        With strong
      </Heading>
      <Text className="mb-2">
        Use the <Code>Strong</Code> component for any text you want to emphasize
        within a <Code>Text</Code> component.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <Text>
            Deleting your account is permanent, and{" "}
            <Strong>your account data cannot be recovered</Strong>.
          </Text>
        }
        code={`<Text>
  Deleting your account is permanent, and <Strong>your account data cannot be recovered</Strong>.
</Text>`}
      />
      <Heading level={3} size="lg" className="mt-10 mb-2">
        With code
      </Heading>
      <Text className="mb-2">
        Use the <Code>Code</Code> component for any inline code symbols within a{" "}
        <Code>Text</Code> component.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <Text>
            Your new API token is <Code>BaVrRKpRMS_ndKU</Code>. Store this token
            somewhere safe as it will only be displayed once.
          </Text>
        }
        code={`<Text>
  Your new API token is <Code>BaVrRKpRMS_ndKU</Code>. Store this token
  somewhere safe as it will only be displayed once.
</Text>`}
      />
    </>
  );
}

export default TextPage;
