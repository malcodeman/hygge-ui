import { Avatar } from "@/components/avatar";
import { Heading } from "@/components/heading";
import { Text } from "@/components/text";

function AvatarPage() {
  return (
    <>
      <Heading>Avatar</Heading>
      <Text className="mb-6">
        A graphical representation of the user, often used in profile sections.
      </Text>
      <Avatar initials="FB" src="https://i.pravatar.cc/300" alt="avatar" />
    </>
  );
}

export default AvatarPage;
