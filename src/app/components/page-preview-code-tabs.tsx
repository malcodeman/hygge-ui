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
  className?: string;
};

export function PagePreviewCodeTabs(props: Props) {
  const { preview, code, className, ...rest } = props;

  return (
    <TabsRoot defaultValue="preview" className={className} {...rest}>
      <TabsList>
        <TabsTrigger value="preview">Preview</TabsTrigger>
        <TabsTrigger value="code">Code</TabsTrigger>
      </TabsList>
      <TabsContent value="preview">
        <Card>
          <CardBody className="items-start">{preview}</CardBody>
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
