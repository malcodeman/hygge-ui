import { LuMail } from "react-icons/lu";
import { Avatar } from "./components/avatar";
import { Button } from "./components/button";
import { Card } from "./components/card";
import { Heading } from "./components/heading";
import { Tooltip } from "./components/tooltip";
import {
  PopoverCloseTrigger,
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

export default function Home() {
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
            <PopoverContent>
              <PopoverTitle>Favorite Framework</PopoverTitle>
              <PopoverDescription>
                Tell us what is your favorite framework and why you love to use
                it.
              </PopoverDescription>
              <PopoverCloseTrigger />
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
              <PopoverCloseTrigger />
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
    </div>
  );
}
