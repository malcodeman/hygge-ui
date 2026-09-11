import { Breadcrumb } from "hygge-ui/breadcrumb";
import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "app/components/page-header";
import { PagePreviewCodeTabs } from "app/components/page-preview-code-tabs";
import { Heading } from "hygge-ui/heading";
import { Code, Text } from "hygge-ui/text";
import { LuHouse, LuShirt } from "react-icons/lu";

export const Route = createFileRoute("/docs/components/breadcrumb")({
  component: BreadcrumbPage,
  head: () => ({
    meta: [
      {
        title: "Breadcrumb | Hygge UI",
      },
    ],
  }),
});

function BreadcrumbPage() {
  return (
    <>
      <PageHeader
        title="Breadcrumb"
        description="Used to display a page's location within a site's hierarchical structure."
        githubLink="https://github.com/malcodeman/hygge-ui/blob/main/src/hygge-ui/breadcrumb.tsx"
        className="mb-2"
        verified
      />
      <PagePreviewCodeTabs
        preview={
          <Breadcrumb
            items={[
              { title: "Docs", url: "docs/components/breadcrumb#" },
              { title: "Components", url: "docs/components/breadcrumb#" },
              { title: "Props", url: "docs/components/breadcrumb#" },
            ]}
          />
        }
        code={`<Breadcrumb
  items={[
    { title: "Docs", url: "docs/components/breadcrumb#" },
    { title: "Components", url: "docs/components/breadcrumb#" },
    { title: "Props", url: "docs/components/breadcrumb#" },
  ]}
/>`}
      />
      <Heading level={2} className="mt-10 mb-2">
        Examples
      </Heading>
      <Heading level={3} size="lg" className="mb-2">
        Sizes
      </Heading>
      <Text className="mb-2">
        Use the <Code>size</Code> prop to change the size of the breadcrumb
        component.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <div className="flex flex-col gap-2">
            <Breadcrumb
              size="sm"
              items={[
                { title: "Docs", url: "docs/components/breadcrumb#" },
                { title: "Components", url: "docs/components/breadcrumb#" },
                { title: "Props", url: "docs/components/breadcrumb#" },
              ]}
            />
            <Breadcrumb
              size="md"
              items={[
                { title: "Docs", url: "docs/components/breadcrumb#" },
                { title: "Components", url: "docs/components/breadcrumb#" },
                { title: "Props", url: "docs/components/breadcrumb#" },
              ]}
            />
            <Breadcrumb
              size="lg"
              items={[
                { title: "Docs", url: "docs/components/breadcrumb#" },
                { title: "Components", url: "docs/components/breadcrumb#" },
                { title: "Props", url: "docs/components/breadcrumb#" },
              ]}
            />
          </div>
        }
        code={`<div className="flex flex-col gap-2">
  <Breadcrumb
    size="sm"
    items={[
      { title: "Docs", url: "docs/components/breadcrumb#" },
      { title: "Components", url: "docs/components/breadcrumb#" },
      { title: "Props", url: "docs/components/breadcrumb#" },
    ]}
  />
  <Breadcrumb
    size="md"
    items={[
      { title: "Docs", url: "docs/components/breadcrumb#" },
      { title: "Components", url: "docs/components/breadcrumb#" },
      { title: "Props", url: "docs/components/breadcrumb#" },
    ]}
  />
  <Breadcrumb
    size="lg"
    items={[
      { title: "Docs", url: "docs/components/breadcrumb#" },
      { title: "Components", url: "docs/components/breadcrumb#" },
      { title: "Props", url: "docs/components/breadcrumb#" },
    ]}
  />
</div>`}
      />
      <Heading level={3} size="lg" className="mt-6 mb-2">
        Variant
      </Heading>
      <Text className="mb-2">
        Use the <Code>variant</Code> prop to change the appearance of the
        breadcrumb component.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <div className="flex flex-col gap-2">
            <Breadcrumb
              items={[
                { title: "Docs", url: "docs/components/breadcrumb#" },
                { title: "Components", url: "docs/components/breadcrumb#" },
                { title: "Props", url: "docs/components/breadcrumb#" },
              ]}
            />
            <Breadcrumb
              variant="underline"
              items={[
                { title: "Docs", url: "docs/components/breadcrumb#" },
                { title: "Components", url: "docs/components/breadcrumb#" },
                { title: "Props", url: "docs/components/breadcrumb#" },
              ]}
            />
          </div>
        }
        code={`<div className="flex flex-col gap-2">
  <Breadcrumb
    items={[
      { title: "Docs", url: "docs/components/breadcrumb#" },
      { title: "Components", url: "docs/components/breadcrumb#" },
      { title: "Props", url: "docs/components/breadcrumb#" },
    ]}
  />
  <Breadcrumb
    variant="underline"
    items={[
      { title: "Docs", url: "docs/components/breadcrumb#" },
      { title: "Components", url: "docs/components/breadcrumb#" },
      { title: "Props", url: "docs/components/breadcrumb#" },
    ]}
  />
</div>`}
      />
      <Heading level={3} size="lg" className="mt-6 mb-2">
        Icon
      </Heading>
      <Text className="mb-2">
        Use the <Code>title</Code> prop to render icons alongside the breadcrumb
        label.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <Breadcrumb
            items={[
              {
                title: (
                  <>
                    <LuHouse />
                    Home
                  </>
                ),
                url: "docs/components/breadcrumb#",
              },
              {
                title: (
                  <>
                    <LuShirt />
                    Men Wear
                  </>
                ),
                url: "docs/components/breadcrumb#",
              },
              { title: "Trousers" },
            ]}
          />
        }
        code={`<Breadcrumb
  items={[
    {
      title: (
        <>
          <LuHouse />
          Home
        </>
      ),
      url: "docs/components/breadcrumb#",
    },
    {
      title: (
        <>
          <LuShirt />
          Men Wear
        </>
      ),
      url: "docs/components/breadcrumb#",
    },
    { title: "Trousers" },
  ]}
/>`}
      />
    </>
  );
}
