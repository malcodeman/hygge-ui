import { cn } from "../lib/cn";

type Props = {
  colorPalette?: "gray" | "orange" | "teal" | "green" | "red";
} & React.ComponentPropsWithoutRef<"div">;

export function Tag(props: Props) {
  const { colorPalette = "gray", className, ...rest } = props;

  return (
    <div
      {...rest}
      className={cn(
        className,
        "inline-flex h-5 items-center justify-center gap-1 rounded-full px-2 text-xs font-semibold",
        {
          "bg-[#EFEEEC] text-[#21201C]": colorPalette === "gray",
          "bg-[#ffedd5] text-[#92310a]": colorPalette === "orange",
          "bg-[#ccfbf1] text-[#0c5d56]": colorPalette === "teal",
          "bg-[#dcfce7] text-[#116932]": colorPalette === "green",
          "bg-[#fee2e2] text-[#991919]": colorPalette === "red",
        },
      )}
    />
  );
}
