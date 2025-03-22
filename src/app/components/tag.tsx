import { cn } from "@/app/lib/cn";

type Props = {
  colorPalette?: "gray" | "orange" | "teal" | "green" | "red";
} & React.ComponentPropsWithoutRef<"div">;

export function Tag(props: Props) {
  const { colorPalette = "gray", className, ...rest } = props;

  return (
    <div
      {...rest}
      className={cn(
        "inline-flex h-5 items-center justify-center gap-1 rounded-full px-2 text-xs font-semibold",
        {
          "bg-[#f4f4f5] text-[#27272a] dark:bg-[#18181b] dark:text-[#e4e4e7]":
            colorPalette === "gray",
          "bg-[#ffedd5] text-[#92310a] dark:bg-[#3b1106] dark:text-[#fdba74]":
            colorPalette === "orange",
          "bg-[#ccfbf1] text-[#0c5d56] dark:bg-[#032726] dark:text-[#5eead4]":
            colorPalette === "teal",
          "bg-[#dcfce7] text-[#116932] dark:bg-[#042713] dark:text-[#86efac]":
            colorPalette === "green",
          "bg-[#fee2e2] text-[#991919] dark:bg-[#300c0c] dark:text-[#fca5a5]":
            colorPalette === "red",
        },
        className,
      )}
    />
  );
}
