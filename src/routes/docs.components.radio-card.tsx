import { RadioCard, RadioCardGroup } from "hygge-ui/radio-card";
import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "app/components/page-header";
import { PagePreviewCodeTabs } from "app/components/page-preview-code-tabs";
import { Heading } from "hygge-ui/heading";
import { Code, Text } from "hygge-ui/text";
import { LuArrowRight, LuCircleOff, LuLock } from "react-icons/lu";

export const Route = createFileRoute("/docs/components/radio-card")({
  component: RadioCardPage,
  head: () => ({
    meta: [
      {
        title: "Radio Card | Hygge UI",
      },
    ],
  }),
});

function RadioCardPage() {
  return (
    <>
      <PageHeader
        title="Radio Card"
        description="Used to select an option from list."
        githubLink="https://github.com/malcodeman/hygge-ui/blob/main/src/components/radio-card.tsx"
        className="mb-2"
        verified
      />
      <PagePreviewCodeTabs
        preview={
          <RadioCardGroup>
            <RadioCard value="nextjs" label="Next.js" />
            <RadioCard value="vite" label="Vite" />
            <RadioCard value="astro" label="Astro" />
          </RadioCardGroup>
        }
        code={`<RadioCardGroup>
  <RadioCard value="nextjs" label="Next.js" />
  <RadioCard value="vite" label="Vite" />
  <RadioCard value="astro" label="Astro" />
</RadioCardGroup>`}
      />
      <Heading level={2} className="mt-10 mb-2">
        Examples
      </Heading>
      <Heading level={3} size="lg" className="mb-2">
        Description
      </Heading>
      <Text className="mb-2">
        Here&apos;s an example of how to add some further description to the
        radio card.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <RadioCardGroup>
            <RadioCard
              value="nextjs"
              label="Nextjs"
              description="Best for apps"
            />
            <RadioCard value="vite" label="Vite" description="Best for SPAs" />
            <RadioCard
              value="astro"
              label="Astro"
              description="Best for static sites"
            />
          </RadioCardGroup>
        }
        code={`<RadioCardGroup>
  <RadioCard
    value="nextjs"
    label="Nextjs"
    description="Best for apps"
  />
  <RadioCard value="vite" label="Vite" description="Best for SPAs" />
  <RadioCard
    value="astro"
    label="Astro"
    description="Best for static sites"
  />
</RadioCardGroup>`}
      />
      <Heading level={3} size="lg" className="mt-10 mb-2">
        Sizes
      </Heading>
      <Text className="mb-2">
        Pass the <Code>size</Code> prop to the <Code>RadioCardRoot</Code>{" "}
        component o change the size of the radio card.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <div className="flex flex-col gap-2">
            <RadioCardGroup size="xs" defaultValue="nextjs">
              <RadioCard value="nextjs" label="Next.js" />
              <RadioCard value="vite" label="Vite" />
            </RadioCardGroup>
            <RadioCardGroup size="sm" defaultValue="nextjs">
              <RadioCard value="nextjs" label="Next.js" />
              <RadioCard value="vite" label="Vite" />
            </RadioCardGroup>
            <RadioCardGroup size="md" defaultValue="nextjs">
              <RadioCard value="nextjs" label="Next.js" />
              <RadioCard value="vite" label="Vite" />
            </RadioCardGroup>
            <RadioCardGroup size="lg" defaultValue="nextjs">
              <RadioCard value="nextjs" label="Next.js" />
              <RadioCard value="vite" label="Vite" />
            </RadioCardGroup>
            <RadioCardGroup size="xl" defaultValue="nextjs">
              <RadioCard value="nextjs" label="Next.js" />
              <RadioCard value="vite" label="Vite" />
            </RadioCardGroup>
          </div>
        }
        code={`<div className="flex flex-col gap-2">
  <RadioCardGroup size="xs" defaultValue="nextjs">
    <RadioCard value="nextjs" label="Next.js" />
    <RadioCard value="vite" label="Vite" />
  </RadioCardGroup>
  <RadioCardGroup size="sm" defaultValue="nextjs">
    <RadioCard value="nextjs" label="Next.js" />
    <RadioCard value="vite" label="Vite" />
  </RadioCardGroup>
  <RadioCardGroup size="md" defaultValue="nextjs">
    <RadioCard value="nextjs" label="Next.js" />
    <RadioCard value="vite" label="Vite" />
  </RadioCardGroup>
  <RadioCardGroup size="lg" defaultValue="nextjs">
    <RadioCard value="nextjs" label="Next.js" />
    <RadioCard value="vite" label="Vite" />
  </RadioCardGroup>
  <RadioCardGroup size="xl" defaultValue="nextjs">
    <RadioCard value="nextjs" label="Next.js" />
    <RadioCard value="vite" label="Vite" />
  </RadioCardGroup>
</div>`}
      />
      <Heading level={3} size="lg" className="mt-10 mb-2">
        States
      </Heading>
      <Text className="mb-2">
        Pass the <Code>disabled</Code> or <Code>invalid</Code> prop to the{" "}
        <Code>RadioCardGroup</Code> component to change the visual state of the
        radio.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <div className="flex flex-col gap-2">
            <RadioCardGroup disabled>
              <RadioCard
                value="nextjs"
                label="Next.js"
                description="Disabled"
              />
              <RadioCard value="vite" label="Vite" description="Disabled" />
            </RadioCardGroup>
            <RadioCardGroup disabled defaultValue="vite">
              <RadioCard
                value="nextjs"
                label="Next.js"
                description="Disabled"
              />
              <RadioCard value="vite" label="Vite" description="Disabled" />
            </RadioCardGroup>
            <RadioCardGroup readOnly>
              <RadioCard
                value="nextjs"
                label="Next.js"
                description="Readonly"
              />
              <RadioCard value="vite" label="Vite" description="Readonly" />
            </RadioCardGroup>
            <RadioCardGroup invalid>
              <RadioCard value="nextjs" label="Next.js" description="Invalid" />
              <RadioCard value="vite" label="Vite" description="Invalid" />
            </RadioCardGroup>
          </div>
        }
        code={`<div className="flex flex-col gap-2">
  <RadioCardGroup disabled>
    <RadioCard
      value="nextjs"
      label="Next.js"
      description="Disabled"
    />
    <RadioCard value="vite" label="Vite" description="Disabled" />
  </RadioCardGroup>
  <RadioCardGroup disabled defaultValue="vite">
    <RadioCard
      value="nextjs"
      label="Next.js"
      description="Disabled"
    />
    <RadioCard value="vite" label="Vite" description="Disabled" />
  </RadioCardGroup>
  <RadioCardGroup readOnly>
    <RadioCard
      value="nextjs"
      label="Next.js"
      description="Readonly"
    />
    <RadioCard value="vite" label="Vite" description="Readonly" />
  </RadioCardGroup>
  <RadioCardGroup invalid>
    <RadioCard value="nextjs" label="Next.js" description="Invalid" />
    <RadioCard value="vite" label="Vite" description="Invalid" />
  </RadioCardGroup>
</div>`}
      />
      <Heading level={3} size="lg" className="mt-10 mb-2">
        Colors
      </Heading>
      <Text className="mb-2">
        Pass the <Code>colorPalette</Code> prop to the{" "}
        <Code>RadioCardGroup</Code> component to change the color of the radio
        card.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <div className="flex flex-col gap-2">
            <RadioCardGroup colorPalette="gray" defaultValue="nextjs">
              <RadioCard value="nextjs" label="Next.js" />
              <RadioCard value="vite" label="Vite" />
            </RadioCardGroup>
            <RadioCardGroup colorPalette="orange" defaultValue="nextjs">
              <RadioCard value="nextjs" label="Next.js" />
              <RadioCard value="vite" label="Vite" />
            </RadioCardGroup>
            <RadioCardGroup colorPalette="teal" defaultValue="nextjs">
              <RadioCard value="nextjs" label="Next.js" />
              <RadioCard value="vite" label="Vite" />
            </RadioCardGroup>
            <RadioCardGroup colorPalette="green" defaultValue="nextjs">
              <RadioCard value="nextjs" label="Next.js" />
              <RadioCard value="vite" label="Vite" />
            </RadioCardGroup>
            <RadioCardGroup colorPalette="red" defaultValue="nextjs">
              <RadioCard value="nextjs" label="Next.js" />
              <RadioCard value="vite" label="Vite" />
            </RadioCardGroup>
          </div>
        }
        code={`<div className="flex flex-col gap-2">
  <RadioCardGroup colorPalette="gray" defaultValue="nextjs">
    <RadioCard value="nextjs" label="Next.js" />
    <RadioCard value="vite" label="Vite" />
  </RadioCardGroup>
  <RadioCardGroup colorPalette="orange" defaultValue="nextjs">
    <RadioCard value="nextjs" label="Next.js" />
    <RadioCard value="vite" label="Vite" />
  </RadioCardGroup>
  <RadioCardGroup colorPalette="teal" defaultValue="nextjs">
    <RadioCard value="nextjs" label="Next.js" />
    <RadioCard value="vite" label="Vite" />
  </RadioCardGroup>
  <RadioCardGroup colorPalette="green" defaultValue="nextjs">
    <RadioCard value="nextjs" label="Next.js" />
    <RadioCard value="vite" label="Vite" />
  </RadioCardGroup>
  <RadioCardGroup colorPalette="red" defaultValue="nextjs">
    <RadioCard value="nextjs" label="Next.js" />
    <RadioCard value="vite" label="Vite" />
  </RadioCardGroup>
</div>`}
      />
      <Heading level={3} size="lg" className="mt-10 mb-2">
        Icon
      </Heading>
      <Text className="mb-2">
        Pass the <Code>icon</Code> prop to the <Code>RadioCard</Code> component
        to render a custom icon inside the radio card.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <RadioCardGroup>
            <RadioCard
              icon={<LuArrowRight />}
              value="allow"
              label="Allow"
              description="This user can access the system"
            />
            <RadioCard
              icon={<LuCircleOff />}
              value="deny"
              label="Deny"
              description="This user will be denied access to the system"
            />
            <RadioCard
              icon={<LuLock />}
              value="lock"
              label="Lock"
              description="This user will be locked out of the system"
            />
          </RadioCardGroup>
        }
        code={`<RadioCardGroup>
  <RadioCard
    icon={<LuArrowRight />}
    value="allow"
    label="Allow"
    description="This user can access the system"
  />
  <RadioCard
    icon={<LuCircleOff />}
    value="deny"
    label="Deny"
    description="This user will be denied access to the system"
  />
  <RadioCard
    icon={<LuLock />}
    value="lock"
    label="Lock"
    description="This user will be locked out of the system"
  />
</RadioCardGroup>`}
      />
    </>
  );
}
