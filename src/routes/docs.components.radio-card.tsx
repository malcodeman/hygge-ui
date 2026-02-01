import { RadioCard, RadioCardGroup } from "hygge-ui/radio-card";
import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "app/components/page-header";
import { PagePreviewCodeTabs } from "app/components/page-preview-code-tabs";

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
    </>
  );
}
