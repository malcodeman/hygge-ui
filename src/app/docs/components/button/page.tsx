import { Button } from "@/components/button";
import { Heading } from "@/components/heading";
import { Highlight } from "@/components/highlight";
import { Text } from "@/components/text";
import { PageHeader } from "app/components/page-header";
import { PagePreviewCodeTabs } from "app/components/page-preview-code-tabs";
import { LuArrowRight, LuMail } from "react-icons/lu";

function ButtonPage() {
  return (
    <>
      <PageHeader
        title="Button"
        description="Used to trigger an action or event."
        githubLink="https://github.com/malcodeman/hygge-ui/blob/main/src/components/button.tsx"
        className="mb-2"
        verified
      />
      <PagePreviewCodeTabs
        preview={<Button>Click me</Button>}
        code={`<Button>Click me</Button>`}
      />
      <Heading level={2} className="mt-10 mb-2">
        Examples
      </Heading>
      <Heading level={3} className="mb-2">
        Sizes
      </Heading>
      <Text className="mb-2">
        <Highlight
          query={["size"]}
          text="Use the size prop to change the size of the button."
        />
      </Text>
      <PagePreviewCodeTabs
        preview={
          <div className="flex flex-wrap items-center gap-2">
            <Button size="xs">Extra Small</Button>
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
            <Button size="xl">Extra Large</Button>
          </div>
        }
        code={`<div className="flex flex-wrap items-center gap-2">
  <Button size="xs">Extra Small</Button>
  <Button size="sm">Small</Button>
  <Button size="md">Medium</Button>
  <Button size="lg">Large</Button>
  <Button size="xl">Extra Large</Button>
</div>`}
      />
      <Heading level={3} className="mt-10 mb-2">
        Variants
      </Heading>
      <Text className="mb-2">
        <Highlight
          query={["variant"]}
          text="Use the variant prop to change the visual style of the Button."
        />
      </Text>
      <PagePreviewCodeTabs
        preview={
          <div className="flex gap-2">
            <Button variant="solid">Solid</Button>
            <Button variant="subtle">Subtle</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
          </div>
        }
        code={`<div className="flex gap-2">
  <Button variant="solid">Solid</Button>
  <Button variant="subtle">Subtle</Button>
  <Button variant="outline">Outline</Button>
  <Button variant="ghost">Ghost</Button>
</div>`}
      />
      <Heading level={3} className="mt-10 mb-2">
        Icon
      </Heading>
      <Text className="mb-2">Use icons within a button.</Text>
      <PagePreviewCodeTabs
        preview={
          <div className="flex gap-2">
            <Button variant="solid">
              <LuMail size={16} />
              Email
            </Button>
            <Button variant="outline">
              Call us <LuArrowRight size={16} />
            </Button>
          </div>
        }
        code={`<div className="flex gap-2">
  <Button variant="solid">
    <LuMail size={16} />
    Email
  </Button>
  <Button variant="outline">
    Call us <LuArrowRight size={16} />
  </Button>
</div>`}
      />
      <Heading level={3} className="mt-10 mb-2">
        Disabled
      </Heading>
      <Text className="mb-2">
        <Highlight
          query={["disabled"]}
          text="Use the disabled prop to disable the button."
        />
      </Text>
      <PagePreviewCodeTabs
        preview={<Button disabled>Button</Button>}
        code={`<Button disabled>Button</Button>`}
      />
      <Heading level={3} className="mt-10 mb-2">
        Loading
      </Heading>
      <Text className="mb-2">
        Pass the <code>loading</code> and <code>loadingText</code> props to show
        a spinner and optional loading text.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <div className="flex gap-2">
            <Button loading>Click me</Button>
            <Button loading loadingText="Saving...">
              Click me
            </Button>
          </div>
        }
        code={`<div className="flex gap-2">
  <Button loading>Click me</Button>
  <Button loading loadingText="Saving...">
    Click me
  </Button>
</div>`}
      />
      <Heading level={3} className="mt-10 mb-2">
        Spinner Placement
      </Heading>
      <Text className="mb-2">
        Use the <code>spinnerPlacement</code> prop to change the spinner’s
        position.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <div className="flex gap-2">
            <Button loading loadingText="Loading" spinnerPlacement="start">
              Submit
            </Button>
            <Button loading loadingText="Loading" spinnerPlacement="end">
              Continue
            </Button>
          </div>
        }
        code={`<div className="flex gap-2">
  <Button loading loadingText="Loading" spinnerPlacement="start">
    Submit
  </Button>
  <Button loading loadingText="Loading" spinnerPlacement="end">
    Continue
  </Button>
</div>`}
      />
    </>
  );
}

export default ButtonPage;
