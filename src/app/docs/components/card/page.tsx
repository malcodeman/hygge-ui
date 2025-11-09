/* eslint-disable @next/next/no-img-element */
import { Avatar } from "@/components/avatar";
import { Button } from "@/components/button";
import { Card, CardBody, CardFooter, CardHeader } from "@/components/card";
import { Field } from "@/components/field";
import { Heading } from "@/components/heading";
import { Input } from "@/components/input";
import { Strong, Text } from "@/components/text";
import { PageHeader } from "app/components/page-header";
import { PagePreviewCodeTabs } from "app/components/page-preview-code-tabs";
import { LuCheck, LuX } from "react-icons/lu";

function CardPage() {
  return (
    <>
      <PageHeader
        title="Card"
        description="Used to display content related to a single subject."
        githubLink="https://github.com/malcodeman/hygge-ui/blob/main/src/components/card.tsx"
        className="mb-2"
        verified
      />
      <PagePreviewCodeTabs
        preview={
          <Card className="max-w-xs">
            <CardBody className="gap-2">
              <Avatar
                src="https://picsum.photos/200/300"
                alt="Nue Camp"
                size="lg"
                square
              />
              <Heading level={5}>Nue Camp</Heading>
              <Text>
                This is the card body. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Curabitur nec odio vel dui euismod fermentum.
                Curabitur nec odio vel dui euismod fermentum.
              </Text>
            </CardBody>
            <CardFooter className="justify-end">
              <Button variant="outline">View</Button>
              <Button>Join</Button>
            </CardFooter>
          </Card>
        }
        code={`<Card className="max-w-xs">
  <CardBody className="gap-2">
    <Avatar src="https://picsum.photos/200/300" alt="Nue Camp" size="lg" square />
    <Heading level={5}>Nue Camp</Heading>
    <Text>
      This is the card body. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec odio vel dui euismod fermentum. Curabitur nec odio vel dui euismod fermentum.
    </Text>
  </CardBody>
  <CardFooter className="justify-end">
    <Button variant="outline">View</Button>
    <Button>Join</Button>
  </CardFooter>
</Card>`}
      />
      <Heading level={2} className="mt-10 mb-2">
        Examples
      </Heading>
      <Heading level={3} size="lg" className="mb-2">
        Within Form
      </Heading>
      <Text className="mb-2">
        Use the Card component within a form to group related fields together.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <Card className="max-w-xs">
            <CardHeader>
              <Heading level={5}>Sign up</Heading>
              <Text>Fill in the form below to create an account.</Text>
            </CardHeader>
            <CardBody className="gap-2">
              <Field label="First Name">
                <Input />
              </Field>
              <Field label="Last Name">
                <Input />
              </Field>
            </CardBody>
            <CardFooter className="justify-end">
              <Button variant="ghost">Cancel</Button>
              <Button>Sign up</Button>
            </CardFooter>
          </Card>
        }
        code={`<Card className="max-w-xs">
  <CardHeader>
    <Heading level={5}>Sign up</Heading>
    <Text>Fill in the form below to create an account.</Text>
  </CardHeader>
  <CardBody className="gap-2">
    <Field label="First Name">
      <Input />
    </Field>
    <Field label="Last Name">
      <Input />
    </Field>
  </CardBody>
  <CardFooter className="justify-end">
    <Button variant="ghost">Cancel</Button>
    <Button>Sign up</Button>
  </CardFooter>
</Card>`}
      />
      <Heading level={3} size="lg" className="mt-10 mb-2">
        With Image
      </Heading>
      <Text className="mb-2">Use the Card component to display an image.</Text>
      <PagePreviewCodeTabs
        preview={
          <Card className="max-w-xs overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Green double couch with wooden legs"
            />
            <CardBody className="gap-2">
              <Heading level={5}>Living room Sofa</Heading>
              <Text>
                This sofa is perfect for modern tropical spaces, baroque
                inspired spaces.
              </Text>
              <Strong className="text-2xl">$450</Strong>
            </CardBody>
            <CardFooter>
              <Button>Buy now</Button>
              <Button variant="ghost">Add to cart</Button>
            </CardFooter>
          </Card>
        }
        code={`<Card className="max-w-xs overflow-hidden">
  <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="Green double couch with wooden legs" />
  <CardBody className="gap-2">
    <Heading level={5}>Living room Sofa</Heading>
    <Text>This sofa is perfect for modern tropical spaces, baroque inspired spaces.</Text>
    <Strong className="text-2xl">$450</Strong>
  </CardBody>
  <CardFooter>
    <Button>Buy now</Button>
    <Button variant="ghost">Add to cart</Button>
  </CardFooter>
</Card>`}
      />
      <Heading level={3} size="lg" className="mt-10 mb-2">
        Horizontal
      </Heading>
      <Text className="mb-2">
        Use the Card component to display content horizontally.
      </Text>
      <PagePreviewCodeTabs
        preview={
          <Card className="max-w-xl flex-row overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
              alt="Caffe Latte"
              className="max-w-48 object-cover"
            />
            <div>
              <CardBody className="gap-2">
                <Heading level={5}>The perfect latte</Heading>
                <Text>
                  Caffè latte is a coffee beverage of Italian origin made with
                  espresso and steamed milk.
                </Text>
              </CardBody>
              <CardFooter>
                <Button>Buy Latte</Button>
              </CardFooter>
            </div>
          </Card>
        }
        code={`<Card className="max-w-xl flex-row overflow-hidden">
  <img src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60" alt="Caffe Latte" className="max-w-48 object-cover" />
  <div>
    <CardBody className="gap-2">
      <Heading level={5}>The perfect latte</Heading>
      <Text>Caffè latte is a coffee beverage of Italian origin made with espresso and steamed milk.</Text>
    </CardBody>
    <CardFooter>
      <Button>Buy Latte</Button>
    </CardFooter>
  </div>
</Card>`}
      />
      <Heading level={3} size="lg" className="mt-10 mb-2">
        With Avatar
      </Heading>
      <Text className="mb-2">Use the Card component to display an avatar.</Text>
      <PagePreviewCodeTabs
        preview={
          <Card className="max-w-xs">
            <CardBody className="gap-2">
              <div className="flex items-center gap-2">
                <Avatar
                  src="https://images.unsplash.com/photo-1511806754518-53bada35f930"
                  size="md"
                />
                <div className="flex flex-col">
                  <Strong>Nate Foss</Strong>
                  <Text>@natefoss</Text>
                </div>
              </div>
              <Text>
                <Strong>Nate Foss</Strong> has requested to join your team. You
                can approve or decline their request.
              </Text>
            </CardBody>
            <CardFooter>
              <Button variant="ghost" className="flex-1">
                <LuX size={16} /> Decline
              </Button>
              <Button className="flex-1">
                <LuCheck size={16} /> Approve
              </Button>
            </CardFooter>
          </Card>
        }
        code={`<Card className="max-w-xs">
  <CardBody className="gap-2">
    <div className="flex items-center gap-2">
      <Avatar src="https://images.unsplash.com/photo-1511806754518-53bada35f930" size="md" />
      <div className="flex flex-col">
        <Strong>Nate Foss</Strong>
        <Text>@natefoss</Text>
      </div>
    </div>
    <Text>
      <Strong>Nate Foss</Strong> has requested to join your team. You can approve or decline their request.
    </Text>
  </CardBody>
  <CardFooter>
    <Button variant="ghost" className="flex-1">
      <LuX size={16} /> Decline
    </Button>
    <Button className="flex-1">
      <LuCheck size={16} /> Approve
    </Button>
  </CardFooter>
</Card>`}
      />
    </>
  );
}

export default CardPage;
