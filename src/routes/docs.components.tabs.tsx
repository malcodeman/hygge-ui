import {
  TabsContent,
  TabsList,
  TabsRoot,
  TabsTrigger,
} from "@/components/tabs";
import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "app/components/page-header";
import { PagePreviewCodeTabs } from "app/components/page-preview-code-tabs";
import { LuFolder, LuSquareCheck, LuUser } from "react-icons/lu";

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

function TabsPage() {
  return (
    <>
      <PageHeader
        title="Tabs"
        description="Used to display content in a tabbed interface."
        githubLink="https://github.com/malcodeman/hygge-ui/blob/main/src/components/tabs.tsx"
        className="mb-2"
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
    </>
  );
}
