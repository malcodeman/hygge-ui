"use client";
import {
  RatingGroup as ArkRatingGroup,
  RatingGroupRootProps,
} from "@ark-ui/react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "./cn";
import { LuStar } from "react-icons/lu";

const ratingControlVariants = cva("flex gap-1", {
  variants: {
    size: {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-md",
      lg: "text-lg",
      xl: "text-xl",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

type Props = VariantProps<typeof ratingControlVariants> & {
  label?: React.ReactNode;
  colorPalette?: "gray" | "orange" | "teal" | "green" | "red";
} & RatingGroupRootProps;

export function Rating(props: Props) {
  const { label, size, colorPalette, className, ...rest } = props;

  return (
    <ArkRatingGroup.Root
      className={cn("flex flex-col gap-1", className)}
      {...rest}
    >
      {label ? (
        <ArkRatingGroup.Label className="text-fg-default text-sm font-semibold">
          {label}
        </ArkRatingGroup.Label>
      ) : null}
      <ArkRatingGroup.Control className={ratingControlVariants({ size })}>
        <ArkRatingGroup.Context>
          {({ items }) =>
            items.map((item) => (
              <ArkRatingGroup.Item
                key={item}
                index={item}
                className="cursor-pointer focus:outline-2 focus:-outline-offset-1 data-[readonly]:cursor-default"
              >
                <ArkRatingGroup.ItemContext>
                  {({ highlighted }) => (
                    <LuStar
                      className={cn(
                        "fill-[#e9e8e6] stroke-[#e9e8e6] dark:fill-[#2a2a28] dark:stroke-[#2a2a28]",
                        colorPalette === "gray" && highlighted
                          ? "fill-[#21201C] stroke-[#21201C] dark:fill-[#eeeeec] dark:stroke-[#eeeeec]"
                          : undefined,
                        colorPalette === "orange" && highlighted
                          ? "fill-[#eb5e41] stroke-[#eb5e41] dark:fill-[#eb5e41] dark:stroke-[#eb5e41]"
                          : undefined,
                        colorPalette === "teal" && highlighted
                          ? "fill-[#0d9488] stroke-[#0d9488] dark:fill-[#0d9488] dark:stroke-[#0d9488]"
                          : undefined,
                        colorPalette === "green" && highlighted
                          ? "fill-[#38a169] stroke-[#38a169] dark:fill-[#38a169] dark:stroke-[#38a169]"
                          : undefined,
                        colorPalette === "red" && highlighted
                          ? "fill-[#fd5454] stroke-[#fd5454] dark:fill-[#fd5454] dark:stroke-[#fd5454]"
                          : undefined,
                      )}
                    />
                  )}
                </ArkRatingGroup.ItemContext>
              </ArkRatingGroup.Item>
            ))
          }
        </ArkRatingGroup.Context>
        <ArkRatingGroup.HiddenInput />
      </ArkRatingGroup.Control>
    </ArkRatingGroup.Root>
  );
}
