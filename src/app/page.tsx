import { LuMail } from "react-icons/lu";
import { Avatar } from "./components/avatar";
import { Button } from "./components/button";
import { Card } from "./components/card";
import { Heading } from "./components/heading";
import { Tooltip } from "./components/tooltip";

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
    </div>
  );
}
