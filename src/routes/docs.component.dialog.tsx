import { Button } from "@/components/button";
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
} from "@/components/dialog";
import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "app/components/page-header";
import { PagePreviewCodeTabs } from "app/components/page-preview-code-tabs";

export const Route = createFileRoute("/docs/component/dialog")({
  component: DialogPage,
});

function DialogPage() {
  return (
    <>
      <PageHeader
        title="Dialog"
        description="Used to display a dialog prompt."
        githubLink="https://github.com/malcodeman/hygge-ui/blob/main/src/components/dialog.tsx"
        className="mb-2"
      />
      <PagePreviewCodeTabs
        preview={
          <DialogRoot>
            <div>
              <DialogTrigger asChild>
                <Button variant="outline">Open dialog</Button>
              </DialogTrigger>
            </div>
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
        code={`<DialogRoot>
  <div>
    <DialogTrigger asChild>
      <Button variant="outline">Open dialog</Button>
    </DialogTrigger>
  </div>
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
</DialogRoot>`}
      />
    </>
  );
}
