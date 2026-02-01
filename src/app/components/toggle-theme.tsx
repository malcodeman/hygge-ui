import { Button } from "@/components/button";
import { useIsMounted } from "app/hooks/use-is-mounted";
import { useTheme } from "next-themes";
import { LuMoon, LuSun } from "react-icons/lu";

export function ToggleTheme() {
  const { theme, setTheme } = useTheme();
  const isMounted = useIsMounted();

  if (isMounted) {
    return (
      <Button
        variant="ghost"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {theme === "light" ? <LuSun size={16} /> : <LuMoon size={16} />}
      </Button>
    );
  }

  return <div className="size-8.5" />;
}
