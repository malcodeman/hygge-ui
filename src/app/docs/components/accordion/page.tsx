import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
} from "@/components/accordion";
import { Heading } from "@/components/heading";
import { Text } from "@/components/text";

function AccordionPage() {
  return (
    <>
      <Heading>Accordion</Heading>
      <Text className="mb-6">
        A collapsible component for displaying content in a vertical stack.
      </Text>
      <AccordionRoot defaultValue={["React"]}>
        {["React", "Solid", "Vue"].map((item) => (
          <AccordionItem key={item} value={item}>
            <AccordionItemTrigger>What is {item}?</AccordionItemTrigger>
            <AccordionItemContent>
              {item} is a JavaScript library for building user interfaces.
            </AccordionItemContent>
          </AccordionItem>
        ))}
      </AccordionRoot>
    </>
  );
}

export default AccordionPage;
