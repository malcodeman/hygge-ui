import { CodeBlock } from "hygge-ui/code-block";
import { TabsContent, TabsList, TabsRoot, TabsTrigger } from "hygge-ui/tabs";
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
        <div className="border-border-subtle rounded-lg border p-4">
          {preview}
        </div>
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
