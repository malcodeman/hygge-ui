import { LuLoaderCircle } from "react-icons/lu";
import { cn } from "@/app/lib/cn";

type ButtonVariant = "solid" | "outline" | "ghost";
type ButtonColorPalette = "gray" | "orange" | "teal" | "green" | "red";
type Props = {
  loading?: boolean;
  loadingText?: string;
} & (
  | { colorPalette?: Exclude<ButtonColorPalette, "gray">; variant?: "solid" }
  | { colorPalette?: "gray"; variant?: ButtonVariant }
) &
  React.ComponentPropsWithoutRef<"button">;

export function Button({
  loading,
  loadingText,
  colorPalette = "gray",
  variant = "solid",
  className,
  children,
  disabled,
  ...rest
}: Props) {
  return (
    <button
      {...rest}
      disabled={disabled || loading}
      className={cn(
        "inline-flex cursor-pointer items-center justify-center gap-1 rounded-sm border p-2 text-sm font-semibold transition-colors focus:outline-2 focus:-outline-offset-1 disabled:cursor-default disabled:opacity-50",
        variant === "solid" &&
          {
            gray: "border-transparent bg-[#21201C] text-white not-disabled:hover:bg-[#21201C]/88 dark:bg-[#eeeeec] dark:text-[#191918] not-disabled:dark:hover:bg-[#eeeeec]/88",
            orange:
              "border-transparent bg-[#eb5e41] text-white not-disabled:hover:bg-[#eb5e41]/88",
            teal: "border-transparent bg-[#0d9488] text-white not-disabled:hover:bg-[#0d9488]/88",
            green:
              "border-transparent bg-[#38a169] text-white not-disabled:hover:bg-[#38a169]/88",
            red: "border-transparent bg-[#fd5454] text-white not-disabled:hover:bg-[#fd5454]/88",
          }[colorPalette],
        variant === "outline" &&
          "border-[#cfceca] text-[#21201C] not-disabled:hover:bg-[#25250007] dark:border-[#494844] dark:text-[#eeeeec] not-disabled:hover:dark:bg-[#f4f4f309]",
        variant === "ghost" &&
          "border-transparent text-[#21201C] not-disabled:hover:bg-[#20100010] dark:text-[#eeeeec] not-disabled:hover:dark:bg-[#f6f6f513]",
        className,
      )}
    >
      {loading ? (
        <>
          <LuLoaderCircle size={16} className="animate-spin" />
          {loadingText ?? children}
        </>
      ) : (
        children
      )}
    </button>
  );
}
