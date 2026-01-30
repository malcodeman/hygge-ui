import {
  ProgressCircle,
  ProgressCircleRange,
  ProgressCircleTrack,
  ProgressRoot,
  ProgressValueText,
} from "@/components/progress";
import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "app/components/page-header";
import { PagePreviewCodeTabs } from "app/components/page-preview-code-tabs";

export const Route = createFileRoute("/docs/components/progress-circle")({
  component: ProgressCirclePage,
  head: () => ({
    meta: [
      {
        title: "Progress Circle | Hygge UI",
      },
    ],
  }),
});

function ProgressCirclePage() {
  return (
    <>
      <PageHeader
        title="Progress Circle"
        description="Used to display a task's progress in a circular form."
        githubLink="https://github.com/malcodeman/hygge-ui/blob/main/src/components/progress-circle.tsx"
        className="mb-2"
      />
      <PagePreviewCodeTabs
        preview={
          <ProgressRoot defaultValue={64}>
            <ProgressCircle>
              <ProgressCircleTrack />
              <ProgressCircleRange />
            </ProgressCircle>
            <ProgressValueText />
          </ProgressRoot>
        }
        code={`<ProgressRoot defaultValue={64}>
  <ProgressCircle>
    <ProgressCircleTrack />
    <ProgressCircleRange />
  </ProgressCircle>
  <ProgressValueText />
</ProgressRoot>`}
      />
    </>
  );
}
