import {
  RatingGroup as ArkRatingGroup,
  RatingGroupRootProps,
} from "@ark-ui/react";
import { cn } from "@/app/lib/cn";
import { LuStar } from "react-icons/lu";

type Props = {
  label?: React.ReactNode;
  colorPallete?: "gray" | "orange" | "teal" | "green" | "red";
} & RatingGroupRootProps;

export function Rating(props: Props) {
  const { label, colorPallete = "gray", className, ...rest } = props;

  return (
    <ArkRatingGroup.Root
      className={cn("flex flex-col gap-1", className)}
      {...rest}
    >
      {label ? (
        <ArkRatingGroup.Label className="text-sm font-semibold text-[#21201c] dark:text-[#eeeeec]">
          {label}
        </ArkRatingGroup.Label>
      ) : null}
      <ArkRatingGroup.Control className="flex gap-1">
        <ArkRatingGroup.Context>
          {({ items }) =>
            items.map((item) => (
              <ArkRatingGroup.Item
                key={item}
                index={item}
                className="cursor-pointer"
              >
                <ArkRatingGroup.ItemContext>
                  {({ highlighted }) => (
                    <LuStar
                      size={16}
                      className={cn(
                        "fill-[#e9e8e6] stroke-[#e9e8e6] dark:fill-[#2a2a28] dark:stroke-[#2a2a28]",
                        colorPallete === "gray" && highlighted
                          ? "fill-[#21201C] stroke-[#21201C] dark:fill-[#eeeeec] dark:stroke-[#eeeeec]"
                          : undefined,
                        colorPallete === "orange" && highlighted
                          ? "fill-[#eb5e41] stroke-[#eb5e41] dark:fill-[#eb5e41] dark:stroke-[#eb5e41]"
                          : undefined,
                        colorPallete === "teal" && highlighted
                          ? "fill-[#0d9488] stroke-[#0d9488] dark:fill-[#0d9488] dark:stroke-[#0d9488]"
                          : undefined,
                        colorPallete === "green" && highlighted
                          ? "fill-[#38a169] stroke-[#38a169] dark:fill-[#38a169] dark:stroke-[#38a169]"
                          : undefined,
                        colorPallete === "red" && highlighted
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
