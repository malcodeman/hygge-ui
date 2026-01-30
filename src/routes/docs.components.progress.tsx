import {
  ProgressRange,
  ProgressRoot,
  ProgressTrack,
  ProgressValueText,
} from "@/components/progress";
import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "app/components/page-header";
import { PagePreviewCodeTabs } from "app/components/page-preview-code-tabs";

export const Route = createFileRoute("/docs/components/progress")({
  component: ProgressPage,
  head: () => ({
    meta: [
      {
        title: "Progress | Hygge UI",
      },
    ],
  }),
});

function ProgressPage() {
  return (
    <>
      <PageHeader
        title="Progress"
        description="Used to display the progress status for a task."
        githubLink="https://github.com/malcodeman/hygge-ui/blob/main/src/components/progress.tsx"
        className="mb-2"
      />
      <PagePreviewCodeTabs
        preview={
          <ProgressRoot defaultValue={48}>
            <ProgressTrack>
              <ProgressRange />
            </ProgressTrack>
            <ProgressValueText />
          </ProgressRoot>
        }
        code={`<ProgressRoot defaultValue={48}>
  <ProgressTrack>
    <ProgressRange />
  </ProgressTrack>
  <ProgressValueText />
</ProgressRoot>`}
      />
    </>
  );
}
