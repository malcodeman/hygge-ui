import { Button } from "@/components/button";
import { NAVIGATION_GROUPS } from "app/navigation-groups";
import Link from "next/link";
import { LuCoffee, LuGithub } from "react-icons/lu";
import { ToggleTheme } from "./toggle-theme";

export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-b-[#e9e8e6] bg-white dark:border-b-[#2a2a28] dark:bg-[#191918]">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-8">
        <Link
          href={NAVIGATION_GROUPS[0].pages[0].href}
          className="flex items-center gap-2 text-sm"
        >
          <LuCoffee size={16} />
          Hygge-UI
        </Link>
        <div className="flex items-center gap-2">
          <Link href="https://github.com/malcodeman/hygge-ui" target="_blank">
            <Button variant="ghost">
              <LuGithub size={16} />
            </Button>
          </Link>
          <ToggleTheme />
        </div>
      </div>
    </header>
  );
}
