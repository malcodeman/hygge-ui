import { Heading } from "hygge-ui/heading";
import { ExternalLink, Text } from "hygge-ui/text";
import { LuShieldCheck } from "react-icons/lu";

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
      <ExternalLink href={githubLink}>Source</ExternalLink>
    </div>
  );
}
