import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
} from "@/components/accordion";
import { Card } from "@/components/card";
import { CodeBlock } from "@/components/code-block";
import { PageHeader } from "app/components/page-header";
import { CODE_BLOCKS } from "app/constants";

const CODE_EXAMPLES = [
  {
    code: `import { AccordionRoot, AccordionItem, AccordionItemTrigger, AccordionItemContent } from '@/components/accordion'

function Example() {
  return (
    <AccordionRoot defaultValue={["React"]} collapsible>
      {["React", "Solid", "Vue"].map((item) => (
        <AccordionItem key={item} value={item}>
          <AccordionItemTrigger>What is {item}?</AccordionItemTrigger>
          <AccordionItemContent>
            {item} is a JavaScript library for building user interfaces.
          </AccordionItemContent>
        </AccordionItem>
      ))}
    </AccordionRoot>
  )
}
`,
  },
];

function AccordionPage() {
  return (
    <>
      <PageHeader
        title="Accordion"
        description=" A collapsible component for displaying content in a vertical stack."
        githubLink="https://github.com/malcodeman/hygge-ui/blob/main/src/components/accordion.tsx"
        className="mb-6"
      />
      <Card className="mb-6">
        <AccordionRoot defaultValue={["React"]} collapsible>
          {["React", "Solid", "Vue"].map((item) => (
            <AccordionItem key={item} value={item}>
              <AccordionItemTrigger>What is {item}?</AccordionItemTrigger>
              <AccordionItemContent>
                {item} is a JavaScript library for building user interfaces.
              </AccordionItemContent>
            </AccordionItem>
          ))}
        </AccordionRoot>
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

export default AccordionPage;
