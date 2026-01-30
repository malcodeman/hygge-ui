import { createFileRoute } from "@tanstack/react-router";
import { Heading } from "@/components/heading";
import { ExternalLink, Text } from "@/components/text";
import { CodeBlock } from "@/components/code-block";

export const Route = createFileRoute("/docs/first-steps/introduction/")({
  component: IntroductionPage,
  head: () => ({
    meta: [
      {
        title: "Introduction | Hygge UI",
      },
    ],
  }),
});

function IntroductionPage() {
  return (
    <>
      <Heading size="2xl">Introduction to Hygge-UI</Heading>
      <Text className="mb-10">
        A React component library built on Ark UI, inspired by the Danish
        concept of hygge — creating cozy, comfortable, and delightful user
        experiences.
      </Text>
      <Heading level={2}>Installation</Heading>
      <Text className="mb-2">
        To set up Hygge UI in your project, follow the steps below.
      </Text>
      <ol className="mb-10 flex list-inside list-decimal flex-col gap-2">
        <li>
          Install dependencies:
          <CodeBlock
            code={`pnpm add @ark-ui/react class-variance-authority clsx tailwind-merge`}
            language="bash"
            copyButton
          />
        </li>
        <li>
          Add components
          <Text>
            Copy the components you need from the{" "}
            <ExternalLink href="https://github.com/malcodeman/hygge-ui/tree/main/src/components">
              repository
            </ExternalLink>{" "}
            and add them to your project.
          </Text>
        </li>
        <li>
          Enjoy!
          <Text>
            With the power of the components from Hygge UI, you can build your
            UI faster.
          </Text>
        </li>
      </ol>
      <Heading level={2}>Team</Heading>
      <Text className="mb-10">
        Hygge UI is built and maintained by{" "}
        <ExternalLink href="https://malcodeman.com">malcodeman</ExternalLink>.
      </Text>
      <Heading level={2}>Acknowledgments</Heading>
      <Text className="mb-2">
        This project builds upon the incredible work of the open source
        community. Special thanks to:
      </Text>
      <ul className="flex list-inside list-disc flex-col gap-2">
        <li>
          <ExternalLink href="https://ark-ui.com">Ark UI</ExternalLink> - The
          foundation of this project
        </li>
        <li>
          <ExternalLink href="https://tailwindcss.com">
            Tailwind CSS
          </ExternalLink>{" "}
          - For powering the styling system
        </li>
        <li>
          <ExternalLink href="https://github.com/lukeed/clsx">
            clsx
          </ExternalLink>{" "}
          - For conditional className merging
        </li>
        <li>
          <ExternalLink href="https://github.com/dcastil/tailwind-merge">
            tailwind-merge
          </ExternalLink>{" "}
          - For merging Tailwind classNames without conflicts
        </li>
        <li>
          <ExternalLink href="https://cva.style">
            Class Variance Authority
          </ExternalLink>{" "}
          - For simplifying className management
        </li>
      </ul>
    </>
  );
}
