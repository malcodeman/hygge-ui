import { Avatar } from "@/components/avatar";
import { Button } from "@/components/button";
import { Heading } from "@/components/heading";
import {
  MenuContent,
  MenuContextTrigger,
  MenuItem,
  MenuItemGroup,
  MenuItemGroupLabel,
  MenuRoot,
  MenuSeparator,
  MenuTrigger,
  MenuTriggerItem,
} from "@/components/menu";
import { Code, Text } from "@/components/text";
import { Portal } from "@ark-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "app/components/page-header";
import { PagePreviewCodeTabs } from "app/components/page-preview-code-tabs";
import { LuChevronRight } from "react-icons/lu";

export const Route = createFileRoute("/docs/components/menu")({
  component: MenuPage,
  head: () => ({
    meta: [
      {
        title: "Menu | Hygge UI",
      },
    ],
  }),
});

function MenuPage() {
  return (
    <>
      <PageHeader
        title="Menu"
        description="Used to create an accessible dropdown menu."
        githubLink="https://github.com/malcodeman/hygge-ui/blob/main/src/components/menu.tsx"
        className="mb-2"
        verified
      />
      <PagePreviewCodeTabs
        preview={
          <MenuRoot>
            <MenuTrigger asChild>
              <Button variant="outline" size="sm">
                Open
              </Button>
            </MenuTrigger>
            <MenuContent>
              <MenuItem value="new-txt">New Text File</MenuItem>
              <MenuItem value="new-file">New File...</MenuItem>
              <MenuItem value="new-win">New Window</MenuItem>
              <MenuItem value="open-file">Open File...</MenuItem>
              <MenuItem value="export">Export</MenuItem>
            </MenuContent>
          </MenuRoot>
        }
        code={`<MenuRoot>
  <MenuTrigger asChild>
    <Button variant="outline" size="sm">
      Open
    </Button>
  </MenuTrigger>
  <MenuContent>
    <MenuItem value="new-txt">New Text File</MenuItem>
    <MenuItem value="new-file">New File...</MenuItem>
    <MenuItem value="new-win">New Window</MenuItem>
    <MenuItem value="open-file">Open File...</MenuItem>
    <MenuItem value="export">Export</MenuItem>
  </MenuContent>
</MenuRoot>`}
      />
      <Heading level={2} className="mt-10 mb-2">
        Examples
      </Heading>
      <Heading level={3} size="lg" className="mb-2">
        Context Menu
      </Heading>
      <Text className="mb-2">
        Use the <Code>MenuContextTrigger</Code> component to create a context
        menu.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <MenuRoot>
            <MenuContextTrigger className="w-full">
              <div className="border-border-subtle flex h-40 items-center justify-center rounded-lg border-2 border-dashed p-4">
                Right click here
              </div>
            </MenuContextTrigger>
            <MenuContent>
              <MenuItem value="new-txt">New Text File</MenuItem>
              <MenuItem value="new-file">New File...</MenuItem>
              <MenuItem value="new-win">New Window</MenuItem>
              <MenuItem value="open-file">Open File...</MenuItem>
              <MenuItem value="export">Export</MenuItem>
            </MenuContent>
          </MenuRoot>
        }
        code={`<MenuRoot>
  <MenuContextTrigger className="w-full">
    <div className="border-border-subtle flex h-40 items-center justify-center rounded-lg border-2 border-dashed p-4">
      Right click here
    </div>
  </MenuContextTrigger>
  <MenuContent>
    <MenuItem value="new-txt">New Text File</MenuItem>
    <MenuItem value="new-file">New File...</MenuItem>
    <MenuItem value="new-win">New Window</MenuItem>
    <MenuItem value="open-file">Open File...</MenuItem>
    <MenuItem value="export">Export</MenuItem>
  </MenuContent>
</MenuRoot>`}
      />
      <Heading level={3} size="lg" className="mt-10 mb-2">
        Group
      </Heading>
      <Text className="mb-2">
        Use the <Code>MenuItemGroup</Code> component to group related menu
        items.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <MenuRoot>
            <MenuTrigger asChild>
              <Button variant="outline" size="sm">
                Edit
              </Button>
            </MenuTrigger>
            <MenuContent>
              <MenuItemGroup>
                <MenuItemGroupLabel>Styles</MenuItemGroupLabel>
                <MenuItem value="bold">Bold</MenuItem>
                <MenuItem value="underline">Underline</MenuItem>
              </MenuItemGroup>
              <MenuSeparator />
              <MenuItemGroup>
                <MenuItemGroupLabel>Align</MenuItemGroupLabel>
                <MenuItem value="left">Left</MenuItem>
                <MenuItem value="middle">Middle</MenuItem>
                <MenuItem value="right">Right</MenuItem>
              </MenuItemGroup>
            </MenuContent>
          </MenuRoot>
        }
        code={`<MenuRoot>
  <MenuTrigger asChild>
    <Button variant="outline" size="sm">
      Edit
    </Button>
  </MenuTrigger>
  <MenuContent>
    <MenuItemGroup>
      <MenuItemGroupLabel>Styles</MenuItemGroupLabel>
      <MenuItem value="bold">Bold</MenuItem>
      <MenuItem value="underline">Underline</MenuItem>
    </MenuItemGroup>
    <MenuSeparator />
    <MenuItemGroup>
      <MenuItemGroupLabel>Align</MenuItemGroupLabel>
      <MenuItem value="left">Left</MenuItem>
      <MenuItem value="middle">Middle</MenuItem>
      <MenuItem value="right">Right</MenuItem>
    </MenuItemGroup>
  </MenuContent>
</MenuRoot>`}
      />
      <Heading level={3} size="lg" className="mt-10 mb-2">
        Submenu
      </Heading>
      <Text className="mb-2">
        Here&apos;s an example of how to create a submenu.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <MenuRoot positioning={{ placement: "right-start" }}>
            <MenuTrigger asChild>
              <Button variant="outline" size="sm">
                Open
              </Button>
            </MenuTrigger>
            <MenuContent>
              <MenuItem value="new-txt">New Text File</MenuItem>
              <MenuItem value="new-file">New File...</MenuItem>
              <MenuRoot positioning={{ placement: "right-start", gutter: 2 }}>
                <MenuTriggerItem>
                  Open Recent <LuChevronRight />
                </MenuTriggerItem>
                <Portal>
                  <MenuContent>
                    <MenuItem value="panda">Panda</MenuItem>
                    <MenuItem value="ark">Ark UI</MenuItem>
                    <MenuItem value="chakra">Chakra v3</MenuItem>
                  </MenuContent>
                </Portal>
              </MenuRoot>
              <MenuItem value="open-file">Open File...</MenuItem>
              <MenuItem value="export">Export</MenuItem>
            </MenuContent>
          </MenuRoot>
        }
        code={`<MenuRoot positioning={{ placement: "right-start" }}>
  <MenuTrigger asChild>
    <Button variant="outline" size="sm">
      Open
    </Button>
  </MenuTrigger>
  <MenuContent>
    <MenuItem value="new-txt">New Text File</MenuItem>
    <MenuItem value="new-file">New File...</MenuItem>
    <MenuRoot positioning={{ placement: "right-start", gutter: 2 }}>
      <MenuTriggerItem>
        Open Recent <LuChevronRight />
      </MenuTriggerItem>
      <Portal>
        <MenuContent>
          <MenuItem value="panda">Panda</MenuItem>
          <MenuItem value="ark">Ark UI</MenuItem>
          <MenuItem value="chakra">Chakra v3</MenuItem>
        </MenuContent>
      </Portal>
    </MenuRoot>
    <MenuItem value="open-file">Open File...</MenuItem>
    <MenuItem value="export">Export</MenuItem>
  </MenuContent>
</MenuRoot>`}
      />
      <Heading level={3} size="lg" className="mt-10 mb-2">
        Links
      </Heading>
      <Text className="mb-2">
        Pass the <Code>asChild</Code> prop to the <Code>MenuItem</Code>{" "}
        component to render a link.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <MenuRoot>
            <MenuTrigger asChild>
              <Button variant="outline" size="sm">
                Select Anime
              </Button>
            </MenuTrigger>
            <MenuContent>
              <MenuItem value="Naruto" asChild>
                <a href="https://www.crunchyroll.com/naruto" target="_blank">
                  Naruto
                </a>
              </MenuItem>
              <MenuItem value="One Piece" asChild>
                <a href="https://www.crunchyroll.com/one-piece" target="_blank">
                  One Piece
                </a>
              </MenuItem>
              <MenuItem value="Attack on Titan" asChild>
                <a
                  href="https://www.crunchyroll.com/attack-on-titan"
                  target="_blank"
                >
                  Attack on Titan
                </a>
              </MenuItem>
            </MenuContent>
          </MenuRoot>
        }
        code={`<MenuRoot>
  <MenuTrigger asChild>
    <Button variant="outline" size="sm">
      Select Anime
    </Button>
  </MenuTrigger>
  <MenuContent>
    <MenuItem value="Naruto" asChild>
      <a href="https://www.crunchyroll.com/naruto" target="_blank">
        Naruto
      </a>
    </MenuItem>
    <MenuItem value="One Piece" asChild>
      <a href="https://www.crunchyroll.com/one-piece" target="_blank">
        One Piece
      </a>
    </MenuItem>
    <MenuItem value="Attack on Titan" asChild>
      <a
        href="https://www.crunchyroll.com/attack-on-titan"
        target="_blank"
      >
        Attack on Titan
      </a>
    </MenuItem>
  </MenuContent>
</MenuRoot>`}
      />
      <Heading level={3} size="lg" className="mt-10 mb-2">
        Placement
      </Heading>
      <Text className="mb-2">
        Use the <Code>placement</Code> prop to control the placement of the
        menu.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <MenuRoot positioning={{ placement: "right-start" }}>
            <MenuTrigger asChild>
              <Button variant="outline" size="sm">
                Open
              </Button>
            </MenuTrigger>
            <MenuContent>
              <MenuItem value="new-txt">New Text File</MenuItem>
              <MenuItem value="new-file">New File...</MenuItem>
              <MenuItem value="new-win">New Window</MenuItem>
              <MenuItem value="open-file">Open File...</MenuItem>
              <MenuItem value="export">Export</MenuItem>
            </MenuContent>
          </MenuRoot>
        }
        code={`<MenuRoot positioning={{ placement: "right-start" }}>
  <MenuTrigger asChild>
    <Button variant="outline" size="sm">
      Open
    </Button>
  </MenuTrigger>
  <MenuContent>
    <MenuItem value="new-txt">New Text File</MenuItem>
    <MenuItem value="new-file">New File...</MenuItem>
    <MenuItem value="new-win">New Window</MenuItem>
    <MenuItem value="open-file">Open File...</MenuItem>
    <MenuItem value="export">Export</MenuItem>
  </MenuContent>
</MenuRoot>`}
      />
      <Heading level={3} size="lg" className="mt-10 mb-2">
        Avatar
      </Heading>
      <Text className="mb-2">
        Here&apos;s an example that composes the <Code>Menu</Code> with the{" "}
        <Code>Avatar</Code> component to display a menu underneath an avatar.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <MenuRoot positioning={{ placement: "right-end" }}>
            <MenuTrigger>
              <Avatar size="sm" src="https://bit.ly/sage-adebayo" />
            </MenuTrigger>
            <MenuContent>
              <MenuItem value="account">Account</MenuItem>
              <MenuItem value="settings">Settings</MenuItem>
              <MenuItem value="logout">Logout</MenuItem>
            </MenuContent>
          </MenuRoot>
        }
        code={`<MenuRoot positioning={{ placement: "right-end" }}>
  <MenuTrigger>
    <Avatar size="sm" src="https://bit.ly/sage-adebayo" />
  </MenuTrigger>
  <MenuContent>
    <MenuItem value="account">Account</MenuItem>
    <MenuItem value="settings">Settings</MenuItem>
    <MenuItem value="logout">Logout</MenuItem>
  </MenuContent>
</MenuRoot>`}
      />
    </>
  );
}
