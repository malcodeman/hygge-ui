import { BundledLanguage, BundledTheme, codeToHtml } from "shiki";
import { Clipboard as ArkClipboard } from "@ark-ui/react";
import { LuCheck, LuClipboardCopy } from "react-icons/lu";
import { Button } from "./button";
import { cn } from "./cn";

type Props = React.ComponentPropsWithoutRef<"div"> & {
  code: string;
  language: BundledLanguage;
  theme?: BundledTheme;
  copyButton?: boolean;
};

export async function CodeBlock(props: Props) {
  const {
    code,
    language,
    theme = "dracula",
    copyButton = false,
    className,
    ...rest
  } = props;
  const html = await codeToHtml(code, {
    lang: language,
    theme,
  });

  if (copyButton) {
    return (
      <ArkClipboard.Root
        className={cn("relative w-full", className)}
        value={code}
      >
        <ArkClipboard.Trigger className="absolute top-2 right-2" asChild>
          <Button variant="ghost" size="xs" className="text-[#eeeeec]">
            <ArkClipboard.Indicator copied={<LuCheck size={16} />}>
              <LuClipboardCopy size={16} />
            </ArkClipboard.Indicator>
          </Button>
        </ArkClipboard.Trigger>
        <div dangerouslySetInnerHTML={{ __html: html }} {...rest} />
      </ArkClipboard.Root>
    );
  }

  return (
    <div
      className={cn("w-full", className)}
      dangerouslySetInnerHTML={{ __html: html }}
      {...rest}
    />
  );
}
