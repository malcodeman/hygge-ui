import { Card } from "@/components/card";
import { CodeBlock } from "@/components/code-block";
import { DatePicker } from "@/components/date-picker";
import { Heading } from "@/components/heading";
import { Text } from "@/components/text";
import { CODE_BLOCKS } from "app/constants";

const CODE_EXAMPLES = [
  {
    code: `import { DatePicker } from '@/components/date-picker'

function Example() {
  return (
    <DatePicker />
  )
}
`,
  },
];

function DatePickerPage() {
  return (
    <>
      <Heading>Date Picker</Heading>
      <Text className="mb-6">
        A component that allows users to select a date from a calendar.
      </Text>
      <Card className="mb-6">
        <DatePicker />
      </Card>
      <CodeBlock
        className="mb-6"
        theme={CODE_BLOCKS.THEME}
        language={CODE_BLOCKS.LANGUAGE}
        code={CODE_EXAMPLES[0].code}
        copyButton={CODE_BLOCKS.COPY_BUTTON}
      />
    </>
  );
}

export default DatePickerPage;
