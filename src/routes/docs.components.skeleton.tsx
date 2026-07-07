import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "app/components/page-header";
import { PagePreviewCodeTabs } from "app/components/page-preview-code-tabs";
import { Button } from "hygge-ui/button";
import { Heading } from "hygge-ui/heading";
import { Skeleton, SkeletonCircle, SkeletonText } from "hygge-ui/skeleton";
import { Code, Text } from "hygge-ui/text";

export const Route = createFileRoute("/docs/components/skeleton")({
  component: SkeletonPage,
  head: () => ({
    meta: [
      {
        title: "Skeleton | Hygge UI",
      },
    ],
  }),
});

function SkeletonPage() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <PageHeader
        title="Skeleton"
        description="Used to render a placeholder while the content is loading."
        githubLink="https://github.com/malcodeman/hygge-ui/blob/main/src/hygge-ui/skeleton.tsx"
        className="mb-2"
        verified
      />
      <PagePreviewCodeTabs
        preview={
          <div className="flex items-center gap-2">
            <SkeletonCircle className="size-12" />
            <div className="flex flex-1 flex-col gap-1">
              <Skeleton className="h-5" />
              <Skeleton className="h-5 w-[80%]" />
            </div>
          </div>
        }
        code={`<div className="flex items-center gap-2">
  <SkeletonCircle className="size-12" />
  <div className="flex flex-1 flex-col gap-1">
    <Skeleton className="h-5" />
    <Skeleton className="h-5 w-[80%]" />
  </div>
</div>`}
      />
      <Heading level={2} className="mt-10 mb-2">
        Examples
      </Heading>
      <Heading level={3} size="lg" className="mb-2">
        Feed
      </Heading>
      <Text className="mb-2">
        Use the <Code>Skeleton</Code> component to create a feed skeleton.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <div className="max-w-xs">
            <div className="mb-4 flex w-full items-center gap-2">
              <SkeletonCircle className="size-10" />
              <SkeletonText noOfLines={2} />
            </div>
            <Skeleton className="h-48" />
          </div>
        }
        code={`<div className="max-w-xs">
  <div className="mb-4 flex w-full items-center gap-2">
    <SkeletonCircle className="size-10" />
    <SkeletonText noOfLines={2} />
  </div>
  <Skeleton className="h-48" />
</div>`}
      />
      <Heading level={3} size="lg" className="mt-10 mb-2">
        Text
      </Heading>
      <Text className="mb-2">
        Use the <Code>SkeletonText</Code> component to create a skeleton for
        text.
      </Text>
      <PagePreviewCodeTabs
        preview={<SkeletonText className="gap-4" />}
        code={`<SkeletonText className="gap-4" />`}
      />
      <Heading level={3} size="lg" className="mt-10 mb-2">
        Content Loading
      </Heading>
      <Text className="mb-2">
        When <Code>loading</Code> is changed to false, the <Code>Skeleton</Code>{" "}
        component will fade in.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <div className="flex flex-col items-start gap-2">
            <Skeleton loading={loading}>
              <Text>Hygge UI is cool</Text>
            </Skeleton>
            <Button size="xs" onClick={() => setLoading((value) => !value)}>
              Toggle
            </Button>
          </div>
        }
        code={`<div className="flex flex-col items-start gap-2">
  <Skeleton loading={loading}>
    <Text>Hygge UI is cool</Text>
  </Skeleton>
  <Button size="xs" onClick={() => setLoading((value) => !value)}>
    Toggle
  </Button>
</div>`}
      />
    </>
  );
}
