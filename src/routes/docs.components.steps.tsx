import { Button } from "hygge-ui/button";
import {
  StepsCompletedContent,
  StepsContent,
  StepsItem,
  StepsList,
  StepsNextTrigger,
  StepsPrevTrigger,
  StepsRoot,
} from "hygge-ui/steps";
import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "app/components/page-header";
import { PagePreviewCodeTabs } from "app/components/page-preview-code-tabs";

export const Route = createFileRoute("/docs/components/steps")({
  component: StepsPage,
  head: () => ({
    meta: [
      {
        title: "Steps | Hygge UI",
      },
    ],
  }),
});

function StepsPage() {
  return (
    <>
      <PageHeader
        title="Steps"
        description="Used to indicate progress through a multi-step process."
        githubLink="https://github.com/malcodeman/hygge-ui/blob/main/src/components/steps.tsx"
        className="mb-2"
      />
      <PagePreviewCodeTabs
        preview={
          <StepsRoot count={3}>
            <StepsList>
              <StepsItem index={0} title="First" />
              <StepsItem index={1} title="Second" />
              <StepsItem index={2} title="Third" />
            </StepsList>
            <StepsContent index={0}>First - Contact Info</StepsContent>
            <StepsContent index={1}>Second - Date & Time</StepsContent>
            <StepsContent index={2}>Third - Select Rooms</StepsContent>
            <StepsCompletedContent>
              Steps Complete - Thank you for filling out the form!
            </StepsCompletedContent>
            <div className="flex gap-2">
              <StepsPrevTrigger asChild>
                <Button variant="outline" size="sm">
                  Back
                </Button>
              </StepsPrevTrigger>
              <StepsNextTrigger asChild>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </StepsNextTrigger>
            </div>
          </StepsRoot>
        }
        code={`<StepsRoot count={3}>
  <StepsList>
    <StepsItem index={0} title="First" />
    <StepsItem index={1} title="Second" />
    <StepsItem index={2} title="Third" />
  </StepsList>
  <StepsContent index={0}>First - Contact Info</StepsContent>
  <StepsContent index={1}>Second - Date & Time</StepsContent>
  <StepsContent index={2}>Third - Select Rooms</StepsContent>
  <StepsCompletedContent>
    Steps Complete - Thank you for filling out the form!
  </StepsCompletedContent>
  <div className="flex gap-2">
    <StepsPrevTrigger asChild>
      <Button variant="outline" size="sm">
        Back
      </Button>
    </StepsPrevTrigger>
    <StepsNextTrigger asChild>
      <Button variant="outline" size="sm">
        Next
      </Button>
    </StepsNextTrigger>
  </div>
</StepsRoot>`}
      />
    </>
  );
}
