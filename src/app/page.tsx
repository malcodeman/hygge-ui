import { Avatar } from "./components/avatar";
import { Heading } from "./components/heading";

export default function Home() {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="rounded-lg border border-[#E9E8E6] bg-[#F9F9F8] p-2">
        <Heading level={2}>Avatar</Heading>
        <Avatar initials="FB" src="https://i.pravatar.cc/300" alt="avatar" />
      </div>
      <div className="rounded-lg border border-[#E9E8E6] bg-[#F9F9F8] p-2">
        <Heading level={2}>Heading</Heading>
        <Heading level={1}>Heading 1</Heading>
        <Heading level={2}>Heading 2</Heading>
        <Heading level={3}>Heading 3</Heading>
        <Heading level={4}>Heading 4</Heading>
        <Heading level={5}>Heading 5</Heading>
        <Heading level={6}>Heading 6</Heading>
      </div>
    </div>
  );
}
