import { Field } from "@ark-ui/react";
import { cva, type VariantProps } from "class-variance-authority";
import { Children, cloneElement, isValidElement } from "react";
import { cn } from "./cn";

const inputVariants = cva(
  "text-fg-default focus-visible:outline-fg-default w-full rounded-sm border bg-transparent transition-colors placeholder:text-[#21201C]/50 focus-visible:relative focus-visible:z-10 focus-visible:outline-2 focus-visible:-outline-offset-1 disabled:cursor-not-allowed disabled:opacity-50 data-invalid:border-[#fd5454] data-invalid:focus:outline-[#fd5454] dark:placeholder:text-[#eeeeec]/50",
  {
    variants: {
      variant: {
        subtle: "border-transparent bg-[#21201c]/8 dark:bg-[#eeeeec]/8",
        outline: "border-border-default",
      },
      size: {
        xs: "h-8 px-1 text-xs",
        sm: "h-9 px-2 text-sm",
        md: "h-10 px-2 text-sm",
        lg: "h-11 px-3 text-base",
        xl: "h-12 px-3 text-base",
      },
    },
    defaultVariants: {
      variant: "subtle",
      size: "md",
    },
  },
);

type Props = Omit<React.ComponentPropsWithRef<"input">, "size"> &
  VariantProps<typeof inputVariants>;

export function Input(props: Props) {
  const { variant, size, className, ...rest } = props;

  return (
    <Field.Input
      {...rest}
      className={cn(inputVariants({ variant, size }), className)}
    />
  );
}

type InputGroupStartProps =
  | {
      startElement?: React.ReactNode;
      startAddon?: never;
    }
  | {
      startElement?: never;
      startAddon?: React.ReactNode;
    };
type InputGroupEndProps =
  | {
      endElement?: React.ReactNode;
      endAddon?: never;
    }
  | {
      endElement?: never;
      endAddon?: React.ReactNode;
    };
type InputGroupProps = React.ComponentPropsWithRef<"div"> &
  InputGroupStartProps &
  InputGroupEndProps;

export function InputGroup(props: InputGroupProps) {
  const {
    className,
    startElement,
    startAddon,
    children,
    endElement,
    endAddon,
    ...rest
  } = props;

  return (
    <div
      {...rest}
      className={cn(
        "relative isolate inline-flex w-full items-center",
        className,
      )}
    >
      {startElement ? (
        <div className="absolute flex items-center justify-center px-3 text-sm">
          {startElement}
        </div>
      ) : null}
      {startAddon ? (
        <div
          className={cn(
            "border-border-default flex items-center self-stretch rounded-s-sm rounded-e-none border bg-[#21201c]/8 px-3 text-sm dark:bg-[#eeeeec]/8",
          )}
        >
          {startAddon}
        </div>
      ) : null}
      {Children.map(children, (child) => {
        if (!isValidElement<{ className?: string }>(child)) {
          return child;
        }

        return cloneElement(child, {
          className: cn(
            {
              "ps-10": startElement,
              "pe-10": endElement,
              "rounded-s-none border-s-0": startAddon,
              "rounded-e-none border-e-0": endAddon,
            },
            child.props.className,
          ),
        });
      })}
      {endElement ? (
        <div className="absolute end-0 flex items-center justify-center px-3 text-sm">
          {endElement}
        </div>
      ) : null}
      {endAddon ? (
        <div
          className={cn(
            "border-border-default flex items-center self-stretch rounded-s-none rounded-e-sm border bg-[#21201c]/8 px-3 text-sm dark:bg-[#eeeeec]/8",
          )}
        >
          {endAddon}
        </div>
      ) : null}
    </div>
  );
}
