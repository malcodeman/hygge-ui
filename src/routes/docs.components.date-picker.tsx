import { DatePicker } from "hygge-ui/date-picker";
import { Heading } from "hygge-ui/heading";
import { Code, Text } from "hygge-ui/text";
import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "app/components/page-header";
import { PagePreviewCodeTabs } from "app/components/page-preview-code-tabs";
import { parseDate } from "@ark-ui/react";

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
        Default Value
      </Heading>
      <Text className="mb-2">
        Use the <Code>defaultValue</Code> prop with <Code>parseDate</Code> to
        set the initial date value.
      </Text>
      <PagePreviewCodeTabs
        preview={<DatePicker defaultValue={[parseDate("2025-01-15")]} />}
        code={`<DatePicker defaultValue={[parseDate("2025-01-15")]} />`}
      />
      <Heading level={3} size="lg" className="mt-10 mb-2">
        Default View
      </Heading>
      <Text className="mb-2">
        Use the <Code>defaultView</Code> prop to set which view (day, month, or
        year) the calendar opens to initially.
      </Text>
      <PagePreviewCodeTabs
        preview={<DatePicker defaultView="month" />}
        code={`<DatePicker defaultView="month" />`}
      />
      <Heading level={3} size="lg" className="mt-10 mb-2">
        Range
      </Heading>
      <Text className="mb-2">
        Use the <Code>selectionMode=&quot;range&quot;</Code> prop to allow user
        to pick dates range.
      </Text>
      <PagePreviewCodeTabs
        preview={<DatePicker selectionMode="range" />}
        code={`<DatePicker selectionMode="range" />`}
      />
      <Heading level={2} className="mt-10 mb-2">
        Multiple
      </Heading>
      <Text className="mb-2">
        Use the <Code>selectionMode="multiple"</Code> prop to allow selecting
        multiple dates. This example also shows how to display selected dates as
        removable tags.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <DatePicker selectionMode="multiple" placeholder="Select dates" />
        }
        code={`<DatePicker selectionMode="multiple" placeholder="Select dates" />`}
      />
      <Heading level={2} className="mt-10 mb-2">
        Multiple Months
      </Heading>
      <Text className="mb-2">
        Use the <Code>numOfMonths</Code> prop to to display multiple months side
        by side.
      </Text>
      <PagePreviewCodeTabs
        preview={<DatePicker numOfMonths={2} />}
        code={`<DatePicker numOfMonths={2} />`}
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
