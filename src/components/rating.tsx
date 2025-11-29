"use client";
import {
  RatingGroup as ArkRatingGroup,
  RatingGroupRootProps,
} from "@ark-ui/react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "./cn";
import { LuStar, LuStarHalf } from "react-icons/lu";

const ratingControlVariants = cva("flex gap-1", {
  variants: {
    size: {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
      xl: "text-xl",
    },
  },
  defaultVariants: {
    size: "md",
  },
});
const ratingItemVariants = cva(
  "cursor-pointer text-[#e9e8e6] focus:outline-2 focus:-outline-offset-1 data-[readonly]:cursor-default dark:text-[#2a2a28]",
  {
    variants: {
      colorPalette: {
        gray: `data-[highlighted]:text-[#21201C] dark:data-[highlighted]:text-[#eeeeec]`,
        orange: `data-[highlighted]:text-[#eb5e41] dark:data-[highlighted]:text-[#eb5e41]`,
        teal: `data-[highlighted]:text-[#0d9488] dark:data-[highlighted]:text-[#0d9488]`,
        green: `data-[highlighted]:text-[#38a169] dark:data-[highlighted]:text-[#38a169]`,
        red: `data-[highlighted]:text-[#fd5454] dark:data-[highlighted]:text-[#fd5454]`,
      },
    },
    defaultVariants: {
      colorPalette: "gray",
    },
  },
);

type Props = VariantProps<typeof ratingControlVariants> &
  VariantProps<typeof ratingItemVariants> & {
    label?: React.ReactNode;
    labelPlacement?: "start" | "end";
  } & RatingGroupRootProps;

export function Rating(props: Props) {
  const {
    label,
    labelPlacement = "start",
    size,
    colorPalette,
    className,
    ...rest
  } = props;

  return (
    <ArkRatingGroup.Root
      {...rest}
      className={cn("inline-flex items-center gap-2", className)}
    >
      {label && labelPlacement === "start" ? (
        <ArkRatingGroup.Label className="text-fg-default text-sm/6 font-semibold">
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
                className={ratingItemVariants({ colorPalette })}
              >
                <ArkRatingGroup.ItemContext>
                  {({ half }) =>
                    half ? (
                      <LuStarHalf className="fill-current" />
                    ) : (
                      <LuStar className="fill-current" />
                    )
                  }
                </ArkRatingGroup.ItemContext>
              </ArkRatingGroup.Item>
            ))
          }
        </ArkRatingGroup.Context>
      </ArkRatingGroup.Control>
      <ArkRatingGroup.HiddenInput />
      {label && labelPlacement === "end" ? (
        <ArkRatingGroup.Label className="text-fg-default text-sm/6 font-semibold">
          {label}
        </ArkRatingGroup.Label>
      ) : null}
    </ArkRatingGroup.Root>
  );
}
