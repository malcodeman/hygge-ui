import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
} from "@/components/accordion";
import { Avatar } from "@/components/avatar";
import { Heading } from "@/components/heading";
import { Highlight } from "@/components/highlight";
import { Text } from "@/components/text";
import { PageHeader } from "app/components/page-header";
import { PagePreviewCodeTabs } from "app/components/page-preview-code-tabs";

function AccordionPage() {
  const items = [
    { value: "a", title: "First Item", text: "Some value 1..." },
    { value: "b", title: "Second Item", text: "Some value 2..." },
    { value: "c", title: "Third Item", text: "Some value 3..." },
  ];
  const itemsWithDisabled = [
    { value: "a", title: "First Item", text: "Some value 1..." },
    { value: "b", title: "Second Item", text: "Some value 2..." },
    {
      value: "c",
      title: "Third Item",
      text: "Some value 3...",
      disabled: true,
    },
  ];
  const itemsWithAvatars = [
    { value: "alex", name: "Alex", src: "https://i.pravatar.cc/300?img=1" },
    { value: "benji", name: "Benji", src: "https://i.pravatar.cc/300?img=2" },
    {
      value: "charlie",
      name: "Charlie",
      src: "https://i.pravatar.cc/300?img=3",
    },
  ];

  return (
    <>
      <PageHeader
        title="Accordion"
        description="Used to show and hide sections of related content on a page."
        githubLink="https://github.com/malcodeman/hygge-ui/blob/main/src/components/accordion.tsx"
        className="mb-2"
        verified
      />
      <PagePreviewCodeTabs
        preview={
          <AccordionRoot defaultValue={["b"]}>
            {items.map((item) => (
              <AccordionItem key={item.value} value={item.value}>
                <AccordionItemTrigger>{item.title}</AccordionItemTrigger>
                <AccordionItemContent>{item.text}</AccordionItemContent>
              </AccordionItem>
            ))}
          </AccordionRoot>
        }
        code={`<AccordionRoot defaultValue={["b"]}>
  {items.map((item) => (
    <AccordionItem key={item.value} value={item.value}>
      <AccordionItemTrigger>{item.title}</AccordionItemTrigger>
      <AccordionItemContent>{item.text}</AccordionItemContent>
    </AccordionItem>
  ))}
</AccordionRoot>`}
      />
      <Heading level={2} className="mt-10 mb-2">
        Examples
      </Heading>
      <Heading level={3} className="mb-2">
        Expand Multiple Items
      </Heading>
      <Text className="mb-2">
        <Highlight
          query={["multiple"]}
          text="Use the multiple prop to allow multiple items to be expanded at once."
        />
      </Text>
      <PagePreviewCodeTabs
        preview={
          <AccordionRoot multiple>
            {items.map((item) => (
              <AccordionItem key={item.value} value={item.value}>
                <AccordionItemTrigger>{item.title}</AccordionItemTrigger>
                <AccordionItemContent>{item.text}</AccordionItemContent>
              </AccordionItem>
            ))}
          </AccordionRoot>
        }
        code={`<AccordionRoot multiple>
  {items.map((item) => (
    <AccordionItem key={item.value} value={item.value}>
      <AccordionItemTrigger>{item.title}</AccordionItemTrigger>
      <AccordionItemContent>{item.text}</AccordionItemContent>
    </AccordionItem>
  ))}
</AccordionRoot>`}
      />
      <Heading level={3} className="mt-10 mb-2">
        Disabled Item
      </Heading>
      <Text className="mb-2">
        <Highlight
          query={["disabled", "AccordionItem"]}
          text="Pass the disabled prop to any AccordionItem to prevent it from being expanded or collapsed."
        />
      </Text>
      <PagePreviewCodeTabs
        preview={
          <AccordionRoot>
            {itemsWithDisabled.map((item) => (
              <AccordionItem
                key={item.value}
                value={item.value}
                disabled={item.disabled}
              >
                <AccordionItemTrigger>{item.title}</AccordionItemTrigger>
                <AccordionItemContent>{item.text}</AccordionItemContent>
              </AccordionItem>
            ))}
          </AccordionRoot>
        }
        code={`<AccordionRoot>
  {itemsWithDisabled.map((item) => (
    <AccordionItem
      key={item.value}
      value={item.value}
      disabled={item.disabled}
    >
      <AccordionItemTrigger>{item.title}</AccordionItemTrigger>
      <AccordionItemContent>{item.text}</AccordionItemContent>
    </AccordionItem>
  ))}
</AccordionRoot>`}
      />
      <Heading level={3} className="mt-10 mb-2">
        With Avatar
      </Heading>
      <Text className="mb-2">
        Here&apos;s an example of composing an accordion with an avatar.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <AccordionRoot>
            {itemsWithAvatars.map((item) => (
              <AccordionItem key={item.value} value={item.value}>
                <AccordionItemTrigger>
                  <div className="flex items-center gap-3">
                    <Avatar src={item.src} alt={item.name} />
                    <span>{item.name}</span>
                  </div>
                </AccordionItemTrigger>
                <AccordionItemContent>
                  This is some detailed information about {item.name}.
                </AccordionItemContent>
              </AccordionItem>
            ))}
          </AccordionRoot>
        }
        code={`<AccordionRoot>
  {itemsWithAvatars.map((item) => (
    <AccordionItem key={item.value} value={item.value}>
      <AccordionItemTrigger>
        <div className="flex items-center gap-3">
          <Avatar src={item.src} alt={item.name} />
          <span>{item.name}</span>
        </div>
      </AccordionItemTrigger>
      <AccordionItemContent>
        This is some detailed information about {item.name}.
      </AccordionItemContent>
    </AccordionItem>
  ))}
</AccordionRoot>`}
      />
      <Heading level={3} className="mt-10 mb-2">
        With Subtext
      </Heading>
      <Text className="mb-2">
        Here&apos;s an example of adding a subtext to an accordion item.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <AccordionRoot>
            {items.map((item) => (
              <AccordionItem key={item.value} value={item.value}>
                <AccordionItemTrigger>
                  <div className="flex flex-col">
                    <span>{item.title}</span>
                    <Text>Click to expand</Text>
                  </div>
                </AccordionItemTrigger>
                <AccordionItemContent>{item.text}</AccordionItemContent>
              </AccordionItem>
            ))}
          </AccordionRoot>
        }
        code={`<AccordionRoot>
  {items.map((item) => (
    <AccordionItem key={item.value} value={item.value}>
      <AccordionItemTrigger>
        <div className="flex flex-col">
          <span>{item.title}</span>
          <Text>Click to expand</Text>
        </div>
      </AccordionItemTrigger>
      <AccordionItemContent>{item.text}</AccordionItemContent>
    </AccordionItem>
  ))}
</AccordionRoot>`}
      />
    </>
  );
}

export default AccordionPage;
