import { Button } from "@/components/button";
import { NAVIGATION_GROUPS } from "app/navigation-groups";
import { Link } from "@tanstack/react-router";
import { LuCoffee, LuGithub } from "react-icons/lu";
import { ToggleTheme } from "./toggle-theme";

export function Header() {
  return (
    <header className="border-b-border-subtle sticky top-0 z-10 border-b bg-[#f9f9f8] dark:bg-[#0e0e0e]">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-8">
        <Link
          to={NAVIGATION_GROUPS[0].pages[0].href}
          className="flex items-center gap-2 text-sm"
        >
          <LuCoffee size={16} />
          Hygge-UI
        </Link>
        <div className="flex items-center gap-2">
          <a href="https://github.com/malcodeman/hygge-ui" target="_blank">
            <Button variant="ghost">
              <LuGithub size={16} />
            </Button>
          </a>
          <ToggleTheme />
        </div>
      </div>
    </header>
  );
}
