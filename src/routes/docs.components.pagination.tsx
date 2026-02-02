import {
  PaginationItems,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationRoot,
} from "hygge-ui/pagination";
import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "app/components/page-header";
import { PagePreviewCodeTabs } from "app/components/page-preview-code-tabs";
import { Heading } from "hygge-ui/heading";
import { Code, Text } from "hygge-ui/text";

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
        verified
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
      <Heading level={2} className="mt-10 mb-2">
        Examples
      </Heading>
      <Heading level={3} size="lg" className="mb-2">
        Sizes
      </Heading>
      <Text className="mb-2">
        Use the <Code>size</Code> prop to change the size of the pagination.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <div className="flex flex-col gap-2">
            <PaginationRoot size="xs" count={20} pageSize={2} defaultPage={1}>
              <PaginationPrevTrigger />
              <PaginationItems />
              <PaginationNextTrigger />
            </PaginationRoot>
            <PaginationRoot size="sm" count={20} pageSize={2} defaultPage={1}>
              <PaginationPrevTrigger />
              <PaginationItems />
              <PaginationNextTrigger />
            </PaginationRoot>
            <PaginationRoot size="md" count={20} pageSize={2} defaultPage={1}>
              <PaginationPrevTrigger />
              <PaginationItems />
              <PaginationNextTrigger />
            </PaginationRoot>
            <PaginationRoot size="lg" count={20} pageSize={2} defaultPage={1}>
              <PaginationPrevTrigger />
              <PaginationItems />
              <PaginationNextTrigger />
            </PaginationRoot>
            <PaginationRoot size="xl" count={20} pageSize={2} defaultPage={1}>
              <PaginationPrevTrigger />
              <PaginationItems />
              <PaginationNextTrigger />
            </PaginationRoot>
          </div>
        }
        code={`<div className="flex flex-col gap-2">
  <PaginationRoot size="xs" count={20} pageSize={2} defaultPage={1}>
    <PaginationPrevTrigger />
    <PaginationItems />
    <PaginationNextTrigger />
  </PaginationRoot>
  <PaginationRoot size="sm" count={20} pageSize={2} defaultPage={1}>
    <PaginationPrevTrigger />
    <PaginationItems />
    <PaginationNextTrigger />
  </PaginationRoot>
  <PaginationRoot size="md" count={20} pageSize={2} defaultPage={1}>
    <PaginationPrevTrigger />
    <PaginationItems />
    <PaginationNextTrigger />
  </PaginationRoot>
  <PaginationRoot size="lg" count={20} pageSize={2} defaultPage={1}>
    <PaginationPrevTrigger />
    <PaginationItems />
    <PaginationNextTrigger />
  </PaginationRoot>
  <PaginationRoot size="xl" count={20} pageSize={2} defaultPage={1}>
    <PaginationPrevTrigger />
    <PaginationItems />
    <PaginationNextTrigger />
  </PaginationRoot>
</div>`}
      />
      <Text>
        The pagination sizes are mapped to the <Code>Button</Code> component
        sizes.
      </Text>
      <Heading level={3} size="lg" className="mt-10 mb-2">
        Sibling Count
      </Heading>
      <Text className="mb-2">
        Use <Code>siblingCount</Code> prop to control the number of sibling
        pages to show before and after the current page.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <PaginationRoot
            siblingCount={2}
            count={200}
            pageSize={10}
            defaultPage={10}
          >
            <PaginationPrevTrigger />
            <PaginationItems />
            <PaginationNextTrigger />
          </PaginationRoot>
        }
        code={`<PaginationRoot
  siblingCount={2}
  count={200}
  pageSize={10}
  defaultPage={10}
>
  <PaginationPrevTrigger />
  <PaginationItems />
  <PaginationNextTrigger />
</PaginationRoot>`}
      />
    </>
  );
}
