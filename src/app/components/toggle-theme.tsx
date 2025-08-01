"use client";
import { Button } from "@/components/button";
import { useTheme } from "next-themes";
import { LuMoon, LuSun } from "react-icons/lu";

export function ToggleTheme() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? <LuSun size={16} /> : <LuMoon size={16} />}
    </Button>
  );
}
