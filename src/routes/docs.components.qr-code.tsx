import { Heading } from "@/components/heading";
import { QrCode } from "@/components/qr-code";
import { Code, Text } from "@/components/text";
import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "app/components/page-header";
import { PagePreviewCodeTabs } from "app/components/page-preview-code-tabs";

export const Route = createFileRoute("/docs/components/qr-code")({
  component: QrCodePage,
  head: () => ({
    meta: [
      {
        title: "QR Code | Hygge UI",
      },
    ],
  }),
});

function QrCodePage() {
  return (
    <>
      <PageHeader
        title="QR Code"
        description="A component that generates a QR code based on the provided data."
        githubLink="https://github.com/malcodeman/hygge-ui/blob/main/src/components/qr-code.tsx"
        className="mb-2"
      />
      <PagePreviewCodeTabs
        preview={<QrCode value="https://www.hygge-ui.com" />}
        code={`<QrCode value="https://www.hygge-ui.com" />`}
      />
      <Heading level={2} className="mt-10 mb-2">
        Examples
      </Heading>
      <Heading level={3} size="lg" className="mb-2">
        Sizes
      </Heading>
      <Text className="mb-2">
        Use the <Code>size</Code> prop to change the size of the QR code.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <div className="flex flex-col gap-2">
            <QrCode size="2xs" />
            <QrCode size="xs" />
            <QrCode size="sm" />
            <QrCode size="md" />
            <QrCode size="lg" />
            <QrCode size="xl" />
            <QrCode size="2xl" />
          </div>
        }
        code={`<div className="flex flex-col gap-2">
  <QrCode size="2xs" />
  <QrCode size="xs" />
  <QrCode size="sm" />
  <QrCode size="md" />
  <QrCode size="lg" />
  <QrCode size="xl" />
  <QrCode size="2xl" />
</div>`}
      />
    </>
  );
}
