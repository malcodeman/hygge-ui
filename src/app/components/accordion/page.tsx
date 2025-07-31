import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
} from "../accordion";
import { Heading } from "../heading";
import { Text } from "../text";

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
