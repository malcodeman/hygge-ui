"use client";
import { LuMail } from "react-icons/lu";
import { Avatar } from "./components/avatar";
import { Button } from "./components/button";
import { Card } from "./components/card";
import { Heading } from "./components/heading";
import { Tooltip } from "./components/tooltip";
import {
  PopoverContent,
  PopoverDescription,
  PopoverRoot,
  PopoverTitle,
  PopoverTrigger,
} from "./components/popover";
import {
  MenuContent,
  MenuItem,
  MenuItemGroup,
  MenuRoot,
  MenuSeparator,
  MenuTrigger,
} from "./components/menu";
import { Input } from "./components/input";
import {
  Field,
  FieldHelperText,
  FieldLabel,
  FieldRoot,
} from "./components/field";
import { Clipboard } from "./components/clipboard";
import { Textarea } from "./components/textarea";
import {
  TabsContent,
  TabsList,
  TabsRoot,
  TabsTrigger,
} from "./components/tabs";
import { Switch } from "./components/switch";
import { Alert } from "./components/alert";
import { Tag } from "./components/tag";
import { Separator } from "./components/separator";
import {
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "./components/dialog";
import { Checkbox } from "./components/checkbox";
import { toaster } from "./components/toast";
import { Highlight } from "./components/highlight";
import {
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "./components/select";
import { Combobox, useFilter, useListCollection } from "@ark-ui/react";
import {
  ComboboxInput,
  ComboboxItem,
  ComboboxLabel,
  ComboboxRoot,
  ComboboxContent,
  ComboboxItemGroup,
} from "./components/combobox";
import Link from "next/link";
import { QrCode, QrCodeDownloadTrigger } from "./components/qr-code";
import { CheckboxCard } from "./components/checkbox-card";
import {
  StepsCompletedContent,
  StepsContent,
  StepsItem,
  StepsList,
  StepsNextTrigger,
  StepsPrevTrigger,
  StepsRoot,
} from "./components/steps";
import {
  ProgressCircle,
  ProgressCircleRange,
  ProgressCircleTrack,
  ProgressLabel,
  ProgressRange,
  ProgressRoot,
  ProgressTrack,
  ProgressValueText,
} from "./components/progress";
import {
  PaginationItems,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationRoot,
} from "./components/pagination";
import { Rating } from "./components/rating";
import { PinInput } from "./components/pin-input";
import { useTheme } from "next-themes";
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
} from "./components/accordion";
import { PasswordInput } from "./components/password-input";
import {
  RadioGroup,
  RadioGroupItem,
  RadioGroupLabel,
} from "./components/radio";

const initialFrameworks = [
  { label: "React.js", value: "react" },
  { label: "Vue.js", value: "vue" },
  { label: "Angular", value: "angular" },
  { label: "Solid", value: "solid" },
];
const initialMembers = [
  {
    label: "Jessica Jones",
    value: "jessica_jones",
    avatar:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100",
  },
  {
    label: "Kenneth Johnson",
    value: "kenneth_johnson",
    avatar:
      "https://images.unsplash.com/photo-1523477800337-966dbabe060b?w=100",
  },
  {
    label: "Kate Wilson",
    value: "kate_wilson",
    avatar:
      "https://images.unsplash.com/photo-1609712409631-dbbb050746d1?w=100",
  },
];

export default function Home() {
  const { contains } = useFilter({ sensitivity: "base" });
  const frameworksCollection = useListCollection({
    initialItems: initialFrameworks,
    filter: contains,
  });
  const membersCollection = useListCollection({
    initialItems: initialMembers,
    filter: contains,
  });
  const { theme, setTheme } = useTheme();

  function handleInputChange(details: Combobox.InputValueChangeDetails) {
    frameworksCollection.filter(details.inputValue);
  }

  function handleInputChange2(details: Combobox.InputValueChangeDetails) {
    membersCollection.filter(details.inputValue);
  }

  function handleAddToast(type: "success" | "error" | "loading" | "info") {
    toaster.create({
      title: "Title",
      description: "Description",
      type,
    });
  }

  function handleAddToastWithAction() {
    toaster.create({
      title: "Title",
      description: "Description",
      action: {
        label: "Subscribe",
        onClick: () => {
          console.log("Subscribe");
        },
      },
    });
  }

  function handleAddToastLong() {
    toaster.create({
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    });
  }

  return (
    <div>
      <div className="sticky top-0 z-10 flex justify-end gap-2 p-4">
        <Button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          Toggle theme
        </Button>
      </div>
      <div className="grid grid-cols-4 gap-4 p-4">
        <Card>
          <Heading level={2}>Avatar</Heading>
          <Avatar initials="FB" src="https://i.pravatar.cc/300" alt="avatar" />
        </Card>
        <Card>
          <Heading level={2}>Heading</Heading>
          <Heading level={1}>Heading 1</Heading>
          <Heading level={2}>Heading 2</Heading>
          <Heading level={3}>Heading 3</Heading>
          <Heading level={4}>Heading 4</Heading>
          <Heading level={5}>Heading 5</Heading>
          <Heading level={6}>Heading 6</Heading>
        </Card>
        <Card>
          <Heading level={2}>Button</Heading>
          <div className="flex flex-col gap-2">
            <Button>Gray solid</Button>
            <Button variant="outline">Gray outline</Button>
            <Button variant="ghost">Gray ghost</Button>
            <Button colorPalette="orange">Orange</Button>
            <Button colorPalette="teal">Teal</Button>
            <Button colorPalette="green">Green</Button>
            <Button colorPalette="red">Red</Button>
            <Button loading loadingText="Loading...">
              Loading
            </Button>
            <Button>
              <LuMail size={16} />
              With icon
            </Button>
          </div>
        </Card>
        <Card>
          <Heading level={2}>Tooltip</Heading>
          <div className="flex flex-col gap-2">
            <Tooltip content="Tooltip content">
              <Button variant="outline">Hover me</Button>
            </Tooltip>
            <Tooltip content="Tooltip content" showArrow>
              <Button variant="outline">Hover me with arrow</Button>
            </Tooltip>
          </div>
        </Card>
        <Card>
          <Heading level={2}>Popover</Heading>
          <div className="flex flex-col gap-2">
            <PopoverRoot>
              <PopoverTrigger asChild>
                <Button variant="outline">Click me</Button>
              </PopoverTrigger>
              <PopoverContent showCloseTrigger>
                <PopoverTitle>Favorite Framework</PopoverTitle>
                <PopoverDescription>
                  Tell us what is your favorite framework and why you love to
                  use it.
                </PopoverDescription>
              </PopoverContent>
            </PopoverRoot>
            <PopoverRoot>
              <PopoverTrigger asChild>
                <Button variant="outline">Click me with arrow</Button>
              </PopoverTrigger>
              <PopoverContent showArrow>
                <PopoverTitle>Favorite Framework</PopoverTitle>
                <PopoverDescription>
                  Tell us what is your favorite framework and why you love to
                  use it.
                </PopoverDescription>
              </PopoverContent>
            </PopoverRoot>
          </div>
        </Card>
        <Card>
          <Heading level={2}>Menu</Heading>
          <div className="flex flex-col gap-2">
            <MenuRoot positioning={{ placement: "bottom" }}>
              <MenuTrigger asChild>
                <Button variant="outline">Click me</Button>
              </MenuTrigger>
              <MenuContent>
                <MenuItem value="new-txt">New Text File</MenuItem>
                <MenuItem value="new-file">New File...</MenuItem>
                <MenuItem value="new-win">New Window</MenuItem>
                <MenuItem value="open-file">Open File...</MenuItem>
                <MenuItem value="export">Export</MenuItem>
              </MenuContent>
            </MenuRoot>
            <MenuRoot positioning={{ placement: "bottom" }}>
              <MenuTrigger asChild>
                <Button variant="outline">Click me with arrow</Button>
              </MenuTrigger>
              <MenuContent showArrow>
                <MenuItem value="new-txt">New Text File</MenuItem>
                <MenuItem value="new-file">New File...</MenuItem>
                <MenuItem value="new-win">New Window</MenuItem>
                <MenuItem value="open-file">Open File...</MenuItem>
                <MenuItem value="export">Export</MenuItem>
              </MenuContent>
            </MenuRoot>
            <MenuRoot positioning={{ placement: "bottom" }}>
              <MenuTrigger asChild>
                <Button variant="outline">Click me with seperator</Button>
              </MenuTrigger>
              <MenuContent>
                <MenuItem value="react">React</MenuItem>
                <MenuItem value="solid">Solid</MenuItem>
                <MenuSeparator />
                <MenuItem value="vue" disabled>
                  Vue
                </MenuItem>
              </MenuContent>
            </MenuRoot>
            <MenuRoot positioning={{ placement: "bottom" }}>
              <MenuTrigger asChild>
                <Button variant="outline">Edit</Button>
              </MenuTrigger>
              <MenuContent>
                <MenuItemGroup title="Styles">
                  <MenuItem value="bold">Bold</MenuItem>
                  <MenuItem value="underline">Underline</MenuItem>
                </MenuItemGroup>
                <MenuSeparator />
                <MenuItemGroup title="Align">
                  <MenuItem value="left">Left</MenuItem>
                  <MenuItem value="middle">Middle</MenuItem>
                  <MenuItem value="right">Right</MenuItem>
                </MenuItemGroup>
              </MenuContent>
            </MenuRoot>
          </div>
        </Card>
        <Card>
          <Heading level={2}>Input</Heading>
          <div className="flex flex-col gap-2">
            <Input placeholder="Subtle" />
            <Input placeholder="Outline" variant="outline" />
            <Input placeholder="Disabled" disabled />
          </div>
        </Card>
        <Card>
          <Heading level={2}>Password Input</Heading>
          <div className="flex flex-col gap-2">
            <PasswordInput />
            <PasswordInput disabled />
          </div>
        </Card>
        <Card>
          <Heading level={2}>Field</Heading>
          <div className="flex flex-col gap-2">
            <FieldRoot>
              <FieldLabel>Label</FieldLabel>
              <Input placeholder="Input" />
              <FieldHelperText>Helper text</FieldHelperText>
            </FieldRoot>
            <Field label="Label" errorText="Error text" invalid>
              <Input placeholder="Input" />
            </Field>
          </div>
        </Card>
        <Card className="overflow-hidden">
          <Heading level={2}>Clipboard</Heading>
          <Clipboard value="https://ark-ui.com" />
        </Card>
        <Card>
          <Heading level={2}>Textarea</Heading>
          <Textarea placeholder="Textarea" />
          <Textarea placeholder="Disabled" disabled />
        </Card>
        <Card>
          <Heading level={2}>Tabs</Heading>
          <div className="flex flex-col gap-2">
            <TabsRoot>
              <TabsList>
                <TabsTrigger value="react">React</TabsTrigger>
                <TabsTrigger value="vue" disabled>
                  Vue
                </TabsTrigger>
                <TabsTrigger value="solid">Solid</TabsTrigger>
              </TabsList>
              <TabsContent value="react">React Content</TabsContent>
              <TabsContent value="vue">Vue Content</TabsContent>
              <TabsContent value="solid">Solid Content</TabsContent>
            </TabsRoot>
            <TabsRoot>
              <TabsList>
                <TabsTrigger value="/react" asChild>
                  <Link href="/react">React</Link>
                </TabsTrigger>
                <TabsTrigger value="/vue" asChild disabled>
                  <Link href="/vue">Vue</Link>
                </TabsTrigger>
                <TabsTrigger value="/solid" asChild>
                  <Link href="/solid">Solid</Link>
                </TabsTrigger>
              </TabsList>
            </TabsRoot>
          </div>
        </Card>
        <Card>
          <Heading level={2}>Switch</Heading>
          <div className="flex flex-col gap-2">
            <Switch label="Gray" />
            <Switch colorPalette="orange" label="Orange" />
            <Switch colorPalette="teal" label="Teal" />
            <Switch colorPalette="green" label="Green" />
            <Switch colorPalette="red" label="Red" />
            <Switch label="Disabled" disabled />
          </div>
        </Card>
        <Card>
          <Heading level={2}>Alert</Heading>
          <div className="flex flex-col gap-2">
            <Alert
              showIndicator
              title="Chakra is going live on August 30th. Get ready!"
            />
            <Alert
              status="warning"
              showIndicator
              title="Seems your account is about expire, upgrade now"
            />
            <Alert
              status="success"
              showIndicator
              title="Data uploaded to the server. Fire on!"
            />
            <Alert
              status="error"
              showIndicator
              title="There was an error processing your request"
            />
            <Alert
              status="error"
              showIndicator
              title="Invalid Fields"
              description="Your form has some errors. Please fix them and try again."
            />
          </div>
        </Card>
        <Card>
          <Heading level={2}>Tag</Heading>
          <div className="flex flex-col gap-2">
            <Tag>Gray</Tag>
            <Tag colorPalette="orange">Orange</Tag>
            <Tag colorPalette="teal">Teal</Tag>
            <Tag colorPalette="green">Green</Tag>
            <Tag colorPalette="red">Red</Tag>
            <Tag>
              <LuMail size={12} />
              With icon
            </Tag>
          </div>
        </Card>
        <Card>
          <Heading level={2}>Separator</Heading>
          <div className="flex flex-col gap-2">
            <Separator />
            <Separator colorPalette="orange" />
            <Separator colorPalette="teal" />
            <Separator colorPalette="green" />
            <Separator colorPalette="red" />
            <Separator variant="dashed" />
            <Separator variant="dotted" />
            <div className="h-5">
              <Separator orientation="vertical" />
            </div>
          </div>
        </Card>
        <Card>
          <Heading level={2}>Dialog</Heading>
          <DialogRoot>
            <DialogTrigger asChild>
              <Button variant="outline">Open dialog</Button>
            </DialogTrigger>
            <DialogContent showCloseTrigger>
              <DialogHeader>
                <DialogTitle>Dialog Title</DialogTitle>
              </DialogHeader>
              <DialogBody>
                <DialogDescription>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </DialogDescription>
              </DialogBody>
              <DialogFooter>
                <DialogCloseTrigger asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogCloseTrigger>
                <Button colorPalette="orange">Save</Button>
              </DialogFooter>
            </DialogContent>
          </DialogRoot>
        </Card>
        <Card>
          <Heading level={2}>Checkbox</Heading>
          <div className="flex flex-col gap-2">
            <Checkbox label="Gray" />
            <Checkbox colorPalette="orange" label="Orange" />
            <Checkbox colorPalette="teal" label="Teal" />
            <Checkbox colorPalette="green" label="Green" />
            <Checkbox colorPalette="red" label="Red" />
            <Checkbox label="Disabled" disabled />
          </div>
        </Card>
        <Card>
          <Heading level={2}>Radio Group</Heading>
          <div className="flex flex-col gap-2">
            <RadioGroup>
              <RadioGroupLabel>Gray</RadioGroupLabel>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="react">React</RadioGroupItem>
                <RadioGroupItem value="vue">Vue</RadioGroupItem>
                <RadioGroupItem value="solid">Solid</RadioGroupItem>
              </div>
            </RadioGroup>
            <RadioGroup colorPalette="orange">
              <RadioGroupLabel>Orange</RadioGroupLabel>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="react">React</RadioGroupItem>
                <RadioGroupItem value="vue">Vue</RadioGroupItem>
                <RadioGroupItem value="solid">Solid</RadioGroupItem>
              </div>
            </RadioGroup>
            <RadioGroup colorPalette="teal">
              <RadioGroupLabel>Teal</RadioGroupLabel>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="react">React</RadioGroupItem>
                <RadioGroupItem value="vue">Vue</RadioGroupItem>
                <RadioGroupItem value="solid">Solid</RadioGroupItem>
              </div>
            </RadioGroup>
            <RadioGroup colorPalette="green">
              <RadioGroupLabel>Teal</RadioGroupLabel>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="react">React</RadioGroupItem>
                <RadioGroupItem value="vue">Vue</RadioGroupItem>
                <RadioGroupItem value="solid">Solid</RadioGroupItem>
              </div>
            </RadioGroup>
            <RadioGroup colorPalette="red">
              <RadioGroupLabel>Green</RadioGroupLabel>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="react">React</RadioGroupItem>
                <RadioGroupItem value="vue">Vue</RadioGroupItem>
                <RadioGroupItem value="solid">Solid</RadioGroupItem>
              </div>
            </RadioGroup>
            <RadioGroup disabled>
              <RadioGroupLabel>Teal</RadioGroupLabel>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="react">React</RadioGroupItem>
                <RadioGroupItem value="vue">Vue</RadioGroupItem>
                <RadioGroupItem value="solid">Solid</RadioGroupItem>
              </div>
            </RadioGroup>
          </div>
        </Card>
        <Card>
          <Heading level={2}>Toast</Heading>
          <div className="flex flex-col gap-2">
            <Button variant="outline" onClick={() => handleAddToast("success")}>
              Add toast success
            </Button>
            <Button variant="outline" onClick={() => handleAddToast("error")}>
              Add toast error
            </Button>
            <Button variant="outline" onClick={() => handleAddToast("loading")}>
              Add toast loading
            </Button>
            <Button variant="outline" onClick={() => handleAddToast("info")}>
              Add toast info
            </Button>
            <Button variant="outline" onClick={handleAddToastWithAction}>
              Add toast with action
            </Button>
            <Button variant="outline" onClick={handleAddToastLong}>
              Add toast long
            </Button>
          </div>
        </Card>
        <Card>
          <Heading level={2}>Highlight</Heading>
          <div className="flex flex-col gap-2">
            <p>
              <Highlight query="ipsum" text="Lorem ipsum dolor sit amet" />
            </p>
            <Heading>
              <Highlight query="ipsum" text="Lorem ipsum dolor sit amet" />
            </Heading>
            <p>
              <Highlight
                colorPalette="orange"
                query="ipsum"
                text="Lorem ipsum dolor sit amet"
              />
            </p>
            <p>
              <Highlight
                colorPalette="teal"
                query="ipsum"
                text="Lorem ipsum dolor sit amet"
              />
            </p>
            <p>
              <Highlight
                colorPalette="green"
                query="ipsum"
                text="Lorem ipsum dolor sit amet"
              />
            </p>
            <p>
              <Highlight
                colorPalette="red"
                query="ipsum"
                text="Lorem ipsum dolor sit amet"
              />
            </p>
          </div>
        </Card>
        <Card>
          <Heading level={2}>Select</Heading>
          <div className="flex flex-col gap-2">
            <SelectRoot collection={frameworksCollection.collection}>
              <SelectLabel>Favorite Framework</SelectLabel>
              <SelectTrigger>
                <SelectValueText placeholder="Select something" />
              </SelectTrigger>
              <SelectContent>
                {frameworksCollection.collection.items.map((item) => (
                  <SelectItem key={item.value} item={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </SelectRoot>
            <SelectRoot collection={frameworksCollection.collection} disabled>
              <SelectLabel>Favorite Framework</SelectLabel>
              <SelectTrigger>
                <SelectValueText placeholder="Select something" />
              </SelectTrigger>
              <SelectContent>
                {frameworksCollection.collection.items.map((item) => (
                  <SelectItem key={item.value} item={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </SelectRoot>
            <Field label="Favorite Framework" errorText="Error text" invalid>
              <SelectRoot collection={frameworksCollection.collection}>
                <SelectTrigger>
                  <SelectValueText placeholder="Select something" />
                </SelectTrigger>
                <SelectContent>
                  {frameworksCollection.collection.items.map((item) => (
                    <SelectItem key={item.value} item={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </SelectRoot>
            </Field>
            <Field label="Members">
              <SelectRoot collection={membersCollection.collection}>
                <SelectTrigger>
                  <SelectValueText placeholder="Select movie" />
                </SelectTrigger>
                <SelectContent>
                  {membersCollection.collection.items.map((item) => (
                    <SelectItem key={item.value} item={item.value}>
                      <div className="flex items-center gap-1">
                        <Avatar src={item.avatar} />
                        {item.label}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </SelectRoot>
            </Field>
          </div>
        </Card>
        <Card>
          <Heading level={2}>Combobox</Heading>
          <div className="flex flex-col gap-2">
            <ComboboxRoot
              collection={frameworksCollection.collection}
              onInputValueChange={handleInputChange}
            >
              <ComboboxLabel>Favorite Framework</ComboboxLabel>
              <ComboboxInput placeholder="Select something" />
              <ComboboxContent>
                {frameworksCollection.collection.items.map((item) => (
                  <ComboboxItem key={item.value} item={item.value}>
                    {item.label}
                  </ComboboxItem>
                ))}
              </ComboboxContent>
            </ComboboxRoot>
            <ComboboxRoot
              collection={frameworksCollection.collection}
              onInputValueChange={handleInputChange}
              disabled
            >
              <ComboboxLabel>Favorite Framework</ComboboxLabel>
              <ComboboxInput placeholder="Select something" />
              <ComboboxContent>
                {frameworksCollection.collection.items.map((item) => (
                  <ComboboxItem key={item.value} item={item.value}>
                    {item.label}
                  </ComboboxItem>
                ))}
              </ComboboxContent>
            </ComboboxRoot>
            <Field label="Favorite Framework" errorText="Error text" invalid>
              <ComboboxRoot
                collection={frameworksCollection.collection}
                onInputValueChange={handleInputChange}
              >
                <ComboboxInput placeholder="Select something" />
                <ComboboxContent>
                  <ComboboxItemGroup title="Frameworks">
                    {frameworksCollection.collection.items.map((item) => (
                      <ComboboxItem key={item.value} item={item.value}>
                        {item.label}
                      </ComboboxItem>
                    ))}
                  </ComboboxItemGroup>
                </ComboboxContent>
              </ComboboxRoot>
            </Field>
            <Field label="Members">
              <ComboboxRoot
                collection={membersCollection.collection}
                onInputValueChange={handleInputChange2}
              >
                <ComboboxInput placeholder="Select movie" />
                <ComboboxContent>
                  {membersCollection.collection.items.map((item) => (
                    <ComboboxItem key={item.value} item={item.value}>
                      <div className="flex items-center gap-1">
                        <Avatar src={item.avatar} />
                        {item.label}
                      </div>
                    </ComboboxItem>
                  ))}
                </ComboboxContent>
              </ComboboxRoot>
            </Field>
          </div>
        </Card>
        <Card>
          <Heading level={2}>QR Code</Heading>
          <div className="flex flex-col gap-2">
            <QrCode value="https://ark-ui.com" />
            <QrCode value="https://ark-ui.com">
              <QrCodeDownloadTrigger
                asChild
                fileName="qr-code.png"
                mimeType="image/png"
              >
                <Button>Download</Button>
              </QrCodeDownloadTrigger>
            </QrCode>
          </div>
        </Card>
        <Card>
          <Heading level={2}>Checkbox Card</Heading>
          <div className="flex flex-col gap-2">
            <CheckboxCard label="Next.js" description="Best for apps" />
            <CheckboxCard colorPalette="orange" label="Orange" />
            <CheckboxCard colorPalette="teal" label="Teal" />
            <CheckboxCard colorPalette="green" label="Green" />
            <CheckboxCard colorPalette="red" label="Red" />
            <CheckboxCard label="Disabled" disabled />
          </div>
        </Card>
        <Card>
          <Heading level={2}>Steps</Heading>
          <div className="flex flex-col gap-2">
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
                  <Button variant="outline">Back</Button>
                </StepsPrevTrigger>
                <StepsNextTrigger asChild>
                  <Button variant="outline">Next</Button>
                </StepsNextTrigger>
              </div>
            </StepsRoot>
          </div>
        </Card>
        <Card>
          <Heading level={2}>Progress</Heading>
          <div className="flex flex-col gap-2">
            <ProgressRoot defaultValue={48}>
              <ProgressLabel>Label</ProgressLabel>
              <ProgressTrack>
                <ProgressRange />
              </ProgressTrack>
              <ProgressValueText />
            </ProgressRoot>
            <ProgressRoot defaultValue={null}>
              <ProgressLabel>Indeterminate progress</ProgressLabel>
              <ProgressTrack>
                <ProgressRange />
              </ProgressTrack>
              <ProgressValueText />
            </ProgressRoot>
          </div>
        </Card>
        <Card>
          <Heading level={2}>Progress Circle</Heading>
          <div className="flex flex-col gap-2">
            <ProgressRoot defaultValue={64}>
              <ProgressLabel>Label</ProgressLabel>
              <ProgressCircle>
                <ProgressCircleTrack />
                <ProgressCircleRange />
              </ProgressCircle>
              <ProgressValueText />
            </ProgressRoot>
            <ProgressRoot
              defaultValue={64}
              className="flex flex-col items-center"
            >
              <ProgressLabel>Label</ProgressLabel>
              <ProgressCircle>
                <ProgressCircleTrack />
                <ProgressCircleRange />
              </ProgressCircle>
              <ProgressValueText />
            </ProgressRoot>
          </div>
        </Card>
        <Card>
          <Heading level={2}>Pagination</Heading>
          <div className="flex flex-col gap-2">
            <PaginationRoot count={20} pageSize={2} defaultPage={1}>
              <PaginationPrevTrigger />
              <PaginationItems />
              <PaginationNextTrigger />
            </PaginationRoot>
          </div>
        </Card>
        <Card>
          <Heading level={2}>Rating</Heading>
          <div className="flex flex-col gap-2">
            <Rating label="Gray" />
            <Rating label="Orange" colorPallete="orange" />
            <Rating label="Teal" colorPallete="teal" />
            <Rating label="Green" colorPallete="green" />
            <Rating label="Red" colorPallete="red" />
          </div>
        </Card>
        <Card>
          <Heading level={2}>Pin Input</Heading>
          <div className="flex flex-col gap-2">
            <PinInput
              label="Please paste your 6-digit code:"
              count={6}
              placeholder=""
              otp
            />
          </div>
        </Card>
        <Card>
          <Heading level={2}>Accordion</Heading>
          <div className="flex flex-col gap-2">
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
          </div>
        </Card>
      </div>
    </div>
  );
}
