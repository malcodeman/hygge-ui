import { Avatar } from "../avatar";
import { Heading } from "../heading";
import { Text } from "../text";

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
