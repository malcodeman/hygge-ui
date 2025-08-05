import { Heading } from "@/components/heading";
import { Text, TextLink } from "@/components/text";
import { LuExternalLink } from "react-icons/lu";

type Props = React.ComponentPropsWithoutRef<"div"> & {
  title: string;
  description: string;
  githubLink: string;
};

export function PageHeader(props: Props) {
  const { title, description, githubLink, ...rest } = props;

  return (
    <div {...rest}>
      <Heading className="mb-2">{title}</Heading>
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
