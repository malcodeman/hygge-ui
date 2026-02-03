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
import { Heading } from "hygge-ui/heading";
import { Code, Text } from "hygge-ui/text";
import { LuCalendar, LuUser, LuWallet } from "react-icons/lu";

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
        verified
      />
      <PagePreviewCodeTabs
        preview={
          <StepsRoot count={3}>
            <StepsList>
              <StepsItem index={0} title="Step 1" />
              <StepsItem index={1} title="Step 2" />
              <StepsItem index={2} title="Step 3" />
            </StepsList>
            <StepsContent index={0}>Step 1 description</StepsContent>
            <StepsContent index={1}>Step 2 description</StepsContent>
            <StepsContent index={2}>Step 3 description</StepsContent>
            <StepsCompletedContent>
              All steps are complete!
            </StepsCompletedContent>
            <div className="flex gap-2">
              <StepsPrevTrigger asChild>
                <Button variant="outline" size="sm">
                  Prev
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
    <StepsItem index={0} title="Step 1" />
    <StepsItem index={1} title="Step 2" />
    <StepsItem index={2} title="Step 3" />
  </StepsList>
  <StepsContent index={0}>Step 1 description</StepsContent>
  <StepsContent index={1}>Step 2 description</StepsContent>
  <StepsContent index={2}>Step 3 description</StepsContent>
  <StepsCompletedContent>
    All steps are complete!
  </StepsCompletedContent>
  <div className="flex gap-2">
    <StepsPrevTrigger asChild>
      <Button variant="outline" size="sm">
        Prev
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
      <Heading level={2} className="mt-10 mb-2">
        Examples
      </Heading>
      <Heading level={3} size="lg" className="mb-2">
        Sizes
      </Heading>
      <Text className="mb-2">
        Use the <Code>size</Code> prop to change the size of the steps
        component.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <div className="flex flex-col gap-2">
            <StepsRoot size="xs" count={3}>
              <StepsList>
                <StepsItem index={0} title="Step 1" />
                <StepsItem index={1} title="Step 2" />
                <StepsItem index={2} title="Step 3" />
              </StepsList>
              <StepsContent index={0}>Step 1 description</StepsContent>
              <StepsContent index={1}>Step 2 description</StepsContent>
              <StepsContent index={2}>Step 3 description</StepsContent>
              <StepsCompletedContent>
                All steps are complete!
              </StepsCompletedContent>
              <div className="flex gap-2">
                <StepsPrevTrigger asChild>
                  <Button variant="outline" size="sm">
                    Prev
                  </Button>
                </StepsPrevTrigger>
                <StepsNextTrigger asChild>
                  <Button variant="outline" size="sm">
                    Next
                  </Button>
                </StepsNextTrigger>
              </div>
            </StepsRoot>
            <StepsRoot size="sm" count={3}>
              <StepsList>
                <StepsItem index={0} title="Step 1" />
                <StepsItem index={1} title="Step 2" />
                <StepsItem index={2} title="Step 3" />
              </StepsList>
              <StepsContent index={0}>Step 1 description</StepsContent>
              <StepsContent index={1}>Step 2 description</StepsContent>
              <StepsContent index={2}>Step 3 description</StepsContent>
              <StepsCompletedContent>
                All steps are complete!
              </StepsCompletedContent>
              <div className="flex gap-2">
                <StepsPrevTrigger asChild>
                  <Button variant="outline" size="sm">
                    Prev
                  </Button>
                </StepsPrevTrigger>
                <StepsNextTrigger asChild>
                  <Button variant="outline" size="sm">
                    Next
                  </Button>
                </StepsNextTrigger>
              </div>
            </StepsRoot>
            <StepsRoot size="md" count={3}>
              <StepsList>
                <StepsItem index={0} title="Step 1" />
                <StepsItem index={1} title="Step 2" />
                <StepsItem index={2} title="Step 3" />
              </StepsList>
              <StepsContent index={0}>Step 1 description</StepsContent>
              <StepsContent index={1}>Step 2 description</StepsContent>
              <StepsContent index={2}>Step 3 description</StepsContent>
              <StepsCompletedContent>
                All steps are complete!
              </StepsCompletedContent>
              <div className="flex gap-2">
                <StepsPrevTrigger asChild>
                  <Button variant="outline" size="sm">
                    Prev
                  </Button>
                </StepsPrevTrigger>
                <StepsNextTrigger asChild>
                  <Button variant="outline" size="sm">
                    Next
                  </Button>
                </StepsNextTrigger>
              </div>
            </StepsRoot>
            <StepsRoot size="lg" count={3}>
              <StepsList>
                <StepsItem index={0} title="Step 1" />
                <StepsItem index={1} title="Step 2" />
                <StepsItem index={2} title="Step 3" />
              </StepsList>
              <StepsContent index={0}>Step 1 description</StepsContent>
              <StepsContent index={1}>Step 2 description</StepsContent>
              <StepsContent index={2}>Step 3 description</StepsContent>
              <StepsCompletedContent>
                All steps are complete!
              </StepsCompletedContent>
              <div className="flex gap-2">
                <StepsPrevTrigger asChild>
                  <Button variant="outline" size="sm">
                    Prev
                  </Button>
                </StepsPrevTrigger>
                <StepsNextTrigger asChild>
                  <Button variant="outline" size="sm">
                    Next
                  </Button>
                </StepsNextTrigger>
              </div>
            </StepsRoot>
          </div>
        }
        code={`<div className="flex flex-col gap-2">
  <StepsRoot size="xs" count={3}>
    <StepsList>
      <StepsItem index={0} title="Step 1" />
      <StepsItem index={1} title="Step 2" />
      <StepsItem index={2} title="Step 3" />
    </StepsList>
    <StepsContent index={0}>Step 1 description</StepsContent>
    <StepsContent index={1}>Step 2 description</StepsContent>
    <StepsContent index={2}>Step 3 description</StepsContent>
    <StepsCompletedContent>
      All steps are complete!
    </StepsCompletedContent>
    <div className="flex gap-2">
      <StepsPrevTrigger asChild>
        <Button variant="outline" size="sm">
          Prev
        </Button>
      </StepsPrevTrigger>
      <StepsNextTrigger asChild>
        <Button variant="outline" size="sm">
          Next
        </Button>
      </StepsNextTrigger>
    </div>
  </StepsRoot>
  <StepsRoot size="sm" count={3}>
    <StepsList>
      <StepsItem index={0} title="Step 1" />
      <StepsItem index={1} title="Step 2" />
      <StepsItem index={2} title="Step 3" />
    </StepsList>
    <StepsContent index={0}>Step 1 description</StepsContent>
    <StepsContent index={1}>Step 2 description</StepsContent>
    <StepsContent index={2}>Step 3 description</StepsContent>
    <StepsCompletedContent>
      All steps are complete!
    </StepsCompletedContent>
    <div className="flex gap-2">
      <StepsPrevTrigger asChild>
        <Button variant="outline" size="sm">
          Prev
        </Button>
      </StepsPrevTrigger>
      <StepsNextTrigger asChild>
        <Button variant="outline" size="sm">
          Next
        </Button>
      </StepsNextTrigger>
    </div>
  </StepsRoot>
  <StepsRoot size="md" count={3}>
    <StepsList>
      <StepsItem index={0} title="Step 1" />
      <StepsItem index={1} title="Step 2" />
      <StepsItem index={2} title="Step 3" />
    </StepsList>
    <StepsContent index={0}>Step 1 description</StepsContent>
    <StepsContent index={1}>Step 2 description</StepsContent>
    <StepsContent index={2}>Step 3 description</StepsContent>
    <StepsCompletedContent>
      All steps are complete!
    </StepsCompletedContent>
    <div className="flex gap-2">
      <StepsPrevTrigger asChild>
        <Button variant="outline" size="sm">
          Prev
        </Button>
      </StepsPrevTrigger>
      <StepsNextTrigger asChild>
        <Button variant="outline" size="sm">
          Next
        </Button>
      </StepsNextTrigger>
    </div>
  </StepsRoot>
  <StepsRoot size="lg" count={3}>
    <StepsList>
      <StepsItem index={0} title="Step 1" />
      <StepsItem index={1} title="Step 2" />
      <StepsItem index={2} title="Step 3" />
    </StepsList>
    <StepsContent index={0}>Step 1 description</StepsContent>
    <StepsContent index={1}>Step 2 description</StepsContent>
    <StepsContent index={2}>Step 3 description</StepsContent>
    <StepsCompletedContent>
      All steps are complete!
    </StepsCompletedContent>
    <div className="flex gap-2">
      <StepsPrevTrigger asChild>
        <Button variant="outline" size="sm">
          Prev
        </Button>
      </StepsPrevTrigger>
      <StepsNextTrigger asChild>
        <Button variant="outline" size="sm">
          Next
        </Button>
      </StepsNextTrigger>
    </div>
  </StepsRoot>
</div>`}
      />
      <Heading level={3} size="lg" className="mt-10 mb-2">
        Icon
      </Heading>
      <Text className="mb-2">
        Pass the <Code>icon</Code> prop to the <Code>StepsItem</Code> component
        to display an icon.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <StepsRoot count={3}>
            <StepsList>
              <StepsItem index={0} icon={<LuUser />} />
              <StepsItem index={1} icon={<LuWallet />} />
              <StepsItem index={2} icon={<LuCalendar />} />
            </StepsList>
            <StepsContent index={0}>Contact Details</StepsContent>
            <StepsContent index={1}>Payment</StepsContent>
            <StepsContent index={2}>Book an Appointment</StepsContent>
            <StepsCompletedContent>
              All steps are complete!
            </StepsCompletedContent>
            <div className="flex gap-2">
              <StepsPrevTrigger asChild>
                <Button variant="outline" size="sm">
                  Prev
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
    <StepsItem index={0} icon={<LuUser />} />
    <StepsItem index={1} icon={<LuWallet />} />
    <StepsItem index={2} icon={<LuCalendar />} />
  </StepsList>
  <StepsContent index={0}>Contact Details</StepsContent>
  <StepsContent index={1}>Payment</StepsContent>
  <StepsContent index={2}>Book an Appointment</StepsContent>
  <StepsCompletedContent>
    All steps are complete!
  </StepsCompletedContent>
  <div className="flex gap-2">
    <StepsPrevTrigger asChild>
      <Button variant="outline" size="sm">
        Prev
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
