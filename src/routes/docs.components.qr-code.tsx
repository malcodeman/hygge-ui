import { Button } from "@/components/button";
import { Heading } from "@/components/heading";
import { QrCode, QrCodeDownloadTrigger } from "@/components/qr-code";
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
        verified
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
            <QrCode size="2xs" value="https://www.hygge-ui.com" />
            <QrCode size="xs" value="https://www.hygge-ui.com" />
            <QrCode size="sm" value="https://www.hygge-ui.com" />
            <QrCode size="md" value="https://www.hygge-ui.com" />
            <QrCode size="lg" value="https://www.hygge-ui.com" />
            <QrCode size="xl" value="https://www.hygge-ui.com" />
            <QrCode size="2xl" value="https://www.hygge-ui.com" />
          </div>
        }
        code={`<div className="flex flex-col gap-2">
  <QrCode size="2xs" value="https://www.hygge-ui.com" />
  <QrCode size="xs" value="https://www.hygge-ui.com" />
  <QrCode size="sm" value="https://www.hygge-ui.com" />
  <QrCode size="md" value="https://www.hygge-ui.com" />
  <QrCode size="lg" value="https://www.hygge-ui.com" />
  <QrCode size="xl" value="https://www.hygge-ui.com" />
  <QrCode size="2xl" value="https://www.hygge-ui.com" />
</div>`}
      />
      <Heading level={3} size="lg" className="mt-10 mb-2">
        Overlay
      </Heading>
      <Text className="mb-2">
        Use the <Code>overlay</Code> prop to add a logo or overlay to the QR
        code. This is useful when you want to brand the QR code.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <QrCode
            value="https://www.hygge-ui.com"
            overlay={
              <img src="https://ark-ui.com/icon-192.png" alt="Ark UI Logo" />
            }
          />
        }
        code={`<QrCode
  value="https://www.hygge-ui.com"
  overlay={
    <img src="https://ark-ui.com/icon-192.png" alt="Ark UI Logo" />
  }
/>`}
      />
      <Heading level={3} size="lg" className="mt-10 mb-2">
        Fill
      </Heading>
      <Text className="mb-2">
        Use the <Code>fill</Code> prop to set the fill color of the QR code.
      </Text>
      <PagePreviewCodeTabs
        preview={<QrCode value="https://www.hygge-ui.com" fill="#eb5e41" />}
        code={`<QrCode value="https://www.hygge-ui.com" fill="#eb5e41" />`}
      />
      <Heading level={3} size="lg" className="mt-10 mb-2">
        Download
      </Heading>
      <Text className="mb-2">
        Use the <Code>QrCodeDownloadTrigger</Code> to download the QR code.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <QrCode value="https://www.hygge-ui.com">
            <QrCodeDownloadTrigger
              asChild
              fileName="qr-code.png"
              mimeType="image/png"
            >
              <Button size="sm">Download</Button>
            </QrCodeDownloadTrigger>
          </QrCode>
        }
        code={`<QrCode value="https://www.hygge-ui.com">
  <QrCodeDownloadTrigger
    asChild
    fileName="qr-code.png"
    mimeType="image/png"
  >
    <Button size="sm">Download</Button>
  </QrCodeDownloadTrigger>
</QrCode>`}
      />
      <Heading level={3} size="lg" className="mt-10 mb-2">
        Loading
      </Heading>
      <Text className="mb-2">
        Pass the <Code>loading</Code> prop to show a spinner.
      </Text>
      <PagePreviewCodeTabs
        preview={<QrCode value="https://www.hygge-ui.com" loading />}
        code={`<QrCode value="https://www.hygge-ui.com" loading />`}
      />
    </>
  );
}
