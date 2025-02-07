import { LuMail } from "react-icons/lu";
import { Avatar } from "./components/avatar";
import { Button } from "./components/button";
import { Card } from "./components/card";
import { Heading } from "./components/heading";

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
          <Button colorPalette="gray" variant="solid">
            Gray solid
          </Button>
          <Button colorPalette="gray" variant="outline">
            Gray outline
          </Button>
          <Button colorPalette="orange">Orange</Button>
          <Button colorPalette="teal">Teal</Button>
          <Button colorPalette="green">Green</Button>
          <Button colorPalette="red">Red</Button>
          <Button loading loadingText="Gray solid loading...">
            Gray solid loading
          </Button>
          <Button
            variant="outline"
            loading
            loadingText="Gray outline loading..."
          >
            Gray outline loading
          </Button>
          <Button colorPalette="orange" loading loadingText="Orange loading...">
            Orange loading
          </Button>
          <Button colorPalette="teal" loading loadingText="Teal loading...">
            Teal loading
          </Button>
          <Button colorPalette="green" loading loadingText="Green loading...">
            Green loading
          </Button>
          <Button colorPalette="red" loading loadingText="Red loading...">
            Red loading
          </Button>
          <Button>
            <LuMail size={16} />
            With icon solid
          </Button>
          <Button variant="outline">
            <LuMail size={16} />
            With icon outline
          </Button>
          <Button colorPalette="orange">
            <LuMail size={16} />
            With icon orange
          </Button>
          <Button colorPalette="teal">
            <LuMail size={16} />
            With icon teal
          </Button>
          <Button colorPalette="green">
            <LuMail size={16} />
            With icon green
          </Button>
          <Button colorPalette="red">
            <LuMail size={16} />
            With icon red
          </Button>
        </div>
      </Card>
    </div>
  );
}
