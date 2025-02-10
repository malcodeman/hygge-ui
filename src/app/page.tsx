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
} from "./components/select";
import { createListCollection } from "@ark-ui/react";

export default function Home() {
  const frameworks = createListCollection({
    items: [
      { label: "React.js", value: "react" },
      { label: "Vue.js", value: "vue" },
      { label: "Angular", value: "angular" },
      { label: "Solid", value: "solid" },
    ],
  });

  function handleAddToast() {
    toaster.create({
      title: "Title",
      description: "Description",
    });
  }

  function handleActionAddToast() {
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

  return (
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
                Tell us what is your favorite framework and why you love to use
                it.
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
                Tell us what is your favorite framework and why you love to use
                it.
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
              <MenuItem value="new-txt">React</MenuItem>
              <MenuItem value="new-txt">Solid</MenuItem>
              <MenuSeparator />
              <MenuItem value="new-txt">Vue</MenuItem>
            </MenuContent>
          </MenuRoot>
        </div>
      </Card>
      <Card>
        <Heading level={2}>Input</Heading>
        <div className="flex flex-col gap-2">
          <Input placeholder="Input" />
          <Input placeholder="Disabled" disabled />
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
        <Heading level={2}>Toast</Heading>
        <div className="flex flex-col gap-2">
          <Button variant="outline" onClick={handleAddToast}>
            Add toast
          </Button>
          <Button variant="outline" onClick={handleActionAddToast}>
            Add toast with action
          </Button>
        </div>
      </Card>
      <Card>
        <Heading level={2}>Highlight</Heading>
        <div className="flex flex-col gap-2">
          <p>
            <Highlight query="ipsum" text="Lorem ipsum dolor sit amet" />
          </p>
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
          <SelectRoot collection={frameworks}>
            <SelectLabel>Favorite Framework</SelectLabel>
            <SelectTrigger placeholder="Select something" />
            <SelectContent>
              {frameworks.items.map((item) => (
                <SelectItem key={item.value} item={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </SelectRoot>
          <SelectRoot collection={frameworks} disabled>
            <SelectLabel>Favorite Framework</SelectLabel>
            <SelectTrigger placeholder="Select something" />
            <SelectContent>
              {frameworks.items.map((item) => (
                <SelectItem key={item.value} item={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </SelectRoot>
          <Field label="Favorite Framework" errorText="Error text" invalid>
            <SelectRoot collection={frameworks}>
              <SelectTrigger placeholder="Select something" />
              <SelectContent>
                {frameworks.items.map((item) => (
                  <SelectItem key={item.value} item={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </SelectRoot>
          </Field>
        </div>
      </Card>
    </div>
  );
}
