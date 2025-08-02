"use server";
import { BundledLanguage, BundledTheme, codeToHtml } from "shiki";

type Props = React.ComponentPropsWithoutRef<"div"> & {
  code: string;
  language: BundledLanguage;
  theme?: BundledTheme;
};

export async function CodeBlock(props: Props) {
  const { code, language, theme = "dracula", ...rest } = props;
  const html = await codeToHtml(code, {
    lang: language,
    theme,
  });

  return <div dangerouslySetInnerHTML={{ __html: html }} {...rest} />;
}
