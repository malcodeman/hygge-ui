import { Avatar } from "./components/avatar";

export default function Home() {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="rounded-lg border border-[#E9E8E6] bg-[#F9F9F8] p-2">
        <h2>Avatar</h2>
        <Avatar initials="FB" src="https://i.pravatar.cc/300" alt="avatar" />
      </div>
    </div>
  );
}
