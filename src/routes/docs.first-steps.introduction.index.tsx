import { createFileRoute } from "@tanstack/react-router";
import { Heading } from "@/components/heading";
import { Text } from "@/components/text";
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
      <Text className="mb-6">
        A React component library built on Ark UI, inspired by the Danish
        concept of hygge — creating cozy, comfortable, and delightful user
        experiences.
      </Text>
      <Heading level={2}>Installation</Heading>
      <Text className="mb-6">
        To set up Hygge UI in your project, follow the steps below.
      </Text>
      <ol className="flex list-inside list-decimal flex-col gap-6">
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
            Copy the components you need from the library and add them to your
            project.
          </Text>
        </li>
      </ol>
    </>
  );
}
