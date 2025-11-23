import { cva, VariantProps } from "class-variance-authority";
import { Text } from "./text";
import { cn } from "./cn";

const separatorVariants = cva(undefined, {
  variants: {
    colorPalette: {
      gray: `border-[#E9E8E6] dark:border-[#2a2a28]`,
      orange: `border-[#ffedd5] dark:border-[#3b1106]`,
      teal: `border-[#ccfbf1] dark:border-[#032726]`,
      green: `border-[#dcfce7] dark:border-[#042713]`,
      red: `border-[#fee2e2] dark:border-[#300c0c]`,
    },
    size: {
      xs: "",
      sm: "",
      md: "",
      lg: "",
    },
    variant: {
      solid: "border-solid",
      dashed: "border-dashed",
      dotted: "border-dotted",
    },
    orientation: {
      horizontal: "w-full border-t",
      vertical: "h-full border-l",
    },
  },
  defaultVariants: {
    colorPalette: "gray",
    size: "sm",
    variant: "solid",
    orientation: "horizontal",
  },
  compoundVariants: [
    { orientation: "horizontal", size: "xs", className: "border-t-[0.5px]" },
    { orientation: "horizontal", size: "sm", className: "border-t-[1px]" },
    { orientation: "horizontal", size: "md", className: "border-t-[2px]" },
    { orientation: "horizontal", size: "lg", className: "border-t-[3px]" },
    { orientation: "vertical", size: "xs", className: "border-l-[0.5px]" },
    { orientation: "vertical", size: "sm", className: "border-l-[1px]" },
    { orientation: "vertical", size: "md", className: "border-l-[2px]" },
    { orientation: "vertical", size: "lg", className: "border-l-[3px]" },
  ],
});

type Props = VariantProps<typeof separatorVariants> & {
  label?: React.ReactNode;
  labelPlacement?: "start" | "center" | "end";
} & React.ComponentPropsWithoutRef<"div">;

export function Separator(props: Props) {
  const {
    colorPalette,
    size,
    variant,
    orientation,
    label,
    labelPlacement,
    className,
    ...rest
  } = props;

  if (label) {
    return (
      <div {...rest} className={cn(`flex items-center gap-2 ${className}`)}>
        {labelPlacement === "start" && (
          <>
            <Text className="shrink-0">{label}</Text>
            <div
              className={separatorVariants({
                colorPalette,
                size,
                variant,
                orientation,
              })}
            />
          </>
        )}
        {labelPlacement === "center" && (
          <>
            <div
              className={separatorVariants({
                colorPalette,
                size,
                variant,
                orientation,
              })}
            />
            <Text className="shrink-0">{label}</Text>
            <div
              className={separatorVariants({
                colorPalette,
                size,
                variant,
                orientation,
              })}
            />
          </>
        )}
        {labelPlacement === "end" && (
          <>
            <div
              className={separatorVariants({
                colorPalette,
                size,
                variant,
                orientation,
              })}
            />
            <Text className="shrink-0">{label}</Text>
          </>
        )}
      </div>
    );
  }

  return (
    <div
      {...rest}
      className={cn(
        separatorVariants({
          colorPalette,
          size,
          variant,
          orientation,
        }),
        className,
      )}
    />
  );
}
