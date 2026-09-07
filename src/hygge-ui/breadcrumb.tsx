import { Fragment } from "react";
import { cva } from "class-variance-authority";
import { cn } from "./cn";
import { TextLink } from "./text";

const breadcrumbVariants = cva("flex items-center", {
  variants: {
    size: {
      sm: "gap-1 text-xs/6",
      md: "gap-1.5 text-sm/6",
      lg: "gap-2 text-base/6",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

type BreadcrumbProps = React.ComponentPropsWithoutRef<"nav"> & {
  items: {
    title: React.ReactNode;
    url?: string;
  }[];
  separator?: React.ReactNode;
  size?: "sm" | "md" | "lg";
};

export function Breadcrumb(props: BreadcrumbProps) {
  const { items, separator = "/", size = "md", ...rest } = props;

  return (
    <nav {...rest}>
      <ol className={cn(breadcrumbVariants({ size }))}>
        {items.map((item, index) => {
          const last = index === items.length - 1;

          return (
            <Fragment key={index}>
              <li className="inline-flex items-center">
                {last ? (
                  <span className="text-fg-default">{item.title}</span>
                ) : item.url ? (
                  <TextLink href={item.url}>{item.title}</TextLink>
                ) : (
                  <span>{item.title}</span>
                )}
              </li>
              {last ? null : <li>{separator}</li>}
            </Fragment>
          );
        })}
      </ol>
    </nav>
  );
}
