import { DatePicker } from "@/components/date-picker";
import { Heading } from "@/components/heading";
import { Code, Text } from "@/components/text";
import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "app/components/page-header";
import { PagePreviewCodeTabs } from "app/components/page-preview-code-tabs";

export const Route = createFileRoute("/docs/components/date-picker")({
  component: DatePickerPage,
  head: () => ({
    meta: [
      {
        title: "Date Picker | Hygge UI",
      },
    ],
  }),
});

function DatePickerPage() {
  return (
    <>
      <PageHeader
        title="Date Picker"
        description="A component that allows users to select a date from a calendar."
        githubLink="https://github.com/malcodeman/hygge-ui/blob/main/src/components/date-picker.tsx"
        className="mb-2"
      />
      <PagePreviewCodeTabs
        preview={<DatePicker label="Pick date" placeholder="Pick date" />}
        code={`<DatePicker label="Pick date" placeholder="Pick date" />`}
      />
      <Heading level={2} className="mt-10 mb-2">
        Examples
      </Heading>
      <Heading level={3} size="lg" className="mb-2">
        Dates Range
      </Heading>
      <Text className="mb-2">
        Set <Code>selectionMode=&quot;range&quot;</Code> to allow user to pick
        dates range.
      </Text>
      <PagePreviewCodeTabs
        preview={<DatePicker label="Pick dates range" selectionMode="range" />}
        code={`<DatePicker label="Pick dates range" selectionMode="range" />`}
      />
      <Heading level={2} className="mt-10 mb-2">
        Disabled
      </Heading>
      <Text className="mb-2">
        Use the <Code>disabled</Code> prop to disable the date picker.
      </Text>
      <PagePreviewCodeTabs
        preview={<DatePicker disabled />}
        code={`<DatePicker disabled />`}
      />
    </>
  );
}
