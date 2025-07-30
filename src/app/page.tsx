import { LuComponent, LuDownload } from "react-icons/lu";
import { Card } from "./components/card";
import { Heading } from "./components/heading";
import { Text } from "./components/text";

export function HomePage() {
  return (
    <div>
      <Heading>Introduction to Hygge-UI</Heading>
      <Text className="mb-6">
        A React component library built on Ark UI, inspired by the Danish
        concept of hygge — creating cozy, comfortable, and delightful user
        experiences.
      </Text>
      <Heading level={2}>Get started</Heading>
      <Text className="mb-6">
        Hygge-UI is designed to be incrementally adopted, so you can add it to
        most codebases in a few minutes.
      </Text>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Card className="cursor-pointer transition-colors hover:border-[#eb5e41]">
          <LuDownload size={24} className="mb-4 text-[#eb5e41]" />
          <Heading level={3}>Download .zip file</Heading>
        </Card>
        <Card className="cursor-pointer transition-colors hover:border-[#eb5e41]">
          <LuComponent size={24} className="mb-4 text-[#eb5e41]" />
          <Heading level={3}>Show Components</Heading>
        </Card>
      </div>
    </div>
  );
}

export default HomePage;
