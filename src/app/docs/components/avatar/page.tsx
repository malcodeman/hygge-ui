import { Avatar } from "@/components/avatar";
import { Heading } from "@/components/heading";
import { Highlight } from "@/components/highlight";
import { Text } from "@/components/text";
import { PageHeader } from "app/components/page-header";
import { PagePreviewCodeTabs } from "app/components/page-preview-code-tabs";

function AvatarPage() {
  return (
    <>
      <PageHeader
        title="Avatar"
        description="Used to represent user profile picture or initials."
        githubLink="https://github.com/malcodeman/hygge-ui/blob/main/src/components/avatar.tsx"
        className="mb-2"
        verified
      />
      <PagePreviewCodeTabs
        preview={
          <Avatar
            initials="FB"
            src="https://i.pravatar.cc/300?img=1"
            alt="avatar"
          />
        }
        code={`<Avatar
  initials="FB"
  src="https://i.pravatar.cc/300?img=1"
  alt="avatar"
/>`}
      />
      <Heading level={2} className="mt-10 mb-2">
        Examples
      </Heading>
      <Heading level={3} className="mb-2">
        Sizes
      </Heading>
      <Text className="mb-2">
        <Highlight
          query={["size"]}
          text="Use the size prop to change the size of the avatar."
        />
      </Text>
      <PagePreviewCodeTabs
        preview={
          <div className="flex items-center gap-2">
            <Avatar size="xs" src="https://i.pravatar.cc/300?img=1" />
            <Avatar size="sm" src="https://i.pravatar.cc/300?img=2" />
            <Avatar size="md" src="https://i.pravatar.cc/300?img=3" />
            <Avatar size="lg" src="https://i.pravatar.cc/300?img=4" />
            <Avatar size="xl" src="https://i.pravatar.cc/300?img=5" />
            <Avatar size="2xl" src="https://i.pravatar.cc/300?img=6" />
          </div>
        }
        code={`<div className="flex items-center gap-2">
  <Avatar size="xs" src="https://i.pravatar.cc/300?img=1" />
  <Avatar size="sm" src="https://i.pravatar.cc/300?img=2" />
  <Avatar size="md" src="https://i.pravatar.cc/300?img=3" />
  <Avatar size="lg" src="https://i.pravatar.cc/300?img=4" />
  <Avatar size="xl" src="https://i.pravatar.cc/300?img=5" />
  <Avatar size="2xl" src="https://i.pravatar.cc/300?img=6" />
</div>`}
      />
      <Heading level={3} className="mt-10 mb-2">
        With Initials
      </Heading>
      <Text className="mb-2">
        <Highlight
          query={["initials"]}
          text="Use the initials prop to render an avatar with initials."
        />
      </Text>
      <PagePreviewCodeTabs
        preview={<Avatar initials="ak" />}
        code={`<Avatar initials="ak" />`}
      />
      <Heading level={3} className="mt-10 mb-2">
        Square Avatars
      </Heading>
      <Text className="mb-2">
        <Highlight
          query={["square"]}
          text="Use the square prop to render a square avatar."
        />
      </Text>
      <PagePreviewCodeTabs
        preview={<Avatar initials="ak" square />}
        code={`<Avatar initials="ak" square />`}
      />
      <Heading level={3} className="mt-10 mb-2">
        Avatar Groups
      </Heading>
      <Text className="mb-2">
        Use utility classes to overlap a list of avatars and style them as a
        group.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <div className="flex items-center -space-x-2">
            <Avatar
              src="https://i.pravatar.cc/300?img=1"
              className="ring-2 ring-white dark:ring-[#191918]"
            />
            <Avatar
              src="https://i.pravatar.cc/300?img=2"
              className="ring-2 ring-white dark:ring-[#191918]"
            />
            <Avatar
              src="https://i.pravatar.cc/300?img=3"
              className="ring-2 ring-white dark:ring-[#191918]"
            />
          </div>
        }
        code={`<div className="flex items-center -space-x-2">
  <Avatar
    src="https://i.pravatar.cc/300?img=1"
    className="ring-2 ring-white dark:ring-[#191918]"
  />
  <Avatar
    src="https://i.pravatar.cc/300?img=2"
    className="ring-2 ring-white dark:ring-[#191918]"
  />
  <Avatar
    src="https://i.pravatar.cc/300?img=3"
    className="ring-2 ring-white dark:ring-[#191918]"
  />
</div>`}
      />
      <Heading level={3} className="mt-10 mb-2">
        Persona
      </Heading>
      <Text className="mb-2">
        <Highlight
          query={["Avatar"]}
          text="Here's an example of how to use the Avatar component to display a user persona."
        />
      </Text>
      <PagePreviewCodeTabs
        preview={
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Avatar size="md" src="https://i.pravatar.cc/300?img=1" />
              <div className="flex flex-col">
                <Heading level={6}>John Mason</Heading>
                <Text>john.mason@example.com</Text>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Avatar size="md" src="https://i.pravatar.cc/300?img=2" />
              <div className="flex flex-col">
                <Heading level={6}>Melissa Jones</Heading>
                <Text>melissa.jones@example.com</Text>
              </div>
            </div>
          </div>
        }
        code={`<div className="flex flex-col gap-2">
  <div className="flex items-center gap-2">
    <Avatar size="md" src="https://i.pravatar.cc/300?img=1" />
    <div className="flex flex-col">
      <Heading level={6}>John Mason</Heading>
      <Text>john.mason@example.com</Text>
    </div>
  </div>
  <div className="flex items-center gap-2">
    <Avatar size="md" src="https://i.pravatar.cc/300?img=2" />
    <div className="flex flex-col">
      <Heading level={6}>Melissa Jones</Heading>
      <Text>melissa.jones@example.com</Text>
    </div>
  </div>
</div>`}
      />
    </>
  );
}

export default AvatarPage;
