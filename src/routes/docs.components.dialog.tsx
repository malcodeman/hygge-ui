import { Button } from "hygge-ui/button";
import {
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "hygge-ui/dialog";
import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "app/components/page-header";
import { PagePreviewCodeTabs } from "app/components/page-preview-code-tabs";
import { Heading } from "hygge-ui/heading";
import { Code, Text } from "hygge-ui/text";

export const Route = createFileRoute("/docs/components/dialog")({
  component: DialogPage,
  head: () => ({
    meta: [
      {
        title: "Dialog | Hygge UI",
      },
    ],
  }),
});

function DialogPage() {
  return (
    <>
      <PageHeader
        title="Dialog"
        description="Used to display a dialog prompt."
        githubLink="https://github.com/malcodeman/hygge-ui/blob/main/src/components/dialog.tsx"
        className="mb-2"
        verified
      />
      <PagePreviewCodeTabs
        preview={
          <DialogRoot>
            <DialogTrigger asChild>
              <Button variant="outline">Open dialog</Button>
            </DialogTrigger>
            <DialogContent showCloseTrigger>
              <DialogHeader>
                <DialogTitle>Dialog Title</DialogTitle>
              </DialogHeader>
              <DialogBody>
                <DialogDescription>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </DialogDescription>
              </DialogBody>
              <DialogFooter>
                <DialogCloseTrigger asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogCloseTrigger>
                <Button>Save</Button>
              </DialogFooter>
            </DialogContent>
          </DialogRoot>
        }
        code={``}
      />
      <Heading level={2} className="mt-10 mb-2">
        Examples
      </Heading>
      <Heading level={3} size="lg" className="mb-2">
        Error text
      </Heading>
      <Text className="mb-2">
        Pass the <Code>size</Code> prop to change the size of the dialog
        component.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <DialogRoot size="xs">
            <DialogTrigger asChild>
              <Button variant="outline">Open dialog</Button>
            </DialogTrigger>
            <DialogContent showCloseTrigger>
              <DialogHeader>
                <DialogTitle>Dialog Title</DialogTitle>
              </DialogHeader>
              <DialogBody>
                <DialogDescription>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </DialogDescription>
              </DialogBody>
              <DialogFooter>
                <DialogCloseTrigger asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogCloseTrigger>
                <Button>Save</Button>
              </DialogFooter>
            </DialogContent>
          </DialogRoot>
        }
        code={``}
      />
    </>
  );
}
