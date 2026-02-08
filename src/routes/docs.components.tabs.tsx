import { TabsContent, TabsList, TabsRoot, TabsTrigger } from "hygge-ui/tabs";
import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "app/components/page-header";
import { PagePreviewCodeTabs } from "app/components/page-preview-code-tabs";
import { LuFolder, LuSquareCheck, LuUser } from "react-icons/lu";
import { Heading } from "hygge-ui/heading";
import { Code, Text } from "hygge-ui/text";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/docs/components/tabs")({
  component: TabsPage,
  head: () => ({
    meta: [
      {
        title: "Tabs | Hygge UI",
      },
    ],
  }),
});

function TickValue() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setValue((v) => v + 1);
    }, 1000);
    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  return <span>{value}</span>;
}

function TabsPage() {
  return (
    <>
      <PageHeader
        title="Tabs"
        description="Used to display content in a tabbed interface."
        githubLink="https://github.com/malcodeman/hygge-ui/blob/main/src/components/tabs.tsx"
        className="mb-2"
        verified
      />
      <PagePreviewCodeTabs
        preview={
          <TabsRoot defaultValue="members">
            <TabsList>
              <TabsTrigger value="members">
                <LuUser size={16} />
                Members
              </TabsTrigger>
              <TabsTrigger value="projects">
                <LuFolder size={16} />
                Projects
              </TabsTrigger>
              <TabsTrigger value="settings">
                <LuSquareCheck size={16} />
                Settings
              </TabsTrigger>
            </TabsList>
            <TabsContent value="members">Manage your team members</TabsContent>
            <TabsContent value="projects">Manage your projects</TabsContent>
            <TabsContent value="settings">
              Manage your tasks for freelancers
            </TabsContent>
          </TabsRoot>
        }
        code={`<TabsRoot defaultValue="members">
  <TabsList>
    <TabsTrigger value="members">Members</TabsTrigger>
    <TabsTrigger value="projects">Projects</TabsTrigger>
    <TabsTrigger value="settings">Settings</TabsTrigger>
  </TabsList>
  <TabsContent value="members">Manage your team members</TabsContent>
  <TabsContent value="projects">Manage your projects</TabsContent>
  <TabsContent value="settings">
    Manage your tasks for freelancers
  </TabsContent>
</TabsRoot>`}
      />
      <Heading level={2} className="mt-10 mb-2">
        Examples
      </Heading>
      <Heading level={3} size="lg" className="mb-2">
        Variants
      </Heading>
      <Text className="mb-2">
        Use the <Code>variant</Code> prop to change the visual style of the
        tabs.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <div className="flex flex-col gap-4">
            <TabsRoot variant="line" defaultValue="members">
              <TabsList>
                <TabsTrigger value="members">
                  <LuUser size={16} />
                  Members
                </TabsTrigger>
                <TabsTrigger value="projects">
                  <LuFolder size={16} />
                  Projects
                </TabsTrigger>
                <TabsTrigger value="settings">
                  <LuSquareCheck size={16} />
                  Settings
                </TabsTrigger>
              </TabsList>
              <TabsContent value="members">
                Manage your team members
              </TabsContent>
              <TabsContent value="projects">Manage your projects</TabsContent>
              <TabsContent value="settings">
                Manage your tasks for freelancers
              </TabsContent>
            </TabsRoot>
            <TabsRoot variant="subtle" defaultValue="members">
              <TabsList>
                <TabsTrigger value="members">
                  <LuUser size={16} />
                  Members
                </TabsTrigger>
                <TabsTrigger value="projects">
                  <LuFolder size={16} />
                  Projects
                </TabsTrigger>
                <TabsTrigger value="settings">
                  <LuSquareCheck size={16} />
                  Settings
                </TabsTrigger>
              </TabsList>
              <TabsContent value="members">
                Manage your team members
              </TabsContent>
              <TabsContent value="projects">Manage your projects</TabsContent>
              <TabsContent value="settings">
                Manage your tasks for freelancers
              </TabsContent>
            </TabsRoot>
            <TabsRoot variant="plain" defaultValue="members">
              <TabsList>
                <TabsTrigger value="members">
                  <LuUser size={16} />
                  Members
                </TabsTrigger>
                <TabsTrigger value="projects">
                  <LuFolder size={16} />
                  Projects
                </TabsTrigger>
                <TabsTrigger value="settings">
                  <LuSquareCheck size={16} />
                  Settings
                </TabsTrigger>
              </TabsList>
              <TabsContent value="members">
                Manage your team members
              </TabsContent>
              <TabsContent value="projects">Manage your projects</TabsContent>
              <TabsContent value="settings">
                Manage your tasks for freelancers
              </TabsContent>
            </TabsRoot>
          </div>
        }
        code={`<div className="flex flex-col gap-4">
  <TabsRoot variant="line" defaultValue="members">
    <TabsList>
      <TabsTrigger value="members">
        <LuUser size={16} />
        Members
      </TabsTrigger>
      <TabsTrigger value="projects">
        <LuFolder size={16} />
        Projects
      </TabsTrigger>
      <TabsTrigger value="settings">
        <LuSquareCheck size={16} />
        Settings
      </TabsTrigger>
    </TabsList>
    <TabsContent value="members">Manage your team members</TabsContent>
    <TabsContent value="projects">Manage your projects</TabsContent>
    <TabsContent value="settings">
      Manage your tasks for freelancers
    </TabsContent>
  </TabsRoot>
  <TabsRoot variant="subtle" defaultValue="members">
    <TabsList>
      <TabsTrigger value="members">
        <LuUser size={16} />
        Members
      </TabsTrigger>
      <TabsTrigger value="projects">
        <LuFolder size={16} />
        Projects
      </TabsTrigger>
      <TabsTrigger value="settings">
        <LuSquareCheck size={16} />
        Settings
      </TabsTrigger>
    </TabsList>
    <TabsContent value="members">Manage your team members</TabsContent>
    <TabsContent value="projects">Manage your projects</TabsContent>
    <TabsContent value="settings">
      Manage your tasks for freelancers
    </TabsContent>
  </TabsRoot>
  <TabsRoot variant="plain" defaultValue="members">
    <TabsList>
      <TabsTrigger value="members">
        <LuUser size={16} />
        Members
      </TabsTrigger>
      <TabsTrigger value="projects">
        <LuFolder size={16} />
        Projects
      </TabsTrigger>
      <TabsTrigger value="settings">
        <LuSquareCheck size={16} />
        Settings
      </TabsTrigger>
    </TabsList>
    <TabsContent value="members">Manage your team members</TabsContent>
    <TabsContent value="projects">Manage your projects</TabsContent>
    <TabsContent value="settings">
      Manage your tasks for freelancers
    </TabsContent>
  </TabsRoot>
</div>`}
      />
      <Heading level={3} size="lg" className="mt-10 mb-2">
        Lazy Mounted
      </Heading>
      <Text className="mb-2">
        Use the <Code>lazyMount</Code> and/or <Code>unmountOnExit</Code> prop to
        only render the tab content when it is active. This can be useful for
        performance optimization.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <TabsRoot lazyMount unmountOnExit defaultValue="tab-1">
            <TabsList>
              <TabsTrigger value="tab-1">Tab 1</TabsTrigger>
              <TabsTrigger value="tab-2">Tab 2</TabsTrigger>
              <TabsTrigger value="tab-3">Tab 3</TabsTrigger>
            </TabsList>
            <TabsContent value="tab-1">
              Tab 1: Content <TickValue />
            </TabsContent>
            <TabsContent value="tab-2">
              Tab 2: Content <TickValue />
            </TabsContent>
            <TabsContent value="tab-3">
              Tab 3: Content <TickValue />
            </TabsContent>
          </TabsRoot>
        }
        code={`<TabsRoot lazyMount unmountOnExit defaultValue="tab-1">
  <TabsList>
    <TabsTrigger value="tab-1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab-2">Tab 2</TabsTrigger>
    <TabsTrigger value="tab-3">Tab 3</TabsTrigger>
  </TabsList>
  <TabsContent value="tab-1">
    Tab 1: Content <TickValue />
  </TabsContent>
  <TabsContent value="tab-2">
    Tab 2: Content <TickValue />
  </TabsContent>
  <TabsContent value="tab-3">
    Tab 3: Content <TickValue />
  </TabsContent>
</TabsRoot>`}
      />
      <Heading level={3} size="lg" className="mt-10 mb-2">
        Links
      </Heading>
      <Text className="mb-2">
        Pass the <Code>asChild</Code> prop to the <Code>TabsTrigger</Code>{" "}
        component to render a link as a tab. When a tab is clicked, the link
        will be navigated to.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <TabsRoot defaultValue="members">
            <TabsList>
              <TabsTrigger value="members" asChild>
                <a href="#members">Members</a>
              </TabsTrigger>
              <TabsTrigger value="projects" asChild>
                <a href="#projects">Projects</a>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="members">Manage your team members</TabsContent>
            <TabsContent value="projects">Manage your projects</TabsContent>
          </TabsRoot>
        }
        code={`<TabsRoot defaultValue="members">
  <TabsList>
    <TabsTrigger value="members" asChild>
      <a href="#members">Members</a>
    </TabsTrigger>
    <TabsTrigger value="projects" asChild>
      <a href="#projects">Projects</a>
    </TabsTrigger>
  </TabsList>
  <TabsContent value="members">Manage your team members</TabsContent>
  <TabsContent value="projects">Manage your projects</TabsContent>
</TabsRoot>`}
      />
      <Heading level={3} size="lg" className="mt-10 mb-2">
        Disabled Tab
      </Heading>
      <Text className="mb-2">
        Set the <Code>disabled</Code> prop on the <Code>TabsTrigger</Code>{" "}
        component to disable a tab.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <TabsRoot defaultValue="members">
            <TabsList>
              <TabsTrigger value="members">
                <LuUser size={16} />
                Members
              </TabsTrigger>
              <TabsTrigger disabled value="projects">
                <LuFolder size={16} />
                Projects
              </TabsTrigger>
              <TabsTrigger value="settings">
                <LuSquareCheck size={16} />
                Settings
              </TabsTrigger>
            </TabsList>
          </TabsRoot>
        }
        code={`<TabsRoot defaultValue="members">
  <TabsList>
    <TabsTrigger value="members">
      <LuUser size={16} />
      Members
    </TabsTrigger>
    <TabsTrigger disabled value="projects">
      <LuFolder size={16} />
      Projects
    </TabsTrigger>
    <TabsTrigger value="settings">
      <LuSquareCheck size={16} />
      Settings
    </TabsTrigger>
  </TabsList>
</TabsRoot>`}
      />
    </>
  );
}
