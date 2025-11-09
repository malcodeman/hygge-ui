import { Heading } from "@/components/heading";
import { Text, TextLink } from "@/components/text";
import { LuExternalLink, LuShieldCheck } from "react-icons/lu";

type Props = React.ComponentPropsWithoutRef<"div"> & {
  title: string;
  description: string;
  githubLink: string;
  verified?: boolean;
};

export function PageHeader(props: Props) {
  const { title, description, githubLink, verified, ...rest } = props;

  return (
    <div {...rest}>
      <div className="mb-2 flex items-center gap-2">
        <Heading size="2xl">{title}</Heading>
        {verified ? (
          <LuShieldCheck
            className="text-[#116932] dark:text-[#86efac]"
            size={24}
          />
        ) : null}
      </div>
      <Text>{description}</Text>
      <TextLink
        href={githubLink}
        target="_blank"
        className="inline-flex items-center gap-2"
      >
        Source
        <LuExternalLink size={16} />
      </TextLink>
    </div>
  );
}
