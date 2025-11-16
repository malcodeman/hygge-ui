import { Heading } from "@/components/heading";
import { Rating } from "@/components/rating";
import { PageHeader } from "app/components/page-header";
import { PagePreviewCodeTabs } from "app/components/page-preview-code-tabs";

function RatingPage() {
  return (
    <>
      <PageHeader
        title="Rating"
        description="Used to show reviews and ratings in a visual format."
        githubLink="https://github.com/malcodeman/hygge-ui/blob/main/src/components/rating.tsx"
        className="mb-2"
      />
      <PagePreviewCodeTabs preview={<Rating />} code={`<Rating />`} />
      <Heading level={2} className="mt-10 mb-2">
        Examples
      </Heading>
      <Heading level={3} size="lg" className="mb-2">
        Basic
      </Heading>
      <PagePreviewCodeTabs
        preview={<Rating count={5} defaultValue={3} />}
        code={`<Rating count={5} defaultValue={3} />`}
      />
    </>
  );
}

export default RatingPage;
