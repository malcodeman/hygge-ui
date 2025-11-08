import { LuComponent, LuDownload } from "react-icons/lu";
import { Card, CardBody } from "@/components/card";
import { Heading } from "@/components/heading";
import { Text } from "@/components/text";
import Link from "next/link";
import { NAVIGATION_GROUPS } from "app/navigation-groups";

function IntroductionPage() {
  return (
    <>
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
          <CardBody>
            <LuDownload size={24} className="mb-4 text-[#eb5e41]" />
            <Heading level={3} size="lg">
              Download .zip file
            </Heading>
          </CardBody>
        </Card>
        <Link href={NAVIGATION_GROUPS[2].pages[0].href}>
          <Card className="cursor-pointer transition-colors hover:border-[#eb5e41]">
            <CardBody>
              <LuComponent size={24} className="mb-4 text-[#eb5e41]" />
              <Heading level={3} size="lg">
                Show Components
              </Heading>
            </CardBody>
          </Card>
        </Link>
      </div>
    </>
  );
}

export default IntroductionPage;
