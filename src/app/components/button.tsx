import { LuLoaderCircle } from "react-icons/lu";
import { cn } from "@/app/lib/cn";

type ButtonVariant = "solid" | "outline" | "ghost";
type ButtonColorPalette = "gray" | "orange" | "teal" | "green" | "red";
type Props = {
  loading?: boolean;
  loadingText?: string;
} & (
  | {
      colorPalette?: Extract<
        ButtonColorPalette,
        "orange" | "teal" | "green" | "red"
      >;
      variant?: Extract<ButtonVariant, "solid">;
    }
  | {
      colorPalette?: Extract<ButtonColorPalette, "gray">;
      variant?: ButtonVariant;
    }
) &
  React.ComponentPropsWithoutRef<"button">;

export function Button(props: Props) {
  const {
    loading,
    loadingText,
    colorPalette = "gray",
    variant = "solid",
    className,
    children,
    ...rest
  } = props;
  const disabled = loading || rest.disabled;
  const isSolid = variant === "solid";
  const isOutline = variant === "outline";
  const isGhost = variant === "ghost";

  return (
    <button
      {...rest}
      disabled={disabled}
      className={cn(
        className,
        "inline-flex cursor-pointer items-center justify-center gap-1 rounded-lg border p-2 text-sm font-semibold transition-colors",
        {
          "cursor-default opacity-50": disabled,
        },
        {
          "border-transparent bg-[#21201C] text-white":
            colorPalette === "gray" && isSolid,
        },
        {
          "border-transparent bg-[#eb5e41] text-white":
            colorPalette === "orange" && isSolid,
        },
        {
          "border-transparent bg-[#0d9488] text-white":
            colorPalette === "teal" && isSolid,
        },
        {
          "border-transparent bg-[#38a169] text-white":
            colorPalette === "green" && isSolid,
        },
        {
          "border-transparent bg-[#fd5454] text-white":
            colorPalette === "red" && isSolid,
        },
        {
          "hover:bg-[#21201C]/88":
            colorPalette === "gray" && isSolid && !disabled,
        },
        {
          "hover:bg-[#eb5e41]/88":
            colorPalette === "orange" && isSolid && !disabled,
        },
        {
          "hover:bg-[#0d9488]/88":
            colorPalette === "teal" && isSolid && !disabled,
        },
        {
          "hover:bg-[#38a169]/88":
            colorPalette === "green" && isSolid && !disabled,
        },
        {
          "hover:bg-[#fd5454]/88":
            colorPalette === "red" && isSolid && !disabled,
        },
        {
          "border-[#E9E8E6] text-[#63635E]": isOutline,
        },
        {
          "hover:bg-[#EFEEEC] hover:text-[#21201C]": isOutline && !disabled,
        },
        {
          "border-transparent text-[#63635E]": isGhost,
        },
        {
          "hover:bg-[#EFEEEC] hover:text-[#21201C]": isGhost && !disabled,
        },
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
