/// <reference types="vite/client" />;
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/toast";
import { NavLink } from "@/components/nav-link";
import { Heading } from "@/components/heading";
import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import appCss from "../globals.css?url";
import { Header } from "app/components/header";
import { NAVIGATION_GROUPS } from "app/navigation-groups";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      { title: "Hygge UI" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  component: RootLayout,
  notFoundComponent: () => <div>Not found</div>,
});

function RootLayout() {
  return (
    <html className="overscroll-y-none" lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className={`bg-[#fdfdfc] dark:bg-[#111110]`}>
        <ThemeProvider>
          <Header />
          <div className="mx-auto max-w-6xl px-8">
            <aside className="fixed top-[65px] bottom-0 hidden w-2xs overflow-y-auto py-8 lg:block">
              <ul>
                {NAVIGATION_GROUPS.map((link) => (
                  <div key={link.group} className="mb-6">
                    <Heading level={5} size="sm" className="mb-2">
                      {link.group}
                    </Heading>
                    {link.pages.map((content) => (
                      <li key={content.href}>
                        <NavLink
                          href={content.href}
                          className="flex items-center gap-2"
                        >
                          {content.label}
                        </NavLink>
                      </li>
                    ))}
                  </div>
                ))}
              </ul>
            </aside>
            <main className="py-8 lg:pl-72">
              <Outlet />
            </main>
          </div>
          <Toaster />
          <Scripts />
        </ThemeProvider>
      </body>
    </html>
  );
}
