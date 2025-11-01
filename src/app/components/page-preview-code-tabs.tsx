import { Card, CardBody } from "@/components/card";
import { CodeBlock } from "@/components/code-block";
import {
  TabsContent,
  TabsList,
  TabsRoot,
  TabsTrigger,
} from "@/components/tabs";
import { CODE_BLOCKS } from "app/constants";

type Props = {
  preview: React.ReactNode;
  code: string;
};

export async function PagePreviewCodeTabs(props: Props) {
  const { preview, code } = props;

  return (
    <TabsRoot defaultValue="preview">
      <TabsList>
        <TabsTrigger value="preview">Preview</TabsTrigger>
        <TabsTrigger value="code">Code</TabsTrigger>
      </TabsList>
      <TabsContent value="preview">
        <Card>
          <CardBody>{preview}</CardBody>
        </Card>
      </TabsContent>
      <TabsContent value="code">
        <CodeBlock
          theme={CODE_BLOCKS.THEME}
          language={CODE_BLOCKS.LANGUAGE}
          code={code}
          copyButton={CODE_BLOCKS.COPY_BUTTON}
        />
      </TabsContent>
    </TabsRoot>
  );
}
