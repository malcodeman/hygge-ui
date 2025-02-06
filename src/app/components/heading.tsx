import { cn } from "@/app/lib/cn";

type Props = {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
} & React.ComponentPropsWithoutRef<"h1" | "h2" | "h3" | "h4" | "h5" | "h6">;

export function Heading(props: Props) {
  const { level = 1, className, ...rest } = props;
  const Element: `h${typeof level}` = `h${level}`;

  return (
    <Element
      {...rest}
      className={cn(className, "font-semibold text-[#21201C]", {
        "text-4xl": level === 1,
        "text-2xl": level === 2,
        "text-xl": level === 3,
        "text-lg": level === 4,
        "text-base": level === 5,
        "text-sm": level === 6,
      })}
    />
  );
}
