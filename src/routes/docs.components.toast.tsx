import { Button } from "hygge-ui/button";
import { toaster } from "hygge-ui/toast";
import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "app/components/page-header";
import { PagePreviewCodeTabs } from "app/components/page-preview-code-tabs";

export const Route = createFileRoute("/docs/components/toast")({
  component: ToastPage,
  head: () => ({
    meta: [
      {
        title: "Toast | Hygge UI",
      },
    ],
  }),
});

function ToastPage() {
  return (
    <>
      <PageHeader
        title="Toast"
        description="Used to display a temporary message to the user."
        githubLink="https://github.com/malcodeman/hygge-ui/blob/main/src/components/toast.tsx"
        className="mb-2"
      />
      <PagePreviewCodeTabs
        preview={
          <Button
            variant="outline"
            size="sm"
            onClick={() =>
              toaster.create({
                description: "File saved successfully",
                type: "info",
              })
            }
          >
            Show Toast
          </Button>
        }
        code={`<Button
  variant="outline"
  size="sm"
  onClick={() =>
    toaster.create({
      description: "File saved successfully",
      type: "info",
    })
  }
>
  Show Toast
</Button>`}
      />
    </>
  );
}
