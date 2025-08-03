import { Avatar } from "@/components/avatar";
import { Card } from "@/components/card";
import { CodeBlock } from "@/components/code-block";
import { Heading } from "@/components/heading";
import { Text } from "@/components/text";
import { CODE_BLOCKS } from "app/constants";

const CODE_EXAMPLES = [
  {
    code: `import { Avatar } from '@/components/avatar'

function Example() {
  return (
    <Avatar initials="FB" src="https://i.pravatar.cc/300" alt="avatar" />
  )
}
`,
  },
  {
    code: `import { Avatar } from '@/components/avatar'

function Example() {
  return (
    <div className="flex items-center gap-2">
      <Avatar size="xs" src="https://i.pravatar.cc/300" />
      <Avatar size="sm" src="https://i.pravatar.cc/300" />
      <Avatar size="md" src="https://i.pravatar.cc/300" />
      <Avatar size="lg" src="https://i.pravatar.cc/300" />
      <Avatar size="xl" src="https://i.pravatar.cc/300" />
      <Avatar size="2xl" src="https://i.pravatar.cc/300" />
    </div>
  )
}
`,
  },
  {
    code: `import { Avatar } from '@/components/avatar'

function Example() {
  return (
    <Avatar initials="ak" />
  )
}
`,
  },
  {
    code: `import { Avatar } from '@/components/avatar'

function Example() {
  return (
    <Avatar initials="ak" square />
  )
}
`,
  },
];

function AvatarPage() {
  return (
    <>
      <Heading>Avatar</Heading>
      <Text className="mb-6">
        Used to represent user profile picture or initials.
      </Text>
      <Card className="mb-6">
        <Avatar initials="FB" src="https://i.pravatar.cc/300" alt="avatar" />
      </Card>
      <CodeBlock
        className="mb-6"
        theme={CODE_BLOCKS.THEME}
        language={CODE_BLOCKS.LANGUAGE}
        code={CODE_EXAMPLES[0].code}
      />
      <Heading level={2} className="mb-2">
        Examples
      </Heading>
      <Heading level={3}>Sizes</Heading>
      <Text className="mb-6">
        Use the size prop to change the size of the avatar:
      </Text>
      <Card className="mb-6">
        <div className="flex items-center gap-2">
          <Avatar size="xs" src="https://i.pravatar.cc/300" />
          <Avatar size="sm" src="https://i.pravatar.cc/300" />
          <Avatar size="md" src="https://i.pravatar.cc/300" />
          <Avatar size="lg" src="https://i.pravatar.cc/300" />
          <Avatar size="xl" src="https://i.pravatar.cc/300" />
          <Avatar size="2xl" src="https://i.pravatar.cc/300" />
        </div>
      </Card>
      <CodeBlock
        className="mb-6"
        theme={CODE_BLOCKS.THEME}
        language={CODE_BLOCKS.LANGUAGE}
        code={CODE_EXAMPLES[1].code}
      />
      <Heading level={3}>Initials</Heading>
      <Text className="mb-6">
        Use the initials prop to render an avatar with initials:
      </Text>
      <Card className="mb-6">
        <Avatar initials="ak" />
      </Card>
      <CodeBlock
        className="mb-6"
        theme={CODE_BLOCKS.THEME}
        language={CODE_BLOCKS.LANGUAGE}
        code={CODE_EXAMPLES[2].code}
      />
      <Heading level={3}>Square avatars</Heading>
      <Text className="mb-6">
        Use the square prop to render a square avatar:
      </Text>
      <Card className="mb-6">
        <Avatar initials="ak" square />
      </Card>
      <CodeBlock
        className="mb-6"
        theme={CODE_BLOCKS.THEME}
        language={CODE_BLOCKS.LANGUAGE}
        code={CODE_EXAMPLES[3].code}
      />
    </>
  );
}

export default AvatarPage;
