import { Button } from "@/components/button";
import { Input } from "@/components/input";
import {
  PopoverContent,
  PopoverDescription,
  PopoverRoot,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/popover";
import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "app/components/page-header";
import { PagePreviewCodeTabs } from "app/components/page-preview-code-tabs";

export const Route = createFileRoute("/docs/components/popover")({
  component: PopoverPage,
  head: () => ({
    meta: [
      {
        title: "Popover | Hygge UI",
      },
    ],
  }),
});

function PopoverPage() {
  return (
    <>
      <PageHeader
        title="Popover"
        description="Used to show detailed information inside a pop-up."
        githubLink="https://github.com/malcodeman/hygge-ui/blob/main/src/components/popover.tsx"
        className="mb-2"
      />
      <PagePreviewCodeTabs
        preview={
          <div>
            <PopoverRoot>
              <PopoverTrigger asChild>
                <Button variant="outline" size="sm">
                  Click me
                </Button>
              </PopoverTrigger>
              <PopoverContent showCloseTrigger>
                <PopoverTitle>Naruto Form</PopoverTitle>
                <PopoverDescription className="my-4">
                  Naruto is a Japanese manga series written and illustrated by
                  Masashi Kishimoto.
                </PopoverDescription>
                <Input placeholder="Your fav. character" size="sm" />
              </PopoverContent>
            </PopoverRoot>
          </div>
        }
        code={`<div>
  <PopoverRoot>
    <PopoverTrigger asChild>
      <Button variant="outline" size="sm">
        Click me
      </Button>
    </PopoverTrigger>
    <PopoverContent showCloseTrigger>
      <PopoverTitle>Naruto Form</PopoverTitle>
      <PopoverDescription className="my-4">
        Naruto is a Japanese manga series written and illustrated by
        Masashi Kishimoto.
      </PopoverDescription>
      <Input placeholder="Your fav. character" size="sm" />
    </PopoverContent>
  </PopoverRoot>
</div>`}
      />
    </>
  );
}
