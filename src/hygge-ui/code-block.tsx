import { useEffect, useState } from "react";
import { BundledLanguage, BundledTheme, codeToHtml } from "shiki";
import { Clipboard as ArkClipboard } from "@ark-ui/react";
import { LuCheck, LuClipboardCopy } from "react-icons/lu";
import { cva, VariantProps } from "class-variance-authority";
import { Button } from "./button";
import { cn } from "./cn";

const codeVariants = cva(
  "[&_.shiki]:min-h-10 [&_.shiki]:overflow-x-auto [&_.shiki]:rounded-lg [&_.shiki]:bg-[#191918]!",
  {
    variants: {
      size: {
        xs: "[&_.shiki]:p-1 [&_.shiki]:text-xs",
        sm: "[&_.shiki]:p-2 [&_.shiki]:text-sm",
        md: "[&_.shiki]:p-2 [&_.shiki]:text-sm",
        lg: "[&_.shiki]:p-3 [&_.shiki]:text-base",
        xl: "[&_.shiki]:p-3 [&_.shiki]:text-base",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

type Props = React.ComponentPropsWithoutRef<"div"> &
  VariantProps<typeof codeVariants> & {
    code: string;
    language: BundledLanguage;
    theme?: BundledTheme;
    copyButton?: boolean;
  };

export function CodeBlock(props: Props) {
  const {
    code,
    language,
    size,
    theme = "dracula",
    copyButton = false,
    className,
    ...rest
  } = props;
  const [html, setHtml] = useState<string>("");

  useEffect(() => {
    codeToHtml(code, {
      lang: language,
      theme,
    }).then(setHtml);
  }, [code, language, theme]);

  return (
    <div
      className={cn(
        {
          relative: copyButton,
        },
        className,
      )}
      {...rest}
    >
      {copyButton ? (
        <ArkClipboard.Root value={code} className="absolute top-1 right-1">
          <ArkClipboard.Trigger asChild>
            <Button variant="ghost" size="xs" className="text-[#eeeeec]">
              <ArkClipboard.Indicator copied={<LuCheck size={16} />}>
                <LuClipboardCopy size={16} />
              </ArkClipboard.Indicator>
            </Button>
          </ArkClipboard.Trigger>
        </ArkClipboard.Root>
      ) : null}
      <div
        className={cn(codeVariants({ size }))}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
