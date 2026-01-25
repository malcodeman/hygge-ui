import {
  PaginationItems,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationRoot,
} from "@/components/pagination";
import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "app/components/page-header";
import { PagePreviewCodeTabs } from "app/components/page-preview-code-tabs";

export const Route = createFileRoute("/docs/components/pagination")({
  component: PaginationPage,
  head: () => ({
    meta: [
      {
        title: "Pagination | Hygge UI",
      },
    ],
  }),
});

function PaginationPage() {
  return (
    <>
      <PageHeader
        title="Pagination"
        description="Used to navigate through a series of pages."
        githubLink="https://github.com/malcodeman/hygge-ui/blob/main/src/components/pagination.tsx"
        className="mb-2"
      />
      <PagePreviewCodeTabs
        preview={
          <PaginationRoot count={20} pageSize={2} defaultPage={1}>
            <PaginationPrevTrigger />
            <PaginationItems />
            <PaginationNextTrigger />
          </PaginationRoot>
        }
        code={`<PaginationRoot count={20} pageSize={2} defaultPage={1}>
  <PaginationPrevTrigger />
  <PaginationItems />
  <PaginationNextTrigger />
</PaginationRoot>`}
      />
    </>
  );
}
